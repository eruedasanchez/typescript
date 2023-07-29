// Funciones anonimas segun el contexto

// const avengers = ['Spidey', 'Hulk', 'Avengers'];

// Ahora, supongamos que queremos recorrer el arreglo de avengers

// avengers.forEach(avenger => {
//     console.log(avenger.toUpperCase)
// })

// Observamos que al ejecutar avenger. se pueden acceder a los metodos del tipo de dato string. Es decir,
// TS sabe que avenger es de tipo string. Esto es gracias al "forEach" que como recibe un arreglo de strings,
// entonces puede inferir que cada uno de sus elementos son de tipo string.
// Por lo tanto, en este caso, si hay inferencia de dato.

/*********** OBJETOS ***********/

// let hero = {name: 'thor', age: 1500};

// En este caso, solo voy a poder a las propiedades name y age de hero al hacer hero. pero no voy a poder
// cambiar los tipos de las propiedades (por ejemplo a hero.name querer asignarle 40) y definir nuevas props
// como por ejemplo hero.power = 100 

// Ahora, vamos a utilizar una funcion para crear heroes

// function createHero(name: string, age: number){
//     return {name, age};
// }

// const thor = createHero('Thor', 1500);

// Ahora, nos preguntamos si el tipo del heroe thor es el mismo que el de hero? (solo podemos afirmar
// que son objetos que tienen las mismas propiedades (name y age))

// Para resolver esta duda, vamos a ver TYPE ALIAS

// Voy a declarar un tipo inventado por mi llamado Hero y lo declaro de la siguiente manera:

// type Hero = {
//     // el nombre del tipo (Hero) siempre se declara en pascal case
//     nombreHeroe: string
//     edadHeroe: number
// };

// let heroTypo: Hero = {nombreHeroe: 'thor', edadHeroe: 1500};

// function createHeroTypo(nombreHeroe: string, edadHeroe: number): Hero{
//     return {nombreHeroe, edadHeroe};
// }

// const thorTypo = createHeroTypo('Thor', 1500);

// Tambien podemos declararlo de la siguiente manera

// function createHeroTypo(hero: Hero): Hero{
//     const {nombreHeroe, edadHeroe} = hero;
//     return {nombreHeroe, edadHeroe};
// }

// const thorTypo = createHeroTypo({nombreHeroe: 'Thor', edadHeroe: 1500});

/*********** OPCIONAL PROPERTIES ***********/

type Hero = {
    id ?: number
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
    return {name, age, isActive: true};
}

const thor = createHero({name: 'Thor', age: 1500});
console.log(thor.isActive) // imprime true por consola
thor.id?.toString

// Observamos que cuando escribimos thor.id.toString() se convierte en thor.id?.toString porque como id es 
// una propiedad opcional entonces TS primero va a chequear si existe el id. Si existe, va a aplicar thor.id.toString()
// y de lo contrario, no va a aplicar nada 






















