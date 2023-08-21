const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist")

hamburger.addEventListener("click",()=>{
     navlist.classList.toggle("navbar-active")
})