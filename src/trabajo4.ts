type FieldType = "texto" | "numero" | "email";

interface CampoFormulario {
  nombre: string;
  tipo: FieldType;
  valor: string | number;
}

function detectarErrores(lista: CampoFormulario[]): string[] {
  let errores: string[] = [];

  for (let item of lista) {
    
    if (item.tipo === "texto") {
      if (typeof item.valor !== "string" || item.valor.length === 0) {
        errores.push(item.nombre);
      }
    }

    else if (item.tipo === "numero") {
      if (typeof item.valor !== "number" || item.valor < 0) {
        errores.push(item.nombre);
      }
    }

    else if (item.tipo === "email") {
      if (typeof item.valor !== "string" || !item.valor.includes("@")) {
        errores.push(item.nombre);
      }
    }
  }

  return errores;
}

const misDatos: CampoFormulario[] = [
  { nombre: "Usuario", tipo: "texto", valor: "Miguel" },
  { nombre: "Puntaje", tipo: "numero", valor: 100 },
  { nombre: "Contacto", tipo: "email", valor: "ejemplo.com" }, 
  { nombre: "Ciudad", tipo: "texto", valor: "" }              
];

const camposConFallas = detectarErrores(misDatos);
console.log("Revisión de campos fallidos: " + camposConFallas);