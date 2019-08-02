import React from 'react';
import './Choice4.scss'

class Choice4 extends React.Component {
  render() {
    return (
      <div className="col-lg-9 item-col">
        <div className="row">
          <div className="col-lg-9 item-content">
            <ol style={{paddingTop: '2px'}} className="preparation-list">
              <li style={{display: `${this.props.s15  === false && this.props.s16  === false ? 'none' : ''}`}} id="top-list"> Ensemble </li>
                <ol style={{paddingLeft: '18px'}}>
                  <li style={{listStyle: 'circle', fontSize: '14px', display: `${this.props.s15  === false ? 'none' : ''}`}}> Horizontal epochs ensemble </li>
                  <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s16  === false ? 'none' : ''}`}}> Model averaging ensemble </li>
                </ol>
              <li style={{display: `${this.props.s17  === false && this.props.s18  === false && this.props.s19  === false ? 'none' : ''}`}} id="top-list"> Optimization </li>
                <ol style={{paddingLeft: '18px'}}>
                <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s17  === false ? 'none' : ''}`}}> Learning rate </li>
                <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s18  === false ? 'none' : ''}`}}> Batch size </li>
                <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s19  === false ? 'none' : ''}`}}> Momentum </li>
                <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s20  === false ? 'none' : ''}`}}> Droptouts </li>
                </ol>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Choice4;
