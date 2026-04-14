type tipoTransaccion = "ingresar" | "egreso"

interface Transaccion {
  monto: number;
  tipo: tipoTransaccion;
  categoria: string;
}

function agruparPorTipo(transacciones: Transaccion[]) {
  return transacciones.reduce(
    (total, t) => {
      if (t.tipo === "ingresar") {
        total.ingreso += t.monto;
      } else {
        total.egreso += t.monto;
      }
      return total;
    },
    { ingreso: 0, egreso: 0 } 
  );
}
console.log('resuelto')