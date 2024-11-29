let closeMenu = document.getElementById("closeMenu");
let closeMenu2 = document.getElementById("closeMenu2");
let closeMenu3 = document.getElementById("closeMenu3");
let formPlayer = document.getElementById("formPlayer");
let formPlayer3 = document.getElementById("formPlayer3")
let formPlayer2 = document.getElementById("formPlayer2");
let leagueName =document.getElementById("leagueName")
let leagueName2 =document.getElementById("leagueName2")
let leagueName3 =document.getElementById("leagueName3")
let nationaliteFlag = document.getElementById("nationaliteFlag");
let ClubLogo = document.getElementById("ClubLogo");
let ClubLogo2 = document.getElementById("ClubLogo2");
let nationaliteFlag2 = document.getElementById("nationaliteFlag2");
let Position = document.getElementById("Position");
let PAC = document.getElementById("PAC");
let SHO = document.getElementById("SHO");
let PAS = document.getElementById("PAS");
let DRI = document.getElementById("DRI");
let DEF = document.getElementById("DEF");
let PHY = document.getElementById("PHY");
let PAC2 = document.getElementById("PAC2");
let SHO2 = document.getElementById("SHO2");
let PAS2 = document.getElementById("PAS2");
let DRI2 = document.getElementById("DRI2");
let DEF2 = document.getElementById("DEF2");
let PHY2 = document.getElementById("PHY2");
let PAC3 = document.getElementById("PAC3");
let SHO3 = document.getElementById("SHO3");
let PAS3 = document.getElementById("PAS3");
let DRI3 = document.getElementById("DRI3");
let DEF3 = document.getElementById("DEF3");
let PHY3 = document.getElementById("PHY3");
let PlayerName = document.getElementById("PlayerName");
let PlayerName3 = document.getElementById("PlayerName3");
let imgPlayerSrc = document.getElementById("imgPlayerSrc");
let nationalite = document.getElementById("nationalite");
let Position2 = document.getElementById("Position2");
let PlayerName2 = document.getElementById("PlayerName2");
let imgPlayerSrc2 = document.getElementById("imgPlayerSrc2");
let nationalite2 = document.getElementById("nationalite2");
let ClubLogo3 =document.getElementById("ClubLogo3")
let  club3 =document.getElementById("club3")
let nationaliteFlag3 = document.getElementById("nationaliteFlag3")
let nationalite3= document.getElementById("nationalite3")
let imgPlayerSrc3=document.getElementById("imgPlayerSrc3")
let Position3 = document.getElementById("Position3")
let Rate3 = document.getElementById("Rate3")
let club = document.getElementById("club");
let Rate = document.getElementById("Rate");
let club2 = document.getElementById("club2");
let Rate2 = document.getElementById("Rate2");
let formPlayer2button = document.getElementById("formPlayer2");
let playerInformations3 = document.getElementById("playerInformations3")
let playerInformations = document.getElementById("playerInformations");
let playerInformations2 = document.getElementById("playerInformations2");
document.getElementById("fillAuto")
document.getElementById("addPlayerButton").addEventListener("click", function () {
    formPlayer2.style.display = "block";
    console.log("hello");
  });
  closeMenu3.addEventListener("click", function () {
    formPlayer.style.display = "none";
    formPlayer2.style.display = "none";
    formPlayer3.style.display = "none";
  });
closeMenu.addEventListener("click", function () {
  formPlayer.style.display = "none";
  formPlayer2.style.display = "none";
});
closeMenu2.addEventListener("click", function () {
  formPlayer.style.display = "none";
  formPlayer2.style.display = "none";
});
let players = JSON.parse(localStorage.getItem("players")) || [];
