import { Component } from "react";
import ProTypes from "prop-types";
import "./tab.css";

class Tab extends Component {
  render() {
    const { item } = this.props;
    return <>{item.title}</>;
  }
}

Tab.ProTypes = {
  item: ProTypes.string.isRequired,
};

export default Tab;
