import './index.scss';

import Cabecalho from '../../components/Cabecalho';
import Botao from '../../components/Botao';
import axios from 'axios'

import { useEffect, useState } from 'react';
import { link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function Consultar() {

    const [token, setToken] = useState(null);
    const [adm, setAdm] = useState([]);

    const navigate = useNavigate();

    async function buscar(){
        const url = `http://localhost:5010/adm?x-access-token=${token}`;
        let resp = await axios.get(url);
        setAdm(resp.data);

        toast(`${resp.data.lenght} iten(s) encontrado(s)!`, { icon: '🔎' })
    }

    async function excluir(id, nome){
        const url =   `http://localhost:5010/adm/${id}?x-access-token=${token}`;
       await axios.delete(url)

       await buscar()
       toast.success(`${nome} removido da lista de produtos!`)
    }

    useEffect(() => {
        let token = localStorage.getItem('TOKEN')
        setToken(token)

        if (token == 'null') {
            navigate('/')
        }
    }, [])

    return (
        <>
            <Cabecalho />
            <div className='pagina-consultar'>
                <h2>NicWear</h2>
                <h1>Consultar</h1>

                <div className='botoes'>
                    <Botao titulo='Buscar' onClick={buscar}/>
                    <Botao titulo='Cadastrar' onClick={() => navigate('/cadastrar')}/>
                </div>

                <table>
                    <thead>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Fornecedor</th>
                    </thead>
                </table>
            </div>
        </>
    )
}