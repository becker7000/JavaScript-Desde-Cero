

//Forma #1 de visualizar datos: innerHTML

var numero=10;

document.getElementById("mostrar").innerHTML="<br> El numero es: "+numero;

//Forma #2 de visualizar datos: document.write
document.write("<br> Otra forma de mostra información.");

//Estos ultimos dos métodos pueden usar código HTML dentro de sus cadenas.


//Forma #3 de visualizar datos: alert()
//Nota: alert no ejecuta las etiquetas HTML en cambio puede usar
//las secuencias de escape.
// \n \t \r \a 
alert("\n\t Otra forma de ver \n\t información desde JavaScript");

//Forma #4 de visualizar datos: console.log()
//Nota: console.log no ejecuta las etiquetas HTML en cambio puede usar
//las secuencias de escape.
// \n \t \r \a 

console.log("\n\t Hola a todos desde la consola");