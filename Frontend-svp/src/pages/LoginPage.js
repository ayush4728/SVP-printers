// src/pages/LoginPage.js
import React, { useState } from 'react';
import api from '../services/api';
import jwt_decode from 'jwt-decode';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.login(username, password);
            const { access } = response.data;
            const decoded = jwt_decode(access);
            localStorage.setItem('user', JSON.stringify(decoded));
            alert('Login successful!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
