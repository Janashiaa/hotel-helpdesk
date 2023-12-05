let username = document.querySelector(".username_input");
let password = document.querySelector(".password_input");

function check_auth(){
    if (username.value === "davitjanashia3@gmail.com" && password.value === "12345678") {
        window.location.href = "../ReceptionBar/recept.html"
    } else {
        window.location.href = "index.html"
    }
}