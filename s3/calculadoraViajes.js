
let viaje=document.getElementById("viaje");
viaje.addEventListener("submit",calcularViaje);

function calcularViaje(event){

    event.preventDefault();

    //Son strings
    let destino = document.forms["viaje"]["destino"].value;
    let presuesto = document.forms["viaje"]["presupuesto"].value;
    let transporte = document.forms["viaje"]["transporte"].value;
    let hospedaje = document.forms["viaje"]["hospedaje"].value;
    let comidas = document.forms["viaje"]["comidas"].value;

    let gastos = parseFloat(transporte)+parseFloat(hospedaje)+parseFloat(comidas);
    let libre = parseFloat(presuesto)-gastos;

    if(gastos>presuesto){
        alert("Tus gastos superan tu presupuesto.");
    }

    let pantalla = document.getElementById("pantalla");

    pantalla.textContent=" Dinero libre luego de gastos: "+libre;
    
}