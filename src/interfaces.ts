/*********** INTERFACES ***********/

// Anteriormente, vimos los tipos como por ejemplo:

// type Hero = {
//     id: string,
//     name: string,
//     age: number
// }

// const hero: Hero = {
//     id: '1',
//     name: 'Spiderman',
//     age: 30
// }

// Pero tenemos tambien otra forma de definir contratos que tienen que seguir los objetos. Estas son las INTERFACES

interface Hero {
    id: string,
    name: string,
    age: number
    saludar: () => void
}

const hero: Hero = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saludar: () => {console.log('hola')}
}

/*********** Anidamiento de interfaces ***********/

interface Producto {
    id: number,
    nombre: string,
    precio: number,
    cantidad: number
}

interface Zapatilla extends Producto {
    talla: number
}

// Al colocar interface Zapatilla extends Producto, estamos indicando que la interfaz Zapatilla tambien va a tener los metodos o
// propiedades de la interfaz Producto, es decir, id, nombre, precio, cantidad

interface CarritoDeCompras {
    totalPrice: number,
    productos: (Producto | Zapatilla)[] // productos es un arreglo de la interfaz Producto
}

// Indicar funciones en la interfaz

interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
    clear: () => void
}

// Tambien tenemos la siguiente forma para indicar funciones en la interfaz

// interface CarritoOps {
//     add(product: Producto): void,
//     remove(id: number):void,
//     clear():void
// }

const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {id: 1, nombre: 'Producto 1', precio: 5000, cantidad:12},
        {id: 2, nombre: 'Producto 2', precio: 6000, cantidad:1}
    ]
}

interface CarritoDeComprasZapas {
    totalPrice: number,
    productos: Zapatilla[] // productos es un arreglo de la interfaz Zapatilla
}

const carritoZapas: CarritoDeComprasZapas = {
    totalPrice: 100,
    productos: [
        {id: 1, nombre: 'Producto 1', precio: 5000, cantidad:12, talla:40},
        {id: 2, nombre: 'Producto 2', precio: 6000, cantidad:1, talla: 38}
    ]
}

