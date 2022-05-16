

var numUno=7;

//var 3numero; //Esto está mal.
var numero3; //Esto está correcto.

/**
 * Estilos de escritura de variables (naming en JavaScript)
 * 
 * Camell case: numUno (Lower Camell Case)
 * Pascal case: NumUno (Upper Camell Case)
 * Snake case: num_uno
 * 
 */


var var_uno=12;


//No podemos redeclarar con let
let numero=5;
// let numero=6; <- esta línea daría un error.

{ //Esta variable vive dentro del bloque
    var x=10;
}
console.log(x); //Sí podemos usar el valor de x.


{ //Esta variable vive dentro del bloque
    let k=34; //Esta variable tiene block scope.
}
console.log(k); //Esto genera un error de referencia.


{
    //Estas variables tienen block scope.
    let a=4;
    let b=5;
    let z=a+b;
    console.log("\n\t El resultado es: %d",z);

}

