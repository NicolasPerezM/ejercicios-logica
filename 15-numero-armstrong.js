/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

const isArmstrong = (num) => {
    let cubo = 0, suma = 0;

    num.toString().split('').forEach(element => {
        cubo = Math.pow(element, 3);
        suma += cubo;
    });

    if(num === suma){
      return true;
    }

    return false;
    
}

console.log(isArmstrong(370))