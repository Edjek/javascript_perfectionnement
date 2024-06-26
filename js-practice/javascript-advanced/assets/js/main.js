/*
    ? RENOMMER le dossier par NOM_Prenom avant de commencer

    Description: Javascript Practice
    Language: JavaScript
    Created: 2024-04-09
    By: @edjek
    TODO: Lisez les instructions ci-dessous et écrivez votre code dans le fichier main.js
    * La correction se trouvera dans le fichier correction.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

//      _________
//     / ======= \
//    / __________\
//   | ___________ |
//   | | -       | |
//   | |         | |
//   | |_________| |________________________
//   \=____________/   EDJEKOUANE Rachid     )
//   / """"""""""" \                        /
//  / ::::::::::::: \                   =D-'
// (_________________)

// ----------------------------------- The 100 -----------------------------------

const serie = {
    nom: 'The 100',
    nbrSaison: 7,
    nbrEpisode: 100,
    listNote: [2, 4, 3, 5, 3, 4, 3, 2, 1],
    genres: ['Dystopie', 'Action', 'Drame', 'Science-fiction'],
    acteurs: {
        principal: 'Clarke Griffin',
        secondaire: 'Bellamy Blake',
    },
};

// ---------------------------------- Exercice 0 ----------------------------------

// Affichez le nom de la série

// Affichez le nombre de saisons de la série

// Affichez le nom de l'acteur principal

// Destructurez les propriétés suivantes: nom, nbrSaison, genres et acteur principal

// ---------------------------------- Exercice 1 ----------------------------------

// Créez une fonction qui prend un tableau et affiche chaque élément en console.

// Affichez les genres de la série en utilisant la fonction créée

// ---------------------------------- Exercice 2 ----------------------------------

// Créez une fonction averageArray() qui prend un tableau et renvoie la moyenne de tous les éléments.

// Affichez la moyenne des notes de la série en utilisant la fonction créée

// ---------------------------------- Exercice 3 ----------------------------------

// Créez une fonction checkSerie() qui prend un tableau en parametre si la moyenne est supérieure à 3, affichez 'La série est bonne', sinon affichez 'La série est mauvaise' (utilisez la fonction precedente pour le calcul de la moyenne).

// Affichez si la série est bonne ou mauvaise en utilisant la fonction créée

// ---------------------------------- Exercice 4 ----------------------------------

// Créez une fonction maxNumber() qui prend un tableau de nombres et renvoie le nombre le plus grand.

// Affichez la note la plus grande de la série en utilisant la fonction créée

// ---------------------------------- Exercice 5 ----------------------------------

// Créez une fonction minNumber() qui prend un tableau de nombres et renvoie le nombre le plus petit.

// Affichez la note la plus petite de la série en utilisant la fonction créée

// ---------------------------------- Exercice 6 ----------------------------------

// Créez un objet avec les propriétés suivantes:
// nom: 'John'
// age: 30
// ville: 'New York'
// salary: 3800
// prime: tableau avec les valeurs suivantes: 1890, 2890, 3700
// job: objet avec les propriétés suivantes:
//     titre: 'Développeur Web'
//     entreprise: 'Google'
// description: fonction qui retourne 'NOM est un JOB de AGE ans vivant à VILLE. Il travaille chez ENTREPRISE et gagne SALARY euros par mois.'

// Destructurez les propriétés suivantes :
// nom, age, ville, prime , titre, entreprise, description

// ---------------------------------- Exercice 7 ----------------------------------

// Faites une requête AJAX pour récupérer les données de l'API suivante: 'https://api.kanye.rest/'
// Créez un paragraphe avec la class message-request et affichez la citation de Kanye West dans la section #container.

// ---------------------------------- Exercice 8 ----------------------------------

// Faites une requête AJAX pour récupérer les données de l'API suivante: 'https://api.chucknorris.io/jokes/random'
// Creez un paragraphe avec la class message-request et affichez la blague de Chuck Norris dans la section #container.

// ---------------------------------- Exercice 9 ----------------------------------

// Faites une requête AJAX pour récupérer les données de l'API suivante: 'https://poetrydb.org/author'
// Affichez le nombre d'auteurs présent et affichez le nom du premier auteur en console

/* ----------------------------------------------------------- */
/*                  Tableau d'Objets Avengers                  */
/* ----------------------------------------------------------- */

