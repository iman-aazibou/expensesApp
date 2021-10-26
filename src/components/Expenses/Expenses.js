import React, { useState } from "react";
import Card from "./../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [expenseYear, setExpenseYear] = useState("2021");

  const setSelectedYear = (yearselected) => {
    console.log(yearselected);
    setExpenseYear(yearselected);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filtered={filteredExpenses}
        selected={expenseYear}
        onYearSelect={setSelectedYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
