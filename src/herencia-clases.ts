class Vehiculo {
    fabricante: string;

    constructor(fabricante: string){
        this.fabricante = fabricante;
    }

    moverse(){
        console.log(`El vehiculo ${this.fabricante} se ha movido magicamente`);
    }
}

class VehiculoTerrestre extends Vehiculo {
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
}

class VehiculoAereo extends Vehiculo {
    moverse(){
        console.log("El vehiculo aereo se ha movido");
        super.moverse(); 
    }
}

class VehiculoMaritimo extends Vehiculo {
    moverse(){
        console.log("El vehiculo maritimo se ha movido");
        super.moverse(); 
    }
}

// let vehiculo = new VehiculoTerrestre("Airbus"); // VehiculoAereo hereda el constructor de Vehiculo y debe pasarse un fabricante por parametro
// vehiculo.moverse();

let vehiculo = new VehiculoTerrestre("Yahama", "moto"); // VehiculoAereo hereda el constructor de Vehiculo y debe pasarse un fabricante por parametro
vehiculo.moverse();