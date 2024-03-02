// Capitulo 40. Exportar modulos, archivos y paquetes en TS

// Archivo donde tenemos toda la logica del almacen

// Lo exporto porque lo voy a usar en facturas.ts
export type Producto = {
    sku: string,
    nombre: string,
    descripcion: string,
    precio: number,
    urlFoto: string
}

type Almacen = {
    [sku: string]: {
        stock: number,
        ultimaEntrega: Date
    }
}

export const sumarTotal = (productos : Producto[]) => {
    let precio = 0;

    for(let producto of productos){
        precio += producto.precio
    }

    return precio;
}

