function ValidarInformacion() {

    let nombre_completo = document.getElementById("nombre_completo").value;
    let correo_electronico = document.getElementById("correo_electronico").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let producto_favorito = document.getElementById("producto_favorito").value;
    let comentarios_adicionales = document.getElementById("comentarios_adicionales").value;

    if (
        !nombre_completo ||
        !correo_electronico ||
        !telefono ||
        !direccion ||
        !producto_favorito ||
        !comentarios_adicionales
    ) {

        console.log(
            `Información del Cliente:

Nombre Completo: ${nombre_completo}
Correo Electrónico: ${correo_electronico}
Teléfono: ${telefono}
Dirección: ${direccion}
Producto Favorito: ${producto_favorito}
Comentarios Adicionales: ${comentarios_adicionales}`
        );

        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });

    } else {

        console.log(
            `Información del Cliente:

Nombre Completo: ${nombre_completo}
Correo Electrónico: ${correo_electronico}
Teléfono: ${telefono}
Dirección: ${direccion}
Producto Favorito: ${producto_favorito}
Comentarios Adicionales: ${comentarios_adicionales}`
        );

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Información Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });

    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;