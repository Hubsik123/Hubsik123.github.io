function Wersja_Stronki()
{
    var Wersja = "v 16 - wersja Mobile";
    alert("To jest wersja strony nr:\n"+Wersja+"\nMam tylko nadzieję że będę pamiętać żeby atkualizować ten licznik.")
}
function Feedback()
{
    alert("Jeśli podoba ci się ta strona, przydały ci sie te notatki, kod tej strony to daj znać znajomym, im też może się przydać. Tylko proszę nie kopiować na chama tych wszystkich materiałów, dużo pracy na to wszystko poszło.\nJesli zobaczysz jakieś błędy to proszę daj o tym znać. Mój adres e-mail:\nhubsik321@gmail.com")
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
function WIP() //DELETE ME
{
    var x = document.getElementById("Menu_Mobile");
    alert("wip");
    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "block";
    }
}