import React from 'react';
import './Losartan.scss';
import Navigation from '../../Components/Navigation/Navigation' ;

class Losartan extends React.Component {
  render() {
    return (
      <div>
      <header className="header-bg">
        <Navigation />
      </header>

      <div className="content-container">
        <div className="content-header d-sm-flex align-items-center">
          <h1 className="align-self-center mr-4">Losartan</h1>
          <div className="page-actions justify-content-sm-end mt-2 mt-sm-0">
            <div className="bond-links"><a className="btn bond-link targets" href="#targets">Targets (1)</a><a className="btn bond-link enzymes" href="#enzymes">Enzymes (9)</a><a className="btn bond-link carriers" href="#carriers">Carriers (1)</a><a className="btn bond-link transporters" href="#transporters">Transporters (5)</a></div>
          </div>
        </div>
        <div className="card-content px-md-4 px-sm-2 pb-md-4 pb-sm-2">
          <h2 id="identification" className="section-header">Identification</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">Name</dt>
            <dd className="col-md-10 col-sm-8">Losartan</dd><dt className="col-md-2 col-sm-4">Accession Number</dt>
            <dd className="col-md-10 col-sm-8">DB00678&nbsp; (APRD00052) </dd><dt className="col-md-2 col-sm-4">Type</dt>
            <dd className="col-md-10 col-sm-8">Small Molecule</dd><dt className="col-md-2 col-sm-4">Groups</dt>
            <dd className="col-md-10 col-sm-8">Approved</dd><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Losartan is an angiotensin-receptor blocker (ARB) that may be used alone or with other agents to treat hypertension. Losartan and its longer acting metabolite, E-3174, lower blood pressure by antagonizing the renin-angiotensin-aldosterone system (RAAS); they compete with angiotensin II for binding to the type-1 angiotensin II receptor (AT1) subtype and prevents the blood pressure increasing effects of angiotensin II. Unlike angiotensin-converting enzyme (ACE) inhibitors, ARBs do not have the adverse effect of dry cough. Losartan may be used to treat hypertension, isolated systolic hypertension, left ventricular hypertrophy and diabetic nephropathy. It may also be used as an alternative agent for the treatment of systolic dysfunction, myocardial infarction, coronary artery disease, and heart failure.</p>
            </dd>
            <dt className="col-md-2 col-sm-4">Structure</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="structure">
                <img src={require(`./losartan.png`)} style={{width: "20%"}} alt=""/>
              </div>
            </dd>
            <dt className="col-md-2 col-sm-4">Synonyms</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list-break">
                <li>(2-butyl-4-chloro-1-{'{'}[2'-(1H-tetrazol-5-yl)biphenyl-4-yl]methyl{'}'}-1H-imidazol-5-yl)methanol</li>
                <li>2-n-butyl-4-chloro-5-hydroxymethyl-1-[(2'-(1H-tetrazol-5-yl)biphenyl-4-yl)methyl]imidazole</li>
                <li>Losartan</li>
              </ul>
            </dd>
            <dt className="col-md-2 col-sm-4">External IDs <a tabIndex={0} role="button" data-toggle="popover" data-content="Codes and identifiers used by other resources and companies, often used before choosing a marketing name." title id="external-identifiers-info" className="drug-info-popup" href="javascript:void(0)" data-original-title="About External Identifiers"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">DUP 89</span><span className="list-separator"> / </span><span className="separated-list-item">HGP-1405</span><span className="list-separator"> / </span><span className="separated-list-item">HGP1405</span><span className="list-separator"> / </span><span className="separated-list-item">MK594</span></span>
              </span>
            </dd>
            <dt className="col-md-2 col-sm-4">Categories</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="category-columns">
                <ul className="list-unstyled table-list">
                  <li><a href="javascript:void(0)">Agents Acting on the Renin-Angiotensin System</a></li>
                  <li><a href="javascript:void(0)">Agents causing angioedema</a></li>
                  <li><a href="javascript:void(0)">Agents causing hyperkalemia</a></li>
                  <li><a href="javascript:void(0)">Angiotensin 2 Receptor Blocker</a></li>
                  <li><a href="javascript:void(0)">Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                  <li><a href="javascript:void(0)">Angiotensin II receptor blockers (ARBs) and diuretics</a></li>
                  <li><a href="javascript:void(0)">Angiotensin II receptor blockers (ARBs), plain</a></li>
                  <li><a href="javascript:void(0)">Angiotensin II Type 1 Receptor Blockers</a></li>
                  <li><a href="javascript:void(0)">Angiotensin II Type 2 Receptor Blockers</a></li>
                  <li><a href="javascript:void(0)">Angiotensin Receptor Antagonists</a></li>
                  <li><a href="javascript:void(0)">Antiarrhythmic agents</a></li>
                  <li><a href="javascript:void(0)">Antihypertensive Agents</a></li>
                  <li><a href="javascript:void(0)">Benzene Derivatives</a></li>
                  <li><a href="javascript:void(0)">Biphenyl Compounds</a></li>
                  <li><a href="javascript:void(0)">BSEP/ABCB11 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cardiovascular Agents</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C19 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C19 inhibitors (unknown strength)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C8 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C8 Inhibitors (moderate)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C8 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C9 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Inhibitors (strength unknown)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Substrates (strength unknown)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 Enzyme Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Hypotensive Agents</a></li>
                  <li><a href="javascript:void(0)">Imidazoles</a></li>
                  <li><a href="javascript:void(0)">OAT1/SLC22A6 inhibitors</a></li>
                  <li><a href="javascript:void(0)">P-glycoprotein/ABCB1 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">P-glycoprotein/ABCB1 Substrates</a></li>
                  <li><a href="javascript:void(0)">Potential QTc-Prolonging Agents</a></li>
                  <li><a href="javascript:void(0)">QTc Prolonging Agents</a></li>
                  <li><a href="javascript:void(0)">Tetrazoles</a></li>
                  <li><a href="javascript:void(0)">UGT1A1 Substrates</a></li>
                  <li><a href="javascript:void(0)">UGT1A3 substrates</a></li>
                  <li><a href="javascript:void(0)">UGT2B7 substrates</a></li>
                </ul>
              </div>
            </dd>
            <dt className="col-md-2 col-sm-4">UNII</dt>
            <dd className="col-md-10 col-sm-8"><a target="_blank" rel="noopener noreferrer" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=JMS50MPO89">JMS50MPO89</a></dd><dt className="col-md-2 col-sm-4">CAS number</dt>
            <dd className="col-md-10 col-sm-8">114798-26-4</dd><dt className="col-md-2 col-sm-4">Weight</dt>
            <dd className="col-md-10 col-sm-8">Average: 422.911
              <br />Monoisotopic: 422.162187095 </dd><dt className="col-md-2 col-sm-4">Chemical Formula</dt>
            <dd className="col-md-10 col-sm-8">C<sub>22</sub>H<sub>23</sub>ClN<sub>6</sub>O</dd><dt className="col-md-2 col-sm-4">InChI Key</dt>
            <dd className="col-md-10 col-sm-8">PSIFNNKUMBGKDQ-UHFFFAOYSA-N</dd><dt className="col-md-2 col-sm-4">InChI</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">InChI=1S/C22H23ClN6O/c1-2-3-8-20-24-21(23)19(14-30)29(20)13-15-9-11-16(12-10-15)17-6-4-5-7-18(17)22-25-27-28-26-22/h4-7,9-12,30H,2-3,8,13-14H2,1H3,(H,25,26,27,28)</div>
            </dd><dt className="col-md-2 col-sm-4">IUPAC Name</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">[2-butyl-4-chloro-1-({'{'}4-[2-(2H-1,2,3,4-tetrazol-5-yl)phenyl]phenyl{'}'}methyl)-1H-imidazol-5-yl]methanol</div>
            </dd><dt className="col-md-2 col-sm-4">SMILES</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">CCCCC1=NC(Cl)=C(CO)N1CC1=CC=C(C=C1)C1=CC=CC=C1C1=NNN=N1</div>
            </dd>
          </dl>
          <h2 id="pharmacology" className="section-header">Pharmacology</h2>
          <dl><dt className="col-md-2 col-sm-4">Indication</dt>
            <dd className="col-md-10 col-sm-8">
              <p>May be used as a first line agent to treat uncomplicated hypertension, isolated systolic hypertension and left ventricular hypertrophy. May be used as a first line agent to delay progression of diabetic nephropathy. Losartan may be also used as a second line agent in the treatment of congestive heart failure, systolic dysfunction, myocardial infarction and coronary artery disease in those intolerant of ACE inhibitors.</p>
            </dd><dt className="col-md-2 col-sm-4">Associated Conditions</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li><a href="javascript:void(0)">Diabetic Nephropathies</a></li>
                <li><a href="javascript:void(0)">Heart Failure</a></li>
                <li><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></li>
                <li><a href="javascript:void(0)">Marfan Syndrome</a></li>
                <li><a href="javascript:void(0)">Strokes</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Pharmacodynamics</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Losartan is the first of a class of antihypertensive agents called angiotensin II receptor blockers (ARBs). Losartan and its longer acting active metabolite, E-3174, are specific and selective type-1 angiotensin II receptor (AT1) antagonists which block the blood pressure increasing effects angiotensin II via the renin-angiotensin-aldosterone system (RAAS). RAAS is a homeostatic mechanism for regulating hemodynamics, water and electrolyte balance. During sympathetic stimulation or when renal blood pressure or blood flow is reduced, renin is released from granular cells of the juxtaglomerular apparatus in the kidneys. Renin cleaves circulating angiotensinogen to angiotensin I, which is cleaved by angiotensin converting enzyme (ACE) to angiotensin II. Angiotensin II increases blood pressure by increasing total peripheral resistance, increasing sodium and water reabsorption in the kidneys via aldosterone secretion, and altering cardiovascular structure. Angiotensin II binds to two receptors: AT1 and type-2 angiotensin II receptor (AT2). AT1 is a G-protein coupled receptor (GPCR) that mediates the vasoconstrictive and aldosterone-secreting effects of angiotensin II. Studies performed in recent years suggest that AT2 antagonizes AT1-mediated effects and directly affects long-term blood pressure control by inducing vasorelaxation and increasing urinary sodium excretion. Angiotensin receptor blockers (ARBs) are non-peptide competitive inhibitors of AT1. ARBs block the ability of angiotensin II to stimulate pressor and cell proliferative effects. Unlike ACE inhibitors, ARBs do not affect bradykinin-induced vasodilation. The overall effect of ARBs is a decrease in blood pressure.</p>
            </dd><dt className="col-md-2 col-sm-4">Mechanism of action</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Losartan competitively inhibits the binding of angiotensin II to AT1 in many tissues including vascular smooth muscle and the adrenal glands. Losartan is metabolized to its active metabolite, E-3174, which is 10 to 40 times more potent than losartan and acts as a non-competitive AT1 antagonist. Inhibition of angiotensin II binding to AT1 inhibits its AT1-mediated vasoconstrictive and aldosterone-secreting effects and results in decreased vascular resistance and blood pressure. Losartan is 1,000 times more selective for AT1 than AT2. Inhibition of aldosterone secretion may increase sodium and water excretion while decreasing potassium excretion. Losartan is effective for reducing blood pressure and may be used to treat essential hypertension, left ventricular hypertrophy and diabetic nephropathy.</p>
              <table className="table table-sm responsive-table" id="drug-moa-target-table">
                <thead>
                  <tr>
                    <th>Target</th>
                    <th>Actions</th>
                    <th>Organism</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="badge badge-pill badge-yes mr-2 tips" title data-original-title="Pharmacologically Active">A</span><a href="#BE0000062">Type-1 angiotensin II receptor</a></td>
                    <td>
                      <div className="label label-default">antagonist</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                </tbody>
              </table>
            </dd>
            <dt className="col-md-2 col-sm-4">Absorption</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Losartan is well absorbed and undergoes substantial first-pass metabolism; the systemic bioavailability of losartan is approximately 33%. Mean peak concentrations of losartan and its active metabolite are reached in 1 hour and in 3-4 hours, respectively. While maximum plasma concentrations of losartan and its active metabolite are approximately equal, the AUC of the metabolite is about 4 times as great as that of losartan. When given with a meal, absorption is slows down and Cmax decreases. </p>
            </dd><dt className="col-md-2 col-sm-4">Volume of distribution</dt>
            <dd className="col-md-10 col-sm-8">
              <ul>
                <li>34 L [losartan, healthy subjects]</li>
                <li>12 L [active metabolite, healthy subjects]</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Protein binding</dt>
            <dd className="col-md-10 col-sm-8">
              <p>99.7% protein bound, primarily to albumin</p>
            </dd><dt className="col-md-2 col-sm-4">Metabolism</dt>
            <dd className="col-md-10 col-sm-8">
              <p />
              <p>Hepatic. Losartan is metabolized to a 5-carboxylic acid derivative (E-3174) via an aldehyde intermediate (E-3179) primarily by cytochrome P450 (CYP) 2C9 and CYP3A4. E-3174 is an active metabolite with 10- to 40-fold higher potency than its parent compound, losartan. Approxiamtely 14% of losartan is converted to E-3174; however, the AUC of E-3174 was found to be 4- to 8-fold higher than losartan and E-3174 is considered the main contributor to the pharmacologic effects of this medication. </p>
              <p />
              <ul className="list-unstyled">
                <li><a href="javascript:void(0)"><strong>Losartan</strong> <div className="drugbank-icon icon-arrow-right"></div> E-3179</a>
                  <ul>
                    <li><a href="javascript:void(0)">E-3179 <div className="drugbank-icon icon-arrow-right"></div> E-3174</a></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0)"><strong>Losartan</strong> <div className="drugbank-icon icon-arrow-right"></div> Losartan N2-glucuronide</a></li>
                <li><a href="javascript:void(0)"><strong>Losartan</strong> <div className="drugbank-icon icon-arrow-right"></div> E-3174</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Route of elimination</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Following oral administration of losartan, 35% of the dose is recovered in the urine and about 60% in the feces. Following an intravenous dose, 45% is recovered in the urine and 50% in the feces. </p>
            </dd><dt className="col-md-2 col-sm-4">Half life</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The terminal t<sub>1/2</sub> of losartan is 2 hours. The active metabolite has a half-life of 6-9 hours. </p>
            </dd><dt className="col-md-2 col-sm-4">Clearance</dt>
            <dd className="col-md-10 col-sm-8">
              <ul>
                <li>Total plasma clearance = 600 mL/min <a href="https://www.drugbank.ca/drugs/DB00678">losartan</a></li>
                <li>Total plasma clearance = 50 mL/min [active metabolite]</li>
                <li>Renal clearance = 75 mL/min <a href="https://www.drugbank.ca/drugs/DB00678">losartan</a></li>
                <li>Renal clearance = 25 mL/min [active metabolite] </li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Toxicity</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Hypotension and tachycardia; Bradycardia could occur from parasympathetic (vagal) stimulation, LD<sub>50</sub>= 1000 mg/kg (orally in rat)</p>
            </dd><dt className="col-md-2 col-sm-4">Affected organisms</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>Humans and other mammals</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Pathways</dt>
            <dd className="col-md-10 col-sm-8">
              <table className="table table-sm responsive-table" id="drug-pathways">
                <thead>
                  <tr>
                    <th>Pathway</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="http://smpdb.ca/view/SMP0000162?highlight[compounds][]=DB00678&highlight[proteins][]=DB00678">Losartan Action Pathway</a></td>
                    <td>Drug action</td>
                  </tr>
                </tbody>
              </table>
            </dd><dt className="col-md-2 col-sm-4">Pharmacogenomic Effects/ADRs <a tabIndex={0} role="button" data-toggle="popover" data-content="SNP Mediated Pharmacological Effects and Adverse Drug Reactions (ADRs) is a compilation of drug-specific pharmacogenomic information from various sources and primary literature. — <a target=&quot;_blank&quot; href=&quot;/snp_actions&quot;>Browse all</a>" title id="snp-actions-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About SNP Mediated Effects/ADRs"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8"><span className="not-available">Not Available</span></dd>
          </dl>
          <h2 id="interactions" className="section-header">Interactions</h2>
          <dl><dt className="col-md-2 col-sm-4">Drug Interactions <a tabIndex={0} role="button" data-toggle="popover" data-content="Drug-drug interactions extracted from drug labels and scientific publications. The commercial version includes severity and basis for interaction. — <a target=&quot;_blank&quot; href=&quot;https://drugbankplus.com/data&quot;>Learn More</a>" title id="structured-interactions-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About Drug Interactions"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="nav nav-tabs drug-interaction-tabs">
                <li className="interactions index nav-item"><a className="toggle-row-display nav-link active" data-source="/drugs/DB00678/drug_interactions.json" href="#show-all">All Drugs</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00678/drug_interactions.json?group=approved" href="#show-approved">Approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00678/drug_interactions.json?group=vet_approved" href="#show-vet_approved">Vet approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00678/drug_interactions.json?group=nutraceutical" href="#show-nutraceutical">Nutraceutical</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00678/drug_interactions.json?group=illicit" href="#show-illicit">Illicit</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00678/drug_interactions.json?group=withdrawn" href="#show-withdrawn">Withdrawn</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00678/drug_interactions.json?group=investigational" href="#show-investigational">Investigational</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00678/drug_interactions.json?group=experimental" href="#show-experimental">Experimental</a></li>
              </ul>
              <div className="drug-interaction-table has-locked-content">
                <div id="drug-interactions_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_length" id="drug-interactions_length">
                        <label>Show
                          <select name="drug-interactions_length" aria-controls="drug-interactions" className="form-control form-control-sm">
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select> entries</label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="drug-interactions_filter" className="dataTables_filter">
                        <label>
                          <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="drug-interactions" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB00678/drug_interactions.json" data-total={1786} id="drug-interactions" style={{width: '100%'}} role="grid" aria-describedby="drug-interactions_info">
                        <thead>
                          <tr role="row">
                            <th className="head-sm sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '196.2px'}} aria-label="Drug: activate to sort column ascending">Drug</th>
                            <th className="sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '519.2px'}} aria-label="Interaction: activate to sort column ascending">Interaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">(R)-warfarin</a></td>
                            <td>The serum concentration of (R)-warfarin can be increased when it is combined with Losartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">(S)-Warfarin</a></td>
                            <td>The serum concentration of (S)-Warfarin can be increased when it is combined with Losartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid</a></td>
                            <td>The risk or severity of adverse effects can be increased when Losartan is combined with 1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">1-benzylimidazole</a></td>
                            <td>1-benzylimidazole may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">2,5-Dimethoxy-4-ethylamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylamphetamine may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">2,5-Dimethoxy-4-ethylthioamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylthioamphetamine may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">3,5-diiodothyropropionic acid</a></td>
                            <td>The metabolism of 3,5-diiodothyropropionic acid can be decreased when combined with Losartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">4-Bromo-2,5-dimethoxyamphetamine</a></td>
                            <td>4-Bromo-2,5-dimethoxyamphetamine may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">4-hydroxycoumarin</a></td>
                            <td>The metabolism of 4-hydroxycoumarin can be decreased when combined with Losartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">4-Methoxyamphetamine</a></td>
                            <td>4-Methoxyamphetamine may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                        </tbody>
                      </table>
                      <div id="drug-interactions_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="drug-interactions_info" role="status" aria-live="polite">Showing 1 to 10 of 1,786 entries</div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_numbers" id="drug-interactions_paginate">
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled" id="drug-interactions_previous"><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                          <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                          <li className="paginate_button page-item disabled" id="drug-interactions_ellipsis"><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={7} tabIndex={0} className="page-link">179</a></li>
                          <li className="paginate_button page-item next" id="drug-interactions_next"><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
            <dt className="col-md-2 col-sm-4">Food Interactions</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>Take without regard to meals. Take at same time each day. Food delays absorption, but does not affect the extent of absorption.</li>
              </ul>
            </dd>
          </dl>
          <h2 id="references" className="section-header">References</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">External Links</dt>
            <dd className="col-md-10 col-sm-8">
              <dl><dt className="col-md-4 col-sm-5">Human Metabolome Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.hmdb.ca/metabolites/HMDB0014816">HMDB0014816</a></dd><dt className="col-md-4 col-sm-5">KEGG Drug</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.genome.jp/dbget-bin/www_bget?drug:D08146">D08146</a></dd><dt className="col-md-4 col-sm-5">KEGG Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.genome.jp/dbget-bin/www_bget?cpd:C07072">C07072</a></dd><dt className="col-md-4 col-sm-5">PubChem Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=3961">3961</a></dd><dt className="col-md-4 col-sm-5">PubChem Substance</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?sid=46506538">46506538</a></dd><dt className="col-md-4 col-sm-5">ChemSpider</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.chemspider.com/Chemical-Structure.3824.html">3824</a></dd><dt className="col-md-4 col-sm-5">BindingDB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.bindingdb.org/bind/chemsearch/marvin/MolStructure.jsp?monomerid=82258">82258</a></dd><dt className="col-md-4 col-sm-5">ChEBI</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=6541">6541</a></dd><dt className="col-md-4 col-sm-5">ChEMBL</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chembldb/index.php/compound/inspect/CHEMBL191">CHEMBL191</a></dd><dt className="col-md-4 col-sm-5">Therapeutic Targets Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://bidd.nus.edu.sg/group/cjttd/ZFTTDDRUG.asp?ID=DAP000523">DAP000523</a></dd><dt className="col-md-4 col-sm-5">PharmGKB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.pharmgkb.org/drug/PA450268">PA450268</a></dd><dt className="col-md-4 col-sm-5">Guide to Pharmacology</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.guidetopharmacology.org/GRAC/LigandDisplayForward?ligandId=590">GtP Drug Page</a></dd><dt className="col-md-4 col-sm-5">HET</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/pdbe-srv/pdbechem/chemicalCompound/show/LSN">LSN</a></dd><dt className="col-md-4 col-sm-5">Wikipedia</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://en.wikipedia.org/wiki/Losartan">Losartan</a></dd>
              </dl>
            </dd><dt className="col-md-2 col-sm-4">ATC Codes</dt>
            <dd className="col-md-10 col-sm-8"><a data-no-turbolink="true" href="javascript:void(0)">C09CA01 — Losartan</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09CA — Angiotensin II receptor blockers (ARBs), plain</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09C — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DA01 — Losartan and diuretics</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DA — Angiotensin II receptor blockers (ARBs) and diuretics</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DB06 — Losartan and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">AHFS Codes</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>24:32.08 — Angiotensin Ii Receptor Antagonists</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">PDB Entries</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=5x23">5x23</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=5x24">5x24</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=5xxi">5xxi</a></span></span>
            </dd><dt className="col-md-2 col-sm-4">FDA label</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="label-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/fda_labels/DB00678.pdf?1265922796">Download</a> <span className="text-muted">(212 KB) </span></div>
            </dd><dt className="col-md-2 col-sm-4">MSDS</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="msds-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/msds/DB00678.pdf?1265922736">Download</a> <span className="text-muted">(19 KB) </span></div>
            </dd>
          </dl>
          <h2 id="clinical-trials" className="section-header">Clinical Trials</h2>
          <dl><dt className="col-md-2 col-sm-4">Clinical Trials <a tabIndex={0} role="button" data-toggle="popover" data-content="Clinical trial data extracted from government clinical trial databases. The commercial version includes title, phase, status, dates, and conditions with associated ICD10 or MedDRA identifiers. — <a target=&quot;_blank&quot; href=&quot;https://drugbankplus.com/data&quot;>Learn More</a>" title id="clinical-trials-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About Clinical Trials"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8">
              <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="DataTables_Table_0_length">
                      <label>Show
                        <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="clinical-trials table table-sm datatable dt-responsive dataTable no-footer dtr-inline" style={{width: '100%'}} id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '45.2px'}} aria-label="Phase: activate to sort column ascending">Phase</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '48.2px'}} aria-label="Status: activate to sort column ascending">Status</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '63.2px'}} aria-label="Purpose: activate to sort column ascending">Purpose</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '447.2px'}} aria-label="Conditions: activate to sort column ascending">Conditions</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '47.2px'}} aria-label="Count: activate to sort column ascending">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="javascript:void(0)">Peripheral Arterial Disease (PAD)</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Diagnostic</td>
                          <td><a href="javascript:void(0)">Postural Tachycardia Syndrome</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Diabetic Nephropathies</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Sickle Cell Disorders</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Not Yet Recruiting</td>
                          <td>Other</td>
                          <td><a href="javascript:void(0)">Cystic Fibrosis (CF)</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Not Yet Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Blood Pressures</a> <span>/</span> <a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Terminated</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Malignant Neoplasm of Pancreas</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">11</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Kidney Diseases</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 191 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item disabled" id="DataTables_Table_0_ellipsis"><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={7} tabIndex={0} className="page-link">20</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <h2 id="pharmacoeconomics" className="section-header">Pharmacoeconomics</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">Dosage forms</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="dosages_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="dosages_length">
                      <label>Show
                        <select name="dosages_length" aria-controls="dosages" className="form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="dosages_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="dosages" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-sm datatable dataTable no-footer" id="dosages" role="grid" aria-describedby="dosages_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Form: activate to sort column ascending" style={{width: '305.203px'}}>Form</th>
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Route: activate to sort column ascending" style={{width: '174.203px'}}>Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Strength: activate to sort column ascending" style={{width: '238.203px'}}>Strength</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>100.0 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>25.0 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>50.0 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>100 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>25 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>50 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>100 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>25 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>50 mg/1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dosages_info" role="status" aria-live="polite">Showing 1 to 10 of 14 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="dosages_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="dosages_previous"><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item next" id="dosages_next"><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={3} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <h2 id="properties" className="section-header">Properties</h2>
          <dl>
          <dt className="col-md-2 col-sm-4">State</dt>
            <dd className="col-md-10 col-sm-8">Solid</dd><dt className="col-md-2 col-sm-4">Experimental Properties</dt>
            <dd className="col-md-10 col-sm-8">
              <table className="table table-sm table-bordered" id="experimental-properties">
                <thead>
                  <tr>
                    <th className="head-medium">Property</th>
                    <th className="head-large">Value</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>melting point (°C)</td>
                    <td>184 °C</td>
                    <td>PhysProp</td>
                  </tr>
                  <tr>
                    <td>water solubility</td>
                    <td>0.82 mg/L</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>6.1</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td>pKa</td>
                    <td>5.5</td>
                    <td>MERCK INDEX (1996); approx.</td>
                  </tr>
                </tbody>
              </table>
            </dd><dt className="col-md-2 col-sm-4">Predicted Properties</dt>
            <dd className="col-md-10 col-sm-8">
              <table className="table table-sm responsive-table" id="drug-moldb-properties">
                <thead>
                  <tr>
                    <th className="head-medium">Property</th>
                    <th className="head-large">Value</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Water Solubility</td>
                    <td>0.0047 mg/mL</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>4.5</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>5.08</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#logp_logd">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>logS</td>
                    <td>-5</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Acidic)</td>
                    <td>7.4</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Basic)</td>
                    <td>4.12</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Physiological Charge</td>
                    <td>0</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Acceptor Count</td>
                    <td>5</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Donor Count</td>
                    <td>2</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polar Surface Area</td>
                    <td>92.51 Å<sup>2</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topolgical_surface">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Rotatable Bond Count</td>
                    <td>8</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topology_analysis">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Refractivity</td>
                    <td>131.85 m<sup>3</sup>·mol<sup>-1</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#refractivity">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polarizability</td>
                    <td>44.86 Å<sup>3</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Number of Rings</td>
                    <td>4</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topology_analysis">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Bioavailability</td>
                    <td>1</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Rule of Five</td>
                    <td>No</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Ghose Filter</td>
                    <td>No</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Veber's Rule</td>
                    <td>No</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>MDDR-like Rule</td>
                    <td>Yes</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                </tbody>
              </table>
            </dd><dt className="col-md-2 col-sm-4">Predicted ADMET features</dt>
            <dd className="col-md-10 col-sm-8">
              <table className="table table-sm responsive-table" id="drug-predicted-admet">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                    <th>Probability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Human Intestinal Absorption</td>
                    <td>+</td>
                    <td>1.0</td>
                  </tr>
                  <tr>
                    <td>Blood Brain Barrier</td>
                    <td>-</td>
                    <td>0.7812</td>
                  </tr>
                  <tr>
                    <td>Caco-2 permeable</td>
                    <td>-</td>
                    <td>0.8957</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein substrate</td>
                    <td>Substrate</td>
                    <td>0.6993</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor I</td>
                    <td>Non-inhibitor</td>
                    <td>0.8782</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor II</td>
                    <td>Inhibitor</td>
                    <td>0.5309</td>
                  </tr>
                  <tr>
                    <td>Renal organic cation transporter</td>
                    <td>Non-inhibitor</td>
                    <td>0.5689</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.6839</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.9115</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.6226</td>
                  </tr>
                  <tr>
                    <td>CYP450 1A2 substrate</td>
                    <td>Inhibitor</td>
                    <td>0.5514</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.5423</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.8102</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C19 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.6288</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.796</td>
                  </tr>
                  <tr>
                    <td>CYP450 inhibitory promiscuity</td>
                    <td>High CYP Inhibitory Promiscuity</td>
                    <td>0.7049</td>
                  </tr>
                  <tr>
                    <td>Ames test</td>
                    <td>Non AMES toxic</td>
                    <td>0.5382</td>
                  </tr>
                  <tr>
                    <td>Carcinogenicity</td>
                    <td>Non-carcinogens</td>
                    <td>0.6595</td>
                  </tr>
                  <tr>
                    <td>Biodegradation</td>
                    <td>Not ready biodegradable</td>
                    <td>1.0</td>
                  </tr>
                  <tr>
                    <td>Rat acute toxicity</td>
                    <td>2.6055 LD50, mol/kg </td>
                    <td><span className="not-available">Not applicable</span></td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor I)</td>
                    <td>Strong inhibitor</td>
                    <td>0.5781</td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor II)</td>
                    <td>Inhibitor</td>
                    <td>0.8084</td>
                  </tr>
                </tbody>
              </table>
              <div className="alert alert-warning clearfix admetsar-alert"><span className="glyphicon glyphicon-info-sign"> </span> ADMET data is predicted using <a href="http://lmmd.ecust.edu.cn:8000">admetSAR</a>, a free tool for evaluating chemical ADMET properties. (<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/23092397">23092397</a>) </div>
            </dd>
          </dl>
          <h2 id="spectra" className="section-header">Spectra</h2>
          <dl><dt className="col-md-2 col-sm-4">Mass Spec (NIST)</dt>
            <dd className="col-md-10 col-sm-8"><span className="not-available">Not Available</span></dd><dt className="col-md-2 col-sm-4">Spectra</dt>
            <dd className="col-md-10 col-sm-8">
              <table className="table table-sm responsive-table" id="drug-spectra-table">
                <thead>
                  <tr>
                    <th>Spectrum</th>
                    <th>Spectrum Type</th>
                    <th><a target="_blank" rel="noopener noreferrer" href="http://splash.fiehnlab.ucdavis.edu/">Splash Key</a></th>
                  </tr>
                </thead>
                <tbody data-no-turbolink>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted GC-MS Spectrum - GC-MS</a></td>
                    <td>Predicted GC-MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted MS/MS Spectrum - 10V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted MS/MS Spectrum - 20V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted MS/MS Spectrum - 40V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted MS/MS Spectrum - 10V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted MS/MS Spectrum - 20V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted MS/MS Spectrum - 40V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-00di-0000900000-657db16bb4bfe9184114">splash10-00di-0000900000-657db16bb4bfe9184114</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-056r-0900000000-43bb8508cd1dbc71bcee">splash10-056r-0900000000-43bb8508cd1dbc71bcee</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-55368087829d113fdb7b">splash10-004i-0900000000-55368087829d113fdb7b</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-af470646c547613f82a0">splash10-004i-0900000000-af470646c547613f82a0</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-746dcf7a43a3f8839c1d">splash10-004i-0900000000-746dcf7a43a3f8839c1d</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-0bee80f7ccbc4b68eee0">splash10-004i-0900000000-0bee80f7ccbc4b68eee0</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-d845ae166a10faff242a">splash10-004i-0900000000-d845ae166a10faff242a</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-2900000000-d39a309c02e1aaa956b0">splash10-004i-2900000000-d39a309c02e1aaa956b0</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-7900000000-d27d10ab008deb157e7a">splash10-004i-7900000000-d27d10ab008deb157e7a</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-00fr-0900700000-fef78a7f52d4aa515bb4">splash10-00fr-0900700000-fef78a7f52d4aa515bb4</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-00fr-0900600000-c62f0db44e17f79e0c70">splash10-00fr-0900600000-c62f0db44e17f79e0c70</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0034900000-22ba49ec64d374c8965e">splash10-0a4i-0034900000-22ba49ec64d374c8965e</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0191000000-8ff1b5a21f6ef4a462cd">splash10-0a4i-0191000000-8ff1b5a21f6ef4a462cd</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0590000000-9841ff7f881c3e9c11b9">splash10-0a4i-0590000000-9841ff7f881c3e9c11b9</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a59-0960000000-a24e287a018dae01dd0d">splash10-0a59-0960000000-a24e287a018dae01dd0d</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a5c-0930000000-ff3e675bd445225bf04e">splash10-0a5c-0930000000-ff3e675bd445225bf04e</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0pxu-0920000000-9adf4aef59fc1545fea6">splash10-0pxu-0920000000-9adf4aef59fc1545fea6</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0v00-1900000000-3591888cf5831cbe3d11">splash10-0v00-1900000000-3591888cf5831cbe3d11</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0wmi-2900000000-ab9304c8cebc201d0178">splash10-0wmi-2900000000-ab9304c8cebc201d0178</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0j70-5900000000-efa87b7770206ac0ff3e">splash10-0j70-5900000000-efa87b7770206ac0ff3e</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0491300000-f4b08850a154cfc2117c">splash10-0a4i-0491300000-f4b08850a154cfc2117c</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0591300000-32a922edf20b3eb76950">splash10-0a4i-0591300000-32a922edf20b3eb76950</a></td>
                  </tr>
                </tbody>
              </table>
            </dd>
          </dl>
          <h2 id="taxonomy" className="section-header">Taxonomy</h2>
          <dl><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">This compound belongs to the class of organic compounds known as biphenyls and derivatives. These are organic compounds containing to benzene rings linked together by a C-C bond.</dd><dt className="col-md-2 col-sm-4">Kingdom</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000000" data-original-title="Compounds that contain at least one carbon atom, excluding isocyanide/cyanide and their non-hydrocarbyl derivatives, thiophosgene, carbon diselenide, carbon monosulfide, carbon disulfide, carbon subsulfide, carbon monoxide, carbon dioxide, Carbon suboxide, and dicarbon monoxide.">Organic compounds</a></dd><dt className="col-md-2 col-sm-4">Super Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002448" data-original-title="Aromatic compounds containing one or more benzene rings.">Benzenoids</a></dd><dt className="col-md-2 col-sm-4">Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002279" data-original-title="Aromatic compounds containing one monocyclic ring system consisting of benzene.">Benzene and substituted derivatives</a></dd><dt className="col-md-2 col-sm-4">Sub Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000041" data-original-title="Organic compounds containing to benzene rings linked together by a C-C bond.">Biphenyls and derivatives</a></dd><dt className="col-md-2 col-sm-4">Direct Parent</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000041" data-original-title="Organic compounds containing to benzene rings linked together by a C-C bond.">Biphenyls and derivatives</a></dd><dt className="col-md-2 col-sm-4">Alternative Parents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000306" data-original-title="Compounds containing a phenyltetrazole skeleton, which consists of a tetrazole bound to a phenyl group.">Phenyltetrazoles and derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002633" data-original-title="Imidazoles in which the imidazole ring is substituted at for positions 1,2,4, and 5.">1,2,4,5-tetrasubstituted imidazoles</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002311" data-original-title="Heterocyclic compounds containing an imidazole ring substituted at position 1.">N-substituted imidazoles</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001030" data-original-title="Organic compounds containing the acyl chloride functional group.">Aryl chlorides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004144" data-original-title="Compounds containing an aromatic ring where a carbon atom is linked to an hetero atom.">Heteroaromatic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004139" data-original-title="Organic compounds containing an heterocycle with at least one nitrogen atom and one carbon atom linked to each other.">Azacyclic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000286" data-original-title="Compounds comprising the primary alcohol functional group, with the general structure RCOH (R=alkyl, aryl).">Primary alcohols</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004557" data-original-title="Compounds containing a bond between carbon a pnictogen atom. Pnictogens are p-block element atoms that are in the group 15 of the periodic table.">Organopnictogen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000278" data-original-title="Organic compounds containing a nitrogen atom.">Organonitrogen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001516" data-original-title="Compounds containing a chemical bond between a carbon atom and a chlorine atom.">Organochlorides</a></span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004150" data-original-title="Derivatives of hydrocarbons obtained by substituting one or more carbon atoms by an heteroatom. They contain at least one carbon atom and heteroatom.">Hydrocarbon derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003073" data-original-title="Compounds containing an alcohol group attached to an aromatic carbon.">Aromatic alcohols</a></span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 2 more</a>
            </dd><dt className="col-md-2 col-sm-4">Substituents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Biphenyl</span><span className="list-separator"> / </span><span className="separated-list-item">Phenyltetrazole</span><span className="list-separator"> / </span><span className="separated-list-item">1,2,4,5-tetrasubstituted imidazole</span><span className="list-separator"> / </span><span className="separated-list-item">Aryl chloride</span><span className="list-separator"> / </span><span className="separated-list-item">Aryl halide</span><span className="list-separator"> / </span><span className="separated-list-item">N-substituted imidazole</span><span className="list-separator"> / </span><span className="separated-list-item">Azole</span><span className="list-separator"> / </span><span className="separated-list-item">Heteroaromatic compound</span><span className="list-separator"> / </span><span className="separated-list-item">Imidazole</span><span className="list-separator"> / </span><span className="separated-list-item">Tetrazole</span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Azacycle</span><span className="list-separator"> / </span><span className="separated-list-item">Organoheterocyclic compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organonitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organochloride</span><span className="list-separator"> / </span><span className="separated-list-item">Organohalogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Aromatic alcohol</span><span className="list-separator"> / </span><span className="separated-list-item">Alcohol</span><span className="list-separator"> / </span><span className="separated-list-item">Organic nitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Hydrocarbon derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Organopnictogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organooxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Primary alcohol</span><span className="list-separator"> / </span><span className="separated-list-item">Aromatic heteromonocyclic compound</span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 14 more</a>
            </dd><dt className="col-md-2 col-sm-4">Molecular Framework</dt>
            <dd className="col-md-10 col-sm-8">Aromatic heteromonocyclic compounds</dd><dt className="col-md-2 col-sm-4">External Descriptors</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item">imidazoles, biphenylyltetrazole (<a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:6541">CHEBI:6541</a>) </span></span>
            </dd>
          </dl>
          <div className="bond-list-container targets">
            <h3 id="targets">Targets</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0000062">
                <div aria-hidden="true" aria-labelledby="binding properties" className="modal fade" id="BE0000062-binding-properties" role="dialog" tabIndex={-1}>
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Binding Properties</h5>
                        <button aria-hidden="true" className="close" data-dismiss="modal" type="button">×</button>
                      </div>
                      <div className="modal-body">
                        <div className="table-responsive">
                          <table className="table table-sm">
                            <thead>
                              <tr>
                                <th>Property</th>
                                <th>Measurement</th>
                                <th>pH</th>
                                <th>Temperature (°C)</th>
                                <th>References</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>IC 50 (nM)</td>
                                <td>0.33</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22727371">22727371</a></span></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>IC 50 (nM)</td>
                                <td>16.2</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22309912">22309912</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22727371">22727371</a></span></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>IC 50 (nM)</td>
                                <td>5.62</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22889560">22889560</a></span></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>IC 50 (nM)</td>
                                <td>6</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22889560">22889560</a></span></span>
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a>
                  <button className="btn btn-sm btn-drugbank-secondary" data-target="#BE0000062-binding-properties" data-toggle="modal" type="button">
                    <span className="full-binding-label">Binding Properties</span></button><strong>1. <a href="javascript:void(0)">Type-1 angiotensin II receptor</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-yes">Yes</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Antagonist</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Protein heterodimerization activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Receptor for angiotensin II. Mediates its action by association with G proteins that activate a phosphatidylinositol-calcium second messenger system.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">AGTR1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P30556">P30556</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Type-1 angiotensin II receptor</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">41060.53 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A9">Chen X, Ji ZL, Chen YZ: TTD: Therapeutic Target Database. Nucleic Acids Res. 2002 Jan 1;30(1):412-5. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11752352">PubMed:11752352</a>] </li>
                      <li id="reference-A5402">Sardo MA, Castaldo M, Cinquegrani M, Bonaiuto M, Fontana L, Campo S, Campo GM, Altavilla D, Saitta A: Effects of AT1 receptor antagonist losartan on sICAM-1 and TNF-alpha levels in uncomplicated hypertensive patients. Angiology. 2004 Mar-Apr;55(2):195-203. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/15026875">PubMed:15026875</a>] </li>
                      <li id="reference-A5403">Dickstein K, Timmermans P, Segal R: Losartan: a selective angiotensin II type 1 (AT1) receptor antagonist for the treatment of heart failure. Expert Opin Investig Drugs. 1998 Nov;7(11):1897-914. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/15991937">PubMed:15991937</a>] </li>
                      <li id="reference-A5404">Anand-Srivastava MB, Palaparti A: Angiotensin-II-induced enhanced expression of Gi proteins is attenuated by losartan in A10 vascular smooth muscle cells: role of AT1 receptors. Can J Physiol Pharmacol. 2003 Feb;81(2):150-8. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12710529">PubMed:12710529</a>] </li>
                      <li id="reference-A5405">Rocha I, Bras-Rosario L, Amparo-Barros M, Silva-Carvalho L: Angiotensin AT1 receptor antagonist losartan and the defence reaction in the anaesthetised rat. Effect on the carotid chemoreflex. Exp Physiol. 2003 May;88(3):309-14. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12719755">PubMed:12719755</a>] </li>
                      <li id="reference-A5406">Guan J, Cheng DY, Chen XJ, Zhang Y, Wang H, Su QL: [The effects of losartan on pulmonary arterial collagen and AT1 in chronic hypoxic rats]. Sichuan Da Xue Xue Bao Yi Xue Ban. 2004 Nov;35(6):774-7. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/15573751">PubMed:15573751</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container enzymes">
            <h3 id="enzymes">Enzymes</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0002793">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>1. <a href="javascript:void(0)">Cytochrome P450 2C9</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Steroid hydroxylase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Cytochromes P450 are a group of heme-thiolate monooxygenases. In liver microsomes, this enzyme is involved in an NADPH-dependent electron transport pathway. It oxidizes a variety of structurally un...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP2C9</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P11712">P11712</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2C9</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">55627.365 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14874">Song JC, White CM: Pharmacologic, pharmacokinetic, and therapeutic differences among angiotensin II receptor antagonists. Pharmacotherapy. 2000 Feb;20(2):130-9. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10678291">PubMed:10678291</a>] </li>
                      <li id="reference-A1033">Sica DA, Gehr TW, Ghosh S: Clinical pharmacokinetics of losartan. Clin Pharmacokinet. 2005;44(8):797-814. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16029066">PubMed:16029066</a>] </li>
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                      <li id="reference-A14875">Yasar U, Forslund-Bergengren C, Tybring G, Dorado P, Llerena A, Sjoqvist F, Eliasson E, Dahl ML: Pharmacokinetics of losartan and its metabolite E-3174 in relation to the CYP2C9 genotype. Clin Pharmacol Ther. 2002 Jan;71(1):89-98. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11823761">PubMed:11823761</a>] </li>
                      <li id="reference-L162">Drug Interactions: Cytochrome P450 Drug Interaction Table [<a target="_blank" href="http://medicine.iupui.edu/clinpharm/ddis/table.asp">Link</a>] </li>
                      <li id="reference-F1878">FDA label Losartan [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/001/878/original/FDA_label_losa.pdf?1539708399">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002638">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Cytochrome P450 3A4</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Vitamin d3 25-hydroxylase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Cytochromes P450 are a group of heme-thiolate monooxygenases. In liver microsomes, this enzyme is involved in an NADPH-dependent electron transport pathway. It performs a variety of oxidation react...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP3A4</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P08684">P08684</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 3A4</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">57342.67 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14874">Song JC, White CM: Pharmacologic, pharmacokinetic, and therapeutic differences among angiotensin II receptor antagonists. Pharmacotherapy. 2000 Feb;20(2):130-9. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10678291">PubMed:10678291</a>] </li>
                      <li id="reference-A1033">Sica DA, Gehr TW, Ghosh S: Clinical pharmacokinetics of losartan. Clin Pharmacokinet. 2005;44(8):797-814. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16029066">PubMed:16029066</a>] </li>
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                      <li id="reference-A14710">Preissner S, Kroll K, Dunkel M, Senger C, Goldsobel G, Kuzman D, Guenther S, Winnenburg R, Schroeder M, Preissner R: SuperCYP: a comprehensive database on Cytochrome P450 enzymes including a tool for analysis of CYP-drug interactions. Nucleic Acids Res. 2010 Jan;38(Database issue):D237-43. doi: 10.1093/nar/gkp970. Epub 2009 Nov 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19934256">PubMed:19934256</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002887">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>3. <a href="javascript:void(0)">Cytochrome P450 2C8</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Steroid hydroxylase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Cytochromes P450 are a group of heme-thiolate monooxygenases. In liver microsomes, this enzyme is involved in an NADPH-dependent electron transport pathway. It oxidizes a variety of structurally un...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP2C8</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P10632">P10632</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2C8</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">55824.275 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14710">Preissner S, Kroll K, Dunkel M, Senger C, Goldsobel G, Kuzman D, Guenther S, Winnenburg R, Schroeder M, Preissner R: SuperCYP: a comprehensive database on Cytochrome P450 enzymes including a tool for analysis of CYP-drug interactions. Nucleic Acids Res. 2010 Jan;38(Database issue):D237-43. doi: 10.1093/nar/gkp970. Epub 2009 Nov 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19934256">PubMed:19934256</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003536">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>4. <a href="javascript:void(0)">Cytochrome P450 2C19</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd><dt className="col-md-5 col-sm-6">Curator comments</dt>
                        <dd className="col-md-7 col-sm-6">The current evidence available for this enzyme inhibition is limited to one in vitro study.</dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Steroid hydroxylase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Responsible for the metabolism of a number of therapeutic agents such as the anticonvulsant drug S-mephenytoin, omeprazole, proguanil, certain barbiturates, diazepam, propranolol, citalopram and im...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP2C19</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P33261">P33261</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2C19</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">55930.545 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14710">Preissner S, Kroll K, Dunkel M, Senger C, Goldsobel G, Kuzman D, Guenther S, Winnenburg R, Schroeder M, Preissner R: SuperCYP: a comprehensive database on Cytochrome P450 enzymes including a tool for analysis of CYP-drug interactions. Nucleic Acids Res. 2010 Jan;38(Database issue):D237-43. doi: 10.1093/nar/gkp970. Epub 2009 Nov 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19934256">PubMed:19934256</a>] </li>
                      <li id="reference-A38745">Taavitsainen P, Kiukaanniemi K, Pelkonen O: In vitro inhibition screening of human hepatic P450 enzymes by five angiotensin-II receptor antagonists. Eur J Clin Pharmacol. 2000 May;56(2):135-40. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10877007">PubMed:10877007</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003541">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>5. <a href="javascript:void(0)">UDP-glucuronosyltransferase 1-1</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Steroid binding</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">UDPGT is of major importance in the conjugation and subsequent elimination of potentially toxic xenobiotics and endogenous compounds. This isoform glucuronidates bilirubin IX-alpha to form both the...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">UGT1A1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P22309">P22309</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 1-1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">59590.91 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003677">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>6. <a href="javascript:void(0)">UDP-glucuronosyltransferase 1-3</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Retinoic acid binding</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">UDPGT is of major importance in the conjugation and subsequent elimination of potentially toxic xenobiotics and endogenous compounds. Isoform 2 lacks transferase activity but acts as a negative reg...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">UGT1A3</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P35503">P35503</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 1-3</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">60337.835 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003678">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>7. <a href="javascript:void(0)">UDP-glucuronosyltransferase 1-10</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Protein kinase c binding</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">UDPGT is of major importance in the conjugation and subsequent elimination of potentially toxic xenobiotics and endogenous compounds. Isoform 2 lacks transferase activity but acts as a negative reg...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">UGT1A10</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q9HAW8">Q9HAW8</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 1-10</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">59809.075 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003679">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>8. <a href="javascript:void(0)">UDP-glucuronosyltransferase 2B7</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Glucuronosyltransferase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">UDPGT is of major importance in the conjugation and subsequent elimination of potentially toxic xenobiotics and endogenous compounds.Its unique specificity for 3,4-catechol estrogens and estriol su...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">UGT2B7</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P16662">P16662</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 2B7</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">60694.12 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003680">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>9. <a href="javascript:void(0)">UDP-glucuronosyltransferase 2B17</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Glucuronosyltransferase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">UDPGT is of major importance in the conjugation and subsequent elimination of potentially toxic xenobiotics and endogenous compounds. The major substrates of this isozyme are eugenol &gt; 4-methylumbe...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">UGT2B17</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O75795">O75795</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 2B17</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">61094.915 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container carriers">
            <h3 id="carriers">Carriers</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0000530">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>1. <a href="javascript:void(0)">Serum albumin</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Toxic substance binding</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Serum albumin, the main protein of plasma, has a good binding capacity for water, Ca(2+), Na(+), K(+), fatty acids, hormones, bilirubin and drugs. Its main function is the regulation of the colloid...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">ALB</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P02768">P02768</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Serum albumin</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">69365.94 Da</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container transporters">
            <h3 id="transporters">Transporters</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0001032">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>1. <a href="javascript:void(0)">Multidrug resistance protein 1</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Xenobiotic-transporting atpase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Energy-dependent efflux pump responsible for decreased drug accumulation in multidrug-resistant cells.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">ABCB1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P08183">P08183</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Multidrug resistance protein 1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">141477.255 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16151">Takara K, Kakumoto M, Tanigawara Y, Funakoshi J, Sakaeda T, Okumura K: Interaction of digoxin with antihypertensive drugs via MDR1. Life Sci. 2002 Feb 15;70(13):1491-500. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11895100">PubMed:11895100</a>] </li>
                      <li id="reference-A15854">Borgnia MJ, Eytan GD, Assaraf YG: Competition of hydrophobic peptides, cytotoxic drugs, and chemosensitizers on a common P-glycoprotein pharmacophore as revealed by its ATPase activity. J Biol Chem. 1996 Feb 9;271(6):3163-71. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/8621716">PubMed:8621716</a>] </li>
                      <li id="reference-A16158">Soldner A, Benet LZ, Mutschler E, Christians U: Active transport of the angiotensin-II antagonist losartan and its main metabolite EXP 3174 across MDCK-MDR1 and caco-2 cell monolayers. Br J Pharmacol. 2000 Mar;129(6):1235-43. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10725273">PubMed:10725273</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0001066">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Solute carrier family 22 member 6</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Sodium-independent organic anion transmembrane transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Involved in the renal elimination of endogenous and exogenous organic anions. Functions as organic anion exchanger when the uptake of one molecule of organic anion is coupled with an efflux of one ...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLC22A6</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q4U2R8">Q4U2R8</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier family 22 member 6</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">61815.78 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16277">Race JE, Grassl SM, Williams WJ, Holtzman EJ: Molecular cloning and characterization of two novel human renal organic anion transporters (hOAT1 and hOAT3). Biochem Biophys Res Commun. 1999 Feb 16;255(2):508-14. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10049739">PubMed:10049739</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004782">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>3. <a href="javascript:void(0)">Solute carrier family 22 member 12</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Urate transmembrane transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Required for efficient urate re-absorption in the kidney. Regulates blood urate levels. Mediates saturable urate uptake by facilitating the exchange of urate against organic anions.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLC22A12</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q96S37">Q96S37</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier family 22 member 12</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">59629.57 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18110">Lipkowitz MS: Regulation of uric acid excretion by the kidney. Curr Rheumatol Rep. 2012 Apr;14(2):179-88. doi: 10.1007/s11926-012-0240-z. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22359229">PubMed:22359229</a>] </li>
                      <li id="reference-A18111">Burnier M, Roch-Ramel F, Brunner HR: Renal effects of angiotensin II receptor blockade in normotensive subjects. Kidney Int. 1996 Jun;49(6):1787-90. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/8743498">PubMed:8743498</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004783">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>4. <a href="javascript:void(0)">Solute carrier family 2, facilitated glucose transporter member 9</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Sugar:proton symporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Transport urate and fructose. May have a role in the urate reabsorption by proximal tubules. Also transports glucose at low rate.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLC2A9</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q9NRM0">Q9NRM0</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier family 2, facilitated glucose transporter member 9</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">58701.205 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18110">Lipkowitz MS: Regulation of uric acid excretion by the kidney. Curr Rheumatol Rep. 2012 Apr;14(2):179-88. doi: 10.1007/s11926-012-0240-z. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22359229">PubMed:22359229</a>] </li>
                      <li id="reference-A18111">Burnier M, Roch-Ramel F, Brunner HR: Renal effects of angiotensin II receptor blockade in normotensive subjects. Kidney Int. 1996 Jun;49(6):1787-90. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/8743498">PubMed:8743498</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000703">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>5. <a href="javascript:void(0)">Bile salt export pump</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-no">No</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Substrate</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Involved in the ATP-dependent secretion of bile salts into the canaliculus of hepatocytes.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">ABCB11</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O95342">O95342</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Bile salt export pump</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">146405.83 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A33345">Pedersen JM, Matsson P, Bergstrom CA, Hoogstraate J, Noren A, LeCluyse EL, Artursson P: Early identification of clinically relevant drug interactions with the human bile salt export pump (BSEP/ABCB11). Toxicol Sci. 2013 Dec;136(2):328-43. doi: 10.1093/toxsci/kft197. Epub 2013 Sep 6. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/24014644">PubMed:24014644</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" aria-labelledby="locked-modal-header" className="modal fade" id="locked-modal" role="dialog" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <button aria-hidden="true" className="close" data-dismiss="modal" type="button">×</button><img src="/assets/unlock-molecule-f1ee80bcad8424455af34bbaf96169b955a5067b2c12914655e9e8596d175d1d.png" alt="Unlock molecule" />
                  <div className="locked-modal-header">
                    <div className="drugbank-icon icon-lock">
                      <svg className="icon" role="img" title="lock">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                      </svg>
                    </div>Unlock Data</div>
                  <p>There is additional data available for commercial users including Adverse Effects, Contraindications, and Blackbox Warnings. Contact us to learn more about these and other features.</p><a className="btn btn-sm btn-pink locked-modal-link track-link" target="_blank" href="https://drugbankplus.com/">Learn more</a></div>
              </div>
            </div>
          </div>
          <p className="bt-2" id="drug-meta">Drug created on June 13, 2005 07:24 / Updated on July 11, 2019 00:54 </p>
        </div>
        <div aria-hidden="true" aria-labelledby="package-image" className="modal fade" id="modal-package" role="dialog" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Product Image</h4>
                <button aria-hidden="true" className="close" data-dismiss="modal" type="button">×</button>
              </div>
              <div className="modal-body"><img className="img-thumbnail modal-package-picture mb-4" src /><a className="full-image float-right btn btn-drugbank-primary btn-sm mt-2" href>Show full image</a>
                <div className="package-description" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Losartan;
