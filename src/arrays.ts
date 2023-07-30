/********************** ARRAYS **********************/

const languages: string[] = [];                             // declaramos que languages es un array de tipo string con : string[] (recomendado)
const languagesDos: Array<string> = [];                     // otra manera de declarar que languagesDos en un arreglo de tipo string
const languagesTiposCombinados: (string | number)[] = [];   // declaramos que languagesTiposCombinados es un array de tipo string o number
const languagesTiposCombinadosDos: Array<string | number> = [];

languages.push('Typescript');
languages.push('C++');
languagesDos.push('Javacript');
languagesTiposCombinados.push('Python')
languagesTiposCombinados.push(3)
languagesTiposCombinadosDos.push('C')
languagesTiposCombinadosDos.push(38)

/********************** MATRICES Y TUPLAS **********************/

// const gameBoard: string[][] = [
//     ['X', 'O', 'X'],
//     ['X', 'O', 'X'],
//     ['X', 'O', 'X']
// ]

// gameBoard[0][1] = 'sdhsd3437';

// El problema en este caso es que a cada posicion del gameBoard le podemos asignar cualquier string y eso no
// queremos. Queremos asignar unicamente 'X' o 'O'

// Entonces realizamos la siguiente correccion:

// type CellValid = 'X' | 'O' | '';

// const gameBoard: CellValid[][] = [
//     ['X', 'O', 'X'],
//     ['X', 'O', 'X'],
//     ['X', 'O', 'X']
// ]

// gameBoard[0][1] = 'X';

// Ahora ya tenemos bien definidos los caracteres a colocar en cada posicion del arreglo pero podemos modificar
// las dimensiones del tablero y eso no queremos. Lo solucionamos con TUPLAS de la siguiente manera:

type CellValid = 'X' | 'O' | '';

type GameBoard = [
    [CellValid, CellValid, CellValid],
    [CellValid, CellValid, CellValid],
    [CellValid, CellValid, CellValid]
]

const gameBoard: GameBoard = [
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['X', 'O', 'X']
    ]

