const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchEnter = document.getElementById('search-input');

let query;

const homepageData = {
    popularToday: [
        { title: "Jujutsu Kaisen", subtitle: "Action / Supernatural", imageUrl: "Images/top-3/jujutsu-kaisen.png" },
        { title: "Solo Leveling", subtitle: "Fantasy / Adventure", imageUrl: "Images/top-3/solo-leveling.png" },
        { title: "Demon Slayer", subtitle: "Action / Drama", imageUrl: "Images/top-3/demon-slayer.png" }
    ]
};

function createAnimeCard(item) {
    const card = document.createElement('article');
    card.className = 'anime-card';

    card.innerHTML = `
        <div class="anime-poster-frame">
            <img class="anime-poster-image" src="${item.imageUrl}" alt="${item.title} poster">
        </div>
        <div class="anime-card-copy">
            <h3>${item.title}</h3>
            <p>${item.subtitle}</p>
        </div>
    `;

    return card;
}

function renderHomepageSections() {
    const todayGrid = document.getElementById('popular-today-grid');

    if (todayGrid) {
        homepageData.popularToday.forEach(item => todayGrid.appendChild(createAnimeCard(item)));
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

renderHomepageSections();


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

