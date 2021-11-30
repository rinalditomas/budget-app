import React, { useEffect, useState } from "react";
import './Total.css'

const Total = ({ total }) => {
  if(total != 0){
    const { totalIncome, totalExpense } = total[0] 
    const totalMoney = ()=>{
        return totalIncome - totalExpense
    }
  }
 
  return (
    <div className="t-container">
      <div className="container ">
        <h1 className='incomes'>{`$${totalIncome || total}`}</h1>
      </div>
      <div className="container ">
        <h1 className='expenses'>{`$${totalExpense || total}`}</h1>
      </div>

      <div className={totalMoney() > 0 ? "container total green": "container total red"}>
        <h1>Total:</h1>
        <h1>{`$${(totalIncome - totalExpense)|| total}`}</h1>
      </div>
    </div>
  );
};

export default Total;
