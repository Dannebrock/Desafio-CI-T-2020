var numeros = []

for (i = 2; i <= 120; i++){
    if (i % 2 != 0 && i % 3 != 0  &&  i % 5 != 0  && i % 7 != 0){

        numeros.push(i);
    }
}

console.log(numeros);