import './index.scss'
import Botao from '../Botao'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from '../Menu'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


export default function Faixa() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

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


    // rolagem

    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // para baixo, esconder o cabeçalho
                setIsHeaderHidden(true);
            } else {
                // para cima, mostrar o cabeçalho
                setIsHeaderHidden(false);
            }

            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>


            <div className="container-menu">
                <button onClick={toggleMenu} className="menu-button">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <h2>Menu</h2>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><a href="#Ajuda">Precisa de Ajuda?</a></li>
                        <div className='finalizar'>
                            <li><Link to='/login' >Finalizar sessão</Link></li>
                        </div>
                        <li><img className='saida' src="./assets/images/sair-icon.png " alt="" /></li>
                    </ul>
                </div>
            </div>

            <div className={`header ${isHeaderHidden ? "hidden" : ""}`}>

                <div className='faixa-container' >


                    <img className='logo-faixa' src="/assets/images/logo.png" alt="" />

                    <div className='linkis'>
                        <a className='link' id='a' href='/lancamento'>Lançamentos</a>
                        <a className='link' id='b' href='/masculino'>Masculino</a>
                        <a className='link' id='c' href='/feminino'>Feminino</a>

                        <input id='buscar' type="text" class="searchh" placeholder="Pesquisar..." />
                        <button class="search-botao">Buscar</button>
                    </div>

                </div>
            </div>

        </>

    );
}