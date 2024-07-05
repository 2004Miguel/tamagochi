let eatButton = document.getElementById("eat");
let sleepButton = document.getElementById("sleep");
let gameButton = document.getElementById("game");
let screenButton = document.getElementById("screen");
let saveButton = document.getElementById("btnSave");

let angryInput = document.getElementById("angry");
let sleepInput = document.getElementById("sleepStat");
let gameInput = document.getElementById("gameStat");
let nameInput = document.getElementById("nameMascota");
let inputAge = document.getElementById("inputAge");
let selectSex = document.getElementById("sex");
let character = document.getElementById("character");

let screenMessages = document.querySelector(".messages");
// let statusClass = document.querySelector('.status__property');

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
function sumarAnios(){
    let parceo = parseInt(inputAge.value, 10);
    parceo += 1;
    inputAge.value = parceo;
}
function cambioAngry(){
    let value = parseInt(angryInput.value, 10);

    if(value == 90){
        angryInput.classList.add("live-level");
    }else if(value == 60){
        angryInput.classList.add("live-level-medium");
    }else if(value == 40){
        angryInput.classList.add("live-level-low");
    }else if(value == 20){
        angryInput.classList.add("live-level-last");
    }
}
function cambioSleep(){
    let value = parseInt(sleepInput.value, 10);

    if(value == 90){
        sleepInput.classList.add("live-level");
    }else if(value == 60){
        sleepInput.classList.add("live-level-medium");
    }else if(value == 40){
        sleepInput.classList.add("live-level-low");
    }else if(value == 20){
        sleepInput.classList.add("live-level-last");
    }
}
function cambioGame(){
    let value = parseInt(gameInput.value, 10);

    if(value == 90){
        gameInput.classList.add("live-level");
    }else if(value == 60){
        gameInput.classList.add("live-level-medium");
    }else if(value == 40){
        gameInput.classList.add("live-level-low");
    }else if(value == 20){
        gameInput.classList.add("live-level-last");
    }
}
function cambioStatus(){
    if(parseInt(angryInput.value) == 0){
        character.setAttribute("src", "multimedia/muerte.png");
        let newParagraph = `<p> ${nameInput.value} SE MURIÓ DE HAMBRE :(`;
        screenMessages.innerHTML = newParagraph;
    }
    if(parseInt(sleepInput.value) == 0){
        character.setAttribute("src", "multimedia/muerte.png");
        let newParagraph = `<p> ${nameInput.value} SE MURIÓ POR SOMNOLENCIA :(`;
        screenMessages.innerHTML = newParagraph;
    }
    if(parseInt(gameInput.value) == 0){
        character.setAttribute("src", "multimedia/muerte.png");
        let newParagraph = `<p> ${nameInput.value} SE MURIÓ POR DEPRESIÓN :(`;
        screenMessages.innerHTML = newParagraph;
    }
    cambioAngry();
    cambioSleep();
    cambioGame();
}


eatButton.addEventListener("click", ()=>{
    let hunger = parseInt(angryInput.value);
    let hugerPlus = hunger + 5;
    if(hunger <= 95){
        let newParagraph = `<p>Se restableció 5 de hambre¡¡`;
        angryInput.value = hugerPlus;
        screenMessages.innerHTML = newParagraph;
        // console.log(screenMessages); muestra el html que se agregó

    }else{
        let newParagraph = `<p>${nameInput.value} no tiene hambre aún¡¡`;
        screenMessages.innerHTML = newParagraph;
    }

    if(parseInt(angryInput.value) >= 90){
        angryInput.classList.remove("live-level");
    }
    if(parseInt(angryInput.value) >= 60 && parseInt(angryInput.value) < 90){
        angryInput.classList.remove("live-level-medium");
    }
    if(parseInt(angryInput.value) >= 40 && parseInt(angryInput.value) < 60){
        angryInput.classList.remove("live-level-low");
    }
    if(parseInt(angryInput.value) >= 20 && parseInt(angryInput.value) < 40){
        angryInput.classList.remove("live-level-last");
    }
    

});
sleepButton.addEventListener("click", ()=>{
    let sleep = parseInt(sleepInput.value);
    let sleepPlus = sleep + 5;
    if(sleep <= 95){
        let newParagraph = `<p>Se restableció 5 de sueño¡¡`;
        sleepInput.value = sleepPlus;
        screenMessages.innerHTML = newParagraph;
        // console.log(screenMessages); muestra el html que se agregó

    }else{
        let newParagraph = `<p>${nameInput.value} no tiene sueño aún¡¡`;
        screenMessages.innerHTML = newParagraph;
    }
    if(parseInt(sleepInput.value) >= 90){
        sleepInput.classList.remove("live-level");
    }
    if(parseInt(sleepInput.value) >= 60 && parseInt(sleepInput.value) < 90){
        sleepInput.classList.remove("live-level-medium");
    }
    if(parseInt(sleepInput.value) >= 40 && parseInt(sleepInput.value) < 60){
        sleepInput.classList.remove("live-level-low");
    }
    if(parseInt(sleepInput.value) >= 20 && parseInt(sleepInput.value) < 40){
        sleepInput.classList.remove("live-level-last");
    }
});
gameButton.addEventListener("click", ()=>{
    let game = parseInt(gameInput.value);
    let gamePlus = game + 5;
    if(game <= 95){
        let newParagraph = `<p> ${nameInput.value} está jugando +5¡¡`;
        gameInput.value = gamePlus;
        screenMessages.innerHTML = newParagraph;
        // console.log("Se apretó el botón de jugar");
    }else{
        let newParagraph = `<p> ${nameInput.value} no quiere jugar¡¡`;
        screenMessages.innerHTML = newParagraph;
    }

    if(parseInt(gameInput.value) >= 90){
        gameInput.classList.remove("live-level");
    }
    if(parseInt(gameInput.value) >= 60 && parseInt(gameInput.value) < 90){
        gameInput.classList.remove("live-level-medium");
    }
    if(parseInt(gameInput.value) >= 40 && parseInt(gameInput.value) < 60){
        gameInput.classList.remove("live-level-low");
    }
    if(parseInt(gameInput.value) >= 20 && parseInt(gameInput.value) < 40){
        gameInput.classList.remove("live-level-last");
    }
    
});

saveButton.addEventListener("click", ()=>{
    nameInput.setAttribute("readonly", true);
    selectSex.setAttribute("disabled", true);
    saveButton.setAttribute("disabled", true);
    let valueSex = selectSex.value;//se sabe la opción que se eligió del select
    if(valueSex == "men"){
        character.setAttribute("src", "multimedia/hombre.png");//Cambia la imágen de la mascota si es hombre
    }
    setInterval(cambioStatus, 500);
    setInterval(restarHambre, 500);
    setInterval(restarSueño, 500);
    setInterval(restarDiversion, 500);
    setInterval(sumarAnios, 500);
})



