const comprobarRespuestas = () => {
    const respuesta1 = document.querySelector('input[name="respuesta1"]:checked').value;
    const respuesta2 = document.querySelector('input[name="respuesta2"]:checked').value;
    const respuesta3 = document.querySelector('input[name="respuesta3"]:checked').value;

    if (respuesta1 === "verdadero1" && respuesta2 === "verdadero2" && respuesta3 === "verdadero3") {
        document.getElementById("resp").innerHTML = "Las respuestas son correctas";
    } else {
        let mensaje = "Respuestas incorrectas:\n";
        if (respuesta1 !== 'verdadero1') {
            mensaje += "pregunta 1\n";
        } 
        if (respuesta2 !== 'verdadero2') {
            mensaje += "pregunta 2\n";
        } 
        if (respuesta3 !== 'verdadero3') {
            mensaje += "pregunta 3\n";
        }
        document.getElementById("resp").innerHTML = mensaje;
    }
}

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", comprobarRespuestas);