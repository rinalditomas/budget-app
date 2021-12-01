import React from "react";
import "./NewExpenseForm.css";
import {
  IncomeCategories,
  ExpensesCategories,
} from "../../constants/functions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate2 } from "../../constants/functions";

const newExpenseForm = ({
  formType,
  closeForm,
  formRef,
  openForm,
  handleChange,
  input,
  addNewItem,
  selected,
  edit,
  finishEdit,
  updateExpense
}) => {
 
  return (
    <div className="expenseForm-backgroud" ref={formRef} onClick={closeForm}>
      <div className="expenseForm-container">
        <div
          className={formType === 'Income' ? 'form-header green' : 'form-header red'}
        >
          <i className="fas fa-times" onClick={edit ? finishEdit : openForm}></i>
          <h1>{formType}</h1>
        </div>

        <div className="input-container">
          <i className="fas fa-dollar-sign"></i>
          <input
            type="number"
            name="amount"
            id="amount-input"
            placeholder={edit ? selected.amount : "Add the amount"}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <DatePicker
            selected={edit ? formatDate2(selected.date.seconds, selected.date.nanoseconds) : input.date || new Date()}
            onChange={(date) => handleChange(date)}
          />
        </div>

        <div className="input-container">
          <i className="fas fa-pen"></i>
          <input
            type="text"
            name="note"
            placeholder={edit ? selected.note : "Add a note"}
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
                {
                  edit ? 
                  <button
                  className="form-btn"
                  style={{
                    backgroundColor: formType === "Income" ? "#5DC460" : "#F44336",
                  }}
                  onClick={()=>updateExpense(selected)}
                >
                  Edit
                </button> :
                 <button
                 className="form-btn"
                 style={{
                   backgroundColor: formType === "Income" ? "#5DC460" : "#F44336",
                 }}
                 onClick={addNewItem}
               >
                 Add
               </button>

                }
       
      </div>
    </div>
  );
};

export default newExpenseForm;
