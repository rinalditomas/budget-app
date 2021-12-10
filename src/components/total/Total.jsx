import React, { useEffect, useState } from "react";
import "./Total.css";

const Total = ({ total }) => {
  const { totalIncome, totalExpense } = total;
  const totalMoney = () => {
    return totalIncome - totalExpense;
  };
  return (
    <div className="t-container">
      <div className="container ">
      <i className="fas fa-hand-holding-usd icon"></i>
        <div className="info-total">
        <p className='text'>Income:</p>
        <h1 className="">{`$${totalIncome}`}</h1>
        </div>
      </div>
      <div className="container ">
      <i className="fas fa-receipt icon"></i>
        <div className="info-total">
        <p className='text'>Expenses:</p>
        <h1 className="">{`$${totalExpense}`}</h1>
        </div>
      </div>
  
      <div className='container'>
        {
          totalMoney() === 0 ? <i class="far fa-meh"></i>: totalMoney() > 0 ? <i className="far fa-laugh-beam icon"></i> : <i className="far fa-frown icon"></i>
        }
        <div className="info-total">
        <p className='text'>Total:</p>
        <h1>{`$${totalIncome - totalExpense}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default Total;
