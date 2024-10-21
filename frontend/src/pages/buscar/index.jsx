import Cabecalho from '../../components/Cabecalho';
import './index.scss';

import { useState } from 'react';

export default function Consultar() {


    const [buscar, setBuscar] = useState("")
    const [cadastrar, setCadastrar] = useState("")
    const [remover, setRemover] = useState("")
    const [alterar, setAlterar] = useState("")

    return (
        <div className='App'>
            <Cabecalho/>
            
        </div>
    )
}