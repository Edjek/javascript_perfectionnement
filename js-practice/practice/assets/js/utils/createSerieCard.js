export function createSerieCard(obj) {
    const {
        title: serieTitle,
        genre: serieGenre,
        synopsis: serieSynopsis,
        seasons: serieSeasons,
        imdbRating: note,
    } = obj;

    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = serieTitle;

    const genre = document.createElement('p');
    genre.textContent = serieGenre;

    const synopsis = document.createElement('p');
    synopsis.textContent = serieSynopsis;

    const seasons = document.createElement('p');
    seasons.textContent = `Saisons: ${serieSeasons}`;

    const imdbRating = document.createElement('p');
    imdbRating.textContent = `Note IMDb: ${note}`;

    card.append(title, genre, synopsis, seasons, imdbRating);

    return card;
}
