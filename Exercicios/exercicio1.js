const distancia = 149600000;
const velocidade = 28440;

function diasPercorridos(distancia, velocidade){

    var horasPercorridas;
    var dias;

    horasPercorridas = distancia / velocidade;

    dias = horasPercorridas / 24;

    return dias.toFixed(0);
}

var diasPercorridos = diasPercorridos(distancia, velocidade);

console.log("A viagem terá a duração de aproximadamente " + diasPercorridos + " dias.");