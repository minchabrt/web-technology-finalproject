
// -----------------------------------------------------------------------------------------
// FUNKCIJA PROVERAVNJA DA LI SU POLJA ZA LOGOVANJE POPUNJENA


function submitForm() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    history.back(); // Kada se submit-uje forma, korisnik se vraca na prethodnu stranicu

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
