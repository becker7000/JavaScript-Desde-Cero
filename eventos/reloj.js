
//Con la función setInterval ajustamos la ejecución de una función
//cada cierto tiempo dado en milisegundos.
// 1000 milisegundos son 1 segundo:
const intervalo=setInterval(miTiempo,1000);

function miTiempo(){
    const fecha = new Date();
    document.getElementById("mostrar").innerHTML=fecha.toLocaleTimeString();
}  // toLocaleTimeString es un método que nos da la hora en cadena.

//Con esta función detenemos el tiempo:
function pararTiempo(){
    clearInterval(intervalo);
}
