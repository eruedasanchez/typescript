/*********** NARROWING ***********/

// Supongamos que tenemos el siguiente objeto

// function mostrarLongitud(objeto: number | string){
//     objeto.length

// }

// mostrarLongitud('1');

// Observamos que se produce un error porque no se puede aplicar a un objeto de tipo number | string
// Si le sacamos el tipo number, desaparece el error

// Para solucionar esto, aplicamos NARROWING

// function mostrarLongitud(objeto: number | string){
//     if(typeof objeto === 'string'){
//         return objeto.length
//     }

//     // Aca el objeto es de tipo number
//     return objeto.toString().length
// }

// mostrarLongitud('1');

// Ahora veamos otro ejemplo

// interface Mario {
//     company: 'Nintendo',
//     nombre: string,
//     saltar: () => void
// }

// interface Sonic {
//     company: 'Sega',
//     nombre: string,
//     correr: () => void
// }

// type Personaje = Mario | Sonic;

// function jugar(personaje: Personaje){
//     console.log(personaje.nombre);
// }

// Observamos que los metodos habilitados para personaje son solo company y nombre porque son los unicos en comun que tienen
// tanto la interfaz de Mario como la de Sonic. Si queremos saltar o correr o no se van a poder ejecutar. Para solucionar esto,
// podemos ejecutar lo siguiente:

// function jugar(personaje: Personaje){
//     if(personaje.company === 'Nintendo'){
//         // Codigo de la interfaz Mario
//         personaje.saltar();
//         return;                             // return para que el codigo de la interfaz de Mario termine en esta linea
//     }

//     // Codigo de la interfaz Sonic
//     personaje.correr();
// }


// Ahora supongamos que no tenemos el nombre de la compania para poder diferenciar las interfaces. Por ejemplo:

interface Mario {
    company: string,
    nombre: string,
    saltar: () => void
}

interface Sonic {
    company: string,
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic;

// Ahora, no sabemos como diferenciar las interfaces. Para ello aplicamos TYPE GUARD

// En esta funcion, se para en el rol de Sonic, es decir, fija que el personaje es Sonic y chequea si tiene la funcion correr definida
// en su interfaz
function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined;
}

function jugar(personaje: Personaje){
    if(checkIsSonic(personaje)){
        personaje.correr();
        return;                             
    }
    personaje.saltar();
}



