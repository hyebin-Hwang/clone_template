//li클릭시 none 이였는거에 display:block추가
//
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