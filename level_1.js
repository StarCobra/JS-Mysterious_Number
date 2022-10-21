function getRandomInt(max) {
    return Math.floor((Math.random() * max)+1);
}

random = getRandomInt(98);

nbPropose = document.querySelector("#input");

function getValue() {
    let value = nbPropose.value;
    console.log(value);
    return value;
}

result = document.querySelector("#response");

function Verification() {
    let verifNumber = getValue();
    if((verifNumber < 100) && (verifNumber > 0)) {
        if(verifNumber > random) {
            result.innerHTML = verifNumber+" est supérieur au nombre Mystère !";
        } else if(verifNumber < random) {
            result.innerHTML = verifNumber+" est inférieur au nombre Mystère !";
        } else {
            result.innerHTML = "Félicitations ! Vous avez trouvé le nombre Mystère qui était : "+random+".";
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