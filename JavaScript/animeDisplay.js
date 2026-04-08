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

