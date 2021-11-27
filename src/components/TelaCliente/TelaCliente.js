import React from 'react';
import Card from '../Card/Card';
import { Inputs, } from './styled';
import axios from 'axios';
import { url, headers } from '../constants/url'
import { GrupCards } from '../Card/styledCard'


import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';

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
      return <Card key={job.id} job={job} irParaTelaDetalheServico={this.props.irParaTelaDetalheServico} />
    });


    return (
      <div>

        <Inputs>
          <TextField id="standard-name"
            label=" Valor Minimo"
            type={"number"}
            value={this.props.minimo}
            onChange={this.props.onChangeMinimo}
            variant="outlined" />

          <TextField id="standard-name"
            label=" Valor Maximo"
            type={"number"}
            value={this.props.minimo}
            onChange={this.props.onChangeMinimo}
            variant="outlined" />
          <TextField
            id="outlined-name"
            label="Busca"
            value={this.props.buscaPorTitulo}
            onChange={this.props.onChangeBuscaPorTitulo}
            variant="outlined"
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Ordenar Por:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select">
              <MenuItem aria-label="None" value="Crescente">Preço Crescente</MenuItem>
              <MenuItem aria-label="None"value="Decrescente">Preço Decrescente</MenuItem>
              <MenuItem aria-label="None"value="Titulo">Titulo</MenuItem>
              <MenuItem aria-label="None"value="Prazo">Prazo</MenuItem>
            </Select>
          </FormControl>

        </Inputs>

        <GrupCards>

          {cardLista}
        </GrupCards>
      </div>
    )
  }
}

