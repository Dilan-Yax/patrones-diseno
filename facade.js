// Subsistemas: cada uno hace lo suyo y no sabe de los demás
class Inventario {
  hayStock(producto, cantidad) {
    console.log("Verificando stock de " + producto + "...");
    return true;
  }
}

class Pago {
  cobrar(tarjeta, monto) {
    console.log("Cobrando $" + monto + " a la tarjeta " + tarjeta + "...");
    return true;
  }
}

class Envio {
  enviar(producto, cantidad) {
    console.log("Enviando " + cantidad + " x " + producto + "...");
  }
}

// La fachada: por fuera un solo método, por dentro maneja los tres pasos
class PedidoFacade {
  constructor() {
    this.inventario = new Inventario();
    this.pago = new Pago();
    this.envio = new Envio();
  }

  realizarPedido(producto, cantidad, precio, tarjeta) {
    if (!this.inventario.hayStock(producto, cantidad)) {
      return "Sin stock";
    }
    if (!this.pago.cobrar(tarjeta, precio * cantidad)) {
      return "Pago rechazado";
    }
    this.envio.enviar(producto, cantidad);
    return "Pedido completado";
  }
}

// Demo: una sola llamada
const tienda = new PedidoFacade();
const resultado = tienda.realizarPedido("Laptop", 1, 800, "1234-5678");
console.log(resultado);