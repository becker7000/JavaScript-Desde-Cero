const Planeta = require("./planeta");

// Crear instancias de la clase Planeta
const tierra = new Planeta("Tierra", "azul", 3);
const marte = new Planeta("Marte", "rojo", 4);

// Usar el método describir()
tierra.describir(); // El planeta Tierra es de color azul y ocupa la posición 3 desde el Sol.
marte.describir();  // El planeta Marte es de color rojo y ocupa la posición 4 desde el Sol.
