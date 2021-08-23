import React from "react";
import WeatherDay from "./WeatherDay";
import WeatherDetails from "./WeatherDetails";

import { connect } from "react-redux";
import { fetchWeekForecast } from "../actions/week-forecast";
import ErrorLogger from "./ErrorLogger";

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchWeekForecast();
  }

  render() {
    return (
      <div className="weather">
        {this.props.weekLoading ? (
          <div className="weather">
            <span className="fa fa-spinner fa-spin"></span>
          </div>
        ) : (
          <div>
            <ul className="list-inline mx-auto">
              {this.props.weekForecast.map((day) => (
                <WeatherDay day={day} key={day.dt} />
              ))}
            </ul>
            <WeatherDetails />
          </div>
        )}

        {this.props.weekError && (
          <div className="weather">
            <div className="error">
              Error occurred during data fetch. Try to{" "}
              <button onClick={this.props.fetchWeekForecast}>reload</button>
            </div>
          </div>
        )}

        <ErrorLogger />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weekLoading: state.weekReducer.loading,
    weekError: state.weekReducer.error,
    weekForecast: state.weekReducer.data,
  };
};

export default connect(mapStateToProps, { fetchWeekForecast })(Weather);
