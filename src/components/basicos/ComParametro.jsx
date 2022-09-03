import React, { Component } from 'react';

//Parâmetros!

//O parametro foi dado lá no 'index.js' dentro da tag, como se fosse uma tag em html mesmo

export default props => 
    <>
        <h3>{props.titulo}</h3>          
        <p>{props.subtitulo}</p>
    </>