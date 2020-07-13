const ulAccodion = document.getElementById(`accordionUl`);
const liAccodion = ulAccodion.querySelectorAll(`.accordionLi`);
const lis = document.querySelector(`.accordionLi`);
const OPEN = `is-open`;
//현재 p가 display:none; 클릭시 클레스 추가
// class: is-open display:block
// is-open 이 없다면 추가하기!
function openAccordion(e){
    console.log(e)
}



function handleAccordion(){
    liAccodion.forEach((e)=>{
        e.addEventListener("click",openAccordion)
    })
}
handleAccordion();


console.clear();
console.log(ulAccodion)
console.log(liAccodion)
console.log(lis)