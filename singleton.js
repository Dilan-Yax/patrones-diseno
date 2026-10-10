class Configuracion {
  // aquí guardo la única instancia
  static #instancia = null;

  constructor() {
    // si ya existe una, no dejo crear otra
    if (Configuracion.#instancia) {
      throw new Error("Ya existe una instancia, usa Configuracion.getInstance()");
    }
    this.valores = {};
  }

  // la instancia se crea solo la primera vez que alguien la pide
  static getInstance() {
    if (!Configuracion.#instancia) {
      Configuracion.#instancia = new Configuracion();
    }
    return Configuracion.#instancia;
  }

  set(clave, valor) {
    this.valores[clave] = valor;
  }

  get(clave) {
    return this.valores[clave];
  }
}

// Demo
const a = Configuracion.getInstance();
a.set("apiUrl", "http://localhost:3000");

const b = Configuracion.getInstance();
console.log("Valor leído desde b:", b.get("apiUrl"));
console.log("¿a y b son el mismo objeto?", a === b);

try {
  new Configuracion();
} catch (e) {
  console.log("Error esperado:", e.message);
}