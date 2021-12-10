import React, { useState } from 'react'
import { formatDate } from '../../constants/functions'
import './Expense.css'

const Expense = ({expense,deleteExpense, startEdit, edit}) => {
    const[moreInfo, setMoreInfo]= useState(false)
    const[openMenu, setOpenMemu]= useState(false)
    const {category,id,amount,date,note,type} = expense

 

    return (
        <div className='expense-container'>
            <div className="main-information" >
                <div className="category-inf">
                    <h1>{category}</h1>
                </div>
                <div className="expense-options"> 
                    <h1 className={type === 'Income' ? 'font-green' : 'font-red'}>{`$${amount}`}</h1>
                    <i className="far fa-trash-alt" onClick={()=>deleteExpense(expense)}></i>
                    <i className="far fa-edit" onClick={()=>startEdit(expense)}></i>
                </div>
           
            </div>
            <div className="sub-information show">
            <p className='text'>{note}</p>
            <p className='text'>{formatDate(date.seconds,date.nanoseconds)}</p>
            </div>
        </div>
    )
}

export default Expense
