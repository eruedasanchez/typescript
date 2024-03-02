// type NotaRestringido = {mensaje: string};
// type NotaColoridaRestringido = NotaRestringido & {color: string};
// type FotoRestringido = {url: string};
// type VideoRestringido = FotoRestringido & {duracion: number};


// function subirRestringido<PublicacionRestringido>(p:PublicacionRestringido) : PublicacionRestringido{
//     return p;
// }

// let postRestringido: NotaRestringido = { mensaje: 'Hello world'};
// let xRestringido = subirRestringido(post); 

// Observemos el siguiente caso ahora:

// let xAny = subirRestringido(5); 
// Puedo pasarle 5 como parametro a la funcion subirRestringido y
// xAny sera de tipo number porque PublicacionRestringido es de 
// tipo generico

// Para resolver esto, trabajamos primero con interfaces:

interface NotaRestringido extends Post {
    mensaje: string
}

interface NotaColoridaRestringido extends NotaRestringido {
    color: string
}

interface FotoRestringido extends Post {
    url: string
}

interface VideoRestringido extends FotoRestringido {
    duracion: number
}

// Entonces, lo primero que hago es crear una interfaz que englobe 
// a todas las demas como Post

interface Post {
    id: number
}

// Agrego extends en la declaracion del tipo generico
function subirRestringido<PublicacionRestringido extends Post>(p:PublicacionRestringido) : PublicacionRestringido{
    return p;
}

let postRestringido: NotaRestringido = { 
    id: 1,
    mensaje: 'Hello world'
};

let xRestringido = subirRestringido(postRestringido); 
// Ahora solo puedo pasar solo parametros de tipo Post
// o que lo extiendan





