import { fetchPopularMovies, searchMovies, fetchMovieDetails } from './api.js';
import { renderMovies, showMovieModal, hideMovieModal } from './render.js';

export function initEventListeners() {
    const form = document.getElementById('search');
    const input = document.querySelector('.search-input');
    const cardContainer = document.getElementById('card-container');
    const header = document.getElementsByClassName("Header")[0];
    const modal = document.getElementById('movie-modal');
    const closeBtn = document.querySelector('.close-btn');

    header.addEventListener('click', async () => {
        const data = await fetchPopularMovies();
        renderMovies(data.results, cardContainer);
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (!query) return;
        const data = await searchMovies(query);
        renderMovies(data.results, cardContainer);
    });

    cardContainer.addEventListener('click', async (e) => {
        const card = e.target.closest('div[id]');
        if (!card) return;
        const movie = await fetchMovieDetails(card.id);
        showMovieModal(movie);
    });

    closeBtn.addEventListener('click', hideMovieModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideMovieModal();
    });
}
