const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const width = 500
const height = 500

canvas.width = width;
canvas.height = height;

function feil1(){
    ctx.beginPath()
    ctx.moveTo(50, 300)
    ctx.lineTo(75, 275)
    ctx.lineTo(100, 300)  
    ctx.stroke() 
}

function feil2(){
    ctx.beginPath()
    ctx.moveTo(75, 275)
    ctx.lineTo(75, 175)
    ctx.lineTo(150, 175)
    ctx.stroke()
    ctx.moveTo(75, 200)
    ctx.lineTo(100, 175)
    ctx.stroke()
}

function feil3(){
    ctx.beginPath()
    ctx.moveTo(150, 175)
    ctx.lineTo(150, 200)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(150, 210, 10, 0, 2*Math.PI)
    ctx.stroke()
}

function feil4(){
    ctx.beginPath()
    ctx.moveTo(150, 220)
    ctx.lineTo(150, 250)
    ctx.stroke()
}

function feil5(){
    ctx.beginPath()
    ctx.moveTo(150, 220)
    ctx.lineTo(135, 235)
    ctx.stroke()
}
function feil6(){
    ctx.beginPath()
    ctx.moveTo(150, 220)
    ctx.lineTo(165, 235)
    ctx.stroke()
}
function feil7(){
    ctx.beginPath()
    ctx.moveTo(150, 250)
    ctx.lineTo(135, 265)
    ctx.stroke()
}
function feil8(){
    ctx.beginPath()
    ctx.moveTo(150, 250)
    ctx.lineTo(165, 265)
    ctx.stroke()
}
feil1()
feil2()
feil3()
feil4()
feil5()
feil6()
feil7()
feil8()