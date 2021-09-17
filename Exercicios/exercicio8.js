const quantidadeDiscos = 5;

function movimentosMinimos(quantidadeDiscos){
    var movimentos;

    // formula = 2n – 1
    movimentos = (Math.pow(2,quantidadeDiscos)) - 1;

    return movimentos;      
}

var movimentosMin = movimentosMinimos (quantidadeDiscos);

console.log (" Será necessário no minimo " + movimentosMin + " movimentos para mover todos os discos para o pino da direita.");