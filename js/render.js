import { IMAGE_URL } from './api.js';

export function renderMovies(movies, container) {
    container.innerHTML = '';
    movies.forEach((movie) => {
        const { original_title, overview, poster_path, id } = movie;
        const imgUrl = `${IMAGE_URL}${poster_path}`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <div id="${id}" class="card">
                <img src="${imgUrl}" class="card-img-top" alt="${original_title}">
                <div class="card-body">
                    <h5 class="card-title">${original_title}</h5>
                    <p class="card-text">${overview || '줄거리 정보 없음'}</p>
                </div>
            </div>`;
        container.appendChild(newDiv);
    });
}

export function showMovieModal(movie) {
    const modal = document.getElementById('movie-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    const imgUrl = `${IMAGE_URL}${movie.poster_path}`;
    modalTitle.textContent = movie.title;
    modalBody.innerHTML = `
        <div class="modal-body">
            <div class="modal-img">
                <img src="${imgUrl}" style="max-width: 100%; margin-bottom: 10px;" />
            </div>
            <div class="modal-detail">
                <p><strong>개봉일:</strong> ${movie.release_date}</p>
                <p><strong>평점:</strong> ${movie.vote_average}</p>
                <p><strong>줄거리:</strong> ${movie.overview || '줄거리 정보 없음'}</p>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

export function hideMovieModal() {
    document.getElementById('movie-modal').classList.add('hidden');
}
