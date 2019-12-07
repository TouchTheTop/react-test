import React, { Component } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "./Confirm.css";

export default class ReactConfirmAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      buttons: [
        {
          label: "Cancel",
          onClick: () => this.props.onChange(0)
        },
        {
          label: "Confirm",
          className: "success-button",
          onClick: () => this.props.onChange(1)
        }
      ]
    };
  }

  handleClickButton = button => {
    if (button.onClick) button.onClick();
  };

  render() {
    const { title, buttons } = this.state;

    return (
      <div className="react-confirm-alert-overlay">
        <div className="react-confirm-alert" id="react-confirm-alert">
          <div className="react-confirm-alert-body">
            {title && <h2>{title}</h2>}
            <div className="react-confirm-alert-button-group">
              {buttons.map((button, i) => (
                <button
                  className={button.className ? button.className : ""}
                  key={i}
                  onClick={() => this.handleClickButton(button)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function removeElement() {
  const target = document.getElementById("react-confirm-alert");
  unmountComponentAtNode(target);
  target.parentNode.removeChild(target);
}

function createElementReconfirm(resove, reject, properties) {
  let target = document.getElementById("react-confirm-alert");
  if (target) {
    render(
      <ReactConfirmAlert
        {...properties}
        onChange={e => {
          removeElement(), resove(e);
        }}
      />,
      target
    );
  } else {
    document.body.children[0].classList.add("react-confirm-alert-blur");
    target = document.createElement("div");
    target.id = "react-confirm-alert";
    document.body.appendChild(target);
    render(
      <ReactConfirmAlert
        {...properties}
        onChange={e => {
          removeElement(), resove(e);
        }}
      />,
      target
    );
  }
}

export function Confirm(title) {
  return new Promise((resove, reject) => {
    let properties = {
      title
    };
    createElementReconfirm(resove, reject, properties);
  });
}
