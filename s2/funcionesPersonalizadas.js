
//Antes de ES6

/**
 * Función suma, recibe dos números y devuleve su suma.
 * @param {*a sumando} a 
 * @param {*b sumando} b 
 * @returns la suma de ambos numeros.
 */
function sumar(a,b){
    return a+b;
}

//Mandando a llamar a la función sumar:
document.write("<br> Suma: "+sumar(67,23));
console.log(sumar);

/*
    Las funciones anónimas son funciones que 
    no tienen nombre, también son llamadas 
    expresiones de función.
*/

let cuadrado=function(a){return a*a};
//Mandando a llamar a la función anónima.
document.write("<br> Cuadrado: "+cuadrado(7));

/* 
    Existen funciones que pueden ejecutarse sin 
    tener que mandar a llamarlas, son las funciones
    autoinvocadas.
*/

(function(){
    document.write("<br> Hola a todos desde una función autoinvocada.");
})();


//Modo estricto: corta las malas prácticas.
function resto(a,b){
    "use strict";
    let resto=a%b;
    // t=10; esto daría un error "use strict";
    return resto;
}

console.log(resto(20,3));
