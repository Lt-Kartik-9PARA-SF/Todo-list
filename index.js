let taskDisplay = document.querySelector("#task-display");
let addBtn = document.querySelector("#add-btn");
let userInput = document.querySelector("#user-input");
let num = 0;
let date = new Date();
let topText = document.querySelector("#headerText");
let saveButton = document.querySelector("#saveBtn");
let editButton = document.querySelector("#editBtn");
let header = document.querySelector("header");
let todayDate = date.toDateString();
let dateDisplay = document.querySelector("#date")

let clock = document.querySelector("#clock");
function updateClock(){
    let date1 = new Date();
    let hh = date1.getHours();
    let mm = date1.getMinutes();
    let ss = date1.getSeconds();
    dateDisplay.innerText = todayDate;
    if(hh>=12){
        clock.innerHTML = `${hh}:${mm}:${ss} PM`;
    }
    else{
        clock.innerHTML = `${hh}:${mm}:${ss} AM`;
    }
    
    console.log('working');
}
setInterval(updateClock,1000);



function remove(event) {
    event.parentElement.remove();
}

function completed(event) {
    let date1 = new Date();
    let hh = date1.getHours();
    let mm = date1.getMinutes();
    let ss = date1.getSeconds();
    event.parentElement.style.background = "green";
    event.parentElement.firstChild.nextElementSibling.innerHTML = event.parentElement.firstChild.nextElementSibling.innerText + `<p class="taskCompletion">Completed at ${hh}:${mm}:${ss} <p/>  `;

    event.innerText = "";
    event.nextElementSibling.style.display = "none";
    event.previousElementSibling.style.display = "none";
    event.parentElement.style.color = "white";
   // event.parentElement.style.height = "12vh";
   
    
}
function editableP(event) {
    event.style.display = "none";
    event.parentElement.firstChild.nextElementSibling.setAttribute("contenteditable", true);
    event.parentElement.firstChild.nextElementSibling.focus();
     event.previousElementSibling.style.display = "block";
}
function nonEdit(event) {
    console.log("worked");
    event.parentElement.firstChild.nextElementSibling.setAttribute("contenteditable", false);
    event.nextElementSibling.style.display = "block";
    event.style.display = "none";
}
function addTask() {
    if (userInput.value === "") {
        alert("Please Enter a Task First");
        return;
    }

    num++;
    let newDiv = document.createElement("div");
    newDiv.className = "tasks";
    newDiv.innerHTML = `<span>Task no ${num}</span> <p class="taskName"> ${userInput.value}</p><button onclick="nonEdit(this)" class="saveBtn">Save</button> <button onclick="editableP(this)" class="editBtn" >Edit</button> <button class="completeBtn" onclick="completed(this)">Mark Completed</button> <button onclick="remove(this)" class="removeBtn">Remove</button>`
    taskDisplay.appendChild(newDiv);
    userInput.value = "";
}

addBtn.addEventListener('click', addTask);