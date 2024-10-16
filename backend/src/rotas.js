import loginController from './controller/loginController.js'
import produtoController from './controller/produtoController.js'
import buscaController from './controller/buscaController.js'
import fornecedorController from './controller/fornecedorController.js'
import esquecisenhaController from './controller/esquecisenhaController.js'

export default function adicRotas(servidor){
    servidor.use(loginController);
    servidor.use(produtoController);
    servidor.use(buscaController);
    servidor.use(fornecedorController);
    servidor.use(esquecisenhaController);
}