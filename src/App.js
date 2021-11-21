import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import "./App.css";
import { db } from "./firebaseConfig";
import { NotLogged } from "./containers/NotLogged";
import { Main } from "./containers/Main";


function App() {
  const [user,setUser]=useState(null)
  const auth = getAuth();
  
  useEffect(() => {
   onAuthStateChanged(auth,(user)=>{
     if(user && user.uid)  setUser(user)
     else setUser(null)
   })
  }, [])

  const signOutUser= ()=>{
    signOut(auth)
    .then(()=>{
      setUser(null)
      alert('Good bye!')
    })
    .catch(e=>console.log(e))
    }


  return (
    <div className="App">
    {user ? <Main signOutUser={signOutUser}/> : <NotLogged/> }
    </div>
  );
}

export default App;
