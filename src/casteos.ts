// Castear es transformar variables de un tipo a otro tipo

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

function procesar(g:Geometria) {
    if(g.lados === 4){
        let cuadrado = g as Cuadrado; // forma recomendada de castear
        // let cuadrado = (<Cuadrado> g); // forma no recomendada de castear (no funciona en jsx/tsx)
        console.log(cuadrado.lado); // y ahora puedo acceder a la prop lado
        // de este modo, lo casteo para que si g tiene 4 lados,
        // sea de tipo Cuadrado con g as Cuadrado 
    } else if (g.lados === 3){
        let triangulo = g as Triangulo;
        console.log(triangulo.altura); // mismo caso para el triangulo
    }
    
}