import React from 'react'
import axios from "axios"
import {FormularioInput} from './styled'

// Tela para prestadores de serviço (ninjas) divulgarem seu trabalho




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
      const precoNumero = parseFloat(this.state.preco);
      const body = {
        title: this.state.titulo,
        description: this.state.descricao,
        price: precoNumero,
        paymentMethods: this.state.formasPagamento,
        dueDate: this.state.prazo,
      }
      axios.post(url, body, {
        headers: {
          Authorization: "1e1ca19f-df22-47fd-af90-636ae476e7a2"
        }
      })
      .then((resp) => {
        alert("Oba! Cadastro NINJA realizado com sucesso!")
      })
      .catch((erro) => {
        alert("Ooops... Parece que algo deu errado, tente novamente mais tarde.")
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
      const copiaFormasPagamento = [...event.target.value]    
      this.setState({ formasPagamento: copiaFormasPagamento})
    };
    // handleFormasPagamento = (event) => {
    //   this.setState({formasPagamento: event.target.value})
    // }
  
    handlePrazo = (event) => {
      this.setState({prazo: event.target.value})
    }
  
      render () {
          return (
              <div>
                  <p>Prestador</p>
                  <h1>Cadastre o seu serviço aqui!</h1>
                  <form>
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
                      <select value={this.state.formasPagamento} onChange={this.handleFormasPagamento}>
                        <option value="cartdebito">Cartão de Débito</option>
                        <option value="cartcredito">Cartão de Crédito</option>
                        <option value="pix">Pix</option>
                        <option value="boleto">Boleto</option>
                        <option value="dinheiro">Dinheiro</option>
                      </select>
                      
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

                    <button type="submit" onClick={this.postCreateJob}>Cadastrar seu trabalho Ninja</button>
                  </form>

                  
              </div>
          )
      }
  }