let entero;
//Nota: cuando usamos let declarar fuera del ciclo.
do{ //Filtrando números positivos:
    entero = parseInt(prompt("Escribe un número positivo: "));
}while(entero<0);

document.write("<br> El número positivo se guardo correctamente!");

//Tip: usar el operador || o el operador &&
//Crear un filtro con do-while que sólo acepte los números: 1,2,3,4,5.
/* Solución: 
    let entero;
    //Nota: cuando usamos let declarar fuera del ciclo.
    do{ //Filtrando números positivos:
        entero = parseInt(prompt("Escribe un número positivo: "));
    }while(entero<1 || entero>5);
*/