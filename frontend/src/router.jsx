import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/';
import Senha from './pages/SenhaNova/';
import Consultar from './pages/buscar/';
import Inicial from './pages/principal/';
import Error from './pages/error/';

import Compra from './pages/compra'



export default function Rotas() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/esqueciasenha' element={<Senha />} />
                <Route path='/consultar' element={<Consultar />} />
                <Route path='/' element={<Inicial />} />
                <Route path='/comprar' element={<Compra />} />
                <Route path='/error' element={<Error />} />
            </Routes>
        </BrowserRouter>


    )
} 