/* --------------------------- MODULES --------------------------- */

/*
    Les modules permettent de découper notre code en plusieurs fichiers.
    Chaque fichier devient un module.
    Les modules permettent de rendre notre code plus lisible et plus maintenable.
    Les modules permettent de gérer les dépendances entre les fichiers.
*/

import { add, tva, default as multiply } from './math.js';
import { message } from './message.js';

console.log(add(5, 7));
console.log(multiply(5, 7));
console.log(message);
