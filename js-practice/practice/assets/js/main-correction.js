// TODO EXERCICE :

// ? Manipulation de chaines de caractères trouvez sur google les fonctions vous permettant d'obtenir le resultat demandé
// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

// Créer une variable avec le texte suivant: "Je suis une chaine de caractères"
const text = 'Je suis une chaine de caractères';

// Afficher la longueur de la chaine de caractères en console
console.log(text.length);

// Afficher le premier caractère de la chaine de caractères en console
console.log(text.charAt(0));

// Afficher le dernier caractère de la chaine de caractères en console
console.log(text.charAt(text.length - 1));

// Supprimer les espaces en début et fin de chaine de caractères et l'afficher en console
console.log(text.trim());

// Afficher les 10 premiers caractères de la chaine de caractères en console
console.log(text.slice(0, 10));

// Mettre la chaine de caractères en majuscules et l'afficher en console
console.log(text.toUpperCase());

// Mettre la chaine de caractères en minuscules et l'afficher en console
console.log(text.toLowerCase());

// Remplacer "chaine de caractère" par "string" dans la phrase et l'afficher en console
console.log(text.replace('chaine de caractères', 'string'));

// Afficher la chaine de caractères en console en remplaçant chaque espace par un underscore
console.log(text.replaceAll(' ', '_'));

// Transformer la chaine de caractères en tableau contenant chaque mots et l'afficher en console
console.log(text.split(' '));

const pokemons = [
    'Bulbasaur',
    'Charmander',
    'Squirtle',
    'Pikachu',
    'Jigglypuff',
    'Meowth',
    'Psyduck',
    'Snorlax',
    'Magikarp',
    'Eevee',
];

// Afficher en console le dernier élément du tableau pokemons
console.log(pokemons[pokemons.length - 1]);

// Transformer le tableau pokemons en chaine de caractères avec les noms des pokemons séparés par une virgule et un espace et l'afficher en console
console.log(pokemons.join(', '));

// TODO EXERCICE
const newSeries = [
    {
        title: 'The Crown',
        genre: 'Drame historique',
        synopsis:
            'Cette série dramatique suit les rivalités politiques et les intrigues personnelles de la reine Elizabeth II, du roi George VI, et de Winston Churchill.',
        seasons: 4,
        imdbRating: 8.7,
    },
    {
        title: 'The Mandalorian',
        genre: 'Science-Fiction',
        synopsis:
            "Un chasseur de primes solitaire explore les confins de la galaxie, loin de l'autorité de la Nouvelle République.",
        seasons: 2,
        imdbRating: 8.7,
    },
    {
        title: 'The Witcher',
        genre: 'Fantasy',
        synopsis:
            'Geralt de Riv, un chasseur de monstres solitaire, lutte pour trouver sa place dans un monde où les gens se révèlent souvent plus méchants que les bêtes.',
        seasons: 2,
        imdbRating: 8.2,
    },
    {
        title: 'The Boys',
        genre: 'Super-héros / Comédie noire',
        synopsis:
            'Une équipe de justiciers lutte contre des super-héros corrompus qui abusent de leur pouvoir plutôt que de le protéger.',
        seasons: 2,
        imdbRating: 8.7,
    },
    {
        title: 'The Umbrella Academy',
        genre: 'Super-héros / Science-Fiction',
        synopsis:
            'Une famille de super-héros dysfonctionnels se réunit pour résoudre le mystère de la mort de leur père et éviter une apocalypse imminente.',
        seasons: 2,
        imdbRating: 8.0,
    },
];

// Afficher en console le titre de chaque série dans le tableau newSeries
newSeries.forEach((serie) => {
    console.log(serie.title);
});

// Afficher en console le titre des series avec une note IMDb supérieure à 8.5
newSeries.forEach((serie) => {
    if (serie.imdbRating > 8.5) {
        console.log(serie.title);
    }
});

// Afficher en console le titre des séries qui ont moins de 3 saisons et une note IMDb supérieure à 8.5
newSeries.forEach((serie) => {
    if (serie.seasons < 3 && serie.imdbRating > 8.5) {
        console.log(serie.title);
    }
});

// Afficher en console le titre et les 60 premiers caractères du synopsis
newSeries.forEach((serie) => {
    console.log(serie.title, serie.synopsis.slice(0, 60));
});

// Créer une fonction createSerieCard() qui prend un objet série en paramètre et retourne une card HTML avec les informations de la série
// La card sera une div avec une classe 'card' et contiendra les informations de la série
// La carte doit contenir un titre h3, un paragraphe pour le genre, un paragraphe pour le synopsis, un paragraphe pour le nombre de saisons et un paragraphe pour la note IMDb

function createSerieCard(serie) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = serie.title;

    const cardGenre = document.createElement('p');
    cardGenre.textContent = serie.genre;

    const cardSynopsis = document.createElement('p');
    cardSynopsis.textContent = serie.synopsis;

    const cardSaisons = document.createElement('p');
    cardSaisons.textContent = `Saisons: ${serie.seasons}`;

    const cardNote = document.createElement('p');
    cardNote.textContent = `Note IMDb: ${serie.imdbRating}`;

    card.append(cardTitle, cardGenre, cardSynopsis, cardSaisons, cardNote);

    return card;
}

// Pour chaque série dans le tableau newSeries, créer une carte et l'ajouter à la section #new-series
const seriesContainer = document.querySelector('#new-series');

