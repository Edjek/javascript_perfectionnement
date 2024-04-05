// Créer une fonction qui retourne la somme de deux nombres
function sum(x, y) {
    return x + y;
}

console.log(sum(5, 3)); // Résultat attendu: 8

// Créer une fonction qui permet de calculer la somme des entiers de 1 à n.
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(100)); // Résultat attendu: 5050

// Utiliser une boucle pour afficher les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Tableau de noms d'acteurs
const acteurs = [
    'Tom Hanks',
    'Meryl Streep',
    'Leonardo DiCaprio',
    'Scarlett Johansson',
    'Brad Pitt',
    'Jennifer Lawrence',
    'Robert De Niro',
    'Angelina Jolie',
    'Johnny Depp',
    'Charlize Theron',
];

// Affichage des noms d'acteurs à l'aide de la boucle for, for...of, forEach
console.log('----------------- Noms des acteurs : -----------------');
acteurs.forEach((acteur, index) => {
    console.log(`${index + 1}. ${acteur}`);
});

// Créer un objet personn avec un nom un age et une ville de naissance, afficher chaque clé et valeur dans la console
let person = {
    name: 'Alice',
    age: 30,
    city: 'Paris',
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// Tableau d'objets d'acteurs avec leurs informations
// Tableau d'objets d'acteurs avec leurs informations et descriptions
const actors = [
    {
        lastName: 'Hanks',
        firstName: 'Tom',
        age: 65,
        nationality: 'Américaine',
        description:
            'Tom Hanks est un acteur américain de renom connu pour ses rôles dans des films tels que Forrest Gump, Seul au monde et Il faut sauver le soldat Ryan.',
    },
    {
        lastName: 'Streep',
        firstName: 'Meryl',
        age: 73,
        nationality: 'Américaine',
        description:
            "Meryl Streep est une actrice américaine légendaire connue pour sa polyvalence et ses performances dans des films comme Le Diable s'habille en Prada, Le Choix de Sophie et Kramer contre Kramer.",
    },
    {
        lastName: 'DiCaprio',
        firstName: 'Leonardo',
        age: 48,
        nationality: 'Américaine',
        description:
            'Leonardo DiCaprio est un acteur américain récompensé, célèbre pour ses rôles dans des films tels que Titanic, Inception et The Revenant.',
    },
    {
        lastName: 'Johansson',
        firstName: 'Scarlett',
        age: 38,
        nationality: 'Américaine',
        description:
            'Scarlett Johansson est une actrice américaine polyvalente connue pour ses rôles dans des films comme Lost in Translation, Avengers et Marriage Story.',
    },
    {
        lastName: 'Pitt',
        firstName: 'Brad',
        age: 59,
        nationality: 'Américaine',
        description:
            'Brad Pitt est un acteur américain très acclamé, connu pour ses performances dans des films comme Fight Club, Inglourious Basterds et Once Upon a Time in Hollywood.',
    },
    {
        lastName: 'Lawrence',
        firstName: 'Jennifer',
        age: 32,
        nationality: 'Américaine',
        description:
            'Jennifer Lawrence est une actrice américaine connue pour ses rôles dans des films comme la série Hunger Games, Happiness Therapy et Joy.',
    },
    {
        lastName: 'De Niro',
        firstName: 'Robert',
        age: 79,
        nationality: 'Américaine',
        description:
            'Robert De Niro est un acteur américain légendaire connu pour ses rôles dans des films emblématiques tels que Taxi Driver, Raging Bull et Les Affranchis.',
    },
    {
        lastName: 'Jolie',
        firstName: 'Angelina',
        age: 47,
        nationality: 'Américaine',
        description:
            'Angelina Jolie est une actrice américaine connue pour ses performances dans des films comme Lara Croft : Tomb Raider, Mr. & Mrs. Smith et Maléfique.',
    },
    {
        lastName: 'Depp',
        firstName: 'Johnny',
        age: 59,
        nationality: 'Américaine',
        description:
            "Johnny Depp est un acteur américain de renom pour ses rôles variés dans des films comme Pirates des Caraïbes, Edward aux mains d'argent et Sweeney Todd.",
    },
    {
        lastName: 'Theron',
        firstName: 'Charlize',
        age: 47,
        nationality: 'Sud-africaine',
        description:
            'Charlize Theron est une actrice sud-africaine, naturalisée américaine, connue pour ses performances dans des films comme Monster, Mad Max: Fury Road et Atomic Blonde.',
    },
];

// Affichage des nom et prénom des acteurs
console.log(
    '----------------- Noms et prénoms des acteurs : -----------------'
);
actors.forEach((actor) => {
    console.log(`${actor.firstName} ${actor.lastName}`);
});

// Affichage des noms et prénoms des acteurs qui ont moins de 40 ans
console.log(
    '----------------- Noms et prénoms des acteurs qui ont moins de 40 ans : -----------------'
);
actors.forEach((actor) => {
    if (actor.age < 40) {
        console.log(`${actor.firstName} ${actor.lastName}`);
    }
});

//  Cibler le bouton et ajouter un écouteur d'événement pour afficher un message dans la console
let button = document.querySelector('#action');

button.addEventListener('click', () => {
    console.log('Hello, World!');
});

//  Modifier le code pour afficher un message dans une balise <p> au lieu de la console
button.addEventListener('click', () => {
    let p = document.createElement('p');
    p.textContent = 'Hello, World!';
    document.querySelector('main').append(p);
});

// Modifier le code pour creer une div avec la classe actors y inserer un titre h3 qui contient `PRENOM NOM : AGE` et un paragraphe p contenant la description à partir du tableau d'objets actors
// Les afficher dans le DOM dans la div qui a l'id actors-container
let div = document.createElement('div');
div.classList.add('actors');

for (let actor of actors) {
    let title = document.createElement('h3');
    title.textContent = `${actor.firstName} ${actor.lastName}: ${actor.nationality}`;

    let description = document.createElement('p');
    description.textContent = actor.description;

    div.append(title, description);
}

document.querySelector('#actors-container').append(div);

// Créer une fonction qui prend le tableau d'acteurs en parametre
// Créer une liste déroulante (select, option) qui affiche le nom et prénom des acteurs  dans le DOM dans la div qui a l'id user-container
function createSelect(array) {
    let select = document.createElement('select');

    for (let element of array) {
        let option = document.createElement('option');
        option.textContent = `${element.firstName} ${element.lastName}`;
        option.value = element.lastName;
        select.append(option);
    }

    document.querySelector('#user-container').append(select);
}

createSelect(actors);
