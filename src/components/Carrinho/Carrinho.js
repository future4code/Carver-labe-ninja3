import React from 'react'
import { Button} from '@material-ui/core'
import {PagCart, Card, BotaoFim, TextFinalizacao} from './styled'

export default class Carrinho extends React.Component {
    state = {
        carrinho: []
    }

    componentDidMount() {
        this.setState({carrinho: this.props.quantCarrinho})
    }
        // CALCULA O VALOR DOS ITENS NO CARRINHO
    // totalDoCarrinho = () => {
        
    //     for (let job of this.state.carrinho) {
    //         valor += job.price

    //         return valor.toLocaleString('pt-BR', {
    //             style: 'currency',
    //             currency: 'BRL'
    //         })
    //     }
    // }
    render() {

        console.log(this.props);

        const jobsLista = this.props.carrinho.map((job) => {
            return (
                
                <Card key={job.id}>
                    <h2>{job.title}</h2>
                        <p>
                            Valor: {job.price}
                        </p>
                        <Button 
                            // id={job.id}
                            variant="contained" onClick={()=>this.props.deletQuantCarrinho(job.id)}
                        >
                            Remover
                        </Button>
                </Card>
                
            )
        })

        let total = 0
        this.props.carrinho.forEach((job)=>{
            total += job.price
        })
      
        return (
            <PagCart>
                {/* <Button
                    onClick={this.props.irParaTelaCliente}
                >Comprar mais
                </Button> */}

                {this.props.carrinho.length > 0 ? (
                    <div>
                        {jobsLista}
                        <BotaoFim>
                            {/* <h3>
                                valor Total: <span>{this.totalDoCarrinho()}</span>
                            </h3> */}
                        
                            <Button variant="contained" onClick={this.props.compra} >Finalizar Compra
                            </Button>
                            <TextFinalizacao>  
                            <p>Total: {total.toFixed(2)}</p>
                            </TextFinalizacao>
                        </BotaoFim>
                    </div>
                ) : (

                    <div>
                        <h2>Seu carrinho está vazio!</h2>
                    </div>
                )}
            </PagCart>
        )
    }
}