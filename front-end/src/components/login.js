import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
// import { createHashHistory } from "history";
import { Navigate } from 'react-router-dom';


function Login()
{
    const [redirctTo, setRedirctTo] = useState(false);
    useEffect(()=>{
        const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            setRedirctTo(true);
        }
    })
    
    const [userid,setuseid]= useState("");
    const [password,setpassword]= useState("");
    async function sub(event)
    {
    event.preventDefault();
    var user={
    
        email:userid,
        password:password
    }
    await axios.post('http://localhost:3000/login', {user}).then((res)=>localStorage.setItem('userInfo',JSON.stringify({res}))).catch((err)=>{console.log(err);
    console.log("haan haan yhi error h")})
    setpassword("");
    setuseid("");
    }
    if(redirctTo){
        return <Navigate to="/home" />
    }
    else 
    return(
        <div className='login-page'>
            <div  className='login-card'>

            <h1 className='login'>Login</h1>
        <form onSubmit={sub} className='loginform'>
        <input type='text' className='inputbox' placeholder="Username" value={userid} onChange={(e)=>{setuseid(e.target.value)}}></input>
        <input type='password' className='inputbox' placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
        <input type="submit" className='inputbutton' value='Login'></input>

        </form>

        <div>New user, <Link to='/register'>Regsiter Here</Link></div>

        </div>
        <Outlet />
        </div>
    )
}
export default Login;