crear validaciones que todos los campos tengan informacion  
validar variables independientes 


document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.querySelectorAll("#input")[0].value.trim();
    const categoria = document.querySelectorAll("#input")[1].value.trim();
    const precio = document.querySelectorAll("#input")[2].value.trim();
    const descripcion = document.getElementById("textarea").value.trim();
    const presentacion = document.querySelectorAll("#input")[3].value.trim();
    const marca = document.querySelectorAll("#input")[4].value.trim();
    const cantidad = document.querySelectorAll("#input")[5].value.trim();

  
    if (nombre === "") {
        alert("Debe ingresar el nombre del producto.");
        return;
    }

    if (categoria === "") {
        alert("Debe ingresar la categoría.");
        return;
    }

    if (precio === "") {
        alert("Debe ingresar el precio.");
        return;
    }

    if (descripcion === "") {
        alert("Debe ingresar la descripción.");
        return;
    }

    if (presentacion === "") {
        alert("Debe ingresar la presentación.");
        return;
    }

    if (marca === "") {
        alert("Debe ingresar la marca.");
        return;
    }

    if (cantidad === "") {
        alert("Debe ingresar la cantidad.");
        return;
    }

  
    const producto = {
        nombre,
        categoria,
        precio,
        descripcion,
        presentacion,
        marca,
        cantidad
    };

    console.log(producto);

    alert(
        "Producto guardado:\n\n" +
        "Nombre: " + producto.nombre + "\n" +
        "Categoría: " + producto.categoria + "\n" +
        "Precio: " + producto.precio + "\n" +
        "Descripción: " + producto.descripcion + "\n" +
        "Presentación: " + producto.presentacion + "\n" +
        "Marca: " + producto.marca + "\n" +
        "Cantidad: " + producto.cantidad
    );
});