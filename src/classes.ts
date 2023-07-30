/*********** CLASSES ***********/

class Avenger {
    /*** Declaracion de nombre y tipo de los metodos ***/
    readonly name: string
    private powerScore: number      // con el #, declaramos que powerScore es una propiedad privada, es decir, solo podemos acceder a ella dentro dela clase
    // tambien puedo declarar la propiedad powerScore como privada anteponiendole private
    wonBattles: number = 0 // inicializo en 0
    /*** ***/

    constructor(name:string, powerScore: number){
        this.name = name
        this.powerScore = powerScore
    }
    
    get fullName(){
        return `${this.name}, ${this.powerScore} de poder`
    }

    set power(newPower: number){
        if(newPower <= 100){
            this.powerScore = newPower
        } else {
            throw new Error('Power score cannot be more than 100')
        }
    }
}

const spiderman = new Avenger('Spiderman', 80)
// spiderman.name = 'Hulk'   Esta linea no tiene sentido porque no quiero cambiarle el nombre al personaje. Lo soluciono declarando el nombre como readonly


/*** OBSERVACIONES ***/

// Al colocar private adelante de una propiedad, cuando se transpile el codigo TS a JS no la va a tomar como private
