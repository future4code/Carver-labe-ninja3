import React from 'react'
import axios from "axios"
import styled from "styled-components"

// Tela para prestadores de serviço (ninjas) divulgarem seu trabalho


const FormularioInput = styled.input`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px #a3a3a3;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 1rem;
  height: 1rem;
  width: 10rem;
  max-height: 10rem;
  align-items: center;
  text-align: center;

  hr {
    border-style: none;
    border-top-style: solid;
    border-color: #ebebeb;
    border-width: 1px;
  }

`;

export default class TelaPrestador extends React.Component {
    state = {
      titulo: "",
      descricao: "",
      preco: "",
      formasPagamento: [],
      prazo: ""
    }
  
    // componentDidMount(){
    
    // }
  
    postCreateJob = () => {
      const url = "https://labeninjas.herokuapp.com/jobs"
      const body = {
        title: this.state.titulo,
        description: this.state.descricao,
        price: this.state.preco,
        paymentMethods: this.state.formasPagamento,
        dueDate: this.state.prazo,
      }
      axios.post(url, body, {
        headers: {
          Authorization: "1e1ca19f-df22-47fd-af90-636ae476e7a2"
        }
      })
      .then((resp) => {
        console.log(resp)
      })
      .catch((erro) => {
        console.log(erro.response)
      })
    }
  
    handleTitulo = (event) => {
      this.setState({titulo: event.target.value})
    }
  
    handleDescricao = (event) => {
      this.setState({descricao: event.target.value})
    }
  
    handlePreco = (event) => {
      this.setState({preco: event.target.value})
    }
  
    handleFormasPagamento = (event) => {
      this.setState({formasPagamento: event.target.value})
    }
  
    handlePrazo = (event) => {
      this.setState({prazo: event.target.value})
    }
  
      render () {
          return (
              <div>
                  <p>Prestador</p>
                  <h1>Cadastre o seu serviço aqui!</h1>
                  <FormularioInput 
                  placeholder={"Título"}
                  value={this.state.titulo}
                  onChange={this.handleTitulo}
                  />

                  <FormularioInput 
                  placeholder={"Descrição"}
                  value={this.state.descricao}
                  onChange={this.handleDescricao}
                  />

                  <FormularioInput 
                  placeholder={"Preço"}
                  value={this.state.preco}
                  onChange={this.handlePreco}
                  />
                
                  {/* Quero ver como mandar esse dado para a API*/}                  
                  
                    <p>Qual a forma de pagamento aceita?</p>
                    <select multiple value={this.state.formasPagamento} onChange={this.handleFormasPagamento}>
                      <option value="cartdebito">Cartão de Débito</option>
                      <option value="cartcredito">Cartão de Crédito</option>
                      <option value="pix">Pix</option>
                      <option value="boleto">Boleto</option>
                      <option value="dinheiro">Dinheiro</option>
                    </select>
                    {/* <button type="submit">Adicionar</button> */}
                  

                  {/* <FormularioInput 
                  placeholder={"Formas de pagamento"}
                  value={this.state.formasPagamento}
                  onChange={this.handleFormasPagamento}
                  /> */}

                  <FormularioInput 
                  placeholder={"Prazo"}
                  value={this.state.prazo}
                  onChange={this.handlePrazo}
                  />

                  <button onClick={this.postCreateJob}>Cadastrar seu trabalho Ninja</button>
              </div>
          )
      }
  }