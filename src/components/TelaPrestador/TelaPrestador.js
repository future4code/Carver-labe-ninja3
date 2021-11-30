import React from 'react'
import axios from "axios"
import { PagInicial } from './styled'
import { Button, InputAdornment, InputLabel, NativeSelect, TextField } from '@material-ui/core'
// Tela para prestadores de serviço (ninjas) divulgarem seu trabalho




export default class TelaPrestador extends React.Component {
  state = {
    servicos: [],
    titulo: "",
    descricao: "",
    preco: "",
    formasPagamento: [],
    prazo: ""
  }

  componentDidMount() {
    //this.postCreateJob()
  }

  getAllJobs = () => {
    axios.get('https://labeninjas.herokuapp.com/jobs', {
      headers: {
        Authorization: "1e1ca19f-df22-47fd-af90-636ae476e7a2"
      }
    }
    ).then((response) => {
      this.setState({
        servicos: response.data.result.jobs
      });
    })
      .catch((erro) => {

      })
  }

  postCreateJob = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    const precoNumero = parseFloat(this.state.preco);

    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: precoNumero,
      paymentMethods: this.state.formasPagamento,
      dueDate: this.state.prazo,
    }
    axios.post(url, body, {
      headers: {
        Authorization: "1e1ca19f-df22-47fd-af90-636ae476e7a2",

      }
    })
      .then((resp) => {
        this.setState({
          titulo: "",
          descricao: "",
          preco: "",
          formasPagamento: [],
          prazo: ""
        })
        this.getAllJobs()
        alert("Oba! Cadastro NINJA realizado com sucesso!")
      })
      .catch((erro) => {
        alert("Ooops... Parece que algo deu errado, tente novamente mais tarde.")
      })
  }

  handleTitulo = (event) => {
    this.setState({ titulo: event.target.value })
  }

  handleDescricao = (event) => {
    this.setState({ descricao: event.target.value })
  }

  handlePreco = (event) => {
    this.setState({ preco: event.target.value })
  }

  handleFormasPagamento = (event) => {
    this.setState({ formasPagamento: [...this.state.formasPagamento, event.target.value] })
  }

  handlePrazo = (event) => {
    this.setState({ prazo: event.target.value })
  }


  render() {
    return (
      <PagInicial>

        <h1>Cadastre o seu serviço!</h1>

        <PagInicial>

          <TextField
            id="outlined-Título"
            label="Título"
            variant="outlined"
            value={this.state.titulo}
            onChange={this.handleTitulo}
            endAdornment={<InputAdornment position="end">Título</InputAdornment>}
          />

          <TextField
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            variant="outlined"
            value={this.state.descricao}
            onChange={this.handleDescricao}
          />

          <TextField id="outlined-number"
            type="number"
            label=" Preço"
            variant="outlined"
            value={this.state.preco}
            onChange={this.handlePreco} />

          {/* Quero ver como mandar esse dado para a API*/}
          <InputLabel htmlFor="outlined-demo-customized-select-native">Formas de Pagamento</InputLabel>
          <NativeSelect
            labelId="demo-mutiple-name-label"
            id="demo-mutiple-name"
            value={this.state.formasPagamento}
            onChange={this.handleFormasPagamento}
            label="Formas de Pagamento"
            variant="outlined"
            multiple

            InputLabelProps={{
              shrink: true,
            }}>

            <option aria-label="None" value="" />
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Pix">Pix</option>
            <option value="Boleto">Boleto</option>
            <option value="Dinheiro">Dinheiro</option>
          </NativeSelect>

          <TextField
            aria-label="None"
            id="outlined-date"
            width='10px'
            type="date"
            label=" Prazo"
            variant="outlined"
            value={this.state.prazo}
            onChange={this.handlePrazo} />


          <Button variant="contained" type="submit" onClick={this.postCreateJob}>Cadastrar seu trabalho Ninja</Button>
        </PagInicial>


      </PagInicial>
    )
  }
}