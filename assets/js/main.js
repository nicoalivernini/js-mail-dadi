// Chiedere mail utente
var mail = prompt("Inserisci la tua mail");

document.getElementById('mail-inserita').innerHTML = "<span style=\"font-weight:bold;\">" + "La tua mail:" + "</span>" + " " + mail

//Controlla che sia nella lista di chi può accedere

  // Creo array per maining list

var mainingList = ["prova@gmail.com", "nicolo@libero.it", "alessandro@yahoo.com", "fabrizio@live.it", "raffaele@alice.it"]

  // Creo variabile di verifica

var verificaMail = false

  // Creo ciclo for per controllare presenza mail nella maining list

for (var i = 0; i < mainingList.length; i++) {
  if (mail == mainingList[i]) {
    verificaMail = true
  }
}

//Stampa un messaggio appropriato sull'esito del controllo

if (verificaMail == true) {
  document.getElementById('mail').innerHTML = "<span style=\"color:green; font-weight:bold;\">" + "Accesso consentito" + "</span>"
} else {
  document.getElementById('mail').innerHTML = "<span style=\"color:red; font-weight:bold;\">" + "Accesso negato" + "</span>"
}


// Esercizio dadi

// Generare sia per al persona sia per il computer due numeri casuali da 1 a 6

var numeroUmano = Math.floor(Math.random() * (6 - 1) + 1);

document.getElementById('numero-umano').innerHTML = "L'umano segna:" + " " + numeroUmano

var numeroComputer = Math.floor(Math.random() * (6 - 1) + 1);

document.getElementById('numero-computer').innerHTML = "Il computer segna:" + " " + numeroComputer

//Capire come far vincere chi ha il numero più alto

if (numeroUmano > numeroComputer) {
  document.getElementById('vittoria').innerHTML = "Ha vinto l'umano"
} else if (numeroUmano == numeroComputer) {
  document.getElementById('vittoria').innerHTML = "Hanno pareggiato"
} else {
  document.getElementById('vittoria').innerHTML = "Ha vinto il computer"
}
