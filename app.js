let navlist = document.querySelector(".navlist")
let navbar = document.querySelector(".navbar")


let burger = document.querySelector(".burger")

burger.addEventListener("click", function(){
    navlist.classList.toggle("v-class")
    navbar.classList.toggle("h-nav")
})