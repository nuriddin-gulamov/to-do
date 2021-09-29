// Add new to-do
document.addEventListener('keydown', function (event) {
    if(event.key === "Enter") {
        if(document.getElementById('new-todo').value === "") {
            alert("Enter a new to-do...");
        } else {
            var newTodo = document.createElement('div');
            newTodo.classList.add('todo');
            newTodo.innerHTML = document.getElementById('new-todo').value;
            document.getElementsByClassName('to-dos-container')[0].appendChild(newTodo);
        }

        // Complete the to-do on click
        newTodo.onclick = function () {
            this.classList.add('complete');
        }

        // Remove the to-do on double click
        newTodo.ondblclick = function () {
            this.remove();
        }
    }
})