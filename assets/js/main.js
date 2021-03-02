// Chiedere mail utente
var mail = prompt("Inserisci la tua mail");

  console.log(mail);

//Controlla che sia nella lista di chi può accedere

  // Creo array per maining list

var mainingList = ["prova@gmail.com", "nicolo@libero.it", "alessandro@yahoo.com", "fabrizio@live.it", "raffaele@alice.it"]

  console.log(mainingList);

  // Creo ciclo for per controllare presenza mail nella maining list

for (var i = 0; i < mainingList.length; i++) {
//  console.log(mainingList[i]);
  if (mail == mainingList[i]) {
    console.log("la mail c'è")
  } else {
    console.log("la mail non c'è");
  }
}



//Stampa un messaggio appropriato sull'esito del controllo
