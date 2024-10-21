import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/';
import Senha from './pages/SenhaNova/';
import Consultar from './pages/buscar';




export default function Rotas() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/esqueciasenha' element={<Senha />} />
                <Route path='/consultar' element={<Consultar />} />
            </Routes>
        </BrowserRouter>


    )
} 