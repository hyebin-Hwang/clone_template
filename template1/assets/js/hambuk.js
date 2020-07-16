const menuHambuger = document.getElementById(`menu`);
const showNav = document.getElementById(`navJs`);
const OPEN = `is-open`;
const CHANGE = `change`

//클릭시 DISPLAY:BLOCK
function handleHambuger(){
    showNav.classList.toggle(OPEN);
    menuHambuger.classList.toggle(CHANGE)
}


function hambugerClick(){
    menuHambuger.addEventListener("click",handleHambuger)
}
hambugerClick();

