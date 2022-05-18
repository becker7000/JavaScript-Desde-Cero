
//Forma #2 de usar AJAX

function peticion(){
    $.ajax("info.txt",{

        success(text){
            document.getElementById("mostrar").innerHTML=text;
        },
        error(error){
            document.getElementById("mostrar").innerHTML=error;
        }
    
    })    
}
