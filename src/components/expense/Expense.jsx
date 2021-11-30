import React, { useState } from 'react'
import './Expense.css'

const Expense = ({expense}) => {
    const[moreInfo, setMoreInfo]= useState(false)
    const {category,id,amount,date,note,type} = expense

    return (
        <div className={type === 'Income' ? 'expense-container lightgreen' : 'expense-container lightred'}>
            <div className="main-information" onClick={()=>setMoreInfo(!moreInfo)}>
                <div className="category-inf">
                <i className={moreInfo ? "fas fa-sort-up arrow down ":"fas fa-sort-up arrow"}></i>
            <h1>{category}</h1>
                </div>
            <h1 >{`$${amount}`}</h1>
            </div>
            <div className={moreInfo ? "sub-information show" : "sub-information"}>
            <p>{note}</p>
            <p>{new Date(date.seconds * 1000 + date.nanoseconds/1000000).toISOString().split('T')[0]}</p>
            </div>
        </div>
    )
}

export default Expense
