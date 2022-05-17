//Con esta linea de código fijamos un intervalo.
const intervalo = setInterval(miTiempo,1000);
// 1000 milisegundos = 1 segundo

function miTiempo(){
    const fecha = new Date();
    document.getElementById("mostrar").innerHTML=fecha.toLocaleTimeString();
} // toLocateTimeString nos la hora local en un String.

//Con esta función paramos el tiempo.
function pararTiempo(){
    clearInterval(intervalo);
}
