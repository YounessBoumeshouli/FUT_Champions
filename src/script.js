let closeMenu = document.getElementById("closeMenu");
let closeMenu2 = document.getElementById("closeMenu2");
let formPlayer = document.getElementById("formPlayer");
let formPlayer2 = document.getElementById("formPlayer2");
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
let PAC2 = document.getElementById("PAC");
let SHO2 = document.getElementById("SHO");
let PAS2 = document.getElementById("PAS");
let DRI2 = document.getElementById("DRI");
let DEF2 = document.getElementById("DEF");
let PHY2 = document.getElementById("PHY");
let PlayerName = document.getElementById("PlayerName");
let imgPlayerSrc = document.getElementById("imgPlayerSrc");
let nationalite = document.getElementById("nationalite");
let Position2 = document.getElementById("Position2");
let PlayerName2 = document.getElementById("PlayerName2");
let imgPlayerSrc2 = document.getElementById("imgPlayerSrc2");
let nationalite2 = document.getElementById("nationalite2");
let club = document.getElementById("club");
let Rate = document.getElementById("Rate");
let club2 = document.getElementById("club2");
let Rate2 = document.getElementById("Rate2");
let formPlayer2button = document.getElementById("formPlayer2");
let playerInformations = document.getElementById("playerInformations");
let playerInformations2 = document.getElementById("playerInformations2");
document
  .getElementById("addPlayerButton")
  .addEventListener("click", function () {
    formPlayer2.style.display = "block";
    console.log("hello");
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

// })

formPlayer2button.addEventListener("click", function (e) {
  e.preventDefault();
  let infos = [];
  console.log("is clicked");
  if (
    PlayerName2.value != "" &&
    imgPlayerSrc2.value != "" &&
    Rate2.value != ""
  ) {
    console.log(PlayerName2.value);

    if (Position2.value[0] == "C" && Position2.value[1] != "B") {
      console.log("isHere");
      let box = [];
      let flag = false;
      for (let i = 0; i < 5; i++) {
        let classp = `centre${i}`;
        let l = document.getElementById(classp);

        if (l && !l.hasChildNodes()) {
          flag = true;
          box.push(classp);
          let player = {
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
          };
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          eventListenerfornotfill();
        }
      }
      if (flag == false) {
        console.log("isHere");
        let box = [];
        for (let i = 0; i < 10; i++) {
          let classp = `remplace${i}`;
          let l = document.getElementById(classp);

          if (l && !l.hasChildNodes()) {
            box.push(classp);
            let player = {
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
            };
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            eventListenerfornotfill();
          }
        }
      }
    }
    if (Position2.value[1] == "B") {
      console.log("isHere");
      let box = [];
      let flag = false;
      for (let i = 0; i < 5; i++) {
        let classp = `back${i}`;
        let l = document.getElementById(classp);

        if (l && !l.hasChildNodes()) {
          flag = true;
          box.push(classp);
          let player = {
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
          };
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          eventListenerfornotfill();
        }
      }
      if (flag == false) {
        console.log("isHere");
        let box = [];
        for (let i = 0; i < 10; i++) {
          let classp = `remplace${i}`;
          let l = document.getElementById(classp);

          if (l && !l.hasChildNodes()) {
            box.push(classp);
            let player = {
              id: box[0],
              name: PlayerName2.value,
              image: imgPlayerSrc2.value,
              rate: Rate2.value,
              flagUrl: nationaliteFlag2.value,
              position: Position2.value,
            };
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            eventListenerfornotfill();
          }
        }
      }
    }
    if (Position2.value[1] == "W" || Position2.value.includes("S")) {
      console.log("isHere");
      let box = [];
      let flag = false;
      for (let i = 0; i < 5; i++) {
        let classp = `attak${i}`;
        let l = document.getElementById(classp);

        if (l && !l.hasChildNodes()) {
          flag = true;
          box.push(classp);
          let player = {
            id: box[0],
            name: PlayerName2.value,
            image: imgPlayerSrc2.value,
            rate: Rate2.value,
            flagUrl: nationaliteFlag2.value,
            position: Position2.value,
            ClubUrl: ClubLogo2.value,
            PACstats: PAC2.value,
            SHOstats: SHO2.value,
            PASstats: PAS2.value,
            DRIstats: DRI2.value,
            DEFstats: DEF2.value,
            PHYstats: PHY2.value,
          };
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          eventListenerfornotfill();
        }
      }
      if (flag == false) {
        console.log("isHere");
        let box = [];
        for (let i = 0; i < 10; i++) {
          let classp = `remplace${i}`;
          let l = document.getElementById(classp);

          if (l && !l.hasChildNodes()) {
            box.push(classp);
            let player = {
              id: box[0],
              name: PlayerName2.value,
              image: imgPlayerSrc2.value,
              rate: Rate2.value,
              flagUrl: nationaliteFlag2.value,
              position: Position2.value,
              ClubUrl: ClubLogo2.value,
              PACstats: PAC2.value,
              SHOstats: SHO2.value,
              PASstats: PAS2.value,
              DRIstats: DRI2.value,
              DEFstats: DEF2.value,
              PHYstats: PHY2.value,
            };
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            eventListenerfornotfill();
          }
        }
      }
    }
    if (Position2.value.includes("G")) {
      console.log("isHere");
      let box = [];
      let flag = false;

      let l = document.getElementById("GoalKeeper");

      if (l && !l.hasChildNodes()) {
        flag = true;
        box.push(l.id);
        console.log("vyuv");
        let player = {
          id: box[0],
          name: PlayerName2.value,
          image: imgPlayerSrc2.value,
          rate: Rate2.value,
          flagUrl: nationaliteFlag2.value,
          position: Position2.value,
          ClubUrl: ClubLogo2.value,
          PACstats: PAC2.value,
          SHOstats: SHO2.value,
          PASstats: PAS2.value,
          DRIstats: DRI2.value,
          DEFstats: DEF2.value,
          PHYstats: PHY2.value,
        };
        players.push(player);
        localStorage.setItem("players", JSON.stringify(players));
        eventListenerfornotfill();
      }
      if (flag == false) {
        console.log("isHere");
        let box = [];
        for (let i = 0; i < 10; i++) {
          let classp = `remplace${i}`;
          let l = document.getElementById(classp);

          if (l && !l.hasChildNodes()) {
            box.push(classp);
            let player = {
              id: box[0],
              name: PlayerName2.value,
              image: imgPlayerSrc2.value,
              rate: Rate2.value,
              flagUrl: nationaliteFlag2.value,
              position: Position2.value,
              ClubUrl: ClubLogo2.value,
              PACstats: PAC2.value,
              SHOstats: SHO2.value,
              PASstats: PAS2.value,
              DRIstats: DRI2.value,
              DEFstats: DEF2.value,
              PHYstats: PHY2.value,
            };
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            eventListenerfornotfill();
          }
        }
      }
    }
  }
});

function search2(response) {
  response.forEach((element) => {
    // console.log(element)

    document.getElementById("search2").addEventListener("keyup", function (e) {
      let searchh2 = document.getElementById("search2").value.toLowerCase();

      if (element.firstName.toLowerCase().includes(searchh2)) {
        Rate2.value = element.overallRating;
        PlayerName2.value = element.lastName;
        Position2.value = element.position.shortLabel;
        imgPlayerSrc2.value = element.avatarUrl;
        nationalite2.value = element.nationality.label;
        nationaliteFlag2.value = element.nationality.imageUrl;
        club2.value = element.team.label;
        ClubLogo2.value = element.team.imageUrl;
        PAC2.value = element.stats.pac.value;
        SHO2.value = element.stats.sho.value;
        PAS2.value = element.stats.pas.value;
        DRI2.value = element.stats.dri.value;
        DEF2.value = element.stats.def.value;
        PHY2.value = element.stats.phy.value;
        playerInformations2.innerHTML = `
       <img class="w-16" src="${element.avatarUrl}" >`;
      }
    });
  });
}

function search(response) {
  response.forEach((element) => {
    console.log(element.position.shortLabel);
    // console.log(element)

    document.getElementById("search").addEventListener("keyup", function (e) {
      let searchh = document.getElementById("search").value.toLowerCase();

      if (element.firstName.toLowerCase().includes(searchh)) {
        Rate.value = element.overallRating;
        PlayerName.value = element.lastName;
        Position.value = element.position.shortLabel;
        imgPlayerSrc.value = element.avatarUrl;
        nationalite.value = element.nationality.label;
        nationaliteFlag.value = element.nationality.imageUrl;
        club.value = element.team.label;
        ClubLogo.value = element.team.imageUrl;
        PAC2.value = element.stats.pac.value;
        SHO.value = element.stats.sho.value;
        PAS.value = element.stats.pas.value;
        DRI.value = element.stats.dri.value;
        DEF.value = element.stats.def.value;
        PHY.value = element.stats.phy.value;
        playerInformations.innerHTML = `
     <img class="w-16" src="${element.avatarUrl}" >`;
      }
    });
  });
}

fetch("http://localhost:3000/items")
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    JSON.parse(localStorage.getItem("players")) || [];
    search(response);
    search2(response);
    fillwithLocalStorage();
    eventListenerfornotfill();
  })
  .catch((error) => console.error("Error:", error));

