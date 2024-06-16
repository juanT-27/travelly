const preloader= document.querySelector(`[data-preloader]`);
const navBtn= document.querySelector(`.navBtn`);
const navBar= document.querySelector(".nav")
const toggleVisibility = (e)=>{
    e.classList.toggle("visibility")
    
}
document.addEventListener("DOMContentLoaded", (e)=>{
    navBtn.addEventListener("click", e=> toggleVisibility(navBar))
})

window.addEventListener("load", (e)=>{
    setTimeout(() => {
    preloader.classList.add("remove")
    }, 1000);
})