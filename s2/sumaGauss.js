
let suma=0; //Nota: las sumas se inician en cero.
// 1, 1+2, 1+2+3,1+2+3+4
let contador=1; // Va a ir tomando los valores: 1, 2, 3, 4

while(contador<=100){
    suma+=contador;
    contador++;
}

document.write("<br> Suma del 1 al 100: "+suma);