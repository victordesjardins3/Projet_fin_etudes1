/* Selon l'état de la case à cocher associée avec le menu
adaptatif (à savoir, cochée ou décochée), on veut bloquer ou débloquer la 
possibilité de défiler la page. */

/*
    Script pour empêcher le défilement de la page quand le menu est affiché
*/
//Récupérer la case à cocher et la balise <body>
let leCheckBox = document.querySelector("#cc-pour-bouton-burger");
let leBody =document.querySelector("body");
let leTexte =document.querySelector("h2");
let leNav = document.querySelector("a");
const toTop = document.querySelector(".to-top");

//Gestionnaire d'événement de type clique sur le checkbox 
leCheckBox.addEventListener("click", gererLeDefilement);

function gererLeDefilement(event) {
    if (leCheckBox.checked == true) {
        
        //leBody.style.position = "fixed";
        leBody.classList.add("no-scroll");

    } else {
        
        //leBody.style.position = "static";
        leBody.classList.remove("no-scroll");
    }
}



/* Lorsqu'un des liens (ou 'boutons') dans le menu 
adaptatif est cliqué, le menu adaptatif doit être "refermé" pour permettre à 
l'utilisateur de continuer à intéragir avec la page. */

/*
    Script qui contrôle l'état de la case à cocher pour fermer
    le menu quand on clique sur un bouton
*/
/*Récupérer les boutons du menu*/
let lesBoutons = document.querySelectorAll(".menu a");

/*Mettre un gestionnaire d'événement sur chaque bouton avec un boucle for of*/

for(let unBouton of lesBoutons) {
    unBouton.addEventListener("click", controlerBoutonBurger);
}

function controlerBoutonBurger() {
    //Gérer l'état de la case à cocher
    leCheckBox.checked = false;

    //Remettre la barre de défilement sur le body
    leBody.style.position = "static";
    leBody.classList.remove("no-scroll");
}


window.addEventListener("scroll", () => {
    if(window.scrollY > 100 ) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active"); 
    }
})