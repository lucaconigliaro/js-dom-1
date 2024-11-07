// Inseriamo in pagina l’immagine della lampadina spenta e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi.

//Costante della lampada
const whiteLamp = document.getElementById("white-lamp");
//  console.log(whiteLamp)

//Costante del bottone
const btn = document.getElementById("lamp-btn");
//  console.log(btn)

// Funzione della lampadina + bonus
btn.addEventListener(`click`, function() {
whiteLamp.src = "./img/yellow_lamp.png"

if (whiteLamp.classList.contains("off")) {
    whiteLamp.classList.remove("off")
    btn.innerText = "Spegni la lampadina"
} else {
    whiteLamp.classList.add("off")
    btn.innerText = "Accendi la lampadina"
}
})