// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//const movies = require("./data.js");

function getAllDirectors(moviesArray) {
  return moviesArray.map(function (movie) {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMoviesSpielberg = moviesArray.filter(function (movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    } else {
      return false;
    }
  });
  return dramaMoviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const moviesWithoutScore = moviesArray.filter(function (movie) {
    if (movie.score === 0 || movie.score === null) {
      return false;
    }
  });
  const scoresList = moviesArray.map(function (movie) {
    return movie.score;
  });
  const moviesScore = scoresList.reduce(function (acc, currentV) {
    return acc + currentV;
  });
  return parseFloat((moviesScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movie) {
    if (movie.genre.includes("Drama")) {
      return movie;
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  }

  const scoresListDrama = dramaMovies.map(function (movie) {
    return movie.score;
  });

  const moviesScoreResult = scoresListDrama.reduce(function (acc, currentV) {
    return acc + currentV;
  }, 0);

  return parseFloat((moviesScoreResult / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movieYear = moviesArray.map ((movie) => movie);
  movieYear.sort(function (a, b) {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year; 
    if (a.year === b.year) return a.title.localeCompare(b.title) 
    /*else {
        return a.title.localeCompare(b.title)
    }*/  
  });
  return movieYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map ((movie) => movie.title)
        .sort()
        .slice (0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
