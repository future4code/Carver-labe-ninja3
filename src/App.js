import React from 'react'
import { Card } from './components/CardServices/Card'
import { GrupCards } from './components/CardServices/styledCard'
import { TelaHome } from "./Components/TelaHome/TelaHome";
import { TelaPrestador } from "./Components/TelaPrestador/TelaPrestador";
import { TelaClienteTeste } from './components/TelaPrestador/TelaClienteTeste';


export default class App extends React.Component {
	state = {
	  telaAtual: "telaHome"
	}
  
	selectPage = () => {
	  switch (this.state.telaAtual){
		case "telaHome":
		  return <TelaHome irParaTelaPrestador={this.irParaTelaPrestador} irParaTelaCliente={this.irParaTelaCliente}/>
		case "telaCliente":
		  return <TelaClienteTeste irParaTelaHome={this.irParaTelaHome}/>
		case "telaPrestador":
		  return <TelaPrestador irParaTelaHome={this.irParaTelaHome}/>
		default:
		  return "Ops, algodeu errado! Tente noamente mais tarde." 
	  }
	}
  
	irParaTelaHome = () =>{
	  this.setState({telaAtual: "telaHome"})
	}
  
	irParaTelaPrestador = () =>{
	  this.setState({telaAtual: "telaCliente"})
	}
  
	irParaTelaCliente = () =>{
	  this.setState({telaAtual: "telaPrestador"})
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
			</div>
	  );
	}
	
  }
