import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { ListItem } from '@material-ui/core'


const Pai = styled.div`
    margin: 10px;
`

const Card = styled.div`
    
    align-items: center;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width: 500px;
    height: 100px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    background-color: #EEEEEE;
`

const Button = styled.button`
    height: 35px;
    width: 120px;
    border-radius: 10px;
    background-color: #BC8CF2;
    border-style: hidden;
`


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

        const jobsLista = this.props.carrinho.map((job) => {
            return (
                <Pai>
                <Card key={job.id}>
                    <h2>{job.title}</h2>
                        <p>
                            Valor: {job.price}
                        </p>
                        <button 
                            // id={job.id}
                            onClick={()=>this.props.deletQuantCarrinho(job.id)}
                        >
                            Remover
                        </button>
                </Card>
                </Pai>
            )
        })

        let total = 0
        this.props.carrinho.forEach((job)=>{
            total += job.price
        })
            

        return (
            <div>
                {/* <Button
                    onClick={this.props.irParaTelaCliente}
                >Comprar mais
                </Button> */}

                {this.props.carrinho.length > 0 ? (
                    <div>
                        {jobsLista}
                        <div>
                            {/* <h3>
                                valor Total: <span>{this.totalDoCarrinho()}</span>
                            </h3> */}
                        
                            <Button onClick={this.props.compra} >Finalizar Compra
                            </Button>

                            <p>Total: {total.toFixed(2)}</p>
                        </div>
                    </div>
                ) : (

                    <div>
                        <h2>Seu carrinho está vazio!</h2>
                    </div>
                )}
            </div>
        )
    }
}