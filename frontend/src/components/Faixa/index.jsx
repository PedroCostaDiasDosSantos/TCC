import './index.scss'
import Botao from '../Botao'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from '../Menu'


export default function Faixa() {

    const [usuario, setUsuario] = useState(null)
    const navigate = useNavigate();

    async function sair() {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }

    useEffect(() => {
        const usu = localStorage.getItem('USUARIO')
        setUsuario(JSON.parse(usu))
    }, [])

    return (
        <>
            <Menu />
            <div className='faixa-container'>

                <img className='logo-faixa' src="/assets/images/logo.png" alt="" />

                <div className='linkis'>
                    <a className='linki' id='a' href='/lancamento'>Lançamentos</a>
                    <a className='linki' id='b' href='/masculino'>Masculino</a>
                    <a className='linki' id='c' href='/feminino'>Feminino</a>

                    <input id='busca' type="text" class="search" placeholder="Pesquisar..." />
                    <button class="search-botao">Buscar</button>
                </div>

            </div>
        </>

    );
}