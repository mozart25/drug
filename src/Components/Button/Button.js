import React from 'react';
import './Button.scss'

class Button extends React.Component {
  render() {
    return (
      <div className="button-wrapper">
        <label className="button-container"> 선택
          <input type="checkbox" onClick={this.props.action}/>
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }
}

export default Button;
