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
          <div className="drug-search-position">
            <SearchDrug
            />
          </div>
        </main>
        <div className="main-bg iframe-wrapper">
          <div className="c-card-interaction iframe-1st-compo">
            <iframe className="frame-customizing-interaction" style={{border:'0.5px solid lightgray'}} src="http://bioai.s3-website.ap-northeast-2.amazonaws.com/acetaminophen" height="100%" width="100%"></iframe>
          </div>
          <div className="iframe-compo-divide"> </div>
          <div className="c-card-interaction iframe-2nd-compo">
            <iframe className="frame-customizing-interaction" style={{border:'0.5px solid lightgray'}} src="http://bioai.s3-website.ap-northeast-2.amazonaws.com/escitalopram" height="100%" width="100%"></iframe>
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
          <ol>
            <li className="research-paper">
              <p><span>Baranchuk A</span>1, <span>Simpson CS</span>, <span>Methot M</span>, <span>Gibson K</span>, <span>Strum D.</span>:
                  <a href="https://www.onlinecjc.ca/article/S0828-282X(08)70643-3/abstract"><span style={{fontWeight: "800", textDecoration:"none", color:"black"}}> Corrected QT interval prolongation after an overdose of
                  escitalopram, morphine, oxycodone, zopiclone and benzodiazepines.</span></a>
                  <span>Adv Ther.</span> <span>Can J Cardiol.</span> 2008 Jul;24(7):e38-40. </p>
            </li>
            <li className="research-paper">
              <p><span>Miller L</span>1, <span>Steinmetz Pater K</span>2, <span>Corman S</span>3.: <a href="https://www.sciencedirect.com/science/article/abs/pii/S1551741114003301"><span style={{fontWeight: "800", textDecoration:"none", color:"black"}}>The role of
                  clinical decision support in pharmacist response to
                  drug-interaction alerts Res Social Adm Pharm.</span></a> 2015
                  May-Jun;11(3):480-6. doi: 10.1016/j.sapharm.2014.09.005.
                  Epub 2014 Oct 13.</p>
            </li>
            <li className="research-paper">
              <p><span>von Moltke LL</span>1, <span>Greenblatt DJ</span>, <span>Giancarlo GM</span>, <span>Granda BW</span>,
                  <span>Harmatz JS</span>, <span>Shader RI</span>. : <a href="http://dmd.aspetjournals.org/content/29/8/1102.short"> <span style={{fontWeight: "800", textDecoration:"none", color:"black"}}>Escitalopram (S-citalopram) and
                  its metabolites in vitro: cytochromes mediating biotransformation,
                  inhibitory effects, and comparison to R-citalopram J Clin Pharmacol.
                  Drug Metab Dispos.</span></a> 2001 Aug;29(8):1102-9.</p>
            </li>
            <li className="research-paper">
              <p><span>Hashmi AT</span>1, <span>Gupta SS</span>2, <span>Shankar S</span>2, <span>Seneviratne C</span>2,
                  <span>Yoon TS</span>2, <span>Kupfer Y</span>2.:  <a href="https://search.proquest.com/openview/538a90b0d1940de99b6be3dfefcc7708/1?pq-origsite=gscholar&cbl=43703"> <span style={{fontWeight: "800", textDecoration:"none", color:"black"}}>Escitalopram/methylthioninium chloride
                  interaction</span></a> <span>Am J Ther.</span> 2019 Mar 6. doi: 10.1097/MJT.0000000000000897.</p>
            </li>
            </ol>
        </div>
      </div>
    );
  }
}

export default withRouter(Interaction);
