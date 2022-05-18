
document.getElementById("boton").addEventListener("click",mover);

function mover(){
    let id=null;
    //Este cuadrado chico:
    const elemento = document.getElementById("animacion");
    let posicion=0;
    clearInterval(id); //Esto resetea la animación
    id=setInterval(cuadrado,20);

    function cuadrado(){
        if(posicion==350){
            clearInterval(id);
        }else{
            posicion++;
            elemento.style.top=posicion+"px";
            elemento.style.left=posicion+"px";
        }
    }


}