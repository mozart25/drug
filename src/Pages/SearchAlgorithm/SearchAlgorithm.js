import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header/Header';
import './SearchAlgorithm.scss';

class SearchAlgorithm extends React.Component {

  render() {
    return (
      <div className='searchalgorithm-container'>
        <Helmet>
          <title>Drug AI algorithm recommendation solution-BioAI</title>
        </Helmet>
        <Header />
        <div className='sa-main'>
          <div className='sa-main-wrapper'>
            <h1> Drug AI Algorithm Recommendation Solution </h1>
          </div>
          <div className='sa-main-introduce'>
            <p> {`For you who are having a hard time researching drug artificial intelligence,
                  this solution will provide tips for artificial intelligence research.
                  This solution provide information of four major stages of artificial intelligence
                  research, data preparation, data preprocessing, modeling, model modification.
                  Choose the right data for your research in the first step. Select the appropriate
                  methodology for the data at this stage. Information on the papers, blogs and codes
                  of data sources and algorithms that can help you in this selection process will also
                  be provided. If this is also difficult, choose a method based on the importance score
                  we provide. You can proceed with the artificial intelligence study you want with the
                  final selected results.`}</p>
            <br/>
          </div>
        </div>
        <div className="main-bg iframe-search-wrapper">
          <div className="c-search-card iframe-main-search">
            <iframe className="frame-customizing" src="http://52.79.200.208/services/process" height="100%" width="100%"></iframe> 
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAlgorithm;
