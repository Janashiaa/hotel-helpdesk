let MainSection = document.querySelector(".main_section");
let FreeRoomsSection = document.querySelector(".free_rooms_section");
let TakenRoomsSection = document.querySelector(".taken_rooms_section");
let GuestListSection = document.querySelector(".guest_list_section");
let EndedContractSection = document.querySelector(".ended_contracts_section");



function MainPage() {
    MainSection.style.display = "block"
    FreeRoomsSection.style.display = "none"
    TakenRoomsSection.style.display = "none"
    GuestListSection.style.display = "none"
    EndedContractSection.style.display = "none"
}

function FreeRooms() {
    MainSection.style.display = "none"
    FreeRoomsSection.style.display = "block"
    TakenRoomsSection.style.display = "none"
    GuestListSection.style.display = "none"
    EndedContractSection.style.display = "none"
}

function TakenRooms() {
    MainSection.style.display = "none"
    FreeRoomsSection.style.display = "none"
    TakenRoomsSection.style.display = "block"
    GuestListSection.style.display = "none"
    EndedContractSection.style.display = "none"
}

function GuestList() {
    MainSection.style.display = "none"
    FreeRoomsSection.style.display = "none"
    TakenRoomsSection.style.display = "none"
    GuestListSection.style.display = "block"
    EndedContractSection.style.display = "none"
}

function EndedContracts() {
    MainSection.style.display = "none"
    FreeRoomsSection.style.display = "none"
    TakenRoomsSection.style.display = "none"
    GuestListSection.style.display = "none"
    EndedContractSection.style.display = "block"
}

function ExitButton() {
    window.location.href = "../index.html"
}