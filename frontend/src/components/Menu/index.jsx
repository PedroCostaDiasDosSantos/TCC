import './index.scss'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Menu() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <><div className="container">
            <button onClick={toggleMenu} className="menu-button">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <h2>Menu</h2>
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><a href="#Ajuda">Precisa de Ajuda?</a></li>
                    <li><a href="#finalizar">Finalizar sessão</a></li>
                </ul>
            </div>

        </div>
        </>

    );
};