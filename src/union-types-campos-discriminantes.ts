type OperacionSuma = {
    sumando1: number,
    sumando2: number,
    tipo: 'suma'
}

type OperacionMultiplicar = {
    operando1: number,
    operando2: number,
    tipo: 'multiplicar'
}

type Operacion = OperacionSuma | OperacionMultiplicar;

const operar = (o: Operacion) => {
    if(o.tipo == 'suma'){
        // TS infiere que el tipo va a ser OperacionSuma
        // porque no puede comparar o.tipo == 'suma'
        // cuando o es de tipo OperacionMultiplicar
        return o.sumando1 + o.sumando2; // solo estan disponibles los metodos de OperacionSuma    
    } else  if(o.tipo == 'multiplicar'){
        // TS infiere tipo OperacionMultiplicar
        return o.operando1 * o.operando2;
    }
}