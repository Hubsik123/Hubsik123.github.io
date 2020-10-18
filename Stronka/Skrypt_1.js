//! Ale tak na serio:
    // Uwaga poniższy kod może zawierać spoilery
    // Jeśli dalej to czytasz to kliknij 25* razy na napis "Menu"... A jeśli to dla Ciebie za mało... to to jest dopiero 1/4...
    // Liczba ta może ulec zmianie
//! Szybkie sprawdzenie wersji strony po kliknięciu w ikonę
function Wersja_Stronki()
{
    var Wersja = "v 99";
    alert("To jest wersja strony nr:\n"+Wersja);
}
//! Komunikat po kliknięciu w ikonę
function Feedback()
{
    alert("Jeśli podoba ci się ta strona, przydały ci sie te notatki, kod tej strony to daj znać znajomym, im też może się przydać.\nJesli zobaczysz jakieś błędy to proszę daj o tym znać (screeny, model telefonu, przeglądarka będą bardzo pomocne). Mój adres e-mail:\nhubsik321@gmail.com");
}
//! Wyświetlenie obrazka w dużym rozmiarze
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
//! Zamknięcie powiększonego obrazka
function Zamkniecie_Obrazka(imgs) // PRAWIE to samo to funkcja Powiekszenie_Obrazka(imgs) ale ta funkcja zamyka obrazek
{
    var Powiekszony_Obrazek = document.getElementById("Powiekszony_Obrazek");
    var Opis_Obrazka = document.getElementById("Opis_Obrazka");
    Powiekszony_Obrazek.src = imgs.src;
    Opis_Obrazka.innerHTML = imgs.alt;
    Powiekszony_Obrazek.parentElement.style.display = "none";
}
//! Skrypty do poprawnego działania strony na telefonach
//? Niby to całe menu na tel to niby z internetu skopiowane https://www.w3schools.com/howto/howto_js_dropdown.asp i https://www.w3schools.com/howto/howto_js_mobile_navbar.asp, ale to to trzeba praktycznie całe przerobić żeby do czego się nadawało... Trzeba było napisać 3 funkcje żeby to działało (MenuMobile, MobileContent, ZoomFix)...
var Widok = false;
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
        Widok = false;
    }
    else
    {
        Linki.style.display = "block";
        Banner.style.height = "10%";
        Linki.style.height = "85%";
        Content.style.display = "none";
        Footer.style.height = "5%";
        Widok = true;
    }
    if (Widok == false) // Dzięki temu nie wywala błedu jak kliknie się ikonki 2 razy z rzędu
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
//! Wyszukiwarka do filtrowania listy w menu
//? Skopiowane z Internetu, tu nawet nie ma co specjalnie zmieniać https://www.w3schools.com/howto/howto_js_filter_lists.asp, ale można było taki jeden mały detal dodać... to dodałem...
function Wyszukiwarka()
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
    switch(Input.value) // Bardzo ważny "Fragment" kodu
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
            document.getElementById("Content").style.display = "none"; // Może by to tak w local storage zapisać?
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
        case "rickroll":
        case "Rickroll":
            document.getElementById("Komunikat").innerHTML = "Never Gonna Give You Up.";
            var Secret = document.createElement("a");
            Secret.href = "https://youtu.be/dQw4w9WgXcQ?t=43";
            Secret.click();
            break;
        case "Rick roll":
        case "rick roll":
            document.getElementById("Komunikat").innerHTML = "Never Gonna Give You Up.";
            var Secret = document.createElement("a");
            Secret.href = "https://youtu.be/BjDebmqFRuc?t=43";
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
        case "Star Wars":
        case "star wars":
            document.getElementById("Komunikat").innerHTML = "I find your lack of WIDTH disturbing<br>By losowy komentarz na YT";
            var Secret = document.createElement("a");
            Secret.href = "https://youtu.be/17cx2KuiYvg";
            Secret.click();
            break;
        case "Clicker.html":
            document.getElementById("Komunikat").innerHTML = "Work In Progress jakby co";
            var Secret = document.createElement("a");
            Secret.href = "https://hubsik123.github.io/Clicker/index.html";
            Secret.click();
            break;
        case "Thanos":
        case "thanos":
            Thanos();
            break;
        case "Rainbow":
        case "rainbow":
            Kolorki_Ustawianie();
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
        case "Kółko":
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
    }
}
//! Tryb ciemny, zapisywany w local storage, działający na podstronach
//? Dark Mode, to też z internetu, troszkę pozmieniane, https://dev.to/albertomontalesi/add-dark-mode-to-your-website-with-just-a-few-lines-of-code-5baf
document.addEventListener('DOMContentLoaded', () => // Po załadowaniu strony
{
    const Styl = document.getElementById('CSS');
    const ZapisanyStyl = localStorage.getItem('CSS');
    var Pasek = document.getElementById('Pasek');
    var ZapisanyPasek = localStorage.getItem('Pasek');
    if(ZapisanyStyl || ZapisanyPasek)
    {
        Styl.href = ZapisanyStyl;
        Pasek.content = ZapisanyPasek;
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
        localStorage.setItem('CSS',Styl.href);
        localStorage.setItem('Pasek',Pasek.content);
    })
})
//! Zamknięcie spamu przy zmianie rozmiaru okna
function No_Spam()
{
    if (Troll_3 == true) // Przerobić to, wcześniej Troll_3 był do blokowania zamykania spamu
    {
        document.getElementById("Spam").style.display = "block";
    }
    else
    {
        document.getElementById("Spam").style.display = "none";
    }
}
//! BARDZO WAŻNE:
//! BARDZO WAŻNE:

