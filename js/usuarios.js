function ValidarInformacion() {
    
    let nombre_completo = document.getElementById("nombre_completo").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let producto_favorito = document.getElementById("producto_favorito").value.trim();
    let comentarios_adicionales = document.getElementById("comentarios_adicionales").value.trim();

    
    if (!nombre_completo || !email || !telefono || !direccion || !producto_favorito) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos incompletos",
            showConfirmButton: false,
            timer: 1500
        });
        return; 
    }

    console.log(
        `Información del usuario: \n` +
        `Nombre: ${nombre_completo} \n` +
        `Email: ${email} \n` +
        `Teléfono: ${telefono} \n` +
        `Dirección: ${direccion} \n` +
        `Producto Favorito: ${producto_favorito} \n` +
        `Comentarios: ${comentarios_adicionales}`
    );

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre_completo)) {
        console.log("El nombre debe contener solo letras");
        Swal.fire({
            title: "El nombre debe contener solo letras y espacios",
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

    if (!/^\d{7,15}$/.test(telefono)) {
        console.log("El teléfono debe contener solo números");
        Swal.fire({
            title: "El número de teléfono debe contener solo números (entre 7 y 15 dígitos)",
            icon: "error"
        });
        return;
    }
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información guardada correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;