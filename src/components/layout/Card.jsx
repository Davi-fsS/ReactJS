import React, { Component } from 'react';
import './Card.css'

export default props => 
    <div className="Card">

        <div className="Title" style={{backgroundColor: props.color || '#000'}}>
            {props.titulo}
        </div>

        <div className = "Content" style={{borderColor: props.color || '#000' }}>         
            {props.children}                  {/* Pega o conteúdo dentro da TAG, não é um parâmetro convencional */}
        </div> 
    
    </div>
