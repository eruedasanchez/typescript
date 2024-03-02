// Comenzamos declararndo un enum de permisos

// enum Permisos {
//     EscribirMensajes = 1,
//     Reaccionar = EscribirMensajes * 2,
//     EnviarEnlaces = Reaccionar * 2,
//     ConectarseACanalESDeVoz = EnviarEnlaces * 2
// }

// De esta manera, llamamos a los enums con valores computados
// y por lo tanto, EscribirMensajes = 1, Reaccionar = 2,
// EnviarEnlaces = 4 y ConectarseACanalesDeVoz = 8


// Tambien, le podemos incorporar una funcion que tengamos cierto control
function random() {
    return 9;
}

enum Permisos {
    EscribirMensajes = random(),
    Reaccionar = EscribirMensajes * 2,
    EnviarEnlaces = Reaccionar * 2,
    ConectarseACanalESDeVoz = EnviarEnlaces * 2
}

// De este modo, EscribirMensajes = 9, Reaccionar = 18, EnviarEnlaces = 36 
// y ConectarseACanalESDeVoz = 72
