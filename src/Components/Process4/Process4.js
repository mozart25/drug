import React from 'react';
import './Process4.scss'

class Process4 extends React.Component {
  render() {
    return (
      <div className="col-lg-9 item-col">
        <div className="row">
          <div className="col-lg-9 item-content">
            <ol style={{paddingTop: '2px'}} className="preparation-list">
              <li id="top-list"> Ensemble </li>
                <ol style={{paddingLeft: '18px'}}>
                  <li style={{listStyle: 'circle', fontSize: '14px'}}> Horizontal epochs ensemble </li>
                  <li style={{listStyle: 'circle', fontSize: '15px'}}> Model averaging ensemble </li>
                </ol>
              <li id="top-list"> Optimization </li>
                <ol style={{paddingLeft: '18px'}}>
                <li style={{listStyle: 'circle', fontSize: '15px'}}> Learning rate </li>
                <li style={{listStyle: 'circle', fontSize: '15px'}}> Batch size </li>
                <li style={{listStyle: 'circle', fontSize: '15px'}}> Momentum </li>
                </ol>
              <li id="top-list"> Dropouts</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Process4;
