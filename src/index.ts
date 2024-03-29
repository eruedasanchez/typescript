import { FileReader } from "undici-types";

console.log('Hello TS');
console.log('Bye TS');

// Declaracion de variables (tipado inferido, no declaro el tipo)

var nombreEzequiel = 'Ezequiel';
console.log("Mi nombre es: " + nombreEzequiel);
console.log("Mi nombre es: ", nombreEzequiel);
console.log(`Mi nombre es ${nombreEzequiel}`);

let email = 'ezequiel.ruedasanchez@gmail.com'; // let utilizado para declarar variables locales
console.log(`Mi nombre es ${nombreEzequiel} y mi email es ${email}`);

// Declaracion de constantes
const PI = 3.1416;
// PI = PI + 1; // Abs! No se puede reasignar porque PI es una constante

// Tipado de variables
var name:string = 'Leandro';
const PI_DOS:number = 3.1418;

// Observemos el siguiente ejemplo:
// var apellidos = "San Jose";
// apellidos = 3; // error porque TS infiere que el tipo de apellidos es string 

// Para cambiar el tipo, se puede colocar el tipo any (no es recomendable) a la variable

var apellidos:any = "San Jose";
apellidos = 3;

// Al inicializar una variable, tenemos que declararse el tipo tambien
var error:boolean;
error = false; 
console.log(`Hay error?: ${error}`);

// Instanciacion multiple de variables
let a:string, b:boolean, c:number;

a = "TS";
b = true;
c = 8.9;

// Tipos primitivos: number, string, boolean, void, null (se trata como false) y undefined (se trata como false)


// Tipos mas complejos
let listaTareas: string[] = ["Tarea 1", "Tarea 2"]; // tipo de dato Arreglo de string

// Combinar tipos en listas o arreglos
let valores: (string | boolean |  number)[] = [false, "Hola", true, 56];

// Tipos enumerados
enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

let estadoTareaCompletado: Estados = Estados.Completado; // C
let estadoTareaIncompleto: Estados = Estados.Incompleto; // I
let estadoTareaPendiente: Estados = Estados.Pendiente;   // P

// Veamos el siguiente ejemplo de tipos enumerados:
enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let puestoMaratonPrimero: PuestoCarrera = PuestoCarrera.Primero; // 1
let puestoMaratonSegundo: PuestoCarrera = PuestoCarrera.Segundo; // 2

// Observamos que al declarar tipos de datos enum, con declararle el valor al primero,
// los demas valores se van a autoincrementar por defecto

// Declaracion de Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// Declaracion de variables que siguen la interface de Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
} 

// Asignacion multiple de variables o destructuring

let { nombre, estado, urgencia } = tarea1;
console.log('tarea1 usando destructuring:', tarea1);

// Declaracion de Tipos

type Producto = {
    nombre: string,
    precio: number
}

// La principal diferencia entre un tipo y una interface radica en que los tipos se utilizan para
// definir tipos mas complejos donde generalmente son conjunto de datos que tienen que ver con 
// variables o tipos de datos primitivos que queremos ampliar 

let AudiCar: Producto = {
    nombre: "Audi A8",
    precio: 45000
}

console.log(`El precio del ${AudiCar.nombre} es de ${AudiCar.precio}`);

// Bucles

let listadoTareasNuevas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Incompleto,
        urgencia: 10
    }
];

// Forma clasica para iterar sobre listas
listadoTareasNuevas.forEach((tarea: Tarea, index: number) => {
    console.log(`Tarea ${index+1}: ${tarea.nombre}, estado: ${tarea.estado} y urgencia: ${tarea.urgencia}`);
})

const nombres = ["Ezequiel", "Leandro", "Marcos"];

// for in (pero en este caso no lo usamos porque for in 
// se utiliza para elementos que tienen elementos iterables como los strings u objetos)
// for (const tarea in listadoTareasNuevas) {
//     console.log(`${tarea.nombre}`)
// }

// Factor spread en arreglos

