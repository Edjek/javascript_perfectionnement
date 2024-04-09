/* --------------------------- DESTRUCTURING --------------------------- */

/*
    ? La decomposition (destructuring) d'un tableau ou un objet signifie extraire des valeurs dans des variables distinctes.
    * La decomposition permet de simplifier la manipulation des tableaux et des objets.
*/

const pokemon = {
    name: 'pikachu',
    type: 'electric',
    level: 25,
    trainer: {
        name: 'sacha',
        city: 'paris',
    },
    description: function () {
        return `Je suis ${this.name}`;
    },
};

console.log(pokemon.name);
console.log(pokemon.level);
console.log(pokemon.trainer.name);
console.log(pokemon.description());

// Destructuration d'un objet
// On peut même les renommer si une variable du même nom que la propriété existe déjà.
const {
    name: pokemonName,
    level,
    trainer: { name: trainerName, city: trainerCity },
} = pokemon;

const fruits = ['pomme', 'banane', 'orange', 'fraise', 'kiwi'];
console.log(fruits[0], fruits[4]);

// Destructuration d'un tableau
const [firstFruit, secondFruit, , , lastFruit] = fruits;

console.log(firstFruit, lastFruit);

// EXERCICE
// Créer un objet avenger avec les propriétés suivantes :
// name, alias, age, powers, isAlive
const avenger = {
    name: 'Tony Stark',
    alias: 'Iron Man',
    age: 40,
    powers: ['Powered Armor', 'Genius-Level Intellect', 'Wealth'],
    isAlive: true,
};

const avenger2 = {
    name: 'Peter parker',
    alias: 'Spiderman',
    age: 24,
    powers: ['Powered Armor', 'Genius-Level Intellect', 'Wealth'],
    isAlive: true,
};

// Créer une fonction displayAvenger qui prend en paramètre un objet avenger et qui retourne la phrase suivante : "Je suis {alias} expert en {power1} {power2}" si l'avenger est en vie.
function displayAvenger(obj) {
    const {
        isAlive,
        alias,
        powers: [a, , b],
    } = obj;

    if (isAlive == true) {
        return `Je suis ${alias} expert en ${a} ${b}`;
    }
}

// On peut aussi déstructurer directement les paramètres de la fonction
function displayAvengerWithDestructuringParameter({
    isAlive,
    alias,
    powers: [a, , b],
}) {
    if (isAlive == true) {
        return `Je suis ${alias} expert en ${a} ${b}`;
    }
}

console.log(displayAvenger(avenger));
console.log(displayAvenger(avenger2));
