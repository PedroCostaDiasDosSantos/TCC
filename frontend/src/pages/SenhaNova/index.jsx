import './index.scss'

import { useState } from 'react'


export default function Senha() {


    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [newsenha, setNewsenha] = useState("");


    return (
        <div className='senha'>
            <div className='container'>
                <div className='roxo'>
                    <img src='/assets/images/Group3.png' />
                </div>
            </div>
        </div>
    )
}

