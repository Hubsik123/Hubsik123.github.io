//Grim Dawn
function GD() 
    {
    // Item #1
        var GD_Min_1 = Number(document.getElementById("GD_Min_1").value);
        var GD_Max_1 = Number(document.getElementById("GD_Max_1").value);
        var GD_Speed_1 = Number(document.getElementById("GD_Speed_1").value);
        // Stats
        var GD_Avg_1 = (GD_Min_1+GD_Max_1)/2;
        var GD_Dps_1 = ((GD_Min_1 + GD_Max_1)/2) * GD_Speed_1;
    // Item #2
        var GD_Min_2 = Number(document.getElementById("GD_Min_2").value);
        var GD_Max_2 = Number(document.getElementById("GD_Max_2").value);
        var GD_Speed_2 = Number(document.getElementById("GD_Speed_2").value);
        // Stats
        var GD_Avg_2 = (GD_Min_2+GD_Max_2)/2;
        var GD_Dps_2 = ((GD_Min_2 + GD_Max_2)/2) * GD_Speed_2;
    // Wynik
        document.getElementById("GD_Avg_1").innerHTML = GD_Avg_1;
        document.getElementById("GD_Avg_2").innerHTML = GD_Avg_2;
        document.getElementById("GD_Dps_1").innerHTML = GD_Dps_1;
        document.getElementById("GD_Dps_2").innerHTML = GD_Dps_2;
        switch(true)
        {
            case GD_Avg_1 > GD_Avg_2:
                document.getElementById("GD_Avg_1").style.backgroundColor = "lightgreen";
                document.getElementById("GD_Avg_2").style.backgroundColor = "tomato";
                break;
            case GD_Avg_1 < GD_Avg_2:
                document.getElementById("GD_Avg_1").style.backgroundColor = "tomato";
                document.getElementById("GD_Avg_2").style.backgroundColor = "lightgreen";
                break;
            case GD_Avg_1 == GD_Avg_2:
                document.getElementById("GD_Avg_1").style.backgroundColor = "lightblue";
                document.getElementById("GD_Avg_2").style.backgroundColor = "lightblue";
                break;
        }
        switch(true)
        {
            case GD_Dps_1 > GD_Dps_2:
                document.getElementById("GD_Dps_1").style.backgroundColor = "lightgreen";
                document.getElementById("GD_Dps_2").style.backgroundColor = "tomato";
                break;
            case GD_Dps_1 < GD_Dps_2:
                document.getElementById("GD_Dps_1").style.backgroundColor = "tomato";
                document.getElementById("GD_Dps_2").style.backgroundColor = "lightgreen";
                break;
            case GD_Dps_1 == GD_Dps_2:
                document.getElementById("GD_Dps_1").style.backgroundColor = "lightblue";
                document.getElementById("GD_Dps_2").style.backgroundColor = "lightblue";
                break;
        }
    }
