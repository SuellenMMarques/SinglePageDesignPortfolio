const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");
const imagingMat = document.querySelector(".track-container");

let currentImage = 0;

rightButton.addEventListener("click", () => {

    if (currentImage < 4) {
        currentImage++
        moveCarousel();
    }
})

leftButton.addEventListener("click", () => {

    if (currentImage > 0) {
        currentImage--
        moveCarousel();
    }
})

function moveCarousel() {

    const slide = document.querySelector(".image-slide");

    const gapCss = parseFloat(window.getComputedStyle(imagingMat).gap);

    const jumpSize = slide.clientWidth + gapCss;

    imagingMat.style.transform = `translateX(-${currentImage * jumpSize}px)`;

    imagingMat.style.transition = "transform 0.4s ease-in-out";
}



