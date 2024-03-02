// Un generico es una forma de meter parametros en una definicion de tipos

// Veamos el siguiente ejemplo:

// interface ApiRequest {
//     type: string,
//     message: string
// }

// Ahora, supongamos que consumimos una API que nos puede devolver las siguientes respuestas:

// En un caso:
// {
//     type: 'success',
//     response: {
//         object: 5
//     }
// }

// En otro caso:
// {
//     type: 'error',
//     response: null
// }

// Entonces, tendriamos que crear dos interfaces. Una para el caso donde response es de tipo object
// y otra cuando response es de tipo null.
// Para solucionar esto existen los genericos y los declaramos de la siguiente manera:

interface ApiRequest<T> {
    type: string,
    success: boolean,
    message: T
}

// Y ahora, podemos inferir el tipo de message de acuerdo a su valor.

let payloadSuccess: ApiRequest<string> = {
    type: 'post',
    success: true,
    message: 'fkdkdfkdk'
}

// Para el caso que el message es un boolean

let payloadError: ApiRequest<boolean> = {
    type: 'error',
    success: false,
    message: true
}





