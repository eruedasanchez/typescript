class Rectangulo {
    private ancho: number
    private alto: number

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

let rectanguloUno = new Rectangulo(2,4);
let rectanguloDos = new Rectangulo(1,3);

// Al utilizar el modificador private, evitamos poder 
// modificar o acceder a las propiedades de las clases 
// Como por ejemplo, r1.alto = 4; que si se puede hacer cuando 
// es publica o no le colocamos private.
// De esta manera, solo pueden ser accedidas desde adentro de la clase
// como por ejemplo en area, acceder a this.alto

// Otra manera de declarar las propiedades y metodos de mnaera privada
// es colocando adelante del nombre el simbolo #. Por ejemplo:
// #alto o #area
// De esta manera, cuando instanciamos un rectangulo, ni nos va a 
// aparecer el metodo o funcion privado.
// Por ejemplo, si declaramos #alto y #ancho, solo vamos a poder acceder
// a rectanguloUno.perimetro y rectanguloUno.area 
