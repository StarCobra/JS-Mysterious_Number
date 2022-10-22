'use_strict';

import { SaveClassement, LoadJoueur, LoadIndex, LoadClassement, Clear, Order, Score, OrderClassement } from "./System_Stockage.js";

function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

export let random
let nbEssais;
let nbEssaisMax;
let pseudo;
let easy;
let medium;
let hard;
let impossible;
let range;
let playNumber = document.querySelector("#playNumber");
let difficulty;

playNumber.innerHTML = "Saisissez un nombre entre 1 et 99.";

function getEasy() {
    easy = document.querySelector("#easy").value;
    random = getRandomInt(98);
    difficulty = 1;
    range = 99;
    nbEssais = 0;
    nbEssaisMax = 40;
    document.querySelector("#response").innerHTML = "";
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
    random = getRandomInt(98);
    difficulty = 2;
    range = 99;
    nbEssais = 0;
    nbEssaisMax = 20;
    document.querySelector("#response").innerHTML = "";
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
    random = getRandomInt(98);
    difficulty = 3;
    range = 99;
    nbEssais = 0;
    nbEssaisMax = 10;
    document.querySelector("#response").innerHTML = "";
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
    random = getRandomInt(998);
    difficulty = 4;
    range = 999;
    nbEssais = 0;
    nbEssaisMax = 15;
    document.querySelector("#response").innerHTML = "";
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
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

function getValue() {
    return document.querySelector("#inputNumber").value;
}

function Verification() {
    let nbPropose = getValue();

    if ((nbPropose <= range) && (nbPropose > 0)) {
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
            document.querySelector("#mysteriousNumber").innerHTML = random;
        }
    } else {
        alert("Votre nombre n'est pas compris entre 1 et " + range + ".");
    }
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
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
    document.querySelector("#leaderboard").innerHTML = "";
    Classement();
});


function Classement() {
    let first = LoadClassement();
    OrderClassement(first);
    for (let i = 0; i < 10; i++) {
        document.querySelector("#leaderboard").innerHTML += "<li>" + first[i] + "</li>";
    }
}

const leader = document.querySelector("#displayScore");
leader.addEventListener("click", function () {
    document.querySelector("#leaderboard").innerHTML = "";
    Classement();
})

const ButtonScoreLose = document.querySelector("#displayScore");
ButtonScoreLose.addEventListener("click", function (event) {
    let score = document.querySelector("#iLose");
    score.style.display = "none";
    let difficult = document.querySelector("#iScore");
    difficult.style.display = "block";
});

const ButtonRejouerLose = document.querySelector("#replayLose");
ButtonRejouerLose.addEventListener("click", function (event) {
    let score = document.querySelector("#iLose");
    score.style.display = "none";
    let difficult = document.querySelector("#iDifficult");
    difficult.style.display = "block";
});

const ButtonRejouerScore = document.querySelector("#replayScore");
ButtonRejouerScore.addEventListener("click", function (event) {
    let score = document.querySelector("#iScore");
    score.style.display = "none";
    let difficult = document.querySelector("#iDifficult");
    difficult.style.display = "block";
});

const ButtonReset = document.querySelector("#resetScore");
ButtonReset.addEventListener("click", function (event) {
    Clear();
    document.querySelector("#leaderboard").innerHTML = "";
});

const ButtonFind = document.querySelector("#findPlayer");
ButtonFind.addEventListener("click", function (event) {
    let score = document.querySelector("#iScore");
    score.style.display = "none";
    let difficult = document.querySelector("#iUser");
    difficult.style.display = "block";
});

const ButtonFindUser = document.querySelector("#submitFindUser");
ButtonFindUser.addEventListener("click", function (event) {
    let user = document.querySelector("#inputFindUser");
    document.querySelector("#responseFindUser").innerHTML = LoadJoueur(user);
});