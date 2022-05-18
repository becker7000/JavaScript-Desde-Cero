
//document.cookie="nombre=Pedro;";

function crearCookie(){
    document.cookie=
    "nombre="+document.forms["formulario"]["nombre"].value;
}
