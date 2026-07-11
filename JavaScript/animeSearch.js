const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchEnter = document.getElementById('search-input');

let query;

// -----------------------------------------------------------------------------------------
// FUNKCIJA PRIKAZIVANJE TOP 3 ANIME-A


// Kreiranje JSON objekta sa podacima za top 3 anime
const topAnimeData = {
    topThreeAnime: [
        { animeTitle: "Jujutsu Kaisen", animeGenre: "Action / Supernatural", posterPath: "Images/top-3/jujutsu-kaisen.png" },
        { animeTitle: "Solo Leveling", animeGenre: "Fantasy / Adventure", posterPath: "Images/top-3/solo-leveling.png" },
        { animeTitle: "Demon Slayer", animeGenre: "Action / Drama", posterPath: "Images/top-3/demon-slayer.png" }
    ]
};

// Kreiranje top 3 anime kartice
function createTopAnimeCard(item) {
    const card = document.createElement('article');
    card.className = 'top-anime-card';

    card.innerHTML = `
        <div class="top-anime-poster-frame">
            <img class="top-anime-poster-image" src="${item.posterPath}" alt="${item.animeTitle} poster">
        </div>
        <div class="top-anime-info">
            <h3>${item.animeTitle}</h3>
            <p>${item.animeGenre}</p>
        </div>
    `;

    return card;
}

// Prikazivanje top 3 anime sekcije na stranici
function renderTopAnimeSection() {
    const topAnimeGrid = document.getElementById('top-anime-grid');

    if (topAnimeGrid) {
        topAnimeData.topThreeAnime.forEach(item => topAnimeGrid.appendChild(createTopAnimeCard(item)));
    }
}

// -----------------------------------------------------------------------------------------
// FUNKCIJA MENJANJA POZADINSKE SLIKE

let bgimages = [

    "Images/manga-panel-1.png",
    "Images/manga-panel-2.png",
    "Images/manga-panel-3.png",
    "Images/manga-panel-4.png"

];

let currentImageIndex = 0;



bgimages.forEach(src => { // Kesiranje slika, kako ne bi bilo seckanja
    const img = new Image();
    img.src = src;
});

document.body.style.backgroundImage = `url('${bgimages[currentImageIndex]}')`; // Stavlja pocetnu bg sliku


setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % bgimages.length; // Izracunava index sledece bg slike
    document.body.style.backgroundImage = `url('${bgimages[currentImageIndex]}')`; // Menja se bg slika
}, 5000); // Postavljanje intervala na 5sec

renderTopAnimeSection();


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

