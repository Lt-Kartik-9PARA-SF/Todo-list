let taskDisplay = document.querySelector("#task-display");
let addBtn = document.querySelector("#add-btn");
let userInput = document.querySelector("#user-input");
let num = 0;
let date = new Date();
let topText = document.querySelector("#headerText");
topText.innerHTML= `${topText.innerText}  ${date}`;
function remove(event){
 event.parentElement.remove();
}

function completed(event){
    event.parentElement.style.background ="green";
    event.innerText = "Task Completed  ";
    event.nextElementSibling.style.display ="none";
    event.previousElementSibling.style.color ="white";
}

function addTask(){
    if(userInput.value ===""){
        alert("Please Enter a Task First");
        return;
    }
    
   num++;
let newDiv = document.createElement("div");
newDiv.className ="tasks";
newDiv.innerHTML = `<p class="taskName">Task no ${num}:- ${userInput.value}</p> <button class="completeBtn" onclick="completed(this)">Mark Completed</button> <button onclick="remove(this)" class="removeBtn">Remove</button> `
taskDisplay.appendChild(newDiv);
userInput.value="";
}

addBtn.addEventListener('click',addTask);