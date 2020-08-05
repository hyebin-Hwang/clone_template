const ControlTab = (function(){
    const openbtn = document.getElementById("menu");
    const closebtn = document.querySelector(".change");
    const hideNav = document.getElementById("hide-js");
    openbtn.addEventListener("click",()=>{
        hideNav.style.width = "240px";
    })
    closebtn.addEventListener("click",()=>{
        hideNav.style.width = "0px";
    })
    
}())
