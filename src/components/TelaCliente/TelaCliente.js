import React from 'react';
import Card  from '../Card/Card';
import { Inputs } from './styled';
import axios from 'axios';
import { url, headers } from '../constants/url'
import {GrupCards} from '../Card/styledCard'
// import Filtro from "..Filtro/Filtro";



export default class TelaCliente extends React.Component {

  state = {
    listJobs: [],
  }

  componentDidMount() {
    this.getJobs()
  }

  getJobs = () => {
    axios.get(`${url}/jobs`, headers)
      .then((resposta) => {
        this.setState({ listJobs: resposta.data.jobs })
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  render() {
    const cardLista = this.state.listJobs.map((job) => {
      return <Card key={job.id} job={job} irParaTelaDetalheServico={this.props.irParaTelaDetalheServico}/>
    });


    return (
      <div>
        <Inputs>


          Valor Minimo:
          <input type={"number"}
            value={this.props.minimo}
            onChange={this.props.onChangeMinimo}
          />

          Valor Maximo:
          <input type={"number"}
            value={this.props.maximo}
            onChange={this.props.onChangeMaximo}

          />

          Busca por titulo:
          <input type={"text"}
            value={this.props.buscaPorTitulo}
            onChange={this.props.onChangeBuscaPorTitulo}

          />
//         Valor Maximo:
//         <input type={"number"}
//         value={this.props.maximo}
//         onChange = {this.props.onChangeMaximo}

        
//         />

//         Busca por titulo:
//         <input type={"text"}
//         value={this.props.buscaPorTitulo}
//         onChange = {this.props.onChangeBuscaPorTitulo}
        
//         />


        </Inputs>


        <GrupCards>
          {cardLista}
        </GrupCards>


      </div>
    )
  }
}

