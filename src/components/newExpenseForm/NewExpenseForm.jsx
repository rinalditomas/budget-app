import React from "react";
import "./NewExpenseForm.css";
import {
  IncomeCategories,
  ExpensesCategories,
} from "../../constants/functions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const newExpenseForm = ({
  formType,
  closeForm,
  formRef,
  openForm,
  handleChange,
  input,
  addNewItem
}) => {
  return (
    <div className="expenseForm-backgroud" ref={formRef} onClick={closeForm}>
      <div className="expenseForm-container">
        <div
          className={formType === 'Income' ? 'form-header green' : 'form-header red'}
        >
          <i className="fas fa-times" onClick={openForm}></i>
          <h1>{formType}</h1>
        </div>

        <div className="input-container">
          <i className="fas fa-dollar-sign"></i>
          <input
            type="number"
            name="amount"
            id="amount-input"
            placeholder="Add the amount"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <DatePicker
            selected={input.date || new Date()}
            onChange={(date) => handleChange(date)}
          />
        </div>

        <div className="input-container">
          <i className="fas fa-pen"></i>
          <input
            type="text"
            name="note"
            placeholder="Add a note"
            onChange={handleChange}
          />
        </div>

        <div className="categories-container">
          <p>Catergories:</p>
          <div className="categories">
            {formType === "Income" ? (
              <IncomeCategories handleChange={handleChange} />
            ) : (
              <ExpensesCategories handleChange={handleChange} />
            )}
          </div>
        </div>

        <button
          className="form-btn"
          style={{
            backgroundColor: formType === "Income" ? "#5DC460" : "#F44336",
          }}
          onClick={addNewItem}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default newExpenseForm;
