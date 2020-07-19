function Powiekszenie_Obrazka(imgs)
{
        // Wybranie obrazka do powiększenia
    var Powiekszony_Obrazek = document.getElementById("Powiekszony_Obrazek");
        // Wybranie tekstu na obrazku
    var Opis_Obrazka = document.getElementById("Opis_Obrazka");
        // "Przekopiowanie" scr obrazka do tego powiększonego
    Powiekszony_Obrazek.src = imgs.src;
        // Zamiana "alt" na tekst wyświetlany na obrazku
    Opis_Obrazka.innerHTML = imgs.alt;
        // Wyświetlenia obrazka
    Powiekszony_Obrazek.parentElement.style.display = "block";
}
function Zamkniecie_Obrazka(imgs)
{
        // Wybranie obrazka do powiększenia
    var Powiekszony_Obrazek = document.getElementById("Powiekszony_Obrazek");
        // Wybranie tekstu na obrazku
    var Opis_Obrazka = document.getElementById("Opis_Obrazka");
        // "Przekopiowanie" scr obrazka do tego powiększonego
    Powiekszony_Obrazek.src = imgs.src;
        // Zamiana "alt" na tekst wyświetlany na obrazku
    Opis_Obrazka.innerHTML = imgs.alt;
        // Wyświetlenia obrazka
    Powiekszony_Obrazek.parentElement.style.display = "none";
}
/*
var CzyPowiekszonoObrazek = false;
function Powiekszenie_Obrazka(imgs)
{
    if (CzyPowiekszonoObrazek == 0) // Otwarcie obrazka
    {
            // Wybranie obrazka do powiększenia
        var Powiekszony_Obrazek = document.getElementById("Powiekszony_Obrazek");
            // Wybranie tekstu na obrazku
        var Opis_Obrazka = document.getElementById("Opis_Obrazka");
            // "Przekopiowanie" scr obrazka do tego powiększonego
        Powiekszony_Obrazek.src = imgs.src;
            // Zamiana "alt" na tekst wyświetlany na obrazku
        Opis_Obrazka.innerHTML = imgs.alt;
            // Wyświetlenia obrazka
        Powiekszony_Obrazek.parentElement.style.display = "block";
            // Licznik
        CzyPowiekszonoObrazek = true;
    }
    else // Zamknięcie obrazka
    {
            // Wybranie obrazka do powiększenia
        var Powiekszony_Obrazek = document.getElementById("Powiekszony_Obrazek");
            // Wybranie tekstu na obrazku
        var Opis_Obrazka = document.getElementById("Opis_Obrazka");
            // "Przekopiowanie" scr obrazka do tego powiększonego
        Powiekszony_Obrazek.src = imgs.src;
            // Zamiana "alt" na tekst wyświetlany na obrazku
        Opis_Obrazka.innerHTML = imgs.alt;
            // Zamknięcie obrazka
        Powiekszony_Obrazek.parentElement.style.display = "none";
            // Licznik
        CzyPowiekszonoObrazek = false;
    }
}
*/