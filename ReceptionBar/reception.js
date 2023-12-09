let MainSection = document.querySelector(".main_section");
let FreeRoomsSection = document.querySelector(".free_rooms_section");
let TakenRoomsSection = document.querySelector(".taken_rooms_section");
let GuestListSection = document.querySelector(".guest_list_section");
let EndedContractSection = document.querySelector(".ended_contracts_section");
var ButtonMain = document.querySelector(".main_page");
var ButtonFree = document.querySelector(".free_rooms");
var ButtonTaken = document.querySelector(".taken_rooms");
var ButtonList = document.querySelector(".guest_list");
var ButtonEnded = document.querySelector(".ended_contracts")



function MainPage() {
    MainSection.style.display = "block"
    FreeRoomsSection.style.display = "none"
    TakenRoomsSection.style.display = "none"
    GuestListSection.style.display = "none"
    EndedContractSection.style.display = "none"
    ButtonMain.style.textDecoration = "underline"
    ButtonFree.style.textDecoration = "none"
    ButtonTaken.style.textDecoration = "none"
    ButtonList.style.textDecoration = "none"
    ButtonEnded.style.textDecoration = "none"
}

function FreeRooms() {
    MainSection.style.display = "none"
    FreeRoomsSection.style.display = "block"
    TakenRoomsSection.style.display = "none"
    GuestListSection.style.display = "none"
    EndedContractSection.style.display = "none"
    ButtonMain.style.textDecoration = "none"
    ButtonFree.style.textDecoration = "underline"
    ButtonTaken.style.textDecoration = "none"
    ButtonList.style.textDecoration = "none"
    ButtonEnded.style.textDecoration = "none"
}

function TakenRooms() {
    MainSection.style.display = "none"
    FreeRoomsSection.style.display = "none"
    TakenRoomsSection.style.display = "block"
    GuestListSection.style.display = "none"
    EndedContractSection.style.display = "none"
    ButtonMain.style.textDecoration = "none"
    ButtonFree.style.textDecoration = "none"
    ButtonTaken.style.textDecoration = "underline"
    ButtonList.style.textDecoration = "none"
    ButtonEnded.style.textDecoration = "none"
}

function GuestList() {
    MainSection.style.display = "none"
    FreeRoomsSection.style.display = "none"
    TakenRoomsSection.style.display = "none"
    GuestListSection.style.display = "block"
    EndedContractSection.style.display = "none"
    ButtonMain.style.textDecoration = "none"
    ButtonFree.style.textDecoration = "none"
    ButtonTaken.style.textDecoration = "none"
    ButtonList.style.textDecoration = "underline"
    ButtonEnded.style.textDecoration = "none"
}

function EndedContracts() {
    MainSection.style.display = "none"
    FreeRoomsSection.style.display = "none"
    TakenRoomsSection.style.display = "none"
    GuestListSection.style.display = "none"
    EndedContractSection.style.display = "block"
    ButtonMain.style.textDecoration = "none"
    ButtonFree.style.textDecoration = "none"
    ButtonTaken.style.textDecoration = "none"
    ButtonList.style.textDecoration = "none"
    ButtonEnded.style.textDecoration = "underline"
}

function ExitButton() {
    window.location.href = "../index.html"
}