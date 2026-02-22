import React, { useState } from 'react'
import '../Style/Register.scss'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {User,Loading,handleregister} = useAuth();


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log({ username, email, password });
        await handleregister(username,email,password);
    }

    return (
        <div className="page-wrapper">
            <form onSubmit={handleSubmit} className='form-container'>
                <div className="form-header">
                    <h2>Create Account</h2>
                    <p>Enter your details to get started</p>
                </div>

                <input 
                    onChange={(e) => setUsername(e.target.value)} 
                    className='username' 
                    type="text" 
                    placeholder='Username' 
                    required 
                />
                
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder='Email Address' 
                    required 
                />
                
                <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder='Password' 
                    required 
                />

                <button type="submit">Register</button>
                
                <span className="login-link">
                    Already have an account? <a href="#login">Log in</a>
                </span>
            </form>
        </div>
    )
}

export default Register