import React, { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(count);
    
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}

export default Counter