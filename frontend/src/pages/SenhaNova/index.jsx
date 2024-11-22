import './index.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

export default function Senha() {


    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [Novasenha, setNovasenha] = useState("");


    async function alterar(e) {
        e.preventDefault();
    
        const usuario = {
          "Novasenha": Novasenha,
          "login": login,
          "senha": senha
        }
    
              //  >>>> Servidor Local <<<<
        // const url = `http://localhost:5032/alterar/`
    
              //  >>>> Servidor do Bruno <<<<
        const url = `http://4.172.207.208:5032/alterar/`
        let resp = await axios.post(url, usuario)
    
        if (resp.data.erro != undefined) {
          toast.error(resp.data.erro)
          alert('Usuario Incorreto')
          
        } else {
          
          localStorage.setItem('USUARIO', JSON.stringify(resp.data.usuario))
          localStorage.setItem('TOKEN', resp.data.token)
          navigate('/login')
        }
      }

    const navigate = useNavigate();
    return (
        <>
            <div className='container-senha'>
                <div className='roxoo'>
                    <img className='roxom' src='/assets/images/Group3.png' />
                </div>

                <form className='senha-form' >
                    <h1 className='h1-senha'>Alterar sua Senha</h1>

                    <img className='usuario' src='/assets/images/userlogin.png' alt='a' />


                    <div className='input-field'>
                        <h3>Insira seu Login:</h3>
                        <input id='login' type='login' value={login} placeholder=''
                            onChange={(e) => setLogin(e.target.value)} />
                    </div>
                    <div className='input-field'>
                        <h3>Insira sua senha atual:</h3>
                        <input type='password' id='senha' value={senha} placeholder=''
                            onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <div className='input-field'>
                        <h3>Insira sua nova senha:</h3>
                        <input type='password' id='senha' value={Novasenha} placeholder=''
                            onChange={(e) => setNovasenha(e.target.value)} />
                    </div>

                    <button onClick={alterar}>Redefinir</button>
                </form>
            </div>
        </>
    )
}

