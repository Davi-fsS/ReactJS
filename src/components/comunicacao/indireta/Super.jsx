import React, { useState } from 'react';
import Sub from './Sub'

export default props =>{

    const [num, setNum] = useState(0)   
    const [textoInicial, setTexto] = useState('Valor')

    function quandoClicar(valorGerado,texto){
        setNum(valorGerado)
        setTexto(texto)
    }

    return(
        <div>
            <h4>{textoInicial}:{num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
    