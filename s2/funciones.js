
/**
 * Función sumar, suma dos números:
 * @param {Es un sumando que va a ser parte de la suma.} a 
 * @param {Segundo sumando que va a ser parte de la suma.} b 
 * @returns Se devuelve el valor de la suma de los números.
 */

function sumar(a,b){
    return a+b;
}

document.write("<br> La suma es: "+sumar(34,56));

/**
 * Función anónima o expresión de función.
 * @param {*Recibe la base para elevarla al cuadro.} x 
 * @returns Se devuelve el cuadrado del parametro x.
 */

let cuadrado = function(x){
    return x*x;
}
document.write("<br> El cuadrado del número es: "+cuadrado(7));

//Imprimimos la estructura de la función en consola.
console.log(sumar);
console.log(cuadrado);

/**
 * Esta es una función que se manda a llamar una vez
 * en automático.
 */
(function(){
    document.write("<br> Hola desde una función autoinvocada.");
})(); // Requito, poner parentesis al final y ;

//Modo estricto corta las malas prácticas.
function resto(a,b){
    "use strict";
    let resto=a%b;
    let t=20;
    return resto+t;
}

console.log(resto(14,3));







