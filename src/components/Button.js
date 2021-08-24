import React from "react";
class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="btn btn-primary p-2 mx-2">
        {this.props.children}
      </button>
    );
  }
}
export default Button;
