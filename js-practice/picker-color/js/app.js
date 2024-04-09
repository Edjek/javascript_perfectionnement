const listAnimals = document.querySelector('#list-animals');

listAnimals.addEventListener('click', function (e) {
    const element = document.createElement('p');
    element.textContent = `L'animal choisi est : ${e.target.textContent}`;
    listAnimals.append(element);
});

// Si on selectionne un element de la liste deroulante on change la couleur de fond de la page
const listColor = document.querySelector('#list-color');

listColor.addEventListener('change', function (e) {
    document.body.style.backgroundColor = e.target.value;
});
