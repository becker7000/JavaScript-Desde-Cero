
let boton=document.getElementById("mostrar");

//Como JS espera una función dentro del controlador de eventos
//no es necesario usar ().
boton.addEventListener("click",mostrarFecha);

function mostrarFecha(){
    document.getElementById("fecha").innerHTML=Date();
}