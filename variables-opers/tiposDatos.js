

let x=10;
console.log(x,typeof(x));

let y=45.56;
console.log(y,typeof(y));

let mensaje="Hola a todos";
console.log(mensaje,typeof(mensaje));
//El método length funciona para cadenas y para arreglos.
console.log(mensaje.length);

let resultado="Volvo"+15;
console.log(resultado,typeof(resultado));
//Las cadenas absorben el tipo de dato numerico.

let numero; //Variable sin valor.
console.log(numero,typeof(numero));

//Mandando a imprimir una variable que no existe:
console.log(typeof(t));

//Tipo de dato null (primitivo):
console.log(typeof(null));

//Cadenas:
let cadena1 = 'Presentamos el nuevo "Mustang Mach-E"';
document.write("<br>"+cadena1);

//Número con notación científica:
let z1=435e5; //435*10^5=435*10*10*10*10*10=43500000
let z2=987e-5; // 987/100000=0.00987
console.log(z1);
//Nota: para duplicar una línea hacia abajo 
//usamos alt+shift+flecha hacia abajo
console.log(z2);

// Booleanos
let valor=(3<12);
console.log(valor);
