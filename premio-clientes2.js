function acmeRegalo(clientes) {
    var premioNavidad;
    var retornoPantalla = [];

    for (i = 0; i <= clientes.length - 1; i++) {

        var cuantia = Math.floor(Math.random() * 15000);

        if (cuantia > 9999) {
            premioNavidad = "Cesta de navidad con jamón ";
            //document.write(clientes[i] + " " + cuantia + " eur " + premioNavidad);
        } else if (cuantia >= 5000 && cuantia <= 9999) {
            premioNavidad = "Cesta de navidad simplona ";
            //document.write(clientes[i] + " " + cuantia + " eur " + premioNavidad);
        } else {
            premioNavidad = "Carta y pegatina de Acme ";
            //document.write(clientes[i] + " " + cuantia + " eur " + premioNavidad);
        }
        retornoPantalla[i] = [clientes[i], cuantia, premioNavidad];

    }
    return retornoPantalla;
}

retorno = acmeRegalo(["Juan Ramos", "Pedro Sanchez", "Begoña Gómez", "Frederick Williams",
    "Roberta Williams", "Paco Porras", "La Veneno", "Profesor Moriarti",
    "Pato Lucas", "Cristobal Montoro"]);

document.getElementById([0]).innerHTML = retorno[0][0];
document.getElementById([1]).innerHTML = retorno[0][1];
document.getElementById([2]).innerHTML = retorno[0][2];
document.getElementById([3]).innerHTML = retorno[1][0];
document.getElementById([4]).innerHTML = retorno[1][1];
document.getElementById([5]).innerHTML = retorno[1][2];
document.getElementById([6]).innerHTML = retorno[2][0];
document.getElementById([7]).innerHTML = retorno[2][1];
document.getElementById([8]).innerHTML = retorno[2][2];
document.getElementById([9]).innerHTML = retorno[3][0];
document.getElementById([10]).innerHTML = retorno[3][1];
document.getElementById([11]).innerHTML = retorno[3][2];
document.getElementById([12]).innerHTML = retorno[4][0];
document.getElementById([13]).innerHTML = retorno[4][1];
document.getElementById([14]).innerHTML = retorno[4][2];
document.getElementById([15]).innerHTML = retorno[5][0];
document.getElementById([16]).innerHTML = retorno[5][1];
document.getElementById([17]).innerHTML = retorno[5][2];
document.getElementById([18]).innerHTML = retorno[6][0];
document.getElementById([19]).innerHTML = retorno[6][1];
document.getElementById([20]).innerHTML = retorno[6][2];
document.getElementById([21]).innerHTML = retorno[7][0];
document.getElementById([22]).innerHTML = retorno[7][1];
document.getElementById([23]).innerHTML = retorno[7][2];
document.getElementById([24]).innerHTML = retorno[8][0];
document.getElementById([25]).innerHTML = retorno[8][1];
document.getElementById([26]).innerHTML = retorno[8][2];
document.getElementById([27]).innerHTML = retorno[9][0];
document.getElementById([28]).innerHTML = retorno[9][1];
document.getElementById([29]).innerHTML = retorno[9][2];

