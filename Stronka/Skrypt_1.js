function Wersja_Stronki()
{
    var Wersja = "v 59";
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
var WIP = false; //Niby to całe menu na tel to niby z internetu skopiowane https://www.w3schools.com/howto/howto_js_dropdown.asp i https://www.w3schools.com/howto/howto_js_mobile_navbar.asp, ale to to trzeba praktycznie całe przerobić żeby do czego się nadawało... Trzeba było napisać 3 funkcje żeby to działało (MenuMobile, MobileContent, ZoomFix)...
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
    /*if (Zoom == false)
    {
        alert("Jeśli używasz teraz PC:\n   naprawdę... zmieniełeś zoom żeby zobaczć czy strona się 'nie zepsuje'...\nJeśli używasz teraz Telefonu:\n   naprawdę... włączyłeś 'Wersja na Komputer' (albo dałeś zoom tak że coś się zepsuło...) żeby zobaczyć czy strona się nie zepsuje\n\n:(");
        Zoom = true;

    }
    Taki fajny komunikat, ale nie działa najlepiej, za często włącza się przez przypadek np. ctrl+f... */
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
function Wyszukiwarka() // Skopiowane z Internetu, tu nawet nie ma co specjalnie zmieniać https://www.w3schools.com/howto/howto_js_filter_lists.asp
{
    var Input = document.getElementById("Wyszukiwarka");
    var Filtr = Input.value.toUpperCase();
    var Lista = document.getElementById("Lista");
    var Element = Lista.getElementsByTagName("li");
    var Meta = document.getElementById("Wyszukiwarka").value;
    var Tekst = document.getElementById("Wyszukiwarka").value;
    var Link, Petla, Wartosc;
    // Sprawdzanie za pomocą pętli czy podany tekst się zgadza
    for (Petla = 0; Petla < Element.length; Petla++)
    {
    Link = Element[Petla].getElementsByTagName("a")[0];
    Wartosc = Link.textContent || Link.innerText;
    if (Wartosc.toUpperCase().indexOf(Filtr) > -1)
        {
        Element[Petla].style.display = "";
        }
    else
        {
        Element[Petla].style.display = "none";
        }
    }
    switch(Meta) //he he
    {
        case "dzban":
        case "Dzban":
            document.getElementById("Komunikat").innerHTML = "Sam jesteś dzban!";
            break;
        case "IDDQD":
        case "iddqd":
            document.getElementById("Komunikat").innerHTML = "Rip and tear until it is done.";
            break;
        case "Kurwa":
        case "kurwa":
            document.getElementById("Komunikat").innerHTML = "NIE TYM TONEM, chamie.\nZapamiętam to sobie... Będziesz chciał jeszcze jakieś notatki...";
            document.getElementById("Content").style.display = "none";
            break;
        case "Diablo lepsze":
        case "Diablo 4":
            document.getElementById("Komunikat").innerHTML = "PoE i tak znacznie lepsze.";
            var Secret = document.createElement("a");
            Secret.href = "https://www.pathofexile.com";
            Secret.click();
            alert(wip);
            break;
        case "Path Of Exile":
        case "poe":
            document.getElementById("Komunikat").innerHTML = "PoE fajna gierka.";
            var Secret = document.createElement("a");
            Secret.href = "https://www.pathofexile.com";
            Secret.click();
            alert(wip);
            break;
        case "Rick roll":
        case "rick roll":
            document.getElementById("Komunikat").innerHTML = "Never Gonna Give You Up.";
            var Secret = document.createElement("a");
            Secret.href = "https://youtu.be/dQw4w9WgXcQ?t=42";
            Secret.click();
            alert(wip);
            break;
        // Metody wyświetlania tekstu
        case "360":
            //document.getElementById("Komunikat").innerHTML = "Zatkało?";
            document.getElementById("Komunikat").animate
                (
                    [
                        {transform: "rotate(0deg)"},
                        {transform: "rotate(360deg)"}
                    ],
                    {
                        duration: 2500,
                        iterations: Infinity
                    }
                );
            break;
        case "180":
            //document.getElementById("Komunikat").innerHTML = "Zatkało?";
            document.getElementById("Komunikat").animate
                (
                    [
                        {transform: "rotateX(360deg)"},
                        {transform: "rotateX(0deg)"}
                    ],
                    {
                        duration: 2000,
                        iterations: Infinity
                    }
                );
            break;
        case "kółko":
           // document.getElementById("Komunikat").innerHTML = "Zatkało?";
            document.getElementById("Komunikat").animate
                (
                    [
                        {transform: "rotateY(360deg)"},
                        {transform: "rotateY(0deg)"},
                        {transform: "rotateY(360deg)"}
                    ],
                    {
                        duration: 5000,
                        iterations: Infinity
                    }
                );
            break;
        default:
            document.getElementById("Komunikat").innerHTML = "";
            //document.getElementById("Content").style.display = "block"; Specjalnie tu jest komentarz ;)
    }
}
//Dark Mode, to też z internetu, troszkę pozmieniane, https://dev.to/albertomontalesi/add-dark-mode-to-your-website-with-just-a-few-lines-of-code-5baf
document.addEventListener('DOMContentLoaded', () => // Po załadowaniu strony
{
    const Styl = document.getElementById('CSS');
    const ZapisanyStyl = localStorage.getItem('CSS');
    var Pasek = document.getElementById('Pasek');
    if(ZapisanyStyl)
    {
        Styl.href = ZapisanyStyl;
    }
    const Przycisk = document.getElementById('DarkMode');
    Przycisk.addEventListener('click', () =>
    {
        if(Styl.href.includes('Styl-Ciemny')) // Jasny -> Ciemny
        {
            Styl.href = 'Styl.css';
            Przycisk.innerText = 'Dark Mode';
            Pasek.setAttribute("content", "#3cd816");
        }
        else // Ciemny -> Jasny
        {
            Styl.href = 'Styl-Ciemny.css';
            Przycisk.innerText = 'Light Mode';
            Pasek.setAttribute("content", "black");
        }
        localStorage.setItem('CSS',Styl.href)  // Ciemny -> Jasny
    })
})
// Bardzo ważne skrypty, to akurat jest w pełni pisane samodzielnie
    //Sktypt 1
var Licznik_1 = 0;
function Rotate()
{
    Licznik_1++;
    if (Licznik_1 >= 5)
    {
        alert("No i co teraz? Po co Ci było tak klikać???");
        document.getElementById("Main").style.transform = "scaleX(-1)";        
    }
}
    //Skrypt 2
var Licznik_2 = 0;
function Color()
{
    Licznik_2++;
    if (Licznik_2 >= 10)
    {
        alert("To nie jest żaden Clicker! Może ten przycisk też ma uczucia?!");
        document.getElementById("Banner").style.display = "none";
        document.getElementById("Content").style.display = "none";
        document.getElementById("LinkiMobile").style.display = "none";
        document.getElementById("Menu").style.display = "none";
        document.getElementById("Footer").style.display = "none";
        document.getElementById("Spam").style.display = "none";
        //document.getElementById("Main").style.backgroundImage = "initial";
        //document.getElementById("Main").style.backgroundColor = "white";
        document.getElementById("Main").style.backgroundImage = "url(Obrazki/Ikona.png)"
    }
}