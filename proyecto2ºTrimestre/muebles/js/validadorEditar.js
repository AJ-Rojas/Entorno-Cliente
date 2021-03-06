function validarNombre() {
    let inputNombre = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "muebles/servidor/validadorAjax.php",
        data: { nombre: inputNombre },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.nombre);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



function validarTipo() {
    let inputTipo = $("#tipo").val();
    let input = $("#tipo");

    $.ajax({
        url: "muebles/servidor/validadorAjax.php",
        data: { tipo: inputTipo },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.tipo);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarTamanio() {
    let inputTamanio = $("#tamanio").val();
    let input = $("#tamanio");

    $.ajax({
        url: "muebles/servidor/validadorAjax.php",
        data: { tamanio: inputTamanio },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.tamanio);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}


function validarDescripcion() {
    let inputDescripcion = $("#descripcion").val();
    let input = $("#descripcion");

    $.ajax({
        url: "muebles/servidor/validadorAjax.php",
        data: { descripcion: inputDescripcion },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.descripcion);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarPrecio() {
    let inputPrecio = $("#precio").val();
    let input = $("#precio");

    $.ajax({
        url: "muebles/servidor/validadorAjax.php",
        data: { precio: inputPrecio },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.precio);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}


function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputNombre = $("#nombre");
    let inputTipo = $("#tipo");
    let inputTamanio = $("#tamanio");
    let inputDescripcion = $("#descripcion");
    let inputPrecio = $("#precio");

    $.ajax({
        url: "muebles/servidor/validadorAjax.php",
        data: { nombre: inputNombre.val(), tipo: inputTipo.val(), tamanio: inputTamanio.val(), descripcion: inputDescripcion.val(), precio: inputPrecio.val() },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputNombre, text.nombre);
            gestionarErrores(inputTipo, text.tipo);
            gestionarErrores(inputTamanio, text.tamanio);
            gestionarErrores(inputDescripcion, text.descripcion);
            gestionarErrores(inputPrecio, text.precio);

            if (gestionarErrores(inputNombre, text.nombre) === false &&
                gestionarErrores(inputTipo, text.tipo) === false &&
                gestionarErrores(inputTamanio, text.tamanio) === false &&
                gestionarErrores(inputDescripcion, text.descripcion) === false &&
                gestionarErrores(inputPrecio, text.precio) === false) {
                $.ajax({
                    url: "muebles/servidor/editarMueble.php",
                    data: { nombre: inputNombre.val(), tipo: inputTipo.val(), tamanio: inputTamanio.val(),  descripcion: inputDescripcion.val(), precio: inputPrecio.val() },
                    method: "POST",
                    dataType: "JSON",
                });
                $("#resultado").html("Se ha actualizado correctamente");
            }

        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}


function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}