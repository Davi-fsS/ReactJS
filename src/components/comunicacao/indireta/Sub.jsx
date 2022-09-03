import React from 'react';

export default props =>{

    function acao(){
        props.onClicar(Math.random()*100,'Gerado')
    }

    return(
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}
    

//Esse botão sempre que pressionado, irá alterar o elemento 'Pai' que no caso é o 'Super.jsx'

/*ESSA INFO VAI SER PASSADA PARA O PAI E O BOTÃO QUANDO CLICADO ELE ACESSA O MÉTODO QUE CONTÉM A FUNÇÃO E PASSA
O PARÂMETRO*/