const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = 500;
const height = 500;

canvas.width = width;
canvas.height = height;

function feil1() {
  ctx.beginPath();
  ctx.moveTo(50, 300);
  ctx.lineTo(75, 275);
  ctx.lineTo(100, 300);
  ctx.stroke();
}

function feil2() {
  ctx.beginPath();
  ctx.moveTo(75, 275);
  ctx.lineTo(75, 175);
  ctx.lineTo(150, 175);
  ctx.stroke();
  ctx.moveTo(75, 200);
  ctx.lineTo(100, 175);
  ctx.stroke();
}

function feil3() {
  ctx.beginPath();
  ctx.moveTo(150, 175);
  ctx.lineTo(150, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(150, 210, 10, 0, 2 * Math.PI);
  ctx.stroke();
}

function feil4() {
  ctx.beginPath();
  ctx.moveTo(150, 220);
  ctx.lineTo(150, 250);
  ctx.stroke();
}

function feil5() {
  ctx.beginPath();
  ctx.moveTo(150, 220);
  ctx.lineTo(135, 235);
  ctx.stroke();
}
function feil6() {
  ctx.beginPath();
  ctx.moveTo(150, 220);
  ctx.lineTo(165, 235);
  ctx.stroke();
}
function feil7() {
  ctx.beginPath();
  ctx.moveTo(150, 250);
  ctx.lineTo(135, 265);
  ctx.stroke();
}
function feil8() {
  ctx.beginPath();
  ctx.moveTo(150, 250);
  ctx.lineTo(165, 265);
  ctx.stroke();
}

//Feil er lagret og tegner deler av figuren etter at du får så mange feil
var feil = 0;


function feilsys() {
  feil++;

  if (feil == 1) {
    feil1();
    console.log("Feil 1");
  }
  if (feil == 2) {
    feil2();
    console.log("Feil 2");
  }
  if (feil == 3) {
    feil3();
    console.log("Feil 3");
  }
  if (feil == 4) {
    feil4();
    console.log("Feil 4");
  }
  if (feil == 5) {
    feil5();
    console.log("Feil 5");
  }
  if (feil == 6) {
    feil6();
    console.log("Feil 6");
  }
  if (feil == 7) {
    feil7();
    console.log("Feil 7");
  }
  if (feil == 8) {
    feil8();
    console.log("Feil 8");
  }
}


//----------------------------------------------------------------------------------------------------

const ordliste = ["h", "hi", "hei"];

let ord2 = [];

function ordsys() {
  var ord = Math.floor(Math.random() * ordliste.length);
  ord2 = ordliste[ord].split("");
  console.log(ord2);
}
ordsys();


//----------------------------------------------------------------------------------------------------
let ord3 = [];
for (i = 0; i < ord2.length; i++) {
  ord3.push("_");
}

const ordet = document.getElementById("ordet");
ord3 = ord3.join(" ");
ordet.innerHTML = ord3;

//----------------------------------------------------------------------------------------------------
const inputField = document.getElementById("letterInput");

function bokstavsys() {
  let gjett = inputField.value;
  console.log(gjett);
  if (ord2.includes(gjett)) {
    console.log("riktig");
  } else {
    feilsys();
  }
  inputField.value = "";
}

let gjett = "";

function saveLetter() {
  gjett = inputField.value;
  console.log(gjett);
  bokstavsys();
}
