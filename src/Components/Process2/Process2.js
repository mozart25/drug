import React from 'react';
import './Process2.scss'

class Process2 extends React.Component {
  render() {
    return (
      <div className="col-lg-9 item-col">
        <div className="row">
          <div className="col-lg-9 item-content">
            <ol style={{paddingTop: '2px'}} className="preparation-list">
              <li id="top-list-process"> Data Processing</li>
                <ol style={{paddingLeft: '18px'}} >
                  <li style={{listStyle: 'circle', fontSize: '15px'}}> Molecule autoencoder </li>
                  <li style={{listStyle: 'circle', fontSize: '15px'}}> Mol2Vec </li>
                </ol>
              <li id="top-list-process"> Class Imbalance </li>
                <ol style={{paddingLeft: '18px'}}>
                <li style={{listStyle: 'circle', fontSize: '15px'}}> SMOTE </li>
                <li style={{listStyle: 'circle', fontSize: '15px'}}> WEMOTE </li>
                </ol>
              <li id="top-list-process"> Dimension Reduction </li>
                <ol style={{paddingLeft: '18px'}}>
                <li style={{listStyle: 'circle', fontSize: '15px'}}> PCA </li>
                <li style={{listStyle: 'circle', fontSize: '15px'}}> ICA</li>
                </ol>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Process2;
