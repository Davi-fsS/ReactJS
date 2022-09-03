import React, { useState } from 'react';

export default props =>{

    const [valor,setValor] = useState('')

    function atualiza(e){
        setValor(e.target.value)
    }

    function adicionaOutlook(){
        setValor(valor + '@outlook.com')
    }

    function adicionaGmail(){
        setValor(valor + '@gmail.com')
    }

    function adicionaUol(){
        setValor(valor + '@uol.com.br')
    }

    return(
        <div>
            <h3>{valor}</h3>
            <input type="text" value={valor} onChange={atualiza}/>
            <button onClick={adicionaOutlook} style={{marginLeft:'10px',background:'#054F77',color:'white'}}>Adicione Outlook</button>
            <button onClick={adicionaGmail} style={{marginLeft:'10px',background:'#FF6961',color:'white'}}>Adicione Gmail</button>
            <button onClick={adicionaUol} style={{marginLeft:'10px',background:'#FFA500',color:'white'}}>Adicione Uol</button>
        </div>
    )
}