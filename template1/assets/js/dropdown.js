//li클릭시 none 이였는거에 display:block추가
//
const navLi = document.getElementById(`nav`);
const subUl = navLi.querySelector(`#navUl`);
const subLi = navLi.querySelectorAll(`.navLi`);
const BLOCK = `block`;

function handleOver(){
    subLi.forEach((e)=>{
        e.classList.add(BLOCK)
    })
}
function stopOver(){
    subLi.forEach((e)=>{
        e.classList.remove(BLOCK)
    })
}

function ClickList(){
    navLi.addEventListener("mouseover",handleOver)
    navLi.addEventListener("mouseout",stopOver)
}

function init(){
    ClickList();
}
init();


