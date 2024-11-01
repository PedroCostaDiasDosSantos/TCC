import { autenticar } from '../utils/jwt.js';
import { gerarToken } from '../utils/jwt.js';
import * as db from '../repository/loginRepository.js'; 

import {Router} from "express";
const endpoints = Router();

endpoints.post('/entrar/', async (req, resp) => {
    try {
        let pessoa = req.body;

        let usuario = await db.validarUsuario(pessoa);

        if (usuario == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(usuario);
            resp.send({
                 token
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
        console.error("Erro ao inserir usuário:", err);
        resp.status(400).send({
            erro: err.message
        })
    }
})







export default endpoints;






