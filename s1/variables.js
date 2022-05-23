
var x=10.45;
var y=20.23;
var z=x+y;

console.log(z);

// Los números al sumarse con + se suman
// mientras las cadenas con + se concatenan.


//Ámbito de bloque para let:
{
    let num=45;
    console.log(num);
    // let num=50; esto daría un error.
}

//Ámbito global para var:
{
    var num2=98;
}

console.log(num2);

var num2=100; //Esto no sería posiblo con let.


var _num3;
var _Num3;
