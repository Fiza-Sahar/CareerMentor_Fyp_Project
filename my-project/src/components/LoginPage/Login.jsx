import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Login.css";



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      console.log('Login successful');
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Invalid email or password');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    <div className='login-page'>
      

        <div className="additional-text">
        <h1>Welcome Back!</h1>
        <p>Enter your credentials to log in.</p>
      </div>
      <div className="background-image"></div>
      <div className="login-form">
        <h2>Log In</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input-container"> 
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />
              <button type="button" className="password-toggle-button" onClick={toggleShowPassword}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className="form-group">
            <a href="#">Forget Password?</a>
          </div>
          <div className="center-button">
            <button type="submit">Login</button>
          </div>
        </form>
        <p> Don't have an account?{' '}
          <Link to="/Signup">Signup</Link>
        </p>
      </div>
      {/* Additional text at the top of the page */}
    
    </div>
  );
}

export default Login;
