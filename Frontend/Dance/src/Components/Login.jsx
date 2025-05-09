import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { email, password });
    };
    
    return (
        <div className="login-container">
            <div className="login-image">
                <div className="login-image-content">
                    <h2 className="login-image-title">Welcome Back</h2>
                    <p className="login-image-subtitle">
                        Continue your journey exploring the rich traditions of Indian classical dance forms.
                    </p>
                </div>
            </div>
            
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-decoration-1"></div>
                    <div className="login-decoration-2"></div>
                    
                    <h2 className="login-form-title">Login</h2>
                    
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    
                    <div className="login-divider">
                        <div className="login-divider-line"></div>
                        <div className="login-divider-text">or</div>
                        <div className="login-divider-line"></div>
                    </div>
                    
                    <div className="social-login">
                        <button type="button" className="social-login-button">
                            <i className="fa fa-facebook"></i>
                        </button>
                        <button type="button" className="social-login-button">
                            <i className="fa fa-google"></i>
                        </button>
                        <button type="button" className="social-login-button">
                            <i className="fa fa-twitter"></i>
                        </button>
                    </div>
                    
                    <div className="login-links">
                        <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
