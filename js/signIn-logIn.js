import { goHomeLinkCreator } from './global-properties.js'

let $ = document;
goHomeLinkCreator();


/////////////////////////////// validation part /////////////////////////////

let userCreate = $.getElementById("userCreate");
let passCreate = $.getElementById("passCreate");
let passCreateConfirm = $.getElementById("passCreateConfirm");
let userMessage = $.getElementById("userMessage");
let passMessage = $.getElementById("passMessage");
let passConfirmMessage = $.getElementById("passConfirmMessage");


function userCounter() {
    if (userCreate.value.length < 8) {
        userMessage.innerHTML = "Your user name can not be less than 8 charachter!"
        userMessage.style.color = "red";
    } else {
        userMessage.innerHTML = 'Your user name is OK!';
        userMessage.style.color = "green";
    }
};

function passCounter() {
    if (passCreate.value.length < 8) {
        passMessage.innerHTML = "Your password can not be less than 8 charachter!"
        passMessage.style.color = "red";
    } else {
        passMessage.innerHTML = '';
    }
}

function passConfirmFunc() {
    if (passCreateConfirm.value == passCreate.value) {
        passConfirmMessage.innerHTML = "Your password is confirm.";
        passConfirmMessage.style.color = "green";
    } else {
        passConfirmMessage.innerHTML = "Your password is not confirm!";
        passConfirmMessage.style.color = "red";
    }
}

userCreate.addEventListener('keyup', () => {
    userCounter()
});
passCreate.addEventListener('keyup', () => {
    passCounter()
});
passCreateConfirm.addEventListener('keyup', () => {
    passConfirmFunc()
});

//////////////////////////////////// buttons part ///////////////////////////

let createContainer = $.getElementsByClassName('createContainer');
let loginContainer = $.getElementsByClassName('loginContainer');
let createAcc = $.getElementById("createAcc");
let loginAcc = $.getElementById("login");

/////////////////////////////// stop buttons to reload the page and change functions ////////////////////

function showCreateAcc() {
    createContainer[0].style.display = "block";
    loginContainer[0].style.display = "none";
}

function showLoginAcc() {
    loginContainer[0].style.display = "block";
    createContainer[0].style.display = "none";
}

createAcc.addEventListener("click", function (event) {
    event.preventDefault();
    showCreateAcc()
})

loginAcc.addEventListener("click", function (event) {
    event.preventDefault();
    showLoginAcc();
})
