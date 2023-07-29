"use strict";
// function saludar(name){
//     console.log(`Hola ${name}`);
// }
// Observemos que si al parametro name no le colocamos un tipo, TS infiere implicitamente que es de tipo any
// y como vimos anteriormente, any no me deja acceder a los metodos de ese tipo de dato 
// Por lo tanto, le agregamos el tipo de dato al parametro de la siguiente manera:
function saludar(name) {
    console.log(`Hola ${name}`);
}
saludar('Juancito');
// Observemos que si queremos ejecutar saludar(29); se produce un error porque el parametro name es de tipo
// string y queremos pasarle una variable de tipo number al querer ejecutarla 
/*********** Declaracion de objetos ***********/
// Observemos que si declaramos los objetos de la siguiente manera se produce un error porque se entra en colision
// con la sintaxis de JS porque JS permite renombrar la propiedad de un objeto, o sea, la propiedad nombre se
// pasa a llamar string y edad se pasa a llamar number  
// function saludarObjeto({nombre: string, edad: number}){
//     console.log(`Hola ${nombre} tenes ${edad}`);
// }
// saludar({nombre: 'Pepe', edad: 2});
// Entonces, para poder tipar de manera correcta un objeto se puede realizar de la siguiente manera: 
function saludarObjeto({ nombre, edad }) {
    console.log(`Hola ${nombre} tenes ${edad} años`);
}
saludarObjeto({ nombre: 'Pepe', edad: 2 });
// Tambien podemos tipar de manera correcta un objeto de la siguiente manera: 
function saludarObjetoSegundaManera(persona) {
    const { nombre, edad } = persona;
    console.log(`Hola ${nombre} tenes ${edad} años`);
}
saludarObjetoSegundaManera({ nombre: 'Romeo', edad: 28 });
/*********** Retorno de las funciones ***********/
// En el caso del retorno, Typescript reconoce el tipo de dato que se va a retornar 
function retornarEdad({ nombre, edad }) {
    return edad;
}
retornarEdad({ nombre: 'Romeo', edad: 56 });
// En este caso, TS reconoce que retornarEdad devuelve un valor de tipo number. De todos modos, lo podemos
// asignar tambien en la declaracion de la funcion como se muestra a continuacion.
function retornarEdadExplicito({ nombre, edad }) {
    return edad;
}
retornarEdadExplicito({ nombre: 'Romeo', edad: 56 });
/*********** Tipado de arrow functions ***********/
const sayHiFromFunction = (fn) => {
    fn('Miguel');
};
const sayHi = (name) => {
    console.log(`Hola ${name}`);
};
sayHiFromFunction(sayHi);
