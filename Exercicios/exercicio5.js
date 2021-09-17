const yoshisIsland = 450;
const chocolateIsland = 330;
const cookieMontain = 340;
const yoshis = 1000;
const yoshiChocolate = 200;
const chocolateCookies = 100;
const yoshiCookies = 180;
const yoshiCookieChocolate = 30;

function unicaLocalidade (yoshisIsland, chocolateIsland, cookieMontain, yoshiChocolate,chocolateCookies,
yoshiCookies, yoshiCookieChocolate){

    var yoshisIslandTotal;
    var unicaLocalidade;

    yoshisIslandTotal = yoshisIsland - yoshiChocolate - yoshiCookies - yoshiCookieChocolate;

    chocolateIslandTotal = chocolateIsland - yoshiChocolate - yoshiCookieChocolate - chocolateCookies;

    cookieMontainTotal = cookieMontain - yoshiCookieChocolate - chocolateCookies -yoshiCookies;


    unicaLocalidade = yoshisIslandTotal + chocolateIslandTotal + cookieMontainTotal;



    return unicaLocalidade;


}

function naoGostam (yoshisIsland,chocolateIsland, cookieMontain,yoshis, yoshiChocolate, chocolateCookies,
yoshiCookies, yoshiCookieChocolate){

    var yoshisIslandTotal;
    var yoshisNaoGostam;
    

    yoshisIslandTotal = yoshisIsland - yoshiChocolate - yoshiCookies - yoshiCookieChocolate;

    chocolateIslandTotal = chocolateIsland - yoshiChocolate - yoshiCookieChocolate - chocolateCookies;

    cookieMontainTotal = cookieMontain - yoshiCookieChocolate - chocolateCookies -yoshiCookies;

    yoshisNaoGostam = yoshis - chocolateIslandTotal - yoshisIslandTotal - cookieMontainTotal - yoshiChocolate - 
    yoshiCookieChocolate -chocolateCookies - yoshiCookies;

    return yoshisNaoGostam;
}

var yoshisUnicaLocalidade = unicaLocalidade (yoshisIsland, chocolateIsland, cookieMontain, yoshiChocolate, chocolateCookies,
    yoshiCookies, yoshiCookieChocolate);

var yoshisNaoGostam = naoGostam (yoshisIsland, chocolateIsland, cookieMontain, yoshis, yoshiChocolate, chocolateCookies,
    yoshiCookies, yoshiCookieChocolate);

console.log("Existem "+ yoshisUnicaLocalidade +" Yoshi's que gostam apenas de uma única localidade.");

console.log("Existem "+ yoshisNaoGostam +" Yoshi's que não gostam de nenhuma das localidades.");