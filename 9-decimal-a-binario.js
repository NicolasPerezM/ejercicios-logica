/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const decimalToBinary = (num) => {
    let resultado = num, cociente, numInBinary = []; 
  
    while(resultado > 0) {
      cociente = resultado%2;
      numInBinary.push(cociente);
      resultado = Math.floor(resultado/2); 
    }
  
    return numInBinary.reverse().join('');
  
  }
  
  console.log(decimalToBinary(25));

  