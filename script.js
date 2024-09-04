let addButton = document.getElementById("add")
let deleteAll =document.getElementById("deletAll")
let taskInput = document.getElementById("input")
let list = document.getElementById("list")
let dateInput = document.getElementById("dateInput")
let timeInput = document.getElementById("timeInput")
addButton.onclick = function (event) {
    // Этот метод нужен для того, чтобы страница не обновлялась
    event.preventDefault()
    let button = document.createElement("button")
    console.log(dateInput.value + " " + timeInput.value + " " + taskInput.value);
    let li = document.createElement("li")
    li.innerHTML = dateInput.value + " " + timeInput.value + " " + taskInput.value
    li.appendChild(button)
    list.appendChild(li)
    button.innerHTML = "🗑️"
    button.onclick = function (event) {
        event.preventDefault()

// метод
        li.remove()
    }
}
deleteAll.onclick=function(event){
list.innerHTML=""
}