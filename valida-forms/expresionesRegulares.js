
function validarExpReg(){

    //Declaración de una expresión regular:
    //Las expresiones regulares las podemos buscar en google
    const slug = /[a-z0-9_-]{4,8}/;
    let cadena = document.forms["formulario"]["exp"].value;

    //Validando que la cadena cumpla la expresión regular:  
    if(slug.test(cadena)){
        alert("La expresion regular sí se cumple.");
    }else{
        alert("La expresión regular no se cumple.");
    }

}