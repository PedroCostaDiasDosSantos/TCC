import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/';
import Senha from './pages/SenhaNova/';




export default function Rotas() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/esqueciasenha' element={<Senha />} />
            </Routes>
        </BrowserRouter>


    )
} 