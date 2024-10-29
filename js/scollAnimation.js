// 슬라이더와 슬라이드 요소들 선택
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const slidesLength = slideRight.querySelectorAll("div").length;
let activeSlideIndex = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
    } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

let scrollTimeout;
window.addEventListener("wheel", (event) => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (event.deltaY > 0) {
            changeSlide("up");
        } else {
            changeSlide("down");
        }
    }, 150);
});
setInterval(() => {
    changeSlide("up");
    reloadCard();
}, 10000); // 10000ms = 10초
