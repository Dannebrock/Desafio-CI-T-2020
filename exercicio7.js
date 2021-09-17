const velocidade = 260;
const coeficienteAtrito = 1;

function frenagemAyrtonSenna (velocidade,coeficienteAtrito){
    
    const atrito = 250;
    var velocidadeQuadrado;
    var distanciaFrenagem;

    velocidadeQuadrado = Math.pow(velocidade,2)
    
    distanciaFrenagem = velocidadeQuadrado/(atrito*coeficienteAtrito);

    return distanciaFrenagem;
}

var distanciaFrenagem = frenagemAyrtonSenna(velocidade,coeficienteAtrito);

console.log("Ayrton Senna irá precisar de "+ distanciaFrenagem +" metros para realizar a frenagem por completa.");