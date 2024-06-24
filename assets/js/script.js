//_______________________CARROUSEL___________________________________
// Obtention de l'élément du slider
var slider = document.getElementById("slider");

// Obtention des éléments des diapositives
var slides = slider.querySelectorAll(".slide");

// Création d'un index pour commencer la diapositive
var indice = 0;

// Fonction pour afficher la diapositive suivante
function next() {
    // Masquons toutes les diapositives
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrémentation de l'indice
    indice++;

    // Si nous atteignons la fin de la liste des diapositives, revenons au début
    if (indice >= slides.length) {
        indice = 0;
    }

    // Affichage de la diapositive actuelle
    slides[indice].style.display = "block";
}

// Affichage de la première diapositive
next();

// Définition d'un intervalle pour afficher la diapositive suivante toutes les 3 secondes
setInterval(next, 3000);

