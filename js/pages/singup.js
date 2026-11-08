export function dodajUser(username, email, password) {
        return { username, email, password };
    }

let button = document.querySelector('button');
let form = document.querySelector('form');

button.addEventListener('click', function(e) {
    e.preventDefault();

    let username = document.querySelector('#username').value;
    

    let email = document.querySelector('#email').value;
    

    let password = document.querySelector('#password').value;
    


    if (username == " " || email == " " || password == " ") {
        return false;
    }

})