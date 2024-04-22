import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./Login.css";


function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null); 

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        }),
        credentials: 'include'
      });

      if(!response.ok) {
        const errorData = await response.json();

        if(errorData.error === 'Username already exists.') {
          setError('Username already exists.');
        } else if(errorData.error === 'Email already exists.') {
          setError('Email already exists.');
        } else {
          setError('An error occurred. Please try again.');
        }
      } else {
        setRedirect(true);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again.');
    }
  };

  if(redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="login-box">
      <h2 className="text-2xl">Register</h2>
      {error && <div className="error">{error}</div>} {/* Display error message */}
      <form onSubmit={registerUser}>
        <div className="user-box">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <label>Username</label>
        </div>
        <div className='user-box'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <label>Password</label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
