import React from "react";
import { connect } from "react-redux";
import { deleteWeekError } from "../actions/week-forecast";
import { deleteDayError } from "../actions/day-forecast";

const ErrorLogger = (props) => {
  return (
    <div className="error-message">
      {props.errors.map((e) => {
        console.log(e);
        return (
          <div key={e.id} className="alert alert-danger" role="alert">
            {e.error.message}
            <button onClick={() => props.deleteDayError(e.id)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.errorReducer.errors,
  };
};

export default connect(mapStateToProps, { deleteWeekError, deleteDayError })(
  ErrorLogger
);
