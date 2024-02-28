class RectanguloReadOnly {
    readonly ancho: number
    readonly alto: number

    constructor(ancho: number, alto: number){
        this.ancho = ancho;
        this.alto = alto;
    }
    
    area(){
        return this.alto * this.ancho;
    }

    perimetro(){
        return 2 * (this.ancho + this.alto)
    }
}

let rectanguloUnoReadOnly = new RectanguloReadOnly(2,3);
console.log(`El area del rectangulo es igual a ${rectanguloUnoReadOnly.ancho} * ${rectanguloUnoReadOnly.alto}`)

// Al declarar readonly ancho: number y 
// readonly alto: number, se pueden como acceder como 
// en el console.log a diferencia de private pero al igual que
// private no se pueden cambiar fuera de la clase como por ejemplo
// rectanguloUnoReadOnly.ancho = 12 y tampoco dentro de la clase
// Por ejemplo, querer accederla dentro de la funcion area