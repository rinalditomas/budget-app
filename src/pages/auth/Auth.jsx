import React, { useState } from "react";
import "./Auth.css";

export const Auth = ({handleChange, registerNewUser,error}) => {
  const [register, setRegister] = useState(false);

  const changeToRegisterForm = () => {
    setRegister((prev) => !prev);
  };
  
  return (
    <div className="auth-container">
      <div className="auth-img">
        <div className="img-text">
          <h1>Budget App</h1>
          <p>The most popular app to track your expenses</p>
        </div>
      </div>
      {register ? (
        <div className="auth-form">
          <div className="form-text">
            <h1>Hello!</h1>
            <p>Sign Up to get started</p>
          </div>
            
          <input type="text" placeholder="Email" name='email'onChange={handleChange}/>
          <input type="password" placeholder="Password" name='password1' onChange={handleChange}/>
          <input type="password" placeholder="Re-enter password" name='password2' onChange={handleChange}/>
          <p>{error}</p>
          <button className="btn" onClick={registerNewUser}>Register</button>
          <p className="change" onClick={changeToRegisterForm}>
            {" "}
            Already have an account? Login!{" "}
          </p>
        </div>
      ) : (
        <div className="auth-form">
          <div className="form-text">
            <h1>Hello Again!</h1>
            <p>Welcome back</p>
          </div>

          <input type="text" placeholder="Email Address" name='email'onChange={handleChange}/>
          <input type="password" placeholder="Password" name='password 'onChange={handleChange}/>
          <button className="btn">Login</button>
          <p className="change" onClick={changeToRegisterForm}>
            {" "}
            Not a user? Register!{" "}
          </p>
        </div>
      )}
    </div>
  );
};
