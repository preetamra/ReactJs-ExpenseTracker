import "./Chart.css";

import Chartbar from "./Chartbar";

function Chart(props) {
  const sum = props.datapoints.reduce((prev, curr) => {
    curr.amount && (prev += curr.amount);
    return prev;
  }, 0);
  return (
    <div className="chart">
      {props.datapoints.map((data) => (
        <Chartbar
          key={Math.random()}
          label={data.label}
          maxHeight={sum}
          amt={data.amount}
        />
      ))}
    </div>
  );
}

export default Chart;
