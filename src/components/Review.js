import { useReducer } from "react";


const Counter = () =>{

    const initialState = 0;

    const reducer = (state, action)=>{
        if (action.type="Add") {
            return {initialState : state.initialState+1}
        } else if(action.type="Minus"){
            return {initialState: state.initialState-1}
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <h1>Count: {state.initialState}</h1>
            <button onClick={()=>dispatch({type:"Add"})}></button>
            <button onClick={()=>dispatch({type:"Minus"})}></button>

        </div>
    )
}

export default Counter