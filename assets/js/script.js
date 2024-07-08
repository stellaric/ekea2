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

//_______________________TABS___________________________________
function openTab(event, tabId) {
    // Cacher tous les contenus des tabs
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Afficher le contenu du tab sélectionné
    var selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';

    // Modifier l'apparence des onglets
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    event.target.classList.add('active');
}

// Ouvrir la première tab par défaut
document.getElementById('tab1').style.display = 'block';
document.getElementsByClassName('tab')[0].classList.add('active');