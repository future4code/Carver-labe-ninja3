import React, { Component } from 'react'
import { Button } from '@material-ui/core'
/* import axios from 'axios'
import { headers, url } from '../constants/url' */
import { CardService, TextCard, Buttons } from './styledCard'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';






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
            <Button>Ver detalhes</Button>
            <IconButton onClick={this.props.onclick}> color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon /></IconButton>
          </Buttons>
        </CardService>

      </div>







    )

  }


}
