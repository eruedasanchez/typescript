/*********** MUTABILIDAD ***********/

// type Hero = {
//     readonly id ?: number
//     name: string
//     age: number
//     isActive ?: boolean // agregamos el simbolo ? para indicar que la propiedad isActive es opcional. De lo contrario, tenemos que agregarla a todas las declaraciones de tipo Hero
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// };

// function createHero(hero: Hero): Hero{
//     const {name, age} = hero;
//     return {name, age, isActive: true};
// }

// const thor = createHero({name: 'Thor', age: 1500});

// // Supongamos que a thor.id le asignamos cualquier valor 
// thor.id = 343467764765764

// Ahora, si yo quiero acceder y modifcar id no voy a poder porque la declare como una variable read only 

// Continuamos creando el Hero de la siguiente manera:

type HeroId = `${string}-${string}-${string}-${string}-${string}`; // formato de crypto.randomUUID()

type Hero = {
    readonly id?: HeroId // utilizo el tipo HeroId para crear el tipo Hero
    name: string
    age: number
    isActive ?: boolean // agregamos el simbolo ? para indicar que la propiedad isActive es opcional. De lo contrario, tenemos que agregarla a todas las declaraciones de tipo Hero
}

let hero: Hero = {
    name: 'Thor',
    age: 1500
};

function createHero(hero: Hero): Hero{
    const {name, age} = hero;
    return {id: crypto.randomUUID(), name, age, isActive: true};
}

const thor = createHero({name: 'Thor', age: 1500});

// Template union types

type HexadecimalColor = `#${string}`;

// const color:HexadecimalColor = '0033ff';
const colorDos:HexadecimalColor = '#0033ff';
const colorTres:HexadecimalColor = '#sdhfhsdfkgsdjf434638';

// Observamos que color no es del tipo HexadecimalColor pero tanto colorDos como colorTres son de tipo HexadecimalColor 

