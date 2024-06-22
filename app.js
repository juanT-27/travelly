const preloader= document.querySelector(`[data-preloader]`);
const navBtn= document.querySelector(`.navBtn`);
const navBar= document.querySelector(".nav");
const navLink= document.querySelectorAll(".navLink")
// function to toggle a single class of an element
const toggleVisibility = (elem, classText)=>{
    elem.classList.toggle(classText)
}

// domloaded
document.addEventListener("DOMContentLoaded", (e)=>{
    navBtn.addEventListener("click", ()=> toggleVisibility(navBar, "visibility"))
    })

window.addEventListener("load", (e)=>{
    setTimeout(() => {
    preloader.classList.add("remove")
    }, 1000);
})