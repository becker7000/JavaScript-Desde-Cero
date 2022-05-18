
//Objeto literales.
const persona = {
    nombre: {
        primer: "Reus",
        apellido1:"Campos",
        apellido2:"Sanchez"
    }, 
    edad:30,
    direccion : {
        pais: "México",
        ciudad: "Jalisco"
    }
};

console.log("\n\t Nombre: %s",persona.nombre.primer);
console.log("\n\t Apellido 1: %s",persona.nombre.apellido1);
console.log("\n\t Apellido 2: %s",persona.nombre.apellido2);
console.log("\n\t Edad: %d",persona.edad);
console.log("\n\t País: %s",persona.direccion.pais);
console.log("\n\t Ciudad: %s",persona.direccion.ciudad);


// //Funciones constructoras:
// function Persona (nombre,apellido,edad){
//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.edad=edad;
// }

// //Creando una persona con la función constructora:
// const persona1 = new Persona("Juan","Perez",34);
// const persona2 = new Persona("Ana","Ortega",31);

// console.log(persona1);
// console.log(persona2);

// console.log("\n\t Apellido persona 2: %s",persona2.apellido);


// Las clases son plantillas que me ayudan a crear
// de forma practica tantos objetos como quiera.
class Persona{
 
    //Atributos: simpre es obligatorio crear un constructor:
    constructor (nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    //Método:
    mostrarPersona(){
        console.log("\n\t Nombre: %s",this.nombre);
        console.log("\n\t Apellido: %s",this.apellido);
        console.log("\n\t Edad: %d",this.edad);
    }

}

//Esta es una instancia de la clase Persona:
const personaA = new Persona("Pedro","Dorantes",40);
personaA.mostrarPersona();