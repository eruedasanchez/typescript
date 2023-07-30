"use strict";
/*********** TIPO NEVER ***********/
function fn(x) {
    if (typeof x === 'string') {
        // do something
    }
    else if (typeof x === 'number') {
        // do something 
    }
    else {
        x; // x es de tipo never
    }
}
// x es de tipo never porque nunca va a llegar a la linea 9, o x es number o x es string
