import { fetchPopularMovies } from './api.js';
import { renderMovies } from './render.js';
import { initEventListeners } from './events.js';

document.addEventListener('DOMContentLoaded', async () => {
    const cardContainer = document.getElementById('card-container');
    const data = await fetchPopularMovies();
    renderMovies(data.results, cardContainer);
    initEventListeners();
});
