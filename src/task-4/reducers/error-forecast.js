import { DELETE_DAY_ERROR, FETCH_DAY_FAILURE } from "../actions/day-forecast";
import { FETCH_WEEK_FAILURE } from "../actions/week-forecast";
import { DELETE_WEEK_ERROR } from "../actions/week-forecast";

const initialState = {
  errors: [],
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAY_FAILURE:
      return {
        ...state,
        errors: [...state.errors, { error: action.error, id: Date.now() }],
      };

    case FETCH_WEEK_FAILURE:
      return {
        ...state,
        errors: [...state.errors, { error: action.error, id: Date.now() }],
      };
    case DELETE_WEEK_ERROR:
      const { weekId } = action.payload;
      return {
        ...state,
        errors: [...state.errors.filter((e) => e.id !== weekId)],
      };
    case DELETE_DAY_ERROR:
      const { id } = action.payload;
      return {
        ...state,
        errors: [...state.errors.filter((e) => e.id !== id)],
      };

    default:
      return state;
  }
};
