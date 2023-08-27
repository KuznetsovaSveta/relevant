import * as firstFunctions from "./modules/functions.js";

firstFunctions.isWebp();

//подключение слайдера
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

let reviewsSwiper = new Swiper(".reviews__swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".reviews__arrow_next",
        prevEl: ".reviews__arrow_prev",
    },
    breakpoints:{
        992:{
            spaceBetween: 30,
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 3,
        },
        576:{
            slidesPerView: 2,
        }
    }
});

//accordion
let accordion = document.getElementsByClassName("faq__open");
let i;
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight){
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
}

//мобильное меню
let burger = document.getElementById("burger"),
    closeBurger = document.getElementById("burgerClose"),
    body = document.querySelector("body"),
    burgerMenu = document.querySelector(".header__wrap_desktop");

let toggleScroll = function () {
    body.classList.toggle("noScroll");
}
let toggleMenu = function () {
    burgerMenu.classList.toggle("active");
}
burger.onclick = function(){
    toggleScroll();
    toggleMenu();
}
closeBurger.onclick = function(){
    toggleScroll();
    toggleMenu();
}