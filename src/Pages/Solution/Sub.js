import React from 'react';
import './Sub.scss';
import SearchDrug from '../../Components/SearchDrug/SearchDrug';

class Sub extends React.Component {

  render() {
    return (
      <div className="sub-wrapper">
        <main role="search">
          <div>
            <p className="sub-search-title">
            {`Drug AI algorithm
              
              rocommendation solution`}</p>
            <SearchDrug
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Sub;
