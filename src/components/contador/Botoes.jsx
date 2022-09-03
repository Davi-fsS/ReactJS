import React, { Component } from 'react';

export default props =>{
    return(
        <div>
            <button onClick={()=>{props.noClickMais()}}>+</button>
            <button onClick={()=>{props.noClickMenos()}} >-</button>
        </div>
    )
}