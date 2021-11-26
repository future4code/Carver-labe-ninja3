import React from 'react';
import { BotoesContainer, HeaderContainer } from './styled';
/* import LabeninjaLogo from './img/labeninjas.png'
 */import LogoLabe from './img/logo-transparente.png'
import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const  Header = (props)=> {


    
        return (
            <div>

                <HeaderContainer>

                    <Button onClick={() =>props.changePage('telaHome')}><img src={LogoLabe} alt="logo" /></Button>
                    <BotoesContainer>
                        <Button onClick={() =>props.changePage('telaHome')}>HOME</Button>

                        <IconButton onClick={() =>props.changePage('telaCarrinho')} color="White" aria-label="add to shopping cart">
                            <AddShoppingCartIcon /></IconButton>
                    </BotoesContainer>
                </HeaderContainer>

            </div>
        )
    

}
export default Header;