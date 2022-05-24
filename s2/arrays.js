//Los nombres de los arreglos van en plural.
//Declarado un arreglo, no importan los saltos de línea:
const marcasAutos=[
    "BWM",
    "Ford",
    "Toyota",
    "Subaru",
    "Chevrolet"
];

//Declando otro arreglo:
const numeros = new Array(8,-4,19,51,6,0);

document.write("<br> Cantidad de marcas: "+marcasAutos.length);
document.write("<br> Cantidad de numeros: "+numeros.length);

document.write("<br><br>");

for(let marcaAuto of marcasAutos){
    document.write("<br> Marca: "+marcaAuto);
}

//Encontrando el número mayor del arreglo:
document.write("<br><br> Numeros: ")
let mayor=numeros[0];
for(let i in numeros){
    document.write(" "+numeros[i]);
    if(mayor<numeros[i])
        mayor=numeros[i];
}
document.write("<br>El mayor elemento es: "+mayor);