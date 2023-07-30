"use strict";
/*********** CLASSES ***********/
class Avenger {
    /*** ***/
    constructor(name, powerScore) {
        // tambien puedo declarar la propiedad powerScore como privada anteponiendole private
        this.wonBattles = 0; // inicializo en 0
        this.name = name;
        this.powerScore = powerScore;
    }
    get fullName() {
        return `${this.name}, ${this.powerScore} de poder`;
    }
    set power(newPower) {
        if (newPower <= 100) {
            this.powerScore = newPower;
        }
        else {
            throw new Error('Power score cannot be more than 100');
        }
    }
}
const spiderman = new Avenger('Spiderman', 80);
// spiderman.name = 'Hulk'   Esta linea no tiene sentido porque no quiero cambiarle el nombre al personaje. Lo soluciono declarando el nombre como readonly
/*** OBSERVACIONES ***/
// Al colocar private adelante de una propiedad, cuando se transpile el codigo TS a JS no la va a tomar como private
