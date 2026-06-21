const logoHref = document.getElementById('logo');

let urlParam = new URLSearchParams(window.location.search);
let searchedAnime = urlParam.get('anime');

let jsonData;

fetchData(searchedAnime);



function fetchData(searchQuery){

fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`)
    .then(response => {
        if(response.status != 200){
            console.log(`Error. Status code ${response.status}`);
            return;
        }

    return response.json()
    } )
    .then(data => {
        
        document.getElementById("anime-title").innerHTML = data.data[0].title;
        document.getElementById("anime-title-japanese").innerHTML = data.data[0].title_japanese;
        document.getElementById("anime-poster").src=`${data.data[0].images.jpg.image_url}`
        document.getElementById("anime-desc").innerHTML = data.data[0].synopsis;
        document.getElementById("anime-trailer").src = data.data[0].trailer.embed_url;
        
        document.getElementById("page-loader").style.opacity = "1";
        console.log(data);
    });
 }

let buttons = document.querySelectorAll(".like-button");

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let likeImage = this.querySelector(".like-button-image");
        
        if (likeImage.src.includes('Images/like-button2.png')) {
            likeImage.src = 'Images/like-button1.png';
        } else {
            likeImage.src = 'Images/like-button2.png';
        }
    });
});

function login() {
    window.location.href = "login.html";
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}