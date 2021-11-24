import React, { Component } from 'react'
import styled from "styled-components"


export default class TelaHome extends React.Component {

    render () {
        return (
            <div>
                <h1>Home</h1>
                <h2>Olá! Este é nosso portal, um lugar onde ninjas encontram clientes!</h2>
                <hr/>
                <p>Você tem um serviço legal para oferecer? Então você é NINJA e queremos seu anúncio aqui!</p>
                <button onClick={this.props.irParaTelaPrestador}>Sou Ninja!</button>

                <p>Você busca ninjas para resolverem os seus problemas? Venha ser CLIENTE de nossa plataforma!</p>
                <button onClick={this.props.irParaTelaCliente}>Sou Cliente!</button>
          </div>
        )
    }
}