'use_strict';

import { SaveClassement, LoadJoueur, LoadIndex, LoadClassement, Clear, Order, Score, OrderClassement } from "./System_Stockage.js";

function getRandomInt(max) {
    return Math.floor((Math.random() * max)+1);
}

let random = getRandomInt(98);

let nbPropose = document.querySelector("#input");

function getValue() {
    let value = nbPropose.value;
    console.log(value);
    return value;
}

let nbEssais = 0;
let nbEssaisMax;
let difficulty = 3;

let result = document.querySelector("#response");
let cheat = document.querySelector("#cheat");

cheat.innerHTML = random;

function Verification() {
    let verifNumber = getValue();
    if((verifNumber < 100) && (verifNumber > 0)) {
        nbEssais++;
        if(verifNumber > random) {
            result.innerHTML = verifNumber+" est supérieur au nombre Mystère !";
        } else if(verifNumber < random) {
            result.innerHTML = verifNumber+" est inférieur au nombre Mystère !";
        } else {
            result.innerHTML = "Félicitations ! Vous avez trouvé le nombre Mystère qui était : "+random+".";
            result.innerHTML += "<br>Vous avez trouvé en "+nbEssais+" essais !";
            Victore();
        }
    } else {
        alert("Votre nombre n'est pas compris entre 1 et 99.")
    }
    nbPropose.value = "";
}   

const input = document.querySelector("#input");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter" || event.key === 13) {
       return Verification();
    }
});

function getPseudo() {
    let pseudo = document.querySelector('#input-pseudo');
    let value = pseudo.value;
    console.log(value);
    return value;
}

const valuepseudo = getPseudo();

function Victore() {
    result.innerHTML += "<br><br><h4>Veuillez inscrire votre pseudo :</h4><input type='text' id='input-pseudo' placeholder='votre pseudo'>";
    result.innerHTML += "<button id='button-pseudo' onclick='SaveClassement("+valuepseudo+","+nbEssais+","+difficulty+");'>Valider !</button>";
}
