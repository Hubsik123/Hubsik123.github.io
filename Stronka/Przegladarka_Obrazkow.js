function Powiekszenie_Obrazka(imgs) {
    // Get the expanded image
    var Powiekszony_Obrazek = document.getElementById("Powiekszony_Obrazek");
    // Get the image text
    var Opis_Obrazka = document.getElementById("Opis_Obrazka");
    // Use the same src in the expanded image as the image being clicked on from the grid
    Powiekszony_Obrazek.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    Opis_Obrazka.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    Powiekszony_Obrazek.parentElement.style.display = "block";
  }