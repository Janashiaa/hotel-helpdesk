let MainSection = document.querySelector(".main_section");
let FreeRoomsSection = document.querySelector(".free_rooms_section");
let TakenRoomsSection = document.querySelector(".taken_rooms_section");
let GuestListSection = document.querySelector(".guest_list_section");
let EndedContractSection = document.querySelector(".ended_contracts_section");
let CommentTextArea = document.querySelector(".guest_list_comment_area");
let CommentTextShower = document.querySelector(".guest_list_comment_shower");
let TextSaverButton = document.querySelector(".guest_list_details_box_card_saver");
let RoomNumbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
let RoomSection = document.querySelector(".room_selector_section_1_room_list_container");
let SectionNames = ["სართული 2", "სართული 3", "სართული 4", "სართული 5", "სართული 6","სართული 7"];
let SectionContainer = document.querySelector(".main_section_worksheet_backer");

for (let i = 0; i < RoomNumbers.length; i++) {
    let RoomInfo = document.createElement("div");
    RoomInfo.classList.add("room_selector_section_1_option");
    RoomInfo.innerHTML = "1" + RoomNumbers[i];
    RoomSection.append(RoomInfo);
}

for (let i = 0; i < SectionNames.length; i++) {
    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("room_selector_section_1");
    let SectionInfo = document.createElement("div");
    SectionInfo.classList.add("room_selector_section_1_floor_name");
    let h1 = document.createElement("h1");
    h1.classList.add("room_selector_section_1_floor_name_text");
    h1.textContent = SectionNames[i];
    SectionInfo.appendChild(h1);
    let RoomListContainer = document.createElement("div");
    RoomListContainer.classList.add("room_selector_section_1_room_list_container");

    for (let j = 0; j < RoomNumbers.length; j++) {
        let RoomInfo = document.createElement("div");
        RoomInfo.classList.add("room_selector_section_1_option");
        RoomInfo.innerHTML = RoomNumbers[j];
        RoomListContainer.append(RoomInfo);
    }

    wrapperDiv.appendChild(SectionInfo);
    wrapperDiv.appendChild(RoomListContainer);
    SectionContainer.append(wrapperDiv);
}


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

TextSaverButton.addEventListener("click", () => {
    if (CommentTextArea.value !== "") {
        let h1 = document.createElement("h1");
        let deleteBtn = document.createElement('button');
        h1.innerText = CommentTextArea.value;
        h1.classList.add("guest_list_comment_shower_text");
        let div = document.createElement('div');
        div.classList.add('flex');
        deleteBtn.classList.add("delete_comment");
        deleteBtn.addEventListener('click', () => {
            CommentTextShower.removeChild(div)
        })
        div.append(deleteBtn, h1);
        CommentTextShower.append(div);
        CommentTextArea.value = "";
    }
}) 
