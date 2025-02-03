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

const feilbtn = document.getElementById("feilbtn");

function feilsys() {
  feil++;
  console.log(feil);

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

feilbtn.addEventListener("click", feilsys);

//----------------------------------------------------------------------------------------------------

const ordliste = ["hei", "på", "deg", "og", "velkommen"];
const ordbtn = document.getElementById("ordbtn");

function ordsys(){
  var ord = Math.floor(Math.random() * ordliste.length);
  const ord2 = ordliste[ord].split("");
  console.log(ord2);
};

ordbtn.addEventListener("click", ordsys);
