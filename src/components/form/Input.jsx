import React, { useState } from 'react';

export default props =>{

    const [nome,setNome] = useState('')   //estado atual da variável está na variável 'nome'

    function atualiza(e){
        setNome(e.target.value)           //atualiza o estado a cada mudança do input 'onChange'     a
    }

    return(
        
        <>
            <h3>{nome}</h3>
            <label> Digite qualquer coisa: 
                <input type="text" value={nome} onChange={atualiza}/>
            </label>
        </>

    )
}