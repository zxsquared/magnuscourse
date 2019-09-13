// Original variables
var todos = [""]

var input = prompt("What would you like to do?")
    while (input !== "quit") {
        if(input === "list"){
      listTodos()
        }
        else if (input === "new") {
       newTodo()
        }
        else if (input === "delete") {
            deleteTodo()
        }

        // Ask again for input
        var input = prompt("What would you like to do?")
    }
console.log("OK, you quit the app")
// Functions to shorten while loop

                function listTodos() {
    console.log("************")
    todos.forEach(function(todo, i){

        console.log(i + ": " + todo)
    })    
    console.log("************")
                }

                function newTodo() {
    var newTodo = prompt("Enter new todo")
    
    todos.push(newTodo)
    console.log("Added todo")
                }

                function deleteTodo() {
    // Ask dfor index of todo
    var index = prompt("Enter index of todo you want to delete.")
    // Delete todo
    // Splice
    todos.splice(index, 1)
    console.log("Deleted todo")
                }