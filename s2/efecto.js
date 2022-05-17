let intervalo;

function cambiarColor(){
    intervalo=setInterval(parpadear,800);
}

function parpadear(){
    let titulo=document.getElementById("titulo");
    titulo.style.color=(titulo.style.color=='darkgreen')? 'darkred' : 'darkgreen' ;
}

function detenerEfecto(){
    clearInterval(intervalo);
}