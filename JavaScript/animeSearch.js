const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');


let query;

searchBtn.addEventListener('click', () => {

    query = encodeURIComponent(searchInput.value);

    console.log(query);

    window.location.href = `view_page.html?anime=${query}`;
    
});

