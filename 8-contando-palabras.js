/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const cuantoSeRepite = (str, array) => {
    let counter = 0; 
    for(let i = 0; i <= array.length; i++){
        if(str === array[i]){
            counter += 1;
        }
        console.log(array[i])
    }

    return counter;
}

const myArray = ["hola", "chao", "hola", "hola"];
let str = "hola";

console.log(cuantoSeRepite(str, myArray));