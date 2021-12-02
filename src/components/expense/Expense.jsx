import React, { useState } from 'react'
import { formatDate } from '../../constants/functions'
import './Expense.css'

const Expense = ({expense,deleteExpense, startEdit, edit}) => {
    const[moreInfo, setMoreInfo]= useState(false)
    const[openMenu, setOpenMemu]= useState(false)
    const {category,id,amount,date,note,type} = expense

 

    return (
        <div className={type === 'Income' ? 'expense-container lightgreen' : 'expense-container lightred'}>
            <div className="main-information" >
                <div className="category-inf">
                    <i className={moreInfo ? "fas fa-sort-up arrow down ":"fas fa-sort-up arrow"} onClick={()=>setMoreInfo(!moreInfo)}></i>
                    <h1>{category}</h1>
                </div>
                <div className="expense-options"> 
                    <h1 >{`$${amount}`}</h1>
                    <i className="far fa-trash-alt" onClick={()=>deleteExpense(expense)}></i>
                    <i className="far fa-edit" onClick={()=>startEdit(expense)}></i>
                </div>
           
            </div>
            <div className={moreInfo ? "sub-information show" : "sub-information"}>
            <p>{note}</p>
            <p>{formatDate(date.seconds,date.nanoseconds)}</p>
            </div>
        </div>
    )
}

export default Expense
