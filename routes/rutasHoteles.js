// Espacio para definir las rutas o Endpoints especificos de su API
import express from "express";

// Importo los controladores
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
import { ControladorReserva } from "../controllers/ControladorReserva.js";
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()

export let rutasAPI = express.Router();

// ACÁ PONE SUS ENDPOINTS
rutasAPI.post("/api/habitaciones", controladorHabitacion.registrar)
rutasAPI.get("/api/habitaciones", controladorHabitacion.buscarTodas)
rutasAPI.get("/api/habitacion/:id", controladorHabitacion.buscarPorId)
rutasAPI.put("/api/habitaciones/:id", controladorHabitacion.modificar)
rutasAPI.delete("/api/habitaciones/:id", controladorHabitacion.eliminar)

// Aquí están las reservas
rutasAPI.post("/api/reserva", controladorReserva.registrar )
rutasAPI.get("/api/reserva", controladorReserva.buscarTodas)
rutasAPI.get("/api/reserva/:id", controladorReserva.buscarPorId)
rutasAPI.put("/api/reserva/:id", controladorReserva.modificar)
rutasAPI.delete("/api/reserva/:id", controladorReserva.eliminar)
