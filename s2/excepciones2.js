
let entrada = parseInt(prompt("Escribe un número (5-10): "));

try{
    if(entrada=="") throw "Dato vacío"; //Sólo con cadenas.
    if(entrada<5 || entrada>10) throw "Fuera de rango";
    if(isNaN(entrada)) throw "El dato debe ser un número";
}catch(error){
    alert(error);
}

document.write("<br>Hola mundo");

let entrada2 = parseInt(prompt("Escribe un número positivo: "));

try{
    if(entrada2<0) throw "Entrada negativa, no valida";
}catch(error){
    alert(error);
}

document.write("<br>Hola mundo");