// Borderlands
function BL()
    {
    // Item #1
        var BL_Damage_1 = Number(document.getElementById("BL_Damage_1").value);
        var BL_FireRate_1 = Number(document.getElementById("BL_FireRate_1").value);
        var BL_MagazineSize_1 = Number(document.getElementById("BL_MagazineSize_1").value);
        var BL_BulletCost_1 = Number(document.getElementById("BL_BulletCost_1").value);
        var BL_ReloadSpeed_1 = Number(document.getElementById("BL_ReloadSpeed_1").value);
        // Stats
        var BL_DPS_1 = BL_Damage_1 * BL_FireRate_1;
        var BL_ShotsPerMag_1 = Math.ceil(BL_MagazineSize_1 / BL_BulletCost_1);
        var BL_TimeToEmptyMag_1 = BL_ShotsPerMag_1 / BL_FireRate_1;
        //var BL_DPSWithReload_1 = (BL_DPS_1 * BL_TimeToEmptyMag_1) / BL_ReloadSpeed_1;
        //var BL_DPSWithReload_1 = (BL_Damage_1 + BL_MagazineSize_1) / ((BL_MagazineSize_1/BL_ReloadSpeed_1)) + BL_ReloadSpeed_1;
        var BL_DmgPerClip_1 = BL_Damage_1 * BL_ShotsPerMag_1;
    // Item #2
        var BL_Damage_2 = Number(document.getElementById("BL_Damage_2").value);
        var BL_FireRate_2 = Number(document.getElementById("BL_FireRate_2").value);
        var BL_MagazineSize_2 = Number(document.getElementById("BL_MagazineSize_2").value);
        var BL_BulletCost_2 = Number(document.getElementById("BL_BulletCost_2").value);
        var BL_ReloadSpeed_2 = Number(document.getElementById("BL_ReloadSpeed_2").value);
        // Stats
        var BL_DPS_2 = BL_Damage_2 * BL_FireRate_2;
        var BL_ShotsPerMag_2 = Math.ceil(BL_MagazineSize_2 / BL_BulletCost_2);
        var BL_TimeToEmptyMag_2 = BL_ShotsPerMag_2 / BL_FireRate_2;
        //var BL_DPSWithReload_2 = BL_DPS_2 / (BL_ReloadSpeed_2 + BL_TimeToEmptyMag_2);
        var BL_DmgPerClip_2 = BL_Damage_2 * BL_ShotsPerMag_2;
    // Wynik
        document.getElementById("BL_DPS_1").innerHTML = BL_DPS_1;
        document.getElementById("BL_DPS_2").innerHTML = BL_DPS_2;
        //document.getElementById("BL_DPSWithReload_1").innerHTML = BL_DPSWithReload_1;
        //document.getElementById("BL_DPSWithReload_2").innerHTML = BL_DPSWithReload_2;
        document.getElementById("BL_DmgPerClip_1").innerHTML = BL_DmgPerClip_1;
        document.getElementById("BL_DmgPerClip_2").innerHTML = BL_DmgPerClip_2;
        document.getElementById("BL_ShotsPerMag_1").innerHTML = BL_ShotsPerMag_1;
        document.getElementById("BL_ShotsPerMag_2").innerHTML = BL_ShotsPerMag_2;
        document.getElementById("BL_TimeToEmptyMag_1").innerHTML = BL_TimeToEmptyMag_1;
        document.getElementById("BL_TimeToEmptyMag_2").innerHTML = BL_TimeToEmptyMag_2;
        switch(true) // Damage Per Second
        {
            case BL_DPS_1 > BL_DPS_2:
                document.getElementById("BL_DPS_1").style.backgroundColor = "lightgreen";
                document.getElementById("BL_DPS_2").style.backgroundColor = "tomato";
                break;
            case BL_DPS_1 < BL_DPS_2:
                document.getElementById("BL_DPS_1").style.backgroundColor = "tomato";
                document.getElementById("BL_DPS_2").style.backgroundColor = "lightgreen";
                break;
            case BL_DPS_1 == BL_DPS_2:
                document.getElementById("BL_DPS_1").style.backgroundColor = "lightblue";
                document.getElementById("BL_DPS_2").style.backgroundColor = "lightblue";
                break;
        }
        switch(true) // Shots Per Mag
        {
            case BL_ShotsPerMag_1 > BL_ShotsPerMag_2:
                document.getElementById("BL_ShotsPerMag_1").style.backgroundColor = "lightgreen";
                document.getElementById("BL_ShotsPerMag_2").style.backgroundColor = "tomato";
                break;
            case BL_ShotsPerMag_1 < BL_ShotsPerMag_2:
                document.getElementById("BL_ShotsPerMag_1").style.backgroundColor = "tomato";
                document.getElementById("BL_ShotsPerMag_2").style.backgroundColor = "lightgreen";
                break;
            case BL_ShotsPerMag_1 == BL_ShotsPerMag_2:
                document.getElementById("BL_ShotsPerMag_1").style.backgroundColor = "lightblue";
                document.getElementById("BL_ShotsPerMag_2").style.backgroundColor = "lightblue";
                break;
        }
        switch(true) // Time To Empty Mag
        {
            case BL_TimeToEmptyMag_1 < BL_TimeToEmptyMag_2:
                document.getElementById("BL_TimeToEmptyMag_1").style.backgroundColor = "lightgreen";
                document.getElementById("BL_TimeToEmptyMag_2").style.backgroundColor = "tomato";
                break;
            case BL_TimeToEmptyMag_1 >   BL_TimeToEmptyMag_2:
                document.getElementById("BL_TimeToEmptyMag_1").style.backgroundColor = "tomato";
                document.getElementById("BL_TimeToEmptyMag_2").style.backgroundColor = "lightgreen";
                break;
            case BL_TimeToEmptyMag_1 == BL_TimeToEmptyMag_2:
                document.getElementById("BL_TimeToEmptyMag_1").style.backgroundColor = "lightblue";
                document.getElementById("BL_TimeToEmptyMag_2").style.backgroundColor = "lightblue";
                break;
        }
        switch(true) // Damage Per Clip
        {
            case BL_DmgPerClip_1 > BL_DmgPerClip_2:
                document.getElementById("BL_DmgPerClip_1").style.backgroundColor = "lightgreen";
                document.getElementById("BL_DmgPerClip_2").style.backgroundColor = "tomato";
                break;
            case BL_DmgPerClip_1 < BL_DmgPerClip_2:
                document.getElementById("BL_DmgPerClip_1").style.backgroundColor = "tomato";
                document.getElementById("BL_DmgPerClip_2").style.backgroundColor = "lightgreen";
                break;
            case BL_DmgPerClip_1 == BL_DmgPerClip_2:
                document.getElementById("BL_DmgPerClip_1").style.backgroundColor = "lightblue";
                document.getElementById("BL_DmgPerClip_2").style.backgroundColor = "lightblue";
                break;
        }
}