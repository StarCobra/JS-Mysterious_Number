function SaveClassement(Pseudo,NbEssais,Difficulté=3) {
	var Data = "NumMyst|"+Pseudo+"|"+Difficulté+"|"+NbEssais;
	localStorage.setItem(Pseudo,Data);
}

function LoadJoueur(Pseudo) {
	return localStorage.getItem(Pseudo);
}

function LoadIndex(Index) {
	return LoadJoueur(localStorage.key(Index));
}

function LoadClassement() {
	var Classement = [];
	var y = 0;
	for(var i=0;i<localStorage.length;i++) {
		var temp = LoadIndex(i).split("|");
		if(typeof temp[3] !== 'undefined') {
			Classement[y++] = temp;
		}
	}
	return Classement;
}

function Clear() {
		localStorage.clear();
}

function Order(a,b) {
	// Test de calcul de score
	//console.log("score a ("+a[1]+") = "+(((20-a[3])*a[2])));
	//console.log("score b ("+b[1]+") = "+((20-b[3])*b[2]));
	return Score(a) - Score(b);
}

function Score(a) {
	return ((20-a[3])*a[2]);
}

//Rend les joueurs par ordre de classement (indice 0 = plus faible; indice 1 < indice 2)
function OrderClassement(Classement) {
	return Classement.sort((a, b) => Order(a,b));
}
