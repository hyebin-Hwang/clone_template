const slideContainer = document.getElementById("slideUl");
const slideList = slideContainer.querySelectorAll("li")
const leftBtn = document.getElementById(`btnleft`);
const rightBtn = document.getElementById(`btnright`);

let libox = slideList[0].offsetWidth;
let box_width = libox + 20;
let count = 0;


function left(){
slideContainer.style.left = -(box_width*3) * count + 'px';
};
left()
function right(){
slideContainer.style.left = -(box_width*3) * count + 'px';
}
right();
//크기가 줄어들대 widht 줄이고 거기에 맞게 크기설정


slideContainer.style.width = (slideList.length) * box_width + 'px';

function leftMq(){
slideContainer.style.left = -(box_width*2) * count + 'px';
};
leftMq()
function rightMq(){
slideContainer.style.left = -(box_width*2) * count + 'px';
}
rightMq();

function handleMqRight(){
    slideContainer.style.width = (slideList.length) * box_width + 'px';

        count++;
        rightMq();
        if(count === 4){
            count = 0;
        slideContainer.style.left = '0';
    }
}
handleMqRight()

function handleMqLeft(){
    slideContainer.style.width = (slideList.length) * box_width + 'px';

    if(count <= 0){
        count = 4;
        slideContainer.style.right = (slideList.length) * box_width + 'px';
        }
    count = count - 1;
    leftMq();
}
handleMqLeft()

function handleRight(){
    slideContainer.style.width = (slideList.length) * box_width + 'px';

    count++;
    right();
        if(count === 3){
            count = 0;
        slideContainer.style.left = '0';
    }
}
handleRight()

function handleLeft(){
    slideContainer.style.width = (slideList.length) * box_width + 'px';

    if(count <= 0){
        count = 3;
        slideContainer.style.right = (slideList.length) * box_width + 'px';
        }
    count = count - 1;
    left();
}
handleLeft()
//오류가 나는 이유 웹의 크기가 변경되었을 때 widht크기를 재선언하지않음  toggle 기능 확인
function matchSlide(e){
    if(e.matches){
        rightBtn.removeEventListener('click',handleRight);
        rightBtn.addEventListener('click',handleMqRight);
        leftBtn.removeEventListener('click',handleLeft);
        leftBtn.addEventListener('click',handleMqLeft);
        console.log(true)
    }else{
        rightBtn.addEventListener('click',handleRight);
        rightBtn.removeEventListener('click',handleMqRight);
        leftBtn.addEventListener('click',handleLeft);
        leftBtn.removeEventListener('click',handleMqLeft);
        console.log(false)
    }
}

function init(){
    const slideMq = window.matchMedia("screen and (max-width:700px)");
    matchSlide(slideMq);
    slideMq.addListener(matchSlide);
}
init();

