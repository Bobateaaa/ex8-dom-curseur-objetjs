// Banque de mots dans une "structure de données" JavaScript : le tableau contient
// une collection de "mot à deviner", et chaque mot à deviner est un objet JavaScript
// qui contient deux valeurs : la chaîne du mot, et une chaîne indice à donner
// à la demande du joueur.

/* [À compléter : étape 1] */
// Ajouter 5 "mots à deviner" différents au tableau "mots" ci-dessous.
let mots = [
    {
        mot: "fromage",
        indice: "Produit laitier"
    },
    {
        mot: "tarte",
        indice: "Pâtisserie sucrée"
    },
    {
        mot: "pamplemousse",
        indice: "Fruit qui ressemble à une orange"
    },
    {
        mot: "chocolat",
        indice: "Fait de cacao"
    },
    {
        mot: "citron",
        indice: "Fruit jaune"
    },
    {
        mot: "tigre",
        indice: "Peut être du Bengale..."
    },
    {
        mot: "yeti",
        indice: "Animal légendaire du Tibet"
    },
    {
        mot: "mauve",
        indice: "Une plante, mais aussi une couleur"
    },
    {
        mot: "ouragan",
        indice: "Phénomène météorologique"
    },
    {
        mot: "grenade",
        indice: "Fruit explosif"
    },
    {
        mot: "chaise",
        indice: "Meuble sur lequel on s'assoit"
    },
    {
        mot: "table",
        indice: "Meuble plat utilisé pour manger ou travailler"
    },
    {
        mot: "livre",
        indice: "Contient des mots imprimés"
    },
    {
        mot: "avion",
        indice: "Moyen de transport dans les airs"
    },
    {
        mot: "rivière",
        indice: "Cours d'eau naturel"
    },
    {
        mot: "pomme",
        indice: "Fruit rouge ou vert"
    },
    {
        mot: "banane",
        indice: "Fruit jaune courbé"
    },
    {
        mot: "ordre",
        indice: "Organisation ou séquence"
    },
    {
        mot: "chaton",
        indice: "Jeune animal félin"
    },
    {
        mot: "chien",
        indice: "Animal domestique loyal"
    },
    {
        mot: "montagne",
        indice: "Élévation naturelle de la terre"
    },
    {
        mot: "école",
        indice: "Endroit où l'on apprend"
    },
    {
        mot: "musée",
        indice: "Endroit qui expose des œuvres d'art ou des artefacts"
    },
    {
        mot: "plage",
        indice: "Étendue de sable près de la mer"
    },
    {
        mot: "tapis",
        indice: "Surface douce pour marcher"
    },
    {
        mot: "papier",
        indice: "Feuille fine pour écrire"
    },
    {
        mot: "souris",
        indice: "Petit mammifère rongeur"
    },
    {
        mot: "piano",
        indice: "Instrument de musique à clavier"
    },
    {
        mot: "couteau",
        indice: "Outil tranchant"
    },
    {
        mot: "fourchette",
        indice: "Ustensile de table pour manger"
    },
    {
        mot: "cuillère",
        indice: "Ustensile de table pour manger"
    },
    {
        mot: "téléphone",
        indice: "Appareil pour communiquer à distance"
    },
    {
        mot: "lampe",
        indice: "Appareil d'éclairage"
    },
    {
        mot: "soleil",
        indice: "Étoile centrale de notre système solaire"
    },
    {
        mot: "lune",
        indice: "Astre qui orbite autour de la Terre"
    },
    {
        mot: "étoile",
        indice: "Astre lumineux dans le ciel"
    },
    {
        mot: "maison",
        indice: "Lieu de résidence"
    },
    {
        mot: "voiture",
        indice: "Moyen de transport terrestre"
    },
    {
        mot: "moto",
        indice: "Deux-roues motorisé"
    },
    {
        mot: "train",
        indice: "Moyen de transport sur rails"
    },
    {
        mot: "bateau",
        indice: "Moyen de transport sur l'eau"
    },
    {
        mot: "avocat",
        indice: "Fruit vert utilisé en cuisine"
    },
    {
        mot: "pomme de terre",
        indice: "Légume-racine"
    },
    {
        mot: "tomate",
        indice: "Fruit rouge ou jaune"
    },
    {
        mot: "carotte",
        indice: "Légume orange"
    },
    {
        mot: "aspirateur",
        indice: "Appareil pour nettoyer les sols"
    },
    {
        mot: "télévision",
        indice: "Appareil pour regarder des programmes"
    },
    {
        mot: "radio",
        indice: "Appareil pour écouter des émissions"
    },
    {
        mot: "journal",
        indice: "Publication imprimée d'actualités"
    },
    {
        mot: "crayon",
        indice: "Outil pour écrire ou dessiner"
    },
    {
        mot: "gomme",
        indice: "Objet pour effacer les traces de crayon"
    },
    {
        mot: "couleur",
        indice: "Attribut visuel des objets"
    }
];

// ATTENTION :  
// On doit respecter le format et la syntaxe **À LA LETTRE** : on ne peut tout
// simplement pas continuer avec les étapes suivantes de l'évaluation si on 
// laisse une erreur dans ce fichier. 
// Au besoin, demander de l'aide !