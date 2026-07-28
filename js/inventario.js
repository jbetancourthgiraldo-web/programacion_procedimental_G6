function ValidarInformacion() {
    
    let nombre_producto = document.getElementById("nombre_producto").value.trim();
    let categoria_producto = document.getElementById("categoria_producto").value;
    let precio_unitario = document.getElementById("precio_unitario").value.trim();
    let descripcion_producto = document.getElementById("descripcion_producto").value.trim();
    let presentacion_producto = document.getElementById("presentacion_producto").value.trim();
    let marca_producto = document.getElementById("marca_producto").value.trim();
    let cantidad_producto = document.getElementById("cantidad_producto").value.trim();

  
    if (!nombre_producto || !categoria_producto || !precio_unitario || !descripcion_producto || !presentacion_producto || !marca_producto || !cantidad_producto) {
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
        `Información del producto: \n` +
        `Nombre: ${nombre_producto} \n` +
        `Categoría: ${categoria_producto} \n` +
        `Precio: ${precio_unitario} \n` +
        `Descripción: ${descripcion_producto} \n` +
        `Presentación: ${presentacion_producto} \n` +
        `Marca: ${marca_producto} \n` +
        `Cantidad: ${cantidad_producto}`
    );

   
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/.test(nombre_producto)) {
        Swal.fire({
            title: "El nombre del producto solo debe contener letras o números",
            icon: "error"
        });
        return;
    }

   
    if (!/^\d+(\.\d{1,2})?$/.test(precio_unitario)) {
        Swal.fire({
            title: "El precio unitario debe ser un número válido",
            icon: "error"
        });
        return;
    }

    
    if (!/^\d+$/.test(cantidad_producto)) {
        Swal.fire({
            title: "La cantidad debe ser un número entero",
            icon: "error"
        });
        return;
    }

   
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/.test(marca_producto)) {
        Swal.fire({
            title: "La marca debe contener texto válido",
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