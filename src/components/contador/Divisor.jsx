import React, { Component } from 'react';

export default class Divisor extends Component{

    state = {
        valor: this.props.valor,
        passo: this.props.passo
    }

    div = () =>{
        this.setState({valor: this.state.valor / this.state.passo})
    }

    render(){
        return(
            <div>
                <h1>{this.state.valor}</h1>

                <div>
                <   button onClick={this.div}>Divisão por 5</button>
                </div>
                
            </div>
            
        )
    }
}