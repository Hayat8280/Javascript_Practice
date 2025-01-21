let currentUser;
let userDatabase;

window.onload = function() {
    userDatabase = JSON.parse(localStorage.getItem('userDatabase') || '[]');
    currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    checkAuth();
}

document.getElementById('clickRegister').addEventListener('click', function() {
    document.querySelector('.login-page').classList.add('hidden');
    document.querySelector('.register-page').classList.remove('hidden');
})

function checkAuth() {
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';

    if(!currentUser.username) {

        document.querySelector('.login-page').classList.remove('hidden');
        document.querySelector('.register-page').classList.add('hidden');
        document.querySelector('.user-page').classList.add('hidden');
    } else {
        document.querySelector('.login-page').classList.add('hidden');
        document.querySelector('.register-page').classList.add('hidden');
        document.querySelector('.user-page').classList.remove('hidden');
    }
}

function register() {
    userDatabase = JSON.parse(localStorage.getItem('userDatabase') || '[]');
    let username = document.getElementById('regUsername').value;
    let password = document.getElementById('regPassword').value;

    const userExists = userDatabase.find((user) => user.username === username);

    if(userExists) {
        alert('User already exists.');
        return;
    }
    
    userDatabase.push({
        username,
        password
    })

    localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
    alert('Registered successfully');
    checkAuth();
}

function login() {
    userDatabase = JSON.parse(localStorage.getItem('userDatabase') || '[]');
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    const user = userDatabase.find(
        (user) => user.username === username && user.password === password
    );
    
    if(user) {
        alert('Login successful!');
        currentUser.username = username;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        checkAuth();
    } else {
        alert('Wrong username or password!');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
}