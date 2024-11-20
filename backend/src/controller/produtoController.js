import { autenticar } from '../utils/jwt.js';
import * as db from '../repository/produtoRepository.js'; 

import {Router} from "express";
const endpoints = Router();

endpoints.get('/produto', autenticar, async (req, resp) =>{
    try{
        let idUsuario = req.user.id;
        let registros = await db.consultarProduto(idUsuario);
        resp.send(registros);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/produto/:id', autenticar, async (req, resp) =>{
    try{
        let id = req.params.id;
        let registros = await db.consultarProduto(id);
        resp.send(registros[0]);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/produto/', autenticar, async (req, resp) => {
    try {
        let produto = req.body;
        
        produto.idUsuario = req.user.id;

        let id = await db.inserirProduto(produto);

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


endpoints.put('/produto/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarProduto(id, pessoa);
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






