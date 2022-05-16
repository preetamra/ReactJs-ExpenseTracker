import { useState } from "react";

import Expense from "./Component/Expense/Expense";
import NewExpense from "./Component/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [list, setList] = useState(expenses);

  function AddExpenseHandler(expense) {
    setList([...list, { ...expense, date: new Date(expense.date) }]);
  }

  return (
    <div>
      <NewExpense onAdd={AddExpenseHandler} />
      <Expense expenses={list} />
    </div>
  );
}

export default App;
