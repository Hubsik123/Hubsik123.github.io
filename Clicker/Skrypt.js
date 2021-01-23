    //! Zmienne Globalne
        //* Ogólne
var Money = 0;
var Income = 1; //TODO:
var Real_Income;
var Real_Income_Crit;
var Income_Multi = 1;
var Progres_Stage = 0;
var AutoClick_Delay = 6000;
var BiedaIlosc = 0;
var Crit_Click = 0;
var Crit_Multi = 1;
var Super_Clicker_Ammo = 0;
var Super_Clicker_Multi = 2;
        //* Ilość Ulepszeń Income
var Upgrade_1_Ilosc = 1;
var Upgrade_2_Ilosc = 1;
var Upgrade_3_Ilosc = 1;
var Upgrade_4_Ilosc = 1;
var Upgrade_5_Ilosc = 1;
        //* Kupione AutoClickery
var AC_Ilosc = 0;
var AC_Kupione_1 = false;
var AC_Kupione_2 = false;
var AC_Kupione_3 = false;
var AC_Kupione_4 = false;
var AC_Kupione_5 = false;
        //* Kupione Szanse Na Crit Click
var CritChance_1_Kupione = false;
var CritChance_2_Kupione = false;
var CritChance_3_Kupione = false;
var CritChance_4_Kupione = false;
var CritChance_5_Kupione = false;
var CritChance_6_Kupione = false;
var CritChance_7_Kupione = false;
var CritChance_8_Kupione = false;
var CritChance_9_Kupione = false;
var CritChance_10_Kupione = false;
        //* Kupione Mnożniki Crit Click
var Crit_Multi_1_Kupione = false;
var Crit_Multi_2_Kupione = false;
var Crit_Multi_3_Kupione = false;
var Crit_Multi_4_Kupione = false;
var Crit_Multi_5_Kupione = false;
var Crit_Multi_6_Kupione = false;
var Crit_Multi_7_Kupione = false;
var Crit_Multi_8_Kupione = false;
var Crit_Multi_9_Kupione = false;
var Crit_Multi_10_Kupione = false;
        //* Kupione Mnożniki Income
var Income_Multi_1_Kupione = false;
var Income_Multi_2_Kupione = false;
var Income_Multi_3_Kupione = false;
var Income_Multi_4_Kupione = false;
var Income_Multi_5_Kupione = false;
        //* Kupione Super Clicker
var Super_Clicker_1_Kupione = false;
var Super_Clicker_4_Kupione = false;
var Super_Clicker_5_Kupione = false;
var Super_Clicker_6_Kupione = false;
    //! Quality Of Life
