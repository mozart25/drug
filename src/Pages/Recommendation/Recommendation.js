import React from 'react';
import './Recommendation.scss';
import Navigation from '../../Components/Navigation/Navigation' ;
import { FaStar } from 'react-icons/fa';
import Button from '../../Components/Button/Button';


class Recommendation extends React.Component {

  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = (e) => {
    this.setState(
      {
        clicked: !this.state.clicked
      } ,() => console.log("clicked!!!!", this.state.clicked)
    )
    console.log("끼루끼룩!!!!")
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
                <div className="row infinite-item item">
                  <div  className="item-header" style={{cursor:"pointer"}} ><a href="#position_1"><p>Data Preparation</p></a></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list-process"> Data Types </li>
                            <ol style={{paddingLeft: '10px'}}>
                              <li id="top-list-process"> Structured Data </li>
                                <ol style={{paddingLeft: '10px'}}>
                                  <li style={{listStyle: 'circle', fontSize: '15px'}}> Drug Information Data  </li>
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
                </div>
              </div>

              <div className="infinite-container text-center">
                <div className="row infinite-item item">
                <div className="item-header" id="data-preprocessing" style={{cursor:"pointer"}} ><a href="#position_2"><p>Data Preprocessing</p></a></div>
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
                </div>
              </div>
              <div className="infinite-container text-center">
                <div className="row infinite-item item">
                <div className="item-header" id="modeling" style={{cursor:"pointer"}} ><a href="#position_3"><p>Modeling</p></a></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">

                        <ol style={{paddingTop: '2px'}} className="preparation-list">
                          <li id="top-list-process"> Support Vector Machine</li>
                          <li id="top-list-process"> Decision Trees</li>
                          <li id="top-list-process"> Multilayer Perceptron</li>
                          <li id="top-list-process"> Recurrent Neural Networks</li>
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
                                <ol style={{paddingLeft: '18px'}}>
                                  <li style={{listStyle: 'circle'}}> Drug Information Data <FaStar color={'#ffd700'}/> <button onClick={this.handleClick}> <Button onClick={this.handleClick}/> </button></li>
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
                              <li style={{listStyle: 'circle'}}> Molecule autoencoder

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

                                    <div className="entity" style={{marginBottom: '20px'}}>
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
                                      <br />
                                    </div>
                                  </div>
                                </div>



                              </li>
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

                                      <div className="entity" style={{marginBottom: '20px'}}>
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
                            <ol style={{paddingLeft: '18px'}}>
                            <li style={{listStyle: 'circle'}}> SMOTE

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`This paper shows that a combination of our method of over-sampling the minority
                                          (abnormal) class and under-sampling the majority (normal) class can achieve better
                                          classifier performance (in ROC space) than only under-sampling the majority class.
                                          Our method of over-sampling the minority class involves creating synthetic minority
                                          class examples. `}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity" style={{marginBottom: '20px'}}>
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

                            <ol style={{paddingLeft: '18px'}}>
                            <li style={{listStyle: 'circle'}}> WEMOTE

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`This paper presents a word embedding based oversampling method.
                                            Firstly, a large-scale text corpus is used to train a continuous
                                            skip-gram model in order to form word embedding. A feature selection
                                            and linear combination algorithm is developed to construct text
                                            representation vector from word embedding.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity" style={{marginBottom: '20px'}}>
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
                                    <br />
                                    <br />
                                  </div>
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
                                        <p>{`Principal component analysis (PCA) is a statistical procedure
                                          that uses an orthogonal transformation to convert a set of observations
                                          of possibly correlated variables (entities each of which takes on various
                                             numerical values) into a set of values of linearly uncorrelated variables
                                             called principal components.

                                            source : https://en.wikipedia.org/wiki/Principal_component_analysis`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity" style={{marginBottom: '20px'}}>
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
                          <li id="top-list"> Support Vector Machine

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p id="contents-head">Summary</p>
                                      <p>{`In machine learning, support-vector machines are supervised learning
                                        models with associated learning algorithms that analyze data used for
                                        classification and regression analysis. Given a set of training examples,
                                        each marked as belonging to one or the other of two categories, an SVM training
                                        algorithm builds a model that assigns new examples to one category or the other,
                                        making it a non-probabilistic binary linear classifier.
                                        source : https://en.wikipedia.org/wiki/Support-vector_machine`}</p>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity" style={{marginBottom: '20px'}}>
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


