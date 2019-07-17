import React from 'react';
import './Choice2.scss'

class Choice2 extends React.Component {
  render() {
    return (
      <div className="col-lg-9 item-col">
        <div className="row">
          <div className="col-lg-9 item-content">
            <ol style={{paddingTop: '2px'}} className="preparation-list">
              <li id="top-list-process" style={{display: `${this.props.s5  === false && this.props.s6 === false ? 'none' : ''}`}}> Data Processing</li>
                <ol style={{paddingLeft: '18px'}} >
                  <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s5  === false ? 'none' : ''}`}}> Molecule autoencoder </li>
                  <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s6  === false ? 'none' : ''}`}}> Mol2Vec </li>
                </ol>
              <li id="top-list-process" style={{display: `${this.props.s7  === false && this.props.s8 === false ? 'none' : ''}`}}> Class Imbalance </li>
                <ol style={{paddingLeft: '18px'}}>
                <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s7  === false ? 'none' : ''}`}}> SMOTE </li>
                <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s8  === false ? 'none' : ''}`}}> WEMOTE </li>
                </ol>
              <li id="top-list-process" style={{display: `${this.props.s9  === false && this.props.s10 === false ? 'none' : ''}`}}> Dimension Reduction </li>
                <ol style={{paddingLeft: '18px'}}>
                <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s9  === false ? 'none' : ''}`}}> PCA </li>
                <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s10  === false ? 'none' : ''}`}}> ICA</li>
                </ol>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Choice2;
