type TipoDeDato = "nombre" | "correo" | "contraseña";

interface LogUsuario {
  tipo: TipoDeDato;
  antes: string;
  despues: string;
}

function procesarHistorial(lista: LogUsuario[]) {

    let totales = {
    nombre: 0,
    correo: 0,
    contraseña: 0
  };

  for (let registro of lista) {
    if (registro.tipo === "nombre") {
      totales.nombre = totales.nombre + 1;
    } 
    else if (registro.tipo === "correo") {
      totales.correo = totales.correo + 1;
    } 
    else if (registro.tipo === "contraseña") {
      totales.contraseña = totales.contraseña + 1;
    }
  }

  return totales;
}

const datosActualizados: LogUsuario[] = [
  { tipo: "nombre", antes: "Miguel", despues: "M. Ángel" },
  { tipo: "correo", antes: "miguel@mail.com", despues: "mangel@mail.com" },
  { tipo: "contraseña", antes: "abc123", despues: "xyz789" },
  { tipo: "nombre", antes: "M. Ángel", despues: "Miguel Muñoz" },
  { tipo: "correo", antes: "mangel@mail.com", despues: "miguel.armero@mail.com" }
];

const reporte = procesarHistorial(datosActualizados);

console.log("Total cambios de nombre: " + reporte.nombre);
console.log("Total cambios de correo: " + reporte.correo);
console.log("Total cambios de contraseña: " + reporte.contraseña);