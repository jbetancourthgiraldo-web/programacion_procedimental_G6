document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const producto = {
        nombre: document.querySelectorAll("#input")[0].value,
        categoria: document.querySelectorAll("#input")[1].value,
        precio: document.querySelectorAll("#input")[2].value,
        descripcion: document.getElementById("textarea").value,
        presentacion: document.querySelectorAll("#input")[3].value,
        marca: document.querySelectorAll("#input")[4].value,
        cantidad: document.querySelectorAll("#input")[5].value
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