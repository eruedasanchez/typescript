// Siempre que utilizamos literal types, vamos a declarar una variable que solo
// va a poder tomar un unico valor. Por ejemplo:

let cinco: 5 = 5; // si coloco let cinco: 5 = 4; arroja error  

// Ahora, veamos el siguiente ejemplo:

let permiso: boolean = true; // permiso es de tipo boolean
let permisoInferido = true; // ahora, si le quito el tipo, TS infiere que permisoInferido es de tipo boolean
const permisoConst = true; // En este caso, TS infiere que permisoConst es de tipo true porque al ser const no pueden cambiar de valor ni ser reasignados
// Entonces, toma un unico tipo   