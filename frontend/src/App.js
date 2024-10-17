import './App.css';
import Group1 from './assets/images/Group2.png'
import User from './assets/images/user.png'
import { FaUser, FaLock } from 'react-icons/fa'

import { useState } from 'react';

function App() {

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
          <img src={Group1} />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Bem Vindo(a)</h1>
          <img className='User' src={User}/>
          <div className='input-field'>
            <h3>Insira seu email ou numero de celular:</h3>
            <input type='email' placeholder='' 
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
            <a href='#'>Esqueceu a senha</a>
          </div>
          
          <button>Entrar</button>

        </form>
      </div>

    </div>

  );
}

export default App;
