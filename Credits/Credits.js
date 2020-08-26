function Komunikat()
{
    var Tekst;
    var RNG = Math.floor((Math.random() * 10) + 1);
    switch (true)
    {
        case (RNG == 1):
        {
            Tekst = "Nerd Never Die!";
            break;
        }
        case (RNG == 2):
        {
            Tekst = "FREKWENCJA MASTER RACE";
            break;
        }
        case (RNG == 3):
        {
            Tekst = "Path Of Exile fajna gierka.";
            break;
        }
        case (RNG == 4):
        {
            Tekst = "Sprawdzałeś też inne rzeczy które wyprogramowałem? Np. <a href='../Clicker/index.html'>Clickera</a>?";
            break;
        }
        case (RNG == 5):
        {
            Tekst = "Spokojnie, jak się nauczę porządnie programować to może zrobie coś ładnego.";
            break;
        }
        case (RNG == 6):
        {
            Tekst = "Podoba ci się ta stronka? Jest to tylko przeróbka <a href='https://www.w3schools.com/howto/tryhow_css_parallax_demo.htm'>tego</a>";
            break;
        }
        case (RNG == 7):
        {
            Tekst = "I jak podoba się ta skormna stronka";
            break;
        }
        case (RNG == 8):
        {
            Tekst = "A mówili że te gry to tylko ogłupiają ...";
            break;
        }
        case (RNG == 9):
        {
            Tekst = "Mam se sobie nadzięje, żę nie przemjmujes siem mojom łórtografiom.";
            break;
        }
        case (RNG == 10):
        {
            Tekst = "Hej! Wiesz, że to są losowe wiadomości?";
            break;
        }
        default:
            Tekst = "Nerd Never Die!";
            break;
    }
    document.getElementById("Wiadomosc").innerHTML = Tekst;
}
function Losowy_Obrazek()
{
    var RNG = Math.floor((Math.random() * 10) + 1);
    switch (true)
    {
        case (RNG >= 1 && RNG <= 3):
        {
            document.getElementById("Losu_Losu_2").style.backgroundImage = "url(3-1.jpg)";
            break;
        }
        case (RNG >= 4  && RNG <= 7):
        {
            document.getElementById("Losu_Losu_2").style.backgroundImage = "url(3-2.jpg)";
            break;
        }
        case (RNG >= 8 && RNG <= 10):
        {
            document.getElementById("Losu_Losu_2").style.backgroundImage = "url(3-3.jpg)";
            break;
        }
    }
    
}