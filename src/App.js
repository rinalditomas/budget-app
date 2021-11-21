
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';
import { db } from './firebaseConfig';
import { Auth } from './pages/auth/Auth';

function App() {
  const [input, setInput]= useState([])
const [error,setError]=useState('')
  const auth = getAuth()

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };

    const addNewItem= async (e)=>{
      e.preventDefault()
      console.log(input.amount,input.category,input.notes)
      let item={
        income: false,
        amount: input.amount,
        category:input.category,
        notes:input.notes,
        date: Date.now()
        }
       
       await setDoc(doc(db,'expenses','gastos'),{item})
    }

    const registerNewUser =async()=>{
      let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
      const {password1,password2,email} = input
    try {
      if(!email.match(mailformat))setError('Email cannot be blank')
      if(!password1 || !password2) setError('Password cannot be blank')
      if(password1 != password2)setError("Passwords don't match")
       
        const newUser = await createUserWithEmailAndPassword(auth,email,password1)
       
      
   
      
    } catch (error) {
      console.log(error.message)
      if(error.code ==='auth/email-already-in-use') setError('This email is already in use by another account')
    }
    }


  return (
    <div className="App">
     
        <Auth handleChange={handleChange} registerNewUser={registerNewUser} error={error}/>
      


    </div>
  );
}

export default App;
