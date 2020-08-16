var Money = 0;
var Income = 1;
var Progres_Stage = 0;
var Upgrade_1_Ilosc = 1;
var Upgrade_2_Ilosc = 1;
var Upgrade_3_Ilosc = 1;
var Upgrade_4_Ilosc = 1;
var Upgrade_5_Ilosc = 1;
function Aktualizacja_1()
{
    var Timer = setTimeout(Aktualizacja_2, 125);
}
function Aktualizacja_2()
{
    document.getElementById("Money").value = Money;
    document.getElementById("Income").value = Income;
    Progress();
    Aktualizacja_1();
}
function Animacja()
{
    document.getElementById("Button_Clicker").animate
    (
        [
            {transform: "rotateY(360deg)"},
            {transform: "rotateY(0deg)"},
        ],
        {
            duration: 250,
            iterations: 1
        }
    );
}
function Clicker()
{
    Money = Money + Income;
}
function Progress()
{
    switch (true)
    {
        case Progres_Stage == 0:
        {
            document.getElementsByTagName("progress")[0].setAttribute("max", 10);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("wip").innerHTML = "1";
            if (Money >= 10)
            {
                Progres_Stage = 1;
            }
            break;
        }
        case Progres_Stage == 1:
        {
            document.getElementsByTagName("progress")[0].removeAttribute("max");
            document.getElementsByTagName("progress")[0].setAttribute("max", 50);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("wip").innerHTML = "2";
            break;
        }
    }
    //document.getElementsByTagName("progress")[0].setAttribute("max", 1000);
    //document.getElementsByTagName("progress")[0].setAttribute("value", Money);
}
function Biedak()
{
    document.getElementById("TextArea").innerHTML += "Nie masz tyle pieniędzy :(\n";
    var Timer = setTimeout(Komunikat_DELETE, 2500);
}
function Komunikat_DELETE()
{
    document.getElementById("TextArea").innerHTML = "";
}
function Upgrade_1()
{
    if (Money >= (10*Upgrade_1_Ilosc))
    {
        Money = Money - (10*Upgrade_1_Ilosc);
        Upgrade_1_Ilosc++;
        Income = Income + 1;
    }
    else
    {
        document.getElementById("Upgrade_1-Cena").style.backgroundColor = "tomato";
        Biedak("Upgrade_1-Cena");
        var Timer = setTimeout(function()
            {
                document.getElementById("Upgrade_1-Cena").style.backgroundColor = "initial";
            }, 2500);
    }
    document.getElementById("Upgrade_1-Opis").innerHTML = "Zwiększa ilość $ na kliknięcie o: "+"1"+" $"; //! TODO: Zamienić to "1" na jakąś zmienną
    document.getElementById("Upgrade_1-Cena").innerHTML = 10*Upgrade_1_Ilosc+" $";
}
function Upgrade_2()
{
    if (Money >= (25*Upgrade_2_Ilosc))
    {
        Money = Money - (25*Upgrade_2_Ilosc);
        Upgrade_2_Ilosc++;
        Income = Income + 3;
    }
    else
    {
        document.getElementById("Upgrade_2-Cena").style.backgroundColor = "tomato";
        Biedak("Upgrade_2-Cena");
        var Timer = setTimeout(function()
            {
                document.getElementById("Upgrade_2-Cena").style.backgroundColor = "initial";
            }, 2500);
    }
    document.getElementById("Upgrade_2-Opis").innerHTML = "Zwiększa ilość $ na kliknięcie o: "+"3"+" $"; //! TODO: Zamienić to "3" na jakąś zmienną
    document.getElementById("Upgrade_2-Cena").innerHTML = 25*Upgrade_2_Ilosc+" $";
}
function Upgrade_3()
{
    if (Money >= (50*Upgrade_3_Ilosc))
    {
        Money = Money - (50*Upgrade_3_Ilosc);
        Upgrade_3_Ilosc++;
        Income = Income + 5;
    }
    else
    {
        document.getElementById("Upgrade_3-Cena").style.backgroundColor = "tomato";
        Biedak("Upgrade_3-Cena");
        var Timer = setTimeout(function()
            {
                document.getElementById("Upgrade_3-Cena").style.backgroundColor = "initial";
            }, 2500);
    }
    document.getElementById("Upgrade_3-Opis").innerHTML = "Zwiększa ilość $ na kliknięcie o: "+"5"+" $"; //! TODO: Zamienić to "3" na jakąś zmienną
    document.getElementById("Upgrade_3-Cena").innerHTML = 50*Upgrade_3_Ilosc+" $";
}
function Upgrade_4()
{
    if (Money >= (100*Upgrade_4_Ilosc))
    {
        Money = Money - (100*Upgrade_4_Ilosc);
        Upgrade_4_Ilosc++;
        Income = Income + 10;
    }
    else
    {
        document.getElementById("Upgrade_4-Cena").style.backgroundColor = "tomato";
        Biedak("Upgrade_4-Cena");
        var Timer = setTimeout(function()
            {
                document.getElementById("Upgrade_4-Cena").style.backgroundColor = "initial";
            }, 2500);
    }
    document.getElementById("Upgrade_4-Opis").innerHTML = "Zwiększa ilość $ na kliknięcie o: "+"10"+" $"; //! TODO: Zamienić to "3" na jakąś zmienną
    document.getElementById("Upgrade_4-Cena").innerHTML = 100*Upgrade_4_Ilosc+" $";
}
function Upgrade_5()
{
    if (Money >= (500*Upgrade_5_Ilosc))
    {
        Money = Money - (500*Upgrade_5_Ilosc);
        Upgrade_5_Ilosc++;
        Income = Income + 25;
    }
    else
    {
        document.getElementById("Upgrade_5-Cena").style.backgroundColor = "tomato";
        Biedak("Upgrade_5-Cena");
        var Timer = setTimeout(function()
            {
                document.getElementById("Upgrade_5-Cena").style.backgroundColor = "initial";
            }, 2500);
    }
    document.getElementById("Upgrade_5-Opis").innerHTML = "Zwiększa ilość $ na kliknięcie o: "+"25"+" $"; //! TODO: Zamienić to "3" na jakąś zmienną
    document.getElementById("Upgrade_5-Cena").innerHTML = 500*Upgrade_5_Ilosc+" $";
}