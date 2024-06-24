let eatButton = document.getElementById("eat");
let sleepButton = document.getElementById("sleep");
let gameButton = document.getElementById("game");
let screenButton = document.getElementById("screen");

let angryInput = document.getElementById("angry");
let sleepInput = document.getElementById("sleepStat");
let gameInput = document.getElementById("gameStat");

angryInput.value=100;
sleepInput.value=100;
gameInput.value=100;


function restarHambre(){
    angryInput.value -= 1;
}
function restarSueño(){
    sleepInput.value -= 1;
}
function restarDiversion(){
    gameInput.value -= 1;
}

eatButton.addEventListener("click", ()=>{
    console.log("Se apretó el botón de comer");
});
sleepButton.addEventListener("click", ()=>{
    console.log("Se apretó el botón de dormir");
});
gameButton.addEventListener("click", ()=>{
    console.log("Se apretó el botón de jugar");
});
screenButton.addEventListener("click", ()=>{
    console.log("se dió click en la pantalla");
    angryInput.value = 100;
});

// setInterval(restarHambre, 1000);
// setInterval(restarSueño, 2000);
// setInterval(restarDiversion, 3000);

