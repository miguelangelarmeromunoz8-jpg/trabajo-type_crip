interface EmailMensaje {
  tipo: "email"; 
  destinatario: string;
  asunto: string;
  cuerpo: string;
}

interface SMSMensaje{
  tipo: "sms";
  telefono: number;
  mensaje: string;
}

interface PushMensaje {
  tipo: "push";
  usuarioId: string;
  titulo: string;
  appVersion: string;
}

type Notificacion = EmailMensaje | SMSMensaje | PushMensaje;
function enviarNotificacion(notificacion: Notificacion): void {
  switch (notificacion.tipo) {
    case "email":
      console.log("calarca/quindio:" + notificacion.destinatario);
      console.log("entrega de envio:" + notificacion.asunto);
      break;

    case "sms":
      console.log("3234529978: " + notificacion.telefono);
      console.log("notificasion: " + notificacion.mensaje);
      break;

    case "push":
      console.log("id 18: " + notificacion.usuarioId);
      console.log("temu: " + notificacion.titulo);
      break;

    default:
      console.log("alerta no encontrado");
  }
}
const miAviso: Notificacion = {
  tipo: "sms",
  telefono: 3234529978,
  mensaje: "Tu pedido esta en calarca."
};

enviarNotificacion(miAviso);