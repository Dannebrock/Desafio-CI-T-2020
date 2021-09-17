
const distanciaInicial = 0;
const tempo = 5;
const velocidade = 80;
const angulo = 45;


var distancia;


function distanciaPercorrida(distanciaInicial,tempo,velocidade,angulo){

    velocidade /= 3.6;

    distancia = distanciaInicial + (velocidade * tempo);

    coseno = Math.cos(angulo);

    distanciaFinal = distancia / coseno;

    return distanciaFinal.toFixed(2);

}

var distanciaFinal = distanciaPercorrida(distanciaInicial,tempo,velocidade,angulo);

console.log("A distância percorrida pela banana será de "+ distanciaFinal + " metros.");






 




