const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');


let query;

searchBtn.addEventListener('click', () => {

    query = encodeURIComponent(searchInput.value);
  

    fetchData(query);

    console.log(query);
    
});

function fetchData(searchQuery){

fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Ovde ćeš videti niz rezultata
    });

}