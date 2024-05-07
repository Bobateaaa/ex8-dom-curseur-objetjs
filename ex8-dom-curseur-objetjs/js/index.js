/*******************************************************************************
    Scène du jeu
*******************************************************************************/

////////// AUDIO ///////////////////////////////////////////////////////////////
// Extraits audio à utiliser dans l'interface du jeu
let audio = {
    succes: new Audio('media/succes.wav'),
    echec: new Audio('media/echec.wav')
};

////////// ÉLÉMENTS DU DOM /////////////////////////////////////////////////////
// Saisir les éléments du DOM à utiliser pour gérer la scène du jeu.
// L'indice
let h2Indice = document.querySelector('h2.indice');
// Le mot caché à deviner
let sectionLettresDuMot = document.querySelector('.lettres-du-mot');
// Le clavier avec les lettres de l'alphabet
let sectionLettresDisponibles = document.querySelector('.lettres-disponibles');
// Le bouton pour démarrer une partie
let btnNouvellePartie = document.querySelector('.btn-nouvelle-partie');

////////// ÉCOUTEURS D'ÉVÉNEMENTS STATIQUES ////////////////////////////////////
// Gérer le bouton "Nouvelle partie"
btnNouvellePartie.addEventListener('click', demarrer);

// Gérer le double-clic de l'indice
h2Indice.addEventListener('dblclick', devoilerIndice);

////////// FONCTIONS (INTERACTIVITÉ DU JEU) ////////////////////////////////////

/* [À compléter : étape 2] */
/**
 * Afficher le clavier des lettres de l'alphabet
 * (utilisée au démarrage de la page)
 */
function afficherClavier() {
    // On vide la section des lettres disponibles
    sectionLettresDisponibles.innerHTML = ""; // Laisser cette ligne telle-quelle

    let spanLettre;
    for(let lettre of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
        /* [À compléter : étape 2a] */
        // Créer l'élément span et l'affecter à la variable spanLettre
        spanLettre = document.createElement('span');
        
        /* [À compléter : étape 2b] */
        // Lui ajouter dans son contenu texte la lettre
        spanLettre.innerText = lettre;
        
        /* [À compléter : étape 2c] */
        // Lui associer le gestionnaire d'événement 'validerLettre' pour 
        // l'écouteur d'événement 'clic'
        spanLettre.addEventListener('click', validerLettre);

        /* [À compléter : étape 2d] */
        // Lui associer le gestionnaire d'événement 'changerCurseurBouton' pour 
        // les deux écouteurs d'événement 'mouseover' et 'mouseout'
        // (cela permettra au curseur personnalisé d'être modifié lorsqu'on
        // survol les boutons représentant les lettres)
        spanLettre.addEventListener('mouseover', changerCurseurBouton);
        spanLettre.addEventListener('mouseout', changerCurseurBouton);
        
        /* [À compléter : étape 2e] */
        // L'insérer dans la section des lettres disponibles
        sectionLettresDisponibles.append(spanLettre);
        
    }
}

/* [À compléter : étape 3] */
/**
 * Démarrer une nouvelle partie
 * (utilisée lorsque le bouton 'Nouvelle partie' est cliqué)
 */
