import "./App.css";
import Expenses from './components/Expenses/Expenses';



function App() {
  const data = [
    { id: 1, title: "new desk", amount: 300, date: new Date(2021, 5, 12) },
    { id: 2, title: "new table", amount: 500, date: new Date(2021, 6, 12) },
    { id: 4, title: "new chair", amount: 200, date: new Date(2021, 8, 12) },
  ];

  return (
    <div className="App">
      <p>Let's get started</p>
      <Expenses expenses={data}/>
   
      
    </div>
  );
}

export default App;
