import React, {Component} from 'react';
import './App.css';
import Prototype from 'prop-types'
import styled from 'styled-components'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arrayMesangem:[
      {
        mensagem: '', 
        usuario: '' , 
      } 
    ],
      valorInputUsuario:'',
      valorInputMensagem:''
    };
}
  
adicionarNovaMensagem = (event) => {

  event.preventDefault()
    const novaMensagem = {
    usuario: this.state.valorInputUsuario + ":",
    mensagem: this.state.valorInputMensagem,
  
  };

  const copiaMensagem = [...this.state.arrayMesangem, novaMensagem];
  this.setState({arrayMesangem: copiaMensagem});
};
    onChangeInputUsuario = e => {
      this.setState({ valorInputUsuario: e.target.value});
    }
    onChangeInputMensagem = e => {
      this.setState({valorInputMensagem: e.target.value});
    }


render() {
  const listaDeMensagem = this.state.arrayMesangem.map(msg => {
    return (
      <p>
          <strong>{msg.usuario} </strong>  {msg.mensagem}
      </p>
    );
});
  return (
    <Container>
      
      <ContainerMensagem>
        {listaDeMensagem}
      </ContainerMensagem>
      
      
      <ContainerInput>
        
        <Input 
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Usuário"}
          largura="inputPequeno"
        />
        <Input 
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={"Mensagem"}
          largura= "inputGrande"
        />
      
      <button onClick={this.adicionarNovaMensagem}>Enviar</button>
    
      </ContainerInput>
      

    </Container>

    );
  }
}


const Container = styled.div `
  height: 97vh;
  width: 33vw;
  border: 1px solid black;
  margin: 1px auto;
 
`
const Input = styled.input `

  width: ${props => {
    if(props.largura === "inputGrande") {
      return "70vw"
    } else if (props.largura === "inputPequeno") {
      return "30vw"
    }
  }};
`
const ContainerMensagem = styled.div `
  display: flex;
  flex-direction: column-reverse;
  height:95%;
  border-bottom: none;
 
`
const ContainerInput = styled.form `
  display: flex;
  width: 100%;
  height: 5%;
  
`
export default App;