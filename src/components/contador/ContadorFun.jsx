import React, { useState } from 'react';

export default props =>{

    const [Numero,setNumero] = useState(0)
        
    return(
        <div>
            <h1>{Numero}</h1>
            <button onClick={()=>setNumero(Numero+1)}>+</button>
            <button onClick={()=>setNumero(Numero-1)}>-</button>
        </div>
    )
}