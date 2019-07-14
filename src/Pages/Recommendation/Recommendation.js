import React from 'react';
import './Recommendation.scss';
import Navigation from '../../Components/Navigation/Navigation' ;

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
                        <ol>
                          <li> Numeric Data </li>
                            <ol>
                              <li>Drug information Data</li>
                              <li>Drug-Drug-information occurence data </li>
                            </ol>
                        </ol>
                        <p><span className="badge badge-primary">Data Types</span></p>
                        <p><span className="badge badge-primary">Data Source</span></p>
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
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 May 2019</span> • <a href="https://github.com/facebookresearch/adaptive-span" style={{fontSize: '13px'}}>facebookresearch/adaptive-span</a>
                        </p>
                        <p className="item-strip-abstract">We propose a novel self-attention mechanism that can learn its optimal attention span.</p>
                        <p><span className="badge badge-primary">Data Types</span></p>
                        <p><span className="badge badge-primary">Data Source</span></p>
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
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 May 2019</span> • <a href="https://github.com/facebookresearch/adaptive-span" style={{fontSize: '13px'}}>facebookresearch/adaptive-span</a>
                        </p>
                        <p className="item-strip-abstract">We propose a novel self-attention mechanism that can learn its optimal attention span.</p>
                        <p><span className="badge badge-primary">Data Types</span></p>
                        <p><span className="badge badge-primary">Data Source</span></p>
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
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 May 2019</span> • <a href="https://github.com/facebookresearch/adaptive-span" style={{fontSize: '13px'}}>facebookresearch/adaptive-span</a>
                        </p>
                        <p className="item-strip-abstract">We propose a novel self-attention mechanism that can learn its optimal attention span.</p>
                        <p><span className="badge badge-primary">Data Types</span></p>
                        <p><span className="badge badge-primary">Data Source</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
              <div className="infinite-container text-center" id="position_1">
                <div className="row infinite-item item">
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <div className="item-header" id="data-preparation"><p>Data Preparation</p></div>

                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 May 2019</span> • <a href="https://github.com/facebookresearch/adaptive-span" style={{fontSize: '13px'}}>facebookresearch/adaptive-span</a>
                        </p>
                        <p className="item-strip-abstract">We propose a novel self-attention mechanism that can learn its optimal attention span.</p>
                        <p><span className="badge badge-primary">Data Types</span></p>
                        <p><span className="badge badge-primary">Data Source</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center" id="position_2">
                <div className="row infinite-item item">
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <div className="item-header" id="data-preprocessing"><p>Data Preprocessing</p></div>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 May 2019</span> • <a href="https://github.com/facebookresearch/adaptive-span" style={{fontSize: '13px'}}>facebookresearch/adaptive-span</a>
                        </p>
                        <p className="item-strip-abstract">We propose a novel self-attention mechanism that can learn its optimal attention span.</p>
                        <p><span className="badge badge-primary">Data Processing</span></p>
                        <p><span className="badge badge-primary">Class Imbalance</span></p>
                        <p><span className="badge badge-primary">Dimension Reduction</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center" id="position_3">
                <div className="row infinite-item item">
                  <div className="col-lg-3 item-image-col"></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <div className="item-header" id="modeling"><p>Modeling</p></div>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 May 2019</span> • <a href="https://github.com/facebookresearch/adaptive-span" style={{fontSize: '13px'}}>facebookresearch/adaptive-span</a>
                        </p>
                        <p className="item-strip-abstract">We propose a novel self-attention mechanism that can learn its optimal attention span.</p>
                        <p><span className="badge badge-primary">Support Vector Machine</span></p>
                        <p><span className="badge badge-primary">Decision Tree</span></p>
                        <p><span className="badge badge-primary">Multilayer Perceptron</span></p>
                        <p><span className="badge badge-primary">Recurrent Neural Networks</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="infinite-container text-center" id="position_4">
                <div className="row infinite-item item">
                  <div className="col-lg-3 item-image-col"></div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <div className="item-header" id="model-modification"><p>Model modification</p></div>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 May 2019</span> • <a href="https://github.com/facebookresearch/adaptive-span" style={{fontSize: '13px'}}>facebookresearch/adaptive-span</a>
                        </p>
                        <p className="item-strip-abstract">We propose a novel self-attention mechanism that can learn its optimal attention span.</p>
                        <p><span className="badge badge-primary">Ensemble</span></p>
                        <p><span className="badge badge-primary">Optimization</span></p>
                        <p><span className="badge badge-primary">Dropouts</span></p>

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
