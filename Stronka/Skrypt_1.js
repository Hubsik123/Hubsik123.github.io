//! Ale tak na serio:
    // Czytanie kodu akurat T E G O pliku to odpuść sobie... możesz sobie zepsuć niespodzianke...
    // Jeśli dalej to czytasz to kliknij 5 razy na napis "Menu"... A jeśli to dla Ciebie za mało... to to jest dopiero 1/4...
function Wersja_Stronki()
{
    var Wersja = "v 75";
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
    var Banner = document.getElementById("Banner");
    var Linki = document.getElementById("LinkiMobile");
    var Content = document.getElementById("Content");
    var Footer = document.getElementById("Footer");
    Linki.style.display = "none";
    Banner.style.height = "10%";
    Content.style.display = "block";
    Content.style.height = "85%";
    Footer.style.height = "5%";
    Background();
}
function Wyszukiwarka() // Skopiowane z Internetu, tu nawet nie ma co specjalnie zmieniać https://www.w3schools.com/howto/howto_js_filter_lists.asp, ale można było taki jeden mały detal dodać... to dodałem...
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
            document.getElementById("Komunikat").innerHTML = "Wow, naprawdę nie masz co robić. Tylko bawić się w przepisywanie jakichś pierdół...";
            break;
        case "Wow, naprawdę nie masz co robić. Tylko bawić się w przepisywanie jakichś pierdół":
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
            var Audio = document.getElementById("Muzyka");
            Audio.play();
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
        case "DROP DATABASE":
            document.getElementById("Komunikat").innerHTML = "... Serio?";
            var Secret = document.createElement("a");
            Secret.href = "https://hubsik123.github.io/Stronka/index.html-ty-dzbanie";
            Secret.click();
            break;
        case "drop database":
            document.getElementById("Komunikat").innerHTML = "SYNTAX ERROR: Dzbanie, to się C A P S E M pisze!";
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
    if (Troll_3 == true)
    {
        document.getElementById("Spam").style.display = "block";
    }
    else
    {
        document.getElementById("Spam").style.display = "none";
    }
}
// !Bardzo ważne skrypty, to akurat jest w pełni pisane samodzielnie (...nikt by na internety takich pierdół nie dawał), z wiadomych wzgledów nie będzie tu żadnych komentarzy...
    // Sktypt 1
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
        Smutny_Dzbanek();
    }
}
    //Skrypt 2
