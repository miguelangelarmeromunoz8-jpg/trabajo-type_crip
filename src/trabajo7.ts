interface Producto {
  id: number;
  nombre: string;
  stock: number;
  tipo: "alimentos" | "tecnología" | "papelería";
}

function chequearAlertaStock(prod: Producto): string {
  const { tipo, stock } = prod;

  if (tipo === "alimentos" && stock < 20) return "Bajo stock";
  if (tipo === "tecnología" && stock < 5) return "Bajo stock";
  if (tipo === "papelería" && stock < 50) return "Bajo stock";
  
  return "Stock normal";
}
const listaProductos: Producto[] = [
  { id: 101, nombre: "Manzanas", stock: 15, tipo: "alimentos" },
  { id: 202, nombre: "Mouse", stock: 10, tipo: "tecnología" },
  { id: 303, nombre: "Papel Bond", stock: 40, tipo: "papelería" }
];

const resultadosFinales: string[] = [];

for (let x = 0; x < listaProductos.length; x++) {
  const item = listaProductos[x];
  resultadosFinales.push(chequearAlertaStock(item));
}