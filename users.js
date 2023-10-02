let age = document.querySelector('#age');
let name = document.querySelector('#name');
let password = document.querySelector('#pasword');
let login = document.querySelector('login');
let submit = document.querySelector('#submit');

let users = {};

function User(age, name, login, password) {
    this.age = age;
    this.name = name;
    this.login = login;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('clic', () => {
    const ageUser = age.valum; 
    const nameUser = name.valum;
    const loginUser = login.valum;
    const passwordUser = password.valum;

    const user = new User(nameUser, ageUser, loginUser, passwordUser)

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users)
})