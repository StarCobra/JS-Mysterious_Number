'use_strict';

import { SaveClassement, LoadJoueur, LoadIndex, LoadClassement, Clear, Order, Score, OrderClassement } from "./System_Stockage.js";

function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

let nbEssais = 0;
let nbEssaisMax;
let pseudo;
let easy;
let medium;
let hard;
let impossible;
let range = 99;
let playNumber = document.querySelector("#playNumber");
let difficulty;

playNumber.innerHTML = "Saisissez un nombre entre 1 et 99.";

function getEasy() {
    easy = document.querySelector("#easy").value;
    difficulty = 1;
    nbEssaisMax = 40;
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
    return easy;
}

const inputEasy = document.querySelector("#easy");
inputEasy.addEventListener("click", function (event) {
    getEasy();
    let last = document.querySelector("#iDifficult");
    last.style.display = "none";
    let news = document.querySelector("#iPlay");
    news.style.display = "block";
});

function getMedium() {
    medium = document.querySelector("#medium").value;
    difficulty = 2;
    nbEssaisMax = 20;
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
    return medium;
}

const inputMedium = document.querySelector("#medium");
inputMedium.addEventListener("click", function (event) {
    getMedium();
    let last = document.querySelector("#iDifficult");
    last.style.display = "none";
    let news = document.querySelector("#iPlay");
    news.style.display = "block";
});

function getHard() {
    hard = document.querySelector("#hard").value;
    difficulty = 3;
    nbEssaisMax = 10;
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
    return hard;
}

const inputHard = document.querySelector("#hard");
inputHard.addEventListener("click", function (event) {
    getHard();
    let last = document.querySelector("#iDifficult");
    last.style.display = "none";
    let news = document.querySelector("#iPlay");
    news.style.display = "block";
});

function getImpossible() {
    impossible = document.querySelector("#impossible").value;
    difficulty = 4;
    nbEssaisMax = 15;
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
    range = 999;
    random = getRandomInt(998);
    return impossible;
}

const inputImpossible = document.querySelector("#impossible");
inputImpossible.addEventListener("click", function (event) {
    getImpossible();
    let last = document.querySelector("#iDifficult");
    last.style.display = "none";
    let news = document.querySelector("#iPlay");
    news.style.display = "block";
    playNumber.innerHTML = "Saisissez un nombre entre 1 et 999.";
});



export let random = getRandomInt(98);

function getValue() {
    return document.querySelector("#inputNumber").value;
}

function Verification() {
    let nbPropose = getValue();

    if ((nbPropose < range) && (nbPropose > 0)) {
        nbEssais++;

        if (nbPropose > random) {
            document.querySelector("#response").innerHTML = nbPropose + " est supérieur au nombre Mystère !";
        } else if (nbPropose < random) {
            document.querySelector("#response").innerHTML = nbPropose + " est inférieur au nombre Mystère !";
        } else if (nbPropose == random) {
            let news = document.querySelector("#iPlay");
            news.style.display = "none";
            let win = document.querySelector("#iWin");
            win.style.display = "block";
            document.querySelector("#numberMyst").innerHTML = random;
            document.querySelector("#theEssai").innerHTML = nbEssais;
            document.querySelector("#inputPseudo").value = "";
        }
        
        if (nbEssaisMax == nbEssais) {
            let news = document.querySelector("#iPlay");
            let lose = document.querySelector("#iLose");
            news.style.display = "none";
            lose.style.display = "block";
        }
    } else {
        alert("Votre nombre n'est pas compris entre 1 et " + range + ".");
    }
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
    console.log(nbEssais);
    console.log(nbEssaisMax);
    document.querySelector("#inputNumber").value = "";
}

const ButtonPropose = document.querySelector("#submit");
ButtonPropose.addEventListener("click", function (event) {
    Verification();
});

function recupPseudo() {
    pseudo = document.querySelector("#inputPseudo").value;
    return pseudo;
}

const ButtonPseudo = document.querySelector("#submitPseudo");
ButtonPseudo.addEventListener("click", function (event) {
    let score = document.querySelector("#iScore");
    score.style.display = "block";
    let win = document.querySelector("#iWin");
    win.style.display = "none";
    recupPseudo();
    SaveClassement(`${pseudo}`, `${nbEssais}`, `${difficulty}`);
    Classement();
});

let classement = document.querySelector("#classement")

function Classement() {
    let first = LoadClassement();
    classement.innerHTML = OrderClassement(first);
}