const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchEnter = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

let query;



searchEnter.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
query = encodeURIComponent(searchInput.value);

    console.log(query);

    window.location.href = `view_page.html?anime=${query}`; // Kada se klikne ENTER, korisnik se redirektuje
                                                            //  na drugu stranicu sa prosledjenim query-jem
    }
});


searchBtn.addEventListener('click', () => {

    query = encodeURIComponent(searchInput.value); // Ukucan anime se pretvara u odredjeni query string, odlican za API

    console.log(query);

    window.location.href = `view_page.html?anime=${query}`; // Kada se klikne dugme, isto se desava kao i sa ENTER
    
});

