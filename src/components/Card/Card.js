import React from 'react';
import { Button } from '@material-ui/core';
import { CardService, TextCard, Buttons} from './styledCard';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { CardContent } from '@material-ui/core';

const Card =(props) => {
    return (
      <div>
        <CardContent>
          <CardService>
            <TextCard>
              <p>{props.job.title}</p>
              <p>R${props.job.price.toFixed(2)}</p>
              <p>Prazo:{props.job.dueDate}</p>
            </TextCard>
            <Buttons>
              <Button  onClick={() => props.irParaTelaDetalheServico(props.job.id)}>Ver detalhes</Button>
              <IconButton onClick={() => props.addQuantCarrinho( props.job)} color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon /></IconButton>
            </Buttons>
          </CardService>
        </CardContent>
      </div>
    );
  
};
export default Card;
