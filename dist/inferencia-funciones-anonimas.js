"use strict";
// Funciones anonimas segun el contexto
var _a;
let hero = {
    name: 'Thor',
    age: 1500
};
function createHero(hero) {
    const { name, age } = hero;
    return { name, age, isActive: true };
}
const thor = createHero({ name: 'Thor', age: 1500 });
console.log(thor.isActive); // imprime true por consola
(_a = thor.id) === null || _a === void 0 ? void 0 : _a.toString;
// Observamos que cuando escribimos thor.id.toString() se convierte en thor.id?.toString porque como id es 
// una propiedad opcional entonces TS primero va a chequear si existe el id. Si existe, va a aplicar thor.id.toString()
// y de lo contrario, no va a aplicar nada 
