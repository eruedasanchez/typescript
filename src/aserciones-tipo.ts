/*********** ASERCIONES DE TIPO ***********/

// Supongamos el siguiente ejemplo:

// const canvas = document.getElementById('canvas');

// ¿Como sabe TS que realmente queremos recuperar un elemento canvas? No lo sabe porque TS 
// ejecuta estaticamente no en tiempo de ejecucion

// Ahora, quiero recuperar el contexto del canvas de la siguiente manera:

// const ctx = canvas?.getContext('2d');

// Nos devuelve 2 errores: En primer lugar, nos indica que canvas es posiblemenete null y por lo tanto, agregamos
// para solucionar canvas?.getContext('2d'); esto
// Una vez solucionado esto, nos indica que getContext no existe en el tipo 'HTML Element'. 
// Esto es asi porque getElementById nos puede devolver:

// null si no lo encuentra
// HTML Element si lo encuentra porque como no sabe si es div, p, span, etc devuelve el tipo mas general 
// Pero nosotros queremos un tipo mas especifico que es el HTMLCanvasElement

// Una opcion es que nosotros le indiquemos el tipo como se muestra a continuacion:

// const canvas = document.getElementById('canvas') as HTMLCanvasElement;

// const ctx = canvas?.getContext('2d');

// Otra opcion es colocar el 'as HTMLCanvasElement' de la siguiente forma:

// const canvas = document.getElementById('canvas');

// const ctx = (canvas as HTMLCanvasElement)?.getContext('2d');

// Pero podemos cambiar document.getElementById('canvas') por document.getElementById('span') y TS lo reconoceria igual. Entonces, ejecutamos la siguiente linea:

// const canvas = document.getElementById('canvas');

// if(canvas !== null && canvas instanceof HTMLCanvasElement){
//     const ctx = canvas.getContext('2d');
// }

// canvas instanceof HTMLCanvasElement se interpreta como que canvas es una instancia de HTML Element

// Finalmente, como ahora TS va a poder hacer inferencias, lo dejamos de la siguiente manera:

const canvas = document.getElementById('canvas');

if(canvas instanceof HTMLCanvasElement){
    const ctx = canvas.getContext('2d');
}





