import Botao from '../../components/Botao'
import Cabecalho from '../../components/Cabecalho'
import './index.scss'

import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Menu from '../../components/Menu';

export default function Error() {

    const navigate = useNavigate();

    return (
        <>
            <Menu />
            <div className='container-error'>
                <h1 className='notfound'>404 :(</h1>
                <h3 className='mensagem'>Oops! Não encontramos esta pagina!</h3>

            </div>
            <div className='container-botao'>
                <Botao className='um' titulo='Sair' onClick={() => navigate('/')} />
            </div>
        </>

    )
}