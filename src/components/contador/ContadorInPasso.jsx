import React, { Component } from 'react';

import Display from './Display'
import PassoForm from './PassoForm';
import Botoes from './Botoes';

export default class Contador extends Component {

    state = {
        passo: this.props.passo || '',      
        valor: this.props.valor || 0              
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

    mudarPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso
        })
    }

    render(){

        return(
            <div>
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} passoOnChange={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}></Display>
                <Botoes noClickMais={this.inc} noClickMenos={this.dec}></Botoes>
            </div>
        )
    }
}