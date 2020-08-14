const btn = document.getElementById("btnBuger");
const menu = document.getElementById("btnMenu")

function handleBurger(){
    btn.classList.toggle("active")
}

function init(){
    btn.addEventListener("click",handleBurger)
}
init();