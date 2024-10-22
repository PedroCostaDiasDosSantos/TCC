import { autenticar } from '../utils/jwt.js';
import * as db from '../repository/buscaRepository.js'; 

import {Router} from "express";
const endpoints = Router();

endpoints.get('/busca/', autenticar, async (req, resp) =>{
    try{
        let registros = await db.consultarBusca();
        resp.send(registros);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/busca/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let registros = await db.consultarBusca(id);
        resp.send(registros[0]);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/busca/', autenticar, async (req, resp) => {
    try {
        let busca = req.body;

        let id = await db.inserirBusca(busca);

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


endpoints.put('/busca/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarBusca(id, pessoa);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/produto/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerProduto(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum produto encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default endpoints;






