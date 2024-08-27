function jugarAhorcado() {

    const palabras = ['programacion', 'javascript', 'coderhouse', 'algoritmo', 'condicionales', 'funciones', 'iteraciones', 'variable', 'internet', 'navegador'];

    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    let palabraIncompleta = "";

    for (let i = 0; i < palabra.length; i++) {
        palabraIncompleta += "-";
    }

    let errores = 0;
    let adivinado = false;

    alert("Bienvenido al juego del Ahorcado.\n A continuación aparecerá una palabra aleatoria de lista de palabras, la cuál deberás adivinar para ganar. Cada - significa una letra en la palabra.\n Pero deberás tener menos de 7 errores, ya que al séptimo, estarás ahorcado.\n ¡Buena Suerte!");

    while (errores < 7) {
        let letra = prompt("Palabra: " + palabraIncompleta + "\nErrores: " + errores + "\nIngresa una letra del abecedario. No incluyas tildes, ni símbolos; te contará como error.").toLowerCase();
        let letraEncontrada = false;

        for (let i = 0; i < palabra.length; i++) {
            let letraPalabra = palabra[i].toLowerCase();
            if (letra === letraPalabra) {
                palabraIncompleta = actualizarPalabraIncompleta(palabraIncompleta, letra, i);
                letraEncontrada = true;
            }
        }

        if (letraEncontrada) {
            alert("Has adivinado la letra '" + letra + "' de la palabra.");
        } else {
            errores++;
            alert("Letra incorrecta. Errores: " + errores);
        }

        if (palabraIncompleta === palabra) {
            alert("¡Felicidades! Has adivinado la palabra: " + palabra);
            adivinado = true;
            break;
        }
    }

    if (!adivinado) {
        alert("Has perdido. La palabra era: " + palabra);
    }
}

function actualizarPalabraIncompleta(palabraIncompleta, letra, ubicacion) {
    return palabraIncompleta.substring(0, ubicacion) + letra + palabraIncompleta.substring(ubicacion + 1);
}

let respuesta;

do {
    jugarAhorcado();

    respuesta = prompt("¿Quieres jugar nuevamente al Ahorcado? (si/no)").toLowerCase();

} while (respuesta === "si");
