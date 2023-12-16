let MainSection = document.querySelector(".main_section");
let FreeRoomsSection = document.querySelector(".free_rooms_section");
let TakenRoomsSection = document.querySelector(".taken_rooms_section");
let GuestListSection = document.querySelector(".guest_list_section");
let EndedContractSection = document.querySelector(".ended_contracts_section");
let CommentTextArea = document.querySelector(".guest_list_comment_area");
let CommentTextShower = document.querySelector(".guest_list_comment_shower");
let TextSaverButton = document.querySelector(".guest_list_details_box_card_saver");

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

function AdminPanel() {
    window.location.href = "../index.html"
}

TextSaverButton.addEventListener("click", () => {
    if(CommentTextArea.value !== ""){
        console.log(CommentTextArea.value);
        let h1 = document.createElement("h1")
        let deleteBtn = document.createElement('button')
        h1.innerHTML = CommentTextArea.value;
        h1.classList.add("guest_list_comment_shower_text");
        let div = document.createElement('div')
        div.classList.add('flex')
        deleteBtn.classList.add("delete_comment")
        div.append(deleteBtn,h1)
        CommentTextShower.append(div);
        CommentTextArea.value = ""
    }
}) 