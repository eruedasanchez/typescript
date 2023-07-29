// function saludar(name){
//     console.log(`Hola ${name}`);
// }

// Observemos que si al parametro name no le colocamos un tipo, TS infiere implicitamente que es de tipo any
// y como vimos anteriormente, any no me deja acceder a los metodos de ese tipo de dato 

// Por lo tanto, le agregamos el tipo de dato al parametro de la siguiente manera:

function saludar(name: string){
    console.log(`Hola ${name}`);
}

saludar('Juancito');
// saludar(29);