// 1+2+3+4+5+6+7+8+...+100
let suma=0;
let contador=1;

let maximo = parseInt(prompt("Dame un número entero: "));

while(contador<=maximo){
    suma+=contador;
    contador++;
}

document.write("<br> La suma es: "+suma);

            //     0        1        2        3
const lista = ["domingo","lunes","martes","miercoles"];
let i=0;

while(i<lista.length){
    document.write("<br>"+lista[i]);
    i++;
}


