import React, { useState }  from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebaseConfig";
import {Auth} from '../pages/auth/Auth'

export const NotLogged = () => {
    const [input, setInput] = useState([]);
    const [error, setError] = useState("");
    const [register, setRegister] = useState(false);
    const auth = getAuth();
 
  
    const handleChange = (e) => {
      const key = e.target.name;
      const value = e.target.value;
      setInput({ ...input, [key]: value });
    };
  
 
    const changeToRegisterForm = () => {
      setRegister((prev) => !prev);
    };
  
    const registerNewUser = async () => {
      const { password1, password2, email } = input;
      try {
        if (!email || !password2 || !password1) {
          setError("Please, fill the form");
        }
        if (password1 != password2) {
          setError("The passwords don't match");
        } else {
          setError(null);
          const newUser = await createUserWithEmailAndPassword(
            auth,
            email,
            password1
          );
          if (newUser) {
            alert('Account successfully created')
            setRegister(prev=>!prev)
          }
        }
      } catch (error) {
      
        if (error.code === "auth/email-already-in-use")
          setError("This email is already in use by another account");
        if (error.code === "auth/missing-email")
          setError("Please, enter an email");
        if (error.code === "auth/invalid-email")
          setError("Please enter a valid email");
        if (error.code === "auth/weak-password")
          setError("The password should have at least 6 characters");
      }
    };
  
    const loginUser = async ()=>{
      const {email,password} = input
     

      try {
        if (!email || !password) {
          setError("Please, fill the form");

        }else{
 
          setError(null);
          const user = await signInWithEmailAndPassword(auth,email,password)
    
          
        }
         
        
      } catch (error) {
    
        if (error.code === "auth/wrong-password") setError('Incorrect password, please try again')
        if (error.code === "auth/invalid-email") setError('The email address is badly formatted')
        if (error.code === "auth/user-not-found") setError('No user was found with that email')
        
        
      }
    }
  
    return (
      <div className="App">
        <Auth
          handleChange={handleChange}
          registerNewUser={registerNewUser}
          error={error}
          changeToRegisterForm={changeToRegisterForm}
          register={register}
          loginUser={loginUser}
        />
      </div>
    );
}
