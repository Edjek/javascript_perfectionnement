// Créer une fonction qui retourne la somme de deux nombres
function add(x, y) {
    return x + y;
}

console.log(add(90, 23));

// Créer une fonction sumTo qui permet de calculer la somme des entiers de 1 à n.
// (1 + 2 + 3 + ... + n)
function sumTo(x) {
    let sum = 0;
    for (let i = 0; i <= x; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumTo(100)); // Résultat attendu: 5050

// Utiliser une boucle pour afficher les nombres de 1 à 10
for (let i = 0; i < 10; i++) {
    // console.log(i);
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
for (let i = 0; i < acteurs.length; i++) {
    // console.log(acteurs[i]);
}

for (let acteur of acteurs) {
    // console.log(acteur);
}

acteurs.forEach((acteur) => {
    // console.log(acteur);
});

// Créer un objet person avec un nom, un age et une ville de naissance, afficher chaque clé et valeur dans la console
const person = {
    nom: 'rachid',
    age: 40,
    city: 'paris',
};

for (let key in person) {
    // console.log(person[key]);
}

// Tableau d'objets d'acteurs avec leurs informations
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

// Afficher les nom et prénom des acteurs
for (let i = 0; i < actors.length; i++) {
    // console.log(actors[i].lastName, actors[i].firstName);
}

for (const actor of actors) {
    // console.log(actor.lastName, actor.firstName);
}

actors.forEach((actor) => {
    // console.log(actor.lastName, actor.firstName);
});

// Afficher les noms et prénoms des acteurs qui ont moins de 40 ans
actors.forEach((actor) => {
    if (actor.age < 40) {
        console.log(
            'Acteurs qui ont moins de 40 ans! : ' + actor.lastName,
            actor.firstName
        );
    }
});

// Cibler le bouton dans la page HTML et ajouter un écouteur d'événement pour afficher un message dans la console
const btn = document.querySelector('#action');

btn.addEventListener('click', () => {
    // console.log('test du clique sur mon bouton');
});

// Modifier le code pour afficher un message dans une balise <p> en bas de la balise qui à l'id user-container au lieu de la console
btn.addEventListener('click', () => {
    const recup = document.querySelector('#my-paragraphe');

    if (recup == null) {
        const element = document.createElement('p');
        element.textContent = 'salut, le monde! ';
        element.id = 'my-paragraphe';

        const strong = document.createElement('strong');
        strong.textContent = 'Je suis créé en javascript';

        element.append(strong);

        const userContainer = document.querySelector('#user-container');
        userContainer.append(element);
    }
});

// Modifier le code pour creer une div avec la classe actors y inserer un titre h3 qui contient `PRENOM NOM : AGE` et un paragraphe p contenant la description à partir du tableau d'objets actors
// Les afficher dans le DOM dans la div qui a l'id actors-container
btn.addEventListener('click', function () {
    const listActors = document.querySelector('#list-actors');
    if (listActors == null) {
        const actorsContent = document.createElement('div');
        actorsContent.id = 'list-actors';
        actorsContent.classList.add('actors');

        for (let actor of actors) {
            const title = document.createElement('h3');
            title.textContent = `${actor.firstName} ${actor.lastName} : ${actor.age}`;

            const paragraphe = document.createElement('p');
            paragraphe.textContent = actor.description;

            actorsContent.append(title, paragraphe);
        }

        const actorsContainer = document.querySelector('#actors-container');
        actorsContainer.append(actorsContent);
    }
});

// Créer une fonction qui prend le tableau d'acteurs en parametre
// Créer une liste déroulante (select, option) qui affiche le nom et prénom des acteurs  dans le DOM dans la div qui a l'id user-container
function createSelectofActors(array) {
    const select = document.createElement('select');
    select.id = 'select-actors';
    array.forEach((el) => {
        const option = document.createElement('option');
        option.textContent = `${el.firstName} ${el.lastName}`;
        option.value = el.lastName;

        select.append(option);
    });
    const userContainer = document.querySelector('#user-container');
    userContainer.append(select);
}

createSelectofActors(actors);

const selectActors = document.querySelector('#select-actors');

selectActors.addEventListener('change', function (e) {
    const actorInfo = document.querySelector('#actor-card');
    if (actorInfo) {
        actorInfo.remove();
    }

    for (let actor of actors) {
        if (actor.lastName == e.target.value) {
            const card = document.createElement('div');
            card.id = 'actor-card';

            const title = document.createElement('h3');
            title.textContent = `${actor.firstName} ${actor.lastName}`;

            const description = document.createElement('p');
            description.textContent = actor.description;

            card.append(title, description);

            const userContainer = document.querySelector('#user');
            userContainer.append(card);
        }
    }
});
