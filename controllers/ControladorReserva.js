export class ControladorReserva {
  constructor() {}

  async buscarTodas(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      //1. Hay que recibir datos
      //2. Intentare conectarme a la BD
      //3. Envio la respuesta
      response.status(200).json({
        estado: true,
        mensaje: "Exito buscando las reservas",
        datos: await servicioReserva.buscarTodas(),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos buscando las reservas " + error,
        datos: null,
      });
    }
  }
  async buscarPorId(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      //1. Hay que recibir datos
      let id = request.params.id;
      //2. Con el id que mando el cliente busco la reserva en Base de Datos (BD)
      //3. Respondo al cliente
      response.status(200).json({
        estado: true,
        mensaje: "Exito buscando la reserva",
        datos: await servicioReserva.buscarPorId(id),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos buscando la reserva " + error,
        datos: null,
      });
    }
  }
  async modificar(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      //1. Hay que recibir datos (SI)
      let id = request.params;
      let datosModificar = request;
      //2. Modificar en la Base de Datos (BD)
      //3. Enviar la respuesta
      response.status(200).json({
        estado: true,
        mensaje: "Exito modificando la reserva",
        datos: await servicioReserva.modificar(id, datos),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos modificando la reserva " + error,
        datos: null,
      });
    }
  }
  async registrar(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      //1. Hay que recibir datos (Si)
      let datosRegistrar = request.body;
      //2. Guardelos en la Base de Datos (BD)
      //3. Responda
      response.status(200).json({
        estado: true,
        mensaje: "Exito registrando la reserva",
        datos: await servicioReserva.registrar(datos),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos registrando la reserva " + error,
        datos: null,
      });
    }
  }
  async eliminar(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      //1. Hay que recibir datos (Si)
      let id = request.params.id;
      //2. Elimine lo de la Base de Datos
      //3. Responda
      response.status(200).json({
        estado: true,
        mensaje: "Exito eliminando la reserva",
        datos: await servicioReserva.eliminar(id),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos eliminando la reserva " + error,
        datos: null,
      });
    }
  }
}
