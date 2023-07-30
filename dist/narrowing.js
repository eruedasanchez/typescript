"use strict";
/*********** NARROWING ***********/
// Ahora, no sabemos como diferenciar las interfaces. Para ello aplicamos TYPE GUARD
// En esta funcion, se para en el rol de Sonic, es decir, fija que el personaje es Sonic y chequea si tiene la funcion correr definida
// en su interfaz
function checkIsSonic(personaje) {
    return personaje.correr !== undefined;
}
function jugar(personaje) {
    if (checkIsSonic(personaje)) {
        personaje.correr();
        return;
    }
    personaje.saltar();
}
