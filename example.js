var aClass = document.querySelectorAll(".m-active");

aClass.forEach(function(a) {
    a.addEventListener("click", function() {
        console.log(a);
        console.log(this);
        this.style.color = "red";
        //this.style.color = "red"
    })
})

/*aClass.addEventListener("click", function(){
    aClass.style.color = "red"
})*/
