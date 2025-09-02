
function validarFormulario(){

    //forms nos regresa un conjunto de elementos contenidos en todos
    //los formularios del HTML, accedemos a sus campos mediante nombres.

    let numero=document.forms["formulario"]["numero"].value;
    numero=parseInt(numero);
    console.log(typeof(numero));

    if(numero<1 || numero >10){
        alert("El número está fuera del rango");
    }else{
        alert("El número "+numero+" está en el rango.");
    }

}