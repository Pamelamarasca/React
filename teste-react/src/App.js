import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {Button} from './Button'

const App = () => {
  const [texto, setTexto] = useState('Texto 1')
  const [titulo, setTitulo] = useState(false)

  useEffect(()=> {
    if(texto === 'Texto 2')
      console.log('Texto do anchor mudou!')
  }, [texto])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {titulo && <h1>Primeira aula React</h1>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          {texto}
        </a>
        <br/>
        <Button handleClick={() => setTexto('Texto 2')} text={'alterar texto'}/>
        <br/>
        <Button handleClick={() => setTitulo(true)} text={'Aparecer titulo'}/>
      </header>
    </div>
  );
}

export default App;
