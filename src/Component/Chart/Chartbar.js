import "./Chartbar.css";

function Chartbar(props) {
  const percent = (props.amt * 100) / props.maxHeight;
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: percent + "%" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default Chartbar;
