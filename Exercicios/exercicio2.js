function tabuleiro(n){
    var raiz;
    primos = [];

    raiz = Math.floor(Math.sqrt(n));

    for (i = 2; i < n + 1; i++) {
        primos[i] = true;
    }

    for (i = 2; i <= raiz; i++) {
        if (primos[i]) {
            
            for (j = i; i * j <= n; j++) {
                primos[i * j] = false;
            }
        }
    }
    return primos;
}
function mostra(primos){
    for (i = 2; i < primos.length; i++) {
        
        if (primos[i]) {
            console.log(i+",");
        }
    }
}

var lista = tabuleiro(120);
mostra(lista);