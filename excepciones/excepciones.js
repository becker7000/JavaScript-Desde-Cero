
try{
    alsssert("Mensaje de alerta!");
}catch(error){
    document.getElementById("mostrar").innerHTML=
    "<br> Nombre del error: "+error.name+
    "<br> Mensaje: "+error.message;
}
