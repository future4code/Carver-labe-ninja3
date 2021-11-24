import React, { Component } from 'react'
import AddAoCarrinho from './img/AddCarinho.png'
import { CardService, TextCard, Buttons } from './styledCard'

 



export class Card extends Component {










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
          <button>Ver detalhes</button>
          <button onClick={this.props.onclick}><img src={AddAoCarrinho} alt="Adicionar Serviço ao Carrinho" /></button>
          </Buttons>
        </CardService>

      </div>







    )

  }


}
