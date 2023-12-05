let username = document.querySelector(".username_input");
let password = document.querySelector(".password_input");
let alert = document.querySelector(".wrong_alert_box");

function check_auth(){
    if (username.value === "davitjanashia3@gmail.com" && password.value === "12345678") {
        window.location.href = "../ReceptionBar/recept.html"
    } else {
        alert.style.display = "flex";
    }
}