import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2
        }
    }
    render(){
        const {name, location} = this.props
        const {count, count2} = this.state
        return(
            <div className="user-card">
                <h3>Name:{name}</h3>
                <h3>Name:{location}</h3>
                <h2>Count:{count}</h2>
                <h2>Count:{count2}</h2>
            </div>
        )
    }
}

export default UserClass 