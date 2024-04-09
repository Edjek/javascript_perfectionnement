/* --------------------------- AJAX --------------------------- */

/*
    AJAX (Asynchronous Javascript and XML) est une technique de développement web qui permet de récupérer des données depuis un serveur sans avoir à recharger la page.

    JSON (Javascript Objet Notation) est un format de données textuelles qui est facile à lire et à écrire pour les humains.
*/

// setTimeout est une fonction asynchrone, elle ne bloque pas le déroulement du script en attendant de se déclencher.
setTimeout(function () {
    console.log('coucou');
}, 3000);

// fetch est une fonction asynchrone qui permet de récupérer des données depuis un serveur.
// fetch prend en paramètre l'url de l'api à appeler.
// fetch retourne une promesse.
fetch('./js/data/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

// EXERCICE
// Récupérer les données de l'api https://jsonplaceholder.typicode.com/posts
// Afficher les données dans la page
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // dans une div il y aura  le titre dans un h2 et le contenu dans un p et vous l'affichez dans la page
    })
    .catch((error) => {
        console.log(error);
    });
