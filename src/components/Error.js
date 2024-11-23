import { useRouteError } from "react-router-dom"


const Error = () =>{
    const error = useRouteError();
    return(
        <div>
            <h1 className="text-lg">Oops!</h1>
            <h2>An Error Occured!</h2>
            <h3>{error.status}:{error.statusText}</h3>
        </div>
        
    )
}

export default Error