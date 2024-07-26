/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

let isPrimo = (num) => {
    if(num === 1) {
        console.log(false)
        return false
    } 

    for(let i = 2; i < num; i++) {
        if(num%i === 0){
            console.log(false)
            return false
        }
    }

    console.log(true);
    return true;
}

isPrimo(2);