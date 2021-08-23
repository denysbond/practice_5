import { getWeekForecast } from "../api";

export const FETCH_WEEK_START = "FETCH_WEEK_START";
export const FETCH_WEEK_SUCCESS = "FETCH_WEEK_SUCCESS";
export const FETCH_WEEK_FAILURE = "FETCH_WEEK_FAILURE";
export const DELETE_WEEK_ERROR = "DELETE_WEEK_ERROR";

const fetchWeekStart = () => ({
  type: FETCH_WEEK_START,
});

const fetchWeekSuccess = (weekForecast) => ({
  type: FETCH_WEEK_SUCCESS,
  payload: weekForecast,
});

const fetchWeekFailure = (e) => ({
  type: FETCH_WEEK_FAILURE,
  error: e,
});

export const deleteWeekError = (id) => ({
  type: DELETE_WEEK_ERROR,
  payload: { id },
});

export const fetchWeekForecast = () => async (dispatch, getState) => {
  dispatch(fetchWeekStart());

  return getWeekForecast()
    .then((response) => dispatch(fetchWeekSuccess(response)))
    .catch((error) => dispatch(fetchWeekFailure(error)));
};
