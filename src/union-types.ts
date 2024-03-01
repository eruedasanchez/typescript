// Union types sirve para declarar una variable de multiples tipos

function convertir(valor: string | number) {
    // console.log('Mostrando el resultado del valor ingresado: ', valor);
    // Al declarar valor de tipo string o number, observamos que 
    // los metodos de valor (valor.) disponibles son los comunes a
    // string y number
    if(typeof(valor) === 'string'){
        // TS infiere en esta guarda que estamos en el type string 
        // y solo muestra los metodos de tipo string
        valor.trim(); // trim() solo disponible en type string
    } else if(typeof(valor) === 'number') {
        valor.toFixed(); // toFixed() solo de type number
    } else {
        // valor es de tipo never porque valor es de tipo number o string
        // valor.
    }  
}

// En este caso, convertir solo admite valores de tipo string o number
convertir('hola');
convertir(5);

// UNIONES DISCRIMINANTES
