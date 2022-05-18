
let boton = document.getElementById("boton");

//Como JS espera un función no es necesario usar ()
//pero cuando JS espera el valor de una variable sí usamos ().
boton.addEventListener("click",mostrarFecha);

function mostrarFecha(){
    document.getElementById("fecha").innerHTML=Date();
}