import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const [isEditing, setIsEditing] = useState(false);

  const showForm = () => {
    setIsEditing(true);
  };

const hideForm = () => {
  setIsEditing(false);
}

  return (
    <div className="new-expense">
      <div className="new-expense__actions">
        {!isEditing && <button onClick={showForm}> Add new expense</button>}
        {isEditing && <ExpenseForm onCancelExpense={hideForm} onSaveExpenseData={saveExpenseDataHandler} />}
      </div>
    </div>
  );
};

export default NewExpense;