                          <li id="top-list"> Decision Trees

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p id="contents-head">Summary</p>
                                      <p>{`A decision tree is a decision support tool that uses a tree-like
                                        model of decisions and their possible consequences, including chance
                                        event outcomes, resource costs, and utility. It is one way to display
                                        an algorithm that only contains conditional control statements.

                                        source : https://en.wikipedia.org/wiki/Decision_tree`}</p>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity" style={{marginBottom: '20px'}}>
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


                          <li id="top-list"> Multilayer Perceptron <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

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

                                <div className="entity" style={{marginBottom: '20px'}}>
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
                          <li id="top-list"> Recurrent Neural Networks <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

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

                                <div className="entity" style={{marginBottom: '20px'}}>
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
                              <li style={{listStyle: 'circle'}}> Horizontal epochs ensemble <FaStar color={'#ffd700'} />

                                <div className="contents-wrapper">
                                  <div className="border b-active b-thick b-radius p-sm">
                                    <table>
                                      <tbody>
                                        <tr className="contents-table">
                                          <p id="contents-head">Summary</p>
                                          <p>{`Horizontal Vot-ing Vertical Voting and Horizontal Stacked
                                              Ensemble methods to improve the classification performance of
                                              deep neural networks.`}</p>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <div className="entity" style={{marginBottom: '20px'}}>
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
                              <li style={{listStyle: 'circle'}}> Model averaging ensemble

                                <div className="contents-wrapper">
                                  <div className="border b-active b-thick b-radius p-sm">
                                    <table>
                                      <tbody>
                                        <tr className="contents-table">
                                          <p id="contents-head">Summary</p>
                                          <p>{`Horizontal Vot-ing Vertical Voting and Horizontal Stacked
                                              Ensemble methods to improve the classification performance of
                                              deep neural networks.`}</p>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <div className="entity" style={{marginBottom: '20px'}}>
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
                            <li style={{listStyle: 'circle'}}> Learning rate <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`Learning rate is a hyper-parameter that controls how
                                            much we are adjusting the weights of our network with respect
                                            the loss gradient. The lower the value, the slower we travel
                                            along the downward slope.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity" style={{marginBottom: '20px'}}>
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
                            <li style={{listStyle: 'circle'}}> Batch size <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`Unlike the learning rate hyper-parameter where its value
                                            doesn’t affect computational time, batch size must be examined
                                            in conjunction with the execution time of the training. The batch
                                            size is limited by your hardware’s memory, while the learning rate is not.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity" style={{marginBottom: '20px'}}>
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
                            <li style={{listStyle: 'circle'}}> Momentum <FaStar color={'#ffd700'} />

                              <div className="contents-wrapper">
                                <div className="border b-active b-thick b-radius p-sm">
                                  <table>
                                    <tbody>
                                      <tr className="contents-table">
                                        <p id="contents-head">Summary</p>
                                        <p>{`The optimal learning rate is dependent on the momentum and momentum
                                            is dependent on the learning rate. Since learning rate is regarded as
                                            the most important hyper-parameter to tune then momentum is also important.
                                            Like learning rates, it is valuable to set momentum as large as possible
                                            without causing instabilities during training.`}</p>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <div className="entity" style={{marginBottom: '20px'}}>
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
                          <li id="top-list"> Dropouts <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} /> <FaStar color={'#ffd700'} />

                            <div className="contents-wrapper">
                              <div className="border b-active b-thick b-radius p-sm">
                                <table>
                                  <tbody>
                                    <tr className="contents-table">
                                      <p id="contents-head">Summary</p>
                                      <p>{`Dropout is a regularization technique patented by Google for
                                        reducing overfitting in neural networks by preventing complex
                                        co-adaptations on training data. It is a very efficient way of
                                        performing model averaging with neural networks. The term "dropout"
                                        refers to dropping out units (both hidden and visible) in a neural network
                                        Source : https://en.wikipedia.org/wiki/Dropout_(neural_networks)`}</p>
                                    </tr>
                                  </tbody>
                                </table>

                                <div className="entity" style={{marginBottom: '20px'}}>
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
