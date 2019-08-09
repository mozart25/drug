import React from 'react';
import './Recommendation.scss';
import { FaStar, FaCaretRight, FaStop, FaCircle, FaLongArrowAltLeft, FaLongArrowAltRight, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaAngleDoubleDown, FaCaretDown } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import Button from '../../Components/Button/Button';
import Process1 from '../../Components/Process1/Process1';
import Choice1 from '../../Components/Process1/Choice1';
import Process2 from '../../Components/Process2/Process2';
import Choice2 from '../../Components/Process2/Choice2';
import Process3 from '../../Components/Process3/Process3';
import Choice3 from '../../Components/Process3/Choice3';
import Process4 from '../../Components/Process4/Process4';
import Choice4 from '../../Components/Process4/Choice4';
import FinishButton from '../../Components/Button/FinishButton';

class Recommendation extends React.Component {

  constructor() {
    super();

    this.state = {
      clicked: 0,
      clicked2: 0,
      clicked3: 0,
      clicked4: 0,
      view1: false,
      view2: false,
      view3: false,
      view4: false,
      view5: false,
      view6: false,
      view7: false,
      view8: false,
      view9: false,
      view10: false,
      view11: false,
      view11_sub: false,
      view12: false,
      view13: false,
      view14: false,
      view15: false,
      view16: false,
      view17: false,
      view18: false,
      view19: false,
      view20: false,
      e: '',
      process1: false,
      process1_sub: 0,
      process2: false,
      process2_sub: 0,
      p2_sub: false,
      process3: false,
      process3_sub: 0,
      process4: false,
      checkProcess1: false,
      checkProcess2: false,
      checkProcess3: false,
      processStack: []
    };
  }

  handleClick1 = (e) => {
    this.setState(
      {
        clicked: this.state.clicked + 1,
        view1: !this.state.view1,
        e
      }, () => console.log("after", this.state.view1, e)
    )
    console.log("before", this.state.view1)
  }

