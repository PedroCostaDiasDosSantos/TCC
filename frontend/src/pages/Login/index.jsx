import './index.scss';

import { useState } from 'react';

export default function Login() {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.prevenDefault();

    alert("Enviando" + login + " - " + senha)
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='roxo'>
          <img src='/assets/images/roxo.png' alt='a' />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Bem Vindo(a)</h1>
          <img className='User' src='/assets/images/user.png' alt='a' />
          <div className='input-field'>
            <h3>Insira seu email ou numero de celular:</h3>
            <input type='login' placeholder=''
              onChange={(e) => setLogin(e.target.value)} />
          </div>
          <div className='input-field'>
            <h3>Senha:</h3>
            <input type='password' placeholder=''
              onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className='recall-forget'>
            <label>
              <input type='checkbox' />
              Lembre de mim
            </label>
            <a href='/EsqueciaSenha'>Esqueceu a senha</a>
          </div>

          <button>Entrar</button>

        </form>
        <div>
          <a href="https://web.whatsapp.com/"><img className='zap' src="/assets/images/zap.png" /></a> 
        </div>
      </div>

    </div>

  );
}