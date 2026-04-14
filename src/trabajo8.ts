type RolUsuario = "admin" | "editor" | "visitante";

interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
  rol: RolUsuario;
}

function filtrarUsuariosEspeciales(lista: Usuario[]) {
  return lista.filter(u => u.edad >= 18 && u.activo === true && u.rol !== "visitante");
}

const misUsuarios: Usuario[] = [
  { nombre: "Miguel", edad: 19, activo: true, rol: "admin" },
  { nombre: "Juan", edad: 17, activo: true, rol: "editor" },
  { nombre: "Luis", edad: 20, activo: false, rol: "admin" },
  { nombre: "Andrés", edad: 25, activo: true, rol: "visitante" }
];

const autorizados = filtrarUsuariosEspeciales(misUsuarios);