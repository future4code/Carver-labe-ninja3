import React from "react";
import axios from 'axios';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { url, headers } from '../constants/url'
import { Button, Chip } from '@material-ui/core';
import {PagDetalhe,Botoes} from './styled'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default class TelaServicoDetalhes extends React.Component {
    state = {
        job:{}


    }
    componentDidMount() {
        this.pegarServico()
    }

    pegarServico = () => {
        axios.get(`${url}/jobs/${this.props.jobId}`, headers)
            .then((response) => {
                this.setState({ job: response.data })
            })
            .catch((error) => {
                alert(error.response.data.message)
            });

    }

    render() {
       const formasPagamento = this.state.job.paymentMethods && this.state.job.paymentMethods.map((pagmto) =>{
           return <li key={pagmto}>{pagmto}</li>


       })

        return (
            <PagDetalhe>
                <div>
                    <div>
                        <p>{this.state.job.title}</p>
                        <p>{this.state.job.description}</p>
                        <p>Por R${this.state.job.price},00</p>
                        <p>Prazo:{this.state.job.dueDate}</p>
                        <p>Formas de Pagamento:<Chip label={formasPagamento}></Chip></p>
                    </div>
                    <Botoes>
                    <Button variant="contained" onClick={this.props.irParaTelaCliente}><ArrowBackIcon/>Voltar para Lista</Button>
                    <Button variant="contained"><AddShoppingCartIcon />Adicionar Ao Carrinho</Button>
                </Botoes>
                </div>
            </PagDetalhe>
        );
    };
};

