
//Podemos pedir datos al usuario con prompt
//todo lo que guarda prompt es tipo string.
var nombre = prompt("Escribe tu nombre: ");

//Podemos visualizar información con:
//Nota: el simbolo + sirve para concatenar:
document.write("<br> Hola "+nombre);

/*
    El método write del objeto document
    recibe código HTML, nota: no podemos usar 
    secuencias de escapado (\n\t) dentro de él.
*/