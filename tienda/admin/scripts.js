$(document).ready(function() {
    setDataTable();
    setupValidation();
});

function setupValidation() {
    $('#frm').validate({
        rules: {
            name: {
                required: true
            },
            lastname: {
                required: true
            },
            age: {
                required: true
            },
            email: {
                required: true
            },
            address: {
                required: true
            },
            phone: {
                required: true
            },


        },
        submitHandler: function(form) {
            addData();
        },
        invalidHandler: function(form) {
            $.notify({
                message: 'Introduce bien los datos, por favor'
            }, {
                type: 'danger'
            });
        }
    });
}

function addData() {
    var newRow = [
        $('#name').val(),
        $('#lastname').val(),
        $('#age').val(),
        $('#email').val(),
        $('#address').val(),
        $('#phone').val()
    ]
    data.push(newRow);
    setDataTable();
    $('#frm')[0].reset();
    $.notify({
        message: 'Datos ingresados con exito'
    }, {
        type: 'success'
    });
}

var columns = [{
        title: 'Nombre'
    },
    {
        title: 'Apellido'
    },
    {
        title: 'Edad'
    },
    {
        title: 'Email'
    },
    {
        title: 'Direccion'
    },
    {
        title: 'Telefono'
    },
    {
        title: 'Acciones',
        data: 'id',
        render: function(e) {
            return '<button type="button" onclick="deleteRow(' + e + ')" class="btn btn-danger">Eliminar</button>' +
                '<button type="button" onclick="editRow(' + e + ')" class="btn btn-success">Editar</button>';
        }
    }
];

var data = [];

function setDataTable() {
    $('#tbl').DataTable({
        dom: 'Bfrtip',
        data: data,
        columns: columns,
        destroy: true,
        language: {
            url: 'json/es.json'
        },
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
}