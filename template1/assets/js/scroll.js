const scrollContaineer = document.getElementById(`scrollJs`);

function handleScroll(){
    const ypos = window.pageYOffset;
    if(ypos > 400) {
        scrollContaineer.classList.add(`scroll-nav`)
    }else{
        scrollContaineer.classList.remove(`scroll-nav`)
    }
}

window.addEventListener("scroll",handleScroll)