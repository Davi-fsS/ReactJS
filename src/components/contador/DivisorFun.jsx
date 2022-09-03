import React, { useState } from 'react';

export default props =>{

    const[numAtual,setNum] = useState(props.valor)

    return(
        <div>
            <h1>{numAtual}</h1>
            <button onClick={()=>setNum(numAtual/5)}>Divida o valor acima por 5</button>
        </div>
    )

}