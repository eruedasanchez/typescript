"use strict";
/*********** INTERFACES ***********/
const hero = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saludar: () => { console.log('hola'); }
};
// Tambien tenemos la siguiente forma para indicar funciones en la interfaz
// interface CarritoOps {
//     add(product: Producto): void,
//     remove(id: number):void,
//     clear():void
// }
const carrito = {
    totalPrice: 100,
    productos: [
        { id: 1, nombre: 'Producto 1', precio: 5000, cantidad: 12 },
        { id: 2, nombre: 'Producto 2', precio: 6000, cantidad: 1 }
    ]
};
const carritoZapas = {
    totalPrice: 100,
    productos: [
        { id: 1, nombre: 'Producto 1', precio: 5000, cantidad: 12, talla: 40 },
        { id: 2, nombre: 'Producto 2', precio: 6000, cantidad: 1, talla: 38 }
    ]
};
