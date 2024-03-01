// comienzo creando una interface para representar una forma geometrica
interface Shape {
    readonly sides: number,
    area() : number,
    perimeter(): number
}

// Ahora, supongamos que no existe la interface Shape y 
// vamos a crear una clase para representar una forma geometrica

class Rectangle implements Shape {
    // readonly width: number
    // readonly height: number
    // podemos declarar los parametros directamente en el constructor
    sides: number = 4

    constructor(readonly width: number, readonly height: number){
        this.width = width;
        this.height = height
    }
    
    area() : number{
        return this.width * this.height;
    }

    perimeter() : number{
        return 2 * (this.width + this.height);
    }
}

// function process(s:Shape) {
    // do something
    // ahora, observamos que solo puedo usar los metodos de la 
    // interface Shape
// }

let r = new Rectangle(5,4);
// process(r); 
// arroja error porque process solo admite r de tipo Shape y r es de tipo Rectangle
// Esto lo solucionamos colocando implements en la clase Rectangle y definimos los
// metodos de la interface Shape en la clase Rectangle 
