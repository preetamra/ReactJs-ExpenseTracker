import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isOpen, setIsOpen] = useState(false);

  function onSave(expense) {
    props.onAdd(expense);
    onToggle();
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSave} onToggle={onToggle} isOpen={isOpen} />
    </div>
  );
}

export default NewExpense;
