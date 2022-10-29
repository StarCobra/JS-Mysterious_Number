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
let difficulty;

function resetAllValeur() {
    nbEssais = 0;
    document.querySelector("#response").innerHTML = "";
    document.querySelector("#inputFindUser").value = "";
    document.querySelector("#essaiRestant").innerHTML = (nbEssaisMax - nbEssais);
    document.querySelector("#responseFindUser").innerHTML = "";
}

function getEasy() {
    easy = document.querySelector("#easy").value;
    random = getRandomInt(98);
    difficulty = 1;
    range = 99;
    nbEssaisMax = 40;

    resetAllValeur()

    return easy;
}

const inputEasy = document.querySelector("#easy");
inputEasy.addEventListener("click", function (event) {
    getEasy();

    document.querySelector("#iDifficult").style.display = "none";
    document.querySelector("#iTitreJeu").style.display = "none";
    document.querySelector("#iPlay").style.display = "block";
    document.querySelector("#playNumber").innerHTML = "Saisissez un nombre entre 1 et 99.";
});

function getMedium() {
    medium = document.querySelector("#medium").value;
    random = getRandomInt(98);
    difficulty = 2;
    range = 99;
    nbEssaisMax = 20;

    resetAllValeur()

    return medium;
}

const inputMedium = document.querySelector("#medium");
inputMedium.addEventListener("click", function (event) {
    getMedium();

    document.querySelector("#iDifficult").style.display = "none";
    document.querySelector("#iTitreJeu").style.display = "none";
    document.querySelector("#iPlay").style.display = "block";
    document.querySelector("#playNumber").innerHTML = "Saisissez un nombre entre 1 et 99.";
});

function getHard() {
    hard = document.querySelector("#hard").value;
    random = getRandomInt(98);
    difficulty = 3;
    range = 99;
    nbEssaisMax = 10;

    resetAllValeur()

    return hard;
}

const inputHard = document.querySelector("#hard");
inputHard.addEventListener("click", function (event) {
    getHard();

    document.querySelector("#iDifficult").style.display = "none";
    document.querySelector("#iTitreJeu").style.display = "none";
    document.querySelector("#iPlay").style.display = "block";
    document.querySelector("#playNumber").innerHTML = "Saisissez un nombre entre 1 et 99.";
});

function getImpossible() {
    impossible = document.querySelector("#impossible").value;
    random = getRandomInt(998);
    difficulty = 4;
    range = 999;
    nbEssaisMax = 15;

    resetAllValeur();

    return impossible;
}

const inputImpossible = document.querySelector("#impossible");
inputImpossible.addEventListener("click", function (event) {
    getImpossible();

    document.querySelector("#iDifficult").style.display = "none";
    document.querySelector("#iTitreJeu").style.display = "none";
    document.querySelector("#iPlay").style.display = "block";
    document.querySelector("#playNumber").innerHTML = "Saisissez un nombre entre 1 et 999.";
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
            document.querySelector("#iPlay").style.display = "none";
            document.querySelector("#iWin").style.display = "block";
            document.querySelector("#numberMyst").innerHTML = random;
            document.querySelector("#theEssai").innerHTML = nbEssais;
            document.querySelector("#inputPseudo").value = "";
        }

        if (nbEssaisMax == nbEssais) {
            document.querySelector("#iPlay").style.display = "none"
            document.querySelector("#iLose").style.display = "block";
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
    document.querySelector("#iScore").style.display = "block";
    document.querySelector("#iWin").style.display = "none";

    recupPseudo();
    SaveClassement(`${pseudo}`, `${nbEssais}`, `${difficulty}`);

    document.querySelector("#leaderboard").innerHTML = "";

    Classement();
});

function initClassement() {
    document.querySelector("#leaderboard").innerHTML = "";

    let first = LoadClassement();

    OrderClassement(first);

    for (let i = 0; i < 5; i++) {
        if (first[i] != undefined) {
            document.querySelector("#leaderboard").innerHTML += "<li>" + (i + 1) + "ème place : " + first[i][1] + " avec un score de " + Score(first[i]) + ".</li>";
        }
    }
}

function Classement() {
    let first = LoadClassement();

    OrderClassement(first);

    for (let i = 0; i < 10; i++) {
        if (first[i] != undefined) {
            document.querySelector("#leaderboard2").innerHTML += "<li>" + (i + 1) + "ème place : " + first[i][1] + " avec un score de " + Score(first[i]) + ".</li>";
        }
    }
}

