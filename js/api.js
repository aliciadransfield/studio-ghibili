const baseUrl = "https://ghibliapi.vercel.app/";
const movieUrl = "https://ghibliapi.vercel.app/films";


async function getJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

// gets all the data from the api
const endpoints = [
    "films",
    // "people",
    // "locations",
    // "species",
    // "vehicles"
];

async function getAllGhibliData() {
    try {
        const allData = {};
        for (const endpoint of endpoints) {
            allData[endpoint] = await getJson(
                `${baseUrl}${endpoint}?limit=250`
            );
        }
        console.log("All Ghibli data:", allData);
        return allData;
    } catch (error) {
        console.error("Error retrieving Ghibli data:", error);
    }
}

getAllGhibliData();

// gets just the movies
async function getMovies() {
    try {
        const movies = await getJson(movieUrl);
        console.log("All Ghibli Movies:", movies);
        return movies;
    } catch (error) {
        console.error("Error retrieving movies:", error);
    }
}

getMovies();