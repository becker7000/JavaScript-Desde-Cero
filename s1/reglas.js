
var mensaje = "aquí va un mensaje";

var nombre="Erick"; //Variable de tipo cadena
var n=23; //Variable de tipo numero
var x=23.4; //Variable de tipo numero
var c='e';
var logico=true;

//Este es un comentario de una sola línea

/*
    Hola, tienes que
    implementar la lógica 
    de la función 1 en la
    función 2.
*/

saludar("Luis");

/**
 * Esta función saluda a una persona 
 * a partir de su nombre.
 * @param {*nombre este parametro es el nombre de la persona
 * que queremos saludar} nombre
 */
function saludar(nombre){
    document.write("Hola "+nombre);
}

saludar("Paco");