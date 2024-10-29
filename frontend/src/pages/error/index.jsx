import Botao from '../../components/Botao'
import Cabecalho from '../../components/Cabecalho'
import './index.scss'

import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function Error() {

    const navigate = useNavigate();

    return(
    <>
        <div>
            <h1 className='notfound'>404 :(</h1>
            <h3>Oops! Não encontramos esta pagina!</h3>

            <div>
                <Botao className='botaoo' titulo='Sair' onClick={() => navigate('/')}/>
            </div>
        </div>
    </>

    )
}