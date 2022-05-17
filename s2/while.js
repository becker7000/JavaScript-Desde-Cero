let suma=0;
let contador=0;
let promedio;
let calificacion=0;

while(calificacion!=-1){
    calificacion=parseInt(prompt("Escribe una calificacion (-1 para terminar): "));
    if(calificacion==-1)
        break;
    suma+=calificacion;
    contador++;
    //if(calificacion==-1)
    //    break;
}

promedio=suma/contador;

document.write("<br> Tu promedio es: "+promedio);