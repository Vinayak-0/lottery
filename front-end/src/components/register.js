import React, { useState } from 'react';
import axios from 'axios';


function Register() {
    const [name, setname] = useState("");
    const [userid, setuseid] = useState("");
    const [password, setpassword] = useState("");

    function sub(event) {
        event.preventDefault();
        alert('this is register method');
        var user = {
            name: name,
            username: userid,
            password: password
        }
        axios.post('api/user/registration', user).then((res) => { console.log(res); }).catch((err) => {
            console.log(err);
            console.log("haan haan yhi error h")
        })
        console.log(user);
        setpassword("");
        setuseid("");
        setname("");
    }
    return ( <>
        <h1 > Register </h1> 
       
        <form onSubmit = { sub } >
        <input type = 'text' placeholder = "name" value = { name } onChange = {(e) => { setname(e.target.value) } } ></input>
        <br></br> 
        <input type = 'text' placeholder = "userid" value = { userid } onChange = {(e) => { setuseid(e.target.value) } } ></input> 
        <br></br>
        <input type = 'text' placeholder = "password" value = { password } onChange = {(e) => { setpassword(e.target.value) } } ></input> 
        <br></br>
        <button type="submit">Submit</button>
        </form> </>
    
    )
}
export default Register;