# JS-Mysterious_Number
Amélioration du jeu BASH Mysterious_Number

Cette branche se spécialise spécifiquement sur le stockage des données, allant du classement au fichier de config.
Cependant pour des raisons techniques et pratiques, ce stockage sera effectué au sein du Local Storage.

A ces fins de multiples fonctions ont été créer :



### --- Stockage et Tri du Classement ---

   ***SaveClassement(Pseudo,NbEssais,Difficulté=3)*** : Sauvegarde une entrée de classement contenant le pseudo, le nombre d'essais pris pour trouver ainsi que la difficulté à laquelle la partie a été faite (pour tant que l'on a pas géré cela, j'ai mis une valeur par défaut de 3). Le tout est mis à l'indice équivalent au Pseudo du Joueur (Cepandant cela empêche un joueur de prendre plusieurs spots sur le classement). Les différentes données sont séparé par '|'.

   *LoadJoueur(Pseudo)* : Cette fonction utilisé en interne permet de load un joueur spécifique avec son pseudo. Le rendu est une chaine de caractère non traitée.

   *LoadIndex(Index)* : Cette fonction utilisé en interne permet de load un joueur spécifique avec l'indice chiffré sur le tableau. Le rendu est une chaine de caractère non traitée.

   ***LoadClassement()*** : Cette fonction récupère l'intégralité du classement et le rend sous la forme d'un tableau dont la structure est à peu près la suivante : [['donée inutile',Pseudo,Difficulté,Nombre d'essais pris pour réussir],[...],[...],...]. Ce classement n'est pas trié (enfin il est organisé par l'ordre dans lequel les entrée ont été originiellement enregistré.

   *Clear()* : Cette fonction clear l'entièreté du Local Storage (incluant le classement).

   *Order(a,b)* : Fonction technique servant au tri.

   *Score(a)* : Fonction permettant de calculer le score de a, a étant l'un des tableaux de donnée du classement (a = ['donée inutile',Pseudo,Difficulté,Nombre d'essais pris pour réussir]).

   ***OrderClassement(Classement)*** : Cette fonction prenant pouur argument le classement complet est capable de le trier par Score avant de le redonner trié; les indices les plus bas (0,1..) étant ceux au plus mauvais score tandis que ceux qui ont les plus haut indices sont ceux avec le meilleur score.

### --- Stockage de la Config ---

   *SaveConfig(Essais_Max,Caractere_Max)* : Permet de sauvegarder la config au sein du Local Storage (à l'indice 'config'). Les différentes données sont séparé par '~'.

   ***LoadConfig()*** : Permet de récupérer les données du Local Storage concernant la config et les ordonner dans un tableau aux indices suivant, 0 : nom de lociel/donnée innutile, 1 : Nombre d'essais maximum pour une partie, 2 : Nombre de caractère maximum pour le pseudo du joueur.



NB : Le nombre max de caractère pour le pseudo n'est absolument pas géré içi. De plus, l'absence de la config du nombre d'entrée max du classement est du à des problèmatiques de simplicité.
## Fichier HTML
Ce fichier est composé de plusieurs sections. 

- Le mode de difficulté (iDifficult) où nous avons le choix entre 4 niveaux. C'est la section par défaut lorsqu'on exécute le fichier index.html
- La partie en cours (iPlay) avec le nombre d'essais restant
- Si le joueur gagne (iWin), il devra inscrire son pseudo afin d'enregistrer son score dans le classement. Après avoir validé, le classement s'affiche.
- Dans le classement (iScore), nous avons la possibilité de chercher le score d'un joueur et de réinitialiser le classement.
- Si le joueur perd (iLose), un message lui indique quel était le nombre à deviner. Il a la possiblité de rejouer ou de voir le classement.
