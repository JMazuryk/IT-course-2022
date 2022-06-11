

let todos = document.getElementById('todos');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(todolist => {
    for (const todo of todolist) {
        let li = document.createElement('li');
        li.innerText = todo.title;
        todos.appendChild(li);
if (todo.completed){
    li.classList.add('completed');
} else {
   li.classList.add('not-completed');
}
    }

});