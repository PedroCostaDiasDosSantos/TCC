import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound/notfound.jsx";

import Login from './pages/Login/';
import Senha from './pages/SenhaNova/';
import Consultar from './pages/buscar/';
import Inicial from './pages/principal/';


import Compra from './pages/compra'
import Cadastrar from './pages/cadastrar';



export default function Rotas() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/esqueciasenha' element={<Senha />} />
                <Route path='/consultar' element={<Consultar />} />
                <Route path='/' element={<Inicial />} />
                <Route path='/comprar' element={<Compra />} />
                <Route path='/cadastro' element={<Cadastrar />} />

                {/* pagina 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>


    )
} 