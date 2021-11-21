import React from 'react'
import './AddButton.css'

export const AddButton = ({type,openForm}) => {
    return (
        <div >
            {type === 'income' ?
            <button className='addBtn income'onClick={()=>openForm('Income')}>+</button> :
            <button className='addBtn spending' onClick={()=>openForm('Expense')}>-</button>
            }
           
        </div>
    )
}
