import Counter from "./Counter"

const Contact = () =>{
    return(
        <div className="about-body">
            <h1 className="font-bold text-xl p-2 m-2">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2 " placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2 " placeholder="Message"/>
                <button className="border border-black bg-green-500 p-2 m-2 ">Submit</button>
            </form>
            {/* <Counter/> */}
        </div>
        
    )
}

export default Contact