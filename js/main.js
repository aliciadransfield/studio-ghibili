import { getMovies } from "./api.js";
import { movieCardTemplate } from "./templates.js";
const movieBox = document.querySelector("movie-gallery");

async function getMovieCard() {
    const movieData = await getMovies();
    console.log(movieData);
}

getMovieCard();