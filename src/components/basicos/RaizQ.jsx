import React, { Component } from 'react';

export default props =>
    <div>
        <h2>A raiz quadrada de {props.children} é {(props.children)**(1/2)}</h2>
    </div>