localStorageFormation();

let attack, z, y;

let form = document.getElementById("form");
let formation = document.getElementById("formation");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(formation.value);
  switch (formation.value) {
    case "442":
      fill(2, 4, 4);
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;
    case "433":
      fill(3, 3, 4);
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;
    case "343":
      fill(3, 4, 3);
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;
    case "523":
      fill(3, 2, 5);
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;

    default:
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;
  }
});
function localStorageFormation() {
  let f = JSON.parse(localStorage.getItem("formationL")) || "442";
  console.log(typeof f);
  let l = f[0];
  let m = f[1];
  let n = f[2];
  fill(+n, +m, +l);
}

function fill(l, m, n) {
  let f = `${n}${m}${l}`;
  localStorage.setItem("formationL", JSON.stringify(f));
  console.log(f);
  let x = document.querySelector("#terrain").firstElementChild;
  x.innerHTML = "";
  x.className.className = "";
  x.classList.add("flex");
  x.classList.add("h-12");
  x.classList.add("justify-around");
  for (let i = 0; i < l; i++) {
    let div = document.createElement("div");
    div.id = "attak" + i;

    div.classList.add("notFill");
  
  
    x.appendChild(div);
  }
  let y = document.getElementById("terrain").children[1];
  y.innerHTML = "";
  y.className = "";
  y.classList.add("flex");
  y.classList.add("justify-around");
  for (let i = 0; i < m; i++) {
    let div = document.createElement("div");
    div.id = "centre" + i;

    div.classList.add("notFill");
    y.appendChild(div);
  }
  let z = document.getElementById("terrain").children[2];
  z.innerHTML = "";
  z.className = "";
  z.classList.add("flex");
  z.classList.add("justify-between");
  for (let i = 0; i < n; i++) {
    let div = document.createElement("div");
    div.id = "back" + i;

    div.classList.add("notFill");

    z.appendChild(div);
  }
  let h = document.getElementById("terrain").children[3];
  h.innerHTML = "";
  h.className = "";
  h.classList.add("flex");
  h.classList.add("justify-center");
  let divG = document.createElement("div");
  divG.id = "GoalKeeper";
  divG.classList.add("notFill");
  h.appendChild(divG);
  l = document.querySelectorAll("#remplace DIV");
  if (l) {
    console.log(l.length);
  } else {
    console.log("not work");
  }
  let i = 0;
  l.forEach((le) => {
    le.id = "remplace" + i;
    le.classList.add("notFill");
    i++;
  });
}

