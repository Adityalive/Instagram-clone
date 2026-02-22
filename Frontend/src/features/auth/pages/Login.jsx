import React, { useState } from 'react';
import '../Style/Login.scss';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform input validation
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Make API request to authenticate the user
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password },
        {
            withCredentials: true
        }
      ).then((res) => console.log(res.data));

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Redirect to a success page or show a success message
      // Example: window.location.href = '/dashboard';
      console.log('Login successful');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-header">
          <h2>Login</h2>
          <p>Enter your details to log in</p>
        </div>

        <input
          onChange={(e) => setUsername(e.target.value)}
          className="username"
          type="text"
          placeholder="Username"
          required
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>

        <span className="register-link">
          Don't have an account? <a href="#register">Register</a>
        </span>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;