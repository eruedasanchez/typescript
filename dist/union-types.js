"use strict";
/**************** UNION TYPES ****************/
let hero = {
    name: 'Thor',
    age: 1500
};
function createHero(basicInfo) {
    const { name, age } = basicInfo;
    return { id: crypto.randomUUID(), name, age, isActive: true };
}
const thor = createHero({ name: 'Thor', age: 1500 });
thor.powerScale = 'planetary';
