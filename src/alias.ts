// Los alias se utilizan para redefinir tipos existentes con un nombre mas declarativo
// y para encapsular informacion

type Numero = number;
let n: Numero = 5;

type LoginCredentials = {
    username: string,
    password: string
}

function login(data:LoginCredentials) {
    console.log('Username:', data.username);
    console.log('Password: ', data.password);
}

login({
    username: 'Admin',
    password: 'admin123'
});