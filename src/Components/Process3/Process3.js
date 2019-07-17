import React from 'react';
import './Process3.scss'

class Process3 extends React.Component {
  render() {
    return (
      <div className="col-lg-9 item-col">
        <div className="row">
          <div className="col-lg-9 item-content">
            <ol style={{paddingTop: '2px'}} className="preparation-list">
              <li id="top-list-process"> Support Vector Machine</li>
              <li id="top-list-process"> Decision Trees</li>
              <li id="top-list-process"> Multilayer Perceptron</li>
              <li id="top-list-process"> Recurrent Neural Networks</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Process3;
