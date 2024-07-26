/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let isAnagram = (word1, word2) => {
    let normalize = (word) => {
      word.toLowerCase().split('').sort().join(''); 
    }
    console.log(normalize(word1));
    console.log(normalize(word2));
    return normalize(word1) === normalize(word2);
    
  }

console.log(isAnagram('april', 'pilar')); //True