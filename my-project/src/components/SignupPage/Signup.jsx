import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleSignInButton from './GoogleSignInButton';
import { Link } from 'react-router-dom';
import "./Signup.css";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false); 
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const validationErrors = {};
    if (name === 'email' && !value.trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z\-]+\.)+[a-zA-Z]{2,}$/)) {
      validationErrors.email = 'Invalid email format';
    }
    if (name === 'password' && value.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='Sigup-page'>
      

        <div className="additional-text">
        <h1>Hello!</h1>
        <p>Enter your credentials to Sign Up</p>
      </div>
      <div className="background-image"></div>
    <div className="signup-form">
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <label htmlFor="password">Password:</label>
        <div> 
        <div className="password-input-container"> 
  <input
    type={showPassword ? "text" : "password"}
    id="password"
    name="password"
    placeholder="Enter your password"
    required
    onChange={handleChange}
  />
  <button type="button" className="password-toggle-button" onClick={toggleShowPassword}>
    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </button>
</div>


        </div>
        {errors.password && <p className="error-message">{errors.password}</p>} 
        <a href="#">Forget Password?</a>
        <div className="horizontal-or">
          OR
        </div>
        <div className="social-login">
          <GoogleOAuthProvider clientId={'369160555863-64rqvufirogr91olcrsh1527h3147utk.apps.googleusercontent.com'}>
            <GoogleSignInButton />
          </GoogleOAuthProvider>
        </div>
        <div className="center-button">
          <button type="submit">Sign up</button>
        </div>
        <p>
      Already have an account?{' '}
      <Link to="/Login" style={{ color: 'black', fontWeight: 'bold' }}>Login</Link>


    </p>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
