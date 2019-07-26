import React from 'react';
import './Sub.scss';
import SearchSolution from '../../Components/SearchDrug/SearchSolution';

class Sub extends React.Component {

  render() {
    return (
      <div className="sub-wrapper">
        <main role="search">
          <div>
            <p className="sub-search-title">
            {`Drug AI algorithm rocommendation solution`}</p>
            <SearchSolution
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Sub;
