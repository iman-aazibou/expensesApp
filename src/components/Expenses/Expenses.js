import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [expenseYear, setExpenseYear] = useState('2021');

  const setSelectedYear = (yearselected) => {
    console.log(yearselected)
    setExpenseYear(yearselected);
  };

  return (
    
      <Card className="expenses">
      <ExpensesFilter selected={expenseYear} onYearSelect={setSelectedYear} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
      </Card>
  
  );
}

export default Expenses;
