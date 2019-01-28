var todos = ['item 1', 'item 2', 'item 3', 'item 4']

function displayTodos() {
 console.log('My todos', todos);   
}

function deleteTodo(position) {
 todos.splice(position, 1);
displayTodos();   
}

function changeTodo(position, newValue) { 
todos[position] = newValue; 
}

function addTodo (todo) {
 todos.push (todo ); 
displayTodos() 
}