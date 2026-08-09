import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Botao from './componentes/Botao';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <Botao texto="botão 1" />
          <Botao texto="botão 2" />
          <Botao texto="botão 3" />
        </div>
      </div>
    )
  }


}

export default App;
