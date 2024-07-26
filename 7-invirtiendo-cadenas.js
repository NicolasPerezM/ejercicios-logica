/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */



const reverse = (str) => {
    let reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

console.log(reverse(cadena));



function invertirCadena(texto) {
    let textoInvertido = "";

    // Iterar sobre la cadena desde el final hasta el principio
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    return textoInvertido;
}

// Ejemplo de uso
const cadena = "Hola mundo";
const cadenaInvertida = invertirCadena(cadena);
console.log(cadenaInvertida); // Debería imprimir "odnum aloH"
