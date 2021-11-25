import React from 'react'
import { Card } from './components/CardServices/Card.js'
import { GrupCards } from './components/CardServices/styledCard'
import  TelaHome  from "./components/TelaHome/TelaHome";
import TelaPrestador  from "./components/TelaPrestador/TelaPrestador";
import  TelaCliente  from './components/TelaCliente/TelaCliente';
import Carrinho from './components/Carrinho/Carrinho'
import {url, headers} from './components/constants/url'
import axios from 'axios';


export default class App extends React.Component {
	state = {
	  telaAtual: "telaHome",
	  quantCarrinho: 0
	}


	//CARRINHO
	componentDidMount(){
		this.pegarCarrinho()
	}
  
	deletQuantCarrinho = ()=>{
		this.setState({quantCarrinho: this.state.quantCarrinho - 1})
	}

	//MANDAR COMO PROPS PARA O BOTÃO ADICIONAR AO CARRINHO

	adQuantCarrinho = ()=>{
		this.setState({quantCarrinho: this.state.quantCarrinho + 1})
	}

	/////////

	pegarCarrinho = ()=>{
		axios.get(url, headers)
			.then((resposta)=>{
				const selecionados = resposta.data.jobs.filter((job)=>{
					return job.taken === true
				})
				this.setState({quantCarrinho: selecionados.length})
			})
			.catch((error)=>{
				alert(error.response.data.error)
			})
	}



	//SELEÇÃO DE PÁGINAS

	selectPage = () => {
	  switch (this.state.telaAtual){
		case "telaHome":
		  return <TelaHome irParaTelaPrestador={this.irParaTelaPrestador} irParaTelaCliente={this.irParaTelaCliente}/>
		case "telaCliente":
		  return <TelaCliente irParaTelaHome={this.irParaTelaHome}/>
		case "telaPrestador":
		  return <TelaPrestador irParaTelaHome={this.irParaTelaHome}/>
		case "telaCarrinho":
		  return <Carrinho 
		  irParaTelaCliente={this.irParaTelaCliente}
		  DeletQuantCarrinho={this.deletQuantCarrinho}/>
		default:
		  return "Ops, algodeu errado! Tente noamente mais tarde." 
	  }
	}
  
	irParaTelaHome = () =>{
	  this.setState({telaAtual: "telaHome"})
	}
  
	irParaTelaPrestador = () =>{
	  this.setState({telaAtual: "telaPrestador"})
	}
  
	irParaTelaCliente = () =>{
	  this.setState({telaAtual: "telaCliente"})
	}

	irParaTelaCarrinho = ()=>{
		this.setState({telaAtual: "telaCarrinho"})
	}
  
  
	render() {
		
		const mockService = {
			name: "Limpeza Doméstica",
			value: 200,
			date: '20/11/2022'
		}
	  	return (
			<div className="App">
		  		{this.selectPage()}
		  		<GrupCards>
					<Card service={mockService}/>
				</GrupCards>
				<Carrinho/>
			</div>
	  );
	}
	
  }
