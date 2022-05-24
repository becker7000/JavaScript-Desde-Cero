let ventana;

//Creamos una variable que guarde la ventana:
function abrirVentana(){
    ventana = window.open("https://es.wikipedia.org/wiki/%C3%8Dndice_de_masa_corporal","Ventana","width=500, height=500");
}

//Función para cerra la ventana:
function cerrarVentana(){
    if(ventana){
        ventana.close();
    }
}

//Función para checar el estado actual de la ventana:
function checarVentana(){

    let texto="";
    
    if(!ventana){
        texto="La ventana nunca ha sido abierta, no existe";
    }else{
        if(ventana.closed){
            texto="La ventana está cerrada";
        }else{
            texto="La ventana está abierta";
        }
    }
    
    document.getElementById("mostrar").innerHTML=texto;

}



