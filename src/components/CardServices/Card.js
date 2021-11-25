import axios from 'axios'
import React, { Component } from 'react'
import { headers, url } from '../constants/url'
import AddAoCarrinho from './img/AddCarinho.png'
import { CardService, TextCard, Buttons } from './styledCard'

export class Card extends Component {

  handleClickDetailService(id) {
    //buscar na API serviço por ID (GET);

    // Chama tela de detalhes do serviço, passando o serviço recuperado da API;
  }

  //RECUPERA SERVIÇO POR ID
  pegarListaCarrinho = (id) => {
    axios.get(`${url}jobs/${id}`, headers)
      .then((resposta) => {
        this.setState({ servico: resposta.data })
      })
      .catch((error) => {
        alert(error.response.data.error)
      });
  }

  render() {
    return (
      <div>
        <CardService>
          <TextCard>
            <p>{this.props.service.name}</p>
            <p>R${this.props.service.value}</p>
            <p>Prazo:{this.props.service.date}</p>
          </TextCard>
          <Buttons>
            <button onClick={this.handleClickDetailService(this.props.id)}>Ver detalhes</button>
            <button onClick={this.props.onclick}><img src={AddAoCarrinho} alt="Adicionar Serviço ao Carrinho" /></button>
          </Buttons>
        </CardService>
      </div>
    );
  }
}
