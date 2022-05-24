
let entrada = parseInt(prompt("Escribe un número entre 5-10: "));

try{
    if(entrada<5 || entrada>10) throw "Fuera del rango";
    if(isNaN(entrada)) throw "El dato debe ser un número";
}catch(error){
    document.getElementById("mostrar").innerHTML=
    "<br> Error: "+error;
}