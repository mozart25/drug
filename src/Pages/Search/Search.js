import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../Components/Navigation/Navigation';
import SearchDrug from '../../Components/SearchDrug/SearchDrug';
import Header from '../../Components/Header/Header';
import './Search.scss';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      isResultOn: false
    };
  }

  render() {
    return (
      <div className="search-wrapper">
        <Helmet>
          <title>Drug Data Integration service-BioAI</title>
        </Helmet>
        <Header />
        <main role="search" className="main-wrapper">
          <div className="main-comment">
            <p>{`Drug-Drug Interaction Prediction Solution`}</p>
          </div>
          <div
            id="search-drug-wrapper"
            style={{ display: 'flex', marginTop: '5%' }}
          >
            <SearchDrug />
          </div>
        </main>
        <div className="main-bg">
          <div className="main-picture">
            <img
              src="https://druginteraction.s3.ap-northeast-2.amazonaws.com/drug_database.png"
              alt=""
            />
          </div>
        </div>
        <footer className="footer-wrapper">
          <div className="footer-row">
            <div className="footer-domain">
              <h1 className="footer-brand">BioAI</h1>
              <p className="introduce">
                {`The BioAI drug-drug interaction integrated database
                  is a unique bioinformatics and cheminformatics resource that
                  combines detailed drug data with comprehensive drug target
                  information.`}
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Search;
