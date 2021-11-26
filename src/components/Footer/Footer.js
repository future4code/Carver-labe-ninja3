import React from "react"
import { TextoFooter, MainContainer, IconesContainer, AlinhaTodos } from './styled'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <MainContainer>
                    <AlinhaTodos>
                        <IconesContainer>

                            <InstagramIcon />
                            <TwitterIcon />
                            <FacebookIcon />
                        </IconesContainer>

                        <TextoFooter>
                            <p>Contato: labeninjas@gmail.com | (55)55555555</p>
                            <p> LabeNinjas 3 Somos o maior site de Contratação de Serviços do Brasil </p>
                        </TextoFooter>
                    </AlinhaTodos>
                </MainContainer>
            </div>
        )
    }
}