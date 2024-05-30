const bodyNode = document.body;

const inputNode = document.querySelector('.js-input');
const sectionFilmsNode = document.querySelector('.js-films');

const popupNode = document.querySelector('.js-popup');
const popupContentNode = document.querySelector('.js-popup_content');



const API_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86';

const API_FOR_ID = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';





inputNode.addEventListener('keyup', () => {
    sectionFilmsNode.innerHTML = '';
    const searchFilm = inputNode.value;
    getMovies(API_SEARCH + searchFilm);
    async function getMovies(url) {
        const resp = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,  
            },
        });
        let respData = await resp.json();
        showMovies(respData);
    }
})




function showMovies(data) {
    data.films.forEach((film) => {
        const divFilm = document.createElement('div');
        divFilm.classList.add('film');
        divFilm.innerHTML += `
        <img class="mini-poster" src="${film.posterUrl}" alt="">
        <div class="info_about_film">
            <h2 class="name_film">${film.nameRu}</h2>
            <p class="info_film">Год выпуска: ${film.year}</p>
            <p class="info_film">Жанр: </br> ${film.genres.map((el) => `<span>${el.genre}</span>`)} </p>
        </div>
        `
     
        divFilm.addEventListener('click', () => popupOpen(film.filmId))
        sectionFilmsNode.appendChild(divFilm)
    });
}

async function popupOpen(filmId) {
    
    popupContentNode.innerHTML = '';
    popupNode.classList.add('popup_open');
    bodyNode.classList.add('no-scroll');

    getFilmId(API_FOR_ID + filmId);
    async function getFilmId (url) {
        const resp = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,  
            },
        });
        let respData = await resp.json();
        console.log(respData);

        popupContentNode.innerHTML += `
        <img class="popup_poster" src="${respData.posterUrl}" alt="" srcset="">
        <div class="popup_info_film">
            <h2 class="popup_name_film">${respData.nameRu}</h2>
            <p class="popup_text_film">Рейтинг фильма: ${respData.ratingKinopoisk}</p>
            <p class="popup_text_film">Год выпуска: ${respData.startYear}</p>
            <p class="popup_text_film">Страна: ${respData.countries.map((el) => `<span>${el.country}</span>`)}</p>
            <p class="popup_text_film">Жанр: ${respData.genres.map((el) => `<span>${el.genre}</span>`)}</p>
            <p class="popup_text_film">Описание фильма: <br> ${respData.description}</p>
        </div>
        <button class="js-btn_close_popup btn_close_popup"></button>
`
const btnClosePopup = document.querySelector('.js-btn_close_popup');
btnClosePopup.addEventListener('click', () => popupClose());
}
}

window.addEventListener('click', (e) => {
    if (e.target === popupNode) {
        popupClose();
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        popupClose();
    };
})

function popupClose() {
    popupNode.classList.remove('popup_open');
     bodyNode.classList.remove('no-scroll');
}
async function getId (url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,  
        },
    });
    let respData = await resp.json();
}
