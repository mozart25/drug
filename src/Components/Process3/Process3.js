import React from 'react';
import './Process3.scss'

class Process3 extends React.Component {
  render() {
    return (
      <div className="col-lg-9 item-col">
        <div className="row">
          <div className="col-lg-9 item-content">
            <ol style={{paddingTop: '2px'}} className="preparation-list">
              <li id="top-list-process"> Machine Learning </li>
                <ol style={{paddingLeft: '18px'}} >
                  <li style={{listStyle: 'circle', fontSize: '15px'}}> Support Vector Machine </li>
                  <li style={{listStyle: 'circle', fontSize: '15px'}}> Decision Trees </li>
                </ol>
              <li id="top-list-process"> Deep Learning</li>
                <ol style={{paddingLeft: '18px'}} >
                  <li style={{listStyle: 'circle', fontSize: '15px'}}> Multilayer Perceptron </li>
                  <li style={{listStyle: 'circle', fontSize: '15px'}}> Recurrent Neural Networks </li>
                </ol>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Process3;