let listaCompraLunes: string[] = ["Leche", "Patatas"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"]; // [ 'Leche', 'Patatas', 'Pan', 'Huevos' ]
let listaCompraMiercoles: string[] = ["Carne", "Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]; // [ 'Leche', 'Patatas', 'Carne', 'Pescado' ]

// Factor spread en objetos

let estadoApp = {
    usuario: "Admin",
    session: 3,
    jwt: "Bearer1283612783"
}

// Cambiar un valor por propagacion

let nuevoEstado = {
    ...estadoApp,
    session: 4
}; // { usuario: 'Admin', session: 4, jwt: 'Bearer1283612783' }


/**** FUNCIONES ****/

/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Ezequiel";
    console.log(`Hola, ${nombre}`)
}
saludar();

/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarNombre(nombre:string) {
    console.log(`Buenos dias, ${nombre}`);
    
}
saludarNombre('Juan');

/**
 * Funcion que retorna una despedida a una persona
 * @param nombre Nombre de la persona a despedir. Por defecto, es Jose
 */
function despedirPersona(nombre:string = "Jose") {
    console.log(`Adios, ${nombre}`)
    
}

despedirPersona(); // En este caso, al establecer nombre = "Jose", el parametro nombre es opcional. Output: Adios, Jose
despedirPersona('Julian'); // Adios, Julian

// funciones con retorno

/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona 
 */
function ejemploReturn(nombre:string, apellidos:string) : string {
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn('Roberto', 'Sanchez');
console.log('nombreCompleto:', nombreCompleto);

// funcion multiparametro con spread operator

/**
 * 
 * @param nombres es una lista de nombres de tipo string
 */
function ejemploMultiParams(...nombres:string[]) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    })
}

ejemploMultiParams('Juan', 'Alberto', 'Gustavo'); // observar que no se pasa como arreglo, se listan los nombres unicamente

// Ahora, si queremos pasar el argumento como lista, hacemos lo siguiente:
const lista = ['Ricardo', 'Noelia'];
ejemploMultiParams(...lista); // pasamos el argumento utilizando el spread operator

// ASYNC FUNCTIONS

const ejemploAsync = async () : Promise<void> => {
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
}


// FUNCION GENERADORA (Generators)

function* ejemploGenerator() {
    // yield --> para emitir valores
    let index = 0;

    while(index < 5){
        // Emitimos un valor autoincremental
        yield index++;
    }
}

// Guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();

// Accedemos a los valores emitidos

console.log(generadora.next().value); // 0 
console.log(generadora.next().value); // 1 
console.log(generadora.next().value); // 2 
console.log(generadora.next().value); // 3 
console.log(generadora.next().value); // 4 
// console.log(generadora.next().value); // undefined (porque 5 < 5 Abs!) 

// WORKER

function* watcher(valor:number) {
    yield valor; // emitimos el valor inicial 0
    yield* worker(valor); // llamamos a las emisiones de worker para que emita otros valores
    yield valor + 4; // emitimos el valor final + 4
}

function* worker(valor:number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);

console.log('valor generado por el watcher:', generatorSaga.next().value); // 0
console.log('valor generado por el worker:', generatorSaga.next().value);  // 1
console.log('valor generado por el worker:', generatorSaga.next().value);  // 2
console.log('valor generado por el worker:', generatorSaga.next().value);  // 3
console.log('valor generado por el watcher:', generatorSaga.next().value); // 4

// Declaracion de tuplas

let  db: [nombre:string, edad:number, pais:string, premium:boolean] = ["Dani", 26, "Argentina", false];

console.log(db[0]);

// Declaracion de objetos

let persona : {
    nombre: string,
    edad: number,
    pais: string,
    fecha_nac: Date,
    laboral: {
        empresa: string,
        sector: string
    }
} = {
    nombre: 'Pepe Perez',
    edad: 30,
    pais: 'Colombia',
    fecha_nac: new Date(1990, 5, 14),
    laboral: {
        empresa: 'Amazon',
        sector: 'Sistemas'
    }
}

console.log(persona.edad);
console.log(persona.fecha_nac);
console.log(persona.nombre);
console.log(persona.pais);
console.log(persona.laboral);










