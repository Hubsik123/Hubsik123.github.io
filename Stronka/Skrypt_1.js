// Ale tak na serio:
    // Czytanie kodu akurat T E G O pliku to odpuść sobie... możesz sobie zepsuć niespodzianke...
    // Jeśli dalej to czytasz to kliknij 10 razy na guzik "Dark Mode"
function Wersja_Stronki()
{
    var Wersja = "v 64";
    alert("To jest wersja strony nr:\n"+Wersja)
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
    //Background();
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
    //Background();
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
function Wyszukiwarka() // Skopiowane z Internetu, tu nawet nie ma co specjalnie zmieniać https://www.w3schools.com/howto/howto_js_filter_lists.asp, ale można taki jeden mały detal dodać...
{
    var Input = document.getElementById("Wyszukiwarka");
    var Filtr = Input.value.toUpperCase();
    var Lista = document.getElementById("Lista");
    var Element = Lista.getElementsByTagName("li");
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
    switch(Input.value) //he he
    {
    //Komunikaty
        case "Wpisz tu coś":
            document.getElementById("Komunikat").innerHTML = "Ciekawe czy to też wpiszesz?";
            break;
        case "Ciekawe czy to też wpiszesz":
            document.getElementById("Komunikat").innerHTML = "Wow, naprawdę nie masz co robić. Tylko bawić się w przepisyuwanie jakiś pierdół...";
            break;
        case "Wow, naprawdę nie masz co robić. Tylko bawić się w przepisyuwanie jakiś pierdół":
            document.getElementById("Komunikat").innerHTML = "Ale serio, przestań albo będę musiał Cię powstrzymać!";
            break;
        case "Ale serio, przestań albo będę musiał Cię powstrzymać":
            document.getElementById("Banner").style.display = "none";
            document.getElementById("Content").style.display = "none";
            document.getElementById("LinkiMobile").style.display = "none";
            document.getElementById("Menu").style.display = "none";
            document.getElementById("Footer").style.display = "none";
            document.getElementById("Spam").style.display = "none";
            document.getElementById("Main").style.backgroundImage = "url(Obrazki/Ikona.png)"
            break;
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
            break;
        case "Path Of Exile":
        case "poe":
            document.getElementById("Komunikat").innerHTML = "PoE fajna gierka.";
            var Secret = document.createElement("a");
            Secret.href = "https://www.pathofexile.com";
            Secret.click();
            break;
        case "Rick roll":
        case "rick roll":
            document.getElementById("Komunikat").innerHTML = "Never Gonna Give You Up.";
            var Secret = document.createElement("a");
            Secret.href = "https://youtu.be/dQw4w9WgXcQ?t=42";
            Secret.click();
            break;
        case "Diablo 1":
        case "diablo 1":
            document.getElementById("Komunikat").innerHTML = "Diablo 1 fajna gierka. I to jeszcze w przeglądarce za darmo!";
            var Secret = document.createElement("a");
            Secret.href = "https://d07riv.github.io/diabloweb/";
            Secret.click();
            break;
        case "Diabolo":
        case "diabolo":
            document.getElementById("Komunikat").innerHTML = "SZYBKO dzwońcie po egzorcystę!!!";
            var Secret = document.createElement("a");
            Secret.href = "https://youtu.be/bCVR1s4o77c?t=123";
            Secret.click();
            break;
    // Metody wyświetlania tekstu
        case "360":
            document.getElementById("Komunikat").innerHTML = "Zatkało?";
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
            document.getElementById("Komunikat").innerHTML = "Zatkało?";
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
            document.getElementById("Komunikat").innerHTML = "Zatkało?";
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
function No_Spam()
{
    document.getElementById("Spam").style.display = "none";
}
// Bardzo ważne skrypty, to akurat jest w pełni pisane samodzielnie (...nikt by na internety takich pierdół nie dawał), z wiadomych wzgledów nie będzie tu żadnych komentarzy...
    //Sktypt 1
var Licznik_1 = 0;
var Troll_1 = false;
function Rotate()
{
    Licznik_1++;
    if (Licznik_1 >= 5 && Troll_1 == false)
    {
        //alert("No i co teraz? Po co Ci było tak klikać???");
        document.getElementById("Main").style.transform = "scaleX(-1)";
        document.getElementById("Meta").innerHTML = "No i co teraz?";
        document.getElementById("Meta").style.transform = "scaleX(-1)";
        document.getElementById("Meta").style.color = "red";
        document.getElementById("Meta").style.textShadow = "initial";
        document.getElementById("Meta").style.fontFamily = "Calibri";
        Troll_1 = true;
    }
}
    //Skrypt 2
var Licznik_2 = 0;
var Troll_2 = false;
function Background()
{
    Licznik_2++;
    if (Licznik_2 >= 10 && Troll_2 == false)
    {
        alert("To nie jest żaden Clicker! Może ten przycisk też ma uczucia?!");
        document.getElementById("Banner").style.display = "none";
        document.getElementById("Content").style.display = "none";
        document.getElementById("LinkiMobile").style.display = "none";
        document.getElementById("Menu").style.display = "none";
        document.getElementById("Footer").style.display = "none";
        document.getElementById("Spam").style.display = "block";
        //document.getElementById("Main").style.backgroundImage = "initial";
        //document.getElementById("Main").style.backgroundColor = "white";
        //document.getElementById("Main").style.backgroundImage = "url(Obrazki/Ikona.png)"
        document.getElementById("Main").style.backgroundImage = "url(Obrazki/Frajer.png)"
        Troll_2 = true;
    }
}
var Licznik_3 = 0;
var Troll_3 = false;
function Anty_Spam()
{
    Licznik_3++;
    if (Licznik_3 >= 7 && Troll_3 == false)
    {
        alert("Nie wiesz jak normlanie to zamknąć? To co teraz zrobisz?")
        document.getElementById("Banner").style.display = "none";
        document.getElementById("Content").style.display = "none";
        document.getElementById("LinkiMobile").style.display = "none";
        document.getElementById("Menu").style.display = "none";
        document.getElementById("Footer").style.display = "none";
        document.getElementById("Spam").style.display = "block";
        document.getElementById("DelMe").style.display = "none";
        Troll_3 = true;
        Final();
    }
}
var Troll_4 = false;
function Final()
{
    if (Troll_1 == true && Troll_2 == true && Troll_3 == true)
    {
        Troll_4 = true;
        alert("Żarty się skończyły! Bo już w sumie nic nie zostało lol");
        document.getElementById("Banner").style.display = "block";
        document.getElementById("Content").style.display = "block";
        document.getElementById("Menu").style.display = "block";
        document.getElementById("Footer").style.display = "block";
        document.getElementById("Spam").style.display = "block";
        document.getElementById("Main").style.transform = "scaleX(-1)";
        document.getElementById("Meta").innerHTML = "To koniec!";
        document.getElementById("Meta").style.transform = "initial";
        document.getElementById("Meta").style.textShadow = "initial";
        document.getElementById("Main").animate
        (
            [
                {transform: "rotate(0deg)"},
                {transform: "rotate(360deg)"}
            ],
                {
                    duration: 5000,
                    iterations: Infinity
                }
        );
    }
}
function Kalendarz()
{
    var Data = new Date();
    var Miesiac = Data.getMonth();
    var Dzien = Data.getDate();
    if (Miesiac == 2 && Dzien == 3)
    {
        alert("Happy Birthday To Me");
        document.getElementById("Meta").innerHTML = "Happy birthday to me";
    }
    /*else
    {
        alert(Miesiac+"\n"+Dzien);
    }*/
}