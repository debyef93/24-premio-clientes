function acmeRegalo(clientes) {
    var premioNavidad;
    var retornoPantalla = [];

    for (i = 0; i <= clientes.length - 1; i++) {
        retornoPantalla[i] = [];
        for (j = 0; j < 4; j++) {
            var cuantia = Math.floor(Math.random() * 15000);
            
            switch () {
                case:
            }

            }
            retornoPantalla[i][j] = [clientes[i] + cuantia[i] + premioNavidad[i]];
        }
    }
    return retornoPantalla;
}

document.getElementById('impresion').innerHTML = acmeRegalo(["Juan Ramos", "Pedro Sanchez", "Begoña Gómez", "Frederick Williams",
        "Roberta Williams", "Paco Porras", "La Veneno", "Profesor Moriarti",
        "Pato Lucas", "Cristobal Montoro"])