import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Botao extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      texto: props.texto,
    }

    this.mudarNome = this.mudarNome.bind(this)

  }

  mudarNome() {
    if (this.state.texto === "clicou"){
      this.setState({ texto: "desclicou" })
    } else {
      this.setState({ texto: "clicou" })
    }
  }

  render() {
    return (
      <>
        <button onClick={this.mudarNome} className='btn btn-success'> {this.state.texto} </button>
      </>
    )
  }
}

export default Botao