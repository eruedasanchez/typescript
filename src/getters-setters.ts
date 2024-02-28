class RectanguloGetterSetter {
    ancho: number
    alto: number

    private _nombre: string = "";

    constructor(ancho: number, alto: number){
        this.ancho = ancho;
        this.alto = alto;
    }

    get nombre(){
        console.log('Obtengo el nombre');
        return this._nombre;
    }

    // Cuando se llama a la funcion (dentro) o propiedad (fuera de la clase) r1.nombre, 
    // se obtiene el valor con el get y el seter se encarga de asignarle el nuevo valor  
    set nombre(value: string){
        console.log('Seteo el nombre');  
        this._nombre = value;
    }
    
    get area(){
        return this.alto * this.ancho; // funcion o metodo
    }

    perimetro(){
        return 2 * (this.ancho + this.alto)
    }
}

let r1 = new RectanguloGetterSetter(2,3);
r1.nombre = "A"; // Seteo el nombre
console.log(`El rectangulo ${r1.nombre}`); // Obtengo el nombre, El rectangulo A




// En este ejemplo, la operacion area() es un atributo derivado, es decir,
// una opeacion cuyo valor no lo pasamos en el constructor pero sin embargo
// el sistema es capaz de generarlo .
// Por lo tanto, si queremos generar atributos que dentro de la clase se gestionen
// como operaciones o mas bien como funciones. Para ello, creamos los getters y setters
// donde al crear getters por dentro es una funcion y por fuera de la clase (cuando lo 
// utilizamos es un atributo). 

