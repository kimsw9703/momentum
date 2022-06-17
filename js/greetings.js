const beforeLogin = document.querySelector("#before-login");
const afterLogin = document.querySelector("#after-login");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function paintGreeting(username) {
    greeting.innerText = `Hello, ${username}.`;
    afterLogin.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    beforeLogin.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    beforeLogin.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreeting(savedUsername);
}