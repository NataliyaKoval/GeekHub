const creationButton = document.querySelector('[data-creation]');
const feedButton = document.querySelector('[data-feed]');
const washButton = document.querySelector('[data-wash]');
const sleepButton = document.querySelector('[data-sleep]');
const playButton = document.querySelector('[data-play]');
const medicateButton = document.querySelector('[data-medicate]');
const hugsButton = document.querySelector('[data-hugs]');
const life = document.querySelector('[data-life]');
const bellyful = document.querySelector('[data-bellyful]');
const cleanness = document.querySelector('[data-cleanness]');
const rest = document.querySelector('[data-rest]');
const health = document.querySelector('[data-health]');
const happiness = document.querySelector('[data-happiness]');
let tamagochi;

class Tamagochi {
    constructor() {
        this.life = 100;
        this.bellyful = 100;
        this.cleanness = 100;
        this.rest = 100;
        this.health = 100;
        this.happiness = 100;

        life.value = this.life;
        bellyful.value = this.bellyful;
        cleanness.value = this.cleanness;
        rest.value = this.rest;
        health.value = this.health;
        happiness.value = this.happiness;
    }
    feed() {   
        bellyful.value += 10;
    }
    wash() {
        cleanness.value += 10;
    }
    sleep() {
        rest.value += 10;
    }
    play() {
        happiness.value += 10;
    }
    medicate() {
        health.value += 10;
    }
    hugs() {
        happiness.value += 10;
    }
}

function create() {
    tamagochi = new Tamagochi;
}

creationButton.addEventListener('click', create);


feedButton.addEventListener('click', () => tamagochi.feed());

washButton.addEventListener('click', () => tamagochi.wash());

sleepButton.addEventListener('click', () => tamagochi.sleep());

playButton.addEventListener('click', () => tamagochi.play());

medicateButton.addEventListener('click', () => tamagochi.medicate());

hugsButton.addEventListener('click', () => tamagochi.hugs());

function howAreYou() {
    let arrOfValues = Array.of(bellyful.value, cleanness.value, rest.value, health.value, happiness.value);
    let sumValues = arrOfValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0
    );
    let lifeValue = sumValues / arrOfValues.length;
    life.value = lifeValue;
    goodbye();
}
setInterval(howAreYou, 500);

function reduceValues() {
    let random = Math.floor(Math.random() * 10);
    if (random === 0 || random === 1) {
        bellyful.value -= 10;
    } else if (random === 2 || random === 3) {
        cleanness.value -= 10;
    } else if (random === 4 || random === 5) {
        rest.value -= 10;
    } else if (random === 6 || random === 7) {
        health.value -= 10;
    } else if (random === 8 || random === 9) {
        happiness.value -= 10;
    }
}
setInterval(reduceValues, 1000);

function goodbye() {
    if (life.value === 0) {
        feedButton.disabled = true;
        washButton.disabled = true;
        sleepButton.disabled = true;
        playButton.disabled = true;
        hugsButton.disabled = true;
        medicateButton.disabled = true;
    } else {
        feedButton.disabled = false;
        washButton.disabled = false;
        sleepButton.disabled = false;
        playButton.disabled = false;
        hugsButton.disabled = false;
        medicateButton.disabled = false;
    }
}
