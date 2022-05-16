import Chart from "../Chart/Chart";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ExpenseChart(props) {
  let i = 0;
  let data = [
    { label: "jan" },
    { label: "feb" },
    { label: "mar" },
    { label: "apr" },
    { label: "may" },
    { label: "jun" },
    { label: "jul" },
    { label: "aug" },
    { label: "sep" },
    { label: "oct" },
    { label: "nov" },
    { label: "dec" },
  ];
  if (props.filteredExpense.length > 0) {
    data = data.map((data, index) => {
      if (index === props.filteredExpense[i].date.getMonth() && 0) {
        i++;
        return {
          label: monthNames[props.filteredExpense[i].date.getMonth()],
          amount: props.filteredExpense[i].amount,
        };
      } else {
        return {
          label: monthNames[index],
          amount: 0,
        };
      }
    });
  }

  return <Chart datapoints={data} />;
}

export default ExpenseChart;
