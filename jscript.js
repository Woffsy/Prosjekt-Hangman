const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = 500;
const height = 500;

canvas.width = width;
canvas.height = height;

function feil1() {
  ctx.beginPath();
  ctx.moveTo(200, 300);
  ctx.lineTo(225, 275);
  ctx.lineTo(250, 300);
  ctx.stroke();
}

function feil2() {
  ctx.beginPath();
  ctx.moveTo(225, 275);
  ctx.lineTo(225, 175);
  ctx.lineTo(300, 175);
  ctx.stroke();
  ctx.moveTo(225, 200);
  ctx.lineTo(250, 175);
  ctx.stroke();
}

function feil3() {
  ctx.beginPath();
  ctx.moveTo(300, 175);
  ctx.lineTo(300, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(300, 210, 10, 0, 2 * Math.PI);
  ctx.stroke();
}

function feil4() {
  ctx.beginPath();
  ctx.moveTo(300, 220);
  ctx.lineTo(300, 250);
  ctx.stroke();
}

function feil5() {
  ctx.beginPath();
  ctx.moveTo(300, 220);
  ctx.lineTo(285, 235);
  ctx.stroke();
}
function feil6() {
  ctx.beginPath();
  ctx.moveTo(300, 220);
  ctx.lineTo(315, 235);
  ctx.stroke();
}
function feil7() {
  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(285, 265);
  ctx.stroke();
}
function feil8() {
  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(315, 265);
  ctx.stroke();
}
function losepopup() {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.left = "50%";
  popup.style.top = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.display = "flex";
  popup.style.flexDirection = "column";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.width = "500px";
  popup.style.height = "500px";
  popup.style.padding = "20px";
  popup.style.backgroundColor = "white";
  popup.style.border = "2px solid black";
  popup.style.zIndex = "1000";
  popup.innerHTML = "<p>Du tapte!</p><button id='closePopup'>Lukk</button>";
  document.body.appendChild(popup);

  document.getElementById("closePopup").addEventListener("click", function () {
    document.body.removeChild(popup);
  });
}

function winpopup() {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.left = "50%";
  popup.style.top = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.display = "flex";
  popup.style.flexDirection = "column";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.width = "500px";
  popup.style.height = "500px";
  popup.style.padding = "20px";
  popup.style.backgroundColor = "white";
  popup.style.border = "2px solid black";
  popup.style.zIndex = "1000";
  popup.innerHTML = "<p>Du vant!</p><button id='closePopup'>Lukk</button>";
  document.body.appendChild(popup);

  document.getElementById("closePopup").addEventListener("click", function () {
    document.body.removeChild(popup);
  });
}
//----------------------------------------------------------------------------------------------------

const ordliste = [
  "hei",
  "hallo",
  "hade",
  "hund",
  "katt",
  "fisk",
  "hest",
  "ku",
  "gris",
  "menneske",
  "velkommen",
  "godmorgen",
  "godnatt",
  "godkveld",
  "hangman",
];

let ord2 = [];

let gjett = "";
let gjettetbokstaver = [];
const bokstaver = document.getElementById("bokstaver");

const ordet = document.getElementById("ordet");
let ord3 = [];

function ordsys() {
  var ord = Math.floor(Math.random() * ordliste.length);
  ord2 = [];
  ord2 = ordliste[ord].split("");
  bokstaver.innerHTML = " ";
}
ordsys();

//----------------------------------------------------------------------------------------------------

function NyttOrd() {
  ord3 = [];
  for (i = 0; i < ord2.length; i++) {
    ord3.push("_");
  }
  ordet.innerHTML = ord3.join(" ");
  gjettetbokstaver = [];
  bokstaver.innerHTML = gjettetbokstaver.join(" ");
}

NyttOrd();

//----------------------------------------------------------------------------------------------------

function swap(gjett) {
  for (let i = 0; i < ord2.length; i++) {
    if (ord2[i] === gjett) {
      ord3[i] = gjett;
    }
  }
  ordet.innerHTML = ord3.join(" ");
}

//----------------------------------------------------------------------------------------------------
const inputField = document.getElementById("letterInput");

function bokstavsys() {
  let gjett = inputField.value;
  if (ord2.includes(gjett)) {
    swap(gjett);
    if (ord3.join("") == ord2.join("")) {
      winpopup();
      ordsys();
      NyttOrd();
      ctx.clearRect(0, 0, width, height);
      feil = 0;
      ordet.innerHTML = ord3.join(" ");
      setTimeout(() => {
        gjettetbokstaver = [];
        bokstaver.innerHTML = " ";
      }, 100);
    }
  } else if (gjettetbokstaver.includes(gjett) == false) {
    feilsys();
  }
  inputField.value = "";
}

function saveLetter() {
  gjett = inputField.value;
  bokstavsys();
  if (gjettetbokstaver.includes(gjett) == false) {
    if (ord2.includes(gjett) == false) {
      gjettetbokstaver.push(gjett);
      gjettetbokstaver.sort();
      bokstaver.innerHTML = gjettetbokstaver.join(" ");
    }
  }
}
//----------------------------------------------------------------------------------------------------

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    saveLetter();
  }
});

//----------------------------------------------------------------------------------------------------
//Feil er lagret og tegner deler av figuren etter at du får så mange feil
var feil = 0;

function feilsys() {
  feil++;

  if (feil == 1) {
    feil1();
  }
  if (feil == 2) {
    feil2();
  }
  if (feil == 3) {
    feil3();
  }
  if (feil == 4) {
    feil4();
  }
  if (feil == 5) {
    feil5();
  }
  if (feil == 6) {
    feil6();
  }
  if (feil == 7) {
    feil7();
  }
  if (feil == 8) {
    feil8();
    ordsys();
    NyttOrd();
    ctx.clearRect(0, 0, width, height);
    feil = 0;
    losepopup();
    setTimeout(() => {
      gjettetbokstaver = [];
      bokstaver.innerHTML = " ";
    }, 100);
  }
}
