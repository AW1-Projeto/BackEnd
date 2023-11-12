import { db } from "../db.js";

export const getUsuarios = (req, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (error, data) =>{
        if(error) return res.json(error);

        return res.status(200).json(data);
    })
}

export const postUsuarios = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `email`, `senha`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha
    ]

    db.query(q, [values], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário criado com sucesso!");
    })
}

export const putUsuarios = (req, res) => {
    const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `senha` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email
    ]

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário alterado com sucesso!");
    })
}

export const deleteUsuarios = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário deletado com sucesso!");
    })
}