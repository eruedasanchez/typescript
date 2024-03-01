// Comenazamos definiendo la siguiente interface

interface Comparator {
    (first: string, second: string): number
    // tambien le puedo agregar metodos
    algorithm: string
    safe: boolean
}

function sort(c:Comparator) {
    // observamos que podemos ejecutar tanto c. como objeto
    // como c('first', 'second') como funcion
    // lo que lo transforma en un tipo hibrido
    let out = c('first', 'second');
    console.log(`Ordenando con el criterio ${c.algorithm}: ${out}`);
}

