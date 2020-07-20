
// ACCORDION MENU //

const accHeader = document.querySelectorAll(`.accordion_headerJs`);

accHeader.forEach(accHeader =>{
    accHeader.addEventListener("click",event =>{
        const activeHeader = document.querySelector(`.accordion_headerJs.active`);
        if(activeHeader && activeHeader !== accHeader){
            activeHeader.classList.toggle("active");
            activeHeader.nextElementSibling.style.maxHeight = 0;
        }
        accHeader.classList.toggle("active");
        const itemBody = accHeader.nextElementSibling;
        if(accHeader.classList.contains("active")){
            itemBody.style.maxHeight = itemBody.scrollHeight + "px";
        }else {
            itemBody.style.maxHeight = 0;
        }
    })
})

// DROPDOWN MENU

const dropContainer = document.getElementById(`dropdownJs`);
const dropUl = dropContainer.querySelector(`#dropUl`);
const dropList = dropContainer.querySelectorAll(`.dropLi`);
const BLOCK = `block`;

function handleOver(){
    dropUl.classList.add(BLOCK)
}
function stopOver(){
    dropUl.classList.remove(BLOCK)
}

function clickToggle(){
    dropUl.classList.toggle(BLOCK)
}

function matchEvent(e) {
    if (e.matches) {
    dropContainer.addEventListener(`click`, clickToggle)
    dropContainer.removeEventListener(`mouseover`, handleOver)
    dropContainer.removeEventListener(`mouseout`, stopOver)
    } else {
    dropContainer.removeEventListener(`click`, clickToggle)
    dropContainer.addEventListener(`mouseover`, handleOver)
    dropContainer.addEventListener(`mouseout`, stopOver)
    }
}

function clickList() {
    const mq = window.matchMedia("screen and (max-width:1024px)");
    matchEvent(mq);
    mq.addListener(matchEvent);
}
clickList();


// HAMBUGER MENU

const menuHambuger = document.getElementById(`menu`);
const showNav = document.getElementById(`navJs`);
const OPEN = `is-open`;
const CHANGE = `change`

function handleHambuger(){
    showNav.classList.toggle(OPEN);
    menuHambuger.classList.toggle(CHANGE)
}


function hambugerClick(){
    menuHambuger.addEventListener("click",handleHambuger)
}
hambugerClick();



