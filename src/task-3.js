import React from "react";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      isSelected: e.target.value,
    });
  }

  headersRender() {
    const headers = this.props.tabs.map((item, index) => {
      let active =
        this.state.isSelected === index
          ? "list-group-item active"
          : "list-group-item ";

      return (
        <li
          className={active}
          key={index}
          value={index}
          onClick={(e) => this.handleClick(e)}
        >
          {this.props.headerTpl({ item: item, index: index + 1 })}
        </li>
      );
    });

    return headers;
  }

  contentRender() {
    const content = this.props.tabs.map((item, index) => {
      let contentClass = this.state.isSelected === index ? "" : "d-none";
      return (
        <div className={contentClass} key={index}>
          {this.props.contentTpl({ item: item, index: index })}
        </div>
      );
    });
    return content;
  }

  render() {
    return (
      <div className="row">
        <ul className="col-3 list-group">{this.headersRender()}</ul>
        <div className="col-9">{this.contentRender()}</div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  headerTpl: (props) => props.item.header,
  contentTpl: (props) => props.item.content,
};
