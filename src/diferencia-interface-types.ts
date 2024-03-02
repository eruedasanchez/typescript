interface X {
    a: string
}

interface X {
    b: string
}

interface X {
    c: string
}

// notemos que declaramos 3 interfaces con el mismo nombre 
// y x puede acceder a las propiedades de las mismas
// Osea, estamos extendiendo la interface X original y sumandole
// las props/metodos c y d. En cambio, esto no lo puedo hacer con tipos.

// function use(x:X) {
//     return x.a  + x.b + x.c
// }


// Ahora, veamos el siguiente ejemplo para fusionar una interfaz 

interface Window {
    accountID: number
}

function use(w: Window) {
    // w.accountID 
    // w.addEventListener
}

// De esta manera, podemos acceder a la propiedad w.accountID que definimos
// y a todas las propiedades de la interface global Window como w.addEventListener 
// o w.blur