import React, { Component } from 'react';

export default props =>
    <div>
        <h2>O valor dessa soma é de: {props.children[0]+ props.children[1]}</h2>
    </div>