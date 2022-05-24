//Esto que acabamos de hacer es considerado un JSON:
const persona = {
    nombre: "Reus",
    apellido: "Campos",
    edad: 34,
    direccion: {
        no: 215,
        calle: "17 de mayo",
        colonia: "Tabacalera",
        delegacion: "Cuahutemoc",
        ciudad: "Ciudad de México",
        pais: "México",
        codPost: "77712",
    },
    genero: "Masculino",
    telefono: "5512345678",
    inscripcion: {
        paquete: "paquete A",
        duracion: "12 meses",
        modalidad: "en línea",
    }
};

console.log("Nombre: %s",persona.nombre);
console.log("Edad: %d",persona.edad);
console.log("Calle: %s",persona.direccion.calle);
console.log("Colonia: %s",persona.direccion.colonia);
console.log("Paquete: %s",persona.inscripcion.paquete);

//Funciones constructoras:
function usuario(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}

const u1 = new usuario("Juan","Sanchez",45);
console.log(u1);

//Clases en JavaScript:
//Novedad de ES6:

class planeta{

    //Los atributos en clases JS van en el contructor:
    constructor(nombre,posicion,color){
        this.nombre=nombre;
        this.posicion=posicion;
        this.color=color;
    }

    //Método interno a la clase planeta:
    mostrar() {
        console.log("Nombre: %s",this.nombre);
        console.log("Posición: %d",this.posicion);
        console.log("Color: %s",this.color);
    }

}

//Creando un objeto de la clase planeta:
const p1 = new planeta("Mercurio",1,"Gris");
const p2 = new planeta("Venus",2,"Anaranjado");
const p3 = new planeta("Tierra",3,"Azul");

p1.mostrar();
p2.mostrar();
p3.mostrar();


