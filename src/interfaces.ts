// Al implementar interfaces, solo podemos pasar exactamente 
// todas las propiedades que declaramos
interface UserData {
    // declaro username readonly para que no se pueda modificar 
    // por fuera de la interface y solo utilizando el metodo rename
    readonly username: string,
    // declaramos un objeto de tipo read only
    readonly personal: {
        name: string,
        email: string
    }
    created_at?: Date, // lo declaro opcional (puede estar o no al llamar la interface)
    superuser: boolean,
    // tambien puedo declarar funciones
    logout(): void,
    rename: (username: string) => void   // otra manera de declarar funciones
}

function login() : UserData {
    return {
        username: 'admin',
        created_at: new Date(), 
        superuser: true,
        // debo llamar a las funciones necesariamente de la interface
        personal: {
            name: 'Adminencio',
            email: 'foo@example.com'
        }, 
        logout(){
            console.log('Adios')
        },
        rename(username){
            // no es necesario declarar el tipo de username
            console.log(`Convirtiendo el nombre del usuario a mayusuculas: ${username.toUpperCase()}`)
        }
    }
}

let data: UserData = login();
// data.personal = {
//     name: 'Juan',
//     email: 'juan@test.com'
// }
// error porque el objeto es de tipo read only, no se puede modificar

data.personal.name = 'Roberto'; // a pesar de que el objeto es readonly, las props no y las puedo cambiar
data.created_at?.toISOString(); // le agrego ? porque puede estar o no, ser de tipo Date o undefined
data.created_at!.toISOString(); // con ! estoy seguro que va existir y va a ser de tipo Date si o si


