/**************** TYPE INDEXING ****************/ 

type HeroProperties = {
    isActive: boolean
    address: {
        planet: string
        city: string
    }
}

const addressHero : HeroProperties['address'] = {
    planet: 'Earth',
    city: 'Buenos Aires'
}

// En este caso, definimos la constante addressHero de tipo HeroProperties pero solo va a tomar las 
// propiedades de 'address' y necesitariamente se van a tener que pasar las propiedades de planet y city,
// va a haber un error si pasamos unicamente por ejemplo a city. Es decir:   

// const addressHeroCity: HeroProperties['address'] = {
//     city: 'Buenos Aires'
// }

// En ese caso, se produce un error 

/**************** TYPE FROM VALUE & TYPE OF ****************/

// const address = {
//     planet: 'Earth',
//     city: 'Buenos Aires'
// }

// Tenemos el objeto addres y queremos crear un tipo a traves de una constante

// type Address = typeof address; // con typeof obtenemos el tipo de address

// Pero ahora, podemos declarar tambien

// const addressTwitch: Address = {
//     planet: 'Mars',
//     city: 'Madrid'
// }

// Observemos que ahora podemos utilizar la constante addressTwitch para definir un nuevo objeto de 
// tipo Address 

/**************** TYPE FROM FUNCTION RETURN ****************/

function createAddress(){
    return {
        planet: 'Earth',
        city: 'Cordoba'
    }
}

// Ahora, supongamos que queremos extraer el objeto que devuelve la funcion createAddress(). Para ello,
// utilizamos ReturnType como mostramos en el siguiente ejemplo

type Address = ReturnType<typeof createAddress>

