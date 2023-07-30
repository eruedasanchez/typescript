"use strict";
/*********** TUPLAS ***********/
const black = [0, 0, 0];
const white = [255, 255, 255];
function mostrarMensaje(tipoError) {
    if (tipoError === "notFound" /* ERROR_TYPES.NOT_FOUND */) {
        console.log('No se encuentra el recurso');
    }
    else if (tipoError === "unauthorized" /* ERROR_TYPES.UNAUTHORIZED */) {
        console.log('No tienes permiso para acceder');
    }
    else if (tipoError === "forbidden" /* ERROR_TYPES.FORBIDDEN */) {
        console.log('Olvidaste tu permiso para acceder');
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
