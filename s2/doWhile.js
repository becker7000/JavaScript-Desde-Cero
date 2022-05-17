

let dato;
do{
    dato=parseInt(prompt("Escribe un número (1-4): "));
    //No queremos que el dato sea diferente de 1,2,3,4.
}while(dato<1 || dato>4);

document.write("Opción valida");
