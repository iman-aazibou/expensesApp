import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const data = [
    { id: 1, title: "new desk", amount: 300, date: new Date(2021, 5, 12) },
    { id: 2, title: "new table", amount: 500, date: new Date(2021, 6, 12) },
    { id: 4, title: "new chair", amount: 200, date: new Date(2021, 8, 12) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("App.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={data} />
    </div>
  );
}

export default App;