eventListenerfornotfill();
function handleSubmit(event) {
  event.preventDefault();

  const nf = formPlayer.currentTarget;
  console.log(nf);
  if (nf) {
    Disable(nf);
    console.log(nf);
    console.log(nf.id);
    let player = {
      id: nf.id,
      name: PlayerName.value,
      image: imgPlayerSrc.value,
      rate: Rate.value,
      position: Position.value,
      flagUrl: nationaliteFlag.value,
      ClubUrl: ClubLogo.value,
      PACstats: PAC.value,
      SHOstats: SHO.value,
      PASstats: PAS.value,
      DRIstats: DRI.value,
      DEFstats: DEF.value,
      PHYstats: PHY.value,
    };

    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
    eventListenerfornotfill();
  }

  formPlayer.style.display = "none";
  formPlayer.removeEventListener("submit", handleSubmit);
  formPlayer.currentTarget = null;
}

function eventListenerfornotfill() {
  let NOTFILL = document.querySelectorAll(".notFill");
  NOTFILL.forEach((nf) => {
    
   
    nf.addEventListener("click", function () {
      console.log("is clicked");

      formPlayer.style.display = "block";
      formPlayer.currentTarget = nf;
      console.log(nf);

      formPlayer.addEventListener("submit", removeClass(nf));

      formPlayer.addEventListener("submit", handleSubmit);
    });
  });
}
function Disable(nf) {
  console.log(nf);
  if (nf.className === "") {
    nf.classList.add("disable");
  }
}

