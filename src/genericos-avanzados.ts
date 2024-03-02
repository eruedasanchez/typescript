// Podemos agregar mas de un tipo Generico. Por ejemplo, T y U de la siguiente manera

// interface ApiRequestAdvanced<T, U> {
//     type: string,
//     success: boolean,
//     message: T,
//     whatever: U
// }

// let payloadSuccessAdvanced: ApiRequestAdvanced<string, number> = {
//     type: 'post',
//     success: true,
//     message: 'fkdkdfkdk',
//     whatever: 1000
// }

// let payloadErrorAdvanced: ApiRequestAdvanced<boolean, object> = {
//     type: 'error',
//     success: false,
//     message: true,
//     whatever: {
//         id: 1,
//         payload: 'hello world!'
//     }
// }

// Sin embargo, declarar los tipos con T,U o cualquier letra no es muy declarativo
// Por lo tanto, podemos declararla con un nombre mas declarativo como en el 
// siguiente ejemplo:

interface ApiRequestAdvanced<Mensaje, Extra> {
    type: string,
    success: boolean,
    message: Mensaje,
    whatever: Extra
}

let payloadSuccessAdvanced: ApiRequestAdvanced<string, number> = {
    type: 'post',
    success: true,
    message: 'fkdkdfkdk',
    whatever: 1000
}

let payloadErrorAdvanced: ApiRequestAdvanced<boolean, object> = {
    type: 'error',
    success: false,
    message: true,
    whatever: {
        id: 1,
        payload: 'hello world!'
    }
}

// Ahora, sabemos que el mensaje va a ser de tipo string o boolean
// y la informacion Extra va a ser de tipo number u object 



