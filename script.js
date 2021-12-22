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
    });

    /* BUTTON BARS - NAVBAR */
    let buttonBar = document.querySelector(".menu-btn");

    buttonBar.addEventListener("click",()=>{
        let navMenu = document.querySelector(".navbar .menu");
        let buttonX = document.querySelector(".menu-btn i");
        navMenu.classList.toggle("active");
        buttonX.classList.toggle("active");
    });
});

