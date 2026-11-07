import { getMovies } from "./api.js";
import { movieCardTemplate } from "./templates.js";
const movieBox = document.querySelector(".movie-gallery");

async function getMovieCard() {
    const movieData = await getMovies();
    console.log(movieData);
    let cardArray = movieData.map(movieCardTemplate);
    console.log(cardArray);
    cardArray.forEach(card => {
        movieBox.appendChild(card);
    });
}

getMovieCard();
