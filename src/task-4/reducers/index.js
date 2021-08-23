import { combineReducers } from "redux";

import { dayForecast, selectedDt } from "./day-forecast";
import weekReducer from "./week-forecast";
import { errorReducer } from "./error-forecast";

export default combineReducers({
  dayForecast,
  selectedDt,
  weekReducer,
  errorReducer,
});
