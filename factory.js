// clase base: define lo que todas las notificaciones deben poder hacer
class Notificacion {
  enviar(mensaje) {
    throw new Error("Cada tipo de notificación debe implementar enviar()");
  }
}

class Email extends Notificacion {
  enviar(mensaje) {
    console.log("[EMAIL] " + mensaje);
  }
}

class SMS extends Notificacion {
  enviar(mensaje) {
    console.log("[SMS] " + mensaje);
  }
}

class Push extends Notificacion {
  enviar(mensaje) {
    console.log("[PUSH] " + mensaje);
  }
}

// la fábrica decide qué clase crear según el tipo que le pidan
class NotificacionFactory {
  static crear(tipo) {
    switch (tipo) {
      case "email":
        return new Email();
      case "sms":
        return new SMS();
      case "push":
        return new Push();
      default:
        throw new Error("Tipo de notificación desconocido: " + tipo);
    }
  }
}

// Demo
const tipos = ["email", "sms", "push"];

for (const tipo of tipos) {
  const notificacion = NotificacionFactory.crear(tipo);
  notificacion.enviar("Tu pedido fue enviado");
}

try {
  NotificacionFactory.crear("whatsapp");
} catch (e) {
  console.log("Error esperado:", e.message);
}