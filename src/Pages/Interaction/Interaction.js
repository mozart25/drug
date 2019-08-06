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
            <iframe className="frame-customizing" style={{border:'0.5px solid lightgray'}} src="http://localhost:3000/acetaminophen" height="100%" width="100%"></iframe>
          </div>
          <div className="iframe-compo-divide"> </div>
          <div className="c-card iframe-2nd-compo">
            <iframe className="frame-customizing" style={{border:'0.5px solid lightgray'}} src="http://localhost:3000/escitalopram" height="100%" width="100%"></iframe>
          </div>
        </div>
        <div>
          <div className="divide-line"> </div>
        </div>
        <div className="interaction-result">
          <h2> Acetaminophen & Escitalopram Interaction </h2>
          <p> The metabolism of Escitalopram can be increased when combined with Acetaminophen.</p>
        </div>
        <div>
          <div className="divide-line"> </div>
        </div>
        <div className="interaction-result">
          <h2> Preliminary Research </h2>
          <p>{`1.    Baranchuk A1, Simpson CS, Methot M, Gibson K, Strum D.:
              Corrected QT interval prolongation after an overdose of
              escitalopram, morphine, oxycodone, zopiclone and benzodiazepines.
              Adv Ther. Can J Cardiol. 2008 Jul;24(7):e38-40.`} </p>
          <p>{`2.    Miller L1, Steinmetz Pater K2, Corman S3.: The role of
              clinical decision support in pharmacist response to
              drug-interaction alerts Res Social Adm Pharm. 2015
              May-Jun;11(3):480-6. doi: 10.1016/j.sapharm.2014.09.005.
              Epub 2014 Oct 13.`} </p>
          <p>{`3.   von Moltke LL1, Greenblatt DJ, Giancarlo GM, Granda BW,
              Harmatz JS, Shader RI. : Escitalopram (S-citalopram) and
              its metabolites in vitro: cytochromes mediating biotransformation,
              inhibitory effects, and comparison to R-citalopram J Clin Pharmacol.
              Drug Metab Dispos. 2001 Aug;29(8):1102-9.`} </p>
          <p>{`4.    Hashmi AT1, Gupta SS2, Shankar S2, Seneviratne C2,
              Yoon TS2, Kupfer Y2.:  Escitalopram/methylthioninium chloride
              interaction Am J Ther. 2019 Mar 6. doi: 10.1097/MJT.0000000000000897.`} </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Interaction);
