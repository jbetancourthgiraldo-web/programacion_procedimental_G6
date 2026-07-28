function ValidarInformacion() {
    
    let nombre_completo = document.getElementById("nombre_completo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let email = document.getElementById("email").value.trim();
    let metodo_pago = document.getElementById("metodo_pago").value;
    let pedido = document.getElementById("pedido").value.trim();
    let referencias = document.getElementById("referencias").value.trim();

    
    if (!nombre_completo || !telefono || !direccion || !email || !metodo_pago || !pedido || !referencias) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos incompletos",
            showConfirmButton: false,
            timer: 1500
        });
        return; // Detiene la ejecución si falta algún campo
    }

   
    console.log(
        `Información del pedido: \n` +
        `Nombre: ${nombre_completo} \n` +
        `Teléfono: ${telefono} \n` +
        `Dirección: ${direccion} \n` +
        `Email: ${email} \n` +
        `Método de pago: ${metodo_pago} \n` +
        `Pedido: ${pedido} \n` +
        `Referencias: ${referencias}`
    );

   
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre_completo)) {
        console.log("El nombre debe contener solo letras");
        Swal.fire({
            title: "El nombre debe contener solo letras y espacios",
            icon: "error"
        });
        return;
    }

   
    if (!/^\d{7,15}$/.test(telefono)) {
        console.log("El teléfono debe contener solo números");
        Swal.fire({
            title: "El teléfono debe contener un número válido (entre 7 y 15 dígitos)",
            icon: "error"
        });
        return;
    }

   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("El correo electrónico debe ser válido");
        Swal.fire({
            title: "Ingrese un correo electrónico válido",
            icon: "error"
        });
        return;
    }

  
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Pedido enviado correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}


document.getElementById("btnGuardar").onclick = ValidarInformacion;