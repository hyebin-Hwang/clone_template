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