var Difficulté;
var Nb_Essais_Max;
var Max_Random;

function SetDifficulté(Difficile) {
	switch (Difficile) {
	
	case 1 : {Difficulté = 1; Nb_Essais_Max *= 2; Max_Random = 98; break ;}
	
	case 2 : {Difficulté = 3; Nb_Essais_Max *= 1; Max_Random = 98; break ;}
	
	case 3 : {Difficulté = 4; Nb_Essais_Max *= 0.5; Max_Random = 98; break ;}
	
	case 4 : {Difficulté = 6; Nb_Essais_Max *= 0.75; Max_Random = 998; break ;}
		
	default : {Difficulté = 3; Nb_Essais_Max *= 1; Max_Random = 98; alert("Vous n'avez pas choisi une difficulté valide ! Difficulté mise automatiquement sur 'Normal'."); break ;}
	
	
	}
	
}



