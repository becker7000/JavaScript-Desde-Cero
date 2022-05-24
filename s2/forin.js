
//Los arreglos se nombran en plural:
            //   0       1      2       3
const colores=["negro","café","rojo","amarillo","verde","azul"];

for(let i in colores){
    document.write("<br> "+colores[i]);
}

//Ejercicio 2 de for in

const numeros=[34,12,90,4,24,3];

//Los códigos de formato nos ayuda a imprimir los tipos de datos
//en consola: %d (enteros), %f (flotantes), %s (strings)...
for(let i in numeros){
    console.log(" %d * 3 = %d",numeros[i],numeros[i]*3);
}