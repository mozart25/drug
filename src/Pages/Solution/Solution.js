import React from 'react';
import './Solution.scss';

class Solution extends React.Component {

  render() {
    return (
      <div className="l-section-flex">
        <div className="l-wrapper">
          <div className="c-hero_container">
            <div className="c-hero">
              <h1 className="c-hero_headline">
                Drug AI algorithm recommendation service for your easy and fast drug AI study
              </h1>
              <div className="c-hero_subline">
                For your drug AI study, search for some intriguing information!
              </div>
            </div>
            <div className="c-search">
              <div className="c-card">
                <iframe style={{border:'0.5px solid lightgray'}} src="http://mzrt-drug-deploy.s3-website.ap-northeast-2.amazonaws.com/sub" height="421px" width="60%"></iframe>
              </div>
              <div className="c-sneak"> Search! </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Solution;
