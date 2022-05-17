
const numeros = [1,-4,19,5,6];

document.write("<br> Arreglo desordenado: ");
for(let numero of numeros){
    document.write("<br>"+numero);
}

//numeros.sort(); //Ordena los números en forma ascendente.
// 1, -4, 19, 5, 6
// -4, 1, 19, 5, 6
// -4, 1, 5, 19, 6
// -4, 1, 5, 6, 19

for(let i=0;i<numeros.length;i++){
    for(let j=0;j<i;j++){
        if(numeros[j]>numeros[j+1]){
            let aux=numeros[j];
            numeros[j]=numeros[j+1];
            numeros[j+1]=aux;
        }
    }
}

document.write("<br> Arreglo ordenado: ");
for(let numero of numeros){
    document.write("<br>"+numero);
}


const nombres = ["Maria","Pedro","Juan","Ana"];
document.write("<br><br>Arreglo de nombres en desorden: ");
for (let nombre of nombres){
    document.write("<br>"+nombre);
}

nombres.sort();
document.write("<br><br>Arreglo de nombres en orden ASC: ");
for (let nombre of nombres){
    document.write("<br>"+nombre);
}

nombres.reverse();
document.write("<br><br>Arreglo de nombres en orden DES: ");
for (let nombre of nombres){
    document.write("<br>"+nombre);
}

