//Valor booleano que no dice si está cerrada la ventana:
let miVentana;

function abrirVentana(){
    miVentana=window.open("","miVentana","width=500, height=500");
}

function cerrarVentana(){
    if(miVentana)
        miVentana.close(); 
}

function checarMiVentana(){
    let texto="";
    if(!miVentana)
        texto="La ventana nunca ha sido abierta.";
    else{
        if(miVentana.closed)
            texto="La ventana está cerrada.";
        else
            texto="La ventana está abierta.";
    }    
    document.getElementById("mostrar").innerHTML=texto;
}

