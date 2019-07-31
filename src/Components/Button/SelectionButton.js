import React from 'react';
import './SelectionButton.scss'

class SelectionButton extends React.Component {
  render() {
    return (
      <div className="col-md-4 selection_option form-check" id={`${this.props.id === 1 || this.props.id === 2||this.props.id === 3 ||this.props.id === 4 ? "col-customizing" : "" }`}>
        <label style={{width: "100%"}}>
          <div className="card-box tilebox-one border rounded p-3 mb-3">
            <div className="float-right">
              <input type="radio" name={this.props.name} id={this.props.id} onClick={this.props.action}/>
            </div>
            <div className="muted font-weight-bold">
              {this.props.service}
            </div>
            <small>
              <span className="badge badge-dark text-white">{this.props.addition}</span>
              <span className="badge badge-primary text-white">{this.props.period}</span>
            </small>
          </div>
        </label>
      </div>
    )
  }
}

export default SelectionButton;
