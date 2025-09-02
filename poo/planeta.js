class Planeta {
  constructor(nombre, color, posicion) {
    this.nombre = nombre;
    this.color = color;
    this.posicion = posicion; // Entero indicando su posición desde el Sol, por ejemplo
  }

  describir() {
    console.log(`El planeta ${this.nombre} es de color ${this.color} y ocupa la posición ${this.posicion} desde el Sol.`);
  }
}

module.exports = Planeta;