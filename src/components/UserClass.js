import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Dummy"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo:json
        })
    }


    render(){
        const {name, location} = this.state.userInfo
        // const {count, count2} = this.state
        return(
            <div className="user-card">
                <h3>Name:{name}</h3>
                <h3>Location:{location}</h3>
                {/* <h2>Count:{count}</h2>
                <button onClick={() =>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}> Count Increases </button> */}
            </div>
        )
    }
}

export default UserClass 