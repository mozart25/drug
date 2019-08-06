import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SearchDrug from '../../Components/SearchDrug/SearchDrug';
import Header from '../../Components/Header/Header';
import './Interaction.scss';

class Interaction extends React.Component {

  constructor(){
  super();

  this.state = {
    isResultOn: false
  }
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
            <p>
              {`Drug-Drug Interaction Integrated Database`}
            </p>
          </div>
          <div>
            <SearchDrug
            />
          </div>
        </main>
        <div className="main-bg iframe-wrapper">
          <div className="c-card iframe-1st-compo">
            <iframe style={{border:'0.5px solid lightgray'}} src="http://localhost:3000/acetaminophen" height="100%" width="100%"></iframe>
          </div>
          <div className="c-card iframe-2nd-compo">
            <iframe style={{border:'0.5px solid lightgray'}} src="http://localhost:3000/escitalopram" height="100%" width="100%"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Interaction);