closeMenu.addEventListener("click", function () {
  formPlayer.style.display = "none"; // Hide the form
  formPlayer.removeEventListener("submit", handleSubmit); // Remove the submit listener
  formPlayer.currentTarget = null; // Clear current target
});
if (players.length < 1) {
  let player = {
    id: "classp",
    name: "playerName",
    image: "playerImage",
    rate: "playerRate",
  };

  players.push(player);
  localStorage.setItem("players", JSON.stringify(players));
}
function fillwithLocalStorage() {
  let players = JSON.parse(localStorage.getItem("players")) || [];
  players.forEach((element) => {
    
    let thisdiv = document.getElementById(element.id);
   
    if (thisdiv) {
      
      thisdiv.setAttribute("draggable", true);
      thisdiv.addEventListener("dragstart",function(e){
        let div = e.target
        console.log('hello')
        
      })
      thisdiv.innerHTML = `
 <section   class="sectionRemplace flex ">
  <span  class="relative spanRomplacent">
    <p class=" text-yellow-300 text-center RateText">${element.rate}</p>
    <p class=" text-center text-white playerPostion">${element.position}</p>
    <img class="flags" src="${element.flagUrl}" alt="Flag">
    <img class="logos" src="${element.ClubUrl}" alt="Club">
  </span>
  <section>
    <img class="imageCard" src="${element.image}" alt="Player">
  </section>
</section>

<h1 class=" text-center text-white playerName">${element.name}</h1>

<section class="flex  text-yellow-400 spanStats">
  <section class="firstStats">
    <p class="text-[8px]">PAC ${element.PACstats}</p>
    <p class="text-[8px]">SHO ${element.SHOstats}</p>
    <p class="text-[8px]">PAS ${element.PASstats}</p>
  </section>
  <section class=" firstStats">
    <p class="text-[8px]">DRI ${element.DRIstats}</p>
    <p class="text-[8px]">DEF ${element.DEFstats}</p>
    <p class="text-[8px]">PHY ${element.PHYstats}</p>
  </section>
</section>

  `;
  
    }
  });
}

fillwithLocalStorage();

function removeClass(nf) {
  console.log(nf);

  nf.className = "";
}


const setupDragAndDrop = () => {

  const Cards = document.querySelectorAll(".notFill");
  
  Cards.forEach(card => {
      card.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData('text/plain', card.dataset.id);
          card.classList.add("Dragged");
          setTimeout(() => { card.children[0].style.display = 'none';
            card.children[1].style.display = 'none';
            card.children[2].style.display = 'none';
           }, 1000);
      });
      card.addEventListener("dragend", (e) => {
        card.children[0].style.display = 'block';
        card.children[1].style.display = 'block';
        card.children[2].style.display = 'block';
      });
  });

  
  Cards.forEach(card => {
      card.addEventListener('dragover', (e) => e.preventDefault());
      card.addEventListener('drop', (e) => handleDrop(e, card));
  });
}

const handleDrop = (e, card) => {
  e.preventDefault();
    const targetCard = e.target.id;
  console.log(targetCard)

  console.log("is worked",card)
 
}
window.onload = setupDragAndDrop()