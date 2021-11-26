import React from 'react'
import TelaHome from "./components/TelaHome/TelaHome";
import TelaPrestador from "./components/TelaPrestador/TelaPrestador";
import TelaCliente from './components/TelaCliente/TelaCliente';
import Carrinho from './components/Carrinho/Carrinho'
import { url, headers } from './components/constants/url'
import axios from 'axios';
import Footer from './components/Footer/Footer';
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/Header';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
	font-family:Arial, Helvetica, sans-serif;
  }
  input {
    width: 300px;
    margin-bottom: 12px;
  }
  select {
    width: 308px;
    margin-bottom: 12px;
  }
`

export default class App extends React.Component {
	state = {
		telaAtual: "telaHome",
		quantCarrinho: 0
	}


	//CARRINHO
	componentDidMount() {
		this.pegarCarrinho()
	}

	deletQuantCarrinho = () => {
		this.setState({ quantCarrinho: this.state.quantCarrinho - 1 })
	}

	//MANDAR COMO PROPS PARA O BOTÃO ADICIONAR AO CARRINHO

	adQuantCarrinho = () => {
		this.setState({ quantCarrinho: this.state.quantCarrinho + 1 })
	}

	/////////

	pegarCarrinho = () => {
		axios.get(url, headers)
			.then((resposta) => {
				const selecionados = resposta.data.jobs.filter((job) => {
					return job.taken === true
				})
				this.setState({ quantCarrinho: selecionados.length })
			})
			.catch((error) => {
				alert(error.response.data.error)
			})
	}



	//SELEÇÃO DE PÁGINAS


	selectPage = () => {
		switch (this.state.telaAtual) {
			case "telaHome":
				return <TelaHome irParaTelaPrestador={this.irParaTelaPrestador}
					irParaTelaCliente={this.irParaTelaCliente} />
			case "telaCliente":
				return <TelaCliente irParaTelaHome={this.irParaTelaHome} />
			case "telaPrestador":
				return <TelaPrestador irParaTelaHome={this.irParaTelaHome} />
			case "telaCarrinho":
				return <Carrinho
					
					DeletQuantCarrinho={this.deletQuantCarrinho} />
			default:
				return "Ops, algo deu errado! Tente noamente mais tarde."
		}
	}
	changePage = (pageName) =>{
		this.setState({telaAtual:pageName})
	}

	irParaTelaHome = () => {
		this.setState({ telaAtual: "telaHome" })
	}

	irParaTelaPrestador = () => {
		this.setState({ telaAtual: "telaPrestador" })
	}

	irParaTelaCliente = () => {
		this.setState({ telaAtual: "telaCliente" })
	}


	render() {


		return (
			<div>

				<GlobalStyle />
				<Header changePage={this.changePage}/>
				{this.selectPage()}

				<Footer />


			</div>





		);
	}

}
