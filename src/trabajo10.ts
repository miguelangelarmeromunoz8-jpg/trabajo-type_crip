type Pago = 
  | { metodo: "tarjeta", numero: string, cvv: number }
  | { metodo: "transferencia", banco: string, cuenta: string }
  | { metodo: "efectivo" };

function validarDatosPago(pago: Pago): string {
  if (pago.metodo === "tarjeta") {
    if (pago.numero.length > 0 && pago.cvv > 0) return "Pago con tarjeta válido";
  } 
  
  else if (pago.metodo === "transferencia") {
    if (pago.banco !== "" && pago.cuenta !== "") return "Transferencia lista";
  } 
  
  else if (pago.metodo === "efectivo") {
    return "Pago en efectivo listo para recibir";
  }

  return "Faltan datos obligatorios";
}

const miPago: Pago = { metodo: "tarjeta", numero: "1234-5678", cvv: 123 };
const estado = validarDatosPago(miPago);