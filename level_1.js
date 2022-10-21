'use_strict';

import { SaveClassement, LoadJoueur, LoadIndex, LoadClassement, Clear, Order, Score, OrderClassement } from "./System_Stockage.js";

document.querySelector(".pseudo").style.display = "none";

function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

let nbEssais = 0;
//let nbEssaisMax = 20;
let difficulty = 3;
let pseudo;

let random = getRandomInt(98);
document.querySelector("#cheat").innerHTML = random; //A suppr

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
    } else {
        alert("Votre nombre n'est pas compris entre 1 et 99.")
    }
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

    SaveClassement(`${pseudo},${nbEssais},${difficulty}`);
});