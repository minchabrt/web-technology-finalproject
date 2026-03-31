const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');


let query;

searchBtn.addEventListener('click', () => {

    query = encodeURIComponent(searchInput.value);
  

    fetchData(query);

    console.log(query);
    
});

export function fetchData(searchQuery){

    //slanje zahteva


}