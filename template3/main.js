"use strict"

const PropertiesSlider = (function(){
    const PropertieSliderBox = document.querySelector(".content04_cnt");
    const PropertieSlider = PropertieSliderBox.querySelectorAll(".content04_slider");
    const leftBtn = document.querySelector(".content04_left_arw");
    const rightBtn = document.querySelector(".content04_right_arw");

    let PropertieSliderWidth = PropertieSlider[0].offsetWidth;
    let count = 0;
    PropertieSliderBox.style.left = PropertieSliderWidth*count;  

    const clickRight = ()=>{
        count++;
        if(count === 3){
            count = 0;
        }
        PropertieSliderBox.style.left = -PropertieSliderWidth*count + "px";
    }

    const clickLeft = ()=>{
        count--;
        if(count < 0){
            count = 2;
        }
        PropertieSliderBox.style.left = -PropertieSliderWidth*count + "px";
    }

    const init = ()=>{
        leftBtn.addEventListener("click",clickLeft)
        rightBtn.addEventListener("click",clickRight)
    }    
    init();

    const matchControl = ()=>{
            PropertieSliderWidth = PropertieSlider[0].offsetWidth;
            PropertieSliderBox.style.left = PropertieSliderWidth*0;  
            init();
            
    }

    const mediaQuery = ()=>{
        const propertiesFirstMq = window.matchMedia("(max-width:1200px)");
        const propertiesSecondMq = window.matchMedia("(max-width:1040px)");
        const propertiesthirdMq = window.matchMedia("(max-width:768px)");
        const propertiesfourthMq = window.matchMedia("(max-width:560px)");
        propertiesFirstMq.addListener(matchControl);
        propertiesSecondMq.addListener(matchControl);
        propertiesthirdMq.addListener(matchControl);
        propertiesfourthMq.addListener(matchControl);
    }
    mediaQuery();
}())

const FeatureSlider = (function(){
    const dot = document.querySelector("#dot-js");
    const dotSliderBox = document.querySelector(".content02_slider");
    const dotSlider = document.querySelector(".slider_content");

    let dotSliderWidth = dotSlider.offsetWidth*3;
    let number = 0;

    const currentSlider = (num)=>{
        dotSliderBox.style.left = -dotSliderWidth*num + "px";
    }
    /*
    const handleSlider = ()=>{
        number++;
        if(number === 2){
            number = 0;
        }
        currentSlider(number);
    }
     */

    const clickDot = (event)=>{
        const span = event.target;
        let dotNumber = event.target.dataset.dot*1;
        let selected = document.getElementsByClassName("dot_act");
        if(selected.length === 0){
            span.classList.add("dot_act")
        }
        selected[0].className = selected[0].className.replace("dot_act", "");
        span.classList.add("dot_act");
        currentSlider(dotNumber);
    }

    const init = ()=>{
        dotSliderBox.style.left = dotSliderWidth*number;
        dot.addEventListener("click",clickDot)
    }
    
    const mqCurrentSlider = (num)=>{
        dotSliderBox.style.left = -dotSliderWidth*num + "px";
    }

    const mqClickDot = (event)=>{
            const span = event.target;
            let dotNumber = event.target.dataset.dot*1;
            let selected = document.getElementsByClassName("dot_act");
            if(selected.length === 0){
                span.classList.add("dot_act")
            }
            selected[0].className = selected[0].className.replace("dot_act", "");
            span.classList.add("dot_act");
            mqCurrentSlider(dotNumber);
        }

    const matchFeatureFirstMq = ()=>{
        dotSliderBox.style.left = dotSliderWidth*number;
        dotSliderWidth = dotSlider.offsetWidth*2;
        dot.addEventListener("click",mqClickDot);
    }

    const matchFeature = (e)=>{
        if(e.matches){
            matchFeatureFirstMq();
        }else{
            init();
        }
    }

    const featureFirstMq = window.matchMedia("screen and (max-width:1040px)");
    featureFirstMq.addListener(matchFeature);
    matchFeature(featureFirstMq);
}())

