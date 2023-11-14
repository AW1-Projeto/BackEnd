import express from "express"
import { getUsuarios, postUsuarios, loginUsuario, putUsuarios, deleteUsuarios } from "./controladores/usuarioController.js";

const roteador = express.Router();

roteador.get("/", getUsuarios)

roteador.post("/", postUsuarios)

roteador.post("/login", loginUsuario)

roteador.put("/:id", putUsuarios)

roteador.delete("/:id", deleteUsuarios)

export default roteador;