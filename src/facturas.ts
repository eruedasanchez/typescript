// Capitulo 41. Importar modulos, archivos y paquetes en TS

// import { Producto } from "./almacen"; // Importo el tipo Producto de almacen.ts 

// const procesar = (productos : Producto[]) => {
//     console.log('procesando facturas ....');
// }

// Capitulo 42. Export default e import * en TS 

// Ahora, si queremos importar la funcion IVA de impuestos realizo lo siguiente:
import { ProductoSolo } from './producto';
// import IVA, {Precio, Impuesto} from './impuestos'; // no hay necesidad de colocar IVA entre {}
import * as impuestos from './impuestos'; // importo todas las funciones (no clases) de impuestos.ts 

// Puedo acceder a todas las funciones definidas en impuestos.ts
// impuestos.IVA
// impuestos.descuento