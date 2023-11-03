import { ServicioHabitacion } from "../services/ServicioHabitacion.js";
export class ControladorHabitacion {
  constructor() {}

  async buscarTodas(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Hay que recibir datos
      //2. Intentare conectarme a la BD
      //3. Envio la respuesta
      response.status(200).json({
        estado: true,
        mensaje: "Exito buscando las habitaciones",
        datos: await servicioHabitacion.buscarTodas(),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos buscando las habitaciones " + error,
        datos: null,
      });
    }
  }
  async buscarPorId(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Hay que recibir datos
      let id = request.params.id;
      //2. Con el id que mando el cliente busco la habitación en Base de Datos (BD)
      //3. Respondo al cliente
      response.status(200).json({
        estado: true,
        mensaje: "Exito buscando la habitación",
        datos: await servicioHabitacion.buscarPorId(id),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos buscando la habitación " + error,
        datos: null,
      });
    }
  }
  async modificar(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Hay que recibir datos (SI)
      let id = request.params;
      let datosModificar = request;
      //2. Modificar en la Base de Datos (BD)
      //3. Enviar la respuesta
      await servicioHabitacion.modificar(id, datos);
      response.status(200).json({
        estado: true,
        mensaje: "Exito modificando la habitación",
        datos: await servicioHabitacion.modificar(id, datos),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos modificando la habitación " + error,
        datos: null,
      });
    }
  }
  async registrar(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Hay que recibir datos (Si)
      let datosRegistrar = request.body;
      //2. Guardelos en la Base de Datos (BD)
      //3. Responda
      //await servicioHabitacion.registrar(datos)
      response.status(200).json({
        estado: true,
        mensaje: "Exito registrando la habitación",
        datos: await servicioHabitacion.registrar(datos),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos registrando la habitación " + error,
        datos: null,
      });
    }
  }
  async eliminar(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      //1. Hay que recibir datos (Si)
      let id = request.params.id;
      //2. Elimine lo de la Base de Datos
      //3. Responda
      response.status(200).json({
        estado: true,
        mensaje: "Exito eliminando la habitación",
        datos: await servicioHabitacion.eliminar(id),
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "Fallamos eliminando la habitación " + error,
        datos: null,
      });
    }
  }
}
