// Inseriamo in pagina l’immagine della lampadina spenta e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi.

//Costante della lampada
const imgElem = document.getElementById("white-lamp");
//  console.log(imgElem)

//Costante del bottone
const btnElem = document.getElementById("lamp-btn");
//  console.log(btn)

// Funzione della lampadina + bonus
btnElem.addEventListener(`click`, function () {
    if(imgElem.src.includes("white_lamp")) {
        imgElem.src = "./img/yellow_lamp.png";
         btnElem.innerHTML = "Spegni la lampadina"
    } else {
        imgElem.src = "./img/white_lamp.png";
        btnElem.innerHTML = "Accendi la lampadina"
    }
})