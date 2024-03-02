// enum DiaSemanaAdvanced {
//     Lunes = 401, 
//     Martes, 
//     Miercoles,
//     Jueves,
//     Viernes = 701,
//     Sabado, 
//     Domingo
// }

// **
enum DiaSemanaAdvanced {
    Lunes = 'Lunes', 
    Martes = 'Martes', 
    Miercoles = 'Miercoles',
    Jueves = 'Jueves',
    Viernes = 'Viernes',
    Sabado = 'Sabado', 
    Domingo = 'Domingo'
}

interface CitaMedicaAdvanced {
    day: DiaSemanaAdvanced
}

let citaConMedicoAvanzada : CitaMedicaAdvanced = {
    // dia: 0
    day: DiaSemanaAdvanced.Lunes
} 

console.log('citaConMedicoAvanzada:', citaConMedicoAvanzada); 
// Muestra citaaConMedicoAvanzada: { day: 401 }
// Entonces, para mostar el dia lunes y no 401,
// debemos declararlo como Lunes = 'Lunes'
// pero como los strings no los puedo sumar, debo
// declararlos a todos como en ** y obtengo
// citaConMedicoAvanzada: { day: 'Lunes' }






// En el caso de declarar el dia Lunes = 401, el contador
// se resetea y todos los demas dias comenzan a autoincrementarse a partir del
// 401, es decir, Martes = 402, Miercoles = 403, Jueves = 404 y si
// declaro Viernes = 701, el valor de Sabado = 702 y Domingo = 703  

// Tambien puedo asignarle a cada Dia un valor distinto, por ejemplo,
// Martes = 402, Miercoles = 503, Jueves = 104, ....
