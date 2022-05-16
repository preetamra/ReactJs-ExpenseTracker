import "../Expense/Expense.css";
import Card from "../UI/Card";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [select, setSelect] = useState("2020");

  function selectHandler(select) {
    setSelect(select);
  }
  const filterExpense = props.expenses.filter((ele) => {
    const date = new Date(ele.date);
    return date.getFullYear() === parseInt(select);
  });

  return (
    <Card className="expenses">
      <ExpenseFilter select={select} onSelect={selectHandler}></ExpenseFilter>
      <ExpenseChart filteredExpense={filterExpense}></ExpenseChart>
      <ExpenseList filterExpense={filterExpense} />
    </Card>
  );
}

export default Expense;
