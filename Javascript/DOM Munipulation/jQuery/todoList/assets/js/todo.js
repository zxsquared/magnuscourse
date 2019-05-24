// Check off Specific todos by clicking

$("li").click(function(){
$(this).toggleClass("completed");
    })

$("span").click(function(events){
    $(this).parent().fadeOut("500", function(){
        $(this).remove()
    })
    events.stopPropagation();
})