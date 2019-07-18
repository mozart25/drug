import React from 'react';
import './Recommendation.scss';
import { FaStar, FaCaretRight } from 'react-icons/fa';
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
      process2: false,
      process3: false,
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
    this.setState(
      {
        process1: true
    }
  )
}

  goToProcess2 = () => {
    this.setState(
      {
        process2: true
    }
  )
  }

  goToProcess3 = () => {
    this.setState(
      {
        process3: true
    }
  )
  }


  render() {

    return (
      <div className="recommend-container">

        <nav className="navbar-recommendation navbar-expand-lg navbar-light bg-white header">
          <div className="header-logo">
            <a className="navbar-brand" href="/">
                <p> BioAI</p>
            </a>
          </div>
          <div className="collapse navbar-collapse order-1" id="navbarSupportedContent">
            <div className="order-3">
              <div className="navbar-nav">
                <ul className="navbar-nav ml-auto navbar-subscribe">
                  <li className="nav-item nav-link-right">
                    <a className="nav-link-right nav-textual-link" href="https://twitter.com/paperswithcode">
                      About</a>
                  </li>
                  <li className="nav-item nav-link-right">
                    <a className="nav-link-right nav-textual-link" href="https://join.slack.com/t/paperswithcode/shared_invite/enQtNTgyMTUxODUwNDY2LTQzZWQ1ZjE4NmRhZjA4NDY1ZDcyMjdmOGZlOGJjM2VkOGNkYjczYmRhOGU5ZGZkNWQ4OGE3MzJjZjBjZTgwNzA">
                      Blog</a>
                  </li>
                  <li className="nav-item nav-link-right"><a className="nav-link-right nav-textual-link" style={{position: 'relative', top: '1px'}} href="/about">Contact us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

          <div className="container">
            <div className="container content content-buffer">
              <div className="title">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="home-page-title">Drug AI Algorithm Development Solution</h1>
                  </div>
                </div>
              </div>
            <div className="process-wrapper">
              <div className="infinite-container text-center">
              <div id="tooltip">
                <span className="tooltiptext"> START HERE → <span className="tooltip-sub">PREVIEW</span></span>
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
                          : <Process1 />
                        }
                      </div>
                </a>
                </div>
              </div>
              <FaCaretRight style={{color: '#DCDCDC', height: '370px' }} />
              <div className="infinite-container text-center">
              <div id="tooltip">
                <span className="tooltiptext"> START HERE → <span className="tooltip-sub">PREVIEW</span></span>
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
              </div>
              <FaCaretRight style={{color: '#DCDCDC', height: '370px' }} />
              <div className="infinite-container text-center">
              <div id="tooltip">
                <span className="tooltiptext"> START HERE → <span className="tooltip-sub">PREVIEW</span></span>
              <a href="#position_3">
                <div className="row infinite-item item">
                <div className="item-header" id={`${this.state.process2 ? "modeling" : "pre-default"}`} style={{cursor:"pointer"}} ><p>Modeling</p></div>
                  { this.state.process2 === false || this.state.clicked3 > 0 ?
                    <Choice3
                    s11={this.state.view11}
                    s12={this.state.view12}
                    s13={this.state.view13}
                    s14={this.state.view14}
                    />
                    : <Process3 />
                  }
                </div>
                </a>
                </div>
              </div>
              <FaCaretRight style={{color: '#DCDCDC', height: '370px' }} />
              <div className="infinite-container text-center">
              <div id="tooltip">
                <span className="tooltiptext"> START HERE → <span className="tooltip-sub">PREVIEW</span></span>
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
            </div>
            </div>
              <div className="infinite-container text-center" id="position_1">
                <div className="row infinite-item item">
                  <div className="item-header" id="data-preparation"><p>Data Preparation</p></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list"> Data Types </li>
                            <ol style={{paddingLeft: '18px'}}>
                              <li > Structured Data </li>
                                <ol>
                                  <li id="delete-circle" style={{listStyle: 'circle'}}> <div className="round"><input type="checkbox" id="checkbox1" onClick={this.handleClick1}/> <label for="checkbox1"></label></div> Drug Information Data <FaStar color={'#ffd700'}/></li>
                                  <li id="delete-circle" style={{listStyle: 'circle'}}> <div className="round"><input type="checkbox" id="checkbox2" onClick={this.handleClick2}/> <label for="checkbox2"></label></div> Real drug-drug-information occurrence data </li>
                                </ol>
                            </ol>
                            <ol style={{paddingLeft: '18px'}}>
                              <li > Image Data </li>
                                <ol>
                                  <li id="delete-circle" style={{listStyle: 'circle'}}> <div className="round"><input type="checkbox" id="checkbox3" onClick={this.handleClick3}/> <label for="checkbox3"></label></div> Molecular formula data <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> </li>
                                </ol>
                            </ol>
                            <ol style={{paddingLeft: '18px'}}>
                              <li > Text Data </li>
                                <ol>
                                  <li id="delete-circle" style={{listStyle: 'circle'}}> <div className="round"><input type="checkbox" id="checkbox4" onClick={this.handleClick4}/> <label for="checkbox4"></label></div> SMILES <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> </li>
                                </ol>
                            </ol>
                          <li id="top-list"> Data Source </li>
                            <ol style={{paddingLeft: '18px'}}>
                              <li style={{listStyle: 'circle'}}><p id="badge-link"><span className="badge badge-primary">DrugBank</span></p></li>
                              <li style={{listStyle: 'circle'}}><p id="badge-link"><span className="badge badge-primary">PubChem</span></p></li>
                            </ol>
                        </ol>
                        <a href ="#" className="finish-btn-pos" onClick={this.goToProcess}>
                            <FinishButton />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center" id="position_2">
                <div className="row infinite-item item">
                  <div className="item-header" id="data-preprocessing"><p>Data Preprocessing</p></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list"> Data Processing</li>
                            <ol>
                              <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox5" onClick={this.handleClick5}/> <label for="checkbox5"></label></div> Molecule autoencoder

                                <div className="contents-wrapper">
                                  <div className="border b-active b-thick b-radius p-sm">
                                    <table>
                                      <tbody>
                                        <tr className="contents-table">
                                          <p>1. Importing and normalizing the SMILES string data </p>
                                          <p>2. Translating normalized strings into one hot vectors </p>
                                          <p>3. Building the deep NN model </p>
                                          <p>4. Compiling the model and fitting the data </p>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div className="entity">
                                      <a href="/paper/unsupervised-data-augmentation-1" className="badge badge-light">
                                        <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                          <div className="icon-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                              <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                            </svg>
                                          </div>
                                        </ion-icon> Paper
                                      </a>
                                      <br />
                                      <a href="/paper/unsupervised-data-augmentation-1#code" className="badge badge-dark">
                                        <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                          <div className="icon-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                            </svg>
                                          </div>
                                        </ion-icon> Code
                                      </a>
                                    </div>
                                  </div>
                                </div>

                              </li>
                              <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox6" onClick={this.handleClick6}/> <label for="checkbox6"></label></div> Mol2Vec

                                  <div className="contents-wrapper">
                                    <div className="border b-active b-thick b-radius p-sm">
                                      <table>
                                        <tbody>
                                          <tr className="contents-table">
                                            <p>{`Word2vec models where vectors of closely
                                                related words are in close proximity in the vector space, Mol2vec
                                                learns vector representations of molecular substructures that are
                                                pointing in similar directions for chemically related substructures.`}</p>
                                          </tr>
                                        </tbody>
                                      </table>

                                      <div className="entity">
                                        <a href="https://s3-eu-west-1.amazonaws.com/itempdf74155353254prod/5513581/Mol2vec__Unsupervised_Machine_Learning_Approach_with_Chemical_Intuition_v1.pdf" className="badge badge-light">
                                          <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                            <div className="icon-inner">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                              </svg>
                                            </div>
                                          </ion-icon> Paper
                                        </a>
                                        <br />
                                        <a href="https://github.com/samoturk/mol2vec" className="badge badge-dark">
                                          <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                            <div className="icon-inner">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                              </svg>
                                            </div>
                                          </ion-icon> Code
                                        </a>
                                        <br />
                                      </div>

                                    </div>
                                  </div>

                              </li>
                            </ol>
                          <li id="top-list"> Class Imbalance </li>
                            <ol>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox7" onClick={this.handleClick7}/> <label for="checkbox7"></label></div> SMOTE: Synthetic Minority Over-sampling Technique


                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p>{`This paper shows that a combination of our method of over-sampling the minority
                                          (abnormal) class and under-sampling the majority (normal) class can achieve better
                                          classifier performance (in ROC space) than only under-sampling the majority class.
                                          Our method of over-sampling the minority class involves creating synthetic minority
                                          class examples. `}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://arxiv.org/pdf/1106.1813" className="badge badge-light">
                                      <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Paper
                                    </a>
                                    <br />
                                    <a href="/paper/unsupervised-data-augmentation-1#code" className="badge badge-dark">
                                      <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Code
                                    </a>
                                    <br />
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
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p>{`This paper presents a word embedding based oversampling method.
                                            Firstly, a large-scale text corpus is used to train a continuous
                                            skip-gram model in order to form word embedding. A feature selection
                                            and linear combination algorithm is developed to construct text
                                            representation vector from word embedding.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://sentic.net/wisdom2014chen.pdf" className="badge badge-light">
                                      <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Paper
                                    </a>
                                    <br />

                                  </div>
                                </div>
                              </div>
                            </li>
                            </ol>



                          <li id="top-list"> Dimension Reduction </li>
                            <ol>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox9" onClick={this.handleClick9}/> <label for="checkbox9"></label></div> PCA

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p>{`Principal component analysis (PCA) is a statistical procedure
                                          that uses an orthogonal transformation to convert a set of observations
                                          of possibly correlated variables (entities each of which takes on various
                                             numerical values) into a set of values of linearly uncorrelated variables
                                             called principal components.

                                            source : https://en.wikipedia.org/wiki/Principal_component_analysis`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://link.springer.com/content/pdf/10.1007/978-3-642-04898-2_455.pdf" className="badge badge-light">
                                      <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Book
                                    </a>
                                    <br />
                                    <a href="https://github.com/scikit-learn/scikit-learn/blob/master/sklearn/decomposition/pca.py" className="badge badge-dark">
                                      <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Code
                                    </a>
                                    <br />
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
                                        <p>{`Independent component analysis attempts to decompose a multivariate
                                            signal into independent non-Gaussian signals. As an example, sound is
                                            usually a signal that is composed of the numerical addition, at each time t,
                                            of signals from several sources. The question then is whether it is possible
                                            to separate these contributing sources from the observed total signal.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="http://mlsp.cs.cmu.edu/courses/fall2012/lectures/ICA_Hyvarinen.pdf" className="badge badge-light">
                                      <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Paper
                                    </a>
                                    <br />
                                    <a href="https://scikit-learn.org/stable/auto_examples/decomposition/plot_ica_blind_source_separation.html" className="badge badge-dark">
                                      <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Code
                                    </a>
                                    <br />
                                    <br />
                                  </div>
                                </div>
                              </div>

                            </li>
                            </ol>
                        </ol>
                        <a href ="#" className="finish-btn-pos2" onClick={this.goToProcess2}>
                            <FinishButton />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center" id="position_3">
                <div className="row infinite-item item">
                  <div className="item-header" id="modeling"><p>Modeling</p></div>
                  <div className="col-lg-3 item-image-col"></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list2">
                          <li id="top-list"><div className="round"><input type="checkbox" id="checkbox11" onClick={this.handleClick11}/> <label id="rec" for="checkbox11"></label></div> Support Vector Machine

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p>{`Support-vector machines are supervised learning
                                        models with associated learning algorithms that analyze data used for
                                        classification and regression analysis. Given a set of training examples,
                                        each marked as belonging to one or the other of two categories, an SVM training
                                        algorithm builds a model that assigns new examples to one category or the other,
                                        making it a non-probabilistic binary linear classifier.
                                        source : https://en.wikipedia.org/wiki/Support-vector_machine`}</p>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="https://link.springer.com/content/pdf/10.1007%2FBF00994018.pdf" className="badge badge-light">
                                    <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                        </svg>
                                      </div>
                                    </ion-icon> Paper
                                  </a>
                                  <br />
                                  <a href="https://scikit-learn.org/stable/modules/svm.html" className="badge badge-dark">
                                    <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                        </svg>
                                      </div>
                                    </ion-icon> Code
                                  </a>
                                  <br />
                                  <br />
                                </div>
                              </div>
                            </div>
                          </li>


                          <li id="top-list"><div className="round"><input type="checkbox" id="checkbox12" onClick={this.handleClick12}/> <label id="rec" for="checkbox12"></label></div> Decision Trees

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p>{`A decision tree is a decision support tool that uses a tree-like
                                        model of decisions and their possible consequences, including chance
                                        event outcomes, resource costs, and utility. It is one way to display
                                        an algorithm that only contains conditional control statements.

                                        source : https://en.wikipedia.org/wiki/Decision_tree`}</p>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="https://link.springer.com/content/pdf/10.1007/BF00116251.pdf" className="badge badge-light">
                                    <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                        </svg>
                                      </div>
                                    </ion-icon> Paper
                                  </a>
                                  <br />
                                  <a href="https://scikit-learn.org/stable/modules/tree.html" className="badge badge-dark">
                                    <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                        </svg>
                                      </div>
                                    </ion-icon> Code
                                  </a>
                                  <br />
                                </div>
                              </div>
                            </div>
                          </li>


                          <li id="top-list"><div className="round"><input type="checkbox" id="checkbox13" onClick={this.handleClick13}/> <label id="rec" for="checkbox13"></label></div> Multilayer Perceptron <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p>{`Similarly, to the Word2vec models where vectors of closely
                                          related words are in close proximity in the vector space, Mol2vec
                                          learns vector representations of molecular substructures that are
                                          pointing in similar directions for chemically related substructures.`}</p>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="http://ml.informatik.uni-freiburg.de/former/_media/teaching/ss10/05_mlps.printer.pdf" className="badge badge-light">
                                    <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                        </svg>
                                      </div>
                                    </ion-icon> PPT
                                  </a>
                                  <br />
                                  <a href="https://scikit-learn.org/stable/modules/neural_networks_supervised.html" className="badge badge-dark">
                                    <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                        </svg>
                                      </div>
                                    </ion-icon> Code
                                  </a>
                                  <br />
                                </div>
                              </div>
                            </div>

                          </li>
                          <li id="top-list"><div className="round"><input type="checkbox" id="checkbox14" onClick={this.handleClick14}/> <label id="rec" for="checkbox14"></label></div> Recurrent Neural Networks <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p>{`Similarly, to the Word2vec models where vectors of closely
                                          related words are in close proximity in the vector space, Mol2vec
                                          learns vector representations of molecular substructures that are
                                          pointing in similar directions for chemically related substructures.`}</p>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="https://www.isca-speech.org/archive/archive_papers/interspeech_2010/i10_1045.pdf" className="badge badge-light">
                                    <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                        </svg>
                                      </div>
                                    </ion-icon> Paper
                                  </a>
                                  <br />
                                  <a href="https://keras.io/layers/recurrent/" className="badge badge-dark">
                                    <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                        </svg>
                                      </div>
                                    </ion-icon> Code
                                  </a>
                                  <br />
                                </div>
                              </div>
                            </div>

                          </li>
                        </ol>
                        <a href ="#" className="finish-btn-pos3" onClick={this.goToProcess3}>
                            <FinishButton />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center" id="position_4">
                <div className="row infinite-item item">
                  <div className="item-header" id="model-modification"><p>Model modification</p></div>
                  <div className="col-lg-3 item-image-col"></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list"> Ensemble </li>
                            <ol>
                              <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox15" onClick={this.handleClick15}/> <label id="rec" for="checkbox15"></label></div>  Horizontal epochs ensemble <FaStar color={'#ffd700'} />

                                <div className="contents-wrapper">
                                  <div className="border b-active b-thick b-radius p-sm">
                                    <table>
                                      <tbody>
                                        <tr className="contents-table">
                                          <p>{`Horizontal Vot-ing Vertical Voting and Horizontal Stacked
                                              Ensemble methods to improve the classification performance of
                                              deep neural networks.`}</p>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <div className="entity">
                                      <a href="http://deeplearning.net/wp-content/uploads/2013/03/Horizontal-and-Vertical-Ensemble-with-Deep-Representation-for-Classification.pdf" className="badge badge-light">
                                        <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                          <div className="icon-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                              <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                            </svg>
                                          </div>
                                        </ion-icon> Paper
                                      </a>
                                      <br />
                                      <br />
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
                                          <p>{`Horizontal Vot-ing Vertical Voting and Horizontal Stacked
                                              Ensemble methods to improve the classification performance of
                                              deep neural networks.`}</p>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <div className="entity">
                                      <a href="https://machinelearningmastery.com/weighted-average-ensemble-for-deep-learning-neural-networks/" className="badge badge-light">
                                        <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                          <div className="icon-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                              <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                            </svg>
                                          </div>
                                        </ion-icon> Blog
                                      </a>
                                      <br />
                                      <br />
                                    </div>
                                  </div>
                                </div>



                              </li>
                            </ol>
                          <li id="top-list"> Optimization </li>
                            <ol style={{paddingLeft: '18px'}}>
                            <li id="delete-circle" style={{listStyle: 'circle'}}><div className="round"><input type="checkbox" id="checkbox17" onClick={this.handleClick17}/> <label id="rec" for="checkbox17"></label></div> Learning rate <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p>{`Learning rate is a hyper-parameter that controls how
                                            much we are adjusting the weights of our network with respect
                                            the loss gradient. The lower the value, the slower we travel
                                            along the downward slope.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://towardsdatascience.com/understanding-learning-rates-and-how-it-improves-performance-in-deep-learning-d0d4059c1c10" className="badge badge-light">
                                      <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Blog
                                    </a>
                                    <br />
                                    <br />
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
                                            doesn’t affect computational time, batch size must be examined
                                            in conjunction with the execution time of the training. The batch
                                            size is limited by your hardware’s memory, while the learning rate is not.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://towardsdatascience.com/hyper-parameter-tuning-techniques-in-deep-learning-4dad592c63c8" className="badge badge-light">
                                      <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Blog
                                    </a>
                                    <br />
                                    <br />
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
                                        <p>{`The optimal learning rate is dependent on the momentum and momentum
                                            is dependent on the learning rate. Since learning rate is regarded as
                                            the most important hyper-parameter to tune then momentum is also important.
                                            Like learning rates, it is valuable to set momentum as large as possible
                                            without causing instabilities during training.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity">
                                    <a href="https://towardsdatascience.com/hyper-parameter-tuning-techniques-in-deep-learning-4dad592c63c8" className="badge badge-light">
                                      <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                                        <div className="icon-inner">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                          </svg>
                                        </div>
                                      </ion-icon> Blog
                                    </a>
                                    <br />
                                    <br />
                                  </div>
                                </div>
                              </div>

                            </li>
                            </ol>
                          <li style={{listStyle: "none"}}id="top-list"><div className="round"><input type="checkbox" id="checkbox20" onClick={this.handleClick20}/> <label id="rec" for="checkbox20"></label></div> Dropouts <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p>{`Dropout is a regularization technique patented by Google for
                                        reducing overfitting in neural networks by preventing complex
                                        co-adaptations on training data. It is a very efficient way of
                                        performing model averaging with neural networks. The term "dropout"
                                        refers to dropping out units (both hidden and visible) in a neural network
                                        Source : https://en.wikipedia.org/wiki/Dropout_(neural_networks)`}</p>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity">
                                  <a href="https://keras.io/layers/core/" className="badge badge-dark">
                                    <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                                      <div className="icon-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                        </svg>
                                      </div>
                                    </ion-icon> Code
                                  </a>
                                  <br />
                                  <br />
                                </div>
                              </div>
                            </div>

                          </li>
                        </ol>
                        <a href ="#" className="finish-btn-pos4">
                            <FinishButton />
                        </a>

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
