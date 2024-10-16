import './App.css';
import Group1 from './components/images/Group1.png'
import logo from './components/images/logo.png'

function App() {
  return (
    <div className='App'>
      <div className='roxo'>
        <img src={Group1}/>
      </div>
      <div className='logo'>
        <img src={logo}/>
      </div>
    </div>

  );
}

export default App;
