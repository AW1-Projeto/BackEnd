import express from "express"

import { getJogos } from "./controladores/jogoController.js";

const roteador = express.Router();

roteador.get("/", getJogos)

// roteador.post("/", postUsuarios)

// roteador.post("/login", loginUsuario)

// roteador.put("/:id", putUsuarios)

// roteador.delete("/:id", deleteUsuarios)

export default roteador;