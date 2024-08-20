import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
    const [field, setField] = useState({
        username: '',
        password: ''
    });
    
    
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username: field.username,
                password: field.password,
            });

            if (response.data.success) {
                console.log('Login successful');
            } else {
                setError(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.log('Error:', error);
            setError('An error occurred. Please try again later.');
        } 
    };

    return (
        <div className='Login-bg'>
            <div className='log-box'>
                <form onSubmit={handleLogin}>
                    <h1>Welcome</h1>
                    <input
                        type="text"
                        placeholder='Enter Username'
                        value={field.username}
                        onChange={(e) => setField({ ...field, username: e.target.value })}
                        
                    />
                    <input
                        type="password"
                        placeholder='Enter password'
                        value={field.password}
                        onChange={(e) => setField({ ...field, password: e.target.value })}
                        
                    />
                    <button type="submit" >Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
