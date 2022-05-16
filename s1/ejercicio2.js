
let monto=prompt("\n\t Escribe un monto para aplicarle 15% de descuento: ");

let conDescuento15=0.85*parseFloat(monto);
document.write("<br> El monto con el 15% de descuento es: $"+conDescuento15.toPrecision(6));

//Operadores de asignación:
let x=10;
x*=2; //10*2=20.
x-=4; //20-4=16.

// %d sirve para imprimir enteros.
console.log("\n\t Valor de x: %d",x);


//Ejercicio de operadores de asignación.
let ahorro=0; 
ahorro+=150;
ahorro+=200;
ahorro+=100;
ahorro+=150;
ahorro*=2;
console.log(ahorro);