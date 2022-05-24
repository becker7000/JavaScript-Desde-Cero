
//Declarando un arreglo bidimensional de 3x3
let matrix = Array.from(Array(3),()=>Array(3));

/*
    Las matrices usan lógica 0:

    2[0][0]       5[0][1]       6[0][2]
    9[1][0]       4[1][1]       3[1][2]
    0[2][0]       1[2][1]       7[2][2]


    2, 5, 6, 9, 4, 3, 0, 1, 7

*/

//Llenando la matriz con numeros aleatorios:
// i <- fila y j <- columnas
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        // Nota: random() nos devuelve un número entre 0 y 1
        // pero nunca 1.
        matrix[i][j]=parseInt(Math.random()*10);
        //Generamos números aleatorios entre 0 y 1, 
        //multiplicamos por 10 para que sean entre 0 y 10,
        //transformamos a enteros para que no tenga decimales.
    }
}

//Plantilla para imprimir en forma de matriz:
document.write("<br> Matriz: ");
for(let i=0;i<3;i++){
    document.write("<br><br>");
    for(let j=0;j<3;j++){
        document.write("&nbsp; &nbsp; &nbsp;"+matrix[i][j]);
    }
}
