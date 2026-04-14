type Unidad = "cm" | "m" | "km";

function convertirMedida(valor: number, de: Unidad, a: Unidad): number {
  let metros = 0;

  if (de === "cm") metros = valor / 100;
  else if (de === "m") metros = valor;
  else if (de === "km") metros = valor * 1000;

  if (a === "cm") return metros * 100;
  if (a === "m") return metros;
  if (a === "km") return metros / 1000;

  return 0;
}

const resultado = convertirMedida(5, "km", "m");