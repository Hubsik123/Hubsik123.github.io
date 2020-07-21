function Wersja_Stronki()
{
    var Wersja = "v 9";
    alert("To jest wersja strony nr:\n"+Wersja+"\nMam tylko nadzieję że będę pamiętać żeby atkualizować ten licznik.")
}
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