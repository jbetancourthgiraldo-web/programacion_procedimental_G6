document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const pedidoCliente = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        email: document.getElementById("email").value,
        metodoPago: document.getElementById("metodo_pago").value,
        pedido: document.getElementById("pedido").value,
        referencias: document.getElementById("referencias").value
    };

    console.log(pedidoCliente);

    alert(
        "Pedido registrado\n\n" +
        "Nombre: " + pedidoCliente.nombre + "\n" +
        "Teléfono: " + pedidoCliente.telefono + "\n" +
        "Dirección: " + pedidoCliente.direccion + "\n" +
        "Correo: " + pedidoCliente.email + "\n" +
        "Método de pago: " + pedidoCliente.metodoPago + "\n" +
        "Pedido: " + pedidoCliente.pedido + "\n" +
        "Referencias: " + pedidoCliente.referencias
    );
});