import React, { useState,useRef } from 'react'
import './Home.css'
import { AddButton } from '../../components/addButton/AddButton'
import Expense from '../../components/expense/Expense'
import NewExpenseForm from '../../components/newExpenseForm/NewExpenseForm'

export const Home = ({signOutUser}) => {
    const [input,setInput]=useState({})
    const [items, setItems]=useState({})
    const[showForm,setShowForm]=useState(false)
    const[formType,setFormType]=useState('')
    const formRef= useRef()

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [key]: value });
      };
    const openForm= (type)=>{
        setShowForm(prev=>!prev)
        setFormType(type)
    }
    const closeForm=(e)=>{
        if(formRef.current === e.target){
            setShowForm(false)
            setFormType('')
        }
        
    }
    const addNewItem = ()=>{
        console.log(input)
        // setItems({...items,item})
    }

    return (
        <div className='home-container'>
            <h1>HOME</h1>
            <button onClick={signOutUser}>Logout</button>
            <div className="expenses-container">
                <Expense category={'Salario'} amount={'€323'}/>
                <Expense category={'Salario'} amount={'€323'}/>
                <Expense category={'Salario'} amount={'€323'}/>
                <Expense category={'Salario'} amount={'€323'}/>
            </div>
            <div className="addBtn-container">
            <AddButton openForm={openForm}/>
            <AddButton type={'income'} openForm={openForm}/>
            </div>
            {
                showForm ?
                <NewExpenseForm formType={formType} closeForm={closeForm} formRef={formRef}openForm={openForm}/> : null
            }
                
            
           
        </div>
    )
}
