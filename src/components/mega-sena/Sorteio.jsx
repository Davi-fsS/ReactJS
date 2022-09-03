import React, { useState } from 'react';
import './Sorteio.css'

export default props => {

    const [numero,setNumero] = useState(Array(props.qtdNum).fill('_'))

    function sorteia(){
        var numerosSorteados = []
        while(numerosSorteados.length < props.qtdNum){
            var calculo = Math.floor(Math.random()*((props.intervalo[1]+1)-props.intervalo[0])+props.intervalo[0])
            var aleatorio = calculo

            if(numerosSorteados.indexOf(aleatorio) == -1)  //retorna -1 quando não tem ainda esse numero no array
                numerosSorteados.push(aleatorio);       //impossibilitando que outros numeros iguais estejam na array
        }
        
        setNumero(numerosSorteados)
    }

    return(
        <div>
            <h4 className="numeros">{numero.join(' ')}</h4>
            <button className="botao-sorteio" onClick={sorteia}>Descubra os números!</button>
        </div>
    )
}
