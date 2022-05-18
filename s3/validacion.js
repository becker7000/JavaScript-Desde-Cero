
function validarFormulario(){

    //forms me regresa el conjunto de todos los formularios
    //con sus campos:
    //Accedemos solamente al formulario -> "formulario"
    let nombre = document.forms["formulario"]["nombre"].value;
    // De qué tipo de dato es nombre? 

    if(nombre==""){
        alert("El campo de nombre es obligatorio.");
        return false;
    }else{
        alert(" Bienvenid@ "+nombre);
    }

    //Así revisamos rápido el tipo de dato que es nombre: 
    //alert(typeof(nombre));

}