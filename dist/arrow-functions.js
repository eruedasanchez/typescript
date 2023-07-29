"use strict";
/*********** Tipado de arrow functions ***********/
const sayHiFromFunction = (fn) => {
    fn('Miguel');
};
const sayHi = (name) => {
    console.log(`Hola ${name}`);
};
sayHiFromFunction(sayHi);
/*********** Primera forma de tipar arrow functions ***********/
const sumar = (a, b) => {
    return a + b;
};
/*********** Segunda forma de tipar arrow functions ***********/
const restar = (a, b) => {
    return a - b;
};
/*********** Never ***********/
// function throwError(message: string){
//     throw new Error(message);
// }
// Esta funcion jamas va a devolver nada y por lo tanto, se le puede declarar como tipo
// de salida never. Es decir:
function throwError(message) {
    throw new Error(message);
}
// En general, se utiliza para funciones que se que no van a retornar nada
