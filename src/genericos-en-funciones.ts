// Genericos con funciones

// Comenzamos definiendo los siguientes tipos:
type Nota = {mensaje: string};
type NotaColorida = Nota & {color: string};
type Foto = {url: string};
type Video = Foto & {duracion: number};

// Ahora, supongamos que queremos crear una funcion para subir 
// un archivo en el endpoint /upload de tipo POST con la siguiente 
// funcion. Para ello, una opcion es definir el tipo Publicacion

// type Publicacion = Nota | NotaColorida | Foto | Video;

// function subir(p:Publicacion) {
//     return p;
// }

// Pero ahora, si queremos subir una publicacion y retornar la misma
// publicacion, podriamos definir algo como lo mencionado a continuacion:

// type Publicacion = Nota | NotaColorida | Foto | Video;

// function subir(p:Publicacion) : Publicacion {
//     return p;
// }


// Sin embargo, podemos realizar esto de una manera mas elegante 
// donde Publicacion es un tipo generico ahora

function subir<Publicacion>(p:Publicacion) : Publicacion {
    return p;
}

// let x = subir<Nota>({mensaje: 'hello world!'});

// Y observamos que x es tipo Nota ahora. 
// Sin embargo, no vamos a declarar el generico
// en la llamada a la funcion sino de la siguiente manera:
let post: Nota = { mensaje: 'Hello world'};
let x = subir(post); // Observamos que x es de tipo Nota

