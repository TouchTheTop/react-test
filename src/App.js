import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputNumber from "./InputNumber";
import { Confirm } from "./Confirm";

// function App() {
//   const [value, setValue] = useState("aaa");
//   return (
//     <div>
//       <InputNumber value={value} onChange={e => {}} />
//       <InputNumber defaultValue={value} onChange={e => {}} />
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = { value: "aaa" };
  }
  async componentDidMount() {
    const res = await Confirm("确认删除？");
    if (res) {
      console.log("是");
    } else {
      console.log("否");
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <InputNumber
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
        ></InputNumber>
        <InputNumber
          defaultValue={this.state.value}
          onChange={e => {
            console.log(e.target.value);
          }}
        ></InputNumber>
      </div>
    );
  }
}

export default App;
