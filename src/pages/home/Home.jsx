import React, { useState, useRef, useEffect } from "react";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "./Home.css";
import { AddButton } from "../../components/addButton/AddButton";
import Expense from "../../components/expense/Expense";
import NewExpenseForm from "../../components/newExpenseForm/NewExpenseForm";
import { db } from "../../firebaseConfig";

export const Home = ({ signOutUser }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [input, setInput] = useState({
    type: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  const [expenses, setExpenses] = useState([]);
  const formRef = useRef();
  const userExpenses = collection(db, "users", user.uid, "money");
  

  useEffect(() => {
    const getData = () =>{
        onSnapshot(userExpenses,(snapshot)=>{
            setExpenses(snapshot.docs.map(exp=> ({ ...exp.data(), id: exp.id })))
        })
        


    }

    getData()
    // const getUsers = async () => {
    //   const getExpenses = await getDocs(userExpenses);
    //   const getIncome = await getDocs(userIncome);

    //   setExpenses(
    //     getExpenses.docs.map((exp) => ({ ...exp.data(), id: exp.id }))
    //   );
    //   setIncomes(getIncome.docs.map((inc) => ({ ...inc.data(), id: inc.id })));
    // };
    // getUsers();
  }, []);

  const handleChange = (e) => {
    input.type = formType;
    if (e.target) {
      const key = e.target.name || e.target.getAttribute("name");
      const value = e.target.value || e.target.getAttribute("value");
      setInput({ ...input, [key]: value });
    } else {
        
      const key = "date";
      const value = e;
      setInput({ ...input, [key]: value });
    }
  };
  const openForm = (type) => {
    setShowForm((prev) => !prev);
    setFormType(type);
  };
  const closeForm = (e) => {
    if (formRef.current === e.target) {
      setShowForm(false);
      setFormType("");
    }
  };
  const addNewItem = async () => {
      setShowForm(false)
      setFormType('')
    const docRef = doc(collection(db, "users", user.uid, 'money'));
    if(!input.date){
      const  item = {...input,date:new Date()}
      const newUser = await setDoc(docRef, item);

    }else{
        const newUser = await setDoc(docRef, input);
    }
    
  };

  return (
    <div className="home-container">
      <h1>HOME</h1>
      <button onClick={signOutUser}>Logout</button>
      

      <div className="expenses-container">
          {
              expenses.map(expense=>(
                <Expense expense={expense} key={expense.id}/>
              ))
          }
      </div>
      <div className="addBtn-container">
        <AddButton openForm={openForm} />
        <AddButton type={"income"} openForm={openForm} />
      </div>
      {showForm ? (
        <NewExpenseForm
          formType={formType}
          closeForm={closeForm}
          formRef={formRef}
          openForm={openForm}
          handleChange={handleChange}
          input={input}
          addNewItem={addNewItem}
        />
      ) : null}
    </div>
  );
};
