import { newSeries, popularSeries, mustWatchSeries } from './data/data.js';
import {createSerieCard } from './utils/createSerieCard.js'



// TODO EXERCICE
// Afficher en console le titre de chaque série dans le tableau newSeries
newSeries.forEach((serie) => {
    const { title } = serie;
    console.log(title);
});

// Afficher en console le titre des series avec une note IMDb supérieure à 8.5
newSeries.forEach((serie) => {
    const { title, imdbRating: note } = serie;
    if (note > 8.5) {
        console.log(title);
    }
});

// Afficher en console le titre des séries qui ont moins de 3 saisons et une note IMDb supérieure à 8.5
newSeries.forEach((serie) => {
    const { imdbRating: note, title, seasons } = serie;
    if (note > 8.5 && seasons < 3) {
        console.log(title);
    }
});

// Afficher en console le titre et les 60 premiers caractères du synopsis
newSeries.forEach((serie) => {
    console.log(`${serie.title} synopsys : ${serie.synopsis.slice(0, 60)}...`);
});

// Créer une fonction createSerieCard() qui prend un objet série en paramètre et retourne une card HTML avec les informations de la série
// La card sera une div avec une classe 'card' et contiendra les informations de la série
// La carte doit contenir un titre h3, un paragraphe pour le genre, un paragraphe pour le synopsis, un paragraphe pour le nombre de saisons et un paragraphe pour la note IMDb


// Pour chaque série dans le tableau newSeries, créer une carte et l'ajouter à la section #new-series
newSeries.forEach((serie) => {
    const card = createSerieCard(serie);

    const newSeriesContainer = document.querySelector('#new-series');
    newSeriesContainer.append(card);
    // ajouter dans le DOM
});

// TODO EXERCICE
// Créer un élément ul avec la class 'popular-list'
// Ajouter un élément li pour le titre de chaque série dans le tableau popularSeries
// Ajouter la liste à la section #popular
const listSeriespopular = document.createElement('ul');
listSeriespopular.classList.add('popular-list');
listSeriespopular.id = 'popular-list';

popularSeries.forEach((serie) => {
    const listItem = document.createElement('li');
    listItem.textContent = serie.title;
    listSeriespopular.append(listItem);
});

const seriesPopularContainer = document.querySelector('#popular');
seriesPopularContainer.append(listSeriespopular);

// TODO EXERCICE
// Créer un élément select avec la class 'select-series'
// Avec un element option avec le titre de chaque série dans le tableau mustWatchSeries
// Ajouter le select à la section #must-watch
const selectSeriesMustWatchElement = document.createElement('select');
selectSeriesMustWatchElement.classList.add('select-series');
selectSeriesMustWatchElement.id = 'select-series';

mustWatchSeries.forEach((serie) => {
    const option = document.createElement('option');
    option.textContent = serie.title;
    option.value = serie.title;
    selectSeriesMustWatchElement.append(option);
});

const sectionMustWatch = document.querySelector('#must-watch');

sectionMustWatch.append(selectSeriesMustWatchElement);

// TODO EXERCICE
// Ajouter un écouteur d'événements 'change' sur le select
// Lorsque l'utilisateur sélectionne une série, afficher une card avec la fonction déjà créé pour cette série dans la section #must-watch
// Si une carte est déjà affichée, la remplacer par la nouvelle série sélectionnée
const selectSeriesMustWatch = document.querySelector('#select-series');

selectSeriesMustWatch.addEventListener('change', function (e) {
    const cardSelected = document.querySelector('#selected');

    if (cardSelected) {
        cardSelected.remove();
    }

    mustWatchSeries.forEach((serie) => {
        if (serie.title === e.target.value) {
            const card = createSerieCard(serie);
            card.id = 'selected';
            sectionMustWatch.append(card);
        }
    });
});