  handleClick2 = (e) => {
    this.setState(
      {
        clicked: this.state.clicked + 1,
        view2: !this.state.view2,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2)
  }

  handleClick3 = (e) => {
    this.setState(
      {
        clicked: this.state.clicked + 1,
        view3: !this.state.view3,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2, e)
  }

  handleClick4 = (e) => {
    this.setState(
      {
        clicked: this.state.clicked + 1,
        view4: !this.state.view4,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2, e)
  }

  handleClick5 = (e) => {
    this.setState(
      {
        clicked2: this.state.clicked2 + 1,
        view5: !this.state.view5,
        e
      }, () => console.log("after view5", this.state.view5, "state.process1", this.state.process1, "this.state.clicked2", this.state.clicked2)
    )
    console.log("before view5", this.state.view5, "state.process1", this.state.process1, "this.state.clicked2", this.state.clicked2)
  }

  handleClick6 = (e) => {
    this.setState(
      {
        clicked2: this.state.clicked2 + 1,
        view6: !this.state.view6,
        e
      }, () => console.log("after", this.state.view6, e)
    )
    console.log("before", this.state.view6, e)
  }

  handleClick7 = (e) => {
    this.setState(
      {
        clicked2: this.state.clicked2 + 1,
        view7: !this.state.view7,
        e
      }, () => console.log("after", this.state.view7, e)
    )
    console.log("before", this.state.view7, e)
  }

  handleClick8 = (e) => {
    this.setState(
      {
        clicked2: this.state.clicked2 + 1,
        view8: !this.state.view8,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2, e)
  }

  handleClick9 = (e) => {
    this.setState(
      {
        clicked2: this.state.clicked2 + 1,
        view9: !this.state.view9,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2, e)
  }

  handleClick10 = (e) => {
    this.setState(
      {
        clicked2: this.state.clicked2 + 1,
        view10: !this.state.view10,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2, e)
  }

  handleClick11 = (e) => {
    this.setState(
      {
        clicked3: this.state.clicked3 + 1,
        view11: !this.state.view11,
        view11_sub: !this.state.view11_sub,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2, e)
  }

  handleClick12 = (e) => {
    this.setState(
      {
        clicked3: this.state.clicked3 + 1,
        view12: !this.state.view12,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2, e)
  }

  handleClick13 = (e) => {
    this.setState(
      {
        clicked3: this.state.clicked3 + 1,
        view13: !this.state.view13,
        e
      }, () => console.log("after", this.state.view2, e)
    )
    console.log("before", this.state.view2, e)
  }

  handleClick14 = (e) => {
    this.setState(
      {
        clicked3: this.state.clicked3 + 1,
        view14: !this.state.view14,
        e
      }
    )
  }

  handleClick15 = (e) => {
    this.setState(
      {
        clicked4: this.state.clicked4 + 1,
        view15: !this.state.view15,
        e
      }
    )
  }

  handleClick16 = (e) => {
    this.setState(
      {
        clicked4: this.state.clicked4 + 1,
        view16: !this.state.view16,
        e
      }
    )
  }

  handleClick17 = (e) => {
    this.setState(
      {
        clicked4: this.state.clicked4 + 1,
        view17: !this.state.view17,
        e
      }
    )
  }

  handleClick18 = (e) => {
    this.setState(
      {
        clicked4: this.state.clicked4 + 1,
        view18: !this.state.view18,
        e
      }
    )
  }

  handleClick19 = (e) => {
    this.setState(
      {
        clicked4: this.state.clicked4 + 1,
        view19: !this.state.view19,
        e
      }
    )
  }

  handleClick20 = (e) => {
    this.setState(
      {
        clicked4: this.state.clicked4 + 1,
        view20: !this.state.view20,
        e
      }
    )
  }

  goToProcess = () => {
    document.getElementById("checkbox5").checked = false;
    document.getElementById("checkbox6").checked = false;
    document.getElementById("checkbox7").checked = false;
    document.getElementById("checkbox8").checked = false;
    document.getElementById("checkbox9").checked = false;
    document.getElementById("checkbox10").checked = false;

    if (this.state.clicked > 0) {
    this.setState(
      {
        process1: true,
        process1_sub: 1
    }
  )
  }
}

  goToProcess2 = () => {
    document.getElementById("checkbox11").checked = false;
    document.getElementById("checkbox12").checked = false;
    document.getElementById("checkbox13").checked = false;
    document.getElementById("checkbox14").checked = false;

    if (this.state.clicked2 >0) {
    this.setState(
      {
        process2: true,
        process2_sub: 2,
        p2_sub: true,
    }
  )
    }
  }

  goToProcess3 = () => {
    if (this.state.clicked3 >0) {

    this.setState(
      {
        process3: true,
        process3_sub: 3
    }
  )
    }
  }

  goToProcess4 = () => {

    this.setState(
      {
        process4: true,
    }
  )
  }

  checkProcessLeft = () => {

    if (this.state.process2_sub === 2 && this.state.process3_sub === 3) {
      this.setState(
        {
          process3: false,
          process3_sub: 0
        }
      )
    }

    if (this.state.process2_sub === 2 && this.state.process3_sub !== 3) {
      this.setState(
        {
          process2: false,
          clicked3: 0,
        }
      )
      if (!this.state.view11) {
        this.setState(
          {
            view11: false
          }
        )
      } else if (this.state.view11) {
        this.setState(
          {
            view11: !this.state.view11
          }
        )
      }
      if (!this.state.view12) {
        this.setState(
          {
            view12: false
          }
        )
      } else if (this.state.view12) {
        this.setState(
          {
            view12: !this.state.view12
          }
        )
      }
      if (!this.state.view13) {
        this.setState(
          {
            view13: false
          }
        )
      } else if (this.state.view13) {
        this.setState(
          {
            view13: !this.state.view13
          }
        )
      }
      if (!this.state.view14) {
        this.setState(
          {
            view14: false
          }
        )
      } else if (this.state.view14) {
        this.setState(
          {
            view14: !this.state.view14
          }
        )
      }
    }

    if (this.state.process1_sub === 1 && this.state.process2_sub === 2 && this.state.process3_sub !== 3) {
      this.setState(
        {
          process2: false,
          process2_sub: 0
        }
      )
    }

    if (this.state.process1_sub === 1 && this.state.process2_sub !== 2) {
      this.setState(
        {
          process1: false,
          clicked2: 0,
        }
      )
      if (!this.state.view5) {
        this.setState(
          {
            view5: false
          }
        )
      } else if (this.state.view5) {
        this.setState(
          {
            view5: !this.state.view5
          }
        )
      }
      if (!this.state.view6) {
        this.setState(
          {
            view6: false
          }
        )
      } else if (this.state.view6) {
        this.setState(
          {
            view6: !this.state.view6
          }
        )
      }
      if (!this.state.view7) {
        this.setState(
          {
            view7: false
          }
        )
      } else if (this.state.view7) {
        this.setState(
          {
            view7: !this.state.view7
          }
        )
      }
      if (!this.state.view8) {
        this.setState(
          {
            view8: false
          }
        )
      } else if (this.state.view8) {
        this.setState(
          {
            view8: !this.state.view8
          }
        )
      }
      if (!this.state.view9) {
        this.setState(
          {
            view9: false
          }
        )
      } else if (this.state.view9) {
        this.setState(
          {
            view9: !this.state.view9
          }
        )
      }
      if (!this.state.view10) {
        this.setState(
          {
            view10: false
          }
        )
      } else if (this.state.view10) {
        this.setState(
          {
            view10: !this.state.view10
          }
        )
      }
    }
  }

  render() {

    return (
      <div className="recommend-container">
        <Helmet>
          <title>Drug AI algorithm recommendation solution-BioAI</title>
        </Helmet>
          <div className="container">
            <div className="container content content-buffer">
              <div className="title">
                <div className="row">
                  <div className="col-lg-6 process-col-temp">
                    <h1 className="home-page-title">Drug AI Algorithm Development Solution</h1>
                  </div>
                  <div className="process-direction-arrow">
                    <button type="button" className="btn btn-danger" onClick={this.checkProcessLeft}>Undo</button>
                  </div>
                </div>
              </div>
            <div className="process-wrapper">
              <div className="infinite-container text-center">
              <div id="tooltip">
                <span className="tooltiptext"> Click here for more info →</span>
                <a href="#position_1">
                  <div className="row infinite-item item">
                      <div className="item-header" style={{cursor:"pointer"}} ><p>Data Preparation</p></div>
                        { this.state.clicked > 0 ?
                          <Choice1
                          s1={this.state.view1}
                          s2={this.state.view2}
                          s3={this.state.view3}
                          s4={this.state.view4}
                          />
                          : <Process1 size={30}/>
                        }
                      </div>
                </a>
                </div>
                <FaCaretDown className={`${ this.state.process1 || this.state.process2 || this.state.process3 ? "process-displaying" : "infinite-container text-center"}`} size={40} style={{color: "#9370da"}}/>
              </div>
              <div className="for2ndDelete">
                <FaCaretRight style={{color: '#DCDCDC', height: '370px' }} />
              </div>
              <div className="infinite-container text-center">
              <div id="tooltip">
                <span className="tooltiptext"> Click here for more info →</span>
              <a href="#position_2">
                <div className="row infinite-item item">
                <div className="item-header" id={`${this.state.process1 ? "data-preprocessing" : "pre-default"}`} style={{cursor:"pointer"}} ><p>Data Preprocessing</p></div>

                  {this.state.process1 === false || this.state.clicked2 > 0 ?
                    <Choice2
                    s5={this.state.view5}
                    s6={this.state.view6}
                    s7={this.state.view7}
                    s8={this.state.view8}
                    s9={this.state.view9}
                    s10={this.state.view10}
                    /> :  <Process2 />}

                </div>
                </a>
                </div>
                <FaCaretDown  className={`${  this.state.process1 === false || this.state.process2 || this.state.process3 ? "process-displaying" : "infinite-container text-center"}`} size={40} style={{color:"#9400d3"}} />
              </div>
              <div className="caretDelete">
                <FaCaretRight style={{color: '#DCDCDC', height: '370px' }} />
              </div>
              <div className="infinite-container text-center">
              <div id="tooltip">
                <span className="tooltiptext"> Click here for more info →</span>
              <a href="#position_3">
                <div className="row infinite-item item">
                <div className="item-header" id={`${ this.state.process2 ? "modeling" : "pre-default"}`} style={{cursor:"pointer"}} ><p>Modeling</p></div>
                  { this.state.process2 === false || this.state.clicked3 > 0 ?
                    <Choice3
                    s11={this.state.view11}
                    s12={this.state.view12}
                    s13={this.state.view13}
                    s14={this.state.view14}
                    />
                    :
                    <Process3
                    s11_sub={this.state.view11_sub}
                    />
                  }
                </div>
                </a>
                </div>
              <FaCaretDown className={`${  this.state.process1 === false || this.state.process2 === false || this.state.process3 ? "process-displaying" : "infinite-container text-center"}`} size={40} style={{color:"#8b008b"}}/>
              </div>
              <div className="for2ndDelete">
                <FaCaretRight style={{color: '#DCDCDC', height: '370px' }} />
              </div>
              <div className="infinite-container text-center">
              <div id="tooltip">
                <span className="tooltiptext"> Click here for more info →</span>
              <a href="#position_4">
                <div className="row infinite-item item">
                <div className="item-header" id={`${this.state.process3 ? "model-modification" : "pre-default"}`} style={{cursor:"pointer"}} ><p>Model Modification</p></div>
                  { this.state.process3 === false || this.state.clicked4 > 0 ?
                    <Choice4
                    s15={this.state.view15}
                    s16={this.state.view16}
                    s17={this.state.view17}
                    s18={this.state.view18}
                    s19={this.state.view19}
                    s20={this.state.view20}
                    />
                    : <Process4 />
                  }
                </div>
                </a>
              </div>
              <FaCaretDown className={`${  this.state.process1 === false || this.state.process2 === false || this.state.process3 === false || this.state.process4 ? "process-displaying" : "infinite-container text-center"}`} size={40} style={{color:"#4b0082"}}/>
            </div>
            </div>
              <div className={`${this.state.process4 === false && this.state.process1 ? "process-displaying" : "infinite-container text-center"}`} id="position_1">
                <div className="row infinite-item item">
                  <div className="item-header" id="data-preparation"><p>Data Preparation</p></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list" style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}> <FaStop style={{marginRight:"3px"}}/>  Data Source </li>
                            <ol className="top-list-ol" style={{paddingLeft: '18px'}}>
                              <li style={{listStyle: 'none'}}><a href="https://www.drugbank.ca/releases/latest"><p id="badge-link"><span className="badge badge-primary badge-additional" style={{width: "100%"}}>DrugBank</span></p></a></li>
                              <li style={{listStyle: 'none'}}><a href="https://pubchem.ncbi.nlm.nih.gov/"><p id="badge-link"><span className="badge badge-primary badge-additional" style={{width: "100%"}}>PubChem</span></p></a></li>
                              <li style={{listStyle: 'none'}}><a href="https://www.pharmgkb.org/downloads"><p id="badge-link"><span className="badge badge-primary badge-additional" style={{width: "100%"}}>PharmGKB</span></p></a></li>
                              <li style={{listStyle: 'none'}}><a href="https://www.genome.jp/kegg/"><p id="badge-link"><span className="badge badge-primary badge-additional" style={{width: "100%"}}>KEGG</span></p></a></li>
                              <li style={{listStyle: 'none'}}><a href="https://clinicaltrials.gov/ct2/resources/download"><p id="badge-link"><span id="badge-media" className="badge badge-primary badge-additional" style={{width: "100%"}}>ClinicalTrials.gov</span></p></a></li>
                              <li style={{listStyle: 'none'}}><a href="http://sideeffects.embl.de/"><p id="badge-link"><span className="badge badge-primary badge-additional" style={{width: "100%"}}>SIDER</span></p></a></li>
                              <li style={{listStyle: 'none'}}><a href="https://bioportal.bioontology.org/ontologies/DIKB"><p id="badge-link"><span className="badge badge-primary badge-additional" style={{width: "100%"}}>DIKB</span></p></a></li>
                              <li style={{listStyle: 'none'}}><a href="http://dgv.tcag.ca/dgv/app/home"><p id="badge-link"><span className="badge badge-primary badge-additional" style={{width: "100%"}}>DGV</span></p></a></li>
                            </ol>
                          <li id="top-list" style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}> <FaStop style={{marginRight:"3px"}}/>  Data Types </li>
                            <ol style={{paddingLeft: '18px'}}>
                              <li style={{listStyle: "none", marginLeft: "-10px"}}> <FaCircle style={{marginLeft: "-5px"}}/> Structured Data </li>
                                <ol>
                                  <li id="delete-circle" style={{listStyle: 'circle'}}> <div className="round"><input type="checkbox" id="checkbox1" onClick={this.handleClick1}/><label for="checkbox1"></label></div> Drug Information Data <FaStar color={'#ffd700'}/></li>
                                  <li id="delete-circle" style={{listStyle: 'circle'}}> <div className="round"><input type="checkbox" id="checkbox2" onClick={this.handleClick2}/> <label for="checkbox2"></label></div> Drug-Drug Interaction Real World Data </li>
                                </ol>
                            </ol>
                            <ol style={{paddingLeft: '18px'}}>
                              <li style={{listStyle: "none", marginLeft: "-10px"}}> <FaCircle style={{marginLeft: "-5px"}}/> Image Data </li>
                                <ol>
                                  <li id="delete-circle" style={{listStyle: 'circle'}}> <div className="round"><input type="checkbox" id="checkbox3" onClick={this.handleClick3}/> <label for="checkbox3"></label></div> Molecular formula data <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> </li>
                                </ol>
                            </ol>
                            <ol style={{paddingLeft: '18px'}}>
                              <li style={{listStyle: "none", marginLeft: "-10px"}}> <FaCircle style={{marginLeft: "-5px"}}/> Text Data </li>
                                <ol>
                                  <li id="delete-circle" style={{listStyle: 'circle'}}> <div className="round"><input type="checkbox" id="checkbox4" onClick={this.handleClick4}/> <label for="checkbox4"></label></div> SMILES <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> </li>
                                </ol>
                            </ol>
                            <a href ="#" className="finish-btn-pos" onClick={this.goToProcess}>
                              <FinishButton />
                            </a>
                        </ol>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${this.state.process1 === false || (this.state.process4 === false && this.state.process2) ? "process-displaying" : "infinite-container text-center"}`} id="position_2">
                <div className="row infinite-item item">
                  <div className="item-header" id="data-preprocessing"><p>Data Preprocessing</p></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list" style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}> <FaStop style={{marginRight:"3px"}}/>  Data Processing </li>
                            <ol>
                              <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox5" onClick={this.handleClick5}/> <label for="checkbox5"></label></div> Molecule autoencoder
                                <div className="contents-wrapper">

                                  <div className="border b-active b-thick b-radius p-sm">
                                  <div className="img-contents-wrapper">
                                    <img src={require(`./molecular.png`)} style={{minHeight: "153px"}} alt=""/>
                                  </div>
                                    <table>
                                      <tbody>
                                        <tr className="contents-table">
                                          <p>{`1. Importing and normalizing the SMILES string data`} </p>
                                          <p>{`2. Translating normalized strings into one hot vectors`} </p>
                                          <p>{`3. Building the deep NN model`} </p>
                                          <p>{`4. Compiling the model and fitting the data`} </p>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div className="entity">
                                      <a href="https://towardsdatascience.com/building-a-carbon-molecule-autoencoder-21973e5f88b6" className="badge badge-light" id="icon-change">
                                        <img src={require(`./blog.png`)} style={{width:"52px"}} alt=""/>
                                      </a>
                                      <br />
                                      <a href="https://github.com/flawnson/Carbon_Molecule_Autoencoder-master" className="badge badge-dark" id="icon-change">
                                        <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                              </li>
                              <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox6" onClick={this.handleClick6}/> <label for="checkbox6"></label></div> Mol2Vec
                                  <div className="contents-wrapper">
                                    <div className="border b-active b-thick b-radius p-sm">
                                    <div className="img-contents-wrapper">
                                      <img src={require(`./mol2vec_2.png`)} style={{}} alt=""/>
                                    </div>
                                      <table>
                                        <tbody>
                                          <tr className="contents-table">
                                            <p><span>Word2vec</span>{` models where vectors of closely
                                                related words are in close proximity in the vector space, Mol2vec
                                                learns vector representations of molecular substructures that are
                                                pointing in similar directions for chemically related substructures.`}</p>
                                          </tr>
                                        </tbody>
                                      </table>

                                      <div className="entity">
                                        <a href="https://s3-eu-west-1.amazonaws.com/itempdf74155353254prod/5513581/Mol2vec__Unsupervised_Machine_Learning_Approach_with_Chemical_Intuition_v1.pdf" className="badge badge-light" id="icon-change">
                                          <img src={require(`./paper.png`)} style={{width:"52px"}} alt=""/>
                                        </a>
                                        <br />
                                        <a href="https://github.com/samoturk/mol2vec" className="badge badge-dark" id="icon-change">
                                          <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                        </a>
                                        <br />
                                      </div>

                                    </div>
                                  </div>

                              </li>
                            </ol>
                          <li id="top-list" style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}> <FaStop style={{marginRight:"3px"}}/>  Class Imbalance </li>
                            <ol>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox7" onClick={this.handleClick7}/> <label for="checkbox7"></label></div> SMOTE: Synthetic Minority Over-sampling Technique
                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                <div className="img-contents-wrapper">
                                  <img src={require(`./smote.png`)} style={{}} alt=""/>
                                </div>
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p>{`This paper shows that a combination of our method of over-sampling the minority
                                          (abnormal) class and under-sampling the majority (normal) class can achieve better
                                          classifier performance (in ROC space) than only under-sampling the majority class.
                                          Our method of `} <span>over-sampling the minority class involves creating synthetic minority
                                          class examples. </span> </p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://arxiv.org/pdf/1106.1813" className="badge badge-light" id="icon-change">
                                      <img src={require(`./blog.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                    <br />
                                    <a href="https://github.com/scikit-learn-contrib/imbalanced-learn" className="badge badge-dark" id="icon-change">
                                      <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                    <br />
                                  </div>
                                </div>
                              </div>
                            </li>
                            </ol>

                            <ol>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox8" onClick={this.handleClick8}/> <label for="checkbox8"></label></div> WEMOTE: Word Embedding based Minority Oversampling
                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                <div className="img-contents-wrapper">
                                  <img src={require(`./wemote.png`)} style={{}} alt=""/>
                                </div>
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p>{`This paper presents a `}<span>word embedding based oversampling method.</span>
                                            {`Firstly, a large-scale text corpus is used to train a continuous
                                            skip-gram model in order to form word embedding. A feature selection
                                            and linear combination algorithm is developed to construct text
                                            representation vector from word embedding.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://sentic.net/wisdom2014chen.pdf" className="badge badge-light" id="icon-change">
                                      <img src={require(`./paper.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            </ol>


                          <li id="top-list" style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}> <FaStop style={{marginRight:"3px"}}/>  Dimension Reduction </li>
                            <ol>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox9" onClick={this.handleClick9}/> <label for="checkbox9"></label></div> PCA
                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                <div className="img-contents-wrapper">
                                  <img src={require(`./pca.png`)} style={{}} alt=""/>
                                </div>
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p><span>Principal component analysis (PCA)</span>{` is a statistical procedure
                                          that uses an orthogonal transformation to convert a set of observations
                                          of possibly correlated variables (entities each of which takes on various
                                             numerical values) into a set of values of linearly uncorrelated variables
                                             called principal components.`}
                                         </p>
                                          <a  href="https://en.wikipedia.org/wiki/Principal_component_analysis">
                                            <p className="wiki">From Wikipedia</p>
                                          </a>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://link.springer.com/content/pdf/10.1007/978-3-642-04898-2_455.pdf" className="badge badge-light" id="icon-change">
                                      <img src={require(`./book.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                    <br />
                                    <a href="https://github.com/scikit-learn/scikit-learn/blob/master/sklearn/decomposition/pca.py" className="badge badge-dark" id="icon-change">
                                      <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                    <br />
                                  </div>
                                </div>
                              </div>

                            </li>

                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox10" onClick={this.handleClick10}/> <label for="checkbox10"></label></div> ICA

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p><span>Independent component analysis (ICA)</span>{` attempts to decompose a multivariate
                                            signal into independent non-Gaussian signals. As an example, sound is
                                            usually a signal that is composed of the numerical addition, at each time t,
                                            of signals from several sources. The question then is whether it is possible
                                            to separate these contributing sources from the observed total signal.`}</p>
                                        <a  href="https://en.wikipedia.org/wiki/Independent_component_analysis">
                                          <p className="wiki">From Wikipedia</p>
                                        </a>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="http://mlsp.cs.cmu.edu/courses/fall2012/lectures/ICA_Hyvarinen.pdf" className="badge badge-light" id="icon-change">
                                      <img src={require(`./paper.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                    <br />
                                    <a href="https://scikit-learn.org/stable/auto_examples/decomposition/plot_ica_blind_source_separation.html" className="badge badge-dark" id="icon-change">
                                      <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                  </div>
                                </div>
                              </div>

                            </li>
                            </ol>
                            <a href ="#" className="finish-btn-pos2" onClick={this.goToProcess2}>
                                <FinishButton />
                            </a>
                        </ol>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${this.state.process1 === false || this.state.process2 === false || (this.state.process4 === false && this.state.process3) ? "process-displaying" : "infinite-container text-center"}`} id="position_3">
                <div className="row infinite-item item">
                  <div className="item-header" id="modeling"><p>Modeling</p></div>
                  <div className="col-lg-3 item-image-col"></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <ol style={{paddingTop: '2px'}} className="preparation-list2">
                          <li id="top-list" style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}> <FaStop style={{marginRight:"3px"}}/>  Machine Learning </li>
                          <li id="top-list" style={{listStyle: "none"}}><div className="round"><input type="checkbox" id="checkbox11" onClick={this.handleClick11}/> <label id="rec" for="checkbox11"></label></div> Support Vector Machine

                            <div className="contents-wrapper">

                              <div className="border b-active b-thick b-radius p-sm">
                              <div className="img-contents-wrapper">
                                <img src={require(`./svm.png`)} style={{}} alt=""/>
                              </div>
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p><span>Support-vector machines</span>{` are supervised learning
                                        models with associated learning algorithms that analyze data used for
                                        classification and regression analysis. Given a set of training examples,
                                        each marked as belonging to one or the other of two categories, an SVM training
                                        algorithm builds a model that assigns new examples to one category or the other,
                                        making it a non-probabilistic binary linear classifier.`}</p>
                                      <a  href="https://en.wikipedia.org/wiki/Support-vector_machine">
                                        <p className="wiki">From Wikipedia</p>
                                      </a>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="https://link.springer.com/content/pdf/10.1007%2FBF00994018.pdf" className="badge badge-light" id="icon-change">
                                    <img src={require(`./paper.png`)} style={{width:"52px"}} alt=""/>
                                  </a>
                                  <br />
                                  <a href="https://scikit-learn.org/stable/modules/svm.html" className="badge badge-dark" id="icon-change">
                                    <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li id="top-list" style={{listStyle: "none"}}><div className="round"><input type="checkbox" id="checkbox12" onClick={this.handleClick12}/> <label id="rec" for="checkbox12"></label></div> Decision Trees

                            <div className="contents-wrapper">

                              <div className="border b-active b-thick b-radius p-sm">
                              <div className="img-contents-wrapper">
                                <img src={require(`./decision.png`)} style={{}} alt=""/>
                              </div>
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p>{`A `}<span>decision tree</span>{` is a decision support tool that uses a tree-like
                                        model of decisions and their possible consequences, including chance
                                        event outcomes, resource costs, and utility. It is one way to display
                                        an algorithm that only contains conditional control statements.`}</p>
                                      <a  href="https://en.wikipedia.org/wiki/Decision_tree">
                                        <p className="wiki">From Wikipedia</p>
                                      </a>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="https://link.springer.com/content/pdf/10.1007/BF00116251.pdf" className="badge badge-light" id="icon-change">
                                    <img src={require(`./paper.png`)} style={{width:"52px"}} alt=""/>
                                  </a>
                                  <br />
                                  <a href="https://scikit-learn.org/stable/modules/tree.html" className="badge badge-dark" id="icon-change">
                                    <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li id="top-list" style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}> <FaStop style={{marginRight:"3px"}}/>  Deep Learning </li>
                          <li id="top-list" style={{listStyle: "none"}}><div className="round"><input type="checkbox" id="checkbox13" onClick={this.handleClick13}/> <label id="rec" for="checkbox13"></label></div> Multilayer Perceptron <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                            <div className="contents-wrapper">

                              <div className="border b-active b-thick b-radius p-sm">
                              <div className="img-contents-wrapper">
                                <img src={require(`./multilayer.png`)} style={{minHeight: "136px"}} alt=""/>
                              </div>
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p>{`A `}<span>multilayer perceptron (MLP)</span>{` is a class of feedforward artificial
                                          neural network. A MLP consists of at least three layers of nodes:
                                          an input layer, a hidden layer and an output layer. Except for the
                                          input nodes, each node is a neuron that uses a nonlinear activation
                                          function. MLP utilizes a supervised learning technique called backpropagate
                                          on for training.`}</p>
                                      <a  href="https://en.wikipedia.org/wiki/Multilayer_perceptron">
                                        <p className="wiki">From Wikipedia</p>
                                      </a>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="http://ml.informatik.uni-freiburg.de/former/_media/teaching/ss10/05_mlps.printer.pdf" className="badge badge-light" id="icon-change">
                                    <img src={require(`./ppt.png`)} style={{width:"52px"}} alt=""/>
                                  </a>
                                  <br />
                                  <a href="https://scikit-learn.org/stable/modules/neural_networks_supervised.html" className="badge badge-dark" id="icon-change">
                                    <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                  </a>
                                </div>
                              </div>
                            </div>

                          </li>
                          <li id="top-list" style={{listStyle: "none"}}><div className="round"><input type="checkbox" id="checkbox14" onClick={this.handleClick14}/> <label id="rec" for="checkbox14"></label></div> Recurrent Neural Networks <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                              <div className="img-contents-wrapper">
                                <img src={require(`./rnn.png`)} style={{}} alt=""/>
                              </div>
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p>{`A `}<span>recurrent neural network (RNN)</span>{` is a class of artificial neural
                                        networks where connections between nodes form a directed graph along
                                        a temporal sequence. This allows it to exhibit temporal dynamic behavior.
                                        Unlike feedforward neural networks, RNNs can use their internal state
                                        (memory) to process sequences of inputs.`}</p>
                                      <a  href="https://en.wikipedia.org/wiki/Recurrent_neural_network">
                                        <p className="wiki">From Wikipedia</p>
                                      </a>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="https://www.isca-speech.org/archive/archive_papers/interspeech_2010/i10_1045.pdf" className="badge badge-light" id="icon-change">
                                    <img src={require(`./paper.png`)} style={{width:"52px"}} alt=""/>
                                  </a>
                                  <br />
                                  <a href="https://keras.io/layers/recurrent/" className="badge badge-dark" id="icon-change">
                                    <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                  </a>
                                </div>
                              </div>
                            </div>

                          </li>
                          <a href ="#" className="finish-btn-pos3" onClick={this.goToProcess3}>
                              <FinishButton />
                          </a>
                        </ol>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${this.state.process1 === false || this.state.process2 === false || this.state.process3 === false ? "process-displaying" : "infinite-container text-center"}`} id="position_4">
                <div className="row infinite-item item">
                  <div className="item-header" id="model-modification"><p>Model modification</p></div>
                  <div className="col-lg-3 item-image-col"></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}> <FaStop style={{marginRight:"3px"}}/>  Ensemble </li>
                            <ol>
                              <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox15" onClick={this.handleClick15}/> <label id="rec" for="checkbox15"></label></div>  Horizontal epochs ensemble <FaStar color={'#ffd700'} />

                                <div className="contents-wrapper">
                                  <div className="border b-active b-thick b-radius p-sm">
                                    <table>
                                      <tbody>
                                        <tr className="contents-table">
                                          <p><span>Horizontal Voting Vertical Voting and Horizontal Stacked
                                              Ensemble</span>{` methods to improve the classification performance of
                                              deep neural networks.`}</p>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div className="entity">
                                      <a href="http://deeplearning.net/wp-content/uploads/2013/03/Horizontal-and-Vertical-Ensemble-with-Deep-Representation-for-Classification.pdf" className="badge badge-light" id="icon-change">
                                        <img src={require(`./paper.png`)} style={{width:"52px"}} alt=""/>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox16" onClick={this.handleClick16}/> <label id="rec" for="checkbox16"></label></div> Model averaging ensemble

                                <div className="contents-wrapper">
                                  <div className="border b-active b-thick b-radius p-sm">
                                    <table>
                                      <tbody>
                                        <tr className="contents-table">
                                          <p>{`A `}<span>modeling averaging ensemble</span>{` combines the prediction from
                                              each model equally and often results in better performance on
                                              average than a given single model.`}</p>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <div className="entity">
                                      <a href="https://machinelearningmastery.com/weighted-average-ensemble-for-deep-learning-neural-networks/" className="badge badge-light" id="icon-change">
                                        <img src={require(`./blog.png`)} style={{width:"52px"}} alt=""/>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                              </li>
                            </ol>
                          <li style={{listStyle: "none", marginLeft: "-10px", fontSize: "18px"}}><FaStop style={{marginRight:"3px"}} />  Optimization </li>
                            <ol>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox17" onClick={this.handleClick17}/> <label id="rec" for="checkbox17"></label></div> Learning rate <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p><span>Learning rate</span>{` is a hyper-parameter that controls how
                                            much we are adjusting the weights of our network with respect
                                            the loss gradient. The lower the value, the slower we travel
                                            along the downward slope.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://towardsdatascience.com/understanding-learning-rates-and-how-it-improves-performance-in-deep-learning-d0d4059c1c10" className="badge badge-light" id="icon-change">
                                      <img src={require(`./blog.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                  </div>
                                </div>
                              </div>

                            </li>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox18" onClick={this.handleClick18}/> <label id="rec" for="checkbox18"></label></div> Batch size <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p>{`Unlike the learning rate hyper-parameter where its value
                                            doesn’t affect computational time, `}<span>batch size</span>{` must be examined
                                            in conjunction with the execution time of the training. The batch
                                            size is limited by your hardware’s memory, while the learning rate is not.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://towardsdatascience.com/hyper-parameter-tuning-techniques-in-deep-learning-4dad592c63c8" className="badge badge-light" id="icon-change">
                                      <img src={require(`./blog.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                  </div>
                                </div>
                              </div>

                            </li>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox19" onClick={this.handleClick19}/> <label id="rec" for="checkbox19"></label></div> Momentum <FaStar color={'#ffd700'} />
                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p>{`The optimal learning rate is dependent on the `}<span>momentum</span> {`and momentum
                                            is dependent on the learning rate. Since learning rate is regarded as
                                            the most important hyper-parameter to tune then momentum is also important.
                                            Like learning rates, it is valuable to set momentum as large as possible
                                            without causing instabilities during training.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://towardsdatascience.com/hyper-parameter-tuning-techniques-in-deep-learning-4dad592c63c8" className="badge badge-light" id="icon-change">
                                      <img src={require(`./blog.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                  </div>
                                </div>
                              </div>

                            </li>
                            <li id="delete-circle" style={{listStyle: "circle"}}><div className="round"><input type="checkbox" id="checkbox20" onClick={this.handleClick20}/> <label id="rec" for="checkbox20"></label></div> Dropouts <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />
                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                <div className="img-contents-wrapper">
                                  <img src={require(`./dropout.png`)} style={{}} alt=""/>
                                </div>
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p><span>Dropout</span>{` is a regularization technique patented by Google for
                                          reducing overfitting in neural networks by preventing complex
                                          co-adaptations on training data. It is a very efficient way of
                                          performing model averaging with neural networks. The term "dropout"
                                          refers to dropping out units (both hidden and visible) in a neural network`}</p>
                                        <a  href="https://en.wikipedia.org/wiki/Dropout_(neural_networks)">
                                          <p className="wiki">From Wikipedia</p>
                                        </a>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://keras.io/layers/core/" className="badge badge-dark" id="icon-change">
                                      <img src={require(`./code.png`)} style={{width:"52px"}} alt=""/>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>


                            </ol>

                          <a href ="#" className="finish-btn-pos4" onClick={this.goToProcess4}>
                              <FinishButton />
                          </a>
                        </ol>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommendation;
