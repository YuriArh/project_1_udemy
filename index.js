

const numberOfFilms = +prompt ('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 3; i++) {
    const lastWatchedFilm = prompt ('Один из последних просмотренных фильмов?', ''),
        gradeFilm = prompt ('На сколько оцените его?', '');

    if (lastWatchedFilm != null && gradeFilm != null && lastWatchedFilm != '' && gradeFilm != '' &&
    lastWatchedFilm.length < 50) {       
        personalMovieDB.movies[lastWatchedFilm] = gradeFilm;  
        console.log('done');  
    } else {
        console.log('error');
        i--;
    };
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);