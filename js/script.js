"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};

const lastMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
    rating1 = +prompt('На сколько оцениваете его?',''),
    lastMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
    rating2 = +prompt('На сколько оцениваете его?','');

personalMovieDB.movies[lastMovie1] = rating1;
personalMovieDB.movies[lastMovie2] = rating2;