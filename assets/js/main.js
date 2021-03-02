// Chiedere mail utente
var mail = prompt("Inserisci la tua mail");

document.getElementById('mail-inserita').innerHTML = mail

//Controlla che sia nella lista di chi può accedere

  // Creo array per maining list

var mainingList = ["prova@gmail.com", "nicolo@libero.it", "alessandro@yahoo.com", "fabrizio@live.it", "raffaele@alice.it"]

  console.log(mainingList);

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
  document.getElementById('mail').innerHTML = "Accesso consentito"
} else {
  document.getElementById('mail').innerHTML = "Accesso negato"
}
