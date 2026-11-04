import { getMovies } from "./api.js";
import { movieCardTemplate } from "./templates";
const movieBox = document.querySelector("movie-gallery");

async function getMovieCard() {
    movieData = await getMovies();
    console.log(movieData);
}

getMovieCard();