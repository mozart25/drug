import React from 'react';
import './Process3.scss'

class Process3 extends React.Component {
  render() {
    return (
      <div className="col-lg-9 item-col">
        <div className="row">
          <div className="col-lg-9 item-content">
            <ol style={{paddingTop: '2px'}} className="preparation-list">
              <li id="top-list-process" style={{display: `${this.props.s11  === false && this.props.s12 === false ? 'none' : ''}`}}> Machine Learning </li>
                <ol style={{paddingLeft: '18px'}} >
                  <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s11  === false ? 'none' : ''}`}}> Support Vector Machine </li>
                  <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s12  === false ? 'none' : ''}`}}> Decision Trees </li>
                </ol>
              <li id="top-list-process" style={{display: `${this.props.s13  === false && this.props.s14 === false ? 'none' : ''}`}}> Deep Learning</li>
                <ol style={{paddingLeft: '18px'}} >
                  <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s13  === false ? 'none' : ''}`}}> Multilayer Perceptron </li>
                  <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s14  === false ? 'none' : ''}`}}> Recurrent Neural Networks </li>
                </ol>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Process3;
