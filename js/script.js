"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: +numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
}