const AgentSlider = (function(){
    const agentSliderBox = document.getElementById("agent-js");
    let agentSlider = agentSliderBox.querySelector("li");

    let agentWidth = agentSlider.offsetWidth;
    let agentSliderWidth = agentWidth*4;
    console.log(agentWidth);


    const rightArw = document.querySelector(".content05_right_arw");
    const leftArw = document.querySelector(".content05_left_arw");


    agentSliderBox.style.width = agentSliderWidth*2 + "px";
    let i = 0;    
    agentSliderBox.style.left = 0;

    const clickRightArw = ()=>{
        i++;
        if(i === 2){
            i = 0
        };
        agentSliderBox.style.left = -agentSliderWidth*i +"px";
    }


    const init = ()=>{
        rightArw.addEventListener("click",clickRightArw);
        leftArw.addEventListener("click",clickRightArw);
    }
    init();

    //1200일때 크기랑 박스 3개
    //1040 일때 크기랑 박스 2개
    //768 일때 크기랑 박스 1개
    ///560px 일때 크기랑 박스 1개

    const AgentMatchControl = {
        first : function handleFirstMatch(){
            agentWidth = agentSlider.offsetWidth;
            console.log(agentWidth)
            agentSliderBox.style.width = agentSliderWidth*3 + "px";
            agentSliderBox.style.left = 0;
            console.log(1)
        },
        second : function handleSecondMatch(e){
            if(e.matches){
                agentWidth = agentSlider.offsetWidth;
                agentSliderWidth = agentWidth*2;
                console.log(agentWidth)
                agentSliderBox.style.width = agentSliderWidth*4 + "px";
                agentSliderBox.style.left = 0;
                const clickRightArwMq = ()=>{
                    i++;
                    if(i === 4){
                        i = 0;
                    }
                    agentSliderBox.style.left = -agentSliderWidth*i +"px";
                }
                rightArw.removeEventListener("click",clickRightArw);
                rightArw.addEventListener("click",clickRightArwMq);
                console.log(2)
            }
        },
        third : function handleThridMatch(e){
            if(e.matches){
                const agentWidth2 = agentSlider.offsetWidth;
                console.log(agentWidth2);
                agentSliderWidth = agentWidth*1;
                console.log(agentSliderWidth)
                agentSliderBox.style.width = agentSliderWidth*8 + "px";
                agentSliderBox.style.left = 0;
                const clickRightArwMq = ()=>{
                    i++;
                    if(i === 8){
                        i = 0;
                    }
                    agentSliderBox.style.left = -agentSliderWidth*i +"px";
                }
                rightArw.removeEventListener("click",clickRightArw);
                rightArw.addEventListener("click",clickRightArwMq);
                console.log(3)
            }
        },
        fourth :function handleFourthMatch(e){
            if(e.matches){
                agentWidth = agentSlider.offsetWidth;
                console.log(agentWidth)
                agentSliderWidth = agentWidth*1;
                console.log(agentSliderWidth)
                agentSliderBox.style.width = agentSliderWidth*8 + "px";
                agentSliderBox.style.left = 0;

                const clickRightArwMq = ()=>{
                    i++;
                    if(i === 8){
                        i = 0;
                    }
                    agentSliderBox.style.left = -agentSliderWidth*i +"px";
                }
                
                rightArw.removeEventListener("click",clickRightArw);
                rightArw.addEventListener("click",clickRightArwMq);
                console.log(4)
            }
        }
    }

    const agentFirstMq = window.matchMedia("screen and (max-width:1200px)");
    const agentSecondMq = window.matchMedia("screen and (max-width:1040px)");
    const agentThirdMq = window.matchMedia("screen and (max-width:768px)");
    const agentFourthMq = window.matchMedia("screen and (max-width:560px)");

    agentFirstMq.addListener(AgentMatchControl.first);
    agentSecondMq.addListener(AgentMatchControl.second);
    agentThirdMq.addListener(AgentMatchControl.third);
    agentFourthMq.addListener(AgentMatchControl.fourth);
    
}())

const VideoControll = (function(){
    const videoBtn = document.getElementById("video-js");
    const videoBox = document.getElementById("video_box");
    const videoCloseBtn = document.getElementById("video_close");
    const clickVideoBtn = (e)=>{
        e.preventDefault();
        videoBox.classList.add("video_active")
    }

    const clickCloseBtn = (e)=>{
        videoBox.classList.remove("video_active")
    }

    videoCloseBtn.addEventListener("click",clickCloseBtn)
    videoBtn.addEventListener("click",clickVideoBtn)
}())

const GreetingSlider =(function(){
    const greetingBox = document.getElementById("greeting-js");
    const greetingList = greetingBox.querySelectorAll(".greeting_slider_list");
    const greetingThumbnail = document.getElementById("thumbnail_ul");
    const thumbList = greetingThumbnail.querySelectorAll("li");

    let j = 0;
    greetingList[0].style.backgroundImage = `url("images/hero/hero-1.jpg")`;
    
    

    const handleGreetingClass = ()=>{
        const ACTIVE = "greeting_active";
        const greetingSeleted = document.getElementsByClassName(ACTIVE)
      
        greetingSeleted[0].className = greetingSeleted[0].className.replace(ACTIVE, "closed");
        greetingList[j].classList.remove("closed")
        greetingList[j].classList.add(ACTIVE);
    }
    
    

    const handleGreeting = ()=>{
        j++;
        if(j === 3){
            j = 0 ;
        }
        greetingList[j].style.backgroundImage = `url("images/hero/hero-${[j+1]}.jpg")`;
        handleGreetingClass();
    }

    const thumbSlider = (e)=>{
        e.preventDefault();
        let sliderNum = event.target.dataset.slider*1;
        greetingList[sliderNum-1].style.backgroundImage = `url("images/hero/hero-${[sliderNum]}.jpg")`;
        j = sliderNum-1;
        handleGreetingClass();
    }

    setInterval(handleGreeting,3000);
    thumbList.forEach((e)=>e.addEventListener("click",thumbSlider))
}())

const HideNav = (function(){
    const hideNavBox = document.getElementById("hide-js");
    const hambuger = document.getElementById("menu");
    const hideNav = document.getElementById("hide-container");
    const offcanvas = document.querySelector(".offcanvas");
    const hambugerClose = document.getElementById("hide-closeBtn");


    const clickHambuger = ()=>{
        hideNav.style.left = 0;
        offcanvas.classList.add("hambuger_active");
    }
    const clickClose = ()=>{
        hideNav.style.left = "-300px";
        offcanvas.classList.remove("hambuger_active");
    }

    hambugerClose.addEventListener("click",clickClose);
    hambuger.addEventListener("click",clickHambuger);
}())

