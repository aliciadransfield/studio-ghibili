export function movieCardTemplate(data) {
    let card = document.createElement("article");
    card.classList.add("movie-card");
    let html = `<img src="${data.image}" alt="a picture of ${data.title}'s movie poster">
                <section>
                    <h4>${data.title}</h4>
                    <h4>Director: ${data.director}</h4>
                    <h4>Rotten Tomatoes Score: ${data.rt_score}</h4>
                    <p>${data.description}</p>
                    <button class="add-to-wishlist">star</button>
                    <button class="hide">thumbs down</button>
                </section>`;
    card.innerHTML = html;
    return card;
}