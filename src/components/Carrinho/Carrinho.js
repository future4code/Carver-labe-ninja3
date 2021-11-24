import axios from 'axios'
import React from 'react'
import { url, headers } from '../constants/url'

export default class Carrinho extends React.Component {
    state = {
        carrinho: []
    }

    componentDidMount() {
        this.pegarListaCarrinho()
    }

    //PEGA A LISTA ENVIADA AO CARRINHO
    pegarListaCarrinho = () => {
        axios.get(url, headers)
            .then((resposta) => {
                const selecionados = resposta.data.jobs.filter((job) => { return job.taken === true })

                this.setState({ carrinho: selecionados })
            })
            .catch((error) => {
                alert(error.response.data.error)
            })

    }


    //CALCULA O VALOR DOS ITENS NO CARRINHO
    totalDoCarrinho = () => {
        let valor = 0
        for (let job of this.state.carrinho) {
            valor += job.price

            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })
        }
    }


    //REMOVE O ITEM DO CARRINHO

    removerServico = (event) => {
        const urlRemover = `${url}${event.currentTarget.id}`
        const body = {
            taken: false,
        }
        axios.post(urlRemover, body, headers)
            .then((resposta) => {
                this.pegarListaCarrinho()
                this.props.DelQtdCarrinho()
                alert('Removido com sucesso!')
            })
            .catch((error) => {
                alert(error.response.data.error)
            })
    }


    //FINALIZA A COMPRA 

    contratar = (carrinho) => {
        carrinho.forEach((item) => {
            const urlDel = `${url}/jobs/${item.id}`

            axios.delete(urlDel, headers)
                .then((resposta) => {
                    alert('Obrigado por contratar com a nossa empresa!')
                    this.pegarListaCarrinho()
                })
                .catch((error) => {
                    alert(error.response.data.error)
                })
        })
    }






    render() {

        const jobsLista = this.state.carrinho.map((job) => {
            return (
                <div key={job.id}>
                    <h2>{job.title}</h2>

                    <div>
                        <p>
                            {job.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                        </p>

                        <button
                            id={job.id}
                            onClick={this.removerServico}
                        >
                            Remover
                        </button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <button
                    onClick={this.props.BotaoVoltar}
                >Voltar
                </button>

                {this.state.carrinho.length !== 0 ? (
                    <div>
                        {jobsLista}
                        <div>
                            <h3>
                                valor Total: <span>{this.totalDoCarrinho()}</span>
                            </h3>

                            <button
                                onClick={() => this.contratar(this.state.carrinho)}>
                                Contratar Serviço
                            </button>
                        </div>
                    </div>
                ) : (

                    <div>
                        <h2>Seu carrinho está vazio!</h2>
                    </div>
                )}
                Carrinho
            </div>
        )
    }
}