import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [expenseYear, setExpenseYear] = useState("2021");

  const setSelectedYear = (yearselected) => {
    console.log(yearselected);
    setExpenseYear(yearselected);
  };

  const filteredExpenses = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()=== expenseYear;
  })


  return (
    <Card className="expenses">
      <ExpensesFilter selected={expenseYear} onYearSelect={setSelectedYear} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
