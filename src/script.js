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
function Form2(){
    formPlayer2button.addEventListener("click", function (e) {
      e.preventDefault();
    
      if (
        PlayerName2.value != "" && imgPlayerSrc2.value != "" && Rate2.value != "") {
        console.log(PlayerName2.value);
        console.log(leagueName2.value)
        if (Position2.value[0] == "C" && Position2.value[1] != "B") {
          console.log("isHere");
          let box = [];
          let flag = false;
          let player;
          for (let i = 0; i < 5; i++) {
            let classp = `centre${i}`;
            let l = document.getElementById(classp);
    
            if (l && !l.hasChildNodes()) {
              flag = true;
              box.push(classp);
              player = {
                id: box[0],
                name: PlayerName2.value,
                image: imgPlayerSrc2.value,
                rate: Rate2.value,
                position: Position2.value,
                flagUrl: nationaliteFlag2.value,
                ClubUrl: ClubLogo2.value,
                PACstats: PAC2.value,
                SHOstats: SHO2.value,
                PASstats: PAS2.value,
                DRIstats: DRI2.value,
                DEFstats: DEF2.value,
                PHYstats: PHY2.value,
                leagueName :leagueName2.value
    
              };
    
              eventListenerfornotfill();
              break; // Stop the loop once a slot is filled
            }
          }
          if (player) {
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            resetInputs(); 
            fillwithLocalStorage();
          
            }
          if (flag == false) {
            for (let i = 0; i < 10; i++) {
              let classp = `remplace${i}`;
              let l = document.getElementById(classp);
    
              if (l && !l.hasChildNodes()) {
                box.push(classp);
                player = {
                  id: box[0],
                  name: PlayerName2.value,
                  image: imgPlayerSrc2.value,
                  rate: Rate2.value,
                  position: Position2.value,
                  flagUrl: nationaliteFlag2.value,
                  ClubUrl: ClubLogo2.value,
                  PACstats: PAC2.value,
                  SHOstats: SHO2.value,
                  PASstats: PAS2.value,
                  DRIstats: DRI2.value,
                  DEFstats: DEF2.value,
                  PHYstats: PHY2.value,
                  leagueName : leagueName2.value
                };
    
                eventListenerfornotfill();
                break; // Stop the loop once a slot is filled
              }
            }
            if (player) {
              players.push(player);
              localStorage.setItem("players", JSON.stringify(players));
              fillwithLocalStorage();
              resetInputs(); 
              
            }
          }
        }
        if (Position2.value.includes("M")) {
          console.log("isHere");
          let box = [];
          let flag = false;
          let player;
          for (let i = 0; i < 5; i++) {
            let classp = `back${i}`;
            let l = document.getElementById(classp);
    
            if (l && !l.hasChildNodes()) {
              flag = true;
              box.push(classp);
              player = {
                id: box[0],
                name: PlayerName2.value,
                image: imgPlayerSrc2.value,
                rate: Rate2.value,
                position: Position2.value,
                flagUrl: nationaliteFlag2.value,
                ClubUrl: ClubLogo2.value,
                PACstats: PAC2.value,
                SHOstats: SHO2.value,
                PASstats: PAS2.value,
                DRIstats: DRI2.value,
                DEFstats: DEF2.value,
                PHYstats: PHY2.value,
                leagueName :leagueName2.value
    
              };
    
              eventListenerfornotfill();
              break; // Stop the loop once a slot is filled
            }
          }
          if (player) {
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            resetInputs();
            fillwithLocalStorage(); 
            }
          if (flag == false) {
            for (let i = 0; i < 10; i++) {
              let classp = `remplace${i}`;
              let l = document.getElementById(classp);
    
              if (l && !l.hasChildNodes()) {
                box.push(classp);
                player = {
                  id: box[0],
                  name: PlayerName2.value,
                  image: imgPlayerSrc2.value,
                  rate: Rate2.value,
                  position: Position2.value,
                  flagUrl: nationaliteFlag2.value,
                  ClubUrl: ClubLogo2.value,
                  PACstats: PAC2.value,
                  SHOstats: SHO2.value,
                  PASstats: PAS2.value,
                  DRIstats: DRI2.value,
                  DEFstats: DEF2.value,
                  PHYstats: PHY2.value,
                  leagueName : leagueName2.value
                };
    
                eventListenerfornotfill();
                break; // Stop the loop once a slot is filled
              }
            }
            if (player) {
              players.push(player);
              localStorage.setItem("players", JSON.stringify(players));
              resetInputs(); 
              fillwithLocalStorage();
            }
          }
        }
        if (Position2.value.includes("S") || Position2.value[1]== "W") {
          console.log("isHere Attak");
          let box = [];
          let flag = false;
          let player;
          for (let i = 0; i < 5; i++) {
            let classp = `attak${i}`;
            let l = document.getElementById(classp);
            if (l && !l.hasChildNodes()) {
              flag = true;
              box.push(classp);
              player = {
                id: box[0],
                name: PlayerName2.value,
                image: imgPlayerSrc2.value,
                rate: Rate2.value,
                position: Position2.value,
                flagUrl: nationaliteFlag2.value,
                ClubUrl: ClubLogo2.value,
                PACstats: PAC2.value,
                SHOstats: SHO2.value,
                PASstats: PAS2.value,
                DRIstats: DRI2.value,
                DEFstats: DEF2.value,
                PHYstats: PHY2.value,
                leagueName :leagueName2.value
    
              };
    
              eventListenerfornotfill();
              break; // Stop the loop once a slot is filled
            }
          }
          if (player) {
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            resetInputs(); 
            fillwithLocalStorage();
            }
          if (flag == false) {
            for (let i = 0; i < 10; i++) {
              let classp = `remplace${i}`;
              let l = document.getElementById(classp);
    
              if (l && !l.hasChildNodes()) {
                box.push(classp);
                player = {
                  id: box[0],
                  name: PlayerName2.value,
                  image: imgPlayerSrc2.value,
                  rate: Rate2.value,
                  position: Position2.value,
                  flagUrl: nationaliteFlag2.value,
                  ClubUrl: ClubLogo2.value,
                  PACstats: PAC2.value,
                  SHOstats: SHO2.value,
                  PASstats: PAS2.value,
                  DRIstats: DRI2.value,
                  DEFstats: DEF2.value,
                  PHYstats: PHY2.value,
                  leagueName : leagueName2.value
                };
                  
                eventListenerfornotfill();
                break; // Stop the loop once a slot is filled
              }
            }
            if (player) {
              players.push(player);
              localStorage.setItem("players", JSON.stringify(players));
              resetInputs(); 
              fillwithLocalStorage();
            }
          }
        }
        if (Position2.value.includes("GK")) {
          console.log("isHere goalKeeper");
          let box = [];
          let flag = false;
          let player;
            let classp = 'GoalKeeper';
            let l = document.getElementById(classp);
          console.log(l)
            if (l && !l.hasChildNodes()) {
              flag = true;
              box.push(classp);
              player = {
                id: box[0],
                name: PlayerName2.value,
                image: imgPlayerSrc2.value,
                rate: Rate2.value,
                position: Position2.value,
                flagUrl: nationaliteFlag2.value,
                ClubUrl: ClubLogo2.value,
                PACstats: PAC2.value,
                SHOstats: SHO2.value,
                PASstats: PAS2.value,
                DRIstats: DRI2.value,
                DEFstats: DEF2.value,
                PHYstats: PHY2.value,
                leagueName :leagueName2.value
    
              };
    
              eventListenerfornotfill();
            }
          
          if (player) {
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            resetInputs(); 
            fillwithLocalStorage();
            }
          if (flag == false) {
            for (let i = 0; i < 10; i++) {
              let classp = `remplace${i}`;
              let l = document.getElementById(classp);
    
              if (l && !l.hasChildNodes()) {
                box.push(classp);
                player = {
                  id: box[0],
                  name: PlayerName2.value,
                  image: imgPlayerSrc2.value,
                  rate: Rate2.value,
                  position: Position2.value,
                  flagUrl: nationaliteFlag2.value,
                  ClubUrl: ClubLogo2.value,
                  PACstats: PAC2.value,
                  SHOstats: SHO2.value,
                  PASstats: PAS2.value,
                  DRIstats: DRI2.value,
                  DEFstats: DEF2.value,
                  PHYstats: PHY2.value,
                  leagueName : leagueName2.value
                };
    
                eventListenerfornotfill();
                break; // Stop the loop once a slot is filled
              }
            }
            if (player) {
              players.push(player);
              localStorage.setItem("players", JSON.stringify(players));
              resetInputs(); 
              fillwithLocalStorage();
            }
          }
          console.log(flag)
        }
  console.log(Position2.value[0])
      }
    });
  }
  
  function resetInputs() {
    PlayerName2.value = "";
    imgPlayerSrc2.value = "";
    Rate2.value = "";
    Position2.value = "";
    nationaliteFlag2.value = "";
    ClubLogo2.value = "";
    PAC2.value = "";
    SHO2.value = "";
    PAS2.value = "";
    DRI2.value = "";
    DEF2.value = "";
    PHY2.value = "";
  }