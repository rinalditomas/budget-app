import React, { useState } from "react";
import "./Auth.css";
import { TEXT } from "../../constants/text";

export const Auth = ({handleChange, registerNewUser,error,changeToRegisterForm,register, loginUser}) => {

  const {imgSub,imgTitle,registerBtn,registerChange,registerSub,registerTitle,loginBtn,loginChange,loginSub,loginTitle} = TEXT.AUTH
  return (
    <div className="auth-container">
      <div className="auth-img">
        <div className="img-text">
          <h1>{imgTitle}</h1>
          <p>{imgSub}</p>
        </div>
      </div>
      {register ? (
        <div className="auth-form">
          <div className="form-text">
            <h1>{registerTitle}</h1>
            <p>{registerSub}</p>
          </div>
            
          <input type="text" placeholder="Email" name='email'onChange={handleChange}/>
          <input type="password" placeholder="Password" name='password1' onChange={handleChange}/>
          <input type="password" placeholder="Re-enter password" name='password2' onChange={handleChange}/>
         {error ? <p className='error'>{error}</p> : null}
          <button className="btn" onClick={registerNewUser}>{registerBtn}</button>
          <p className="change" onClick={changeToRegisterForm}>{registerChange}</p>
        </div>
      ) : (
        <div className="auth-form">
          <div className="form-text">
            <h1>{loginTitle}</h1>
            <p>{loginSub}</p>
          </div>

          <input type="text" placeholder="Email Address" name='email'onChange={handleChange}/>
          <input type="password" placeholder="Password" name='password' onChange={handleChange}/>
          {error ? <p className='error'>{error}</p> : null}
          <button className="btn" onClick={loginUser} >{loginBtn}</button>
          <p className="change" onClick={changeToRegisterForm}>{loginChange}</p>
        </div>
      )}
    </div>
  );
};
