import { autenticar } from '../utils/jwt.js';
import * as db from '../repository/fornecedorRepository.js'; 

import {Router} from "express";
const endpoints = Router();

endpoints.get('/fornecedor/', async (req, resp) =>{
    try{
        let registros = await db.consultarFornecedor();
        resp.send(registros);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/fornecedor/', async (req, resp) => {
    try {
        let pessoa = req.body;

        let id = await db.inserirFornecedor(pessoa);

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


endpoints.put('/fornecedor/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarFornecedor(id, pessoa);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum(a) fornecedor(a) encontrado(a)' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/fornecedor/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerFornecedor(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum(a) fornecedor(a) encontrado(a)' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default endpoints;