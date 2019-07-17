import React from 'react';
import './Choice1.scss'

class Choice1 extends React.Component {
  render() {
    return (
        <div className="col-lg-9 item-col">
          <div className="row">
            <div className="col-lg-9 item-content">
              <ol style={{paddingTop: '2px'}} className="preparation-list">
                <li id="top-list-process"> Data Types </li>
                  <ol style={{paddingLeft: '10px'}}>
                    <li id="top-list-process" style={{display: `${this.props.s1  === false && this.props.s2 === false ? 'none' : ''}`}}> Structured Data </li>
                      <ol style={{paddingLeft: '10px'}}>
                        <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s1  === false ? 'none' : ''}`}}> Drug Information Data </li>
                        <li style={{listStyle: 'circle', fontSize: '14px', display: `${this.props.s2  === false ? 'none' : ''}`}}> Real drug-drug-information occurrence data</li>
                      </ol>
                  </ol>
                  <ol style={{paddingLeft: '10px'}}>
                    <li id="top-list-process" style={{display: `${this.props.s3  === false ? 'none' : ''}`}}> Image Data </li>
                      <ol style={{paddingLeft: '10px'}}>
                        <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s3  === false ? 'none' : ''}`}}> Molecular formula data </li>
                      </ol>
                  </ol>
                  <ol style={{paddingLeft: '10px'}}>
                    <li id="top-list-process" style={{display: `${this.props.s4  === false ? 'none' : ''}`}}> Text Data </li>
                      <ol style={{paddingLeft: '10px'}}>
                        <li style={{listStyle: 'circle', fontSize: '15px', display: `${this.props.s4  === false ? 'none' : ''}`}}> SMILES </li>
                      </ol>
                  </ol>
              </ol>
            </div>
          </div>
        </div>
    )
  }
}

export default Choice1;
