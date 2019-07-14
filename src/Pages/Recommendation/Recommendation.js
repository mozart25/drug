import React from 'react';
import './Recommendation.scss';
import Navigation from '../../Components/Navigation/Navigation' ;
import { FaStar } from 'react-icons/fa';


class Recommendation extends React.Component {
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
                    <h1 className="home-page-title">AI algorithm recommendation service</h1>
                  </div>
                </div>
              </div>
            <div className="process-wrapper">
              <div className="infinite-container text-center">
                <div className="row infinite-item item">
                  <div  className="item-header" style={{cursor:"pointer"}} ><a href="#position_1"><p>Data Preparation</p></a></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">


                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li> Data Types </li>
                            <ol style={{paddingLeft: '18px'}}>
                              <li > Numeric Data </li>
                                <ol style={{paddingLeft: '18px'}}>
                                  <li style={{listStyle: 'circle'}}> Drug Information Data  </li>
                                  <li style={{listStyle: 'circle'}}> Real drug-drug-information occurrence data</li>
                                </ol>
                            </ol>
                            <ol style={{paddingLeft: '18px'}}>
                              <li > Image Data </li>
                                <ol style={{paddingLeft: '18px'}}>
                                  <li style={{listStyle: 'circle'}}> Molecular formula data </li>
                                </ol>
                            </ol>
                            <ol style={{paddingLeft: '18px'}}>
                              <li > Text Data </li>
                                <ol style={{paddingLeft: '18px'}}>
                                  <li style={{listStyle: 'circle'}}> SMILES </li>
                                </ol>
                            </ol>
                        </ol>


                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center">
                <div className="row infinite-item item">
                <div className="item-header" id="data-preprocessing" style={{cursor:"pointer"}} ><a href="#position_2"><p>Data Preprocessing</p></a></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list"> Data Processing</li>
                            <ol style={{paddingLeft: '18px'}} >
                              <li style={{listStyle: 'circle'}}> Molecule autoencoder </li>
                              <li style={{listStyle: 'circle'}}> Mol2Vec </li>
                            </ol>
                          <li id="top-list"> Class Imbalance </li>
                            <ol style={{paddingLeft: '18px'}}>
                            <li style={{listStyle: 'circle'}}> SMOTE </li>
                            <li style={{listStyle: 'circle'}}> WEMOTE </li>
                            </ol>
                          <li id="top-list"> Dimension Reduction </li>
                            <ol style={{paddingLeft: '18px'}}>
                            <li style={{listStyle: 'circle'}}> PCA </li>
                            <li style={{listStyle: 'circle'}}> ICA</li>
                            </ol>
                        </ol>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center">
                <div className="row infinite-item item">
                <div className="item-header" id="modeling" style={{cursor:"pointer"}} ><a href="#position_3"><p>Modeling</p></a></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list"> Support Vector Machine</li>
                          <li id="top-list"> Decision Trees</li>
                          <li id="top-list"> Multilayer Perceptron</li>
                          <li id="top-list"> Recurrent Neural Networks</li>
                        </ol>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center">
                <div className="row infinite-item item">
                <div className="item-header" id="model-modification" style={{cursor:"pointer"}} ><a href="#position_4"><p>Model Modification</p></a></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list"> Ensemble </li>
                            <ol style={{paddingLeft: '18px'}}>
                              <li style={{listStyle: 'circle'}}> Horizontal epochs ensemble </li>
                              <li style={{listStyle: 'circle'}}> Model averaging ensemble </li>
                            </ol>
                          <li id="top-list"> Optimization </li>
                            <ol style={{paddingLeft: '18px'}}>
                            <li style={{listStyle: 'circle'}}> Learning rate </li>
                            <li style={{listStyle: 'circle'}}> Batch size </li>
                            <li style={{listStyle: 'circle'}}> Momentum </li>
                            </ol>
                          <li id="top-list"> Dropouts</li>
                        </ol>

