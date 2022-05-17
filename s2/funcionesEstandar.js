

const linea="document.write('<br> Hola desde eval');";

eval(linea);
//Debemos evitar implementar eval, a menos que sea muy necesario
//ya que eval puede recibir cualquier código dentro de una cadena
//y este puede ser peligroso.


let x=20/0;

//isFinite() devuelve verdadero si el número es finito.

if(isFinite(x))
    document.write("<br> El número es finito.");
else
    document.write("<br> El número es infinito.");

let valor=20;
// null se toma como dato primitivo

if(isNaN(valor)){
    document.write("<br> El valor es una cadena.");
}else
    document.write("<br> El valor sí es numérico.");


//Es un tipo de dato primitivo.
console.log(typeof(null));

// Objeto Date()
const fecha = new Date(); //Así creamos una fecha actúal.
document.write("<br> "+fecha);

switch(fecha.getDay()){ 
    case 0:
        document.write("<br> Hoy es domingo ");
        break;
    case 1:
        document.write("<br> Hoy es lunes ");
        break;
    case 2:
        document.write("<br> Hoy es martes ");
        break;
    case 3:
        document.write("<br> Hoy es miércoles ");
        break;
    case 4:
        document.write("<br> Hoy es jueves ");
        break;
    case 5:
        document.write("<br> Hoy es viernes ");
        break;
    case 6:
        document.write("<br> Hoy es sábado ");
        break;
}

document.write(fecha.getDate());


document.write("<br> Dia: "+fecha.getDate()+
                "<br> Mes: "+fecha.getMonth()+
                "<br> Año: "+fecha.getFullYear());