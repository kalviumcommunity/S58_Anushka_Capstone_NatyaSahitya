import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        if (error) setError('');
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            
            // Login successful
            console.log('Login successful:', data);
            
            // Update auth context with user data
            login({
                username: formData.username,
                // Add any other user data you want to store
            });
            
            // Redirect to home page
            navigate('/');
            
        } catch (err) {
            setError(err.message || 'An error occurred during login');
        } finally {
            setLoading(false);
        }
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
                    
                    {error && <div className="error-message">{error}</div>}
                    
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="username"
                            name="username"
                            className="form-input"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className={`login-button ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
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
