// Inseriamo in pagina l’immagine della lampadina spenta e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi.

//Costante della lampada
const whiteLamp = document.getElementById("white-lamp");
//  console.log(whiteLamp)

//Costante del bottone
const btn = document.getElementById("lamp-btn");
//  console.log(btn)

// Funzione della lampadina + bonus
btn.addEventListener(`click`, function () {
    if (whiteLamp.src.includes("white_lamp.png")) {
        whiteLamp.src = "./img/yellow_lamp.png"
        btn.innerText = "Spegni la lampadina"
    } else if (!(whiteLamp.src.includes("white_lamp.png"))){
        whiteLamp.src= "./img/white_lamp.png"
        btn.innerText = "Accendi la lampadina"
    }
})