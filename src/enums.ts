// Comenzamos declarando el tipo enum

enum DiaSemana {
    Lunes, 
    Martes, 
    Miercoles,
    Jueves,
    Viernes,
    Sabado, 
    Domingo
}

interface CitaMedica {
    dia: DiaSemana
}

let citaConMedico : CitaMedica = {
    dia: 0
    // dia: DiaSemana.Lunes
} 

// Los tipos son bidireccionales. Por ejemplo,
// se generan ids autoincrementables donde Lunes = 0,
// Martes = 1, Miercoles = 2, ....
// Y cuando lo llamamos en citaConMedico dia, podemos
// declararlo como dia: 0 o dia: DiaSemana.Lunes 