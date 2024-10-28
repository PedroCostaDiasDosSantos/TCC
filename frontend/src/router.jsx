import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/';
import Senha from './pages/SenhaNova/';
import Consultar from './pages/buscar';
import Inicial from './pages/principal';

import Compra from './pages/compra'



export default function Rotas() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/esqueciasenha' element={<Senha />} />
                <Route path='/consultar' element={<Consultar />} />
                <Route path='/inicial' element={<Inicial />} />
                <Route path='/comprar' element={<Compra />} />
            </Routes>
        </BrowserRouter>


    )
} 