/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

const factorial = (num) => {
    if(num <= 1){
        return num;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5));