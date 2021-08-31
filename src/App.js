import React from "react";
import "./index.css";
~~class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "black",
    };
  }
  render() {
    const blackBtn = <button>black-button</button>;
    const whiteBtn = <button>white-button</button>;
    // if else
    // if (this.state.theme === "black") {
    //   return blackBtn;
    // } else {
    //   return whiteBtn;
    // }
    //三元表达式
    // return <div>{this.state.theme === "black" ? blackBtn : whiteBtn}</div>;
  }
};

export default App;
