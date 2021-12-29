

const numberOfFilms = +prompt ('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatchedFilm = prompt ('Один из последних просмотренных фильмов?', ''),
        gradeFilm = prompt ('На сколько оцените его?', ''),
        a = prompt ('Один из последних просмотренных фильмов?', ''),
        b = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchedFilm] = gradeFilm;
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);