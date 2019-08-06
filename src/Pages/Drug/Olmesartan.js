import React from 'react';
import './Olmesartan.scss';
import Navigation from '../../Components/Navigation/Navigation' ;

class Olmesartan extends React.Component {
  render() {
    return (
      <div>
      <div className="content-container">
        <div className="content-header d-sm-flex align-items-center">
          <h1 className="align-self-center mr-4">Olmesartan</h1>
          <div className="page-actions justify-content-sm-end mt-2 mt-sm-0">
            <div className="bond-links"><a className="btn bond-link targets" href="#targets">Targets (1)</a><a className="btn bond-link carriers" href="#carriers">Carriers (1)</a><a className="btn bond-link transporters" href="#transporters">Transporters (4)</a></div>
          </div>
        </div>
        <div className="card-content px-md-4 px-sm-2 pb-md-4 pb-sm-2">
          <h2 id="identification" className="section-header">Identification</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">Name</dt>
            <dd className="col-md-10 col-sm-8">Olmesartan</dd><dt className="col-md-2 col-sm-4">Accession Number</dt>
            <dd className="col-md-10 col-sm-8">DB00275&nbsp; (APRD00223) </dd><dt className="col-md-2 col-sm-4">Type</dt>
            <dd className="col-md-10 col-sm-8">Small Molecule</dd><dt className="col-md-2 col-sm-4">Groups</dt>
            <dd className="col-md-10 col-sm-8">Approved, Investigational</dd><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Olmesartan is a nonpeptide antihypertensive with no chiral centers.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: Olmesartan medoxomil: current status of its use in monotherapy. Vasc Health Risk Manag. 2006;2(4):327-40. (PubMed ID 17323586)" href="#reference-A175342" data-original-title title>2</a></sup> Orally available olmesartan is usually presented in the form of olmesartan medoxomil which is a prodrug rapidly converted <em>in vivo</em> to the pharmacologically active olmesartan.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup> It was developed by Daiichi Sankyo Pharmaceuticals and approved in 2002.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Gonakoti S, Khullar S, Rajkumar A: Olmesartan Associated Enteropathy: A Rare Underdiagnosed Cause of Diarrhea and Weight Loss. Am J Case Rep. 2019 Jan 26;20:111-116. doi: 10.12659/AJCR.913207. (PubMed ID 30683835)" href="#reference-A175345" data-original-title title>3</a>,<a className="reference-popover-link" data-content="FDA approvals" href="#reference-L5560" data-original-title title>4</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Structure</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="structure">
                <img src={require(`./olmesartan.png`)} style={{width: "15%"}} alt=""/>
              </div>
            </dd>
            <dt className="col-md-2 col-sm-4">Synonyms</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list-break">
                <li>4-(1-hydroxy-1-methylethyl)-2-propyl-1-{'{'}[2'-(1H-tetrazol-5-yl)biphenyl-4-yl]methyl{'}'}-1H-imidazole-5-carboxylic acid</li>
                <li>4-(hydroxy-1-methylethyl)-2-propyl-1-{'{'}[2'-(1H-tetrazol-5-yl)-1,1'-biphenyl-4-yl]methyl{'}'}-1H-imidazole-5-carboxylic acid</li>
                <li>Olmesartan</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">External IDs <a tabIndex={0} role="button" data-toggle="popover" data-content="Codes and identifiers used by other resources and companies, often used before choosing a marketing name." title id="external-identifiers-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About External Identifiers"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">DE-092</span><span className="list-separator"> / </span><span className="separated-list-item">RNH-6270</span></span>
              </span>
            </dd>
            <dt className="col-md-2 col-sm-4">UNII</dt>
            <dd className="col-md-10 col-sm-8"><a target="_blank" rel="noopener noreferrer" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=8W1IQP3U10">8W1IQP3U10</a></dd><dt className="col-md-2 col-sm-4">CAS number</dt>
            <dd className="col-md-10 col-sm-8">144689-24-7</dd><dt className="col-md-2 col-sm-4">Weight</dt>
            <dd className="col-md-10 col-sm-8">Average: 446.5016
              <br />Monoisotopic: 446.206638728 </dd><dt className="col-md-2 col-sm-4">Chemical Formula</dt>
            <dd className="col-md-10 col-sm-8">C<sub>24</sub>H<sub>26</sub>N<sub>6</sub>O<sub>3</sub></dd><dt className="col-md-2 col-sm-4">InChI Key</dt>
            <dd className="col-md-10 col-sm-8">VTRAEEWXHOVJFV-UHFFFAOYSA-N</dd><dt className="col-md-2 col-sm-4">InChI</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">InChI=1S/C24H26N6O3/c1-4-7-19-25-21(24(2,3)33)20(23(31)32)30(19)14-15-10-12-16(13-11-15)17-8-5-6-9-18(17)22-26-28-29-27-22/h5-6,8-13,33H,4,7,14H2,1-3H3,(H,31,32)(H,26,27,28,29)</div>
            </dd><dt className="col-md-2 col-sm-4">IUPAC Name</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">4-(2-hydroxypropan-2-yl)-2-propyl-1-({'{'}4-[2-(1H-1,2,3,4-tetrazol-5-yl)phenyl]phenyl{'}'}methyl)-1H-imidazole-5-carboxylic acid</div>
            </dd><dt className="col-md-2 col-sm-4">SMILES</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">CCCC1=NC(=C(N1CC1=CC=C(C=C1)C1=C(C=CC=C1)C1=NN=NN1)C(O)=O)C(C)(C)O</div>
            </dd>
          </dl>
          <h2 id="pharmacology" className="section-header">Pharmacology</h2>
          <dl><dt className="col-md-2 col-sm-4">Indication</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Olmesartan is indicated for the treatment of hypertension either alone or associated with other antihypertensive agents.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup></p>
              <p>Hypertension is a sustained elevation of resting blood pressure. The hypertensive effect can affect the systolic blood pressure, diastolic blood pressure or both. This condition tends to be asymptomatic until it reaches a severe or long-standing state.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Merck Manuals" href="#reference-L5569" data-original-title title>7</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Associated Conditions</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li><a href="javascript:void(0)">Diabetic Nephropathies</a></li>
                <li><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></li>
                <li><a href="javascript:void(0)">Severe Hypertension</a></li>
                <li><a href="javascript:void(0)">Moderate Hypertension</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Pharmacodynamics</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The activities of olmesartan directly antagonize the angiotensin-mediated contraction in a dose-dependent manner. The activity of olmesartan can produce inhibition of 90% of the muscle contractility for at least 90 minutes.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: Olmesartan medoxomil: current status of its use in monotherapy. Vasc Health Risk Manag. 2006;2(4):327-40. (PubMed ID 17323586)" href="#reference-A175342" data-original-title title>2</a></sup></p>
              <p>Preclinical studies driven by inhibition of nitric oxide synthesis showed that olmesartan inhibits the angiotensin II-induced pressor response which in order prevents the production of markers of early cardiovascular inflammation, myocardial remodeling, and cardiac fibrosis. It also reduced the protein urinary secretion, the area of aortic plaque lesions and the intimal thickening in cross-sections of the aorta.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: Olmesartan medoxomil: current status of its use in monotherapy. Vasc Health Risk Manag. 2006;2(4):327-40. (PubMed ID 17323586)" href="#reference-A175342" data-original-title title>2</a></sup></p>
              <p>In clinical trials made on hypertensive patients following a low-sodium diet, olmesartan was observed to significantly decrease diastolic blood pressure when compared with placebo-treated patients.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup> As well, the administration of olmesartan was shown to lower the mean 24 hours ambulatory blood pressure and to increase renin and angiotensin II concentrations in plasma.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: Olmesartan medoxomil: current status of its use in monotherapy. Vasc Health Risk Manag. 2006;2(4):327-40. (PubMed ID 17323586)" href="#reference-A175342" data-original-title title>2</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Mechanism of action</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Olmesartan is a selective angiotensin II-type I receptor blocker with a large affinity. It has been shown to present an IC50 of 8 nmol/L while showing a very minimal affinity towards angiotensin-II type II receptor. The blockage of olmesartan is done by the displacement of angiotensin II converting it hence, in a competitive antagonist.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup> </p>
              <p>The activity of olmesartan is mainly performed in vascular smooth muscle cells and hence its activity prevents the vasoconstrictor effects of angiotensin II.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: Olmesartan medoxomil: current status of its use in monotherapy. Vasc Health Risk Manag. 2006;2(4):327-40. (PubMed ID 17323586)" href="#reference-A175342" data-original-title title>2</a></sup></p>
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
              <p>Olmesartan, in the form of olmesartan medoxomil is rapidly absorbed in the gastrointestinal tract and metabolized to olmesartan. The esterification with medoxomil was created with the intention of increasing olmesartan bioavailability from 4.5% to 28.6%.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup></p>
              <p>Oral administration of 10-160 mg of olmesartan has been shown to reach peak plasma concentration of 0.22-2.1 mg/L after 1-3 hours with an AUC of 1.6-19.9mgh/L.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: Olmesartan medoxomil: current status of its use in monotherapy. Vasc Health Risk Manag. 2006;2(4):327-40. (PubMed ID 17323586)" href="#reference-A175342" data-original-title title>2</a></sup> The pharmacokinetic profile of olmesartan has been observed to be nearly linear and dose-dependent under the therapeutic range.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup> The steady-state level of olmesartan is achieved after once a day dosing during 3 to 5 days.<sup className="text-reference-group"><a className="reference-popover-link" data-content="FDA pharmacology report" href="#reference-L5566" data-original-title title>6</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Volume of distribution</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The reported volume of distribution of olmesartan is of 17 L.<sup className="text-reference-group"><a className="reference-popover-link" data-content="FDA pharmacology report" href="#reference-L5566" data-original-title title>6</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Protein binding</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Olmesartan is highly bound to plasma proteins hence, even 99% of the administered dose is found in a bound state with no penetration in red blood cells.<sup className="text-reference-group"><a className="reference-popover-link" data-content="FDA pharmacology report" href="#reference-L5566" data-original-title title>6</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Metabolism</dt>
            <dd className="col-md-10 col-sm-8">
              <p />
              <p>Olmesartan is rapidly and completely bioactivated by ester hydrolysis to olmesartan during absorption from the gastrointestinal tract. This rapid first-pass metabolism was confirmed by the lack of measurable amounts of olmesartan medoxomil in plasma or excreta.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup> This first-pass metabolism is not driven by cytochrome enzymes and hence it is not expected to interact with other drugs via this mechanism.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: Olmesartan medoxomil: current status of its use in monotherapy. Vasc Health Risk Manag. 2006;2(4):327-40. (PubMed ID 17323586)" href="#reference-A175342" data-original-title title>2</a></sup></p>
              <p>The pharmacologically active moiety has shown to not present further metabolism.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup></p>
              <p />
            </dd><dt className="col-md-2 col-sm-4">Route of elimination</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The main elimination route of olmesartan is in the unchanged form through the feces. From the systemically bioavailable dose, about 10-16% is eliminated in the urine.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Half life</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The mean plasma olmesartan half-life is reported to be from 10-15 hours after multiple oral administration.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Brunner HR: The new oral angiotensin II antagonist olmesartan medoxomil: a concise overview. J Hum Hypertens. 2002 May;16 Suppl 2:S13-6. doi: 10.1038/sj.jhh.1001391. (PubMed ID 11967728)" href="#reference-A175330" data-original-title title>1</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Clearance</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Total plasma clearance of olmesartan is reported to be of 1.3 L/h and the renal clearance is 0.6 L/h.<sup className="text-reference-group"><a className="reference-popover-link" data-content="FDA pharmacology report" href="#reference-L5566" data-original-title title>6</a></sup></p>
            </dd><dt className="col-md-2 col-sm-4">Toxicity</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The reported LD50 of olmesartan in dogs was reported to be greater of 1500 mg/kg. Overdose is expressed as hypotension, tachycardia, and bradycardia when there is parasympathetic stimulation. In case of overdose, supportive treatment is recommended.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup></p>
              <p>Olmesartan was shown to be safe on carcinogenic and fertility studies. However, in <em>in vitro</em> mutagenic studies showed a potential to induce chromosomal aberrations in cells and it tested positive for thymidine kinase mutations in the mouse lymphoma assay.<sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup></p>
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
                    <td><a href="http://smpdb.ca/view/SMP0000163?highlight[compounds][]=DB00275&highlight[proteins][]=DB00275">Olmesartan Action Pathway</a></td>
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
                <li className="interactions index nav-item"><a className="toggle-row-display nav-link active" data-source="/drugs/DB00275/drug_interactions.json" href="#show-all">All Drugs</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00275/drug_interactions.json?group=approved" href="#show-approved">Approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00275/drug_interactions.json?group=vet_approved" href="#show-vet_approved">Vet approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00275/drug_interactions.json?group=nutraceutical" href="#show-nutraceutical">Nutraceutical</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00275/drug_interactions.json?group=illicit" href="#show-illicit">Illicit</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00275/drug_interactions.json?group=withdrawn" href="#show-withdrawn">Withdrawn</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00275/drug_interactions.json?group=investigational" href="#show-investigational">Investigational</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00275/drug_interactions.json?group=experimental" href="#show-experimental">Experimental</a></li>
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
                      <table className="table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB00275/drug_interactions.json" data-total={901} id="drug-interactions" style={{width: '100%'}} role="grid" aria-describedby="drug-interactions_info">
                        <thead>
                          <tr role="row">
                            <th className="head-sm sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '193.2px'}} aria-label="Drug: activate to sort column ascending">Drug</th>
                            <th className="sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '522.2px'}} aria-label="Interaction: activate to sort column ascending">Interaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid</a></td>
                            <td>The risk or severity of adverse effects can be increased when Olmesartan is combined with 1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">1-benzylimidazole</a></td>
                            <td>1-benzylimidazole may decrease the antihypertensive activities of Olmesartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">2,5-Dimethoxy-4-ethylamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylamphetamine may decrease the antihypertensive activities of Olmesartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">2,5-Dimethoxy-4-ethylthioamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylthioamphetamine may decrease the antihypertensive activities of Olmesartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">4-Bromo-2,5-dimethoxyamphetamine</a></td>
                            <td>4-Bromo-2,5-dimethoxyamphetamine may decrease the antihypertensive activities of Olmesartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">4-Methoxyamphetamine</a></td>
                            <td>4-Methoxyamphetamine may decrease the antihypertensive activities of Olmesartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">5-methoxy-N,N-dimethyltryptamine</a></td>
                            <td>5-methoxy-N,N-dimethyltryptamine may decrease the antihypertensive activities of Olmesartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">7,8-Dichloro-1,2,3,4-tetrahydroisoquinoline</a></td>
                            <td>7,8-Dichloro-1,2,3,4-tetrahydroisoquinoline may increase the hypotensive activities of Olmesartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">Abediterol</a></td>
                            <td>Abediterol may decrease the antihypertensive activities of Olmesartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">Acebutolol</a></td>
                            <td>The risk or severity of hyperkalemia can be increased when Olmesartan is combined with Acebutolol.</td>
                          </tr>
                        </tbody>
                      </table>
                      <div id="drug-interactions_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="drug-interactions_info" role="status" aria-live="polite">Showing 1 to 10 of 901 entries</div>
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
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={7} tabIndex={0} className="page-link">91</a></li>
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
                <li>Food does not affect the bioavailability of olmesartan.</li>
              </ul>
            </dd>
          </dl>
          <h2 id="references" className="section-header">References</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">External Links</dt>
            <dd className="col-md-10 col-sm-8">
              <dl><dt className="col-md-4 col-sm-5">Human Metabolome Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.hmdb.ca/metabolites/HMDB0014420">HMDB0014420</a></dd><dt className="col-md-4 col-sm-5">KEGG Drug</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.genome.jp/dbget-bin/www_bget?drug:D01204">D01204</a></dd><dt className="col-md-4 col-sm-5">PubChem Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=158781">158781</a></dd><dt className="col-md-4 col-sm-5">PubChem Substance</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?sid=46508275">46508275</a></dd><dt className="col-md-4 col-sm-5">ChemSpider</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.chemspider.com/Chemical-Structure.139674.html">139674</a></dd><dt className="col-md-4 col-sm-5">BindingDB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.bindingdb.org/bind/chemsearch/marvin/MolStructure.jsp?monomerid=50241364">50241364</a></dd><dt className="col-md-4 col-sm-5">ChEBI</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=48416">48416</a></dd><dt className="col-md-4 col-sm-5">ChEMBL</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chembldb/index.php/compound/inspect/CHEMBL1516">CHEMBL1516</a></dd><dt className="col-md-4 col-sm-5">Therapeutic Targets Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://bidd.nus.edu.sg/group/cjttd/ZFTTDDRUG.asp?ID=DAP001412">DAP001412</a></dd><dt className="col-md-4 col-sm-5">PharmGKB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.pharmgkb.org/drug/PA164742950">PA164742950</a></dd><dt className="col-md-4 col-sm-5">HET</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/pdbe-srv/pdbechem/chemicalCompound/show/OLM">OLM</a></dd><dt className="col-md-4 col-sm-5">Wikipedia</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://en.wikipedia.org/wiki/Olmesartan">Olmesartan</a></dd>
              </dl>
            </dd><dt className="col-md-2 col-sm-4">ATC Codes</dt>
            <dd className="col-md-10 col-sm-8"><a data-no-turbolink="true" href="javascript:void(0)">C09DA08 — Olmesartan medoxomil and diuretics</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DA — Angiotensin II receptor blockers (ARBs) and diuretics</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DX03 — Olmesartan medoxomil, amlodipine and hydrochlorothiazide</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DX — Angiotensin II receptor blockers (ARBs), other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09CA08 — Olmesartan medoxomil</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09CA — Angiotensin II receptor blockers (ARBs), plain</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09C — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DB02 — Olmesartan medoxomil and amlodipine</a>
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
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=4zud">4zud</a></span></span>
            </dd><dt className="col-md-2 col-sm-4">FDA label</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="label-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/fda_labels/DB00275.pdf?1551481706">Download</a> <span className="text-muted">(286 KB) </span></div>
            </dd><dt className="col-md-2 col-sm-4">MSDS</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="msds-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/msds/DB00275.pdf?1551478186">Download</a> <span className="text-muted">(509 KB) </span></div>
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
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '61.2px'}} aria-label="Status: activate to sort column ascending">Status</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '63.2px'}} aria-label="Purpose: activate to sort column ascending">Purpose</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '434.2px'}} aria-label="Conditions: activate to sort column ascending">Conditions</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '47.2px'}} aria-label="Count: activate to sort column ascending">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">7</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Not Yet Recruiting</td>
                          <td>Basic Science</td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Recruiting</td>
                          <td>Other</td>
                          <td><a href="javascript:void(0)">Bioequivalence</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>2</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Chronic Glomerulonephritis</a> <span>/</span> <a href="javascript:void(0)">Diabetic Nephropathies</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>2</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">4</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>2</td>
                          <td>Not Yet Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Coronary Syndrome</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>2</td>
                          <td>Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Stroke, Ischemic</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>2, 3</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 55 entries</div>
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
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={7} tabIndex={0} className="page-link">›</a></li>
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
                          <td>10 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>20 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>40 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>5 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>20 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>40 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>5 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet, coated</td>
                          <td>Oral</td>
                          <td>20 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet, coated</td>
                          <td>Oral</td>
                          <td>40 mg/1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dosages_info" role="status" aria-live="polite">Showing 1 to 10 of 15 entries</div>
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
            </dd><dt className="col-md-2 col-sm-4">Prices</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="prices_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="prices_length">
                      <label>Show
                        <select name="prices_length" aria-controls="prices" className="form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="prices_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="prices" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-sm datatable dataTable no-footer" id="prices" role="grid" aria-describedby="prices_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Unit description: activate to sort column ascending" style={{width: '453.203px'}}>Unit description</th>
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Cost: activate to sort column ascending" style={{width: '138.203px'}}>Cost</th>
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Unit: activate to sort column ascending" style={{width: '126.203px'}}>Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td>Benicar 5 mg tablet</td>
                          <td>12.81USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Benicar hct 40-25 mg tablet</td>
                          <td>4.93USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Benicar hct 40-12.5 mg tablet</td>
                          <td>4.67USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Benicar hct 20-12.5 mg tablet</td>
                          <td>3.94USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Benicar 40 mg tablet</td>
                          <td>3.74USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Benicar 20 mg tablet</td>
                          <td>2.97USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Olmetec 20 mg Tablet</td>
                          <td>1.04USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Olmetec 40 mg Tablet</td>
                          <td>1.04USD </td>
                          <td>tablet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="prices_info" role="status" aria-live="polite">Showing 1 to 8 of 8 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="prices_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="prices_previous"><a href="javascript:void(0)" aria-controls="prices" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="prices" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item next disabled" id="prices_next"><a href="javascript:void(0)" aria-controls="prices" data-dt-idx={2} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="alert alert-warning clearfix price-alert"><span className="glyphicon glyphicon-info-sign"> </span> DrugBank does not sell nor buy drugs. Pricing information is supplied for informational purposes only. </div>
            </dd><dt className="col-md-2 col-sm-4">Patents</dt>
            <dd className="col-md-10 col-sm-8 has-locked-content">
              <div id="patents_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="patents_length">
                      <label>Show
                        <select name="patents_length" aria-controls="patents" className="form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="patents_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="patents" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-sm datatable dt-responsive dataTable no-footer dtr-inline" id="patents" style={{width: '100%'}} role="grid" aria-describedby="patents_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="patents" rowSpan={1} colSpan={1} style={{width: '143.2px'}} aria-label="Patent Number: activate to sort column ascending">Patent Number</th>
                          <th className="sorting" tabIndex={0} aria-controls="patents" rowSpan={1} colSpan={1} style={{width: '187.2px'}} aria-label="Pediatric Extension: activate to sort column ascending">Pediatric Extension</th>
                          <th className="sorting" tabIndex={0} aria-controls="patents" rowSpan={1} colSpan={1} style={{width: '92.2px'}} aria-label="Approved: activate to sort column ascending">Approved</th>
                          <th className="sorting" tabIndex={0} aria-controls="patents" rowSpan={1} colSpan={1} style={{width: '181.2px'}} aria-label="Expires (estimated): activate to sort column ascending">Expires (estimated)</th>
                          <th className="sorting" tabIndex={0} aria-controls="patents" rowSpan={1} colSpan={1} style={{width: '7.2px'}} aria-label=": activate to sort column ascending" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/CA2061607">CA2061607</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>1999-01-19</td>
                          <td>2012-02-20</td>
                          <td className="country"><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US5616599">US5616599</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>1997-04-01</td>
                          <td>2016-10-25</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US6878703">US6878703</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>2005-04-12</td>
                          <td>2022-05-19</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="patents_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="patents_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="patents_previous"><a href="javascript:void(0)" aria-controls="patents" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="patents" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item next disabled" id="patents_next"><a href="javascript:void(0)" aria-controls="patents" data-dt-idx={2} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <h2 id="properties" className="section-header">Properties</h2>
          <dl><dt className="col-md-2 col-sm-4">State</dt>
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
                    <td>177.6 ºC</td>
                    <td>'MSDS'</td>
                  </tr>
                  <tr>
                    <td>boiling point (°C)</td>
                    <td>800 ºC at 760 mm Hg</td>
                    <td>'MSDS'</td>
                  </tr>
                  <tr>
                    <td>water solubility</td>
                    <td>Insoluble</td>
                    <td>FDA Chemical report</td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>0.73</td>
                    <td>FDA Pharmacological report</td>
                  </tr>
                  <tr>
                    <td>pKa</td>
                    <td>4.3</td>
                    <td>FDA Chemical report </td>
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
                    <td>0.0105 mg/mL</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>2.98</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>2.14</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#logp_logd">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>logS</td>
                    <td>-4.6</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Acidic)</td>
                    <td>0.91</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Basic)</td>
                    <td>5.57</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Physiological Charge</td>
                    <td>-2</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Acceptor Count</td>
                    <td>7</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Donor Count</td>
                    <td>3</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polar Surface Area</td>
                    <td>129.81 Å<sup>2</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topolgical_surface">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Rotatable Bond Count</td>
                    <td>8</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topology_analysis">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Refractivity</td>
                    <td>137.32 m<sup>3</sup>·mol<sup>-1</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#refractivity">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polarizability</td>
                    <td>47.46 Å<sup>3</sup></td>
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
                    <td>Yes</td>
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
                    <td>0.8719</td>
                  </tr>
                  <tr>
                    <td>Caco-2 permeable</td>
                    <td>-</td>
                    <td>0.6865</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein substrate</td>
                    <td>Substrate</td>
                    <td>0.7247</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor I</td>
                    <td>Non-inhibitor</td>
                    <td>0.5917</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor II</td>
                    <td>Inhibitor</td>
                    <td>0.6029</td>
                  </tr>
                  <tr>
                    <td>Renal organic cation transporter</td>
                    <td>Non-inhibitor</td>
                    <td>0.807</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.7429</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.8602</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.5149</td>
                  </tr>
                  <tr>
                    <td>CYP450 1A2 substrate</td>
                    <td>Non-inhibitor</td>
                    <td>0.782</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.5816</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.8059</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C19 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.6604</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.7409</td>
                  </tr>
                  <tr>
                    <td>CYP450 inhibitory promiscuity</td>
                    <td>High CYP Inhibitory Promiscuity</td>
                    <td>0.8396</td>
                  </tr>
                  <tr>
                    <td>Ames test</td>
                    <td>Non AMES toxic</td>
                    <td>0.6203</td>
                  </tr>
                  <tr>
                    <td>Carcinogenicity</td>
                    <td>Non-carcinogens</td>
                    <td>0.6871</td>
                  </tr>
                  <tr>
                    <td>Biodegradation</td>
                    <td>Not ready biodegradable</td>
                    <td>1.0</td>
                  </tr>
                  <tr>
                    <td>Rat acute toxicity</td>
                    <td>2.6599 LD50, mol/kg </td>
                    <td><span className="not-available">Not applicable</span></td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor I)</td>
                    <td>Weak inhibitor</td>
                    <td>0.9254</td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor II)</td>
                    <td>Non-inhibitor</td>
                    <td>0.6427</td>
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
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-qTof , Positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">MS/MS Spectrum - , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a6r-0692700000-11f020dfbb889ac85e4e">splash10-0a6r-0692700000-11f020dfbb889ac85e4e</a></td>
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
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000306" data-original-title="Compounds containing a phenyltetrazole skeleton, which consists of a tetrazole bound to a phenyl group.">Phenyltetrazoles and derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002633" data-original-title="Imidazoles in which the imidazole ring is substituted at for positions 1,2,4, and 5.">1,2,4,5-tetrasubstituted imidazoles</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002529" data-original-title="Substituted imidazoles in which the imidazole ring bears a carbonyl group.">Carbonylimidazoles</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002311" data-original-title="Heterocyclic compounds containing an imidazole ring substituted at position 1.">N-substituted imidazoles</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001670" data-original-title="Compounds in which a hydroxy group, -OH, is attached to a saturated carbon atom R3COH (R not H ).">Tertiary alcohols</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004144" data-original-title="Compounds containing an aromatic ring where a carbon atom is linked to an hetero atom.">Heteroaromatic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001137" data-original-title="Carboxylic acids containing exactly one carboxyl groups.">Monocarboxylic acids and derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001205" data-original-title="Compounds containing a carboxylic acid group with the formula -C(=O)OH.">Carboxylic acids</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004139" data-original-title="Organic compounds containing an heterocycle with at least one nitrogen atom and one carbon atom linked to each other.">Azacyclic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004557" data-original-title="Compounds containing a bond between carbon a pnictogen atom. Pnictogens are p-block element atoms that are in the group 15 of the periodic table.">Organopnictogen compounds</a></span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000278" data-original-title="Organic compounds containing a nitrogen atom.">Organonitrogen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003940" data-original-title="Organic compounds containing an oxide group.">Organic oxides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004150" data-original-title="Derivatives of hydrocarbons obtained by substituting one or more carbon atoms by an heteroatom. They contain at least one carbon atom and heteroatom.">Hydrocarbon derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003073" data-original-title="Compounds containing an alcohol group attached to an aromatic carbon.">Aromatic alcohols</a></span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 4 more</a>
            </dd><dt className="col-md-2 col-sm-4">Substituents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Biphenyl</span><span className="list-separator"> / </span><span className="separated-list-item">Phenyltetrazole</span><span className="list-separator"> / </span><span className="separated-list-item">1,2,4,5-tetrasubstituted imidazole</span><span className="list-separator"> / </span><span className="separated-list-item">Imidazole-4-carbonyl group</span><span className="list-separator"> / </span><span className="separated-list-item">N-substituted imidazole</span><span className="list-separator"> / </span><span className="separated-list-item">Azole</span><span className="list-separator"> / </span><span className="separated-list-item">Imidazole</span><span className="list-separator"> / </span><span className="separated-list-item">Heteroaromatic compound</span><span className="list-separator"> / </span><span className="separated-list-item">Tertiary alcohol</span><span className="list-separator"> / </span><span className="separated-list-item">Tetrazole</span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Carboxylic acid derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Carboxylic acid</span><span className="list-separator"> / </span><span className="separated-list-item">Monocarboxylic acid or derivatives</span><span className="list-separator"> / </span><span className="separated-list-item">Azacycle</span><span className="list-separator"> / </span><span className="separated-list-item">Organoheterocyclic compound</span><span className="list-separator"> / </span><span className="separated-list-item">Hydrocarbon derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Alcohol</span><span className="list-separator"> / </span><span className="separated-list-item">Organic nitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxide</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organonitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organooxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organopnictogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Aromatic alcohol</span><span className="list-separator"> / </span><span className="separated-list-item">Aromatic heteromonocyclic compound</span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 15 more</a>
            </dd><dt className="col-md-2 col-sm-4">Molecular Framework</dt>
            <dd className="col-md-10 col-sm-8">Aromatic heteromonocyclic compounds</dd><dt className="col-md-2 col-sm-4">External Descriptors</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item">biphenylyltetrazole (<a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:48416">CHEBI:48416</a>) </span></span>
            </dd>
          </dl>
          <div className="bond-list-container targets">
            <h3 id="targets">Targets</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0000062">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>1. <a href="javascript:void(0)">Type-1 angiotensin II receptor</a></strong></div>
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
                      <li id="reference-A4443">Koike H, Sada T, Mizuno M: In vitro and in vivo pharmacology of olmesartan medoxomil, an angiotensin II type AT1 receptor antagonist. J Hypertens Suppl. 2001 Jun;19(1):S3-14. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11451212">PubMed:11451212</a>] </li>
                      <li id="reference-A4444">Ochiai K, Hu Q, Lee J, Mansoor A, Liu J, Wang X, Gong G, Murakami Y, Ishibashi Y, Shimada T, Zhang J: Functional and bioenergetic consequences of AT1 antagonist olmesartan medoxomil in hearts with postinfarction LV remodeling. J Cardiovasc Pharmacol. 2006 May;47(5):686-94. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16775509">PubMed:16775509</a>] </li>
                      <li id="reference-A4445">Warner GT, Jarvis B: Olmesartan medoxomil. Drugs. 2002;62(9):1345-53; discussion 1354-6. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12076183">PubMed:12076183</a>] </li>
                      <li id="reference-A4446">Mire DE, Silfani TN, Pugsley MK: A review of the structural and functional features of olmesartan medoxomil, an angiotensin receptor blocker. J Cardiovasc Pharmacol. 2005 Nov;46(5):585-93. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16220064">PubMed:16220064</a>] </li>
                      <li id="reference-A4447">Kreutz R, Bolbrinker J, Huber M: Pharmacokinetics of olmesartan medoxomil plus hydrochlorothiazide combination in healthy subjects. Clin Drug Investig. 2006;26(1):29-34. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17163232">PubMed:17163232</a>] </li>
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
                          <div className="badge badge badge-no">No</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Binder</div>
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
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-L5566">FDA pharmacology report [<a target="_blank" href="https://www.accessdata.fda.gov/drugsatfda_docs/nda/2002/21-286_Benicar_biopharmr_P1.pdf">Link</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container transporters">
            <h3 id="transporters">Transporters</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0001069">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>1. <a href="javascript:void(0)">Canalicular multispecific organic anion transporter 1</a></strong></div>
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
                          <div className="badge badge-pill badge-action">Inducer</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Organic anion transmembrane transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Mediates hepatobiliary excretion of numerous organic anions. May function as a cellular cisplatin transporter.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">ABCC2</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q92887">Q92887</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Canalicular multispecific organic anion transporter 1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">174205.64 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16013">Weiss J, Sauer A, Divac N, Herzog M, Schwedhelm E, Boger RH, Haefeli WE, Benndorf RA: Interaction of angiotensin receptor type 1 blockers with ATP-binding cassette transporters. Biopharm Drug Dispos. 2010 Mar;31(2-3):150-61. doi: 10.1002/bdd.699. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/20222053">PubMed:20222053</a>] </li>
                      <li id="reference-A16014">Nakagomi-Hagihara R, Nakai D, Kawai K, Yoshigae Y, Tokui T, Abe T, Ikeda T: OATP1B1, OATP1B3, and mrp2 are involved in hepatobiliary transport of olmesartan, a novel angiotensin II blocker. Drug Metab Dispos. 2006 May;34(5):862-9. Epub 2006 Feb 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16501004">PubMed:16501004</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003659">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Solute carrier organic anion transporter family member 1B3</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Sodium-independent organic anion transmembrane transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Mediates the Na(+)-independent uptake of organic anions such as 17-beta-glucuronosyl estradiol, taurocholate, triiodothyronine (T3), leukotriene C4, dehydroepiandrosterone sulfate (DHEAS), methotre...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLCO1B3</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q9NPD5">Q9NPD5</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier organic anion transporter family member 1B3</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">77402.175 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16014">Nakagomi-Hagihara R, Nakai D, Kawai K, Yoshigae Y, Tokui T, Abe T, Ikeda T: OATP1B1, OATP1B3, and mrp2 are involved in hepatobiliary transport of olmesartan, a novel angiotensin II blocker. Drug Metab Dispos. 2006 May;34(5):862-9. Epub 2006 Feb 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16501004">PubMed:16501004</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0001004">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>3. <a href="javascript:void(0)">Solute carrier organic anion transporter family member 1B1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Sodium-independent organic anion transmembrane transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Mediates the Na(+)-independent uptake of organic anions such as pravastatin, taurocholate, methotrexate, dehydroepiandrosterone sulfate, 17-beta-glucuronosyl estradiol, estrone sulfate, prostagland...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLCO1B1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q9Y6L6">Q9Y6L6</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier organic anion transporter family member 1B1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">76447.99 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16014">Nakagomi-Hagihara R, Nakai D, Kawai K, Yoshigae Y, Tokui T, Abe T, Ikeda T: OATP1B1, OATP1B3, and mrp2 are involved in hepatobiliary transport of olmesartan, a novel angiotensin II blocker. Drug Metab Dispos. 2006 May;34(5):862-9. Epub 2006 Feb 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16501004">PubMed:16501004</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000703">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>4. <a href="javascript:void(0)">Bile salt export pump</a></strong></div>
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
          <p className="bt-2" id="drug-meta">Drug created on June 13, 2005 07:24 / Updated on July 11, 2019 00:50 </p>
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

export default Olmesartan;
