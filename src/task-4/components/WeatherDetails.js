import React from "react";
import { days } from "../api/data-generator";
import { connect } from "react-redux";
import { selectedDt } from "../reducers/day-forecast";
import { fetchDayForecast } from "../actions/day-forecast";

class WeatherDetails extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedDt !== this.props.selectedDt) {
      this.props.fetchDayForecast(this.props.selectedDt);
    }
  }

  render() {
    const forecast = this.props.forecast[this.props.selectedDt];

    if (forecast) {
      if (forecast.loading) {
        return (
          <div className="details">
            <span className="fa fa-spinner fa-spin"></span>
          </div>
        );
      } else if (forecast.error) {
        return (
          <div className="details">
            <div className="error">
              Error occurred during data fetch. Try to{" "}
              <button
                onClick={() =>
                  this.props.fetchDayForecast(this.props.selectedDt)
                }
              >
                reload
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="details">
              <div className="day-name">
                <div>{new Date(forecast.dt).toLocaleDateString()}</div>
                <img
                  src={`img/${forecast.data.weather.icon}.png`}
                  alt="Raining"
                />
              </div>
              <div>
                <dl>
                  <dt>Min temp</dt>
                  <dd>{forecast.data.temp.min}&#x2103;</dd>

                  <dt>Max Temp</dt>
                  <dd>{forecast.data.temp.max}&#x2103;</dd>

                  <dt>Weather</dt>
                  <dd>{forecast.data.weather.description}</dd>
                </dl>
              </div>
              <div>
                <dl>
                  <dt>Wind</dt>
                  <dd>{forecast.data.speed} m/s</dd>

                  <dt>Humidity</dt>
                  <dd>{forecast.data.humidity}%</dd>

                  <dt>Pressure</dt>
                  <dd>{forecast.data.pressure} hpa</dd>
                </dl>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    selectedDt: state.selectedDt,
    forecast: state.dayForecast,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDayForecast: (dt) => {
    dispatch(fetchDayForecast(dt));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);
