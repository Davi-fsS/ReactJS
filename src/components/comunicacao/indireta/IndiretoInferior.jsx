import React from 'react';

export default props =>{

    return(
        <div>
            <button onClick={()=>{props.onClicar(Math.random()*100,'Gerado')}}>Gerar</button>
        </div>
    )
}