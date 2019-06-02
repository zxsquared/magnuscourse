// Check off Specific todos by clicking

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
    })

$("ul").on("click","span", function(events){
    $(this).parent().fadeOut("500", function(){
        $(this).remove()
    })
    events.stopPropagation();
})
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        // extracting new todo text from input
        var todoText =  $(this).val();
        $(this).val("");
        // create a new li
        $("ul").append( "<li> <span> <i class='fa fa-trash'></i> </span>" + todoText + "</li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
})
// .append() takes a string of HTML and append elements to what is selected
// use .on() for potentail of **future elements**, .keypress(forExample), only searches for preloaded elements