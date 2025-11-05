"use strict";

const sections = document.querySelectorAll("section");

// Tager fat om browservinduet og gør noget, når der scrolles
window.onscroll = () => {
    sections.forEach (sec => {
        let scrollDistance = window.scrollY;  // Får nuværende scrollposition

        let secDistance = sec.offsetTop;  // får sektionens position fra toppen af dokumentet

        if (scrollDistance >= secDistance) {  // hvis sektionen er kommet i view, så tilføjes eller fjernes der "show-animate"
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    });
};

const sectionOne = document.querySelector(".sec1");
sectionOne.addEventListener("mouseover", function() {
    this.classList.add("scale");
});

sectionOne.addEventListener("mouseout", function() {
    this.classList.remove("scale");
});


// animation for billederne
const getDogBtn = document.getElementById("dogElem");
const getBearBtn = document.getElementById("bearElem");
const getHorseBtn = document.getElementById("horseElem"); 

const soundDog = new Audio();
soundDog.src = "../sounds/dog.wav";

const soundBear = new Audio();
soundBear.src = "../sounds/bear.wav";

const soundHorse = new Audio();
soundHorse.src = "../sounds/horse.wav";

const soundLeviosa = new Audio();
soundLeviosa.src = "../sounds/leviosa.wav";


const dogElem = document.getElementById("dogElem");
if (dogElem) {
    dogElem.addEventListener("click", function () {
        soundDog.play();
        this.classList.toggle("anim-scale");
});
}

const bearElem = document.getElementById("bearElem");
if (bearElem) {
    bearElem.addEventListener("click", function () {
        soundBear.play();
        this.classList.toggle("anim-rotate");
    });
}

const horseElem = document.getElementById("horseElem");
if (horseElem) {
    horseElem.addEventListener("click", function () {
        soundHorse.play();
        this.classList.toggle("anim-skew");
    });
}

const hermioneElem = document.getElementById("hermioneElem");
if (hermioneElem) {
    hermioneElem.addEventListener("click", function () {
        soundLeviosa.play();
        this.classList.add("anim-scale");
    });
}