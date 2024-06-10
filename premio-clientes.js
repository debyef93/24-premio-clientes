function acmeRegalo(clientes) {
  var premioNavidad;
  console.log("");

  for (i = 0; i <= clientes.length - 1; i++) {
    var cuantia = Math.floor(Math.random() * 15000);
    if (cuantia > 9999) {
      premioNavidad = "Cesta de navidad con jamón";
    } else if (cuantia >= 5000) {
      premioNavidad = "Cesta de navidad simplona";
    } else {
      premioNavidad = "Carta y pegatina de Acme";
    }

    console.log(
      clientes[i] + ": " + cuantia + " eur (" + premioNavidad + ")"
    );
  }
  
  console.log("");
}
acmeRegalo([
  "Juan Ramos",
  "Pedro Sanchez",
  "Begoña Gómez",
  "Frederick Williams",
  "Roberta Williams",
  "Paco Porras",
  "La Veneno",
  "Profesor Moriarti",
  "Pato Lucas",
  "Cristobal Montoro",
]);
