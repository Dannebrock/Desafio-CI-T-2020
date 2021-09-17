const bilhete = 1969;

function encontrarBilhete(bilhete){
    var linha;
    var potencia;
    
    linha = Math.sqrt(bilhete);
    potencia = Math.pow(linha.toFixed(0),2);

    if (bilhete > potencia ){

        linha ++;
    }
    
    return linha.toFixed(0);
}

var resultado = encontrarBilhete(bilhete);

console.log("O número 1969 foi escrito na linha "+ resultado +".");