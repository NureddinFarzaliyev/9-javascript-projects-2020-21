const ykke = new Audio('ykke_sound.mp3');
const games = new Audio('games_sound.mp3');
const rich = new Audio('richrich_sound.mp3');

const ykkeBtn = document.querySelector('.ykke_btn');
const richBtn = document.querySelector('.rich_btn');
const gamesBtn = document.querySelector('.games_btn');

const pauseBtn = document.querySelector('.pause');
const cover = document.querySelector('.cover');
const mName = document.querySelector('.music-name');
const mAuthor = document.querySelector('.music-author');

const body = document.querySelector('body');

ykkeBtn.addEventListener('click', () => {
    rich.pause();
    games.pause();
    ykke.play();
    cover.setAttribute('src', 'lightsout_cover.jpg');
    mName.innerHTML = 'YKKE';
    mAuthor.innerHTML = 'Ezhel ft. UFO361';
    if (!ykke.paused) {
        pauseBtn.setAttribute('class', 'fas fa-pause');
    }else{
        pauseBtn.setAttribute('class', 'fas fa-play');
    }
    body.style.backgroundImage = 'url("lightsout_cover.jpg")';
    body.style.backgroundColor = 'transparent';
    body.style.backgroundSize = 'cover';
});

richBtn.addEventListener('click', () => {
    ykke.pause();
    games.pause();
    rich.play();
    cover.setAttribute('src', 'richrich_cover.jpg');
    mName.innerHTML = 'Rich Rich';
    mAuthor.innerHTML = 'UFO361';

    if (!rich.paused) {
        pauseBtn.setAttribute('class', 'fas fa-pause');
    }else{
        pauseBtn.setAttribute('class', 'fas fa-play');
    }
    body.style.backgroundImage = 'url("richrich_cover.jpg")';
    body.style.backgroundColor = 'transparent';
    body.style.backgroundSize = 'cover';
});

gamesBtn.addEventListener('click', () => {
    ykke.pause();
    rich.pause();
    games.play();
    cover.setAttribute('src', 'games_cover.jpg');
    mName.innerHTML = 'Games';
    mAuthor.innerHTML = 'UFO361';

    if (!games.paused) {
        pauseBtn.setAttribute('class', 'fas fa-pause');
    }else{
        pauseBtn.setAttribute('class', 'fas fa-play');
    }
    body.style.backgroundImage = 'url("games_cover.jpg")';
    body.style.backgroundColor = 'transparent';
    body.style.backgroundSize = 'cover';
});

pauseBtn.addEventListener('click', () => {
    if (!ykke.paused){
        ykke.pause();
        pauseBtn.setAttribute('class', 'fas fa-play');
    }
    if (!games.paused){
        games.pause();
        pauseBtn.setAttribute('class', 'fas fa-play');
    }
    if (!rich.paused){
        rich.pause();
        pauseBtn.setAttribute('class', 'fas fa-play');
    }
});