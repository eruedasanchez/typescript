interface Indizable {
    [index: string] : string
}

let l: Indizable = {};

let k = l['hola']; 
// observemos que ahora puedo acceder a la propiedad hola de la interfaz
// con la notacion l['hola']