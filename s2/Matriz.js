


var matrix = Array.from(Array(3),()=>Array(3));

/*

    2[0][0] 5[0][1] 6[0][2] 9[1][0] 4[1][1] 3[1][2] 0[2][0] 1[2][1] 7[2][2] 
    

*/

//Llenando la matriz de números aleatorios:

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        matrix[i][j]=parseInt(Math.random()*10);
    }
}


for(let i=0; i<3; i++){
    document.write("<pre><br>");
    for(let j=0; j<3; j++){
        document.write("|  "+matrix[i][j]);
    }
}