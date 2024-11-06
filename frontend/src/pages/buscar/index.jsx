import './index.scss';

import Cabecalho from '../../components/Cabecalho';
import Botao from '../../components/Botao';
import axios from 'axios'

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function Consultar() {

    const [token, setToken] = useState(null);
    const [adm, setAdm] = useState([]);

    const navigate = useNavigate();

    async function buscar(){
        const url = `http://4.172.207.208:5032/adm?x-access-token=${token}`;
        let resp = await axios.get(url);
        setAdm(resp.data);

        toast(`${resp.data.lenght} iten(s) encontrado(s)!`, { icon: '🔎' })
    }

    async function excluir(id, nome){
        const url =   `http://4.172.207.208:5032/adm/${id}?x-access-token=${token}`;
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
                    <Botao className='botao' titulo='Buscar' onClick={buscar}/>
                    <Botao className='botao' titulo='Cadastrar' onClick={() => navigate('/cadastro')}/>
                </div>

                <table>
                    <thead>
                        <th>Produto</th>
                        <th>Valor</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Fornecedor</th>
                    </thead>

                    <tbody>
                        {adm.map(item =>
                            <tr>
                                <td>{item.produto}</td>
                                <td>{item.valor}</td>
                                <td>{item.descricao}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.fornecedor}</td>
                                <td className='acoes'>
                                    <Link to={`/cadastrar/${item.id}`}><i class='fa-solid fa-pencil botao' /></Link>
                                    <Link onClick={() => excluir (item.id, item.nome)}><i class='fa-solid fa-trash-can botao' /></Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <Toaster />
            </div>
        </>
    )
}