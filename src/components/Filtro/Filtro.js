import React from "react";
import TelaCliente from "..TelaCliente/TelaCliente";
import { url, headers } from '../constants/url';
import axios from 'axios';



export default class App extends React.Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    buscaJobs: "",
    listaServ: [],
    order: ""
  };

  componentDidMount(){
    this.pegarLista()
    this.filterJobs()

  }
// prevProps não aparece em outros lugares?
  componentDidUpdate(prevProps, prevState) {
    if(
      this.state.valorMinimo !== prevState.valorMinimo ||
      this.state.valorMaximo !== prevState.valorMaximo ||
      this.state.buscaJobs !== prevState.buscaJobs ||
      this.state.order !== prevState.order
  ) {
      this.filterJobs()
  }
}



  }

  manipularValorMinimo = (event) => {
    this.setState({
      valorMinimo: event.target.value
    });
  };

  manipularValorMaximo = (event) => {
    this.setState({
      valorMaximo: event.target.value
    });
  };

  manipularBuscaJobs = (event) => {
    this.setState({
      buscaJobs: event.target.value
    });
  };

  pegarLista = () => {
    const urlNova = `${url}/jobs`
    axios.get(urlNova, headers)
        .then((resposta) => {
            const selecionados = resposta.data.jobs.filter((job) => { return !job.taken  })

            this.setState({ listaServ: selecionados })
        })
        .catch((error) => {
            alert(error.response.data.error)
        })
}


}
  // filtrarServicos = () => {
  //   const pacoteFiltradoMinimo = this.state.listaServ.filter((servico) => {
  //     if (this.state.valorMinimo) {
  //       return servico.price >= this.state.valorMinimo;
  //     }
  //   });

  //   const pacoteFiltradoMaximo = pacoteFiltradoMinimo.filter((servico) => {
  //     if (this.state.valorMaximo) {
  //       return servico.price <= this.state.valorMaximo;
  //     } else {
  //       return false;
  //     }
  //   });

  //   const pacoteFiltrado = pacoteFiltradoMaximo.filter((servico) => {
  //     return servico.titulo.includes(this.state.buscaJobs);
  //   });
  //   return pacoteFiltrado;
  // };

  render() {
    // const servicosFiltrados = this.filtrarServicos();
    // console.log(servicosFiltrados);

    return (
      <div>
        <TelaCliente
          minimo={this.state.valorMinimo}
          maximo={this.state.valorMaximo}
          buscaPorTitulo={this.state.buscaPorTitulo}
          onChangeMinimo={this.manipularValorMinimo}
          onChangeMaximo={this.manipularValorMaximo}
          onChangeBuscaJobs={this.manipularBuscaJobs}
        />
      </div>
    );
  }
}
