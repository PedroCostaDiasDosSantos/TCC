import './index.scss'
import Botao from '../Botao'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Cabecalho() {

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
        <div className='cabecalho-container'>

            <img className='logo' src="/assets/images/logo.png" alt="" />
            
            <h2>{usuario?.nome}!</h2>

            <Botao titulo='Sair' onClick={sair} outline />
        </div>
    );
}