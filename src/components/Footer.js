import React from "react"
import { TextoFooter, MainContainer, IconesRedesSociais, IconesContainer, AlinhaTodos } from './EstiloFooter'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
            <MainContainer>
                <AlinhaTodos>
                <IconesContainer>

                    <IconesRedesSociais src={require('../img/facebook.png')} alt="Icone Facebook" title="Curta a nossa página no Facebook!"/>
                    <IconesRedesSociais src={require('../img/instagram.png')} alt="Icone Instagram" title="Siga o nosso Instagram!"/>
                    <IconesRedesSociais src={require('../img/iconotwitter.png')} alt="Twitter" title="Siga o nosso Twitter!"/>
                        Contato: labeninjas@gmail.com | (55)55555555

                </IconesContainer>  

                <TextoFooter>
                <p> LabeNinjas 3 Somos o maior site de Contratação de Serviços do Brasil </p>
                </TextoFooter>
                </AlinhaTodos>
            </MainContainer>
            </div>
        )
    }
}

