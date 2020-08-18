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

}())

const FeatureSlider = (function(){
    const dot = document.querySelector("#dot-js");
    const dotSliderBox = document.querySelector(".content02_slider");
    const dotSlider = document.querySelector(".slider_content");

    let dotSliderWidth = dotSlider.offsetWidth*3;
    let number = 0;
    dotSliderBox.style.left = dotSliderWidth*number;

    const currentSlider = (num)=>{
        dotSliderBox.style.left = -dotSliderWidth*num + "px";
    }

    const handleSlider = ()=>{
        number++;
        if(number === 2){
            number =0;
        }
        currentSlider(number);
    }


    const clickDot = (e)=>{
        const span = event.target;
        let selected = document.getElementsByClassName("dot_act");
        if(selected.length === 0){
            span.classList.add("dot_act")
        }
        selected[0].className = selected[0].className.replace("dot_act", "");
        span.classList.add("dot_act");
        //클릭한게 dot배열에서 몇번째인지 ?
        handleSlider();
    }

    const init = ()=>{
        setInterval(handleSlider,4000);
        dot.addEventListener("click",clickDot)
    }
    init();

}())

const AgentSlider = (function(){
    const agentSliderBox = document.getElementById("agent-js");
    const agentSlider = agentSliderBox.querySelector("li");
    const agentSliderWidth = agentSlider.offsetWidth*4 + 50;

    const rightArw = document.querySelector(".content05_right_arw");
    const leftArw = document.querySelector(".content05_left_arw");



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

    setInterval(handleGreeting,3000)
    
}())