
const linea="document.write('<br> Hola a todos desde eval')";

eval(linea); //Se puede usar para test
/*
    Debemos procurar evitar usar la función eval, a menos
    que sea muy necesario porque puede recibir cualquier línea
    de código entonces ésta línea podría ser peligrosa.
*/

let x=20/0;
// Nos devuelve true or false
if(isFinite(x)){
    document.write("<br> El valor es finito");
}else{
    document.write("<br> El valor es infinito");
}

let a=34;
document.write("<br> ",typeof(a));



