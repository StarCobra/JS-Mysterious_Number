import { random } from './level_1.js';

export function SaveClassement(Pseudo, NbEssais, difficulty) {
	if(!difficulty) {difficulty = 2;}
	if (LoadJoueur(Pseudo) == null) {
		var Data = random + "|" + Pseudo + "|" + NbEssais + "|" + difficulty;
		localStorage.setItem(Pseudo, Data);
		return true;
	} else {
		return false;
	}
}

export function LoadJoueur(Pseudo) {
	return localStorage.getItem(Pseudo);
}

export function LoadIndex(Index) {
	return LoadJoueur(localStorage.key(Index));
}

export function LoadClassement() {
	var Classement = [];
	var y = 0;
	for (var i = 0; i < localStorage.length; i++) {
		var temp = LoadIndex(i).split("|");
		if (typeof temp[3] !== 'undefined') {
			Classement[y++] = temp;
		}
	}
	return Classement;
}

export function Clear() {
	localStorage.clear();
}

export function Order(a, b) {
	// Test de calcul de score
	//console.log("score a ("+a[1]+") = "+(((20-a[3])*a[2])));
	//console.log("score b ("+b[1]+") = "+((20-b[3])*b[2]));
	return Score(a) - Score(b);
}

export function Score(a) {
	return ((20 - a[3]) * a[2]);
}

//Rend les joueurs par ordre de classement (indice 0 = plus faible; indice 1 < indice 2)
export function OrderClassement(Classement) {
	return Classement.sort((a, b) => Order(a, b));
}
