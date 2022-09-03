import React, { Component } from 'react';

import produtos from '../../data/produtos'

export default props =>{

    function getProdutosListItem(){
        return produtos.map(props => {
            return <li key={props.id}>
                {props.id} - {props.nome} - R$ {props.preco}
                </li>
        })
    }

    return(
        <div>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}