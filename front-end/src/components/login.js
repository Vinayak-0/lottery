import React, { useState } from 'react';
import axios from 'axios';


function Login()
{
    
    const [userid,setuseid]= useState("");
    const [password,setpassword]= useState("");
    function sub(event)
    {
    event.preventDefault();
    var user={
    
        username:userid,
        password:password
    }
    axios.post('/api/user/login',user).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);
    console.log("haan haan yhi error h")})
    setpassword("");
    setuseid("");
    }
    return (
        <>
        <h1>Login</h1>
        <form onSubmit={sub}>
        <input type='text' placeholder="userid" value={userid} onChange={(e)=>{setuseid(e.target.value)}}></input>
        <input type='text' placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
        <input type="submit" value='login'></input>

        </form>
        </>
    )
}
export default Login;