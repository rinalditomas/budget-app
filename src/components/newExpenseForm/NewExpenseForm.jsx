import React from "react";
import "./NewExpenseForm.css";
import {
  incomeCategories,
  expensesCategories,
} from "../../constants/functions";

const newExpenseForm = ({ formType, closeForm, formRef, openForm }) => {
  return (
    <div className="expenseForm-backgroud" ref={formRef} onClick={closeForm}>
      <div className="expenseForm-container">
        <div className="form-header" style={{backgroundColor: formType === 'Income' ?'lightgreen' : 'lightpink'}} >
          <i className="fas fa-times" onClick={openForm}></i>
          <h1>{formType}</h1>
        </div>

        <div className="input-container">
          <i class="fas fa-dollar-sign"></i>
          <input
            type="number"
            name="amount"
            id="amount-input"
            placeholder="Add the amount"
          />
        </div>

        <div className="input-container">
          <i class="fas fa-pen"></i>
          <input type="text" name="note" placeholder="Add a note" />
        </div>

        <div className="categories-container">
            <p>Catergories:</p>
            <div className="categories">
            {formType === "Income" ? incomeCategories() : expensesCategories()}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default newExpenseForm;
