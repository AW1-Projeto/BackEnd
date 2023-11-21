import { db } from "../db.js";

export const getJogos = (req, res) => {
    const q = "SELECT * FROM jogos";

    db.query(q, (error, data) =>{
        if(error) return res.json(error);

        return res.status(200).json(data);
    })
}

// export const postUsuarios = (req, res) => {
//     const q = "INSERT INTO noticias (`titulo`, `time_jogador`, `preview`, `imagem`, `linkNoticia`) VALUES(?)";

//     const values = [
//         req.body.titulo,
//         req.body.time_jogador,
//         req.body.preview,
//         req.body.imagem,
//         req.body.linkNoticia
//     ]

//     db.query(q, [values], (error) =>{
//         if(error) return res.json(error);

//         return res.status(200).json("Notícia criada com sucesso!");
//     })
// }