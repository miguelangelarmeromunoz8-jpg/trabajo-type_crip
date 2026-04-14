type TipoCategoria = "tareas" | "quices" | "examen";

interface Calificacion {
  estudianteId: number;
  materia: string;
  categoria: TipoCategoria;
  nota: number;
}

function resumirNotas(datos: Calificacion[], id: number) {
 
  let acumulador = { tareas: 0, quices: 0, examen: 0 };
  let contador = { tareas: 0, quices: 0, examen: 0 };

  for (let c of datos) {
    if (c.estudianteId === id) {
      acumulador[c.categoria] += c.nota;
      contador[c.categoria] += 1;
    }
  }

  return {
    tareas: acumulador.tareas / (contador.tareas || 1),
    quices: acumulador.quices / (contador.quices || 1),
    examen: acumulador.examen / (contador.examen || 1)
  };
}

const historialNotas: Calificacion[] = [
  { estudianteId: 10, materia: "TypeScript", categoria: "tareas", nota: 4.5 },
  { estudianteId: 10, materia: "TypeScript", categoria: "tareas", nota: 3.5 },
  { estudianteId: 10, materia: "TypeScript", categoria: "quices", nota: 5.0 },
  { estudianteId: 10, materia: "TypeScript", categoria: "examen", nota: 4.0 }
];

const misResultados = resumirNotas(historialNotas, 10);

console.log("Promedio en Tareas: " + misResultados.tareas);
console.log("Promedio en Quices: " + misResultados.quices);
console.log("Promedio en Examen: " + misResultados.examen);