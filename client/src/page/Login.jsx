import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-box">
      <h2 className="text-2xl">Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required={true} />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required={true} />
          <label>Password</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
