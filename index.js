


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt ('Сколько фильмов вы посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i <= 2; i++) {
            const lastWatchedFilm = prompt ('Один из последних просмотренных фильмов?', ''),
                gradeFilm = prompt ('На сколько оцените его?', '');
        
            if (lastWatchedFilm != null && gradeFilm != null && lastWatchedFilm != '' && gradeFilm != '' &&
            lastWatchedFilm.length < 50) {       
                personalMovieDB.movies[lastWatchedFilm] = gradeFilm;  
                console.log('done');  
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        };
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB); 
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const answer = prompt(`Ваш любимый жанр под номером ${i}`);
            if(answer === null || answer === '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе')
                i--;
            } else {
                personalMovieDB.genres[i - 1] = answer;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};


