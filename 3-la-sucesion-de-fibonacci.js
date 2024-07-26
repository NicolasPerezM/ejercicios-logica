/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let fibonacci = (n) => {
    let a = 0, b = 1, next; 

    console.log(a);

    if(n>1) {
        console.log(b);
    }
    
    for(let i = 2; i <= n; i++){
        next = a + b;
        console.log(next);
        a = b;
        b = next;

    }
 }

 fibonacci(50);

