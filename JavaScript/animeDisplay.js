let urlParam = new URLSearchParams(window.location.search); // Uzima ceo link i stavlja u prom.
let searchedAnime = urlParam.get('anime'); // Uzima se vrednost parametra 'anime' i linka


fetchData(searchedAnime); 

// -----------------------------------------------------------------------------------------
// FUNKCIJA SLANJA API ZAHTEVA I PRIKAZIVANJE PODATAKA NA STRANICI

function fetchData(searchQuery){

fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`) // Salje se API zahtev sa parametrima anime-a
    .then(response => {
        if(response.status != 200){ // Ukoliko status nije OK, ispisuje se greska
            console.log(`Error. Status code ${response.status}`);
            throw new Error(`Status code ${response.status}`);
        }

    return response.json() // Ako je responese OK, vraca se json objekat
    } )
    .then(data => { // Svaki od elemenata na HTML stranici dobija vrednost iz json objekta
        
        document.getElementById("anime-title").innerHTML = data.data[0].title;
        document.getElementById("anime-title-japanese").innerHTML = data.data[0].title_japanese;
        document.getElementById("anime-poster").src=`${data.data[0].images.jpg.image_url}`
        document.getElementById("anime-desc").innerHTML = data.data[0].synopsis;
        document.getElementById("anime-trailer").src = data.data[0].trailer.embed_url;
        
        document.getElementById("page-loader").style.opacity = "1"; // Kada se dodele sve vrednosti, onda se tek load-a stranica
        console.log(data); // Za svaki slucaj izbacujemo stvari iz json file-a u konzolu
    })
    .catch(() => {
        alert("zbog gasenja API u oktobru 2026 - tu je probni sajt!");
        document.getElementById("anime-title").innerHTML = "Probni anime";
        document.getElementById("anime-title-japanese").innerHTML = "お試しアニメ";
        document.getElementById("anime-poster").src="Images/poster.jpg";
        document.getElementById("anime-desc").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut mi eu purus facilisis maximus. Aliquam lacus dui, commodo sit amet tincidunt vel, tempor quis eros. Nullam et arcu et risus euismod tincidunt nec et augue. Vivamus elementum magna ac ex maximus, ut pulvinar metus tempus. Fusce ac ex elit. Phasellus efficitur feugiat risus eu facilisis. Vivamus sodales nibh non sem pellentesque semper. Nunc sit amet maximus arcu.";
        document.getElementById("anime-trailer").src = "https://www.youtube.com/embed/8Qn_spdM5Zg";
        
        document.getElementById("page-loader").style.opacity = "1";
    });
 }

// -----------------------------------------------------------------------------------------
// FUNKCIJA LAJKOVANJA I OD-LAJKOVANJA KOMENTARA

let buttons = document.querySelectorAll(".like-button");

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let likeImage = this.querySelector(".like-button-image");
        
        if (likeImage.src.includes('Images/like-button2.png')) { // Ako je vec lajkovano - odlajkuj
            likeImage.src = 'Images/like-button1.png';
        } else {
            likeImage.src = 'Images/like-button2.png'; // Ako nije lajkovano - lajkuj
        }
    });
});

// -----------------------------------------------------------------------------------------
// FUNCIJA LOGOVANJA

function login() {
    sessionStorage.setItem("cameFromLogin", "true"); // kada korisnik klikne log-in, flag se postavlja
    window.location.href = "login.html"; // I redirektuje se na login stranicu
}


let mybutton = document.getElementById("myBtn");

function hideCommentButton() {
    const addCommentBtn = document.getElementById("add-comment-btn");
    const cameFromLogin = sessionStorage.getItem("cameFromLogin"); 

    if (cameFromLogin === "true" && addCommentBtn) { // Ukoliko je flag postavljen na true, sakriva se dugme za login
        addCommentBtn.style.display = "none";
    }

    sessionStorage.removeItem("cameFromLogin"); // flag se vraca na false
}

// -----------------------------------------------------------------------------------------
// FUNCKIJA VRACANJA NA VRH STRANICE SA STICKY DUGMETOM

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}



window.addEventListener("load", hideCommentButton);
window.addEventListener("pageshow", hideCommentButton);