//! Bardzo ważne skrypty, to akurat jest w pełni pisane samodzielnie (...nikt by na internety takich pierdół nie dawał), z wiadomych wzgledów nie będzie tu żadnych komentarzy z objaśnieniami...

//! BARDZO WAŻNE:
//! BARDZO WAŻNE:

//? Do losowych komunikatów
var Ksiazki_Blokada = false;
//! Automatyczne zamykanie spamu jeśli kiedyś kliknięto go ___ razy
function BanSpam()
{
    if(typeof(Storage) !== "undefined")
    {
        if (localStorage.BanMeter  >= 5)
        {
            document.getElementById("Spam").style.display = "none";
        }
    }
}
//! Do automatycznego zamykania spamu, zwiększenie licznika kliknięć
function NoMoreSpam()
{
    if (localStorage.getItem("BanMeter") === null)
    {
        localStorage.setItem("BanMeter", 0);
    }
    else
    {
        localStorage.BanMeter = Number(localStorage.BanMeter) + 1;
    }
}
//! Bardzo ważny skrypt #1
var Licznik_1 = 0;
var Troll_1 = false;
function Rotate()
{
    Licznik_1++;
    if (Licznik_1 >= 25 && Troll_1 == false)
    {
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
//! Bardzo ważny skrypt #2
var Licznik_2 = 0;
var Troll_2 = false;
function Do_Background()
{
    Licznik_2++;
}
function Background()
{
    if (Licznik_2 >= 25 && Troll_2 == false)
    {
        document.getElementById("Banner").style.display = "none";
        document.getElementById("Content").style.display = "none";
        document.getElementById("LinkiMobile").style.display = "none";
        document.getElementById("Menu").style.display = "none";
        document.getElementById("Footer").style.display = "none";
        document.getElementById("Main").style.backgroundImage = "url(Obrazki/Ikona.gif)";
        Troll_2 = true;
        Smutny_Dzbanek();
        Final();
    }
}
//! Bardzo ważny skrypt #3
var Licznik_3 = 0;
var Troll_3 = false;
function SuperH1()
{
    Licznik_3++;
    if (Licznik_3 >= 25 && Troll_3 == false)
    {
        document.getElementById("SuperHeader").innerHTML = "W matkę też tak klikasz?!";
        document.getElementById("SuperHeader").style.color = "white";
        document.getElementById("SuperHeader").style.backgroundColor = "red";
        document.getElementById("SuperHeader").style.textShadow = "none";
        Troll_3 = true;
        Smutny_Dzbanek();
        Final();
    }
}
//! Bardzo ważny skrypt #4
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
        document.getElementById("Komunikat").innerHTML = "PoE i tak znacznie lepsze.";
        var Secret = document.createElement("a");
        Secret.target = "_blank";
        Secret.href = "https://www.youtube.com/watch?v=llqWTJGUFeE";
        Secret.click();
    }
}
//! Podmiana ikony na lepszą kiedy wykona się jeden z bardzooo ważnych skryptów
function Smutny_Dzbanek()
{
    if (Troll_1 == true || Troll_2 == true || Troll_3 == true)
    {
        document.getElementById("Main").style.cursor = "url('Obrazki/Smutny Dzbanek.png'), auto";
    }
}
//! Specjalne komunikaty w odpowiednie dni tygodnia
function Kalendarz()
{
    var Data = new Date();
    var Miesiac = Data.getMonth();
    var Dzien_Miesiaca = Data.getDate();
    var Dzien_Tygodnia = Data.getDay();
    if (Miesiac == 2 && Dzien_Miesiaca == 3)
    {
        //alert("Happy Birthday To Me");
        document.getElementById("Meta").innerHTML = "Happy birthday to me";
    }
    if (Dzien_Tygodnia == 1) //? Poniedziałek
    {
        document.getElementById("SuperHeader").innerHTML += " - Poniedziałek... jeszcze tylko cały tydzień do soboty";
    }
    if (Dzien_Tygodnia == 5) //? Piątek
    {
        document.getElementById("SuperHeader").innerHTML += " - Jest piątek a ty jeszcze pewnie w szkole biedaczku co?";
    }
    if (Dzien_Tygodnia == 6) //? Sobota
    {
        document.getElementById("SuperHeader").innerHTML += " - Jest sobota, na pewno nie chcesz wszystkiego zostawić na niedziele?";
    }
    if (Dzien_Tygodnia == 0) //? Niedziela
    {
        document.getElementById("SuperHeader").innerHTML += " - Znowu zostawiłeś/aś całą naukę na niedziele?";
    }
}
//! "Losowa" wiadomość po załadowaniu strony
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
            document.getElementById("Message").innerHTML = "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01111001 01101111 01110101 01110100 01110101 00101110 01100010 01100101 00101111 01100100 01010001 01110111 00110100 01110111 00111001 01010111 01100111 01011000 01100011 01010001 00111111 01110100 00111101 00110100 00110011";
            break;
        }
        case 5:
        {
            document.getElementById("Message").innerHTML = "ZOBACZ JAK JEDNYM ZDANIEM OBRAŻA KSIĄŻKOHOLIKÓW: ";
            var Spoiler = document.createElement("p");
            Spoiler.innerHTML = "Klikasz na własną odpowiedzialność!";
            Spoiler.title = "Przed kliknięciem skonsultuj się z lokalnym informatykiem.";
            Spoiler.setAttribute("class", "Link_1");
            Spoiler.onclick = function()
            {
                if (Ksiazki_Blokada == false)
                {
                    document.getElementById("Message").innerHTML = "Nigdy nie rozumiałem ludzi, którzy zawsze mówili że książki są delikatnie mówiąc lepsze niż gry komputerowe, wręcz najwyższą (patrz jedyną) formą intelektualnej rozrywki. Na podtrzymanie (patrz wpajanie) tej teori przytaczane były argumenty że książki poszerzają horyzonty, uczą w sumie wszystkiego co się tylko da (SPOILER ALERT: Gry też poszerzają horyzonty i uczą)... Ale niestety często te oczytane i obeznane w świecie (antycznym) osoby nie tolerowały jakiejkolwiek formy spędzania wolnego czasu innej niż czytanie książek... Twierdząc, że to strata czasu i prowadzenie do tego że mózgi nam zgniją, że nic przez nie nie osiągniemy w życiu, że wszystko inne niż książki jest złe... Ale moim zdaniem - uważam takie osoby są po prostu nie toleranycjne (mimo tego, że książki podobno uczą tolerancji), zachowywanie się w ten sposób jest po prostu niekulturalne (mam nadzieje że ta myśl zostanie z Tobą na dłużej i przemyślisz swoje poglądy na temat tego jak to książki są i powinny być jedyną dozwoloną formą <s>intelektualnej</s> jakiejkolwiek rozrywki). A argumenty typu 'Od czytania jest siem momdrzejszym', 'tam się tylko w obrazki klika' (A co właśnie robisz? Czytasz z komputra! Jak uruchomiłeś przeglądarkę? Jak kliknąłeś w guzik który wyświetla ten tekst?). Gry <s>mogą być</s> są taką samą formą spędzania wolnego czasu jak książki, tam też trzeba przecież czytać więcej lub mniej. Chciałbym wiedzieć jaka jest różnica między czytaniem z kartki a czytaniem z monitora... to że jest kolorowy tekst, obrazki czy jeszcze coś innego. Ale jakimś cudem mój mózg ma się w miarę dobrze i to jakoś Ty własnie korzystasz z tej skoromnej stronki i wszystkich plików które są tutaj dostępne. Które zostały zrobione w 100% pod wpływem korzystania z tych całych gier komputerowych. I właśnie dzięki robieniu tej strony nauczyłem się wielu pożytecznych rzeczy, których nie nauczyłyby mnie książki. Jeśli do Ciebie był skierowany ten krótki tekst - to nie pozdrawiam! Mam nadzieje, że przyczepisz się do błędów ortograficznych czy składni a nie (słabych, krótkich, nie rozpisanych, pisanych na BARDZO szybko) argumentów, których pewnie nawet nie będziesz chciał/a przeczytać.<br><b>PS:</b> Jak już To 'Diablo' to gra o egzorcyście.<br><b>PS 2:</b> Jestem bardzo ciekawy dlaczego na każdym etapie mojej edukacji był moment w którym ktoś kazał iść do 'bibloteki' dlatego, że ilość odwiedziń uczniów się nie zgadzała...<br><b>PS 3:</b> Pasowałoby żeby w szkolnej bilbiotece w dziele 'Informatyka' było troche nowsze książki... Raz widziałem takie 'coś' o robieniu pierwszych (na świecie) stron internetowych, książka ta wspominała przeglądarkę... uwaga... Netscape Navigator (Poszukaj na Wikipedii)... A potem zobaczyłem coś w stylu 'Windows 95 i ty', 'System Operacyjny przeszłości'... ";
                    Ksiazki_Blokada = true;
                }
            };
            document.getElementById("Message").appendChild(Spoiler);
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
            alert("Error... lol");
        }
    }
}
//! Szybka zamiana plików .css
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
    //! Zostawiam to na pamiątke tego że przeglądarka zablokowała "wyskakujące okienka" a taki fajny pomysł miałem :(
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
//! Specjalna "losowa" animacja po kliknięciu w pewien przycisk
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
                    var Kierunek;
                    var Odstep = Math.floor((Math.random() * 1000) + 1); //? 1 - 1000
                    var RNG = Math.floor((Math.random() * 100) + 1); //? 1 - 100
                    switch (true)
                    {
                        case (RNG > 0 && RNG <= 25):
                            Kierunek = "normal";
                            break;
                        case (RNG > 25 && RNG <= 50):
                            Kierunek = "reverse";
                            break;
                        case (RNG > 50 && RNG <= 75):
                            Kierunek = "alternate";
                            break;
                        case (RNG > 75 && RNG <= 100):
                            Kierunek = "alternate";
                            break;
                        default:
                            Kierunek = "normal";
                            break;
                    }
                    document.getElementsByClassName("Link_2")[x].animate
                    (
                        [
                            {transform: "rotate(0deg) skewY(120deg)"},
                            {transform: "rotate(360deg) skewX(120deg)"},
                            {transform: "rotate(0deg)"}
                        ],
                        {
                            duration: 7500,
                            delay: Odstep,
                            direction: Kierunek,
                            iterations: Infinity
                        }
                    )
                }
                Link2_Fix = true;
            }
        }
    }
}
//! Losowe usuwanie elementów strony po wpisaniu "Thanos"
var Snap = true;
function Thanos()
{
    if (Snap == true) 
    {
        var Main = document.getElementById("Main");
        var Linki = Main.getElementsByTagName("a");
        var Akapity = Main.getElementsByTagName("p");
        var Naglowki_1 = Main.getElementsByTagName("h1");
        var Naglowki_2 = Main.getElementsByTagName("h2");
        var Naglowki_3 = Main.getElementsByTagName("h3");
        //! Linki
        for (var x = 0; x < Linki.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("a")[x].style.display = "none";
            }
        }
        //! Akapity
        for (var x = 0; x < Akapity.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("p")[x].style.display = "none";
            }
        }
        //! Nahgłówki h1
        for (var x = 0; x < Naglowki_1.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("h1")[x].style.display = "none";
            }
        }
        //! Nahgłówki h2
        for (var x = 0; x < Naglowki_2.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("h2")[x].style.display = "none";
            }
        }
        //! Nahgłówki h3
        for (var x = 0; x < Naglowki_3.length; x++)
        {
            var RNG = Math.floor((Math.random() * 10) + 1);
            if (RNG % 2 == 0)
            {
                document.getElementsByTagName("h3")[x].style.display = "none";
            }
        }
        Snap = false;
    }
    else
    {
        document.getElementById("Komunikat").innerHTML = "I co magicznie jedną 1/4 chcesz zrobić?";
    }
}
//! Losowanie kolorów do funkcji która ustawia losowe kolory czcionki, tła/gradientu i rodzaju gradientu i text-shadow
//? Oryginalny pomysł nie jest mój https://stackoverflow.com/questions/1484506/random-color-generator bo mój nie działał :(
//? Więc przerobiłem bardzo mocno to co znalazłem
function Kolorki_Losowanie()
{
    var Litery = '0123456789ABCDEF';
    var Kolor = '#';
    for (var x = 0; x < 6; x++)
    {
        Kolor += Litery[Math.floor(Math.random() * 16)];
    }
    return Kolor;
}
function Kolorki_Ustawianie()
{
    //alert(document.getElementsByClassName("Link_2").length);
    for (var x = 0; x < document.getElementsByClassName("Link_2").length+50; x++) //* Cos nie działa bez tego +50, za mało iteracji, jeśli wiesz jak to poprawić to daj proszę znać
    {
        //! Kolor
        $(".Link_2:nth-child("+x+")").css("color", Kolorki_Losowanie());

        //! Gradient
        var Kierunek_1 =
        [
            "bottom",
            "right",
            "top left",
            "top right",
            "top",
            "left",
            "bottom left",
            "bottom right",
        ];
        var Kierunek_2 = Kierunek_1[Math.floor(Math.random() * 8)];

        var Gradient_1 = 
        [
            "linear-gradient",
            "radial-gradient"
        ];
        var Gradient_2 = Gradient_1[Math.floor(Math.random() * 2)];

        if (Gradient_2 == "linear-gradient")
        {
            var wip_2 = Gradient_2+"(to "+Kierunek_2+", "+Kolorki_Losowanie()+", "+Kolorki_Losowanie()+", "+Kolorki_Losowanie()+")";
        }
        else
        {
            var wip_2 = Gradient_2+"("+Kolorki_Losowanie()+", "+Kolorki_Losowanie()+", "+Kolorki_Losowanie()+")";
        }

        $(".Link_2:nth-child("+x+")").css("background-image", wip_2);

        //! Text-Shadow
        wip = "50px 50px 10px "+Kolorki_Losowanie();
        $(".Link_2:nth-child("+x+")").css("text-shadow", wip); 
    }
    setTimeout(function()
    {
        Kolorki_Ustawianie()
    }, 250);
}