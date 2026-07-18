function ValidarInformacion() {

    let nombre_completo = document.getElementById("nombre_completo").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let correo_electronico = document.getElementById("correo_electronico").value;
    let metodo_pago = document.getElementById("metodo_pago").value;
    let pedidos = document.getElementById("pedidos").value;
    let referencias = document.getElementById("referencias").value;

    if (
        !nombre_completo ||
        !telefono ||
        !direccion ||
        !correo_electronico ||
        !metodo_pago ||
        !pedidos ||
        !referencias
    ) {

        console.log(
            `Información del Cliente:
            
Nombre Completo: ${nombre_completo}
Número de Teléfono: ${telefono}
Dirección: ${direccion}
Correo Electrónico: ${correo_electronico}
Método de Pago: ${metodo_pago}
Pedidos: ${pedidos}
Referencias: ${referencias}`
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
Número de Teléfono: ${telefono}
Dirección: ${direccion}
Correo Electrónico: ${correo_electronico}
Método de Pago: ${metodo_pago}
Pedidos: ${pedidos}
Referencias: ${referencias}`
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