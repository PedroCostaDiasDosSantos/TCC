import { autenticar } from '../utils/jwt.js';
import { gerarToken } from '../utils/jwt.js';
import * as db from '../repository/loginRepository.js'; 

import {Router} from "express";
const endpoints = Router();

endpoints.get('/adm/', async (req, resp) =>{
    try{
        let registros = await db.consultarLogin();
        resp.send(registros);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/adm/', async (req, resp) => {
    try {
        let pessoa = req.body;

        let usuario = await db.validarUsuario(pessoa);

        if (usuario == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(usuario);
            resp.send({
                "usuario": usuario,
                "token": token
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/adm/', async (req, resp) => {
    try {
        let pessoa = req.body;

        let id = await db.inserirLogin(pessoa);

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


endpoints.put('/adm/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarLogin(id, pessoa);
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


endpoints.delete('/adm/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerLogin(id);
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




export default endpoints;






