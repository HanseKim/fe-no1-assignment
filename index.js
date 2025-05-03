const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const header = document.getElementsByClassName("Header")[0];
const form = document.getElementById('search');
const input = document.querySelector('.search-input');
const cardContainer = document.getElementById('card-container');
var movies = [];

getpopuler();

header.addEventListener('click', ()=>{
    cardContainer.innerHTML = '';
    getpopuler();
});

function getpopuler(){
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('API 호출 실패');
        }
        return response.json();
    })
    .then(data => {
        // console.log(data)
        movies = data.results
        // console.log(movies)
        movies.forEach((movie) => {
            let backdrop = movie.backdrop
            let title = movie.original_title
            let overview = movie.overview
            let post = movie.poster_path
            let release_date = movie.release_date

            const imageUrl = `https://image.tmdb.org/t/p/w500${post}`;

            const cardContainer = document.getElementById("card-container");
            const newDiv = document.createElement('div'); 
            newDiv.innerHTML = `
            <div id="${movie.id}" class="card">
                <img src=${imageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${overview}</p>
                </div>
            </div>`;
            cardContainer.appendChild(newDiv); 
        })
    })
    .catch(error => {
        console.error('에러 발생:', error);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();  // 새로고침 방지
    const query = input.value.trim(); // 앞뒤 공백 제거
    if (!query) return; // 입력 없으면 넘어감

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ko-KR&query=${encodeURIComponent(query)}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const movies = data.results;
            cardContainer.innerHTML = '';

            movies.forEach((movie) => {
                const { original_title, overview, poster_path, id} = movie;

                const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
                const newDiv = document.createElement('div');
                newDiv.innerHTML = `
                <div id="${id}" class="card">
                    <img src="${imgUrl}" class="card-img-top" alt="${original_title}">
                    <div class="card-body">
                        <h5 class="card-title">${original_title}</h5>
                        <p class="card-text">${overview || '줄거리 정보 없음'}</p>
                    </div>
                </div>
                `;
                cardContainer.appendChild(newDiv);
            });
        })
        .catch(err => {
            console.error('에러 발생:', err);
        });
});

cardContainer.addEventListener('click', function (e) {
    const card = e.target.closest('div[id]'); // id 속성 가진 div
    if (!card) return;

    const movieId = card.id;
    const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ko-KR`;

    fetch(detailUrl)
        .then(res => res.json())
        .then(movie => {
            showMovieModal(movie); // 아래에서 정의할 모달 표시 함수
        })
        .catch(err => console.error("상세정보 불러오기 실패:", err));
});

function showMovieModal(movie) {
    const modal = document.getElementById('movieModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
  
    modalTitle.textContent = movie.title;
  
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
    modalBody.innerHTML = `
      <img src="${imgUrl}" style="max-width: 100%; margin-bottom: 10px;" />
      <p><strong>개봉일:</strong> ${movie.release_date}</p>
      <p><strong>평점:</strong> ${movie.vote_average}</p>
      <p><strong>줄거리:</strong> ${movie.overview || '줄거리 정보 없음'}</p>
    `;
  
    modal.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.getElementById('movieModal');

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
