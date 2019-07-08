import React from 'react';
import './Search.scss';
import Navigation from '../../Components/Navigation/Navigation';
import SearchDrug from '../../Components/SearchDrug/SearchDrug';

class Search extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
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
            <SearchDrug />
          </div>

          <div className="main-bg">
            <div className="main-picture">
              <img src={require(`./database.png`)} alt=""/>
            </div>
          </div>
        </main>

        <footer className="footer-wrapper">
          <div className="row">
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
