import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

export class AppContainer extends Component {
  render() {
    return (
      <div>
       <Header
          trocarTela={this.trocarTela}
        />
        {this.renderizarTela()}
        <Footer />
      </div>
    
    )
  }
}