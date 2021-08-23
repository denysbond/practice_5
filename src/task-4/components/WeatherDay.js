import React from "react";
import { connect } from "react-redux";
import { openDayDetails } from "../actions/day-forecast";

const WeatherDay = (props) => {
  return (
    <li
      onClick={() => props.openDayDetails(props.day.dt)}
      className={`${
        props.selectedDt === props.day.dt
          ? "list-inline-item active"
          : "list-inline-item"
      }`}
    >
      <div className="day-name">
        {new Date(props.day.dt).toLocaleDateString()}
      </div>
      <img src={`img/${props.day.weather.icon}.png`} alt="Raining" />
      <div className="temp">
        {props.day.temp.min}&#x2103;-{props.day.temp.max}&#x2103;
      </div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDt: state.selectedDt,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openDayDetails: (key) => dispatch(openDayDetails(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDay);
