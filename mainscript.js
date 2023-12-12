let username = document.querySelector(".username_input");
let password = document.querySelector(".password_input");
let alert = document.querySelector(".wrong_alert_box");
let testBox = document.querySelector(".test_shower_box")

function check_auth() {
    if (username.value === "watcher" && password.value === "1234") {
        window.location.href = "../ReceptionBar/recept.html"
    } else {
        alert.style.display = "flex";
    }
}

function main_card_mouse_over() {
    testBox.style.display = "block";
}

function main_card_mouse_out() {
    testBox.style.display = "none"
}