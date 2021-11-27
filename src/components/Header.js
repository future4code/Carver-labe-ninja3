import React, { Component } from 'react';
import { BotoesContainer, HeaderContainer, ImagemLogo, BotoaoHeader, LogoContainer } from './EstiloHeader';


export default class Header extends Component {


    render() {
        return (
            <div>

            <HeaderContainer>
                <LogoContainer>

                    <ImagemLogo src={require('../img/labeninja-header.png')} alt="logo-labeninjas" className="logo"/>
                    <ImagemLogo src={require('../img/labeninja-header2.png')} alt="logo-labeninjas"/>
                </LogoContainer>   
                <BotoesContainer>
                    <BotoaoHeader onClick={()=>this.props.trocarTela("home")}>Home</BotoaoHeader>
                    <BotoaoHeader onClick={()=>this.props.trocarTela("carrinho")}>Carrinho</BotoaoHeader>
                </BotoesContainer>
            </HeaderContainer>
            
        
            
             
            
            </div>
        )
    }
    
}