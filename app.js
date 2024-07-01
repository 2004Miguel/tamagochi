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
    if(parseInt(sleepInput.value, 10) == 95){
        console.log("Entró en el condicional");
        sleepInput.classList.add("live-level");
    }
}
function cambioGame(){
    if(parseInt(gameInput.value, 10) == 95){
        console.log("Entró en el condicional");
        gameInput.classList.add("live-level");
    }
}
function cambioStatus(){
    cambioAngry();
    // cambioSleep();
    // cambioGame();
}
// function cambioStatus(){
//     if(parseInt(angryInput.value, 10) == 95){
//         console.log("Entró en el condicional");
//         angryInput.classList.add("live-level");
//     }else if(parseInt(sleepInput.value, 10) == 95){
//         console.log("Condición del sueño");
//         sleepInput.classList.add("live-level");
//     }else if(parseInt(gameInput.value) == 95){
//         gameInput.classList.add("live-level");
//     }
    

// }



eatButton.addEventListener("click", ()=>{
    let newParagraph = `<p> ${nameInput.value} comió`;
    screenMessages.innerHTML = newParagraph;
    // console.log(screenMessages); muestra el html que se agregó

});
sleepButton.addEventListener("click", ()=>{
    let newParagraph = `<p> ${nameInput.value} va a dormir`;
    screenMessages.innerHTML = newParagraph;
    // console.log("Se apretó el botón de dormir");
});
gameButton.addEventListener("click", ()=>{
    let newParagraph = `<p> ${nameInput.value} está jugando`;
    screenMessages.innerHTML = newParagraph;
    // console.log("Se apretó el botón de jugar");
});
screenButton.addEventListener("click", ()=>{
    console.log("se dió click en la pantalla");
    angryInput.value = 100;
});
saveButton.addEventListener("click", ()=>{
    nameInput.setAttribute("readonly", true);
    selectSex.setAttribute("disabled", true);
    let valueSex = selectSex.value;//se sabe la opción que se eligió del select
    if(valueSex == "men"){
        character.setAttribute("src", "multimedia/hombre.png");//Cambia la imágen de la mascota si es hombre
    }
})

// setInterval(cambioStatus, 500);
// setInterval(restarHambre, 500);
// setInterval(restarSueño, 2000);
// setInterval(restarDiversion, 3000);
// setInterval(sumarAnios, 100);



