

var todo = ["brbkr,gebj"]

var input = prompt("What would you like to do?")
while (input !== "quit") {
    if(input === "list"){
        todo.forEach(function(todo){
            console.log(todo);
        });    
    }
    else if (input === "new") {
    var newTodo = prompt("Enter new todo")
    
    todo.push(newTodo)
    }
    // Ask again for input
    var input = prompt("What would you like to do?")
}
console.log("OK, you quit the app")