newSeries.forEach((serie) => {
    const card = createSerieCard(serie);
    seriesContainer.append(card);
});

// TODO EXERCICE

const popularSeries = [
    {
        title: 'Game of Thrones',
        genre: 'Fantasy / Drama',
        synopsis:
            'Une lutte impitoyable pour le pouvoir se déroule dans les Sept Royaumes de Westeros, tandis que des forces sinistres se lèvent au-delà du Mur pour menacer tout le royaume.',
        seasons: 8,
        imdbRating: 9.3,
    },
    {
        title: 'Breaking Bad',
        genre: 'Drama / Thriller',
        synopsis:
            "Un professeur de chimie atteint de cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille, entraînant une descente dans le monde dangereux du crime.",
        seasons: 5,
        imdbRating: 9.5,
    },
    {
        title: 'Stranger Things',
        genre: 'Science-Fiction / Horror',
        synopsis:
            "À Hawkins, en Indiana, dans les années 1980, un jeune garçon disparaît mystérieusement. Pendant ce temps, une jeune fille aux pouvoirs télékinésiques s'échappe d'un laboratoire sinistre et découvre un monde étrange et effrayant.",
        seasons: 4,
        imdbRating: 8.7,
    },
    {
        title: 'The Big Bang Theory',
        genre: 'Comedy',
        synopsis:
            "Une sitcom qui suit les aventures de quatre scientifiques et de leurs voisins alors qu'ils naviguent dans la vie et l'amitié.",
        seasons: 12,
        imdbRating: 8.1,
    },
    {
        title: 'Stranger Things',
        genre: 'Science-Fiction / Horror',
        synopsis:
            "À Hawkins, en Indiana, dans les années 1980, un jeune garçon disparaît mystérieusement. Pendant ce temps, une jeune fille aux pouvoirs télékinésiques s'échappe d'un laboratoire sinistre et découvre un monde étrange et effrayant.",
        seasons: 4,
        imdbRating: 8.7,
    },
];

// Créer un élément ul avec la class 'popular-list'
// Ajouter un élément li pour le titre de chaque série dans le tableau popularSeries
// Ajouter la liste à la section #popular
const listPopular = document.createElement('ul');
listPopular.classList.add('popular-list');

popularSeries.forEach((serie) => {
    const listItem = document.createElement('li');
    listItem.textContent = serie.title;
    listPopular.append(listItem);
});

const popularContainer = document.querySelector('#popular');
popularContainer.append(listPopular);

// TODO EXERCICE

const mustWatchSeries = [
    {
        title: 'Les Soprano',
        genre: 'Drame / Crime',
        synopsis:
            'Un patron de la mafia du New Jersey jongle avec les défis de sa vie professionnelle et les complexités de sa vie familiale.',
        seasons: 6,
        imdbRating: 9.2,
    },
    {
        title: 'The Wire',
        genre: 'Drame / Crime',
        synopsis:
            'Cette série explore la vie dans les quartiers pauvres de Baltimore à travers les yeux de la police et des trafiquants de drogue.',
        seasons: 5,
        imdbRating: 9.3,
    },
    {
        title: 'Breaking Bad',
        genre: 'Drame / Thriller',
        synopsis:
            "Un professeur de chimie atteint de cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille, entraînant une descente dans le monde dangereux du crime.",
        seasons: 5,
        imdbRating: 9.5,
    },
    {
        title: 'Friends',
        genre: 'Comédie',
        synopsis:
            "Un groupe d'amis inséparables navigue à travers les hauts et les bas de la vie à New York, partageant des rires, des larmes et des moments inoubliables.",
        seasons: 10,
        imdbRating: 8.9,
    },
    {
        title: 'The Office (US)',
        genre: 'Comédie',
        synopsis:
            'Une équipe dysfonctionnelle travaille dans un bureau de vente de papier, où les blagues, les drames de bureau et les moments hilarants se produisent quotidiennement.',
        seasons: 9,
        imdbRating: 8.9,
    },
];

// Créer un élément select avec la class 'select-series'
// Avec un element option avec le titre de chaque série dans le tableau mustWatchSeries
// Ajouter le select à la section #must-watch
const selectSeriesMustWatch = document.createElement('select');
selectSeriesMustWatch.classList.add('select-series');

mustWatchSeries.forEach((serie) => {
    const option = document.createElement('option');
    option.textContent = serie.title;
    selectSeriesMustWatch.append(option);
});

const mustWatchContainer = document.querySelector('#must-watch');
mustWatchContainer.append(selectSeriesMustWatch);

// TODO EXERCICE
// Ajouter un écouteur d'événements 'change' sur le select
// Lorsque l'utilisateur sélectionne une série, afficher une card avec la fonction déjà créé pour cette série dans la section #must-watch
// Si une carte est déjà affichée, la remplacer par la nouvelle série sélectionnée
const selectSeries = document.querySelector('.select-series');

selectSeries.addEventListener('change', (event) => {
    const cardToRemove = mustWatchContainer.querySelector('.selected');
    if (cardToRemove) {
        cardToRemove.remove();
    }
    mustWatchSeries.forEach((serie) => {
        if (serie.title === event.target.value) {
            const card = createSerieCard(serie);
            card.classList.add('selected');
            mustWatchContainer.append(card);
        }
    });
});
