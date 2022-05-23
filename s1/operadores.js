//Operadores aritméticos:
let suma=34+56;
document.write("<br> Suma: "+suma);

let resta=900-80;
document.write("<br> Resta: "+resta);

let multi=34*23;
document.write("<br> Multiplicación: "+multi);

//División exacta con dígitos de precisión:
let division=120/7;
document.write("<br> División: "+division.toPrecision(6));

//parseInt transforma a entero.
let divEntera = parseInt(30/8);
document.write("<br> División entera: "+divEntera);

//Potencia:
let potencia = 3**4; //3*3*3*3
document.write("<br> Potencia: "+potencia);

//Resto o módulo (modulus)
let resto = 45%8; // 45/8=5 -> sobra 5
document.write("<br> Módulo: "+resto);
// 14%3=2, 31%4=3, 50%9=5
// 87654345678

// 1,2,3,4,5,6,7,8,...
let contador=0;
contador++;
contador++;
contador++;
document.write("<br> Contador: "+contador);

// x = 10+2*3 = 16
// 1) Corchete, llaves o parentesis
// 2) Potencias o raices
// 3) Multiplicaciones o divisiones
// 4) Sumas o restas

let x="34.5"; //String
x=parseFloat(x); //Transformando un String en Float.

//Operadores de asignación:
let cantidad=50;
cantidad+=100;
document.write("<br> Operadores de asignación: "+cantidad);
