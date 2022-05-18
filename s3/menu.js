
function mostrarMenu(){

    if(document.getElementById("contenedor").style.display=="none"){
        //JQuery selector sintaxis: $("#nombreId") -> show() y hide()
        $("#contenedor").show();
    }else{
        $("#contenedor").hide();
    }

}

