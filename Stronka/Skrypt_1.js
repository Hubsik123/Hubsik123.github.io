function Wersja_Stronki()
{
    var Wersja = "v 36";
    alert("To jest wersja strony nr:\n"+Wersja+"\nMam tylko nadzieję że będę pamiętać żeby atkualizować ten licznik.")
}
function Feedback()
{
    alert("Jeśli podoba ci się ta strona, przydały ci sie te notatki, kod tej strony to daj znać znajomym, im też może się przydać.\nJesli zobaczysz jakieś błędy to proszę daj o tym znać. Mój adres e-mail:\nhubsik321@gmail.com")
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
function Zamkniecie_Obrazka(imgs) // PRAWIE to samo to funkcja Powiekszenie_Obrazka(imgs) ale ta funkcja zamyka obrazek
{
    var Powiekszony_Obrazek = document.getElementById("Powiekszony_Obrazek");
    var Opis_Obrazka = document.getElementById("Opis_Obrazka");
    Powiekszony_Obrazek.src = imgs.src;
    Opis_Obrazka.innerHTML = imgs.alt;
    Powiekszony_Obrazek.parentElement.style.display = "none";
}
var WIP = false; //Niby to całe menu na tel to niby z internetu skopiowane https://www.w3schools.com/howto/howto_js_dropdown.asp i https://www.w3schools.com/howto/howto_js_mobile_navbar.asp, ale to to trzeba praktycznie całe przerobić żeby do czego się nadawało... Trzeba było napisać 3 funkcje żeby to działało...
function MenuMobile()
{
    var Banner = document.getElementById("Banner");
    var Linki = document.getElementById("LinkiMobile");
    var Content = document.getElementById("Content");
    var Footer = document.getElementById("Footer");
    if (Linki.style.display === "block")
    {
        Linki.style.display = "none";
        Banner.style.height = "10%";
        Content.style.height = "85%";
        Footer.style.height = "5%";
        WIP = false;
    }
    else
    {
        Linki.style.display = "block";
        Banner.style.height = "10%";
        Linki.style.height = "85%";
        Content.style.display = "none";
        Footer.style.height = "5%";
        WIP = true;
    }
    if (WIP == false) // Dzięki temu nie wywala błedu jak kliknie się ikonki 2 razy z rzędu
    {
        Linki.style.display = "none";
        Banner.style.height = "10%";
        Content.style.display = "block";
        Content.style.height = "85%";
        Footer.style.height = "5%";
    }
}
function MobileContent()
{
    var Banner = document.getElementById("Banner");
    var Linki = document.getElementById("LinkiMobile");
    var Content = document.getElementById("Content");
    var Footer = document.getElementById("Footer");
    Linki.style.display = "none";
    Banner.style.height = "10%";
    Content.style.display = "block";
    Content.style.height = "85%";
    Footer.style.height = "5%";
}
var Zoom = false;
function ZoomFix()
{
    if (Zoom == false)
    {
        alert("Jeśli używasz teraz PC:\n   naprawdę... zmieniełeś zoom żeby zobaczć czy strona się 'nie zepsuje'...\nJeśli używasz teraz Telefonu:\n   naprawdę... włączyłeś 'Wersja na Komputer' (albo dałeś zoom tak że coś się zepsuło...) żeby zobaczyć czy strona się nie zepsuje\n\n:(");
        Zoom = true;

    }
    var Banner = document.getElementById("Banner");
    var Linki = document.getElementById("LinkiMobile");
    var Content = document.getElementById("Content");
    var Footer = document.getElementById("Footer");
    Linki.style.display = "none";
    Banner.style.height = "10%";
    Content.style.display = "block";
    Content.style.height = "85%";
    Footer.style.height = "5%";
}