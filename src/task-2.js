import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      operandFirst: "",
      operandSecond: "",
    };
  }

  add() {
    this.setState({
      result:
        Number(this.state.operandFirst) + Number(this.state.operandSecond),
    });
  }

  subtract() {
    this.setState({
      result:
        Number(this.state.operandFirst) - Number(this.state.operandSecond),
    });
  }

  multiply() {
    this.setState({
      result:
        Number(this.state.operandFirst) * Number(this.state.operandSecond),
    });
  }

  divide() {
    this.setState({
      result:
        Number(this.state.operandFirst) / Number(this.state.operandSecond),
    });
  }

  clear() {
    this.setState({
      result: 0,
      operandFirst: 0,
      operandSecond: 0,
    });
  }

  firstOperandChange(event) {
    this.setState({
      operandFirst: event.target.value,
    });
  }

  secondOperandChange(event) {
    this.setState({
      operandSecond: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <Input
          operandFirst={this.state.operandFirst}
          operandSecond={this.state.operandSecond}
          firstOperandChange={this.firstOperandChange.bind(this)}
          secondOperandChange={this.secondOperandChange.bind(this)}
          clear={this.clear.bind(this)}
        />
        <Buttons
          add={this.add.bind(this)}
          subtract={this.subtract.bind(this)}
          multiply={this.multiply.bind(this)}
          divide={this.divide.bind(this)}
        />
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Result"
              value={this.state.result}
            />
          </div>
        </div>
      </div>
    );
  }
}

const Buttons = (props) => {
  return (
    <div className="row my-3">
      <div className="col-2">
        <button className="btn btn-block btn-secondary" onClick={props.add}>
          Add
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-block btn-secondary"
          onClick={props.subtract}
        >
          Subtract
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-block btn-secondary"
          onClick={props.multiply}
        >
          Multiply
        </button>
      </div>
      <div className="col-2">
        <button className="btn btn-block btn-secondary" onClick={props.divide}>
          Divide
        </button>
      </div>
    </div>
  );
};

const Input = ({
  operandFirst,
  operandSecond,
  firstOperandChange,
  secondOperandChange,
  clear,
}) => {
  return (
    <div className="row">
      <div className="col-3">
        <input
          type="number"
          className="form-control"
          placeholder="0"
          value={operandFirst}
          onChange={firstOperandChange}
        />
      </div>
      <div className="col-3">
        <input
          type="number"
          className="form-control"
          placeholder="0"
          value={operandSecond}
          onChange={secondOperandChange}
        />
      </div>
      <div className="col-2">
        <button className="btn btn-block btn-danger" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
