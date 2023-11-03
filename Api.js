//Esta clase representa un servidor
import express from "express";
import cors from 'cors';

import { rutasAPI} from './routes/rutasHoteles.js'
import {establecerConexion} from './database/conexion.js'

export class Api {
  constructor() {
    this.app = express()
    this.conectarBD()
    this.procesarPeticiones()
  }

  //1. Levantar el servidor
  levantarServidor() {
    // Levantando un servidor
    this.app.listen(3000, function () {
      console.log("Servidor Operando");
    });
  }

  //2. Atiende las peticiones y responde
  procesarPeticiones() {
    // Atendiendo peticiones
    this.app.use(cors())
    this.app.use("/",rutasAPI)
    this.app.use(express.json())
  }

  //3. Se conecta a la Base de Datos
  conectarBD(){
    establecerConexion()
  }


}
