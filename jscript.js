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

feil1()
feil2()