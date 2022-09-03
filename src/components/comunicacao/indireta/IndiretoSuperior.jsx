import React, {useState} from 'react';
import IndiretoInferior from './IndiretoInferior'

export default props =>{

    const [textoInicial,setAtual] = useState('Valor')
    const [numeroInicial,setNum] = useState(0)

    function quandoClicar(parametro1,parametro2){
        setNum(parametro1)
        setAtual(parametro2)
    }

    return(
        <div>
            <h5>{textoInicial}:{numeroInicial}</h5>
            <IndiretoInferior onClicar={quandoClicar}></IndiretoInferior>
        </div>
    )
}