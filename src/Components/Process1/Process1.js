import React from 'react';
import './Process1.scss'

class Process1 extends React.Component {
  render() {
    return (
        <div className="col-lg-9 item-col">
          <div className="row">
            <div className="col-lg-9 item-content">
              <ol style={{paddingTop: '2px'}} className="preparation-list">
                <li id="top-list-process"> Data Types </li>
                  <ol style={{paddingLeft: '10px'}}>
                    <li id="top-list-process"> Structured Data </li>
                      <ol style={{paddingLeft: '10px'}}>
                        <li style={{listStyle: 'circle', fontSize: '15px'}}> Drug Information Data </li>
                        <li style={{listStyle: 'circle', fontSize: '14px'}}> Real drug-drug-information occurrence data</li>
                      </ol>
                  </ol>
                  <ol style={{paddingLeft: '10px'}}>
                    <li id="top-list-process"> Image Data </li>
                      <ol style={{paddingLeft: '10px'}}>
                        <li style={{listStyle: 'circle', fontSize: '15px'}}> Molecular formula data </li>
                      </ol>
                  </ol>
                  <ol style={{paddingLeft: '10px'}}>
                    <li id="top-list-process"> Text Data </li>
                      <ol style={{paddingLeft: '10px'}}>
                        <li style={{listStyle: 'circle', fontSize: '15px'}}> SMILES </li>
                      </ol>
                  </ol>
              </ol>
            </div>
          </div>
        </div>
    )
  }
}

export default Process1;
