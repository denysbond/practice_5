import React from "react";
import PropTypes from "prop-types";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          header: "Lorem ipsum dolor",
          content:
            "ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          id: 1,
          isOpen: false,
        },
        {
          header: "Sed ut perspiciatis",
          content:
            " omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam",
          id: 2,
          isOpen: false,
        },
        {
          header: "Ut enim ad minima",
          content:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
          id: 3,
          isOpen: false,
        },
      ],
    };
  }

  changeContent(id) {
    const newTab = this.state.tabs.map((item) => {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
      }
      return item;
    });

    this.setState({
      tabs: newTab,
    });
  }

  render() {
    const { tabs } = this.state;

    return tabs.map((item) => (
      <TabItem
        key={item.id}
        item={item}
        changeContent={this.changeContent.bind(this)}
      />
    ));
  }
}

const TabItem = ({ item, changeContent }) => {
  return (
    <div className="card">
      <div
        className={`card-header ${item.isOpen && "active"}`}
        onClick={() => changeContent(item.id)}
      >
        {item.header}
      </div>
      {item.isOpen && (
        <div className="card-body">
          <p>{item.content}</p>
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
