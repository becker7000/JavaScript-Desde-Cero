

// 1,2,3,7,8,9
let dato;

do{ //Este cuerpo se ejecuta mínimo una vez.
    dato=parseInt(prompt("Escribe un número: "));
}while(dato<1 || (dato>3 && dato<7) || dato>9);

document.write("<br> El número está en el rango.");

