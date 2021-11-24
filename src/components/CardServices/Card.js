import { Button, ButtonBase } from '@material-ui/core'
import React, { Component } from 'react'
import AddAoCarrinho from './img/AddCarinho.png'
import { CardService, TextCard, Buttons } from './styledCard'

 



export class Card extends Component {

onclick








  render() {
    return (
      <div>
        <Card>
          <TextCard>
          <p>{this.props.service.name}</p>
          <p>R${this.props.service.value}</p>
          <p>Prazo:{this.props.service.date}</p>
          </TextCard>
          <Buttons>
          <Button onClick={""}  variant="text" >Ver detalhes</Button>
          <ButtonBase onClick={this.props.onclick}><img src={AddAoCarrinho} alt="Adicionar Serviço ao Carrinho" /></ButtonBase>
          </Buttons>
        </CardService>

      </div>







    )

  }


}