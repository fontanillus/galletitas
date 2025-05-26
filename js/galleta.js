const mensajes = [
    "El universo te espera para hacerte un favor. ¡Prepárate para el viaje!",//1
    "Tus zapatos son más valientes de lo que crees. ¡Sal a bailar!", //2
    "El mundo necesita más risas. ¡Sonríe a tu reflejo!", //3
    "No te preocupes, el caos tiene su propio ritmo. ¡Adáptate y fluye!", //4
    "Las galletas de la fortuna saben que eres genial. ¡No lo olvides!", //5
    "Deja que la música te guíe. ¡Los pasos ya están dados!", //6
    "No te preocupes por el mañana. ¡Hoy es el día!", //7
    "La magia está en los detalles. ¡Mira bien a tu alrededor!", //8

] /* esto es array*/


function mostrarMensaje() {
    console.log("Número de mensajes", mensajes.length);
    mensajes.push("El destino es una aventura. ¡Disfrútala!");

    const NUM_MENSAJES = mensajes.length;

    let numRandom = Math.floor(Math.random() * NUM_MENSAJES);

    console.log("numRadnom", numRandom);

    document.getElementById("mensaje").innerHTML = mensajes[numRandom];
    document.getElementById("mensaje").style.color = "turquoise"; // Cambia "blue" por el color que quieras
    document.getElementById("mensaje").style.fontSize = "larger";
    document.getElementById("mensaje").style.textShadow = "2px 2px black";
    document.getElementById("galleta").src ="img/abierta.png";
    document.getElementById("msj").disabled = true;
}

function recargar() {
    location.reload();

}