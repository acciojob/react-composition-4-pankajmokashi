import { useState } from "react";

const Form = () => {

    let [data, setData] = useState({name: "", email: "", password: ""})

    function handleChange(event){
        event.preventDefault();
        console.log(data)
    }

    return(
        <div>
            <form onSubmit={handleChange}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={(event) => setData({...data, name : event.target.value})}></input>
                </div>
                
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(event) => setData({...data, email : event.target.value})}></input>
                </div>
                
                <div>
                    <label htmlFor="passord">Password</label>
                    <input type="password" id="password" onChange={(event) => setData({...data, password : event.target.value})}></input>
                </div>
                
                <div>
                    <input type="submit" value={"Submit"}></input>
                </div>
                
            </form>
        </div>
    )
}

export default Form