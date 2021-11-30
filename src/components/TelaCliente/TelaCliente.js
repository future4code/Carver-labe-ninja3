import React from 'react';
import Card from '../Card/Card';
import { Inputs, } from './styled';
import axios from 'axios';
import { url, headers } from '../constants/url'
import { GrupCards } from '../Card/styledCard'

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';


export default class TelaCliente extends React.Component {

  state = {
    title: "",
    minValue: "",
    maxValue: "",
    originJobs: [],
    jobs: [],
    order: 'title'
  }

  componentDidMount() {
    this.getJobs();
    this.filterJobs();
  }
  // prevProps não aparece em outros lugares?
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.title !== prevState.title ||
      this.state.minValue !== prevState.minValue ||
      this.state.maxValue !== prevState.maxValue ||
      this.state.order !== prevState.order
    ) {
      this.filterJobs();
    }
  }

  onChangeMaxValue = (event) => {
    this.setState({
      maxValue: event.target.value
    });
  };

  onChangeMinValue = (event) => {
    this.setState({
      minValue: event.target.value
    });
  };

  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  };

  onChangeOrder = (event) => {
    this.setState({
      order: event.target.value
    });
  };

  filterJobs = () => {
    this.setState({
      jobs: this.state.originJobs
        .filter(job => this.state.minValue === '' || job.price >= this.state.minValue)
        .filter(job => this.state.maxValue === '' || job.price <= this.state.maxValue)
        .filter(job => this.state.title === '' || job.title.toLowerCase().includes(this.state.title.toLowerCase()))
        .sort(this.compareValues(this.state.order))
    });
  };

  // FUNÇÃO PARA ORDENAÇÃO DINÂMICA
  compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  getJobs = () => {
    axios.get(`${url}/jobs`, headers)
      .then((resposta) => {
        this.setState({
          originJobs: resposta.data.jobs,
          jobs: resposta.data.jobs
        })
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  render() {
    const cardLista = this.state.jobs.map((job) => {
      return <Card
        key={job.id} job={job}
        irParaTelaDetalheServico={this.props.irParaTelaDetalheServico}
        addQuantCarrinho={this.props.addQuantCarrinho}
      />
    });

    return (
      <div>

        <Inputs>

          <TextField id="standard-name"
            label=" Valor Minimo"
            type={"number"}
            value={this.state.minValue}
            onChange={this.onChangeMinValue}
            variant="outlined" />

          <TextField id="standard-name"
            label=" Valor Maximo"
            type={"number"}
            value={this.state.maxValue}
            onChange={this.onChangeMaxValue}
            variant="outlined" />

          <TextField
            id="outlined-name"
            label="Busca"
            value={this.state.title}
            onChange={this.onChangeTitle}
            variant="outlined"
          />

          <FormControl style={{minWidth: 160}}>
            <InputLabel id="demo-simple-select-label">Ordenar Por:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={this.onChangeOrder}>
              <MenuItem aria-label="None" value="price">Menor preço</MenuItem>
              <MenuItem aria-label="None" value="price">Maior preço</MenuItem>
              <MenuItem aria-label="None" value="title">Titulo</MenuItem>
              <MenuItem aria-label="None" value="dueDate">Prazo</MenuItem>
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

