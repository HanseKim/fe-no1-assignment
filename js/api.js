import {apiKey} from './key.js';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export async function fetchPopularMovies() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${apiKey}`);
    if (!res.ok) throw new Error('인기 영화 API 호출 실패');
    return await res.json();
}

export async function searchMovies(query) {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${apiKey}&language=ko-KR&query=${encodeURIComponent(query)}`);
    return await res.json();
}

export async function fetchMovieDetails(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${apiKey}&language=ko-KR`);
    return await res.json();
}

export { IMAGE_URL };
