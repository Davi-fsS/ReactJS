import React, { Component } from 'react';

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,      //ta pegando o valor passado la no 'App.jsx'
        valor: this.props.valor || 0         //ta pegando o valor passado la no 'App.jsx'     
    }
    
    inc = () =>{
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () =>{
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render(){

        return(
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec} >-</button>
                </div>
            </div>
        )
    }
}