interface Geometria {
    lados: number
    pintar(): void
}

interface Triangulo extends Geometria {
    base: number
    altura: number
}

interface Cuadrado extends Geometria {
    lado: number
}

// instanceof no funciona con interfaces. solo en clases o funciones. Por ejemplo:
class Coche {
    fabricante: string = "honda"
}

let c: Coche = new Coche();
console.log(c instanceof Coche); // retorna true porque c es una instancia de Coche

// Lo que si aplica para interfaces son las guardas de tipo is. Veamos el siguiente ejemplo:
function esUnCuadrado(x:any) : x is Cuadrado {
    return x.lados && x.lados == 4 &&  x.pintar && x.lado;
    // hago una comprobacion de tipos en tiempo de ejecucion
    // y si cumple las tres condiciones x es de tipo cuadrado
    // es un casteo un poco mas avanzado
}

// Ahora, realizo el siguiente casteo:
function procesar(g:Geometria) {
    if(esUnCuadrado(g)){
        // g.lado || g.lados || g.pintar
        // observamos que g es de tipo Cuadrado y solo admite las propiedades
        // de la interfaceCuadrado  
    }
}



// function procesar(g:Geometria) {
//     if(g.lados === 4){
//         let cuadrado = g as Cuadrado; 
//         console.log(cuadrado.lado);  
//     } else if (g.lados === 3){
//         let triangulo = g as Triangulo;
//         console.log(triangulo.altura); 
//     }
// }