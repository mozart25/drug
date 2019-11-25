import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SearchDrugNew from '../../Components/SearchDrug/SearchDrugNew';
import Header from '../../Components/Header/Header';
import './Interaction.scss';

class InteractionNew2 extends React.Component {
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
        <main
          role="search"
          className="main-wrapper"
          style={{ minHeight: '310px', display: 'relative' }}
        >
          <div className="main-comment">
            <p>{`Drug-Drug Interaction Prediction Solution`}</p>
          </div>
          <div
            className="drug-search-position"
            style={{ display: 'absolute', right: '53px' }}
          >
            <SearchDrugNew />
          </div>
        </main>
        <div className="main-bg iframe-wrapper">
          <div className="c-card-interaction iframe-1st-compo">
            <iframe
              className="frame-customizing-interaction"
              style={{ border: '0.5px solid lightgray' }}
              src="https://bioai.kr/services/valsartan"
              height="100%"
              width="100%"
            ></iframe>
          </div>
          <div className="iframe-compo-divide"> </div>
          <div className="c-card-interaction iframe-2nd-compo">
            <iframe
              className="frame-customizing-interaction"
              style={{ border: '0.5px solid lightgray' }}
              src="https://bioai.kr/services/amlodipine"
              height="100%"
              width="100%"
            ></iframe>
          </div>
        </div>
        <div>
          <div className="divide-line"> </div>
        </div>
        <div className="interaction-result">
          <h2 style={{ marginBottom: '10px', color: '#351c75' }}>
            {' '}
            Drug-Drug Interaction from previous research
          </h2>
          <h2> Valsartan & Amlodipine Interaction </h2>
          <p> No material found</p>
        </div>
        <div>
          <div className="divide-line"> </div>
        </div>
        <div className="interaction-result">
          <h2> Valsartan & Amlodipine Interaction </h2>
          <p>
            {' '}
            The metabolism of Valsartan can be increased when combined with
            Amlodipine.
          </p>
        </div>
        <div>
          <div className="divide-line"> </div>
        </div>
        <div className="interaction-result">
          <h2> Preliminary Research </h2>
          <ol>
            <li className="research-paper">
              <p>
                {' '}
                <span>Seong SJ</span>1,2, <span>Ohk B</span>1,2,{' '}
                <span>Kang WY</span>1,2, <span>Gwon MR</span>1,2,
                <span>Kim BK</span>1,2, <span>Cho S</span>1,2,{' '}
                <span>Yang DH</span>3, <span>Lee HW</span>4,5,
                <span>Yoon YR</span>6,7.:{' '}
                <a href="https://link.springer.com/article/10.1007/s12325-019-00976-9">
                  <span
                    style={{
                      fontWeight: '800',
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    Pharmacokinetic Drug Interactions Between Amlodipine,
                    Valsartan, and Rosuvastatin in Healthy Volunteers.
                  </span>
                </a>{' '}
                <span>Adv Ther.</span> 2019 Jul;36(7):1642-1656. doi:
                10.1007/s12325-019-00976-9. Epub 2019 May 22.
              </p>
            </li>
            <li className="research-paper">
              <p>
                <span>Plosker GL</span>1, <span>Robinson DM</span>:{' '}
                <a href="https://link.springer.com/article/10.2165/00003495-200868030-00008">
                  <span
                    style={{
                      fontWeight: '800',
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    Amlodipine/Valsartan, Fixed-Dose Combination in
                    Hypertension.
                  </span>
                </a>{' '}
                <span>Drugs.</span> 2008;68(3):373-81.
              </p>
            </li>
            <li className="research-paper">
              <p>
                <span>Bhad P</span>1, <span>Ayalasomayajula S</span>,{' '}
                <span>Karan R</span>, <span>Leon S</span>,{' '}
                <span>Riviere GJ</span>, <span>Sunkara G</span>,{' '}
                <span>Jarugula V.</span> :{' '}
                <a href="https://link.springer.com/article/10.2165/00003495-200868030-00008">
                  <span
                    style={{
                      fontWeight: '800',
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    Evaluation of Pharmacokinetic Interactions Between
                    Amlodipine, Valsartan, and Hydrochlorothiazide in Patients
                    With Hypertension.
                  </span>
                </a>{' '}
                <span>J Clin Pharmacol.</span> 2011 Jun;51(6):933-42. doi:
                10.1177/0091270010376963. Epub 2010 Sep 17.
              </p>
            </li>
            <li className="research-paper">
              <p>
                <span>Frampton JE</span>1, <span>Scott LJ.</span>:{' '}
                <a href="https://link.springer.com/article/10.2165/00003495-200868030-00008">
                  <span
                    style={{
                      fontWeight: '800',
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    Amlodipine/Valsartan Single-Pill Combination.
                  </span>
                </a>{' '}
                <span>Am J Cardiovasc Drugs.</span> 2009;9(5):309-30. doi:
                10.2165/11201120-000000000-00000.
              </p>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default withRouter(InteractionNew2);
