"use strict";
/* Tipos basicos en Typescript */
const number = 1;
let n = 2; // En este caso, se declara primero el nombre de la variable y luego el tipo de la misma
// De todos modos, la idea es escribir los menos tipos posibles
let a = 'hola'; // tipo string
let aaaa = null; // tipo null
let b = undefined; // tipo undefined pero declarando su tipo 
/* Inferencia de datos */
let saludo = 'hola';
// Ahora, Typescript sabe inferir el tipo de dato de una variable. Por lo tanto, si coloco
// saludo. me saltan todos los metodos que se le pueden aplicar a una variable de tipo string 
/************ Tipo de dato Any ************/
// El tipo de dato any representa a cualquier tipo de dato y esencialmente, IGNORA el tipado de TS
// Es decir, si defino una variable con el tipo any, no puedo acceder a los metodos de ese tipo.
// Por ejemplo:
// let anyValue: any = 'hola';
// anyValue.toUpperCase();
// Observamos que al colocar anyValue. no se puede acceder a los metodos del tipo string que 
// representa 'hola'
/************ Tipo de dato Unknow ************/
let unknowValue = 'hola';
// Observamos que al colocar unknowValue. no se puede acceder a ningun metodo porque el tipo de 
// dato es desconocido
/************ CONCLUSIONES ************/
// En resumen, vamos a declarar unicamente los tipo de datos que no son los basicos.
// Los tipos de datos basico (string, number, boolean, etc) no va a ser necesario declarar su tipo
