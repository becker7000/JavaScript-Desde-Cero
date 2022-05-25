
let boton = document.getElementById("boton");
boton.addEventListener("click",moverCuadrado);

let boton2= document.getElementById("boton");
boton.addEventListener("click",moverCuadrado2);

function moverCuadrado(){

    //Se reinicia el valor del intervalo.
    let intervalo=null;
    const cuadrado=document.getElementById("animacion");
    let posicion=0; //El cuadro grande tiene 400px
    clearInterval(intervalo);
    intervalo=setInterval(animacion,5);

    //Función aninada:
    function animacion(){
        if(posicion==350){
            clearInterval(intervalo);
        }else{
            posicion++;
            //Significa que se va despegando de la izquierda:
            cuadrado.style.left=posicion+"px";
        }
    }

}

function moverCuadrado2(){

    //Se reinicia el valor del intervalo.
    let intervalo=null;
    const cuadrado=document.getElementById("animacion");
    let posicion=0; //El cuadro grande tiene 400px
    clearInterval(intervalo);
    intervalo=setInterval(animacion,5);

    //Función aninada:
    function animacion(){
        if(posicion==350){
            clearInterval(intervalo);
        }else{
            posicion++;
            //Significa que se va despegando de arriba:
            cuadrado.style.top=posicion+"px";
        }
    }

}
