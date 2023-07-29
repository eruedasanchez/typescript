"use strict";
/*********** MUTABILIDAD ***********/
let hero = {
    name: 'Thor',
    age: 1500
};
function createHero(hero) {
    const { name, age } = hero;
    return { id: crypto.randomUUID(), name, age, isActive: true };
}
const thor = createHero({ name: 'Thor', age: 1500 });
// const color:HexadecimalColor = '0033ff';
const colorDos = '#0033ff';
const colorTres = '#sdhfhsdfkgsdjf434638';
// Observamos que color no es del tipo HexadecimalColor pero tanto colorDos como colorTres son de tipo HexadecimalColor 
