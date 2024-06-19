// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "snstest@gmail.com" && password === "snstest") {
      navigate('/userpage');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="login-form col-md-4 col-sm-6 col-xs-8 p-4 border rounded bg-white text-center">
          <img src="https://uploads.mjwebs.com/zHn5dwmsgWEUjEts8XRD6b5qgkXdHNWbE1rj2clM.png" alt="SNS Logo" className="img-fluid logo mb-4" />
          <h2 className="text-center mb-4">Admin Login Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;