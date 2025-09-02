
//Forma #1 de usar AJAX.
//AJAX no es un lenguaje de progrmación.
//AJAX es una técnica para la transmición asíncrona de archivos.
//Con el protocolo HTTP o HTTPS
function peticion(){

    const ajax = new XMLHttpRequest;

    //Función anómima para definir el comportamiento
    //de el objeto ajax al cargar.
    ajax.onload=function(){
        document.getElementById("contendor").innerHTML=
        this.responseText;
    }

    ajax.open("get","archivo.txt");
    ajax.send();
    
}