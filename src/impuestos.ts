// Capitulo 42. Export default e import * en TS 

export function IVA(precio:number) {
    return precio * 0.21;
}

export function descuento(precio:number) {
    return precio * 0.10;
}

// Observemos que tambien puedo combinar export default con export solo

export type Precio = number;
export type Impuesto = number;