function demarrer() {
    // Remettre la scène de jeu à son état initial
    reinitialiser();

    // On commence par choisir un "mot à deviner" au hasard dans le tableau "mots" 
    // (ce tableau se trouve dans le fichier 'banque-mots.js')

    
    /* [À compléter : étape 3a] */
    // Générer un nombre entier aléatoire qui correspond à une des positions 
    // possibles du tableau "mots" (suggestion : utiliser l'objet Math de JS)
    let position = Math.floor(Math.random() * mots.length);
    
    
    /* [À compléter : étape 3b] */
    // À l'aide du nombre aléatoire déterminé à l'étape précédente, récupérer un 
    // des mots à deviner du tableau "mots"
    let motADeviner = mots[position];
    

    /* [À compléter : étape 3c] */
    // À partir de l'objet représentant le "mot à deviner" obtenu à l'étape 3b, 
    // récupérer la valeur de la propriété "mot" de cet objet et l'affecter à 
    // la variable "mot" ci-dessous (à la place de la chaîne vide)
    let mot = motADeviner.mot ;
    
    /* [À compléter : étape 3d] */
    // À partir de l'objet représentant le "mot à deviner" obtenu à l'étape 3b, 
    // récupérer la valeur de la propriété "indice" de cet objet et l'affecter à
    // la variable "indice" ci-dessous (à la place de la chaîne vide)
    let indice = motADeviner.indice; ;
    

    /* [À compléter : étape 3e] */
    // Insérer le texte de l'indice dans l'élément approprié du DOM (déjà 
    // saisit dans une variable en haut de ce fichier)
    h2Indice.innerText = indice;
    

    // Composer l'aire du jeu
    let divLettre;
    for (let lettre of mot) {
        divLettre = document.createElement('div');
        // Remarquer qu'on veut s'assurer que les lettres sont affichées en majuscule
        divLettre.innerText = lettre.toUpperCase();
        // Associer une classe ayant comme nom la lettre courante (sera utile
        // uniquement pour vérifier le résultat plus loin dans le code)
        divLettre.classList.add(lettre.toUpperCase());
        sectionLettresDuMot.append(divLettre);
    }
}

/**
 * Afficher l'indice du mot en ajoutant la classe appropriée à l'élément 
 * le contenant, et désactiver le curseur personnalisé.
 * (utilisée lorsque le bloc HTML contenant l'indice de jeu est double-cliqué)
 */
function devoilerIndice() {
    // On veut dévoiler la zone d'indice du mot.
    h2Indice.classList.add('devoiler');
    // On ajuste les classes du curseur personnalisé une fois que l'indice est dévoilée
    // Voir aussi la fonction 'devoilerIndice' pour une meilleure compréhension
    curseur.classList.remove('c-indice');
    curseur.innerText = "";
}

/**
 * Valider une lettre pour le mot à deviner
 * (utilisée lorsqu'on clique une lettre du clavier)
 * @param {Event} event : objet Event de l'événement en cours 
 */
function validerLettre(event) {
    let toucheChoisie = event.target;
    let lettreChoisie = toucheChoisie.innerText;
    // Vérifier s'il y a cette lettre dans le mot à deviner (on se rappelle 
    // que nous avions ajouté une classe nommée suivant la lettre à chaque élément 
    // contenant une lettre du mot à deviner)
    // On suppose pour commencer que la lettre n'est pas bonne ...
    let etatVerif = 'echec';
    // ... puis on cherche le tableau des éléments du DOM qui ont cette lettre 
    // parmi leurs classes CSS ...
    let lettresDevinees = sectionLettresDuMot.querySelectorAll('.' + lettreChoisie);
    // ... si le tableau retourné contient des éléments ...
    if(lettresDevinees.length > 0) {
        // ... alors la lettre est bonne (elle est dans le mot à deviner !)
        etatVerif = 'succes';
    }
    // En fin de compte, on peut jouer le son correspondant à l'état de la 
    // vérification ('echec' ou 'succes') ...
    audio[etatVerif].play();
    // ... on rembobine vite le son pour qu'il puisse être 're-joué' même en rafale :
    audio[etatVerif].currentTime = 0;
    /* ... et on désactive cette touche:
     * en enlevant le gestionnaire d'événement
     * et, en associant la classe CSS qui va illustrer si la lettre choisie était bonne ou non
     */
    toucheChoisie.removeEventListener('click', validerLettre);
    toucheChoisie.classList.add('choisie-' + etatVerif);
    
    // On parcourt toutes les cases du mot à deviner qui contiennent la lettre 
    // choisie ... 
    for(let chaqueLettreDevinee of lettresDevinees) {
        // ... et on affiche la lettre en lui associant la classe CSS appropriée
        chaqueLettreDevinee.classList.add('devoiler');
    }
}

