import React, { useState, useRef, useEffect } from "react";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "./Home.css";
import { AddButton } from "../../components/addButton/AddButton";
import Expense from "../../components/expense/Expense";
import NewExpenseForm from "../../components/newExpenseForm/NewExpenseForm";
import { db } from "../../firebaseConfig";
import Total from "../../components/total/Total";

export const Home = ({ signOutUser }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [input, setInput] = useState({
    type: "",
  });
  const [edit,setEdit]= useState(false)
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [selected, setSelected]= useState()
  const [total, setTotal] = useState({
    totalIncome: 0,
    totalExpense: 0,
  });
  const formRef = useRef();
  const userExpenses = collection(db, "users", user.uid, "money");
  const totalRef = collection(db, "users");


  useEffect(() => {
    const getData = () => {
      onSnapshot(userExpenses, (snapshot) => {
        setExpenses(
          snapshot.docs.map((exp) => ({ ...exp.data(), id: exp.id }))
        );
      });
      onSnapshot(totalRef, (total) => {
        total.docs.map((info) => setTotal(info.data()));
      });
    };

    getData();
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
      setEdit(false)
    }
  };
  const addNewItem = async () => {
    let texpense = 0;
    let tincome = 0;

    expenses.forEach((item) => {
      if (item.type === "Income") tincome += Number(item.amount);
      if (item.type === "Expense") texpense += Number(item.amount);
    });

    if (input.type === "Income") tincome += Number(input.amount);
    if (input.type === "Expense") texpense += Number(input.amount);
    setShowForm(false);
    setFormType("");
    const docRef = doc(collection(db, "users", user.uid, "money"));
    const totalRef = doc(db, "users", user.uid);
    if (!input.date) {
      const item = { ...input, date: new Date() };
      const newUser = await setDoc(docRef, item);
    } else {
      const newUser = await setDoc(docRef, input);
    }
    const newTotal = await setDoc(totalRef, {
      totalIncome: tincome,
      totalExpense: texpense,
    });
  };

  const deleteExpense = async (expense) => {
    const {amount, id,type} = expense
    const {totalIncome, totalExpense}= total
    const expenseDoc = doc(db, "users", user.uid, "money", expense.id);
    const totalRef = doc(db, "users", user.uid);
    if (expense.type === "Income") {
      total.totalIncome = total.totalIncome - expense.amount;
    }
    if (expense.type === "Expense") {
      total.totalExpense = total.totalExpense - amount;
    }
    
    await deleteDoc(expenseDoc);
    const newTotal = await setDoc(totalRef, {
      totalIncome: total.totalIncome,
      totalExpense: total.totalExpense,
    });
  };
  const startEdit = (expense)=>{
    setEdit(true)
    openForm(expense.type)
    setSelected(expense)
  }
  const finishEdit= ()=>{

    setEdit(false)
    setShowForm(false)
  }

const updateExpense =  async(selected)=>{
 
  let editDoc = doc(db, "users", user.uid, "money", selected.id);
  let totalRef = doc(db, "users", user.uid);
  let diference = 0
 
  finishEdit()
  await updateDoc(editDoc,{
    amount:input.amount || selected.amount,
    date: input.date || selected.date,
    note:input.note || selected.note,
    category: input.category || selected.category,
    type:selected.type,
  })

  //si existe amount en input
  if(input.amount){
    //si el tipo es 'income'
    if (selected.type === "Income") {
      
      if(input.amount > selected.amount){
        diference = input.amount - selected.amount
        const newTotal = await setDoc(totalRef, {
          totalIncome: total.totalIncome + diference,
          totalExpense: total.totalExpense,
        });
      }
      if(input.amount < selected.amount){
        diference =  selected.amount - input.amount 
        const newTotal = await setDoc(totalRef, {
          totalIncome: total.totalIncome - diference,
          totalExpense: total.totalExpense,
        });
      }
      
    }
    //si el tipo es expense
    if (selected.type === "Expense") {
      if(input.amount > selected.amount){
        diference = input.amount - selected.amount
        const newTotal = await setDoc(totalRef, {
          totalIncome: total.totalIncome,
          totalExpense: total.totalExpense + diference,
        });
      }
      if(input.amount < selected.amount){
        diference =  selected.amount - input.amount 
        const newTotal = await setDoc(totalRef, {
          totalIncome: total.totalIncome,
          totalExpense: total.totalExpense - diference,
        });
      }
     
    }
  }





}
  return (
    <div className="home-container">
      <h1>HOME</h1>
      <button onClick={signOutUser}>Logout</button>
      <div className="middle">
        <div className="total-container">
          <Total total={total || 0} />
        </div>
        <div className="expenses-container">
          {expenses.map((expense) => (
            <Expense
              expense={expense}
              key={expense.id}
              deleteExpense={deleteExpense}
              edit={edit}
              startEdit={startEdit}
            />
          ))}
        </div>
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
          selected={selected}
          edit={edit}
          finishEdit={finishEdit}
          updateExpense={updateExpense}
        />
      ) : null}
    </div>
  );
};
