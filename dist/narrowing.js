"use strict";
/*********** NARROWING ***********/
// type Personaje = Mario | Sonic;
// Ahora, no sabemos como diferenciar las interfaces. Para ello aplicamos TYPE GUARD
// En esta funcion, se para en el rol de Sonic, es decir, fija que el personaje es Sonic y chequea si tiene la funcion correr definida
// en su interfaz
// function checkIsSonic(personaje: Personaje): personaje is Sonic {
//     return (personaje as Sonic).correr !== undefined;
// }
// function jugar(personaje: Personaje){
//     if(checkIsSonic(personaje)){
//         personaje.correr();
//         return;                             
//     }
//     personaje.saltar();
// }
