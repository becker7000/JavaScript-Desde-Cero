
function mostrarMenu(){

    if(document.getElementById("contenedor").style.display=="none"){
        //JQuery selector,sintáxis: $("nombrePorId") -> show() y hide()
        $("#contenedor").show(); 
    }else{
        $("#contenedor").hide();
    }

}