const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function createElement(){
    var li = document.createElement("li");
    li.appendChild(document.createElement(input.value));
    ul.appendChild(li);
    input.value = "";

    //Surligne en vert lors du click sur la tache
    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createElement("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
}

function addListAfterClick(){
    if(inputLength() > 0){
        createElement();
    }
}

function addListAfterKeyPress(event){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);