/**************** UNION TYPES ****************/ 

// type HeroId = `${string}-${string}-${string}-${string}-${string}`; // formato de crypto.randomUUID()
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

// Podemos declarar tambien union types en variables

// let variable: number | string; // variable solo podra ser de tipo number o de tipo string 
// let variablePrecisa: 2 | string; // variablePrecisa solo podra ser de tipo number mas precisamente el numero 2 o de tipo string

// variable = 2;
// variable = 'Spiderman';
// variablePrecisa = 2;


// type Hero = {
//     readonly id?: HeroId // utilizo el tipo HeroId para crear el tipo Hero
//     name: string
//     age: number
//     isActive ?: boolean // agregamos el simbolo ? para indicar que la propiedad isActive es opcional. De lo contrario, tenemos que agregarla a todas las declaraciones de tipo Hero
//     powerScale ?: HeroPowerScale
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// };

// function createHero(hero: Hero): Hero{
//     const {name, age} = hero;
//     return {id: crypto.randomUUID(), name, age, isActive: true};
// }

// const thor = createHero({name: 'Thor', age: 1500});
// thor.powerScale = 'planetary';
// thor.powerScale = 'goat'; Observamos que goat no es de tipo Hero Power Scale. Por lo tanto, devuelve un error 

/**************** INTERSECTION TYPES ****************/ 

// type HeroId = `${string}-${string}-${string}-${string}-${string}`; // formato de crypto.randomUUID()
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

// // Redefinimos el typo Hero de la siguiente manera 

// type HeroBasicInfo = {
//     name:  string
//     age: number
// }

// type HeroProperties = {
//     readonly id?: HeroId 
//     isActive ?: boolean 
//     powerScale ?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties;

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// };

// function createHero(basicInfo: HeroBasicInfo): Hero{
//     const {name, age} = basicInfo;
//     return {id: crypto.randomUUID(), name, age, isActive: true};
// }

// const thor = createHero({name: 'Thor', age: 1500});
// thor.powerScale = 'planetary';
