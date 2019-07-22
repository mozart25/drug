import React from 'react';
import './Solution.scss';

class Solution extends React.Component {

  render() {
    return (
      <div className="solution-container">
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

        <div className="main-container">
          <div className="container content content-buffer">
            <div className="sol-title">
              <div className="sol-row">
                <div className="sol-col-lg-6">
                  <h1 className="solution-page-title">Drug AI algorithm recommendation service for your easy and fast drug AI study</h1>
                </div>
              </div>
            </div>
            <div align='center'>
              <iframe style={{border:'0.5px solid lightgray'}} src="http://mzrt-drug-deploy.s3-website.ap-northeast-2.amazonaws.com/sub" height="421px" width="60%"></iframe>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Solution;
