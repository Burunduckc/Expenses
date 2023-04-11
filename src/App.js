import {useState} from "react";
import './App.scss';
import Expens from "./components/Item/Expenses";
import {NewExp as Form} from "./components/NewExpensis/NewExp";

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
function App() {

  const [expenses, setExpensess] = useState(INITIAL_EXPENSES)

  const addExpenseHendler = expenses => {
    setExpensess(prev => {
      return [expenses, ...prev]
    })
  }

  return (
    <div className="App">
      <Form onAddExp = {addExpenseHendler}/>
      <Expens items={expenses}></Expens>
    </div>
  );
}

export default App;