function Formatowanie_Liczb(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
    //! Podstawowe Funkcje
function Aktualizacja_1()
{
    var Timer = setTimeout(Aktualizacja_2, 100);
}
function Aktualizacja_2()
{
    Real_Income = Math.floor(Income * Income_Multi);
    Real_Income_Crit = Math.floor(((Math.round((Income*Crit_Multi) *10 ) / 10)) * Income_Multi);
    Real_Income_Super = Math.floor(Income * Income_Multi * Super_Clicker_Multi);
    Real_Income_Super_Crit = Math.floor((Math.round(Income*Crit_Multi) * 10) / 10);
        //* Money
    document.getElementById("Money").value = Formatowanie_Liczb(Money) +" $";
        //* Income
    document.getElementById("Income").value = Formatowanie_Liczb(Income) + " $";
        //* Mnożnik Income
    document.getElementById("Income_Multi").value = Math.round(Income_Multi*10)/10+" x";
        //* Income z mnożnikiem
    document.getElementById("Real_Income").value = Real_Income+" $";
        //* Income z mnożnikiem i krytem
    document.getElementById("Real_Income_Crit").value = Real_Income_Crit+" $";
        //* Szansa na kryt
    document.getElementById("Szansa_na_Crit_Click").value = Crit_Click+" %";
        //* Mnożnik Krytów
    document.getElementById("Mnożnik_Crit_Click").value = Math.round((Crit_Multi) * 10) / 10 +" x";
        //* Super Clicker Multi
    document.getElementById("SuperClicker_Multi").value = Super_Clicker_Multi+" x";
        //* Super Clicker Ammo
    document.getElementById("SuperClicker_Ammo").value = Super_Clicker_Ammo;
        //* Ilość ulepszeń
    document.getElementById("Upgrade_1-Ilosc").innerHTML = Upgrade_1_Ilosc - 1;
    document.getElementById("Upgrade_2-Ilosc").innerHTML = Upgrade_2_Ilosc - 1;
    document.getElementById("Upgrade_3-Ilosc").innerHTML = Upgrade_3_Ilosc - 1;
    document.getElementById("Upgrade_4-Ilosc").innerHTML = Upgrade_4_Ilosc - 1;
    document.getElementById("Upgrade_5-Ilosc").innerHTML = Upgrade_5_Ilosc - 1;
        //* Auto Clickery
    if (AC_Kupione_1 == true || AC_Kupione_2 == true || AC_Kupione_3 == true || AC_Kupione_4 == true || AC_Kupione_5 == true)
    {
        document.getElementById("AutoClickRate").value = AC_Ilosc;
    }
    else
    {
        document.getElementById("AutoClickRate").value = 0;
    }
    Progress();
    Aktualizacja_1();
}
function Clicker()
{
    var Roll_Click = Math.floor((Math.random() * 100) + 1); //? 1 - 100
    if (Roll_Click <= Crit_Click)
    {
        Money = Money + Real_Income_Crit;
        //alert("Kryt: "+Real_Income_Crit);
            //alert(Money+" + "+Income*Crit_Multi+"\nCrit_Multi: "+Crit_Multi+"\n"+(Math.round((Income*Crit_Multi) *10 ) / 10));
        document.getElementById("TextArea").innerHTML += "Crit Click !\n";
        var Timer = setTimeout(function()
        {
            document.getElementById("TextArea").innerHTML = "";
        }, 2500);
    }
    else
    {
        //Real_Income = Math.floor(Income * Income_Multi);
        Money = Money + Real_Income;
        //alert(Real_Income);
    }
}
function Super_Clicker()
{
    if (Super_Clicker_1_Kupione == true)
    {
        if (Super_Clicker_Ammo > 0)
        {
            var Roll_Click = Math.floor((Math.random() * 100) + 1); //? 1 - 100
            if (Roll_Click <= Real_Income_Super_Crit)
            {
                Money = Money + Real_Income_Super_Crit;
                document.getElementById("TextArea").innerHTML += "Crit Click !\n";
                var Timer = setTimeout(function()
                {
                    document.getElementById("TextArea").innerHTML = "";
                }, 2500);
            }
            else
            {
                Money = Money + Real_Income_Super;
            }
        }
        else
        {
            alert("ni ma ammo");
        }
    }
    else
    {
        Biedak();
    }
}
function Progress()
{
    switch (true)
    {
        case Progres_Stage == 0:
        {
            var Finish = 1000;
            document.getElementsByTagName("progress")[0].setAttribute("max", Finish);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("Stage").innerHTML = "Stage 1: Tutorial Part 1\n   "+Formatowanie_Liczb(Money)+" / "+ Formatowanie_Liczb(Finish);
            if (Money >= Finish)
            {
                Progres_Stage = 1;
                Income_Multi = Income_Multi + 0.1;
            }
            break;
        }
        case Progres_Stage == 1:
        {
            var Finish = 5000;
            document.getElementsByTagName("progress")[0].removeAttribute("max");
            document.getElementsByTagName("progress")[0].setAttribute("max", Finish);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("Stage").innerHTML = "Stage 2: Tutorial Part 2\n   "+Formatowanie_Liczb(Money)+" / "+ Formatowanie_Liczb(Finish);
            if (Money >= Finish)
            {
                Progres_Stage = 2;
                Income_Multi = Income_Multi + 0.1;
            }
            break;
        }
        case Progres_Stage == 2:
        {
            var Finish = 10000;
            document.getElementsByTagName("progress")[0].removeAttribute("max");
            document.getElementsByTagName("progress")[0].setAttribute("max", Finish);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("Stage").innerHTML = "Stage 3: Tutorial Part 3 - Finish\n   "+Formatowanie_Liczb(Money)+" / "+ Formatowanie_Liczb(Finish);
            if (Money >= Finish)
            {
                Progres_Stage = 3;
                Income_Multi = Income_Multi + 0.1;
            }
            break;
        }
        case Progres_Stage == 3:
        {
            var Finish = 25000;
            document.getElementsByTagName("progress")[0].removeAttribute("max");
            document.getElementsByTagName("progress")[0].setAttribute("max", Finish);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("Stage").innerHTML = "Stage 4: The Begining\n   "+Formatowanie_Liczb(Money)+" / "+ Formatowanie_Liczb(Finish);
            if (Money >= Finish)
            {
                Progres_Stage = 4;
                Income_Multi = Income_Multi + 0.1;
            }
            break;
        }
        case Progres_Stage == 4:
        {
            var Finish = 100000;
            document.getElementsByTagName("progress")[0].removeAttribute("max");
            document.getElementsByTagName("progress")[0].setAttribute("max", Finish);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("Stage").innerHTML = "Stage 5: Earlygame\n   "+Formatowanie_Liczb(Money)+" / "+ Formatowanie_Liczb(Finish);
            if (Money >= Finish)
            {
                Progres_Stage = 5;
                Income_Multi = Income_Multi + 0.1;
            }
            break;
        }
        case Progres_Stage == 5:
        {
            var Finish = 500000;
            document.getElementsByTagName("progress")[0].removeAttribute("max");
            document.getElementsByTagName("progress")[0].setAttribute("max", Finish);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("Stage").innerHTML = "Stage 6: Earlygame Part 2\n   "+Formatowanie_Liczb(Money)+" / "+ Formatowanie_Liczb(Finish);
            if (Money >= Finish)
            {
                Progres_Stage = 6;
                Income_Multi = Income_Multi + 0.1;
            }
            break;
        }
        /*case Progres_Stage == 2:
        {
            var Finish = 10000;
            document.getElementsByTagName("progress")[0].removeAttribute("max");
            document.getElementsByTagName("progress")[0].setAttribute("max", Finish);
            document.getElementsByTagName("progress")[0].setAttribute("value", Money);
            document.getElementById("Stage").innerHTML = "Stage 3: Tutorial Part 2\n   "+Formatowanie_Liczb(Money)+" / "+ Formatowanie_Liczb(Finish);
            if (Money >= Finish)
            {
                Progres_Stage = 2;
            }
            break;
        }*/
    }
}
function Biedak()
{
    //document.getElementById("TextArea").innerHTML += "Nie masz tyle pieniędzy :(\n";
    var Tekst = Math.floor((Math.random() * 10) + 1); //? 1 - 10
    switch (true)
    {
        case Tekst == 1:
        {
            document.getElementById("TextArea").innerHTML += "Nie masz tyle pieniędzy :(\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 2:
        {
            document.getElementById("TextArea").innerHTML += "Weź sprawdź ile to kosztuje ...\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 3:
        {
            document.getElementById("TextArea").innerHTML += "Znowu nie masz pieniędzy :(\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 4:
        {
            document.getElementById("TextArea").innerHTML += "Nie umiesz w matematyke...\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 5:
        {
            document.getElementById("TextArea").innerHTML += "Weź naucz się liczyć...\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 6:
        {
            document.getElementById("TextArea").innerHTML += "Ile razy widzisz już tek komunikat? Odpowiedź: "+BiedaIlosc+"\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 7:
        {
            document.getElementById("TextArea").innerHTML += "Ile razy mam powtarzać żebyś sprawdził ile to kosztuje...\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 8:
        {
            document.getElementById("TextArea").innerHTML += "Naprawdę... czy ty specjalnie sprawdzasz ile jest różnych komunikatów o tym jak nie umiesz czytać ze zrozumieniem?\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 9:
        {
            document.getElementById("TextArea").innerHTML += "Frajer...\n";
            BiedaIlosc++;
            break;
        }
        case Tekst == 10:
        {
            document.getElementById("TextArea").innerHTML += "git gud\n";
            BiedaIlosc++;
            break;
        }
        default:
            break;
    }
    var Timer = setTimeout(Komunikat_DELETE, 2500);
}
function Komunikat_DELETE()
{
    document.getElementById("TextArea").innerHTML = "";
}
function AutoClick()
{
    var Timer = setTimeout(function()
        {
            Money = Money + Income;
            document.getElementById("Auto_Clicker").click();
            Animacja_Auto();
            AutoClick();
        }, AutoClick_Delay);
}
    //! Income Upgrade
function Upgrade_1()
{
    if (Money >= (10*Upgrade_1_Ilosc))
    {
        Money = Money - (10*Upgrade_1_Ilosc);
        Upgrade_1_Ilosc++;
        Income = Income + 1;
        var Cena = 10*Upgrade_1_Ilosc;
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
    document.getElementById("Upgrade_1-Cena").innerHTML = Formatowanie_Liczb(Cena)+" $";
}
function Upgrade_2()
{
    if (Money >= (25*Upgrade_2_Ilosc))
    {
        Money = Money - (25*Upgrade_2_Ilosc);
        Upgrade_2_Ilosc++;
        Income = Income + 3;
        var Cena = 25*Upgrade_2_Ilosc;
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
    document.getElementById("Upgrade_2-Cena").innerHTML = Formatowanie_Liczb(Cena)+" $";
}
function Upgrade_3()
{
    if (Money >= (50*Upgrade_3_Ilosc))
    {
        Money = Money - (50*Upgrade_3_Ilosc);
        Upgrade_3_Ilosc++;
        Income = Income + 5;
        var Cena =  50*Upgrade_3_Ilosc;
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
    document.getElementById("Upgrade_3-Cena").innerHTML = Formatowanie_Liczb(Cena)+" $";
}
function Upgrade_4()
{
    if (Money >= (100*Upgrade_4_Ilosc))
    {
        Money = Money - (100*Upgrade_4_Ilosc);
        Upgrade_4_Ilosc++;
        Income = Income + 10;
        var Cena = 100*Upgrade_4_Ilosc;
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
    document.getElementById("Upgrade_4-Cena").innerHTML = Formatowanie_Liczb(Cena)+" $";
}
function Upgrade_5()
{
    if (Money >= (500*Upgrade_5_Ilosc))
    {
        Money = Money - (500*Upgrade_5_Ilosc);
        Upgrade_5_Ilosc++;
        Income = Income + 25;
        var Cena = 500*Upgrade_5_Ilosc;
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
    document.getElementById("Upgrade_5-Cena").innerHTML = Formatowanie_Liczb(Cena)+" $";
}
    //! Auto Clicker
function AutoClicker_1()
{
    if (AC_Kupione_1 == false)
    {
        if (Money >= 1000)
        {
            Money = Money - 1000;
            document.getElementById("AutoClicker_1-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("AutoClicker_1-Kupione").innerHTML = "Już to kupiłeś";
            AC_Kupione_1 = true;
            AutoClick_Delay = AutoClick_Delay - 1000;
            AC_Ilosc++;
            AutoClick();
        }
        else
        {
            document.getElementById("AutoClicker_1-Cena").style.backgroundColor = "tomato";
            Biedak("AutoClicker_1-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("AutoClicker_1-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function AutoClicker_2()
{
    if (AC_Kupione_2 == false)
    {
        if (Money >= 2500)
        {
            Money = Money - 2500;
            document.getElementById("AutoClicker_2-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("AutoClicker_2-Kupione").innerHTML = "Już to kupiłeś";
            AC_Kupione_2 = true;
            AutoClick_Delay = AutoClick_Delay - 1000;
            AC_Ilosc++;
            AutoClick();
        }
        else
        {
            document.getElementById("AutoClicker_2-Cena").style.backgroundColor = "tomato";
            Biedak("AutoClicker_2-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("AutoClicker_2-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function AutoClicker_3()
{
    if (AC_Kupione_3 == false)
    {
        if (Money >= 5000)
        {
            Money = Money - 5000;
            document.getElementById("AutoClicker_3-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("AutoClicker_3-Kupione").innerHTML = "Już to kupiłeś";
            AC_Kupione_3 = true;
            AutoClick_Delay = AutoClick_Delay - 1000;
            AC_Ilosc++;
            AutoClick();
        }
        else
        {
            document.getElementById("AutoClicker_3-Cena").style.backgroundColor = "tomato";
            Biedak("AutoClicker_3-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("AutoClicker_3-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function AutoClicker_4()
{
    if (AC_Kupione_4 == false)
    {
        if (Money >= 7500)
        {
            Money = Money - 7500;
            document.getElementById("AutoClicker_4-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("AutoClicker_4-Kupione").innerHTML = "Już to kupiłeś";
            AC_Kupione_4 = true;
            AutoClick_Delay = AutoClick_Delay - 1000;
            AC_Ilosc++;
            AutoClick();
        }
        else
        {
            document.getElementById("AutoClicker_4-Cena").style.backgroundColor = "tomato";
            Biedak("AutoClicker_4-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("AutoClicker_4-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function AutoClicker_5()
{
    if (AC_Kupione_5 == false)
    {
        if (Money >= 10000)
        {
            Money = Money - 10000;
            document.getElementById("AutoClicker_5-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("AutoClicker_5-Kupione").innerHTML = "Już to kupiłeś";
            AC_Kupione_5 = true;
            AutoClick_Delay = AutoClick_Delay - 1000;
            AC_Ilosc++;
            AutoClick();
        }
        else
        {
            document.getElementById("AutoClicker_5-Cena").style.backgroundColor = "tomato";
            Biedak("AutoClicker_5-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("AutoClicker_5-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
    //! Crit Chance
function CritChance_1()
{
    if (CritChance_1_Kupione == false)
    {
        if (Money >= 1000)
        {
            Money = Money - 1000;
            document.getElementById("CritChance_1-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_1-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_1_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_1-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_1-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_1-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_2()
{
    if (CritChance_2_Kupione == false)
    {
        if (Money >= 2500)
        {
            Money = Money - 2500;
            document.getElementById("CritChance_2-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_2-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_2_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_2-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_2-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_2-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_3()
{
    if (CritChance_3_Kupione == false)
    {
        if (Money >= 5000)
        {
            Money = Money - 5000;
            document.getElementById("CritChance_3-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_3-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_3_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_3-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_3-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_3-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_4()
{
    if (CritChance_4_Kupione == false)
    {
        if (Money >= 10000)
        {
            Money = Money - 10000;
            document.getElementById("CritChance_4-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_4-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_4_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_4-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_4-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_4-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_5()
{
    if (CritChance_5_Kupione == false)
    {
        if (Money >= 15000)
        {
            Money = Money - 15000;
            document.getElementById("CritChance_5-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_5-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_5_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_5-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_5-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_5-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_6()
{
    if (CritChance_6_Kupione == false)
    {
        if (Money >= 30000)
        {
            Money = Money - 30000;
            document.getElementById("CritChance_6-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_6-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_6_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_6-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_6-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_6-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_7()
{
    if (CritChance_7_Kupione == false)
    {
        if (Money >= 65000)
        {
            Money = Money - 65000;
            document.getElementById("CritChance_7-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_7-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_7_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_7-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance7-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_7-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_8()
{
    if (CritChance_8_Kupione == false)
    {
        if (Money >= 100000)
        {
            Money = Money - 100000;
            document.getElementById("CritChance_8-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_8-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_8_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_8-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_8-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_8-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_9()
{
    if (CritChance_9_Kupione == false)
    {
        if (Money >= 150000)
        {
            Money = Money - 150000;
            document.getElementById("CritChance_9-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_9-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_9_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_9-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_9-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_9-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritChance_10()
{
    if (CritChance_10_Kupione == false)
    {
        if (Money >= 250000)
        {
            Money = Money - 250000;
            document.getElementById("CritChance_10-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritChance_10-Kupione").innerHTML = "Już to kupiłeś";
            CritChance_10_Kupione = true;
            Crit_Click = Crit_Click + 10;
        }
        else
        {
            document.getElementById("CritChance_10-Cena").style.backgroundColor = "tomato";
            Biedak("CritChance_10-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritChance_10-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
    //! Crit Multi
function CritMulti_1()
{
    if (Crit_Multi_1_Kupione == false)
    {
        if (Money >= 500)
        {
            Money = Money - 500;
            document.getElementById("CritMulti_1-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_1-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_1_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_1-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_1-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_1-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_2()
{
    if (Crit_Multi_2_Kupione == false)
    {
        if (Money >= 1000)
        {
            Money = Money - 1000;
            document.getElementById("CritMulti_2-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_2-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_2_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_2-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_2-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_2-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_3()
{
    if (Crit_Multi_3_Kupione == false)
    {
        if (Money >= 5000)
        {
            Money = Money - 5000;
            document.getElementById("CritMulti_3-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_3-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_3_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_3-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_3-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_3-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_4()
{
    if (Crit_Multi_4_Kupione == false)
    {
        if (Money >= 10000)
        {
            Money = Money - 10000;
            document.getElementById("CritMulti_4-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_4-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_4_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_4-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_4-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_4-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_5()
{
    if (Crit_Multi_5_Kupione == false)
    {
        if (Money >= 15000)
        {
            Money = Money - 15000;
            document.getElementById("CritMulti_5-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_5-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_5_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_5-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_5-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_5-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_6()
{
    if (Crit_Multi_6_Kupione == false)
    {
        if (Money >= 25000)
        {
            Money = Money - 25000;
            document.getElementById("CritMulti_6-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_6-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_6_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_6-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_6-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_6-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_7()
{
    if (Crit_Multi_7_Kupione == false)
    {
        if (Money >= 50000)
        {
            Money = Money - 50000;
            document.getElementById("CritMulti_7-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_7-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_7_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_7-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_7-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_7-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_8()
{
    if (Crit_Multi_8_Kupione == false)
    {
        if (Money >= 75000)
        {
            Money = Money - 75000;
            document.getElementById("CritMulti_8-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_8-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_8_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_8-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_8-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_8-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_9()
{
    if (Crit_Multi_9_Kupione == false)
    {
        if (Money >= 100000)
        {
            Money = Money - 100000;
            document.getElementById("CritMulti_9-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_9-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_9_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_9-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_9-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_9-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function CritMulti_10()
{
    if (Crit_Multi_10_Kupione == false)
    {
        if (Money >= 250000)
        {
            Money = Money - 250000;
            document.getElementById("CritMulti_10-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("CritMulti_10-Kupione").innerHTML = "Już to kupiłeś";
            Crit_Multi_10_Kupione = true;
            Crit_Multi = Crit_Multi + 0.1;
        }
        else
        {
            document.getElementById("CritMulti_10-Cena").style.backgroundColor = "tomato";
            Biedak("CritMulti_10-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("CritMulti_10-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
    //! Income Multi
function Income_Multi_1()
{
    if (Income_Multi_1_Kupione == false)
    {
        if (Money >= 10000)
        {
            Money = Money - 10000;
            document.getElementById("IncomeMulti_1-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("IncomeMulti_1-Kupione").innerHTML = "Już to kupiłeś";
            Income_Multi_1_Kupione = true;
            Income_Multi = Income_Multi + 0.2;
        }
        else
        {
            document.getElementById("IncomeMulti_1-Cena").style.backgroundColor = "tomato";
            Biedak("IncomeMulti_1-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("IncomeMulti_1-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function Income_Multi_2()
{
    if (Income_Multi_2_Kupione == false)
    {
        if (Money >= 50000)
        {
            Money = Money - 50000;
            document.getElementById("IncomeMulti_2-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("IncomeMulti_2-Kupione").innerHTML = "Już to kupiłeś";
            Income_Multi_2_Kupione = true;
            Income_Multi = Income_Multi + 0.2;
        }
        else
        {
            document.getElementById("IncomeMulti_2-Cena").style.backgroundColor = "tomato";
            Biedak("IncomeMulti_2-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("IncomeMulti_2-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function Income_Multi_3()
{
    if (Income_Multi_3_Kupione == false)
    {
        if (Money >= 100000)
        {
            Money = Money - 100000;
            document.getElementById("IncomeMulti_3-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("IncomeMulti_3-Kupione").innerHTML = "Już to kupiłeś";
            Income_Multi_3_Kupione = true;
            Income_Multi = Income_Multi + 0.2;
        }
        else
        {
            document.getElementById("IncomeMulti_3-Cena").style.backgroundColor = "tomato";
            Biedak("IncomeMulti_3-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("IncomeMulti_3-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function Income_Multi_4()
{
    if (Income_Multi_4_Kupione == false)
    {
        if (Money >= 500000)
        {
            Money = Money - 500000;
            document.getElementById("IncomeMulti_4-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("IncomeMulti_4-Kupione").innerHTML = "Już to kupiłeś";
            Income_Multi_4_Kupione = true;
            Income_Multi = Income_Multi + 0.2;
        }
        else
        {
            document.getElementById("IncomeMulti_4-Cena").style.backgroundColor = "tomato";
            Biedak("IncomeMulti_4-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("IncomeMulti_4-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function Income_Multi_5()
{
    if (Income_Multi_5_Kupione == false)
    {
        if (Money >= 1000000)
        {
            Money = Money - 1000000;
            document.getElementById("IncomeMulti_5-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("IncomeMulti_5-Kupione").innerHTML = "Już to kupiłeś";
            Income_Multi_5_Kupione = true;
            Income_Multi = Income_Multi + 0.2;
        }
        else
        {
            document.getElementById("IncomeMulti_5-Cena").style.backgroundColor = "tomato";
            Biedak("IncomeMulti_5-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("IncomeMulti_5-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
    //! Super Clicker
function Super_Clicker_1()
{
    if (Super_Clicker_1_Kupione == false)
    {
        if (Money >= 100000)
        {
            Money = Money - 100000;
            document.getElementById("SuperClicker_1-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("SuperClicker_1-Kupione").innerHTML = "Już to kupiłeś";
            Super_Clicker_1_Kupione = true;
            Super_Clicker_Ammo = Super_Clicker_Ammo + 5;
        }
        else
        {
            document.getElementById("SuperClicker_1-Cena").style.backgroundColor = "tomato";
            Biedak("SuperClicker_1-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("SuperClicker_1-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function Super_Clicker_2()
{
    if (Money >= 50000)
    {
        Money = Money - 50000;
        Super_Clicker_Ammo = Super_Clicker_Ammo + 25;
    }
    else
    {
        document.getElementById("SuperClicker_2-Cena").style.backgroundColor = "tomato";
        Biedak("SuperClicker_2-Cena");
        var Timer = setTimeout(function()
            {
                document.getElementById("SuperClicker_2-Cena").style.backgroundColor = "initial";
            }, 2500);
    }
}
function Super_Clicker_3()
{
    if (Money >= 249999)
    {
        Money = Money - 249999;
        Super_Clicker_Ammo = Super_Clicker_Ammo + 250;
    }
    else
    {
        document.getElementById("SuperClicker_3-Cena").style.backgroundColor = "tomato";
        Biedak("SuperClicker_3-Cena");
        var Timer = setTimeout(function()
            {
                document.getElementById("SuperClicker_3-Cena").style.backgroundColor = "initial";
            }, 2500);
    }
}
function Super_Clicker_4()
{
    if (Super_Clicker_4_Kupione == false)
    {
        if (Money >= 5000000)
        {
            Money = Money - 5000000;
            document.getElementById("SuperClicker_4-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("SuperClicker_4-Kupione").innerHTML = "Już to kupiłeś";
            Super_Clicker_4_Kupione = true;
            Super_Clicker_Multi = Super_Clicker_Multi + 1;
        }
        else
        {
            document.getElementById("SuperClicker_4-Cena").style.backgroundColor = "tomato";
            Biedak("SuperClicker_4-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("SuperClicker_4-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function Super_Clicker_5()
{
    if (Super_Clicker_5_Kupione == false)
    {
        if (Money >= 9999999)
        {
            Money = Money - 9999999;
            document.getElementById("SuperClicker_5-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("SuperClicker_5-Kupione").innerHTML = "Już to kupiłeś";
            Super_Clicker_5_Kupione = true;
            Super_Clicker_Multi = Super_Clicker_Multi + 1;
        }
        else
        {
            document.getElementById("SuperClicker_5-Cena").style.backgroundColor = "tomato";
            Biedak("SuperClicker_5-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("SuperClicker_5-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
function Super_Clicker_6()
{
    if (Super_Clicker_6_Kupione == false)
    {
        if (Money >= 999999999)
        {
            Money = Money - 999999999;
            document.getElementById("SuperClicker_6-Kupione").style.backgroundColor = "lightgreen";
            document.getElementById("SuperClicker_6-Kupione").innerHTML = "Już to kupiłeś";
            Super_Clicker_6_Kupione = true;
            Super_Clicker_Multi = Super_Clicker_Multi + 1;
        }
        else
        {
            document.getElementById("SuperClicker_6-Cena").style.backgroundColor = "tomato";
            Biedak("SuperClicker_6-Cena");
            var Timer = setTimeout(function()
                {
                    document.getElementById("SuperClicker_6-Cena").style.backgroundColor = "initial";
                }, 2500);
        }
    }
}
//! Animacje
function Podmiana_Obrazka()
{
    document.getElementById("Clicker").setAttribute("src","Guzik_1-ON.svg"); //Podmiana na wciśnięty przycisk
    setTimeout(function()
    {
        Kliknieto_Niedawno = true;
        document.getElementById("Clicker").setAttribute("src","Guzik_1-OFF.svg"); //Podmiana na nie wciśnięty przycisk
    }, 100);
}
function Animacja()
{
    document.getElementById("Clicker").animate
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
function Animacja_Auto()
{
    document.getElementById("Auto_Clicker").animate
    (
        [
            {transform: "rotateX(0deg)"},
            {transform: "rotateX(360deg)"},
        ],
        {
            duration: 250,
            iterations: 1
        }
    );
}