interface Vehiculo {
    // readonly fabricante: string,
    arrancarMotor(): void,
    repostar(): void,
    detenerMotor(): void
}

interface VehiculoTerrestre extends Vehiculo {
    conducir(): void
}

interface VehiculoMaritimo extends Vehiculo {
    sonarSirena(): void,
    encenderChimenea(): void,
    detenerChimenea(): void
}

// class OpelCorsa implements VehiculoTerrestre {
//     // fabricante:string;

//     conducir(): void {
//         console.log('Conduciendo el vehiculo')
//     }

//     arrancarMotor(): void {
//         console.log('Arrancando motor')
//     }

//     repostar(): void {
//         console.log('Repostando el vehiculo')
//     }

//     detenerMotor(): void {
//         console.log('Motor detenido')
//     }

//     // ademas puedo agregar funciones o metodos propios de Opel Corsa
//     abrirBaul(): void{
//         console.log('Abriendo el baul')
//     }
// }

function procesar(v:VehiculoTerrestre){
    // v. solo admite las funciones y metodos
    // de los vehiculos terrestres
}

// procesar(new OpelCorsa()); // ahora puedo llamar OpelCorsa porque esta incluido en la clase vehiculo
// comento las lineas 2,18 a 41,48 porque sino se rompe el codigo