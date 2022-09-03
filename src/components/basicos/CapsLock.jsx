import React, { Component } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div>
            <h1>Antes: '{props.frase}'</h1><h1> Depois: '{props.frase.toUpperCase()}'</h1>
        </div>
    )
}