import Tab from "./Tab/tab";
import { Component } from "react";
import { items } from "./tabs/tabs";

class App extends Component {
  state = {
    content: "Content of tab 0",
    color: "black",
    left: "15px",
  };

  handleClick(str, left) {
    this.setState({ content: str, left: left, color: "blue" });
  }
  render() {
    return (
      <div className="container">
        <div className="items">
          {items.map((item, idx) => (
            <span
              key={idx}
              onClick={() => this.handleClick(item.content, item.left)}
            >
              {console.log(123)}
              {/* {item.title} */}
              <Tab item={item} />
            </span>
          ))}
          <div style={{ left: this.state.left }} className="border"></div>
        </div>
        <h1 className="content">{this.state.content}</h1>
      </div>
    );
  }
}

export default App;
