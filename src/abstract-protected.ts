// Al colocar una clase como abstract, no la vamos a poder instanciar
abstract class VehiculoAbstractProtected {
    protected fabricante: string;

    constructor(fabricante: string){
        this.fabricante = fabricante;
    }

    moverse(){
        console.log(`El vehiculo ${this.fabricante} se ha movido magicamente`);
    }

    // protected
    protected llevarAlTaller(){
        console.log('Llevando el vehiculo al taller');
    }
}

class VehiculoTerrestreAbstractProtected extends VehiculoAbstractProtected {
    private tipo: string;

    constructor(fabricante: string, tipo: string){
        super(fabricante);
        this.tipo = tipo;
    }

    moverse(){
        console.log(`El vehiculo terrestre ${this.tipo} se ha movido`);
        super.moverse(); 
        // super llama a la clase superior Vehiculo y se obtiene "El vehiculo se ha movido magicamente"
    }

    reparar(){
        console.log(`Un momento. Debo leer el manual de instrucciones de ${this.fabricante}`);
    }
}

class VehiculoAereoAbstractProtected extends VehiculoAbstractProtected {
    private tipo: string;

    constructor(fabricante: string, tipo: string){
        super(fabricante);
        this.tipo = tipo;
    }

    moverse(){
        console.log("El vehiculo aereo se ha movido");
        super.moverse(); 
    }

    reparar(){
        this.llevarAlTaller();
    }
}

class VehiculoMaritimoAbstractProtected extends VehiculoAbstractProtected {
    moverse(){
        console.log("El vehiculo maritimo se ha movido");
        super.moverse(); 
    }
}

// let vehiculoSimple = new VehiculoAbstractProtected("Airbus"); // no se puede crear una instancia de una clase abstracta
let vehiculoAereoAbs = new VehiculoAereoAbstractProtected("Airbus", "helicoptero"); // ahora si podemos instanciar una clase abstracta

let vehiculoTerrestre = new VehiculoTerrestreAbstractProtected("Yamaha", "moto");
vehiculoTerrestre.reparar();

let vehiculoAereo= new VehiculoAereoAbstractProtected("Boeing", "avion");
vehiculoAereo.reparar();

// Al definir el metodo reparar, podemos acceder a this.fabricante
// si VehiculoTerrestreAbstractProtected porque fabricante es de tipo string y public
// Pero lo negativo de esto es que desde afuera de la clase, se puede modificar su valor tranquilamente
// y no es lo esperado. Ahora, si colocamos private fabricante: string; no se puede modificar fuera de la clase
// pero tampoco la clase VehiculoTerrestreAbstractProtected puede acceder a this.fabricante
// Por lo tanto, para solucionar esto agregamos el modificador protected en la clase superior
// protected fabricante: string; y tampoco va a poder ser accedido desde afuera de la clase


