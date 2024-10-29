import './index.scss'
import Botao from '../Botao'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Rodape(){

    return(
        <footer>
            <center>
                <img src="/assets/images/logo.png" alt="" />
                <div>
                    <thead>
                        <th>Inicio</th>
                        <th>Sobre nós</th>
                        <th>Suport</th>
                    </thead>
                </div>
            </center>
        </footer>
    )
}