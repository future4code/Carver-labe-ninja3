import React, { Component } from "react";
import axios from 'axios';


export default class Ordenacao extends React.Component {
    state = {
        ordenação: "crescente",
    }
    orderLista = (event) => {
        this.setState({
            Order: event.target.value
        })

    }

    render() {
        const listOrder = this.props.pegarLista &&
            this.props.pegarLista.sort(a, b) => {
            if (this.props.ordenacao === "Crescente") {
                return a.price - b.price
            } else {
                return a.price - b.price

            }
        }
    }
}

