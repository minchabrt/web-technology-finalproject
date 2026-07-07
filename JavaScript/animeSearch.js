const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchEnter = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

let query;

// -----------------------------------------------------------------------------------------
// FUNKCIJA MENJANJA POZADINSKE SLIKE

let bgimages = [

    "Images/manga-panel-1.png",
    "Images/manga-panel-2.png",
    "Images/manga-panel-3.png",
    "Images/manga-panel-4.png"

];

let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % bgimages.length; // Bira se sledeca slika iz niza, a kada se dodje do kraja, vraca se na pocetak
    document.body.style.backgroundImage = `url('${bgimages[currentImageIndex]}')`; // Menja se bg slika
}

setInterval(changeBackgroundImage, 5000); // Postavljanje intervala na 5sec
// -----------------------------------------------------------------------------------------
// FUNKCIJA MENU DUGMETA

let toggleMenuFlag=false;

function toggleMenu() {
    if(!toggleMenuFlag) {
    const menu = document.querySelector('ul');
    menu.style.visibility = 'visible';
    toggleMenuFlag = true;
}
else {
    const menu = document.querySelector('ul');
    menu.style.visibility = 'hidden';
    toggleMenuFlag = false;
}
}

// -----------------------------------------------------------------------------------------
// FUNKCIJA SEARCH FUNKCIJE (Enter dugme i search dugme)

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

