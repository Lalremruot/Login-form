import React from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
// import Register from './Register';
const Login = () => {
    return (
        <div className='container'>
            <form action="">
                <h2>Login</h2>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>

                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <RiLockPasswordLine className='icon'/>

                </div>
                <div className="pass-forgot">
                    <label><input type="checkbox"></input>Remember me</label>
                    <a href="">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register">
                    <p> Don't have an account? </p> <a href="">Register?</a>
                </div>
            </form>
        </div>
    )
}
export default Login;
