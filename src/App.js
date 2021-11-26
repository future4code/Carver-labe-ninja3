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
import TelaServicoDetalhes from './components/TelaDetalheServico/TelaServicoDetalhes'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
	padding: 0;
	font-family:Arial, Helvetica, sans-serif;
  }

`
export default class App extends React.Component {
	state = {
		telaAtual: "telaHome",
		detalheDoServico: "",
		quantCarrinho: 0

	};


	//CARRINHO
	componentDidMount() {
		//this.pegarCarrinho()
	};

	deletQuantCarrinho = () => {
		this.setState({ quantCarrinho: this.state.quantCarrinho - 1 })
	};

	//MANDAR COMO PROPS PARA O BOTÃO ADICIONAR AO CARRINHO

	addQuantCarrinho = () => {
		this.setState({ quantCarrinho: this.state.quantCarrinho + 1 })
	};

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
				alert(error.response.data.message)
			})
	};

	//SELEÇÃO DE PÁGINAS
	selectPage = () => {
		switch (this.state.telaAtual) {
			case "telaHome":
				return <TelaHome irParaTelaPrestador={this.irParaTelaPrestador}
					irParaTelaCliente={this.irParaTelaCliente} />
			case "telaCliente":
				return <TelaCliente irParaTelaHome={this.irParaTelaHome}
					irParaTelaDetalheServico={this.irParaTelaDetalheServico} />
			case "telaPrestador":
				return <TelaPrestador irParaTelaHome={this.irParaTelaHome} />
			case "telaCarrinho":
				return <Carrinho
					deletQuantCarrinho={this.deletQuantCarrinho} />
			case "telaDetalheServico":
				return <TelaServicoDetalhes
					jobId={this.state.detalheDoServico} 
					irParaTelaCliente={this.irParaTelaCliente} />

			default:
				return "Ops, algo deu errado! Tente noamente mais tarde."
		};
	};

	mudarPag = (pagNome) => {
		this.setState({ telaAtual: pagNome })
	};

	irParaTelaHome = () => {
		this.setState({ telaAtual: "telaHome" })
	};

	irParaTelaPrestador = () => {
		this.setState({ telaAtual: "telaPrestador" })
	};

	irParaTelaCliente = () => {
		this.setState({ telaAtual: "telaCliente" })
	};

	irParaTelaDetalheServico = (jobId) => {
		this.setState({ telaAtual: "telaDetalheServico", detalheDoServico: jobId })
	};

	render() {
		return (
			<div>
				<GlobalStyle />
				<Header mudarPag={this.mudarPag} />
				{this.selectPage()}
				<Footer />
			</div>
		);
	};

};
