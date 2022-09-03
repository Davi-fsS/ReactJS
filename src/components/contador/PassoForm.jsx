import React, { Component } from 'react';

export default props =>{
    return(
        <div>
            <h4>Passo: {props.passo}</h4>
            <input type="number" value={props.passo} onChange={(e) => props.passoOnChange(+e.target.value)} style={{width:'40px'}}/>
        </div>
    )
}