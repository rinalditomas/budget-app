import React from 'react'
import './Expense.css'

const Expense = ({category, amount}) => {
    return (
        <div className='expense-container'>
            <h1>{category}</h1>
            <h1>{amount}</h1>
        </div>
    )
}

export default Expense
