
//Forma #2 de usar AJAX -> jQuery.

function peticion(){

    $.ajax("archivo.txt",{

        success(text){
            document.getElementById("mostrar").innerHTML=text;
        },
        error(error){
            document.getElementById("mostrar").innerHTML=error;
        }

    });

}