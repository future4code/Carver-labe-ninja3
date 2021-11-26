import React from 'react'
import Logo from './img/labeninjas.png'
import { PageHome } from './styled'
import { Button } from '@material-ui/core'


//Tela inicial com botões para a área de ninjas e área de clientes

export default class TelaHome extends React.Component {

    render() {
        return (
            <PageHome>
                <div>
                    <img src={Logo} alt="logo" />
                </div>

                <h2>Olá! Este é nosso portal, um lugar onde ninjas encontram clientes!</h2>
                <div>
                <Button variant="contained" onClick={this.props.irParaTelaPrestador}>Sou Ninja!</Button>
                <Button variant="contained" onClick={this.props.irParaTelaCliente}>Sou Cliente!</Button>
                </div>

            </PageHome>
        )
    }
}