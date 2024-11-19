import './index.scss'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Botao from '../../components/Botao';
import Cabecalho from '../../components/Cabecalho';

export default function Cadastrar() {
    const [token, setToken] = useState(null);

    const [produto, setProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [fornecedor, setFornecedor] = useState('');

    const navigate = useNavigate()
    const { id } = useParams();

    async function salvar() {
        try {
            let paramCorpo = {
                "produto": produto,
                "descricao": descricao,
                "quantidade": quantidade,
                "valor": valor,
                "fornecedor": fornecedor
            }
    
            if (id == undefined) {
                
                const url = `http://localhost:5032/produto?x-access-token=${token}`;
                await axios.post(url, paramCorpo);
                
                navigate('/consultar')
            } else {
                
                const url = `http://localhost:5032/produto/${id}?x-access-token=${token}`;
                await axios.put(url, paramCorpo);
                
                navigate('/consultar')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    async function consultar(token) {
        if (id != undefined) {
            const url = `http://localhost:5032/produto/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            setProduto(dados.produto)
            setDescricao(dados.descricao)
            setQuantidade(dados.quantidade)
            setValor(dados.valor)
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('TOKEN')
        setToken(token)

        if (token == 'null') {
            navigate('/')
        }

        consultar(token);
    }, [])

    return (
        <>
            <Cabecalho/>
            <div className='pagina-cadastrar'>
                <div className='form-cadastrar'>
                    <h2>Novo Produto</h2>
                    <h1>{id ? 'EDITAR' : 'CADASTRAR'}</h1>

                    <div>
                        <label>Produto:</label>
                        <input
                            type='text'
                            value={produto}
                            onChange={e => setProduto(e.target.value)} />
                    </div>
                    <div>
                        <label>Descrição:</label>
                        <input
                            type='text'
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)} />
                    </div>
                    <div>
                        <label>Quantidade:</label>
                        <input
                            type='number'
                            value={quantidade}
                            onChange={e => setQuantidade(e.target.value)} />
                    </div>
                    <div>
                        <label>Valor</label>
                        <input
                            type='number'
                            min="0" 
                            step="0.01" 
                            placeholder="0.00"
                            value={valor}
                            onChange={e => setValor(e.target.value)} />
                    </div>
                    <div>
                        <label>Fornecedor</label>
                        <input
                            type='number'
                            value={fornecedor}
                            onChange={e => setFornecedor(e.target.value)} />
                    </div>
                
                    <div className='acoes-cadastrar'>
                        <Botao titulo='Voltar' onClick={() => navigate('/consultar')} outline />
                        <Botao titulo='Salvar' onClick={salvar} />
                    </div>
                </div>

                <Toaster />
            </div>
        </>
    )
}
