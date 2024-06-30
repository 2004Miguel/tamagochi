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


// let paragraph = document.createElement("p");
// let namePett = nameInput.value;
// let actionMessage = paragraph.appendChild(eatMessage);

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
    let newParagraph = `<p> ${nameInput.value} comió`;
    screenMessages.innerHTML = newParagraph;
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
    // inputAge.setAttribute("readonly", true);
    selectSex.setAttribute("disabled", true);
    let valueSex = selectSex.value;//se save la opción que se eligió del select
    if(valueSex == "men"){
        character.setAttribute("src", "multimedia/hombre.png");
    }
})

console.log(screenMessages);

// saveButton.addEventListener("click", () =>{
//     if(nameInput.value == "Miguel"){
//         console.log("Es miguel");
//     }else{
//         console.log("Es diferente de Miguel");
//     }
// })

// setInterval(restarHambre, 1000);
// setInterval(restarSueño, 2000);
// setInterval(restarDiversion, 3000);

