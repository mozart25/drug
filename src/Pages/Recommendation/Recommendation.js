import React from 'react';
import './Recommendation.scss';
import Navigation from '../../Components/Navigation/Navigation' ;

class Recommendation extends React.Component {
  render() {
    return (
      <div className="recommend-container">
        <header className="header-bg">
          <Navigation />
        </header>

          <div className="container">
            <div className="container content content-buffer">
              <div className="title">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="home-page-title">AI algorithm recommendation service</h1>
                  </div>
                </div>
              </div>
              <div className="infinite-container text-center">
                <div className="row infinite-item item">
                  {/* 540510 */}
                  <div className="col-lg-3 item-image-col">
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/adaptive-attention-span-in-transformers">Adaptive Attention Span in Transformers</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 May 2019</span> • <a href="https://github.com/facebookresearch/adaptive-span" style={{fontSize: '13px'}}>facebookresearch/adaptive-span</a> • <img src="/static/frameworks/pytorch.28a00358044f.png" />
                        </p>
                        <p className="item-strip-abstract">We propose a novel self-attention mechanism that can learn its optimal attention span.</p>
                        <div className="sota">
                          <p>
                            <a href="/sota/language-modelling-on-text8">
                              <img style={{height: '20px', width: '35px', position: 'relative', top: '1px'}} src="https://paperswithcode.com/media/sota-thumbs/language-modelling-on-text8-small_74c6991f.png" />
                            </a>
                            #3 best model for
                            <a href="/sota/language-modelling-on-text8">
                              Language Modelling
                              on Text8
                            </a>
                          </p>
                        </div>
                        <p>
                          <a href="/task/language-modelling"><span className="badge badge-primary">LANGUAGE MODELLING</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 134</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          2.80 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/adaptive-attention-span-in-transformers" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/adaptive-attention-span-in-transformers#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 540504 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/deepsdf-learning-continuous-signed-distance">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1901.05103.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/deepsdf-learning-continuous-signed-distance">DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="item-conference-link">
                            <a href="/conference/cvpr-2019-6">
                              CVPR 2019
                            </a>
                          </span> • <a href="https://github.com/Facebookresearch/deepsdf" style={{fontSize: '13px'}}>Facebookresearch/deepsdf</a>
                        </p>
                        <p className="item-strip-abstract">In this work, we introduce DeepSDF, a learned continuous Signed Distance Function (SDF) representation of a class of shapes that enables high quality shape representation, interpolation and completion from partial and noisy 3D input data.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/3d-reconstruction"><span className="badge badge-primary">3D RECONSTRUCTION</span></a>
                          <a href="/task/3d-shape-representation"><span className="badge badge-primary">3D SHAPE REPRESENTATION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 110</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          1.80 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/deepsdf-learning-continuous-signed-distance" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/deepsdf-learning-continuous-signed-distance#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 546785 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/unsupervised-data-augmentation-1">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1904.12848.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/unsupervised-data-augmentation-1">Unsupervised Data Augmentation for Consistency Training</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="item-conference-link">
                            <a href="/conference/arxiv-2019-4">
                              arXiv 2019
                            </a>
                          </span> • <a href="https://github.com/google-research/uda" style={{fontSize: '13px'}}>google-research/uda</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">When trained with 10% of the labeled set, UDA improves the top-1/top-5 accuracy from 55. 1/77. 3% to 68. 7/88. 5%.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/data-augmentation"><span className="badge badge-primary">DATA AUGMENTATION</span></a>
                          <a href="/task/text-classification"><span className="badge badge-primary">TEXT CLASSIFICATION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 191</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          1.43 stars / hour
                        </div>
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 501368 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/unsupervised-data-augmentation">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/112962.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/unsupervised-data-augmentation">Unsupervised Data Augmentation</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="item-conference-link">
                            <a href="/conference/arxiv-2019-4">
                              arXiv 2019
                            </a>
                          </span> • <a href="https://github.com/google-research/uda" style={{fontSize: '13px'}}>google-research/uda</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">Unlike previous methods that use random noise such as Gaussian noise or dropout noise, UDA has a small twist in that it makes use of harder and more realistic noise generated by state-of-the-art data augmentation methods.</p>
                        <div className="sota">
                          <p>
                            <a href="/sota/sentiment-analysis-on-yelp-binary">
                              <i className="em em-trophy" />
                            </a>
                            &nbsp;SOTA for
                            <a className="sota-task" href="/sota/sentiment-analysis-on-yelp-binary">
                              Sentiment Analysis
                              on Yelp Binary classification
                            </a>
                          </p>
                        </div>
                        <p>
                          <a href="/task/data-augmentation"><span className="badge badge-primary">DATA AUGMENTATION</span></a>
                          <a href="/task/sentiment-analysis"><span className="badge badge-primary">SENTIMENT ANALYSIS</span></a>
                          <a href="/task/text-classification"><span className="badge badge-primary">TEXT CLASSIFICATION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 191</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          1.43 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/unsupervised-data-augmentation" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/unsupervised-data-augmentation#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 395695 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="https://github.com/deepinsight/insightface">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1905.00641.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="https://github.com/deepinsight/insightface">insightface</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">2 May 2019</span> • <a href="https://github.com/deepinsight/insightface" style={{fontSize: '13px'}}>deepinsight/insightface</a> • <img src="/static/frameworks/mxnet.53c607808766.png" />
                        </p>
                        <p className="item-strip-abstract">Face Analysis Project on MXNet</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/face-detection"><span className="badge badge-primary">FACE DETECTION</span></a>
                          <a href="/task/face-verification"><span className="badge badge-primary">FACE VERIFICATION</span></a>
                          <a href="/task/multi-task-learning"><span className="badge badge-primary">MULTI-TASK LEARNING</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 4,205</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          1.27 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/search?q=deepinsight/insightface" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="https://github.com/deepinsight/insightface" className="badge badge-dark" onclick="captureOutboundLink('https://github.com/deepinsight/insightface'); return false;">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 542487 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/latent-odes-for-irregularly-sampled-time">
                      <div className="item-image" style={{backgroundImage: 'url("/media/thumbnails/papergithubrepo/pgr-0000542487-ff0cc927.gif")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/latent-odes-for-irregularly-sampled-time">Latent ODEs for Irregularly-Sampled Time Series</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">8 Jul 2019</span> • <a href="https://github.com/YuliaRubanova/latent_ode" style={{fontSize: '13px'}}>YuliaRubanova/latent_ode</a>
                        </p>
                        <p className="item-strip-abstract">Time series with non-uniform intervals occur in many applications, and are difficult to model using standard recurrent neural networks (RNNs).</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/time-series"><span className="badge badge-primary">TIME SERIES</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 29</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.86 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/latent-odes-for-irregularly-sampled-time" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/latent-odes-for-irregularly-sampled-time#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 502710 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/gradio-hassle-free-sharing-and-testing-of-ml">
                      <div className="item-image" style={{backgroundImage: 'url("/media/thumbnails/papergithubrepo/pgr-0000502710-68f2ef2f.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/gradio-hassle-free-sharing-and-testing-of-ml">Gradio: Hassle-Free Sharing and Testing of ML Models in the Wild</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">6 Jun 2019</span> • <a href="https://github.com/gradio-app/gradio" style={{fontSize: '13px'}}>gradio-app/gradio</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">Their feedback identified that Gradio should support a variety of interfaces and frameworks, allow for easy sharing of the interface, allow for input manipulation and interactive inference by the domain expert, as well as allow embedding the interface in iPython notebooks.</p>
                        <div className="sota">
                        </div>
                        <p>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 77</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.85 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/gradio-hassle-free-sharing-and-testing-of-ml" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/gradio-hassle-free-sharing-and-testing-of-ml#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 542312 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/a-baseline-for-3d-multi-object-tracking">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1907.03961.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/a-baseline-for-3d-multi-object-tracking">A Baseline for 3D Multi-Object Tracking</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">9 Jul 2019</span> • <a href="https://github.com/xinshuoweng/AB3DMOT" style={{fontSize: '13px'}}>xinshuoweng/AB3DMOT</a>
                        </p>
                        <p className="item-strip-abstract">Although our baseline system is a straightforward combination of standard methods, we obtain the state-of-the-art results.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/autonomous-driving"><span className="badge badge-primary">AUTONOMOUS DRIVING</span></a>
                          <a href="/task/multi-object-tracking"><span className="badge badge-primary">MULTI-OBJECT TRACKING</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 48</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.71 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/a-baseline-for-3d-multi-object-tracking" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/a-baseline-for-3d-multi-object-tracking#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 474907 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/190600091">
                      <div className="item-image" style={{backgroundImage: 'url("/media/thumbnails/papergithubrepo/pgr-0000474907-4b384600.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/190600091">Deep Learning Recommendation Model for Personalization and Recommendation Systems</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">31 May 2019</span> • <a href="https://github.com/facebookresearch/dlrm" style={{fontSize: '13px'}}>facebookresearch/dlrm</a> • <img src="/static/frameworks/pytorch.28a00358044f.png" />
                        </p>
                        <p className="item-strip-abstract">With the advent of deep learning, neural network-based recommendation models have emerged as an important tool for tackling personalization and recommendation tasks.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/recommendation-systems"><span className="badge badge-primary">RECOMMENDATION SYSTEMS</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 1,024</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.59 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/190600091" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/190600091#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 542482 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/towards-robust-monocular-depth-estimation">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1907.01341.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/towards-robust-monocular-depth-estimation">Towards Robust Monocular Depth Estimation: Mixing Datasets for Zero-Shot Cross-Dataset Transfer</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">2 Jul 2019</span> • <a href="https://github.com/intel-isl/MiDaS" style={{fontSize: '13px'}}>intel-isl/MiDaS</a> • <img src="/static/frameworks/pytorch.28a00358044f.png" />
                        </p>
                        <p className="item-strip-abstract">In particular, we propose a training objective that is invariant to changes in depth range and scale.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/monocular-depth-estimation"><span className="badge badge-primary">MONOCULAR DEPTH ESTIMATION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 21</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.57 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/towards-robust-monocular-depth-estimation" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/towards-robust-monocular-depth-estimation#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 41518 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/mctorch-a-manifold-optimization-library-for">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1810.01811.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/mctorch-a-manifold-optimization-library-for">McTorch, a manifold optimization library for deep learning</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">3 Oct 2018</span> • <a href="https://github.com/mctorch/mctorch" style={{fontSize: '13px'}}>mctorch/mctorch</a> • <img src="/static/frameworks/pytorch.28a00358044f.png" />
                        </p>
                        <p className="item-strip-abstract">In this paper, we introduce McTorch, a manifold optimization library for deep learning that extends PyTorch.</p>
                        <div className="sota">
                        </div>
                        <p>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 97</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.55 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/mctorch-a-manifold-optimization-library-for" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/mctorch-a-manifold-optimization-library-for#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 526413 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/fairnas-rethinking-evaluation-fairness-of">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1907.01845.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/fairnas-rethinking-evaluation-fairness-of">FairNAS: Rethinking Evaluation Fairness of Weight Sharing Neural Architecture Search</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">3 Jul 2019</span> • <a href="https://github.com/fairnas/FairNAS" style={{fontSize: '13px'}}>fairnas/FairNAS</a> • <img src="/static/frameworks/pytorch.28a00358044f.png" />
                        </p>
                        <p className="item-strip-abstract">The ability to rank models by its real strength is the key to Neural Architecture Search.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/architecture-search"><span className="badge badge-primary">NEURAL ARCHITECTURE SEARCH</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 132</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.52 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/fairnas-rethinking-evaluation-fairness-of" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/fairnas-rethinking-evaluation-fairness-of#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 501365 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/xlnet-generalized-autoregressive-pretraining">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1906.08237.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/xlnet-generalized-autoregressive-pretraining">XLNet: Generalized Autoregressive Pretraining for Language Understanding</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">19 Jun 2019</span> • <a href="https://github.com/zihangdai/xlnet" style={{fontSize: '13px'}}>zihangdai/xlnet</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">With the capability of modeling bidirectional contexts, denoising autoencoding based pretraining like BERT achieves better performance than pretraining approaches based on autoregressive language modeling.</p>
                        <div className="sota">
                          <p>
                            <a href="/sota/natural-language-inference-on-quora-question">
                              <i className="em em-trophy" />
                            </a>
                            &nbsp;SOTA for
                            <a className="sota-task" href="/sota/natural-language-inference-on-quora-question">
                              Natural Language Inference
                              on Quora Question Pairs
                            </a>
                          </p>
                        </div>
                        <p>
                          <a href="/task/document-ranking"><span className="badge badge-primary">DOCUMENT RANKING</span></a>
                          <a href="/task/language-modelling"><span className="badge badge-primary">LANGUAGE MODELLING</span></a>
                          <a href="/task/natural-language-inference"><span className="badge badge-primary">NATURAL LANGUAGE INFERENCE</span></a>
                          <a href="/task/question-answering"><span className="badge badge-primary">QUESTION ANSWERING</span></a>
                          <a href="/task/reading-comprehension"><span className="badge badge-primary">READING COMPREHENSION</span></a>
                          <a href="/task/semantic-textual-similarity"><span className="badge badge-primary">SEMANTIC TEXTUAL SIMILARITY</span></a>
                          <a href="/task/sentiment-analysis"><span className="badge badge-primary">SENTIMENT ANALYSIS</span></a>
                          <a href="/task/text-classification"><span className="badge badge-primary">TEXT CLASSIFICATION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 3,774</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.49 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/xlnet-generalized-autoregressive-pretraining" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/xlnet-generalized-autoregressive-pretraining#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 544440 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/theano-a-python-framework-for-fast">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1605.02688.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/theano-a-python-framework-for-fast">Theano: A Python framework for fast computation of mathematical expressions</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">9 May 2016</span> • <a href="https://github.com/leonoverweel/bibtex-python-package-citations" style={{fontSize: '13px'}}>leonoverweel/bibtex-python-package-citations</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">Since its introduction, it has been one of the most used CPU and GPU mathematical compilers - especially in the machine learning community - and has shown steady performance improvements.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/dimensionality-reduction"><span className="badge badge-primary">DIMENSIONALITY REDUCTION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 31</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.41 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/theano-a-python-framework-for-fast" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/theano-a-python-framework-for-fast#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 517339 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/bag-of-tricks-for-image-classification-with">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1812.01187.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/bag-of-tricks-for-image-classification-with">Bag of Tricks for Image Classification with Convolutional Neural Networks</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="item-conference-link">
                            <a href="/conference/cvpr-2019-6">
                              CVPR 2019
                            </a>
                          </span> • <a href="https://github.com/PaddlePaddle/models" style={{fontSize: '13px'}}>PaddlePaddle/models</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">Much of the recent progress made in image classification research can be credited to training procedure refinements, such as changes in data augmentations and optimization methods.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/image-classification"><span className="badge badge-primary">IMAGE CLASSIFICATION</span></a>
                          <a href="/task/object-detection"><span className="badge badge-primary">OBJECT DETECTION</span></a>
                          <a href="/task/semantic-segmentation"><span className="badge badge-primary">SEMANTIC SEGMENTATION</span></a>
                          <a href="/task/transfer-learning"><span className="badge badge-primary">TRANSFER LEARNING</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 1,970</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.41 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/bag-of-tricks-for-image-classification-with" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/bag-of-tricks-for-image-classification-with#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 517341 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/dureader-a-chinese-machine-reading">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1711.05073.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/dureader-a-chinese-machine-reading">DuReader: a Chinese Machine Reading Comprehension Dataset from Real-world Applications</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="item-conference-link">
                            <a href="/conference/ws-2018-7">
                              WS 2018
                            </a>
                          </span> • <a href="https://github.com/PaddlePaddle/models" style={{fontSize: '13px'}}>PaddlePaddle/models</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">Experiments show that human performance is well above current state-of-the-art baseline systems, leaving plenty of room for the community to make improvements.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/machine-reading-comprehension"><span className="badge badge-primary">MACHINE READING COMPREHENSION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 1,970</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.41 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/dureader-a-chinese-machine-reading" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/dureader-a-chinese-machine-reading#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 517340 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/pointer-networks">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1506.03134.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/pointer-networks">Pointer Networks</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="item-conference-link">
                            <a href="/conference/neurips-2015-12">
                              NeurIPS 2015
                            </a>
                          </span> • <a href="https://github.com/PaddlePaddle/models" style={{fontSize: '13px'}}>PaddlePaddle/models</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">It differs from the previous attention attempts in that, instead of using attention to blend hidden units of an encoder to a context vector at each decoder step, it uses attention as a pointer to select a member of the input sequence as the output.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/combinatorial-optimization"><span className="badge badge-primary">COMBINATORIAL OPTIMIZATION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 1,970</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.41 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/pointer-networks" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/pointer-networks#code" className="badge badge-dark">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 119411 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="https://github.com/graykode/nlp-tutorial&quot;">
                      <div className="item-image" style={{backgroundImage: 'url("/media/thumbnails/papergithubrepo/pgr-0000119411-1e5ac3f7.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="https://github.com/graykode/nlp-tutorial">nlp-tutorial</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="item-conference-link">
                            <a href="/conference/naacl-2019-6">
                              NAACL 2019
                            </a>
                          </span> • <a href="https://github.com/graykode/nlp-tutorial" style={{fontSize: '13px'}}>graykode/nlp-tutorial</a> • <img src="/static/frameworks/pytorch.28a00358044f.png" />
                        </p>
                        <p className="item-strip-abstract">Natural Language Processing Tutorial for Deep Learning Researchers</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/common-sense-reasoning"><span className="badge badge-primary">COMMON SENSE REASONING</span></a>
                          <a href="/task/cross-lingual-natural-language-inference"><span className="badge badge-primary">CROSS-LINGUAL NATURAL LANGUAGE INFERENCE</span></a>
                          <a href="/task/named-entity-recognition-ner"><span className="badge badge-primary">NAMED ENTITY RECOGNITION</span></a>
                          <a href="/task/question-answering"><span className="badge badge-primary">QUESTION ANSWERING</span></a>
                          <a href="/task/sentence-classification"><span className="badge badge-primary">SENTENCE CLASSIFICATION</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg></div></ion-icon> 3,301</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.39 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/search?q=graykode/nlp-tutorial" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" />
                                </svg>
                              </div>
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="https://github.com/graykode/nlp-tutorial" className="badge badge-dark" onclick="captureOutboundLink('https://github.com/graykode/nlp-tutorial'); return false;">
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
                  </div>
                </div>
                <div className="row infinite-item item">
                  {/* 521020 */}
                  <div className="col-lg-3 item-image-col">
                    <a href="/paper/sequential-attention-based-network-for-noetic">
                      <div className="item-image" style={{backgroundImage: 'url("/static/thumbs/1901.02609.jpg")'}}> </div>
                    </a>
                  </div>
                  <div className="col-lg-9 item-col">
                    <div className="row">
                      <div className="col-lg-9 item-content">
                        <h1><a href="/paper/sequential-attention-based-network-for-noetic">Sequential Attention-based Network for Noetic End-to-End Response Selection</a></h1>
                        <p style={{paddingTop: '2px'}}>
                          <span className="author-name-text">9 Jan 2019</span> • <a href="https://github.com/alibaba/esim-response-selection" style={{fontSize: '13px'}}>alibaba/esim-response-selection</a> • <img src="/static/frameworks/tf.3f40b19378d1.png" />
                        </p>
                        <p className="item-strip-abstract">The noetic end-to-end response selection challenge as one track in Dialog System Technology Challenges 7 (DSTC7) aims to push the state of the art of utterance classification for real world goal-oriented dialog systems, for which participants need to select the correct next utterances from a set of candidates for the multi-turn context.</p>
                        <div className="sota">
                        </div>
                        <p>
                          <a href="/task/goal-oriented-dialog"><span className="badge badge-primary">GOAL-ORIENTED DIALOG</span></a>
                        </p>
                      </div>
                      <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">
                          <span className="badge badge-secondary"><ion-icon name="star" role="img" aria-label="star" className="icon hydrated"><div className="icon-inner" /></ion-icon> 270</span>
                        </div>
                        <div className="stars-accumulated text-center">
                          0.38 stars / hour
                        </div>
                        <div className="entity" style={{marginBottom: '20px'}}>
                          <a href="/paper/sequential-attention-based-network-for-noetic" className="badge badge-light">
                            <ion-icon name="document" role="img" aria-label="document" className="icon hydrated">
                              <div className="icon-inner" />
                            </ion-icon> Paper
                          </a>
                          <br />
                          <a href="/paper/sequential-attention-based-network-for-noetic#code" className="badge badge-dark">
                            <ion-icon name="logo-github" role="img" aria-label="logo github" className="icon hydrated">
                              <div className="icon-inner" />
                            </ion-icon> Code
                          </a>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              <div className="loading" style={{display: 'none'}}>
                <div className="loader-ellips infinite-scroll-request">
                  <span className="loader-ellips__dot" />
                  <span className="loader-ellips__dot" />
                  <span className="loader-ellips__dot" />
                  <span className="loader-ellips__dot" />
                </div>
              </div>
              <a className="infinite-more-link" href="?page=3" />
            </div>
          </div>

      </div>
    );
  }
}

export default Recommendation;
