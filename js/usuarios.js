document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const cliente = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        productoFavorito: document.getElementById("producto").value,
        comentarios: document.getElementById("comentarios").value
    };

    console.log(cliente);

    alert(
        "Cliente registrado\n\n" +
        "Nombre: " + cliente.nombre + "\n" +
        "Correo: " + cliente.correo + "\n" +
        "Teléfono: " + cliente.telefono + "\n" +
        "Dirección: " + cliente.direccion + "\n" +
        "Producto favorito: " + cliente.productoFavorito + "\n" +
        "Comentarios: " + cliente.comentarios
    );
});