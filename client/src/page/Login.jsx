import {React, useState} from "react";
import "./Login.css";

const loginUser = async (credentials) => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Login Failed");
    }
    return response.json();
  } catch (error) {
    console.error("Error During login:", error);
    throw error;
  }
};
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const tokenData = await loginUser({ email: username, password });
      console.log("Login successful, Token:", tokenData.token);
    } catch (error) {
      console.error("Login failed", error.message);
    }
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
            <label>Username</label>
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