const avengers = [
    {
        nom: 'Iron Man',
        vraiNom: 'Tony Stark',
        alias: 'Iron Man',
        description: 'Milliardaire, génie, playboy, philanthrope',
        capacites: {
            intellect: 'Niveau génie',
            armure: 'Motorisée',
        },
        equipement: [
            'Iron Man Suit Mark LXXXV',
            'Répulseurs',
            'Unibeam',
            'Missiles',
        ],
        films: [
            'Iron Man',
            'Avengers',
            'Iron Man 2',
            'Avengers: Age of Ultron',
            'Iron Man 3',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Captain America',
        vraiNom: 'Steve Rogers',
        alias: 'Capitaine America',
        description: 'Héros de la Seconde Guerre mondiale, leader des Avengers',
        capacites: {
            force: 'Surhumaine',
            agilite: 'Exceptionnelle',
            artsMartiaux: 'Maîtrise des arts martiaux',
        },
        equipement: [
            'Bouclier en vibranium',
            'Costume de Captain America',
            'Bouclier',
            'Mjolnir (temporairement)',
        ],
        films: [
            'Captain America: First Avenger',
            'Avengers',
            "Captain America: Le Soldat de l'Hiver",
            'Avengers: Age of Ultron',
            'Captain America: Civil War',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Thor',
        vraiNom: 'Thor Odinson',
        alias: 'Dieu du Tonnerre',
        description: "Prince d'Asgard, protecteur de la Terre",
        capacites: {
            force: 'Surhumaine',
            vol: 'Possible',
            foudre: 'Contrôle sur la foudre',
        },
        equipement: ['Mjolnir', 'Armure Asgardienne'],
        films: [
            'Thor',
            'Avengers',
            'Thor: Le Monde des ténèbres',
            'Avengers: Age of Ultron',
            'Thor: Ragnarok',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Hulk',
        vraiNom: 'Bruce Banner',
        alias: 'Hulk',
        description:
            "Scientifique exposé à des radiations gamma, capable de se transformer en monstre vert géant lorsqu'il est en colère",
        capacites: {
            force: 'Surhumaine',
            endurance: 'Incroyable',
            saut: 'Sauts prodigieux',
        },
        films: [
            'The Incredible Hulk',
            'The Avengers',
            'Avengers: Age of Ultron',
            'Thor: Ragnarok',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Black Widow',
        vraiNom: 'Natasha Romanoff',
        alias: 'Black Widow',
        description:
            'Ancienne espionne russe, experte en arts martiaux et en infiltration',
        capacites: {
            agilite: 'Exceptionnelle',
            combatRapproche: 'Maîtrise des arts martiaux',
            espionage: 'Espionnage et infiltration',
        },
        equipement: ['Baton électrique', 'Armes à feu', "Gadgets d'espionnage"],
        films: [
            'Iron Man 2',
            'The Avengers',
            'Captain America: The Winter Soldier',
            'Avengers: Age of Ultron',
            'Captain America: Civil War',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Hawkeye',
        vraiNom: 'Clint Barton',
        alias: 'Hawkeye',
        description: "Tireur d'élite et expert en combat au corps à corps",
        capacites: {
            precision: "Tir à l'arc de précision",
            combatRapproche: 'Maîtrise des arts martiaux',
        },
        equipement: [
            'Arc et flèches spéciales',
            'Armes de poing',
            'Armes de mêlée',
        ],
        films: [
            'Thor',
            'The Avengers',
            'Avengers: Age of Ultron',
            'Captain America: Civil War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Black Panther',
        vraiNom: "T'Challa",
        alias: 'Black Panther',
        description:
            'Roi du Wakanda, combattant agile et expert en technologie',
        capacites: {
            force: 'Surhumaine',
            agilite: 'Exceptionnelle',
            furtivite: 'Furtivité avancée',
            combatRapproche: 'Maîtrise des arts martiaux',
        },
        equipement: [
            'Costume de Black Panther',
            'Griffes en vibranium',
            'Technologie avancée du Wakanda',
        ],
        films: [
            'Captain America: Civil War',
            'Black Panther',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Doctor Strange',
        vraiNom: 'Stephen Strange',
        alias: 'Doctor Strange',
        description:
            'Ancien neurochirurgien devenu sorcier suprême, maître des arts mystiques',
        capacites: {
            magie: 'Manipulation des forces mystiques',
            projectionAstrale: 'Projection astrale',
            teleportation: 'Téléportation',
        },
        equipement: ["Œil d'Agamotto", 'Cape de lévitation'],
        films: [
            'Doctor Strange',
            'Thor: Ragnarok',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Spider-Man',
        vraiNom: 'Peter Parker',
        alias: 'Spider-Man',
        description:
            'Jeune étudiant doté de capacités arachnéennes après avoir été mordu par une araignée radioactive',
        capacites: {
            force: 'Surhumaine',
            agilite: 'Exceptionnelle',
            endurance: 'Endurance accrue',
            sensAraignee: "Sens d'araignée",
        },
        equipement: [
            'Toile de Spider-Man',
            'Lanceurs de toile',
            'Costume de Spider-Man',
        ],
        films: [
            'Captain America: Civil War',
            'Spider-Man: Homecoming',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Scarlet Witch',
        vraiNom: 'Wanda Maximoff',
        alias: 'Scarlet Witch',
        description:
            'Mutante dotée de pouvoirs de manipulation de la réalité et de télékinésie',
        capacites: {
            telekinesie: 'Télékinésie',
            manipulationRealite: 'Manipulation de la réalité',
            magie: 'Pouvoirs mystiques',
        },
        equipement: ['Aucun'],
        films: [
            'Captain America: The Winter Soldier',
            'Avengers: Age of Ultron',
            'Captain America: Civil War',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Vision',
        vraiNom: 'Vision',
        alias: 'Vision',
        description:
            "Androïde créé par Ultron, doté d'une pierre d'infinité et de capacités surhumaines",
        capacites: {
            force: 'Surhumaine',
            vol: 'Vol',
            intangibilite: 'Intangibilité',
            rayonsEnergetiques: 'Rayons énergétiques',
        },
        equipement: [
            "Pierre de l'esprit",
            'Corps synthétique',
            'Costume de Vision',
        ],
        films: [
            'Avengers: Age of Ultron',
            'Captain America: Civil War',
            'Avengers: Infinity War',
            'Avengers: Endgame',
        ],
    },
    {
        nom: 'Ant-Man',
        vraiNom: 'Scott Lang',
        alias: 'Ant-Man',
        description:
            "Voleur et ingénieur équipé d'un costume qui lui permet de rétrécir ou de devenir géant",
        capacites: {
            rétrécissement: 'Rétrécissement',
            augmentation: 'Augmentation de taille',
        },
        equipement: ["Costume d'Ant-Man", 'Pym Particles'],
        films: [
            'Ant-Man',
            'Captain America: Civil War',
            'Ant-Man and the Wasp',
            'Avengers: Endgame',
        ],
    },
];

// ---------------------------------- Exercice 10 ----------------------------------

// Affichez la liste des films dans lesquels chaque super-héros est apparu.
// Affichez: 'ALIAS est apparu dans les films suivants: films'
console.log(
    '------------------------- Films dans lesquels chaque super-héros est apparu: -------------------------'
);

// ---------------------------------- Exercice 11 ----------------------------------

// Affichez la liste des super-héros qui ont des capacités de vol.
// Affichez: 'ALIAS peut voler'
console.log(
    '------------------------- Avengers qui peuvent voler: -------------------------'
);

// ---------------------------------- Exercice 12 ----------------------------------

// Affichez la liste des super-héros qui ont des capacités de télékinésie.
// Affichez: 'ALIAS a des capacités de télékinésie'
console.log(
    '------------------------- Avengers avec des capacités de télékinésie: -------------------------'
);

// ---------------------------------- Exercice 13 ----------------------------------

// Affichez la liste des super-héros qui n'ont pas d'équipement.
// Affichez: 'ALIAS n'a pas d'équipement'
console.log(
    '------------------------- Avengers sans équipement: -------------------------'
);

// ---------------------------------- Exercice 14 ----------------------------------

// Affichez la liste des super-héros qui ont joué dans plus de 5 films.
// Affichez: 'ALIAS a joué dans plus de 5 films'
console.log(
    '------------------------- Avengers qui ont joué dans plus de 5 films: -------------------------'
);

// ---------------------------------- Exercice 15 ----------------------------------

// Pour chaque super-héros, destructurer les propriétés suivantes: alias, description, capacites, films.
// Affichez : 'Nom: alias, Description: description, Films: films'
console.log(
    '------------------------- Destructuration des propriétés suivantes: -------------------------'
);

// ---------------------------------- Exercice 16 ----------------------------------

// Créez une fonction getFlyingSuperheroes() qui prend un tableau de super-héros en parametre et renvoie un tableau de super-héros qui ont des capacités de vol.

console.log(
    '------------------------- Super-héros avec des capacités de vol: -------------------------'
);

// Affichez la liste des super-héros qui ont des capacités de vol en utilisant la fonction créée precedemment.
// Affichez : 'ALIAS peut voler'

// ---------------------------------- Exercice 17 ----------------------------------

//  Afficher la liste des super-héros qui ont des capacités de vol dans une div HTML qui aura la classe super-hero
// Le nom de chaque super-héros doit être dans une balise h2.
// La description de chaque super-héros doit être dans une balise p.
// La liste des films de chaque super-héros doit être dans une balise ul.
// Chaque film doit être dans une balise li.

// ---------------------------------- Exercice 18 ----------------------------------

// Créez une fonction qui prend un tableau de super-héros et renvoie un tableau de super-héros qui ont joué dans plus de 5 films.
// Utilisez la fonction pour afficher la liste des super-héros qui ont joué dans plus de 5 films dans une div HTML qui aura la classe super-hero
// Le nom de chaque super-héros doit être dans une balise h2.
// La description de chaque super-héros doit être dans une balise p.
// La liste des films de chaque super-héros doit être dans une balise ul.

// ---------------------------------- Exercice 19 ----------------------------------

// Créez une fonction qui calcule la moyenne du nombre de films dans lesquels chaque super-héros a joué.

console.log(
    '------------------------- Moyenne du nombre de films dans lesquels chaque super-héros a joué: -------------------------'
);

// Afficher : 'la moyenne du nombre de films dans lequel a joué un super héro est de :' (arrondir le nombre à 2 nombres après la virgule)

// ---------------------------------- Exercice 20 ----------------------------------

// Ajoutez une alert qui affiche 'Exercices Javascript fini' en bas de la page, lorsque le scroll sur la page atteint plus de 800px
// window.addEventListener('scroll', function () {
//     if (window.scrollY > 800) {
//         alert('coucou');
//     }
// });
