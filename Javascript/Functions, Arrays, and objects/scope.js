// window.setTimeout(function() {
// // Put JS Code here
// }, 500)

var todos = [""]

var input = prompt("What would you like to do?")


while (input !== "quit") {
    if(input === "list"){
        console.log(todos);
    }
    
    else if (input === "new") {
    var newTodo = prompt("Enter new todo")
    
    todos.push(newTodo)
    }
    // Ask again for input
    var input = prompt("What would you like to do?")
}

console.log("OK, you quit the app")