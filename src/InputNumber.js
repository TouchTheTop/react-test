import React from "react";

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, innerValue: "" };
  }
  handleChange = e => {
    if (!this.isControl) {
      this.setState({
        innerValue: e.target.value
      });
    } else {
      this.state.onChange(e);
    }
  };

  get isControl() {
    return "value" in this.props;
  }

  get value() {
    if (this.isControl) {
      return this.props.value;
    } else {
      return this.state.innerValue;
    }
  }

  render() {
    return (
      <div>
        <p>{this.value}</p>
        <input
          type="text"
          value={this.value}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default InputNumber;
