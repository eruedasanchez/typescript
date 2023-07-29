/* Tipos basicos en Typescript */

const number = 1;
let n: number = 2; // En este caso, se declara primero el nombre de la variable y luego el tipo de la misma

// De todos modos, la idea es escribir los menos tipos posibles

let a = 'hola'; // tipo string
let aaaa = null; // tipo null
let b: undefined = undefined; // tipo undefined pero declarando su tipo 

/* Inferencia de datos */

let saludo = 'hola';

// Ahora, Typescript sabe inferir el tipo de dato de una variable. Por lo tanto, si coloco
// saludo. me saltan todos los metodos que se le pueden aplicar a una variable de tipo string 



saludo.