                      </div>
                    </div>
                  </div>
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
                              <li > Numeric Data </li>
                                <ol style={{paddingLeft: '18px'}}>
                                  <li style={{listStyle: 'circle'}}> Drug Information Data <FaStar color={'#ffd700'}/></li>
                                  <li style={{listStyle: 'circle'}}> Real drug-drug-information occurrence data</li>
                                </ol>
                            </ol>
                            <ol style={{paddingLeft: '18px'}}>
                              <li > Image Data </li>
                                <ol style={{paddingLeft: '18px'}}>
                                  <li style={{listStyle: 'circle'}}> Molecular formula data <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> </li>
                                </ol>
                            </ol>
                            <ol style={{paddingLeft: '18px'}}>
                              <li > Text Data </li>
                                <ol style={{paddingLeft: '18px'}}>
                                  <li style={{listStyle: 'circle'}}> SMILES <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /></li>
                                </ol>
                            </ol>
                          <li id="top-list"> Data Source </li>
                            <ol style={{paddingLeft: '18px'}}>
                              <li style={{listStyle: 'circle'}}><p id="badge-link"><span className="badge badge-primary">DrugBank</span></p></li>
                              <li style={{listStyle: 'circle'}}><p id="badge-link"><span className="badge badge-primary">PubChem</span></p></li>
                            </ol>
                        </ol>

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
                            <ol style={{paddingLeft: '18px'}} >
                              <li style={{listStyle: 'circle'}}> Molecule autoencoder </li>
                              <li style={{listStyle: 'circle'}}> Mol2Vec

                                  <div className="contents-wrapper">
                                    <div className="border b-active b-thick b-radius p-sm">
                                      <table>
                                        <tbody>
                                          <tr className="contents-table">
                                            <p id="contents-head">Summary</p>
                                            <p>{`Similarly, to the Word2vec models where vectors of closely
                                                related words are in close proximity in the vector space, Mol2vec
                                                learns vector representations of molecular substructures that are
                                                pointing in similar directions for chemically related substructures.`}</p>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                              </li>
                            </ol>
                          <li id="top-list"> Class Imbalance </li>
                            <ol style={{paddingLeft: '18px'}}>
                            <li style={{listStyle: 'circle'}}> SMOTE

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`Similarly, to the Word2vec models where vectors of closely
                                            related words are in close proximity in the vector space, Mol2vec
                                            learns vector representations of molecular substructures that are
                                            pointing in similar directions for chemically related substructures.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                            </li>
                            <li style={{listStyle: 'circle'}}> WEMOTE

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`Similarly, to the Word2vec models where vectors of closely
                                            related words are in close proximity in the vector space, Mol2vec
                                            learns vector representations of molecular substructures that are
                                            pointing in similar directions for chemically related substructures.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                            </li>
                            </ol>
                          <li id="top-list"> Dimension Reduction </li>
                            <ol style={{paddingLeft: '18px'}}>
                            <li style={{listStyle: 'circle'}}> PCA

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`Similarly, to the Word2vec models where vectors of closely
                                            related words are in close proximity in the vector space, Mol2vec
                                            learns vector representations of molecular substructures that are
                                            pointing in similar directions for chemically related substructures.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                            </li>
                            <li style={{listStyle: 'circle'}}> ICA

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`Similarly, to the Word2vec models where vectors of closely
                                            related words are in close proximity in the vector space, Mol2vec
                                            learns vector representations of molecular substructures that are
                                            pointing in similar directions for chemically related substructures.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                            </li>
                            </ol>
                        </ol>

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

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list"> Support Vector Machine</li>
                          <li id="top-list"> Decision Trees</li>
                          <li id="top-list"> Multilayer Perceptron <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /></li>
                          <li id="top-list"> Recurrent Neural Networks <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /></li>
                        </ol>

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
                            <ol style={{paddingLeft: '18px'}}>
                              <li style={{listStyle: 'circle'}}> Horizontal epochs ensemble <FaStar color={'#ffd700'} /></li>
                              <li style={{listStyle: 'circle'}}> Model averaging ensemble </li>
                            </ol>
                          <li id="top-list"> Optimization </li>
                            <ol style={{paddingLeft: '18px'}}>
                            <li style={{listStyle: 'circle'}}> Learning rate <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /></li>
                            <li style={{listStyle: 'circle'}}> Batch size <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /></li>
                            <li style={{listStyle: 'circle'}}> Momentum <FaStar color={'#ffd700'} /></li>
                            </ol>
                          <li id="top-list"> Dropouts <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /></li>
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
