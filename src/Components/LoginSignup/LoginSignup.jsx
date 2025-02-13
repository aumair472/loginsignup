import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '/src/Assets/person.png';
import email_icon from '/src/Assets/email.png';
import password_icon from '/src/Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState('Sign Up');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === 'Sign Up' && (
                    <div className="input">
                        <img src={user_icon} alt="user icon" />
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Username" 
                            value={formData.username} 
                            onChange={handleChange} 
                        />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="email icon" />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="password icon" />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </div>
                {action === 'Login' && (
                    <div className="forgot-password">
                        Lost Password? <span>Click Here</span>
                    </div>
                )}
                <div className="submit-container">
                    <div
                        className={action === 'Login' ? 'submit gray' : 'submit'}
                        onClick={() => setAction('Sign Up')}
                    >
                        Sign Up
                    </div>
                    <div
                        className={action === 'Sign Up' ? 'submit gray' : 'submit'}
                        onClick={() => setAction('Login')}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
