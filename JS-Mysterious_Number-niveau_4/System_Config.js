function SaveConfig(Essais_Max,Caractere_Max) {
	var Data = "NumMyst~"+Essais_Max+"~"+Caractere_Max;
	localStorage.setItem('Config',Data);
}

//Rend un tableau : indice 0, inutile. indice 1, Nb d'essais max. indice 2, Nb de caractère max
function LoadConfig() {
	return localStorage.getItem('Config').split("~");
}
