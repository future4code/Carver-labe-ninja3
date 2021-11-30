import React from 'react';
import { BotoesContainer, HeaderContainer } from './styled';
import LogoLabe from './img/logo-transparente.png'
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const Header = (props) => {



    return (
        <div>

            <HeaderContainer>

                <Button onClick={() => props.mudarPag('telaHome')}><img src={LogoLabe} alt="logo" /></Button>
                <BotoesContainer>
                    <Button onClick={() => props.mudarPag('telaHome')}>HOME</Button>
                    <IconButton onClick={() => props.mudarPag('telaCarrinho')} color="White" aria-label="add to shopping cart">
                        <ShoppingCartIcon /></IconButton>

                </BotoesContainer>
            </HeaderContainer>

        </div>
    )


}
export default Header;