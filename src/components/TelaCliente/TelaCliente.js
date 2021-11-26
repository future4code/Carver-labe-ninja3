import React from 'react';
import axios from 'axios';
// import Filtro from "..Filtro/Filtro";

 export default class TelaCliente extends React.Component{

  
  render(){


    return (
    <div>


        Valor Minimo:
        <input type={"number"}
        value={this.props.minimo}
        onChange = {this.props.onChangeMinimo}
        />

        Valor Maximo:
        <input type={"number"}
        value={this.props.maximo}
        onChange = {this.props.onChangeMaximo}
        
        />

        Busca por titulo:
        <input type={"text"}
        value={this.props.buscaPorTitulo}
        onChange = {this.props.onChangeBuscaPorTitulo}
        
        />

    </div>
    )
  }



}
 

