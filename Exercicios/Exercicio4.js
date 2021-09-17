const area1Variacao = 1;
const area2Variacao = 3;
const area3Variacao = 3;
const area4Variacao = 2;


function possibilidadesVariacao(area1Variacao,area2Variacao,area3Variacao,area4Variacao){


    var totalVariacoes;

    totalVariacoes = area1Variacao * area2Variacao * area3Variacao * area4Variacao;

    return totalVariacoes;

}

var totalVariacoes = possibilidadesVariacao(area1Variacao,area2Variacao,area3Variacao,area4Variacao);

console.log("O total de variações possiveis no jogo será de " + totalVariacoes + " .");