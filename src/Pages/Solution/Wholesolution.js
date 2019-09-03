import React from 'react';
import SubSearchSolution from '../../Components/SearchDrug/SubSearchSolution'
import './Solution.scss';

class WholeSolution extends React.Component {

  render() {
    return (
      <div className="l-section-flex">
        <div className="l-wrapper">
          <div className="c-hero_container">
            <div className="c-hero">
              <h1 className="c-hero_headline">
                Drug AI algorithm recommendation solution for your easy and fast drug AI study
              </h1>
              <div className="c-hero_subline">
                Search your research topic in the search box on the right (eg. Drug-Drug Interaction). With search results, choose the steps needed for AI study. This will give you the right direction for developing AI algorithms.
              </div>
            </div>
            <div className="c-search">
              <div className="c-card">
                <h1> Search your Drug AI study subject </h1>
                <SubSearchSolution />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WholeSolution;
