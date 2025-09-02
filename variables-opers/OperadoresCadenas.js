
//Antes de ES6
let nombre="Carlos";
let apellido="Campdera";
let edad=28;
document.write("<br> Nombre: "+nombre
              +"<br> Apellido: "+apellido
              +"<br> Edad: "+edad);


//Después de ES6 (2015)
//Templates literals (comillas francesas):  ``

document.write(` 
    <br>
    Nombre: ${nombre}
    <br>
    Apellido: ${apellido} 
    <br>
    Edad: ${edad} `);
