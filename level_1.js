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
let alert = 99;
let playNumber = document.querySelector("#playNumber");

playNumber.innerHTML = "Saisissez un nombre entre 0 et 99.";

function getEasy() {
    easy = document.querySelector("#easy").value;
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
    nbEssaisMax = 15;
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
    alert = 999;
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
    playNumber.innerHTML = "Saisissez un nombre entre 0 et 999.";
});



export let random = getRandomInt(98);

function getValue() {
    return document.querySelector("#input").value;
}

function Verification() {
    let nbPropose = getValue();

    if ((nbPropose < 100) && (nbPropose > 0)) {
        nbEssais++;
        
        if (nbPropose > random) {
            document.querySelector("#response").innerHTML = nbPropose + " est supérieur au nombre Mystère !";
        } else if (nbPropose < random) {
            document.querySelector("#response").innerHTML = nbPropose + " est inférieur au nombre Mystère !";
        } else if (nbPropose == random) {
            document.querySelector("#response").innerHTML = "Félicitations ! Vous avez trouvé le nombre Mystère qui était : " + random + ".";
            document.querySelector("#response").innerHTML += "<br>Vous avez trouvé en " + nbEssais + " essais !";

            ButtonPropose.disabled = true;
            document.querySelector(".pseudo").style.display = "block";
        }
    } else if(nbEssais >= nbEssaisMax){
        document.querySelector("#response").innerHTML = "Désolé ! Vous avez utilisé vos "+nbEssaisMax+" essais.<br>Vous n'avez pas trouvé le nombre Mystère qui était : " + random + ".";
    } else {
        alert("Votre nombre n'est pas compris entre 1 et "+alert+".");
    }
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);

    document.querySelector("#input").value = "";
}

const ButtonPropose = document.querySelector("#button");
ButtonPropose.addEventListener("click", function (event) {
    Verification();
});

function recupPseudo() {
    pseudo = document.querySelector("#inputPseudo").value;
    return pseudo;
}

const ButtonPseudo = document.querySelector("#buttonPseudo");
ButtonPseudo.addEventListener("click", function (event) {
    document.querySelector(".pseudo").style.display = "none";
    recupPseudo();
    SaveClassement(`${pseudo}`, `${nbEssais}`, `${difficulty}`);
    Classement();
});

let classement = document.querySelector("#classement")

function Classement() {
    let first = LoadClassement();
    classement.innerHTML = OrderClassement(first);
}