
const mostrar=document.getElementById("mostrar");

function obtenerUbicacion(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostrarUbicacion);
    }else{
        mostrar.innerHTML="Este navegador no soporta la geolocalización.";
    }
}

function mostrarUbicacion(position){
    mostrar.innerHTML="<br> Latitud: "+position.coords.latitude;
    mostrar.innerHTML+="<br> Longitud: "+position.coords.longitude;
}