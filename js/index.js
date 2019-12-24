// on/off hamburger Menu 
var nav = document.getElementsByClassName("header__nav");

document.querySelector(".hamburger").addEventListener("click", function(){
    nav[0].classList.toggle("active");
});