import * as db from '../repository/esquecisenhaRepository.js'; 

import {Router} from "express";
const endpoints = Router();

endpoints.post('/senhanov/', async (req, resp) => {
    try {
        let senha = req.body;

        let id = await db.inserirSenha(senha);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/senha/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let senha = req.body;

        let linhasAfetadas = await db.alterarSenha(id, senha);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhuma senha encontrada' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;






