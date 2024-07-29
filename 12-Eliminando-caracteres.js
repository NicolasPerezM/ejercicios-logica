/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function diferenciasCadenas(str1, str2) {
    // Convertimos las cadenas en conjuntos de caracteres únicos
    let set1 = new Set(str1);
    let set2 = new Set(str2);
  
    // Inicializamos cadenas de salida vacías
    let out1 = "";
    let out2 = "";
  
    // Buscamos caracteres únicos en str1 que no están en str2
    set1.forEach(char => {
      if (!set2.has(char)) {
        out1 += char;
      }
    });
  
    // Buscamos caracteres únicos en str2 que no están en str1
    set2.forEach(char => {
      if (!set1.has(char)) {
        out2 += char;
      }
    });
  
    // Imprimimos los resultados
    console.log("out1:", out1);
    console.log("out2:", out2);
  }
  
  // Ejemplo de uso
  diferenciasCadenas("hola", "mundo");