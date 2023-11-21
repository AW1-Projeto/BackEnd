import { db } from "../db.js";

export const getNoticias = (req, res) => {
    const q = "SELECT * FROM noticias";

    db.query(q, (error, data) =>{
        if(error) return res.json(error);

        return res.status(200).json(data);
    })
}

export const postUsuarios = (req, res) => {
    const q = "INSERT INTO noticias (`titulo`, `time_jogador`, `preview`, `imagem`, `linkNoticia`) VALUES(?)";

    const values = [
        req.body.titulo,
        req.body.time_jogador,
        req.body.preview,
        req.body.imagem,
        req.body.linkNoticia
    ]

    db.query(q, [values], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Notícia criada com sucesso!");
    })
}

// export const putUsuarios = (req, res) => {
//     const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `senha` = ? WHERE `id` = ?";

//     const values = [
//         req.body.nome,
//         req.body.email
//     ]

//     db.query(q, [...values, req.params.id], (error) =>{
//         if(error) return res.json(error);

//         return res.status(200).json("Usuário alterado com sucesso!");
//     })
// }

// export const deleteUsuarios = (req, res) => {
//     const q = "DELETE FROM usuarios WHERE `id` = ?";

//     db.query(q, [req.params.id], (error) =>{
//         if(error) return res.json(error);

//         return res.status(200).json("Usuário deletado com sucesso!");
//     })
// }