import React from 'react';
import './Search.scss';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '../../Components/Navigation/Navigation';
import SearchDrug from '../../Components/SearchDrug/SearchDrug';

class Search extends React.Component {

  constructor(){
  super();

  this.state = {
    isResultOn: false,
  }
}

  render() {
    return (
      <div className="search-wrapper">
      <Helmet>
        <title>Drug Data Integration service-BioAI</title>
      </Helmet>
        <header className="header-bg">
          <Navigation />
        </header>
        <main role="search" className="main-wrapper">
          <div className="main-comment">
            <p>
              {`Drug-Drug Interaction Integrated Database`}
            </p>
          </div>
          <div>
            <SearchDrug
            />
          </div>
        </main>
        <div className="main-bg">
          <div className="main-picture">
            <img src={require(`./drug_database.png`)} alt=""/>
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

export default withRouter(Search);
