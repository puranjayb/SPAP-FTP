import { React, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [canRedirect, setCanRedirect] = useState(false);

  const loginUser = async (credentials) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === 'Invalid email or password') {
          alert('Invalid email or password')
        } else if (errorData.error === 'User not found') {
          alert('User not found')
        } else {
          alert('Internal server error')
        }
      } else {
        setCanRedirect(true);
      }
    } catch (error) {
      console.log("Error During login:", error);
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const tokenData = await loginUser({ email: username, password });
    if (tokenData && tokenData.token) {
      setCanRedirect(true);
    }
  };  

  if(canRedirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login-box">
      <h2 className="text-2xl">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="user-box">
          <input
            type="text"
            name=""
            required={true}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
