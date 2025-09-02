
function validarFormulario(){

    //forms nos regresa un conjunto de elementos contenidos en todos
    //los formularios del HTML, accedemos a sus campos mediante nombres.

    let nombre=document.forms["formulario"]["nombre"].value;
    console.log(typeof(nombre));

    if(nombre==""){
        alert("El campo de nombre está vacío.");
        return false;
    }else{
        alert(" Bienvenid@ "+nombre);
    }

    //Este if evalua si la cadena es vacía o no.

}