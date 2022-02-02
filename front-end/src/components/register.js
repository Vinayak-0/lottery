import React, { useEffect, useState} from 'react';
import axios from 'axios';
// import { createHashHistory } from "history";
import {  Navigate  } from 'react-router-dom';

function Register() {
    const [redirctTo, setRedirctTo] = useState(false);
    useEffect(()=>{
        const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            setRedirctTo(true);
        }
    })
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [userid, setuseid] = useState("");
    const [password, setpassword] = useState("");

    function sub(event) {
        event.preventDefault();
        alert('this is register method');
        var user = {
            first_name: first_name,
            last_name: last_name,
            email: userid,
            password: password
        }
        axios.post('http://localhost:3000/register', {user}).then((res) => localStorage.setItem('userInfo',JSON.stringify({res}))).catch((err) => {
            console.log(err);
            console.log("haan haan yhi error h")
        })
        console.log(user);
        setpassword("");
        setuseid("");
        setFirstname("");
        setLastname("");
    }
    
        if(redirctTo){
            return <Navigate to="/home" />
        }
        else 
        return(
    
    <div>


        <h1 > Register </h1> 
       
        <form onSubmit = { sub } >
        <input type = 'text' placeholder = "First Name" value = { first_name } onChange = {(e) => { setFirstname(e.target.value) } } ></input>
        <br></br> 
        <input type = 'text' placeholder = "Last Name" value = { last_name } onChange = {(e) => { setLastname(e.target.value) } } ></input>
        <br></br> 
        <input type = 'text' placeholder = "email" value = { userid } onChange = {(e) => { setuseid(e.target.value) } } ></input> 
        <br></br>
        <input type = 'text' placeholder = "password" value = { password } onChange = {(e) => { setpassword(e.target.value) } } ></input> 
        <br></br>
        <button type="submit">Submit</button>
        </form> </div>
    
    )
}
export default Register;