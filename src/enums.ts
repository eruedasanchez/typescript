/*********** TUPLAS ***********/

// type RGB = [number, number, number];

// const black: RGB = [0,0,0];
// const white: RGB = [255,255,255];

// El problema de las tuplas es que son mutables, es decir, podria ejecutar black.push(4) y lo ejecutaria
// sin problemas pero no es lo que espero 

// Para solucionar esto, se puede agregar 'readonly' al tipo RGB para que no se le puedan aplicar propiedades

type RGB = readonly [number, number, number];

const black: RGB = [0,0,0];
const white: RGB = [255,255,255];

/*********** ENUMS ***********/

// Comenzamos viendo el siguiente ejemplo

// enum ERROR_TYPES { NOT_FOUND, UNAUTHORIZED, FORBIDDEN }

// function mostrarMensaje(tipoError: ERROR_TYPES){
//     if(tipoError === ERROR_TYPES.NOT_FOUND){
//         console.log('No se encuentra el recurso')
//     } else if(tipoError === ERROR_TYPES.UNAUTHORIZED){
//         console.log('No tienes permiso para acceder')
//     } else if(tipoError === ERROR_TYPES.FORBIDDEN){
//         console.log('Olvidaste tu permiso para acceder')
//     }
// }

// Al compilar este codigo a JS, obtenemos el siguiente resultado:

// var ERROR_TYPES;
// (function (ERROR_TYPES) {
//     ERROR_TYPES[ERROR_TYPES["NOT_FOUND"] = 0] = "NOT_FOUND";
//     ERROR_TYPES[ERROR_TYPES["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
//     ERROR_TYPES[ERROR_TYPES["FORBIDDEN"] = 2] = "FORBIDDEN";
// })(ERROR_TYPES || (ERROR_TYPES = {}));
// function mostrarMensaje(tipoError) {
//     if (tipoError === ERROR_TYPES.NOT_FOUND) {
//         console.log('No se encuentra el recurso');
//     }
//     else if (tipoError === ERROR_TYPES.UNAUTHORIZED) {
//         console.log('No tienes permiso para acceder');
//     }
//     else if (tipoError === ERROR_TYPES.FORBIDDEN) {
//         console.log('Olvidaste tu permiso para acceder');
//     }
// }

// Ahora, quiero que las lineas del estilo ERROR_TYPES[ERROR_TYPES["NOT_FOUND"] = 0] = "NOT_FOUND"; no
// aparezcan. Para ello, declaramos const al enum ERROR_TYPES de la siguiente manera:

// const enum ERROR_TYPES { NOT_FOUND, UNAUTHORIZED, FORBIDDEN }

// function mostrarMensaje(tipoError: ERROR_TYPES){
//     if(tipoError === ERROR_TYPES.NOT_FOUND){
//         console.log('No se encuentra el recurso')
//     } else if(tipoError === ERROR_TYPES.UNAUTHORIZED){
//         console.log('No tienes permiso para acceder')
//     } else if(tipoError === ERROR_TYPES.FORBIDDEN){
//         console.log('Olvidaste tu permiso para acceder')
//     }
// }

// Y obtenemos el siguiente resultado:

// function mostrarMensaje(tipoError) {
//     if (tipoError === 0 /* ERROR_TYPES.NOT_FOUND */) {
//         console.log('No se encuentra el recurso');
//     }
//     else if (tipoError === 1 /* ERROR_TYPES.UNAUTHORIZED */) {
//         console.log('No tienes permiso para acceder');
//     }
//     else if (tipoError === 2 /* ERROR_TYPES.FORBIDDEN */) {
//         console.log('Olvidaste tu permiso para acceder');
//     }
// }

// Ahora, si quiero definir yo mismo el nombre de los errores y que no esten definidos como 0,1,2, etc
// los puedo definir en la declaracion del enum ERROR_TYPES

const enum ERROR_TYPES { 
    NOT_FOUND = 'notFound', 
    UNAUTHORIZED = 'unauthorized', 
    FORBIDDEN = 'forbidden'
}

function mostrarMensaje(tipoError: ERROR_TYPES){
    if(tipoError === ERROR_TYPES.NOT_FOUND){
        console.log('No se encuentra el recurso')
    } else if(tipoError === ERROR_TYPES.UNAUTHORIZED){
        console.log('No tienes permiso para acceder')
    } else if(tipoError === ERROR_TYPES.FORBIDDEN){
        console.log('Olvidaste tu permiso para acceder')
    }
}

// Obteniendo el siguiente resultado 

// function mostrarMensaje(tipoError) {
//     if (tipoError === "notFound" /* ERROR_TYPES.NOT_FOUND */) {
//         console.log('No se encuentra el recurso');
//     }
//     else if (tipoError === "unauthorized" /* ERROR_TYPES.UNAUTHORIZED */) {
//         console.log('No tienes permiso para acceder');
//     }
//     else if (tipoError === "forbidden" /* ERROR_TYPES.FORBIDDEN */) {
//         console.log('Olvidaste tu permiso para acceder');
//     }
// }

// CONCLUSION: Generalmente, se utiliza const enum para ahorrar codigo pero a veces es conveniente
// utilizar solo enum (sin const) cuando se crea una biblioteca, libreria o un componente hacia el exterior,
// es decir, que quiero que se consuma por fuera de mi aplicacion  