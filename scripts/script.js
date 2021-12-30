"use strict";

/* -------------------------------------------------------------------------
---------------------- SCROLL
----------------------------------------------------------------------------*/

const pixelWidth = 1260;

addEventListener("load",()=>{

    /* SCROLL - NAVBAR */

    addEventListener("scroll",()=>{
        let scroll = scrollY;
        let navbar = document.querySelector(".navbar");
        let textLogo = document.querySelector(".navbar .logo a");
        let textOptions = document.querySelectorAll(".navbar .menu li a");
        let buttonBar = document.querySelector(".menu-btn");
        let scrollUp = document.querySelector(".scroll-up");

        if(scroll > 20 ){
            navbar.style.background = "#2B3C4D";
            navbar.style.transition = "background .7s ease-out";
            textLogo.style.color = "#fff";
            buttonBar.style.color = "#fff";
            textOptions.forEach(option => {
                option.style.color = "#fff"; 
            });
        }else{
            navbar.style.background = "none";
            navbar.style.transition = "background .3s ease-in";
            textLogo.style.color = "#2B3C4D";
            buttonBar.style.color = "#2B3C4D";
            textOptions.forEach(option => {
                option.style.color = "#2B3C4D"; 
            });
        }

        /* SHOW SCROLL */
        if(scroll > 500){
            scrollUp.classList.add("show");
        }else{
            scrollUp.classList.remove("show");
        }

        /* Slide - UP */
        $(".scroll-up").click(function(){
            window.scroll(0,0);
        });
    });

    /* BUTTON BARS - NAVBAR */
    $(".menu-btn").click(function(){
        let navMenu = document.querySelector(".navbar .menu");
        let buttonX = document.querySelector(".menu-btn i");
        navMenu.classList.toggle("active");
        buttonX.classList.toggle("active");
    });


    /* owl-carousel */
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1,
                nav:false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav:false
            }
        }
    });

    /* Typing animation Script */

    var typed = new Typed(".typing",{
        strings:["Systems engineering","Web Developer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    });

    var typed2 = new Typed(".typing-2",{
        strings:["Systems engineering","Web Developer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});

