let addToDoButton = document.getElementById('addToDo');
let addToDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', addToDo);
inputField.addEventListener('keyup', function(event) {
if (event.key === 'Enter') {
addToDo();
}
});

function addToDo() {
let paragraph = document.createElement('p');
paragraph.classList.add('paragraph-styling');
paragraph.innerText = inputField.value;
addToDoContainer.appendChild(paragraph);
inputField.value = "";
paragraph.addEventListener('click', function () {
paragraph.style.textDecoration = "line-through";
});
paragraph.addEventListener('dblclick', function () {
addToDoContainer.removeChild(paragraph);
});
}
