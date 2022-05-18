
function validarExpresion(){

    //Expresión regular para un Slug:
    const slug = /[a-z0-9_-]{3,10}/;
    let cadena = document.forms["formulario"]["exp"].value;

    //Validando la expresión regular:
    if(slug.test(cadena)){
        alert("La expresión regular SÍ se cumple.");
    }else{
        alert("La expresión regular NO se cumple.");
    }

}
