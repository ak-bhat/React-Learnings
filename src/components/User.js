import { useState } from "react";

const User = ({name, location}) => {
    const [count, setCount] = useState(0)
    return(
        <div className="user-card">
            <h3>Name:{name}</h3>
            <h3>Name:{location}</h3>
            <h2>Count:{count}</h2>
        </div>
    )
}

export default User;