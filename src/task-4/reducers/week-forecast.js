import {
  FETCH_WEEK_START,
  FETCH_WEEK_SUCCESS,
  FETCH_WEEK_FAILURE,
} from "../actions/week-forecast";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const weekReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEEK_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEEK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_WEEK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default weekReducer;
