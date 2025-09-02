let intervalo;

//Esta función ejecuta varias veces la función parpadear.
function cambiarColor(){
    intervalo=setInterval(parpadear,800);
}

//Esta función cambiar el color del título.
function parpadear(){
    let titulo=document.getElementById("titulo");
    titulo.style.color=(titulo.style.color=='darkred')? 'darkgreen' : 'darkred' ;
}

function detenerEfecto(){
    clearInterval(intervalo);
}

