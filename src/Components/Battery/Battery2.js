import React from 'react';
import './Battery.scss'

class Battery2 extends React.Component {
  render() {
    return (
      <div className="Battery-wrapper">
        <div className={`box1 ${this.props.randValue > 90 ? 'charged_box2' : ''}`}> </div>
        <div className={`box2 ${this.props.randValue > 80 ? 'charged_box2' : ''}`}> </div>
        <div className={`box3 ${this.props.randValue > 70 ? 'charged_box2' : ''}`}> </div>
        <div className={`box4 ${this.props.randValue > 60 ? 'charged_box2' : ''}`}> </div>
        <div className={`box5 ${this.props.randValue > 50 ? 'charged_box2' : ''}`}> </div>
        <div className={`box6 ${this.props.randValue > 40 ? 'charged_box2' : ''}`}> </div>
        <div className={`box7 ${this.props.randValue > 30 ? 'charged_box2' : ''}`}> </div>
        <div className={`box8 ${this.props.randValue > 20 ? 'charged_box2' : ''}`}> </div>
        <div className={`box9 ${this.props.randValue > 10 ? 'charged_box2' : ''}`}> </div>
        <div className={`box10 ${this.props.randValue >= 0 ? 'charged_box2' : ''}`}> </div>
        <div id="battery-gpu-sec"> {this.props.id} </div>
      </div>
    )
  }
}

export default Battery2;
