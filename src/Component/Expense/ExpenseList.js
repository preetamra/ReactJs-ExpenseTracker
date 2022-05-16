import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  return (
    <li>
      {!props.filterExpense.length && (
        <h1 className="expenses-list__fallback">NO RECORD FOUND</h1>
      )}
      {props.filterExpense.map((data) => (
        <ExpenseItem
          key={data.id}
          title={data.title}
          date={data.date}
          amount={data.amount}
        />
      ))}
    </li>
  );
}

export default ExpenseList;
