import { React, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [canRedirect, setCanRedirect] = useState(false);
  const [error, setError] = useState(""); // State to store error message

  const loginUser = async (credentials) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });
  
      if (response.status === 401) {
        // Handle unauthorized error
        setError("Invalid email or password");
        return null;
      }
  
      if (!response.ok) {
        throw new Error("Login Failed");
      }
  
      const data = await response.json(); 
      return data; 
    } catch (error) {
      console.error("Error During login:", error);
      throw error;
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in...");
    const tokenData = await loginUser({ email: username, password });
    console.log("Token Data:", tokenData);
    if (tokenData && tokenData.token) {
      console.log("Login successful, Token:", tokenData.token);
      setCanRedirect(true);
    }
  };  

  if(canRedirect) {
    return <Navigate to={"/"} />; // Return Navigate component
  }

  return (
    <div className="login-box">
      <h2 className="text-2xl">Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
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
