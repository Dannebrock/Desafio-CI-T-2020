const midgar = 2827.43;
const parteCentral = 314.15;

function areaBusca (midgar,parteCentral){
    var area7;
    var areaTotalBusca;

    areaTotalBusca = midgar - parteCentral;

    area7 = areaTotalBusca / 8;

    return area7.toFixed(2);
}

var area7 = areaBusca(midgar,parteCentral);

console.log("O tamanho da área para realizar as buscas será de "+ area7 +" metros²");