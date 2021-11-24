import React, { Component } from 'react'
import styled from "styled-components"
import axios from "axios"


export default class TelaPrestador extends React.Component {
    state = {
      titulo: "",
      descricao: "",
      preco: "",
      formasPagamento: "",
      prazo: ""
    }
  
    componentDidMount(){
    
    }
  
    postCreateJob = () => {
      const url = "https://labeninjas.herokuapp.com"
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
        console.log(erro)
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
                  <input 
                  placeholder={"Título"}
                  value={this.state.titulo}
                  onChange={this.handleTitulo}
                  />
                  <input 
                  placeholder={"Descrição"}
                  value={this.state.descricao}
                  onChange={this.handleDescricao}
                  />
                  <input 
                  placeholder={"Preço"}
                  value={this.state.preco}
                  onChange={this.handlePreco}
                  />
                  <input 
                  placeholder={"Formas de pagamento"}
                  value={this.state.formasPagamento}
                  onChange={this.handleFormasPagamento}
                  />
                  <input 
                  placeholder={"Prazo"}
                  value={this.state.prazo}
                  onChange={this.handlePrazo}
                  />
                  <button onClick={this.postCreateJob}>Cadastrar seu trabalho Ninja</button>
              </div>
          )
      }
  }