var Licznik_2 = 0;
var Troll_2 = false;
function Do_Background()
{
    Licznik_2++;
}
function Background()
{
    //Licznik_2++;
    //if (Licznik_2 >= 10 && Troll_2 == false)
    if (Licznik_2 >= 10 && Troll_2 == false)
    {
        //alert("To nie jest żaden Clicker! Może ten przycisk też ma uczucia?!");
        document.getElementById("Banner").style.display = "none";
        document.getElementById("Content").style.display = "none";
        document.getElementById("LinkiMobile").style.display = "none";
        document.getElementById("Menu").style.display = "none";
        document.getElementById("Footer").style.display = "none";
        //document.getElementById("Spam").style.display = "block";
        //document.getElementById("Main").style.backgroundImage = "initial";
        //document.getElementById("Main").style.backgroundColor = "white";
        document.getElementById("Main").style.backgroundImage = "url(Obrazki/Ikona.gif)";
        Troll_2 = true;
        Smutny_Dzbanek();
        Final();
    }
}
var Licznik_3 = 0;
var Troll_3 = false;
function Anty_Spam()
{
    Licznik_3++;
    if (Licznik_3 >= 7 && Troll_3 == false)
    {
        document.getElementById("SpamBanner").innerHTML = "To co teraz zrobisz?";
        document.getElementById("SpamContent").innerHTML = "Nie wiesz jak normlanie to zamknąć? W takim razie... męcz się z tym teraz...";
        document.getElementById("SpamGuzik").style.display = "none";
        Troll_3 = true;
        Smutny_Dzbanek();
        Final();
    }
}
var Troll_4 = false;
function Final()
{
    if (Troll_4 == true)
    {
        alert("Naprawdę?! Znowu to zrobiłeś? Aż mi się już nie chce prograwać tej opcji dalej...");
    }
    if (Troll_1 == true && Troll_2 == true && Troll_3 == true)
    {
        document.getElementById("Banner").style.display = "block";
        document.getElementById("Content").style.display = "block";
        document.getElementById("Menu").style.display = "block";
        document.getElementById("Footer").style.display = "block";
        document.getElementById("Spam").style.display = "block";
        document.getElementById("Main").style.transform = "scaleX(-1)";
        document.getElementById("Meta").innerHTML = "To koniec!";
        document.getElementById("Meta").style.transform = "initial";
        document.getElementById("Meta").style.textShadow = "initial";
        document.body.style.backgroundImage = "url(Obrazki/Frajer.gif)";
        document.getElementById("Main").animate
        (
            [
                {transform: "rotate(0deg)"},
                {transform: "rotate(360deg)"}
            ],
            {
                duration: 3500,
                iterations: Infinity
            }
        );
        var Przeprosiny = prompt("Przeproś! Żarty się skończyły! Bo już w sumie nic nie zostało lol");
        if (Przeprosiny == "Przepraszam" || Przeprosiny == "przepraszam")
        {
            document.location.reload(true);
        }
        document.getElementById("Wyszukiwarka").focus();
        Troll_4 = true;
    }
}
function Smutny_Dzbanek()
{
    if (Troll_1 == true || Troll_2 == true || Troll_3 == true)
    {
        //document.getElementsByTagName("body").style.cursor = "url('Obrazki/Smutny Dzbanek.png'), auto";
        document.getElementById("Main").style.cursor = "url('Obrazki/Smutny Dzbanek.png'), auto";
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
function Message()
{
    var RNG = Math.floor((Math.random() * 10) + 1); //? 1-10
    switch(RNG)
    {
        case 1:
        {
            document.getElementById("Message").innerHTML = "FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE, FREKWENCJA MASTER RACE";
            break;
        }
        case 2:
        {
            document.getElementById("Message").innerHTML = "Pamiętaj: palenie szkodzi zdrowiu! To jedno zdanie (niestety) nic nie zmieni, ale weź nie pal w miejscach gdzie przebywają też osoby które nie palą, ładnie proszę.";
            break;
        }
        case 3:
        {
            document.getElementById("Message").innerHTML = "Gry nie szkodzą zdrowiu! A kto tak mówi, że skodzą ten dzban! Ogólnie to Far Cry 3 Blood Dragon miał racje, jeśli nie znasz dokładnie tego tekstu (którego ze względu na to, że nie pasuje na głównej stronie wypisywać wulgaryzmów, nie ma tu) to poszukaj na Internetach.";
            break;
        }
        case 4:
        {
            document.getElementById("Message").innerHTML = "#Frekwencja_Master_Race #Gaming #Gaming>=Books #Path_Of_Exile #Windows>=Linux>>>MAC #Hack'n'slash #Poe>Diablo_1>Diablo_2>Diablo_3";
            break;
        }
        case 5:
        {
            document.getElementById("Message").innerHTML = "ZOBACZ JAK JEDNYM ZDANIEM OBRAŻA KSIĄŻKOHOLIKÓW: Nigdy nie rozumiałem ludzi, którzy zawsze mówili że książki są delikatnie mówiąc lepsze niż gry komputerowe, wręcz najwyższą (patrz jedyną) formą intelektualnej rozrywki. Na podtrzymanie (patrz wpajanie) tej teori przytaczane były argumenty że książki poszerzają horyzonty, uczą w sumie wszystkiego co się tylko da... Ale niestety często te oczytane i obeznane w świecie (antycznym) osoby nie tolerowały jakiejkolwiek formy gry komputerowej... Twierdząć że to strata czasu i prowadzenie do tego że mózgi nam zgniją... Ale moim zdaniem - uważam takie osoby są po prosty nie toleranycjne, zachowują się podobnie do rasistów (i moim zdaniem powinni być do nich przyrównywami). Ale jakimś cudem mój mózg ma się w miarę dobrze i to jakoś Ty własnie korzystasz z tej skoromnej stronki i wszystkich plików które są tutaj dostępne.";
            break;
        }
        case 6:
        {
            document.getElementById("Message").innerHTML = "Tylko nie klikaj na  napis 'Menu' bardzo tego nie lubi.";
            break;
        }
        case 7:
        {
            document.getElementById("Message").innerHTML = "Jeśli korzystasz teraz z PC to spróbuj wpisać jakieś rzeczy w wyszukiwarke, może stanie się coś ciekawego...";
            break;
        }
        case 8:
        {
            document.getElementById("Message").innerHTML = "Widziałeś już wszystkie 10 z tych pięknych wiadomości powitalnych?";
            break;
        }
        case 9:
        {
            document.getElementById("Message").innerHTML = "Weź czytaj mniej książek... Idź pograć w 'komputr' to rozkaz od WHO!";
            break;
        }
        case 10:
        {
            document.getElementById("Message").innerHTML = "Jeśli przejmujsez sięm ortografiom i udałó ci siem zobaczyć jakis bład ortograficzny to jeteś w badzo żlym miejscu ;)";
            break;
        }
        default:
        {
            alert("Nope");
        }
    }
}
var Timer = 0;
var Tryb = 0;
var Licznik_4 = 0;
function DarkAndLight_1()
{
    Timer = setTimeout(DarkAndLight_2, 500);
}
function DarkAndLight_2()
{
    if (Licznik_4 < 2)
    {
        Licznik_4++;
    }
    else
    {
        if ((Tryb % 2) == 0)
        {
            document.getElementById("CSS").setAttribute("href", "Styl.css");
        }
        else
        {
            document.getElementById("CSS").setAttribute("href", "Styl-Ciemny.css");
        }
        clearTimeout(Timer);
        Tryb++;
        DarkAndLight_1();
    }
}
    //! TODO: Zostawiam to na pamiątke tego że przeglądarka zablokowała "wyskakujące okienka" a taki fajny pomysł miałem :(
/*
var Licznik_5 = 0;
function Ads_1()
{
    if (Licznik_5 <= 4)
    {
        //alert("wip");
        Licznik_5++;
    }
    else
    {
        Ads_Timer = setInterval(Ads_2, 5000)
        //alert("wip 2");
    }
}
function Ads_2()
{
    //alert(Licznik_5);
    var Ad = window.open("", "Tekst", "width=200,height=200")
    Ad.document.write("<p>dzban</p>");
}
*/
var Licznik_6 = 0;
var Link2_Fix = false;
function SayMyName()
{

    if (Link2_Fix == false)
    {
        if (Licznik_6 < 2)
        {
            Licznik_6++;
        }
        else
        {
            var MyName = prompt("Say my name");
            if (MyName == "Hubsik")
            {
                alert("You're goddamn right!");
            }
            else
            {
                var Guzik_Animacja = document.getElementsByClassName("Link_2");
                alert("You don't have damm clue who the hell I am...");
                for (var x = 0; x < Guzik_Animacja.length; x++)
                {
                    document.getElementsByClassName("Link_2")[x].animate
                    (
                        [
                            {transform: "rotate(0deg) skewY(120deg)"},
                            {transform: "rotate(360deg) skewX(120deg)"},
                            {transform: "rotate(0deg)"}
                        ],
                        {
                            duration: 1000,
                            iterations: Infinity
                        }
                    )
                }
                Link2_Fix = true;
                alert("wip");
            }
        }
    }
    
}