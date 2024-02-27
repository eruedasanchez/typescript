// Aplicacion de funciones

// Funcion sumar

const sumar = (a:number, b:number) : number => {
    return a + b;
}

const primerOperando = 3;
const segundoOperando = 4;

console.log(`El resultado de sumar ${primerOperando} más ${segundoOperando} es igual a ${sumar(primerOperando,segundoOperando)}`);

// Funcion restar

let restar: (a: number, b: number) => number = function restar(a:number, b:number) : number {
    return a - b;
};

console.log('resultado resta:', restar(10,4));

// Funcion multiplicar

// let multiplicar: (m: number, n: number) => number;
// multiplicar = (m,n) => m * n; // declaracion como arrow function

// console.log('resultado multiplicación:', multiplicar(3,4));

// Ahora vamos a declarar a multiplicar con una funcion de callback

// IDEA:

// multiplicar(A, B, function(result)){
//      console.log(A * B es igual a result)
// }

let multiplicar: (a:number, b:number, callback: (result:number) => void) => void;

multiplicar = (a,b,callback) => callback(a * b);

multiplicar(4,5, function(result) {
    console.log(`El resultado de la multiplicacion es ${result}`);
})



