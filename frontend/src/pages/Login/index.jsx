import './index.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate()

  async function entrar(e) {
    e.preventDefault();

    const usuario = {
      "login": login,
      "senha": senha
    }

          //  >>>> Servidor Local <<<<
    const url = `http://localhost:5032/entrar/`

          //  >>>> Servidor do Bruno <<<<
    // const url = `http://4.172.207.208:3064/entrar/`
    let resp = await axios.post(url, usuario)

    if (resp.data.erro != undefined) {
      toast.error(resp.data.erro)
      alert('Usuario Incorreto')
      
    } else {
      
      localStorage.setItem('USUARIO', JSON.stringify(resp.data.usuario))
      localStorage.setItem('TOKEN', resp.data.token)
      navigate('/consultar')
    }
  }

  return (
    <>
      <div className='container'>
        <div className='roxo'>
          <img src='/assets/images/roxooo.png' alt='a' />
        </div>

        <form>

          <h1>Bem Vindo(a)</h1>

          <img className='User' src='/assets/images/user.png' alt='a' />

          <div className='input-field'>
            <h3>Insira seu email ou numero de celular:</h3>
            <input id='login' type='login' value={login} placeholder=''
              onChange={(e) => setLogin(e.target.value)} />
          </div>
          <div className='input-field'>
            <h3>Senha:</h3>
            <input type='password' id='senha' value={senha} placeholder=''
              onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className='recall-forget'>
            <label>
              <input type='checkbox' />
              Lembre de mim
            </label>
            <a href='/EsqueciaSenha'>Esqueceu a senha</a>
          </div>

          <button onClick={entrar}>Entrar</button>

        </form>
        
      </div>

    </>

  );
}