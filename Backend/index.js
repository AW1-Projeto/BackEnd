import express from "express";
import cors from "cors";
import rotasUsuario from "./rotasUsuario.js";
import rotasNoticias from "./rotasNoticias.js";
import rotasJogos from "./rotasJogos.js";

const app = express();

app.use(express.json())
app.use(cors())

app.use("/usuario", rotasUsuario)
app.use("/noticia", rotasNoticias)
app.use("/jogo", rotasJogos)

app.listen(8000)

