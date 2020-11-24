const slider = document.querySelector('[data-slider]');
const images = document.querySelectorAll('.slider img');
const btnLeft = document.querySelector('[data-btn="left"]');
const btnRight = document.querySelector('[data-btn="right"]');
let current = 0;

function changeImage() {
    for(let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    };
    images[current].classList.remove('opacity0');
}
changeImage();

function moveLeft() {
    if (current+1 == images.length) {
        current = 0;
    } else {
        current++;
    }
    changeImage(); 
}

function moveRight() {
    if (current-1 == -1) {
        current = images.length - 1;
    } else {
        current--;
    }
    changeImage(); 
}

//slider.addEventListener('click', changeImage);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);