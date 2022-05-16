import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState(" ");
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(" ");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  function onSave() {
    props.onSave({
      title: title,
      amount: number,
      date: date,
      id: Math.random(),
    });
    setTitle(" ");
    setNumber(" ");
    setDate(" ");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.isOpen && onSave();
        !props.isOpen && props.onToggle();
      }}
    >
      {props.isOpen && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type={"text"} value={title} onChange={titleHandler} />
          </div>
          <div className="new-expense__control">
            <label>amount</label>
            <input type={"number"} value={number} onChange={numberHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type={"date"} value={date} onChange={dateHandler} />
          </div>
        </div>
      )}

      <div className="new-expense__actions">
        {props.isOpen && (
          <button type="submit" onClick={props.onToggle}>
            Cancel
          </button>
        )}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