function ClassementGeneral() {
    let first = LoadClassement();

    OrderClassement(first);

    let i = 1;
    first.forEach((u) => {

        if (first[i] != undefined) {
            document.querySelector("#leaderboard").innerHTML += "<li>" + i + "ème place : " + first[i][1] + " avec un score de " + Score(first[i]) + "</li>";
            i++;
        }
    })
}

window.addEventListener("load", initClassement);

const ButtonLeaderboardHome = document.querySelector("#displayScoreHome");
ButtonLeaderboardHome.addEventListener("click", function (event) {
    document.querySelector("#iDifficultChoice").style.display = "none";
    document.querySelector("#displayScoreHome").style.display = "none";
    document.querySelector("#iTitreJeu").style.display = "none";
    document.querySelector("#displayRetourHome").style.display = "block";
    document.querySelector("#iDifficultTexte").innerHTML = "Voici tout le classement"

    ClassementGeneral();
});

const ButtonRetourLeaderboardHome = document.querySelector("#displayRetourHome");
ButtonRetourLeaderboardHome.addEventListener("click", function (event) {
    document.querySelector("#iDifficultChoice").style.display = "flex";
    document.querySelector("#displayScoreHome").style.display = "block";
    document.querySelector("#iTitreJeu").style.display = "block";
    document.querySelector("#displayRetourHome").style.display = "none";
    document.querySelector("#iDifficultTexte").innerHTML = "Choisissez un niveau"

    initClassement();
});


const leader = document.querySelector("#displayScore");
leader.addEventListener("click", function () {
    document.querySelector("#leaderboard").innerHTML = "";

    Classement();
})

const ButtonScoreLose = document.querySelector("#displayScore");
ButtonScoreLose.addEventListener("click", function (event) {
    document.querySelector("#iLose").style.display = "none";
    document.querySelector("#iScore").style.display = "block";
});

const ButtonRejouerLose = document.querySelector("#replayLose");
ButtonRejouerLose.addEventListener("click", function (event) {
    document.querySelector("#iLose").style.display = "none";
    document.querySelector("#iDifficult").style.display = "block";
    document.querySelector("#iTitreJeu").style.display = "block";
});

const ButtonRejouerScore = document.querySelector("#replayScore");
ButtonRejouerScore.addEventListener("click", function (event) {
    document.querySelector("#iScore").style.display = "none";
    document.querySelector("#iDifficult").style.display = "block";
    document.querySelector("#iTitreJeu").style.display = "block";
});

const ButtonReset = document.querySelector("#resetScore");
ButtonReset.addEventListener("click", function (event) {
    document.querySelector("#iScore").style.display = "none";
    document.querySelector("#iResetValidation").style.display = "block";
});

const ButtonResetValidation = document.querySelector("#resetValidation");
ButtonResetValidation.addEventListener("click", function (event) {
    document.querySelector("#iScore").style.display = "block";
    document.querySelector("#iResetValidation").style.display = "none";

    Clear();

    document.querySelector("#leaderboard2").innerHTML = "";
})

const ButtonResetAnnulation = document.querySelector("#resetAnnulation");
ButtonResetAnnulation.addEventListener("click", function (event) {
    document.querySelector("#iScore").style.display = "block";
    document.querySelector("#iResetValidation").style.display = "none";
})

const ButtonFind = document.querySelector("#findPlayer");
ButtonFind.addEventListener("click", function (event) {
    document.querySelector("#iScore").style.display = "none";
    document.querySelector("#iUser").style.display = "block";
});

const ButtonFindUser = document.querySelector("#submitFindUser");
ButtonFindUser.addEventListener("click", function (event) {
    let user = document.querySelector("#inputFindUser").value;
    document.querySelector("#responseFindUser").innerHTML = LoadJoueur(user);
});

const ButtonRetourScore = document.querySelector("#displayRetourScore");
ButtonRetourScore.addEventListener("click", function (event) {
    document.querySelector("#iScore").style.display = "block";
    document.querySelector("#iUser").style.display = "none";
    document.querySelector("#inputFindUser").value = "";
    document.querySelector("#responseFindUser").innerHTML = "";
});