import express from "express"

import { getNoticias } from "./controladores/noticiaController.js";

const roteador = express.Router();

roteador.get("/", getNoticias)

// roteador.post("/", postUsuarios)

// roteador.post("/login", loginUsuario)

// roteador.put("/:id", putUsuarios)

// roteador.delete("/:id", deleteUsuarios)

export default roteador;