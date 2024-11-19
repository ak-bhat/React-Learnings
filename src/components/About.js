import User from "./User"
import UserClass from "./UserClass"

const About = () =>{
    return(
        <div className="about-body">
            <h1>About Page</h1>
            <User name={"Ananthu"} location={"Kochi"}/>
            <UserClass name={"Ananthu"} location={"Kochi"}/>
        </div>
    )
}

export default About