/**
 * Réinitialiser la scène du jeu 
 * (utilisée lorsqu'on démarre une nouvelle partie)
 */
function reinitialiser() {
    // Remettre le voile sur l'indice
    h2Indice.classList.remove('devoiler');

    // Vider la section du mot à deviner
    while(sectionLettresDuMot.children.length>0) {
        sectionLettresDuMot.firstElementChild.remove();
    }

    // Reconstruire le clavier des lettres
    afficherClavier();
}

/*******************************************************************************
    Curseur personnalisé
*******************************************************************************/
/* [À compléter : étape 4a] */
// Saisir l'élément HTML de la page qui représente le curseur personnalisé
// Utiliser la variable nommée 'curseur' ci-dessous...

let curseur = document.querySelector('.curseur');

/* [À compléter : étape 4b] */
// Saisir l'élément HTML de la page qui représente la racine du document
// sur lequel sont définies les propriétées personnalisées de position du 
// curseur.
// Utiliser la variable nommée 'racine' ci-dessous...

let racine = document.querySelector(':root'); 

/* [À compléter : étape 4c] */
// Ajouter à l'objet window l'écouteur de *mouvement* de la souris qui appellera 
// la fonction qui gère le déplacement du curseur personnalisé (bougerCurseur)
window.addEventListener('mousemove', bougerCurseur);



/* [À compléter : étape 4d] */
/**
 * Déplacer le curseur personnalisé pour suivre la position du pointeur de souris
 * @param {Event} event : objet Event de l'événement en cours 
 */
function bougerCurseur(event) {
    // Modifiez les valeurs des propriétés personnalisées définis sur la racine 
    // du document HTML
    curseur.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;


}

/* [À compléter : étape 4e] */
// Ajouter les écouteurs d'événements 'mouseover' et 'mouseout' au bouton 
// "Nouvelle partie" et qui appellent tous deux la même fonction qui gère le 
// changement d'aspect du curseur personnalisé (changerCurseurBouton)
btnNouvellePartie.addEventListener('mouseover', changerCurseurBouton);




/* [À compléter : étape 4f] */
/**
 * Modifier la forme du curseur personnalisé lorsqu'on survole un "bouton"
 * @param {Event} event : objet Event de l'événement en cours 
 */
 function changerCurseurBouton(event) {
    // Selon le type d'événement, on veut ajouter ou enlever la classe 'c-bouton'
    // du curseur, et modifier son contenu textuel en conséquence (voir la démo)
    if(event.type == 'mouseover') {
        curseur.classList.add('c-bouton');
    }
    else {
        curseur.classList.remove('c-bouton');
        curseur.innerText = "";
    }
    
}





///////////////////////// NE RIEN MODIFIER CI-DESSOUS //////////////////////////

// Gérer les événements de survol de l'indice du mot à deviner
h2Indice.addEventListener('mouseover', changerCurseurIndice);
h2Indice.addEventListener('mouseout', changerCurseurIndice);

/**
 * Modifier la forme et le contenu du curseur personnalisé lorsqu'on survole
 * l'élément qui contient l'indice du mot à deviner.
 * @param {Event} event : objet Event de l'événement en cours 
 */
function changerCurseurIndice(event) {
    // Cette première ligne juste pour éviter conflit avec code des étudiant.e.s
    let curseur = document.querySelector('.curseur');

    // S'il s'agit d'un survol et l'indice est encore caché...
    if(event.type == 'mouseover' && !event.target.classList.contains('devoiler')) {
        curseur.classList.add('c-indice');
        curseur.innerText = "Double-clic pour dévoiler l'indice";
    }
    else {
        curseur.classList.remove('c-indice');
        curseur.innerText = "";
    }
}