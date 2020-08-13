"use strict"

const ControlTab = (function(){
    const openBtn = document.getElementById("menu");
    const closeBtn = document.querySelector(".change");
    const hideNav = document.getElementById("hide-js");
    openBtn.addEventListener("click",()=>{
        hideNav.style.width = "240px";
    })
    closeBtn.addEventListener("click",()=>{
        hideNav.style.width = "0px";
    })

    const matchTab = (e)=>{
        if(e.matches){
        }
        else{
            hideNav.style.width = "0px";
        }
    }

    const tabMq =window.matchMedia("screen and (max-width:990px)");
    tabMq.addListener(matchTab);
}())

const Slider = (function(){
    const rightBtn = document.getElementById("rightbtn");
    const leftBtn = document.getElementById("leftbtn");
    const sliderBox = document.getElementById("slider-js");
    const slider = sliderBox.querySelectorAll("li");
    const dotBox = document.getElementById("dot-js")
    const dot = dotBox.querySelectorAll("span")
    
    const ACTIVE = "active";
    let sliderWidth = slider[0].offsetWidth;
    let count = 0;
    dot[count].classList.add(ACTIVE);

    const currentSlider = (number)=>{
        dot[number].classList.add(ACTIVE);
        if(count === 0){
            dot[1].classList.remove(ACTIVE);
        }
        else{
            dot[0].classList.remove(ACTIVE);
        }
    }
    
    const clickRight = ()=>{
        count ++;
        if(count === 2){
            count = 0;
        }
        sliderBox.style.right = sliderWidth*count + 'px';
        currentSlider(count);
    }

    const clickLeft = ()=>{
        count --;
        if(count < 0){
            count = 1;
        }
        sliderBox.style.right = sliderWidth*count + 'px';
        currentSlider(count);
    }

    const clickDot = ()=>{
        clickRight();
    }

    dot.forEach((e)=>{e.addEventListener("click",clickDot)});
    leftBtn.addEventListener("click",clickLeft);
    rightBtn.addEventListener("click",clickRight);

    const matchSlide = (e)=>{
        if(e.matches){
            sliderBox.style.right = sliderWidth*count + 'px';
        }else{
            sliderBox.style.right = sliderWidth*count + 'px';
        }
    }

    const slideMq =  window.matchMedia("screen and (max-width:800px)");
    matchSlide(slideMq);
    slideMq.addListener(matchSlide)
}())

const HandleBlogList = (function(){
    const blogBox = document.querySelectorAll(".content05_blog")
    const orderBox = document.getElementById("order-js");
    const orderList = orderBox.querySelectorAll("li");


    let order = 0;
    blogBox[order].classList.add("blog_active")
    orderList[order].classList.add("order_active")


    //1. 전에 타겟 존재 x 
    //2. blogBox.classList.contains
    const clickOrder = ()=>{
        event.preventDefault();
        const dataNumber = event.target.dataset.number;
        order = dataNumber-1;
        if(blogBox[order].dataset.number === dataNumber){
            const blogActive = document.getElementsByClassName("blog_active");
            blogActive[0].className = blogActive[0].className.replace("blog_active","");
            blogBox[order].classList.add("blog_active");

            const orderActive = document.getElementsByClassName("order_active");
            orderActive[0].className = orderActive[0].className.replace("order_active","")            
            orderList[order].classList.add("order_active");
        }
    }

    orderList.forEach((e)=>{
        e.addEventListener("click",clickOrder,false)
    })
}())

const LazyLoading = (function(target){
    const option = {
        root: null,
        threshold: 1
    }
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
    if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);

            entry.target.classList.add("fade")
        }
    })
    }, option)

    const images = document.querySelectorAll(`img`);
    images.forEach((el) => {io.observe(el);})
}())

const ImagePopup = (function(){
    const imgBox = document.getElementById("content02")
    const images = imgBox.querySelectorAll("a");

    const clickImage = (e)=>{
        e.preventDefault();
        const imgSrc = e.target.src;
        const imgWidth = e.target.width+50;
        const imgHeight = e.target.hieght + 30;
        window.open(`${imgSrc}`, 'img', `width=${imgWidth}, height=${imgHeight}, left=0, top=0`)
    }

    images.forEach((e)=>{
        e.addEventListener("click",clickImage)
    })
}())

const ImageMagnifer = (function(){
    const imgBox = document.getElementById("content02")
    const imageMag = imgBox.querySelectorAll("a")
    imageMag.forEach((e)=>{
        e.addEventListener("mouseover",(event)=>{
            const span = event.target.nextElementSibling;
            let selected = document.getElementsByClassName("mag_active");
            if(selected.length === 0){
                span.classList.add("mag_active")
            }
            selected[0].className = selected[0].className.replace("mag_active", "");
            span.classList.add("mag_active")
        })
    })
    imageMag.forEach((e)=>{
        e.addEventListener("mouseout",()=>{
            const span = event.target.nextElementSibling;
            span.classList.remove("mag_active")
        })
    })
}())



