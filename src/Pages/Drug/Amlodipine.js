import React from 'react';
import './Amlodipine.scss';
import Navigation from '../../Components/Navigation/Navigation' ;

class Amlodipine extends React.Component {
  render() {
    return (
    <div>
      <div className="content-container">
        <div className="content-header d-sm-flex align-items-center">
          <h1 className="align-self-center mr-4">Amlodipine</h1>
          <div className="page-actions justify-content-sm-end mt-2 mt-sm-0">
            <div className="bond-links"><a className="btn bond-link targets" href="#targets">Targets (9)</a><a className="btn bond-link enzymes" href="#enzymes">Enzymes (6)</a><a className="btn bond-link carriers" href="#carriers">Carriers (4)</a><a className="btn bond-link transporters" href="#transporters">Transporters (1)</a></div>
          </div>
        </div>
        <div className="card-content px-md-4 px-sm-2 pb-md-4 pb-sm-2">
          <h2 id="identification" className="section-header">Identification</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">Name</dt>
            <dd className="col-md-10 col-sm-8">Amlodipine</dd>
            <dt className="col-md-2 col-sm-4">Accession Number</dt>
            <dd className="col-md-10 col-sm-8 drug-wrapper">
              <div className="ace-structure"><p> Drug Bank </p> DB00381&nbsp; (APRD00520)</div>
              <div className="ace-structure"><p> PubChem </p> 2162 </div>
            </dd>
            <dt className="col-md-2 col-sm-4">Type</dt>
            <dd className="col-md-10 col-sm-8">Small Molecule</dd><dt className="col-md-2 col-sm-4">Groups</dt>
            <dd className="col-md-10 col-sm-8">Approved</dd><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Amlodipine, initially approved by the FDA in 1987, is a popular antihypertensive drug belonging to the group of drugs called <em>dihydropyridine calcium channel blockers</em>. Due to their selectivity for the peripheral blood vessels, dihydropyridine calcium channel blockers are associated with a lower incidence of myocardial depression and cardiac conduction abnormalities than other calcium channel blockers <sup className="text-reference-group"><a className="reference-popover-link" data-content="Meredith PA, Elliott HL: Clinical pharmacokinetics of amlodipine. Clin Pharmacokinet. 1992 Jan;22(1):22-31. doi: 10.2165/00003088-199222010-00003. (PubMed ID 1532771)" href="#reference-A175327" data-original-title title>5</a></sup>.</p>
              <p>Amlodipine is commonly used in the treatment of high blood pressure and angina. Amlodipine has antioxidant properties and an ability to enhance the production of nitric oxide (NO), an important vasodilator that decreases blood pressure <sup className="text-reference-group"><a className="reference-popover-link" data-content="Fares H, DiNicolantonio JJ, O'Keefe JH, Lavie CJ: Amlodipine in hypertension: a first-line agent with efficacy for improving blood pressure and patient outcomes. Open Heart. 2016 Sep 28;3(2):e000473. doi: 10.1136/openhrt-2016-000473. eCollection 2016. (PubMed ID 27752334)" href="#reference-A175321" data-original-title title>3</a></sup>. The option for single daily dosing of amlodipine is an attractive feature of this drug <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">2D Structure</dt>
            <dd className="col-md-10 col-sm-8" style={{display:"flex"}}>
              <div className="structure ace-structure">
                <p>Drug bank </p>
                <img src={require(`./amlodipine.png`)} style={{width: "50%"}} alt=""/>
              </div>
              <div className="structure ace-structure">
                <p>PubChem</p>
                <img src={require(`./amlo_pubchem.png`)} style={{width: "45%"}} alt=""/>
              </div>
            </dd>
            <dt className="col-md-2 col-sm-4">Synonyms</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list-break">
                <li>(RS)-3-ethyl 5-methyl 2-[(2-aminoethoxy)methyl]-4-(2-chlorophenyl)-6-methyl-1,4-dihydropyridine-3,5-dicarboxylate</li>
                <li>3-Ethyl 5-methylester, (±)-2-[(2-aminoethoxy)methyl]-4-(o-chlorophenyl)-1,4-dihydro-6-methyl-3,5-pyridinedicarboxylate</li>
                <li>Amlodipine
                  <div className="language-flag english" title data-original-title="English" />
                  <div className="language-flag french" title data-original-title="French" />
                </li>
                <li>Amlodipine free base</li>
                <li>Amlodipino
                  <div className="language-flag spanish" title data-original-title="Spanish" />
                </li>
                <li>Amlodipinum
                  <div className="language-flag latin" title data-original-title="Latin" />
                </li>
              </ul>
            </dd>
            <dt className="col-md-2 col-sm-4">Prescription Products</dt>
            <dd className="col-md-10 col-sm-8 has-locked-content">
              <div id="approved-products_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="approved-products_length">
                      <label>Show
                        <select name="approved-products_length" aria-controls="approved-products" className="form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="approved-products_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="approved-products" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline collapsed" data-source="/drugs/DB00381/products.json?group=approved" data-total={111} id="approved-products" style={{width: '100%'}} role="grid" aria-describedby="approved-products_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '76.2px'}} aria-label="Name: activate to sort column ascending">Name</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '56.2px'}} aria-label="Dosage: activate to sort column ascending">Dosage</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '70.2px'}} aria-label="Strength: activate to sort column ascending">Strength</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '46.2px'}} aria-label="Route: activate to sort column ascending">Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '97.2px'}} aria-label="Labeller: activate to sort column ascending">Labeller</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                          <th className="drug-image sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '0px', display: 'none'}} aria-label=": activate to sort column ascending" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Act Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>10 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2009-07-10</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Act Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>5 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2009-07-10</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Act Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>2.5 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2010-03-02</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>2.5 mg</td>
                          <td>Oral</td>
                          <td>Sivem Pharmaceuticals Ulc</td>
                          <td>2012-06-11</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>5 mg/1</td>
                          <td>Oral</td>
                          <td>Caraco Pharmaceutical Laboratories, Ltd.</td>
                          <td>2008-12-15</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>10 mg</td>
                          <td>Oral</td>
                          <td>Jubilant Generics Limited</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>2.5 mg</td>
                          <td>Oral</td>
                          <td>Jamp Pharma Corporation</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>10 mg</td>
                          <td>Oral</td>
                          <td>Meliapharm Inc</td>
                          <td>2011-04-08</td>
                          <td>2014-06-25</td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>2.5 mg</td>
                          <td>Oral</td>
                          <td>Pro Doc Limitee</td>
                          <td>2009-07-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine</strong></td>
                          <td>Tablet</td>
                          <td>10 mg</td>
                          <td>Oral</td>
                          <td>Sanis Health Inc</td>
                          <td>2009-10-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                      </tbody>
                    </table>
                    <div id="approved-products_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="approved-products_info" role="status" aria-live="polite">Showing 1 to 10 of 111 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="approved-products_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="approved-products_previous"><a href="#" aria-controls="approved-products" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="approved-products" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="approved-products" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="approved-products" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="approved-products" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="approved-products" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item disabled" id="approved-products_ellipsis"><a href="#" aria-controls="approved-products" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="approved-products" data-dt-idx={7} tabIndex={0} className="page-link">12</a></li>
                        <li className="paginate_button page-item next" id="approved-products_next"><a href="#" aria-controls="approved-products" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
            <dt className="col-md-2 col-sm-4">Categories</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="category-columns">
                <ul className="list-unstyled table-list">
                  <li><a href="javascript:void(0)">ACE Inhibitors and Calcium Channel Blockers</a></li>
                  <li><a href="javascript:void(0)">Agents causing hyperkalemia</a></li>
                  <li><a href="javascript:void(0)">Angiotensin II Antagonists and Calcium Channel Blockers</a></li>
                  <li><a href="javascript:void(0)">Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                  <li><a href="javascript:void(0)">Antianginal Agents</a></li>
                  <li><a href="javascript:void(0)">Antiarrhythmic agents</a></li>
                  <li><a href="javascript:void(0)">Antihypertensive Agents</a></li>
                  <li><a href="javascript:void(0)">Bradycardia-Causing Agents</a></li>
                  <li><a href="javascript:void(0)">Calcium Channel Blockers</a></li>
                  <li><a href="javascript:void(0)">Calcium Channel Blockers (Dihydropyridine)</a></li>
                  <li><a href="javascript:void(0)">Calcium Channel Blockers and Diuretics</a></li>
                  <li><a href="javascript:void(0)0">Cardiovascular Agents</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2B6 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2B6 Inhibitors (strength unknown)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2B6 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C8 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C8 Inhibitors (moderate)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2D6 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2D6 Inhibitors (weak)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Substrates (strength unknown)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A5 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 Enzyme Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Dihydropyridine Derivatives</a></li>
                  <li><a href="javascript:void(0)">Dihydropyridines</a></li>
                  <li><a href="javascript:void(0)">Hypotensive Agents</a></li>
                  <li><a href="javascript:void(0)">Membrane Transport Modulators</a></li>
                  <li><a href="javascript:void(0)">P-glycoprotein/ABCB1 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">P-glycoprotein/ABCB1 Substrates</a></li>
                  <li><a href="javascript:void(0)">Potential QTc-Prolonging Agents</a></li>
                  <li><a href="javascript:void(0)">Pyridines</a></li>
                  <li><a href="javascript:void(0)">QTc Prolonging Agents</a></li>
                  <li><a href="javascript:void(0)">Selective Calcium Channel Blockers With Mainly Vascular Effects</a></li>
                  <li><a href="javascript:void(0)">Vasodilating Agents</a></li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">UNII</dt>
            <dd className="col-md-10 col-sm-8"><a target="_blank" rel="noopener noreferrer" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=1J444QC288">1J444QC288</a></dd><dt className="col-md-2 col-sm-4">CAS number</dt>
            <dd className="col-md-10 col-sm-8">88150-42-9</dd><dt className="col-md-2 col-sm-4">Weight</dt>
            <dd className="col-md-10 col-sm-8">Average: 408.876
              <br />Monoisotopic: 408.145199627 </dd><dt className="col-md-2 col-sm-4">Chemical Formula</dt>
            <dd className="col-md-10 col-sm-8">C<sub>20</sub>H<sub>25</sub>ClN<sub>2</sub>O<sub>5</sub></dd><dt className="col-md-2 col-sm-4">InChI Key</dt>
            <dd className="col-md-10 col-sm-8">HTIQEAQVCYTUBX-UHFFFAOYSA-N</dd><dt className="col-md-2 col-sm-4">InChI</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">InChI=1S/C20H25ClN2O5/c1-4-28-20(25)18-15(11-27-10-9-22)23-12(2)16(19(24)26-3)17(18)13-7-5-6-8-14(13)21/h5-8,17,23H,4,9-11,22H2,1-3H3</div>
            </dd><dt className="col-md-2 col-sm-4">IUPAC Name</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">3-ethyl 5-methyl 2-[(2-aminoethoxy)methyl]-4-(2-chlorophenyl)-6-methyl-1,4-dihydropyridine-3,5-dicarboxylate</div>
            </dd><dt className="col-md-2 col-sm-4">SMILES</dt>
            <dd className="col-md-10 col-sm-8 drug-wrapper">
              <div className="ace-structure">
                <p>Drug Bank </p>
                <div className="wrap">CCOC(=O)C1=C(COCCN)NC(C)=C(C1C1=CC=CC=C1Cl)C(=O)OC</div>
              </div>
              <div className="ace-structure">
                <p>PubChem</p>
                <div className="wrap">Canonical SMILES: CCOC(=O)C1=C(NC(=C(C1C2=CC=CC=C2Cl)C(=O)OC)C)COCCN </div>
              </div>
            </dd>
          </dl>
          <h2 id="pharmacology" className="section-header">Pharmacology</h2>
          <dl><dt className="col-md-2 col-sm-4">Indication</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Amlodipine may be used alone or in combination with other antihypertensive and antianginal agents for the treatment of the following conditions <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>:</p>
              <p>• Hypertension </p>
              <p>• Coronary artery disease</p>
              <p>• Chronic stable angina</p>
              <p>• Vasospastic angina (Prinzmetal’s or Variant angina) </p>
              <p>• Angiographically documented coronary artery disease in patients without heart failure or an ejection fraction &lt; 40%</p>
            </dd><dt className="col-md-2 col-sm-4">Associated Conditions</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li><a href="javascript:void(0)">Anginal Pain</a></li>
                <li><a href="javascript:void(0)">Chronic Stable Angina Pectoris</a></li>
                <li><a href="javascript:void(0)">Coronary Artery Disease</a></li>
                <li><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></li>
                <li><a href="javascript:void(0)">Vasospastic Angina</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Pharmacodynamics</dt>
            <dd className="col-md-10 col-sm-8">
              <p><strong>General pharmacodynamic effects</strong></p>
              <p>Amlodipine has a strong affinity for cell membranes, modulating calcium influx by inhibiting selected membrane calcium channels. This drug's unique binding properties allow for its long-acting action and less frequent dosing regimen <sup className="text-reference-group"><a className="reference-popover-link" data-content="Nayler WG, Gu XH: The unique binding properties of amlodipine: a long-acting calcium antagonist. J Hum Hypertens. 1991 Aug;5 Suppl 1:55-9. (PubMed ID 1834847)" href="#reference-A573" data-original-title title>1</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
              <p><strong>Hemodynamic effects</strong></p>
              <p>After the administration of therapeutic doses of amlodipine to patients diagnosed with hypertension, amlodipine causes vasodilation, which results in a reduction of supine and standing blood pressure. During these blood pressure reductions, there are no clinically significant changes in heart rate or plasma catecholamine levels with long-term use. Acute intravenous administration of amlodipine reduces arterial blood pressure and increases heart rate in patients with chronic stable angina, however, chronic oral administration of amlodipine in clinical studies did not cause clinically significant alterations in heart rate or blood pressures in patients diagnosed with angina and normal blood pressure. With long-term, once daily oral administration, antihypertensive effectiveness is maintained for at least 24 hours <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
              <p><strong>Electrophysiologic effects</strong></p>
              <p>Amlodipine does not change sinoatrial (SA) nodal function or atrioventricular (AV) conduction in animals or humans. In patients who were diagnosed with chronic stable angina, the intravenous administration of 10 mg of amlodipine did not cause clinically significant alterations A-H and H-V conduction and sinus node recovery time after cardiac pacing. Patients administered amlodipine with concomitant beta-blockers produced similar results. In clinical trials in which amlodipine was given in combination with beta-blockers to patients diagnosed with hypertension or angina, no adverse effects on electrocardiographic parameters were noted. In clinical studies comprised of angina patients alone, amlodipine did not change electrocardiographic intervals or produce high degrees of AV block <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
              <p><strong>Effects on angina</strong></p>
              <p>Amlodipine relieves the symptoms of chest pain associated with angina. In patients diagnosed with angina, daily administration of a single amlodipine dose increases total exercise time, the time to angina onset, and the time to 1 mm ST-segment depression on ECG studies, decreases anginal attack frequency, and decreases the requirement for nitroglycerin tablets <sup className="text-reference-group"><a className="reference-popover-link" data-content="Apo amlodipine tablets, MedSafe NZ" href="#reference-F3757" data-original-title title>7</a></sup>. </p>
            </dd>
            <dt className="col-md-2 col-sm-4">Mechanism of action</dt>
            <dd className="col-md-10 col-sm-8">
              <p><strong>Mechanism of action on blood pressure</strong></p>
              <p>Amlodipine is considered a peripheral arterial vasodilator that exerts its action directly on vascular smooth muscle to lead to a reduction in peripheral vascular resistance, causing a decrease in blood pressure. Amlodipine is a dihydropyridine calcium antagonist (calcium ion antagonist or slow-channel blocker) that inhibits the influx of calcium ions into both vascular smooth muscle and cardiac muscle. Experimental studies imply that amlodipine binds to both <em>dihydropyridine</em> and <em>nondihydropyridine</em> binding sites, located on cell membranes. The contraction of cardiac muscle and vascular smooth muscle are dependent on the movement of extracellular calcium ions into these cells by specific ion channels. Amlodipine blocks calcium ion influx across cell membranes with selectivity. A stronger effect of amlodipine is exerted on vascular smooth muscle cells than on cardiac muscle cells <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. Direct actions of amlodipine on vascular smooth muscle result in reduced blood pressure <sup className="text-reference-group"><a className="reference-popover-link" data-content="Apo amlodipine tablets, MedSafe NZ" href="#reference-F3757" data-original-title title>7</a></sup>. </p>
              <p><strong>Mechanism of action in angina</strong></p>
              <p>The exact mechanism by which amlodipine relieves the symptoms of angina have not been fully elucidated to this date, however, the mechanism of action is likely twofold:</p>
              <p>Amlodipine has a dilating effect on peripheral arterioles, reducing the total peripheral resistance (afterload) against which the cardiac muscle functions. Since the heart rate remains stable during amlodipine administration, the reduced work of the heart reduces both myocardial energy use and oxygen requirements <sup className="text-reference-group"><a className="reference-popover-link" data-content="Apo amlodipine tablets, MedSafe NZ" href="#reference-F3757" data-original-title title>7</a></sup>.</p>
              <p>Dilatation of the main coronary arteries and coronary arterioles, both in healthy and ischemic areas, is another possible mechanism of amlodipine reduction of blood pressure. The dilatation causes an increase in myocardial oxygen delivery in patients experiencing coronary artery spasm (Prinzmetal's or variant angina) and reduces coronary vasoconstriction caused by smoking <sup className="text-reference-group"><a className="reference-popover-link" data-content="Apo amlodipine tablets, MedSafe NZ" href="#reference-F3757" data-original-title title>7</a></sup>.</p>
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
                    <td><span className="badge badge-pill badge-yes mr-2 tips" title data-original-title="Pharmacologically Active">A</span><a href="#BE0000430">Voltage-dependent L-type calcium channel subunit alpha-1C</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0002226">Voltage-dependent N-type calcium channel subunit alpha-1B</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000303">Voltage-dependent L-type calcium channel subunit beta-1</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0003563">Voltage-dependent calcium channel subunit alpha-2/delta-3</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000267">Carbonic anhydrase 1</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000973">Sphingomyelin phosphodiesterase</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-yes mr-2 tips" title data-original-title="Pharmacologically Active">A</span><a href="#BE0004902">Voltage-dependent calcium channel</a></td>
                    <td>
                      <div className="label label-default">blocker</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-yes mr-2 tips" title data-original-title="Pharmacologically Active">A</span><a href="#BE0000012">Voltage-dependent T-type calcium channel subunit alpha-1I</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0009351">Voltage-dependent N-type calcium channel</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                </tbody>
              </table>
            </dd>
            <dt className="col-md-2 col-sm-4">Absorption</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Amlodipine absorbed slowly and almost completely from the gastrointestinal tract. Peak plasma concentrations are achieved 6-12 hours after oral administration. The estimated bioavailability of amlodipine is 64-90%. Steady-state plasma amlodipine levels are achieved after 7-8 days of consecutive daily dosing. Absorption is not affected by food <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Volume of distribution</dt>
            <dd className="col-md-10 col-sm-8">
              <p>21 L/kg <sup className="text-reference-group"><a className="reference-popover-link" data-content="Meredith PA, Elliott HL: Clinical pharmacokinetics of amlodipine. Clin Pharmacokinet. 1992 Jan;22(1):22-31. doi: 10.2165/00003088-199222010-00003. (PubMed ID 1532771)" href="#reference-A175327" data-original-title title>5</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Faulkner JK, McGibney D, Chasseaud LF, Perry JL, Taylor IW: The pharmacokinetics of amlodipine in healthy volunteers after single intravenous and oral doses and after 14 repeated oral doses given once daily. Br J Clin Pharmacol. 1986 Jul;22(1):21-5. (PubMed ID 2943308)" href="#reference-A175336" data-original-title title>6</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Protein binding</dt>
            <dd className="col-md-10 col-sm-8">
              <p>About 98% <sup className="text-reference-group"><a className="reference-popover-link" data-content="Meredith PA, Elliott HL: Clinical pharmacokinetics of amlodipine. Clin Pharmacokinet. 1992 Jan;22(1):22-31. doi: 10.2165/00003088-199222010-00003. (PubMed ID 1532771)" href="#reference-A175327" data-original-title title>5</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Faulkner JK, McGibney D, Chasseaud LF, Perry JL, Taylor IW: The pharmacokinetics of amlodipine in healthy volunteers after single intravenous and oral doses and after 14 repeated oral doses given once daily. Br J Clin Pharmacol. 1986 Jul;22(1):21-5. (PubMed ID 2943308)" href="#reference-A175336" data-original-title title>6</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Metabolism</dt>
            <dd className="col-md-10 col-sm-8">
              <p />
              <p>Amlodipine is heavily (approximately 90%) converted to inactive metabolites via hepatic breakdown with 10% of the parent compound and 60% of the metabolites found excreted in the urine. <em>Ex vivo</em> studies have shown that about 93% of the circulating drug is bound to plasma proteins in hypertensive patients <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. Characteristics that add to amlodipine's unique pharmacologic profile include nearly complete absorption, late-peak plasma concentrations, high bioavailability, and slow hepatic breakdown <sup className="text-reference-group"><a className="reference-popover-link" data-content="van Zwieten PA: Amlodipine: an overview of its pharmacodynamic and pharmacokinetic properties. Clin Cardiol. 1994 Sep;17(9 Suppl 3):III3-6. (PubMed ID 9156957)" href="#reference-A574" data-original-title title>2</a></sup>.</p>
              <p />
            </dd><dt className="col-md-2 col-sm-4">Route of elimination</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Elimination from the plasma occurs in a biphasic with a terminal elimination half-life of about 30–50 hours. Steady-state plasma levels of amlodipine are reached after 7-8 days of consecutive daily dosing <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. Amlodipine is 10% excreted as unchanged drug in the urine. Amlodipine can be initiated at normal doses in patients diagnosed with renal failure <sup className="text-reference-group"><a className="reference-popover-link" data-content="Apo amlodipine tablets, MedSafe NZ" href="#reference-F3757" data-original-title title>7</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Half life</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The terminal elimination half-life of about 30–50 hours <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p>Plasma elimination half-life is 56 hours in patients with impaired hepatic function, titrate slowly when administering this drug to patients with severe hepatic impairment <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Clearance</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Total body clearance (CL) has been calculated as 7 ± 1.3 ml/min/kg (0.42 ± 0.078 L/ h/kg) in healthy volunteers <sup className="text-reference-group"><a className="reference-popover-link" data-content="Meredith PA, Elliott HL: Clinical pharmacokinetics of amlodipine. Clin Pharmacokinet. 1992 Jan;22(1):22-31. doi: 10.2165/00003088-199222010-00003. (PubMed ID 1532771)" href="#reference-A175327" data-original-title title>5</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Faulkner JK, McGibney D, Chasseaud LF, Perry JL, Taylor IW: The pharmacokinetics of amlodipine in healthy volunteers after single intravenous and oral doses and after 14 repeated oral doses given once daily. Br J Clin Pharmacol. 1986 Jul;22(1):21-5. (PubMed ID 2943308)" href="#reference-A175336" data-original-title title>6</a></sup>. </p>
              <p>Elderly patients show a reduced clearance of amlodipine with an AUC (area under the curve) increase of about 40–60%, and a lower initial dose may be required <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Toxicity</dt>
            <dd className="col-md-10 col-sm-8">
              <p><strong>Acute oral toxicity (LD50)</strong>: 37 mg/kg (mouse) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Material Safety Data Sheet" href="#msds-reference" data-original-title title>MSDS</a></sup>. </p>
              <p><strong>Overdose</strong></p>
              <p>An overdose of amlodipine could result in a high degree of peripheral vasodilatation with a possibility of reflex tachycardia. Significant and prolonged hypotension leading to shock and fatal outcomes have been reported <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p><strong>Carcinogenesis, mutagenesis, impairment of fertility</strong></p>
              <p>Rats and mice treated with amlodipine maleate in the diet on a long-term basis for up to 2 years demonstrated no evidence of a carcinogenic effect of the drug. For the mouse, the highest dose was comparable to the maximum recommended human dose of 10 mg amlodipine per day. For the rat, the highest dose was measured to be about twice the maximum recommended human dose <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p>Mutagenicity studies using amlodipine maleate showed no drug-related gene or chromosomal effects <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p>There was no impact on the fertility of rats given oral amlodipine maleate (males for 64 days and females for 14 days before mating) at doses up to 10 mg amlodipine/kg/day (8 times the maximum recommended human dose) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p><strong>Use in pregnancy</strong></p>
              <p>The safety of amlodipine in human pregnancy or lactation has not been proven. Amlodipine is therefore considered a pregnancy category C drug <sup className="text-reference-group"><a className="reference-popover-link" data-content="Apo amlodipine tablets, MedSafe NZ" href="#reference-F3757" data-original-title title>7</a></sup>. Use amlodipine only if the potential benefit justifies the potential risk <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
              <p><strong>Use in nursing</strong></p>
              <p>Discontinue when administering amlodipine <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
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
                    <td><a href="http://smpdb.ca/view/SMP0000376?highlight[compounds][]=DB00381&highlight[proteins][]=DB00381">Amlodipine Action Pathway</a></td>
                    <td>Drug action</td>
                  </tr>
                </tbody>
              </table>
            </dd><dt className="col-md-2 col-sm-4">Pharmacogenomic Effects/ADRs <a tabIndex={0} role="button" data-toggle="popover" data-content="SNP Mediated Pharmacological Effects and Adverse Drug Reactions (ADRs) is a compilation of drug-specific pharmacogenomic information from various sources and primary literature. — <a target=&quot;_blank&quot; href=&quot;/snp_actions&quot;>Browse all</a>" title id="snp-actions-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About SNP Mediated Effects/ADRs"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
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
                    <table className="table table-sm table-bordered datatable dt-responsive dataTable no-footer dtr-inline" style={{width: '100%'}} id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '103.2px'}} aria-label="Interacting Gene/Enzyme: activate to sort column ascending">Interacting Gene/Enzyme</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '51.2px'}} aria-label="Allele name: activate to sort column ascending">Allele name</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '92.2px'}} aria-label="Genotype(s): activate to sort column ascending">Genotype(s)</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '76.2px'}} aria-label="Defining Change(s): activate to sort column ascending">Defining Change(s)</th>
                          <th className="no-sort sorting_disabled" rowSpan={1} colSpan={1} style={{width: '53.4px'}} aria-label="Type(s)">Type(s)</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '191.2px'}} aria-label="Description: activate to sort column ascending">Description</th>
                          <th className="no-sort sorting_disabled" rowSpan={1} colSpan={1} style={{width: '64.4px'}} aria-label="Details">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Natriuretic peptides A</strong></td>
                          <td><span className="not-available">---</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">(A;A)</span></span>
                            </span>
                          </td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs5065">AA allele</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-success basic-tip" title="Directly studied, with clinical relevance">Directly Studied</span></td>
                          <td>Patients with this genotype have increased risk of adverse cardiovascular outcomes with diuretics.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <h2 id="interactions" className="section-header">Interactions</h2>
          <dl><dt className="col-md-2 col-sm-4">Drug Interactions <a tabIndex={0} role="button" data-toggle="popover" data-content="Drug-drug interactions extracted from drug labels and scientific publications. The commercial version includes severity and basis for interaction. — <a target=&quot;_blank&quot; href=&quot;https://drugbankplus.com/data&quot;>Learn More</a>" title id="structured-interactions-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About Drug Interactions"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="nav nav-tabs drug-interaction-tabs">
                <li className="interactions index nav-item"><a className="toggle-row-display nav-link active" data-source="/drugs/DB00381/drug_interactions.json" href="#show-all">All Drugs</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00381/drug_interactions.json?group=approved" href="#show-approved">Approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00381/drug_interactions.json?group=vet_approved" href="#show-vet_approved">Vet approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00381/drug_interactions.json?group=nutraceutical" href="#show-nutraceutical">Nutraceutical</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00381/drug_interactions.json?group=illicit" href="#show-illicit">Illicit</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00381/drug_interactions.json?group=withdrawn" href="#show-withdrawn">Withdrawn</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00381/drug_interactions.json?group=investigational" href="#show-investigational">Investigational</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00381/drug_interactions.json?group=experimental" href="#show-experimental">Experimental</a></li>
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
                      <table className="table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB00381/drug_interactions.json" data-total={1810} id="drug-interactions" style={{width: '100%'}} role="grid" aria-describedby="drug-interactions_info">
                        <thead>
                          <tr role="row">
                            <th className="head-sm sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '195.2px'}} aria-label="Drug: activate to sort column ascending">Drug</th>
                            <th className="sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '520.2px'}} aria-label="Interaction: activate to sort column ascending">Interaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">(R)-warfarin</a></td>
                            <td>The metabolism of (R)-warfarin can be decreased when combined with Amlodipine.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">(S)-Warfarin</a></td>
                            <td>The metabolism of (S)-Warfarin can be decreased when combined with Amlodipine.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid</a></td>
                            <td>The therapeutic efficacy of 1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid can be increased when used in combination with Amlodipine.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">1-benzylimidazole</a></td>
                            <td>1-benzylimidazole may decrease the antihypertensive activities of Amlodipine.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">2,4-thiazolidinedione</a></td>
                            <td>The risk or severity of hypoglycemia can be increased when Amlodipine is combined with 2,4-thiazolidinedione.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">2,5-Dimethoxy-4-ethylamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylamphetamine may decrease the antihypertensive activities of Amlodipine.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">2,5-Dimethoxy-4-ethylthioamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylthioamphetamine may decrease the antihypertensive activities of Amlodipine.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">3,5-diiodothyropropionic acid</a></td>
                            <td>The metabolism of 3,5-diiodothyropropionic acid can be decreased when combined with Amlodipine.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">4-Bromo-2,5-dimethoxyamphetamine</a></td>
                            <td>4-Bromo-2,5-dimethoxyamphetamine may decrease the antihypertensive activities of Amlodipine.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">4-hydroxycoumarin</a></td>
                            <td>The metabolism of 4-hydroxycoumarin can be decreased when combined with Amlodipine.</td>
                          </tr>
                        </tbody>
                      </table>
                      <div id="drug-interactions_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="drug-interactions_info" role="status" aria-live="polite">Showing 1 to 10 of 1,810 entries</div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_numbers" id="drug-interactions_paginate">
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled" id="drug-interactions_previous"><a href="#" aria-controls="drug-interactions" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                          <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                          <li className="paginate_button page-item disabled" id="drug-interactions_ellipsis"><a href="#" aria-controls="drug-interactions" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={7} tabIndex={0} className="page-link">181</a></li>
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
                <li>Avoid natural licorice.</li>
                <li>Grapefruit down regulates post-translational expression of CYP3A4, the major metabolizing enzyme of amlodipine. Grapefruit, in all forms (e.g. whole fruit, juice and rind), can significantly increase serum levels of amlodipine and may cause toxicity. Avoid grapefruit products while on this medication. </li>
                <li>Take without regard to meals.</li>
              </ul>
            </dd>
          </dl>
          <h2 id="references" className="section-header">References</h2>
          <dl><dt className="col-md-2 col-sm-4">Synthesis Reference</dt>
            <dd className="col-md-10 col-sm-8"><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?tbm=pts#q=4572909&tbm=pts">US4572909</a></dd><dt className="col-md-2 col-sm-4">General References</dt>
            <dd className="col-md-10 col-sm-8">
              <ol className="cite-this-references">
                <li id="reference-A573">Nayler WG, Gu XH: The unique binding properties of amlodipine: a long-acting calcium antagonist. J Hum Hypertens. 1991 Aug;5 Suppl 1:55-9. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/1834847">PubMed:1834847</a>] </li>
                <li id="reference-A574">van Zwieten PA: Amlodipine: an overview of its pharmacodynamic and pharmacokinetic properties. Clin Cardiol. 1994 Sep;17(9 Suppl 3):III3-6. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/9156957">PubMed:9156957</a>] </li>
                <li id="reference-A175321">Fares H, DiNicolantonio JJ, O'Keefe JH, Lavie CJ: Amlodipine in hypertension: a first-line agent with efficacy for improving blood pressure and patient outcomes. Open Heart. 2016 Sep 28;3(2):e000473. doi: 10.1136/openhrt-2016-000473. eCollection 2016. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/27752334">PubMed:27752334</a>] </li>
                <li id="reference-A175324">Flynn JT, Nahata MC, Mahan JD Jr, Portman RJ: Population pharmacokinetics of amlodipine in hypertensive children and adolescents. J Clin Pharmacol. 2006 Aug;46(8):905-16. doi: 10.1177/0091270006289844. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16855075">PubMed:16855075</a>] </li>
                <li id="reference-A175327">Meredith PA, Elliott HL: Clinical pharmacokinetics of amlodipine. Clin Pharmacokinet. 1992 Jan;22(1):22-31. doi: 10.2165/00003088-199222010-00003. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/1532771">PubMed:1532771</a>] </li>
                <li id="reference-A175336">Faulkner JK, McGibney D, Chasseaud LF, Perry JL, Taylor IW: The pharmacokinetics of amlodipine in healthy volunteers after single intravenous and oral doses and after 14 repeated oral doses given once daily. Br J Clin Pharmacol. 1986 Jul;22(1):21-5. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/2943308">PubMed:2943308</a>] </li>
                <li id="reference-F3757">Apo amlodipine tablets, MedSafe NZ [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/757/original/ApoAmlodipinetab_MedSafe_NZ.pdf?1551474087">File</a>] </li>
              </ol>
            </dd><dt className="col-md-2 col-sm-4">External Links</dt>
            <dd className="col-md-10 col-sm-8">
              <dl><dt className="col-md-4 col-sm-5">Human Metabolome Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.hmdb.ca/metabolites/HMDB0005018">HMDB0005018</a></dd><dt className="col-md-4 col-sm-5">KEGG Drug</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.genome.jp/dbget-bin/www_bget?drug:D07450">D07450</a></dd><dt className="col-md-4 col-sm-5">KEGG Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.genome.jp/dbget-bin/www_bget?cpd:C06825">C06825</a></dd><dt className="col-md-4 col-sm-5">PubChem Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=2162">2162</a></dd><dt className="col-md-4 col-sm-5">PubChem Substance</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?sid=46507214">46507214</a></dd><dt className="col-md-4 col-sm-5">ChemSpider</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.chemspider.com/Chemical-Structure.2077.html">2077</a></dd><dt className="col-md-4 col-sm-5">BindingDB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.bindingdb.org/bind/chemsearch/marvin/MolStructure.jsp?monomerid=50088383">50088383</a></dd><dt className="col-md-4 col-sm-5">ChEBI</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=2668">2668</a></dd><dt className="col-md-4 col-sm-5">ChEMBL</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chembldb/index.php/compound/inspect/CHEMBL1491">CHEMBL1491</a></dd><dt className="col-md-4 col-sm-5">Therapeutic Targets Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://bidd.nus.edu.sg/group/cjttd/ZFTTDDRUG.asp?ID=DAP000139">DAP000139</a></dd><dt className="col-md-4 col-sm-5">PharmGKB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.pharmgkb.org/drug/PA448388">PA448388</a></dd><dt className="col-md-4 col-sm-5">Wikipedia</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://en.wikipedia.org/wiki/Amlodipine">Amlodipine</a></dd>
              </dl>
            </dd><dt className="col-md-2 col-sm-4">ATC Codes</dt>
            <dd className="col-md-10 col-sm-8"><a data-no-turbolink="true" href="javascript:void(0)">C09XA54 — Aliskiren, amlodipine and hydrochlorothiazide</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09XA — Renin-inhibitors</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09X — OTHER AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C10BX07 — Rosuvastatin, amlodipine and lisinopril</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10BX — HMG CoA reductase inhibitors, other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10B — LIPID MODIFYING AGENTS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10 — LIPID MODIFYING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09BB03 — Lisinopril and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09BB — ACE inhibitors and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09B — ACE INHIBITORS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09BB04 — Perindopril and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09BB — ACE inhibitors and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09B — ACE INHIBITORS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C07FB07 — Bisoprolol and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07FB — Beta blocking agents and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07F — BETA BLOCKING AGENTS, OTHER COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07 — BETA BLOCKING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DB06 — Losartan and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C07FB12 — Nebivolol and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07FB — Beta blocking agents and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07F — BETA BLOCKING AGENTS, OTHER COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07 — BETA BLOCKING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DB05 — Irbesartan and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09XA53 — Aliskiren and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09XA — Renin-inhibitors</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09X — OTHER AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C10BX03 — Atorvastatin and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10BX — HMG CoA reductase inhibitors, other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10B — LIPID MODIFYING AGENTS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10 — LIPID MODIFYING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C07FB13 — Metoprolol and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07FB — Beta blocking agents and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07F — BETA BLOCKING AGENTS, OTHER COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C07 — BETA BLOCKING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C08CA01 — Amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C08CA — Dihydropyridine derivatives</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C08C — SELECTIVE CALCIUM CHANNEL BLOCKERS WITH MAINLY VASCULAR EFFECTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C08 — CALCIUM CHANNEL BLOCKERS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09BX03 — Ramipril, amlodipine and hydrochlorothiazide</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09BX — ACE inhibitors, other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09B — ACE INHIBITORS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DB04 — Telmisartan and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DX03 — Olmesartan medoxomil, amlodipine and hydrochlorothiazide</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DX — Angiotensin II receptor blockers (ARBs), other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C08GA02 — Amlodipine and diuretics</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C08GA — Calcium channel blockers and diuretics</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C08G — CALCIUM CHANNEL BLOCKERS AND DIURETICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C08 — CALCIUM CHANNEL BLOCKERS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DB07 — Candesartan and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DX06 — Candesartan, amlodipine and hydrochlorothiazide</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DX — Angiotensin II receptor blockers (ARBs), other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09BX01 — Perindopril, amlodipine and indapamide</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09BX — ACE inhibitors, other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09B — ACE INHIBITORS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C10BX11 — Atorvastatin, amlodipine and perindopril</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10BX — HMG CoA reductase inhibitors, other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10B — LIPID MODIFYING AGENTS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10 — LIPID MODIFYING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DB02 — Olmesartan medoxomil and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C10BX09 — Rosuvastatin and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)X">C10BX — HMG CoA reductase inhibitors, other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10B — LIPID MODIFYING AGENTS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10 — LIPID MODIFYING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DX01 — Valsartan, amlodipine and hydrochlorothiazide</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DX — Angiotensin II receptor blockers (ARBs), other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09DB01 — Valsartan and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C10BX14 — Rosuvastatin, amlodipine and perindopril</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10BX — HMG CoA reductase inhibitors, other combinations</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10B — LIPID MODIFYING AGENTS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C10 — LIPID MODIFYING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">C09BB07 — Ramipril and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09BB — ACE inhibitors and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09B — ACE INHIBITORS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">AHFS Codes</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>24:28.08 — Dihydropyridines</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">FDA label</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="label-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/fda_labels/DB00381.pdf?1551459667">Download</a> <span className="text-muted">(270 KB) </span></div>
            </dd><dt className="col-md-2 col-sm-4">MSDS</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="msds-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/msds/DB00381.pdf?1265922739">Download</a> <span className="text-muted">(74.5 KB) </span></div>
            </dd>
          </dl>
          <h2 id="clinical-trials" className="section-header">Clinical Trials</h2>
          <dl><dt className="col-md-2 col-sm-4">Clinical Trials <a tabIndex={0} role="button" data-toggle="popover" data-content="Clinical trial data extracted from government clinical trial databases. The commercial version includes title, phase, status, dates, and conditions with associated ICD10 or MedDRA identifiers. — <a target=&quot;_blank&quot; href=&quot;https://drugbankplus.com/data&quot;>Learn More</a>" title id="clinical-trials-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About Clinical Trials"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8">
              <div id="DataTables_Table_1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="DataTables_Table_1_length">
                      <label>Show
                        <select name="DataTables_Table_1_length" aria-controls="DataTables_Table_1" className="form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="DataTables_Table_1_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_1" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="clinical-trials table table-sm datatable dt-responsive dataTable no-footer dtr-inline" style={{width: '100%'}} id="DataTables_Table_1" role="grid" aria-describedby="DataTables_Table_1_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '45.2px'}} aria-label="Phase: activate to sort column ascending">Phase</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '48.2px'}} aria-label="Status: activate to sort column ascending">Status</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '63.2px'}} aria-label="Purpose: activate to sort column ascending">Purpose</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '447.2px'}} aria-label="Conditions: activate to sort column ascending">Conditions</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '47.2px'}} aria-label="Count: activate to sort column ascending">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Chronic Obstructive Pulmonary Disease (COPD)</a> <span>/</span> <a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Healhty</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">14</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">3</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Hypertension,Essential</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="javascript:void(0)">Healthy Male Subjects</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">2</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Diagnostic</td>
                          <td><a href="javascript:void(0)">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Other</td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1 to 10 of 204 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_1_previous"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item disabled" id="DataTables_Table_1_ellipsis"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={7} tabIndex={0} className="page-link">21</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_1_next"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <h2 id="pharmacoeconomics" className="section-header">Pharmacoeconomics</h2>
          <dl><dt className="col-md-2 col-sm-4">Manufacturers</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="manufacturer-columns">
                <ul className="list-unstyled table-list">
                  <li>Synthon pharmaceuticals inc</li>
                  <li>Actavis totowa llc</li>
                  <li>Alkem laboratories ltd</li>
                  <li>Amneal pharmaceuticals ny llc</li>
                  <li>Apotex inc</li>
                  <li>Aurobindo pharma ltd</li>
                  <li>Caraco pharmaceutical laboratories ltd</li>
                  <li>Dr reddys laboratories ltd</li>
                  <li>Gedeon richter usa inc</li>
                  <li>Genpharm inc</li>
                  <li>Glenmark generics ltd</li>
                  <li>Invagen pharmaceuticals inc</li>
                  <li>Lek pharmaceuticals dd</li>
                  <li>Lupin ltd</li>
                  <li>Matrix laboratories ltd</li>
                  <li>Mutual pharmacal co</li>
                  <li>Mylan laboratories inc</li>
                  <li>Orchid healthcare</li>
                  <li>Ranbaxy laboratories ltd</li>
                  <li>Roxane laboratories inc</li>
                  <li>Teva pharmaceuticals usa inc</li>
                  <li>Torrent pharmaceuticals ltd</li>
                  <li>Upsher smith laboratories inc</li>
                  <li>Vintage pharmaceuticals llc</li>
                  <li>Watson laboratories inc</li>
                  <li>Wockhardt ltd</li>
                  <li>World gen llc</li>
                  <li>Zydus pharmaceuticals usa inc</li>
                  <li>Pfizer inc</li>
                  <li>Dr reddys laboratories inc</li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Packagers</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="packager-columns">
                <ul className="list-unstyled table-list">
                  <li>Actavis Group</li>
                  <li>Advanced Pharmaceutical Services Inc.</li>
                  <li>Amerisource Health Services Corp.</li>
                  <li>Amneal Pharmaceuticals</li>
                  <li>Apotex Inc.</li>
                  <li>AQ Pharmaceuticals Inc.</li>
                  <li>Arrow Pharm Malta Ltd.</li>
                  <li>A-S Medication Solutions LLC</li>
                  <li>Aurobindo Pharma Ltd.</li>
                  <li>Beijing Second Pharmaceutical Co. Ltd.</li>
                  <li>Blu Pharmaceuticals LLC</li>
                  <li>Breckenridge Pharmaceuticals</li>
                  <li>Bryant Ranch Prepack</li>
                  <li>Cadila Healthcare Ltd.</li>
                  <li>Camber Pharmaceuticals Inc.</li>
                  <li>Caraco Pharmaceutical Labs</li>
                  <li>Cardinal Health</li>
                  <li>Chemical Works Of Gedeon Richter Ltd.</li>
                  <li>Cobalt Pharmaceuticals Inc.</li>
                  <li>Comprehensive Consultant Services Inc.</li>
                  <li>Corepharma LLC</li>
                  <li>Coupler Enterprises Inc.</li>
                  <li>Dept Health Central Pharmacy</li>
                  <li>Direct Dispensing Inc.</li>
                  <li>Direct Pharmaceuticals Inc.</li>
                  <li>Dispensing Solutions</li>
                  <li>Diversified Healthcare Services Inc.</li>
                  <li>Doctor Reddys Laboratories Ltd.</li>
                  <li>Glenmark Generics Ltd.</li>
                  <li>Greenstone LLC</li>
                  <li>H.E. Butt Grocery Co.</li>
                  <li>Heartland Repack Services LLC</li>
                  <li>InvaGen Pharmaceuticals Inc.</li>
                  <li>Kaiser Foundation Hospital</li>
                  <li>Lake Erie Medical and Surgical Supply</li>
                  <li>Letco Medical Inc.</li>
                  <li>Lupin Pharmaceuticals Inc.</li>
                  <li>Major Pharmaceuticals</li>
                  <li>Medisca Inc.</li>
                  <li>Medvantx Inc.</li>
                  <li>Murfreesboro Pharmaceutical Nursing Supply</li>
                  <li>Mylan</li>
                  <li>Neuman Distributors Inc.</li>
                  <li>Norwich Pharmaceuticals Inc.</li>
                  <li>Novartis AG</li>
                  <li>Nucare Pharmaceuticals Inc.</li>
                  <li>Palmetto Pharmaceuticals Inc.</li>
                  <li>PD-Rx Pharmaceuticals Inc.</li>
                  <li>Pfizer Inc.</li>
                  <li>Pharmaceutical Utilization Management Program VA Inc.</li>
                  <li>Physicians Total Care Inc.</li>
                  <li>Preferred Pharmaceuticals Inc.</li>
                  <li>Prepackage Specialists</li>
                  <li>Prepak Systems Inc.</li>
                  <li>Promius Pharma</li>
                  <li>Qualitest</li>
                  <li>Rebel Distributors Corp.</li>
                  <li>Redpharm Drug</li>
                  <li>Remedy Repack</li>
                  <li>Roxane Labs</li>
                  <li>Sandhills Packaging Inc.</li>
                  <li>Secan Pharmaceuticals Inc.</li>
                  <li>Solco Healthcare US LLC</li>
                  <li>Southwood Pharmaceuticals</li>
                  <li>Stat Rx Usa</li>
                  <li>Stat Scripts LLC</li>
                  <li>Synthon Pharmaceuticals Inc.</li>
                  <li>Teva Pharmaceutical Industries Ltd.</li>
                  <li>Torrent Pharmaceuticals</li>
                  <li>Tya Pharmaceuticals</li>
                  <li>UDL Laboratories</li>
                  <li>US Pharmaceutical Group</li>
                  <li>USL Pharma Inc.</li>
                  <li>Va Cmop Dallas</li>
                  <li>Vangard Labs Inc.</li>
                  <li>Warner Lambert Company LLC</li>
                  <li>Wockhardt Ltd.</li>
                  <li>Zydus Pharmaceuticals</li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Dosage forms</dt>
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
                          <td>10 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>2.5 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>5 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Capsule</td>
                          <td>Oral</td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>10.00 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>5.00 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td>Kit</td>
                          <td />
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dosages_info" role="status" aria-live="polite">Showing 1 to 10 of 17 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="dosages_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="dosages_previous"><a href="#" aria-controls="dosages" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="dosages" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="dosages" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item next" id="dosages_next"><a href="#" aria-controls="dosages" data-dt-idx={3} tabIndex={0} className="page-link">›</a></li>
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
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Unit description: activate to sort column ascending" style={{width: '485.203px'}}>Unit description</th>
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Cost: activate to sort column ascending" style={{width: '118.203px'}}>Cost</th>
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Unit: activate to sort column ascending" style={{width: '114.203px'}}>Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td>Amlodipine besylate powder</td>
                          <td>9.99USD </td>
                          <td>g</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Lotrel 10-40 mg capsule</td>
                          <td>5.21USD </td>
                          <td>capsule</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Lotrel 10-20 mg capsule</td>
                          <td>4.8USD </td>
                          <td>capsule</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Lotrel 5-40 mg capsule</td>
                          <td>4.37USD </td>
                          <td>capsule</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Lotrel 5-20 mg capsule</td>
                          <td>4.13USD </td>
                          <td>capsule</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Lotrel 5-10 mg capsule</td>
                          <td>3.91USD </td>
                          <td>capsule</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Lotrel 2.5-10 mg capsule</td>
                          <td>3.83USD </td>
                          <td>capsule</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Norvasc 10 mg tablet</td>
                          <td>3.16USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Amlodipine besylate 10 mg tablet</td>
                          <td>2.42USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Norvasc 2.5 mg tablet</td>
                          <td>2.36USD </td>
                          <td>tablet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="prices_info" role="status" aria-live="polite">Showing 1 to 10 of 41 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="prices_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="prices_previous"><a href="#" aria-controls="prices" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="prices" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="prices" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="prices" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="prices" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="prices" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item next" id="prices_next"><a href="#" aria-controls="prices" data-dt-idx={6} tabIndex={0} className="page-link">›</a></li>
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
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/CA2170278">CA2170278</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>1999-08-03</td>
                          <td>2014-08-10</td>
                          <td className="country"><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US6162802">US6162802</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2000-12-19</td>
                          <td>2017-12-19</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US5969156">US5969156</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>1999-10-19</td>
                          <td>2017-01-08</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US6294197">US6294197</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>2001-09-25</td>
                          <td>2017-12-18</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US5559111">US5559111</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>1996-09-24</td>
                          <td>2019-01-21</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US6395728">US6395728</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2002-05-28</td>
                          <td>2019-07-08</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US6828339">US6828339</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2004-12-07</td>
                          <td>2022-11-20</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
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
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US6455574">US6455574</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2002-09-24</td>
                          <td>2018-08-11</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener noreferrer" href="https://patents.google.com/patent/US8101599">US8101599</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2012-01-24</td>
                          <td>2023-05-16</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="patents_info" role="status" aria-live="polite">Showing 1 to 10 of 17 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="patents_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="patents_previous"><a href="#" aria-controls="patents" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="patents" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="patents" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item next" id="patents_next"><a href="#" aria-controls="patents" data-dt-idx={3} tabIndex={0} className="page-link">›</a></li>
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
                    <td>199-201</td>
                    <td>https://www.chemicalbook.com/ChemicalProductProperty_US_CB4127875.aspx</td>
                  </tr>
                  <tr>
                    <td>boiling point (°C)</td>
                    <td>527.2</td>
                    <td>https://www.lookchem.com/Amlodipine-besylate/</td>
                  </tr>
                  <tr>
                    <td>water solubility</td>
                    <td>slightly soluble in water</td>
                    <td>FDA label</td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>3.00</td>
                    <td>AUSTIN,RP ET AL. (1995)</td>
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
                    <td>0.0074 mg/mL</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>2.22</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>1.64</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#logp_logd">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>logS</td>
                    <td>-4.7</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Acidic)</td>
                    <td>19.12</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Basic)</td>
                    <td>9.45</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Physiological Charge</td>
                    <td>1</td>
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
                    <td>99.88 Å<sup>2</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topolgical_surface">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Rotatable Bond Count</td>
                    <td>10</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topology_analysis">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Refractivity</td>
                    <td>108.64 m<sup>3</sup>·mol<sup>-1</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#refractivity">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polarizability</td>
                    <td>42.31 Å<sup>3</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Number of Rings</td>
                    <td>2</td>
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
                    <td>Yes</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Veber's Rule</td>
                    <td>No</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>MDDR-like Rule</td>
                    <td>No</td>
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
                    <td>0.9479</td>
                  </tr>
                  <tr>
                    <td>Blood Brain Barrier</td>
                    <td>-</td>
                    <td>0.7744</td>
                  </tr>
                  <tr>
                    <td>Caco-2 permeable</td>
                    <td>-</td>
                    <td>0.5468</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein substrate</td>
                    <td>Substrate</td>
                    <td>0.9102</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor I</td>
                    <td>Inhibitor</td>
                    <td>0.8564</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor II</td>
                    <td>Non-inhibitor</td>
                    <td>0.8473</td>
                  </tr>
                  <tr>
                    <td>Renal organic cation transporter</td>
                    <td>Non-inhibitor</td>
                    <td>0.803</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.8627</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.9116</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 substrate</td>
                    <td>Substrate</td>
                    <td>0.6967</td>
                  </tr>
                  <tr>
                    <td>CYP450 1A2 substrate</td>
                    <td>Inhibitor</td>
                    <td>0.538</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.514</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.7626</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C19 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.5871</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.8608</td>
                  </tr>
                  <tr>
                    <td>CYP450 inhibitory promiscuity</td>
                    <td>High CYP Inhibitory Promiscuity</td>
                    <td>0.6642</td>
                  </tr>
                  <tr>
                    <td>Ames test</td>
                    <td>Non AMES toxic</td>
                    <td>0.7605</td>
                  </tr>
                  <tr>
                    <td>Carcinogenicity</td>
                    <td>Non-carcinogens</td>
                    <td>0.8568</td>
                  </tr>
                  <tr>
                    <td>Biodegradation</td>
                    <td>Not ready biodegradable</td>
                    <td>0.9791</td>
                  </tr>
                  <tr>
                    <td>Rat acute toxicity</td>
                    <td>2.5396 LD50, mol/kg </td>
                    <td><span className="not-available">Not applicable</span></td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor I)</td>
                    <td>Weak inhibitor</td>
                    <td>0.8302</td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor II)</td>
                    <td>Inhibitor</td>
                    <td>0.8411</td>
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
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QTOF , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0192000000-988fbef9dd83defbfbe0">splash10-0a4u-0192000000-988fbef9dd83defbfbe0</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">MS/MS Spectrum - , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-002o-1392000000-3e9bc5dcf61b0f4cae6a">splash10-002o-1392000000-3e9bc5dcf61b0f4cae6a</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">1H NMR Spectrum</a></td>
                    <td>1D NMR</td>
                    <td><span className="not-available">Not Applicable</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">[1H,13C] 2D NMR Spectrum</a></td>
                    <td>2D NMR</td>
                    <td><span className="not-available">Not Applicable</span></td>
                  </tr>
                </tbody>
              </table>
            </dd>
          </dl>
          <h2 id="taxonomy" className="section-header">Taxonomy</h2>
          <dl><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">This compound belongs to the class of organic compounds known as dihydropyridinecarboxylic acids and derivatives. These are compounds containing a dihydropyridine moiety bearing a carboxylic acid group.</dd><dt className="col-md-2 col-sm-4">Kingdom</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000000" data-original-title="Compounds that contain at least one carbon atom, excluding isocyanide/cyanide and their non-hydrocarbyl derivatives, thiophosgene, carbon diselenide, carbon monosulfide, carbon disulfide, carbon subsulfide, carbon monoxide, carbon dioxide, Carbon suboxide, and dicarbon monoxide.">Organic compounds</a></dd><dt className="col-md-2 col-sm-4">Super Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000002" data-original-title="Compounds containing a ring with least one carbon atom and one non-carbon atom.">Organoheterocyclic compounds</a></dd><dt className="col-md-2 col-sm-4">Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000089" data-original-title="Compounds containing a pyridine ring, which is a six-member aromatic heterocycle which consists of one nitrogen atom and five carbon atoms.">Pyridines and derivatives</a></dd><dt className="col-md-2 col-sm-4">Sub Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002224" data-original-title="Compounds containing a hydrogenated pyridine ring (i.e. containing less than the maximum number of double bonds.).">Hydropyridines</a></dd><dt className="col-md-2 col-sm-4">Direct Parent</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001562" data-original-title="Compounds containing a dihydropyridine moiety bearing a carboxylic acid group.">Dihydropyridinecarboxylic acids and derivatives</a></dd><dt className="col-md-2 col-sm-4">Alternative Parents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001099" data-original-title="Compounds containing one or more chlorine atoms attached to a benzene moiety.">Chlorobenzenes</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001030" data-original-title="Organic compounds containing the acyl chloride functional group.">Aryl chlorides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000346" data-original-title="Organic compounds containing exactly two carboxylic acid groups.">Dicarboxylic acids and derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003890" data-original-title="Organic compounds containing an amine group, which is indirectly attached to a carbonyl via an intervening vinyl (>C=C<) moiety.">Vinylogous amides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003416" data-original-title="Organic compounds containing a carboxyl group that is esterified with a methyl group. They have the general structure RC(=O)OR', where R=H or organyl group and R'=methyl group.">Methyl esters</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003626" data-original-title="An alpha,beta-unsaturated carboxylic ester of general formula R1C(R2)=C(R3)C(=O)OR4 (R4= organyl compound) in which the ester C=O function is conjugated to a C=C double bond at the alpha,beta position.">Enoate esters</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000347" data-original-title="Organic compounds containing an amine group, a carboxylic acid group (or a derivative thereof), and a side-chain that is specific to each amino acid.">Amino acids and derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004139" data-original-title="Organic compounds containing an heterocycle with at least one nitrogen atom and one carbon atom linked to each other.">Azacyclic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001167" data-original-title="Organic compounds containing the dialkyl ether functional group, with the formula ROR', where R and R' are alkyl groups.">Dialkyl ethers</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002228" data-original-title="Organic compounds containing a dialkylamine group, characterized by two alkyl groups bonded to the amino nitrogen.">Dialkylamines</a></span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000470" data-original-title="Compounds containing the enamine functional group with the general structure R1N(R2)CR=C(R3)R4.">Enamines</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001516" data-original-title="Compounds containing a chemical bond between a carbon atom and a chlorine atom.">Organochlorides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003940" data-original-title="Organic compounds containing an oxide group.">Organic oxides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004557" data-original-title="Compounds containing a bond between carbon a pnictogen atom. Pnictogens are p-block element atoms that are in the group 15 of the periodic table.">Organopnictogen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000469" data-original-title="Organic compounds containing an primary aliphatic amine group.">Monoalkylamines</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001831" data-original-title="Organic compounds containing a carbonyl group, with the general structure RC(=O)R', where R=organyl, R'=H, N, O, organyl group or halide group.">Carbonyl compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004150" data-original-title="Derivatives of hydrocarbons obtained by substituting one or more carbon atoms by an heteroatom. They contain at least one carbon atom and heteroatom.">Hydrocarbon derivatives</a></span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 7 more</a>
            </dd><dt className="col-md-2 col-sm-4">Substituents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Dihydropyridinecarboxylic acid derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Chlorobenzene</span><span className="list-separator"> / </span><span className="separated-list-item">Halobenzene</span><span className="list-separator"> / </span><span className="separated-list-item">Aryl chloride</span><span className="list-separator"> / </span><span className="separated-list-item">Aryl halide</span><span className="list-separator"> / </span><span className="separated-list-item">Monocyclic benzene moiety</span><span className="list-separator"> / </span><span className="separated-list-item">Dicarboxylic acid or derivatives</span><span className="list-separator"> / </span><span className="separated-list-item">Benzenoid</span><span className="list-separator"> / </span><span className="separated-list-item">Vinylogous amide</span><span className="list-separator"> / </span><span className="separated-list-item">Alpha,beta-unsaturated carboxylic ester</span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Enoate ester</span><span className="list-separator"> / </span><span className="separated-list-item">Methyl ester</span><span className="list-separator"> / </span><span className="separated-list-item">Amino acid or derivatives</span><span className="list-separator"> / </span><span className="separated-list-item">Carboxylic acid ester</span><span className="list-separator"> / </span><span className="separated-list-item">Carboxylic acid derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Dialkyl ether</span><span className="list-separator"> / </span><span className="separated-list-item">Secondary aliphatic amine</span><span className="list-separator"> / </span><span className="separated-list-item">Azacycle</span><span className="list-separator"> / </span><span className="separated-list-item">Enamine</span><span className="list-separator"> / </span><span className="separated-list-item">Ether</span><span className="list-separator"> / </span><span className="separated-list-item">Secondary amine</span><span className="list-separator"> / </span><span className="separated-list-item">Organic nitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Hydrocarbon derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Organooxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxide</span><span className="list-separator"> / </span><span className="separated-list-item">Amine</span><span className="list-separator"> / </span><span className="separated-list-item">Primary amine</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organopnictogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Carbonyl group</span><span className="list-separator"> / </span><span className="separated-list-item">Primary aliphatic amine</span><span className="list-separator"> / </span><span className="separated-list-item">Organohalogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organochloride</span><span className="list-separator"> / </span><span className="separated-list-item">Organonitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Aromatic heteromonocyclic compound</span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 25 more</a>
            </dd><dt className="col-md-2 col-sm-4">Molecular Framework</dt>
            <dd className="col-md-10 col-sm-8">Aromatic heteromonocyclic compounds</dd><dt className="col-md-2 col-sm-4">External Descriptors</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item">ethyl ester, primary amino compound, methyl ester, monochlorobenzenes, dihydropyridine (<a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:2668">CHEBI:2668</a>) </span></span>
            </dd>
          </dl>
          <div className="bond-list-container targets">
            <h3 id="targets">Targets</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0000430">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a>
                    <strong>1. <a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit alpha-1C</a></strong></div>
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
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-gated calcium channel activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-sensitive calcium channels (VSCC) mediate the entry of calcium ions into excitable cells and are also involved in a variety of calcium-dependent processes, including muscle contraction, hor...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CACNA1C</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q13936">Q13936</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-dependent L-type calcium channel subunit alpha-1C</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">248974.1 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A175408">Bodi I, Mikala G, Koch SE, Akhter SA, Schwartz A: The L-type calcium channel in the heart: the beat goes on. J Clin Invest. 2005 Dec;115(12):3306-17. doi: 10.1172/JCI27167. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16322774">PubMed:16322774</a>] </li>
                      <li id="reference-A175411">Tang L, Gamal El-Din TM, Swanson TM, Pryde DC, Scheuer T, Zheng N, Catterall WA: Structural basis for inhibition of a voltage-gated Ca(2+) channel by Ca(2+) antagonist drugs. Nature. 2016 Sep 1;537(7618):117-121. doi: 10.1038/nature19102. Epub 2016 Aug 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/27556947">PubMed:27556947</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002226">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Voltage-dependent N-type calcium channel subunit alpha-1B</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Voltage-gated calcium channel activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-sensitive calcium channels (VSCC) mediate the entry of calcium ions into excitable cells and are also involved in a variety of calcium-dependent processes, including muscle contraction, hor...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CACNA1B</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q00975">Q00975</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-dependent N-type calcium channel subunit alpha-1B</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">262493.84 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A15324">Furukawa T, Nukada T, Suzuki K, Fujita Y, Mori Y, Nishimura M, Yamanaka M: Voltage and pH dependent block of cloned N-type Ca2+ channels by amlodipine. Br J Pharmacol. 1997 Jul;121(6):1136-40. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/9249249">PubMed:9249249</a>] </li>
                      <li id="reference-A6133">Furukawa T, Yamakawa T, Midera T, Sagawa T, Mori Y, Nukada T: Selectivities of dihydropyridine derivatives in blocking Ca(2+) channel subtypes expressed in Xenopus oocytes. J Pharmacol Exp Ther. 1999 Nov;291(2):464-73. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10525060">PubMed:10525060</a>] </li>
                      <li id="reference-A15325">Miyashita Y, Furukawa T, Kamegaya E, Yoshii M, Nukada T: A region of N-type Ca(2+) channel critical for blockade by the dihydropyridine amlodipine. Eur J Pharmacol. 2010 Apr 25;632(1-3):14-22. doi: 10.1016/j.ejphar.2010.01.006. Epub 2010 Jan 22. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/20097194">PubMed:20097194</a>] </li>
                      <li id="reference-A15326">Murakami M, Nakagawasai O, Fujii S, Kameyama K, Murakami S, Hozumi S, Esashi A, Taniguchi R, Yanagisawa T, Tan-no K, Tadano T, Kitamura K, Kisara K: Antinociceptive action of amlodipine blocking N-type Ca2+ channels at the primary afferent neurons in mice. Eur J Pharmacol. 2001 May 11;419(2-3):175-81. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11426839">PubMed:11426839</a>] </li>
                      <li id="reference-A15327">Ogihara T, Kano T, Kakinuma C: Evaluation of the inhibitory effect of dihydropyridines on N-type calcium channel by virtual three-dimensional pharmacophore modeling. Arzneimittelforschung. 2009;59(6):283-8. doi: 10.1055/s-0031-1296398. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19634509">PubMed:19634509</a>] </li>
                      <li id="reference-A15328">Qu YL, Sugiyama K, Ohnuki T, Hattori K, Watanabe K, Nagatomo T: Comparison of binding affinities of omega-conotoxin and amlodipine to N-type Ca2+ channels in rat brain. Zhongguo Yao Li Xue Bao. 1998 Mar;19(2):97-100. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10374627">PubMed:10374627</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000303">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>3. <a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit beta-1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Voltage-gated calcium channel activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">The beta subunit of voltage-dependent calcium channels contributes to the function of the calcium channel by increasing peak calcium current, shifting the voltage dependencies of activation and ina...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CACNB1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q02641">Q02641</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-dependent L-type calcium channel subunit beta-1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">65712.995 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A15324">Furukawa T, Nukada T, Suzuki K, Fujita Y, Mori Y, Nishimura M, Yamanaka M: Voltage and pH dependent block of cloned N-type Ca2+ channels by amlodipine. Br J Pharmacol. 1997 Jul;121(6):1136-40. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/9249249">PubMed:9249249</a>] </li>
                      <li id="reference-A6133">Furukawa T, Yamakawa T, Midera T, Sagawa T, Mori Y, Nukada T: Selectivities of dihydropyridine derivatives in blocking Ca(2+) channel subtypes expressed in Xenopus oocytes. J Pharmacol Exp Ther. 1999 Nov;291(2):464-73. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10525060">PubMed:10525060</a>] </li>
                      <li id="reference-A15325">Miyashita Y, Furukawa T, Kamegaya E, Yoshii M, Nukada T: A region of N-type Ca(2+) channel critical for blockade by the dihydropyridine amlodipine. Eur J Pharmacol. 2010 Apr 25;632(1-3):14-22. doi: 10.1016/j.ejphar.2010.01.006. Epub 2010 Jan 22. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/20097194">PubMed:20097194</a>] </li>
                      <li id="reference-A15326">Murakami M, Nakagawasai O, Fujii S, Kameyama K, Murakami S, Hozumi S, Esashi A, Taniguchi R, Yanagisawa T, Tan-no K, Tadano T, Kitamura K, Kisara K: Antinociceptive action of amlodipine blocking N-type Ca2+ channels at the primary afferent neurons in mice. Eur J Pharmacol. 2001 May 11;419(2-3):175-81. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11426839">PubMed:11426839</a>] </li>
                      <li id="reference-A15327">Ogihara T, Kano T, Kakinuma C: Evaluation of the inhibitory effect of dihydropyridines on N-type calcium channel by virtual three-dimensional pharmacophore modeling. Arzneimittelforschung. 2009;59(6):283-8. doi: 10.1055/s-0031-1296398. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19634509">PubMed:19634509</a>] </li>
                      <li id="reference-A15328">Qu YL, Sugiyama K, Ohnuki T, Hattori K, Watanabe K, Nagatomo T: Comparison of binding affinities of omega-conotoxin and amlodipine to N-type Ca2+ channels in rat brain. Zhongguo Yao Li Xue Bao. 1998 Mar;19(2):97-100. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10374627">PubMed:10374627</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003563">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>4. <a href="javascript:void(0)">Voltage-dependent calcium channel subunit alpha-2/delta-3</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Voltage-gated ion channel activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">The alpha-2/delta subunit of voltage-dependent calcium channels regulates calcium current density and activation/inactivation kinetics of the calcium channel. Acts as a regulatory subunit for P/Q-t...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CACNA2D3</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q8IZS8">Q8IZS8</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-dependent calcium channel subunit alpha-2/delta-3</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">123010.22 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A15324">Furukawa T, Nukada T, Suzuki K, Fujita Y, Mori Y, Nishimura M, Yamanaka M: Voltage and pH dependent block of cloned N-type Ca2+ channels by amlodipine. Br J Pharmacol. 1997 Jul;121(6):1136-40. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/9249249">PubMed:9249249</a>] </li>
                      <li id="reference-A6133">Furukawa T, Yamakawa T, Midera T, Sagawa T, Mori Y, Nukada T: Selectivities of dihydropyridine derivatives in blocking Ca(2+) channel subtypes expressed in Xenopus oocytes. J Pharmacol Exp Ther. 1999 Nov;291(2):464-73. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10525060">PubMed:10525060</a>] </li>
                      <li id="reference-A15325">Miyashita Y, Furukawa T, Kamegaya E, Yoshii M, Nukada T: A region of N-type Ca(2+) channel critical for blockade by the dihydropyridine amlodipine. Eur J Pharmacol. 2010 Apr 25;632(1-3):14-22. doi: 10.1016/j.ejphar.2010.01.006. Epub 2010 Jan 22. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/20097194">PubMed:20097194</a>] </li>
                      <li id="reference-A15326">Murakami M, Nakagawasai O, Fujii S, Kameyama K, Murakami S, Hozumi S, Esashi A, Taniguchi R, Yanagisawa T, Tan-no K, Tadano T, Kitamura K, Kisara K: Antinociceptive action of amlodipine blocking N-type Ca2+ channels at the primary afferent neurons in mice. Eur J Pharmacol. 2001 May 11;419(2-3):175-81. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11426839">PubMed:11426839</a>] </li>
                      <li id="reference-A15327">Ogihara T, Kano T, Kakinuma C: Evaluation of the inhibitory effect of dihydropyridines on N-type calcium channel by virtual three-dimensional pharmacophore modeling. Arzneimittelforschung. 2009;59(6):283-8. doi: 10.1055/s-0031-1296398. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19634509">PubMed:19634509</a>] </li>
                      <li id="reference-A15328">Qu YL, Sugiyama K, Ohnuki T, Hattori K, Watanabe K, Nagatomo T: Comparison of binding affinities of omega-conotoxin and amlodipine to N-type Ca2+ channels in rat brain. Zhongguo Yao Li Xue Bao. 1998 Mar;19(2):97-100. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10374627">PubMed:10374627</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000267">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>5. <a href="javascript:void(0)">Carbonic anhydrase 1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Zinc ion binding</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Reversible hydration of carbon dioxide. Can hydrates cyanamide to urea.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CA1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P00915">P00915</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Carbonic anhydrase 1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">28870.0 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A4741">Puscas I, Gilau L, Coltau M, Pasca R, Domuta G, Baican M, Hecht A: Hypotensive effect of calcium channel blockers is parallel with carbonic anhydrase I inhibition. Clin Pharmacol Ther. 2000 Oct;68(4):443-9. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11061585">PubMed:11061585</a>] </li>
                      <li id="reference-A4742">Puscas L, Gilau L, Coltau M, Pasca R, Domuta G, Baican M, Hecht A: Calcium channel blockers reduce blood pressure in part by inhibiting vascular smooth muscle carbonic anhydrase I. Cardiovasc Drugs Ther. 2000 Oct;14(5):523-8. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11101200">PubMed:11101200</a>] </li>
                      <li id="reference-A4743">Puscas I, Coltau M, Baican M, Pasca R, Domuta G, Hecht A: Vasoconstrictive drugs increase carbonic anhydrase I in vascular smooth muscle while vasodilating drugs reduce the activity of this isozyme by a direct mechanism of action. Drugs Exp Clin Res. 2001;27(2):53-60. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11392054">PubMed:11392054</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000973">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>6. <a href="javascript:void(0)">Sphingomyelin phosphodiesterase</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Sphingomyelin phosphodiesterase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Converts sphingomyelin to ceramide. Also has phospholipase C activities toward 1,2-diacylglycerolphosphocholine and 1,2-diacylglycerolphosphoglycerol. Isoform 2 and isoform 3 have lost catalytic ac...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SMPD1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P17405">P17405</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Sphingomyelin phosphodiesterase</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">69751.3 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18210">Kornhuber J, Muehlbacher M, Trapp S, Pechmann S, Friedl A, Reichel M, Muhle C, Terfloth L, Groemer TW, Spitzer GM, Liedl KR, Gulbins E, Tripal P: Identification of novel functional inhibitors of acid sphingomyelinase. PLoS One. 2011;6(8):e23852. doi: 10.1371/journal.pone.0023852. Epub 2011 Aug 31. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/21909365">PubMed:21909365</a>] </li>
                      <li id="reference-F3781">Identification of New Functional Inhibitors of Acid Sphingomyelinase Using a Structure-Property-Activity Relation Model [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/781/original/5642a377778bc6d0e3785f4d212a143096b1.pdf?1551735370">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004902">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>7. <a href="javascript:void(0)">Voltage-dependent calcium channel (Protein Group)</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein group</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-yes">Yes</div>
                        </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge-pill badge-action">Blocker</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-gated calcium channel activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">This protein is a subunit of the dihydropyridine (DHP) sensitive calcium channel. Plays a role in excitation-contraction coupling. The skeletal muscle DHP-sensitive Ca(2+) channel may function only...</dd>
                      </dl>
                    </div>
                  </div>
                  <hr />
                  <h5>Components:</h5>
                  <div className="col-12 col-sm-8">
                    <table className="drug-bond-component-table table table-sm responsive-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>UniProt ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent calcium channel gamma-1 subunit</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q06432">Q06432</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent calcium channel subunit alpha-2/delta-1</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P54289">P54289</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent calcium channel subunit alpha-2/delta-2</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q9NY47">Q9NY47</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent calcium channel subunit alpha-2/delta-3</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q8IZS8">Q8IZS8</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit alpha-1C</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q13936">Q13936</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit alpha-1D</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q01668">Q01668</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit alpha-1F</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O60840">O60840</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit alpha-1S</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q13698">Q13698</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit beta-1</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q02641">Q02641</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit beta-2</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q08289">Q08289</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit beta-3</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P54284">P54284</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent L-type calcium channel subunit beta-4</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O00305">O00305</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent N-type calcium channel subunit alpha-1B</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q00975">Q00975</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent P/Q-type calcium channel subunit alpha-1A</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O00555">O00555</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent T-type calcium channel subunit alpha-1G</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O43497">O43497</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent T-type calcium channel subunit alpha-1H</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O95180">O95180</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:void(0)">Voltage-dependent T-type calcium channel subunit alpha-1I</a></td>
                          <td><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q9P0X4">Q9P0X4</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A175390">Godfraind T: Discovery and Development of Calcium Channel Blockers. Front Pharmacol. 2017 May 29;8:286. doi: 10.3389/fphar.2017.00286. eCollection 2017. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/28611661">PubMed:28611661</a>] </li>
                      <li id="reference-F3778">Amlodipine FDA label [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/778/original/Amlodipine_FDA_label.pdf?1551725078">File</a>] </li>
                      <li id="reference-F3757">Apo amlodipine tablets, MedSafe NZ [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/757/original/ApoAmlodipinetab_MedSafe_NZ.pdf?1551474087">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000012">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>8. <a href="javascript:void(0)">Voltage-dependent T-type calcium channel subunit alpha-1I</a></strong></div>
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
                          <div className="badge badge-pill badge-action">Inhibitor</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-gated calcium channel activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-sensitive calcium channels (VSCC) mediate the entry of calcium ions into excitable cells and are also involved in a variety of calcium-dependent processes, including muscle contraction, hor...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CACNA1I</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q9P0X4">Q9P0X4</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Voltage-dependent T-type calcium channel subunit alpha-1I</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">245100.8 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A175393">Lin M, Aladejebi O, Hockerman GH: Distinct properties of amlodipine and nicardipine block of the voltage-dependent Ca2+ channels Cav1.2 and Cav2.1 and the mutant channels Cav1.2/dihydropyridine insensitive and Cav2.1/dihydropyridine sensitive. Eur J Pharmacol. 2011 Nov 16;670(1):105-13. doi: 10.1016/j.ejphar.2011.08.005. Epub 2011 Sep 2. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/21910984">PubMed:21910984</a>] </li>
                      <li id="reference-A175396">Striessnig J, Ortner NJ, Pinggera A: Pharmacology of L-type Calcium Channels: Novel Drugs for Old Targets? Curr Mol Pharmacol. 2015;8(2):110-22. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/25966690">PubMed:25966690</a>] </li>
                      <li id="reference-A175399">Inoue Y, Hisatome I, Tsuboi M, Ahmmed GU, Yatsuhashi T, Uchida K, Yamanouchi Y, Santo Y, Miake J, Tanaka Y, Hamada T, Watanabe M, Igawa O, Yoshida A, Shigemasa C, Makita N, Sato R: Effects of amlodipine on native cardiac Na+ channels and cloned alpha-subunits of cardiac Na+ channels. Arzneimittelforschung. 1999 May;49(5):394-7. doi: 10.1055/s-0031-1300433. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10367100">PubMed:10367100</a>] </li>
                      <li id="reference-A175402">Ozawa Y, Hayashi K, Kobori H: New Generation Calcium Channel Blockers in Hypertensive Treatment. Curr Hypertens Rev. 2006 May 1;2(2):103-111. doi: 10.2174/157340206776877370. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19823601">PubMed:19823601</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0009351">
                <div className="card-header"><strong>9. Voltage-dependent N-type calcium channel</strong></div>
                <div className="card-body"><dt className="col-md-5 col-sm-6">Kind</dt>
                  <dd className="col-md-7 col-sm-6">Protein group</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                  <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                  <dd className="col-md-7 col-sm-6">
                    <div className="badge badge badge-unknown">Unknown</div>
                  </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                  <dd className="col-md-7 col-sm-6">
                    <div className="badge badge-pill badge-action">Inhibitor</div>
                  </dd>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A15325">Miyashita Y, Furukawa T, Kamegaya E, Yoshii M, Nukada T: A region of N-type Ca(2+) channel critical for blockade by the dihydropyridine amlodipine. Eur J Pharmacol. 2010 Apr 25;632(1-3):14-22. doi: 10.1016/j.ejphar.2010.01.006. Epub 2010 Jan 22. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/20097194">PubMed:20097194</a>] </li>
                      <li id="reference-A175390">Godfraind T: Discovery and Development of Calcium Channel Blockers. Front Pharmacol. 2017 May 29;8:286. doi: 10.3389/fphar.2017.00286. eCollection 2017. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/28611661">PubMed:28611661</a>] </li>
                      <li id="reference-A15324">Furukawa T, Nukada T, Suzuki K, Fujita Y, Mori Y, Nishimura M, Yamanaka M: Voltage and pH dependent block of cloned N-type Ca2+ channels by amlodipine. Br J Pharmacol. 1997 Jul;121(6):1136-40. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/9249249">PubMed:9249249</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container enzymes">
            <h3 id="enzymes">Enzymes</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0002638">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>1. <a href="javascript:void(0)">Cytochrome P450 3A4</a></strong></div>
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
                      <li id="reference-A14786">Katoh M, Nakajima M, Shimada N, Yamazaki H, Yokoi T: Inhibition of human cytochrome P450 enzymes by 1,4-dihydropyridine calcium antagonists: prediction of in vivo drug-drug interactions. Eur J Clin Pharmacol. 2000 Feb-Mar;55(11-12):843-52. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10805063">PubMed:10805063</a>] </li>
                      <li id="reference-A32032">Zhu Y, Wang F, Li Q, Zhu M, Du A, Tang W, Chen W: Amlodipine metabolism in human liver microsomes and roles of CYP3A4/5 in the dihydropyridine dehydrogenation. Drug Metab Dispos. 2014 Feb;42(2):245-9. doi: 10.1124/dmd.113.055400. Epub 2013 Dec 3. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/24301608">PubMed:24301608</a>] </li>
                      <li id="reference-L162">Drug Interactions: Cytochrome P450 Drug Interaction Table [<a target="_blank" href="http://medicine.iupui.edu/clinpharm/ddis/table.asp">Link</a>] </li>
                      <li id="reference-F3766">Amlodipine FDA label [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/766/original/Amlodipine_FDA_label.pdf?1551718622">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003543">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Cytochrome P450 1A1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Limited in vitro data support this enzyme action.</dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Vitamin d 24-hydroxylase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Cytochromes P450 are a group of heme-thiolate monooxygenases. In liver microsomes, this enzyme is involved in an NADPH-dependent electron transport pathway. It oxidizes a variety of structurally un...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP1A1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P04798">P04798</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 1A1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">58164.815 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14786">Katoh M, Nakajima M, Shimada N, Yamazaki H, Yokoi T: Inhibition of human cytochrome P450 enzymes by 1,4-dihydropyridine calcium antagonists: prediction of in vivo drug-drug interactions. Eur J Clin Pharmacol. 2000 Feb-Mar;55(11-12):843-52. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10805063">PubMed:10805063</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003549">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>3. <a href="javascript:void(0)">Cytochrome P450 2B6</a></strong></div>
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
                        </dd><dt className="col-md-5 col-sm-6">Curator comments</dt>
                        <dd className="col-md-7 col-sm-6">Data supporting this enzyme action are limited to in vitro studies in addition studies performed with rabbits.</dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Steroid hydroxylase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Cytochromes P450 are a group of heme-thiolate monooxygenases. In liver microsomes, this enzyme is involved in an NADPH-dependent electron transport pathway. It oxidizes a variety of structurally un...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP2B6</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P20813">P20813</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2B6</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">56277.81 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14786">Katoh M, Nakajima M, Shimada N, Yamazaki H, Yokoi T: Inhibition of human cytochrome P450 enzymes by 1,4-dihydropyridine calcium antagonists: prediction of in vivo drug-drug interactions. Eur J Clin Pharmacol. 2000 Feb-Mar;55(11-12):843-52. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10805063">PubMed:10805063</a>] </li>
                      <li id="reference-A121591">Shah MB, Wilderman PR, Pascual J, Zhang Q, Stout CD, Halpert JR: Conformational adaptation of human cytochrome P450 2B6 and rabbit cytochrome P450 2B4 revealed upon binding multiple amlodipine molecules. Biochemistry. 2012 Sep 18;51(37):7225-38. doi: 10.1021/bi300894z. Epub 2012 Sep 4. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22909231">PubMed:22909231</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002362">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>4. <a href="javascript:void(0)">Cytochrome P450 3A5</a></strong></div>
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
                        </dd><dt className="col-md-5 col-sm-6">Curator comments</dt>
                        <dd className="col-md-7 col-sm-6">There are contradictory data available on this enzyme action. Some studies suggest this drug is a CYP3A5 substrate, while others suggest it does not have a role in amlodipine metabolism.</dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Oxygen binding</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Cytochromes P450 are a group of heme-thiolate monooxygenases. In liver microsomes, this enzyme is involved in an NADPH-dependent electron transport pathway. It oxidizes a variety of structurally un...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP3A5</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P20815">P20815</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 3A5</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">57108.065 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A32032">Zhu Y, Wang F, Li Q, Zhu M, Du A, Tang W, Chen W: Amlodipine metabolism in human liver microsomes and roles of CYP3A4/5 in the dihydropyridine dehydrogenation. Drug Metab Dispos. 2014 Feb;42(2):245-9. doi: 10.1124/dmd.113.055400. Epub 2013 Dec 3. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/24301608">PubMed:24301608</a>] </li>
                      <li id="reference-A175363">Bhatnagar V, Garcia EP, O'Connor DT, Brophy VH, Alcaraz J, Richard E, Bakris GL, Middleton JP, Norris KC, Wright J, Hiremath L, Contreras G, Appel LJ, Lipkowitz MS: CYP3A4 and CYP3A5 polymorphisms and blood pressure response to amlodipine among African-American men and women with early hypertensive renal disease. Am J Nephrol. 2010;31(2):95-103. doi: 10.1159/000258688. Epub 2009 Nov 12. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19907160">PubMed:19907160</a>] </li>
                      <li id="reference-A175366">Lu Y, Zhong H, Tang Q, Huang Z, Jing N, Smith J, Miao R, Li Y, Yuan H: Construction and verification of CYP3A5 gene polymorphisms using a Saccharomyces cerevisiae expression system to predict drug metabolism. Mol Med Rep. 2017 Apr;15(4):1593-1600. doi: 10.3892/mmr.2017.6214. Epub 2017 Feb 17. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/28259948">PubMed:28259948</a>] </li>
                      <li id="reference-A175369">Zhang YP, Zuo XC, Huang ZJ, Cai JJ, Wen J, Duan DD, Yuan H: CYP3A5 polymorphism, amlodipine and hypertension. J Hum Hypertens. 2014 Mar;28(3):145-9. doi: 10.1038/jhh.2013.67. Epub 2013 Jul 18. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/23863802">PubMed:23863802</a>] </li>
                      <li id="reference-L162">Drug Interactions: Cytochrome P450 Drug Interaction Table [<a target="_blank" href="http://medicine.iupui.edu/clinpharm/ddis/table.asp">Link</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002887">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>5. <a href="javascript:void(0)">Cytochrome P450 2C8</a></strong></div>
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
                      <li id="reference-A175384">Floyd JS, Kaspera R, Marciante KD, Weiss NS, Heckbert SR, Lumley T, Wiggins KL, Tamraz B, Kwok PY, Totah RA, Psaty BM: A screening study of drug-drug interactions in cerivastatin users: an adverse effect of clopidogrel. Clin Pharmacol Ther. 2012 May;91(5):896-904. doi: 10.1038/clpt.2011.295. Epub 2012 Mar 14. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22419147">PubMed:22419147</a>] </li>
                      <li id="reference-F3775">Role of Cytochrome P450 2C8 in Drug Metabolism and Interactions [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/775/original/Role_of_cytochrome_p450_2c8.pdf?1551723132">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002363">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>6. <a href="javascript:void(0)">Cytochrome P450 2D6</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Data of this enzyme action are limited and are based on results of in vitro studies.</dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Steroid hydroxylase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Responsible for the metabolism of many drugs and environmental chemicals that it oxidizes. It is involved in the metabolism of drugs such as antiarrhythmics, adrenoceptor antagonists, and tricyclic...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP2D6</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P10635">P10635</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2D6</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">55768.94 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A175387">Augustin M, Schoretsanitis G, Grunder G, Haen E, Paulzen M: How to Treat Hypertension in Venlafaxine-Medicated Patients-Pharmacokinetic Considerations in Prescribing Amlodipine and Ramipril. J Clin Psychopharmacol. 2018 Oct;38(5):498-501. doi: 10.1097/JCP.0000000000000929. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/30102628">PubMed:30102628</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container carriers">
            <h3 id="carriers">Carriers</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0009634">
                <div className="card-header"><strong>1. Lactose monohydrate</strong></div>
                <div className="card-body"><dt className="col-md-5 col-sm-6">Kind</dt>
                  <dd className="col-md-7 col-sm-6">Group</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                  <dd className="col-md-7 col-sm-6"><span className="not-available">Not Available</span></dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                  <dd className="col-md-7 col-sm-6">
                    <div className="badge badge badge-unknown">Unknown</div>
                  </dd>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-F3757">Apo amlodipine tablets, MedSafe NZ [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/757/original/ApoAmlodipinetab_MedSafe_NZ.pdf?1551474087">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0009633">
                <div className="card-header"><strong>2. Magnesium stearate</strong></div>
                <div className="card-body"><dt className="col-md-5 col-sm-6">Kind</dt>
                  <dd className="col-md-7 col-sm-6">Group</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                  <dd className="col-md-7 col-sm-6"><span className="not-available">Not Available</span></dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                  <dd className="col-md-7 col-sm-6">
                    <div className="badge badge badge-unknown">Unknown</div>
                  </dd>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-F3757">Apo amlodipine tablets, MedSafe NZ [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/757/original/ApoAmlodipinetab_MedSafe_NZ.pdf?1551474087">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0009638">
                <div className="card-header"><strong>3. Microcrystalline cellulose</strong></div>
                <div className="card-body"><dt className="col-md-5 col-sm-6">Kind</dt>
                  <dd className="col-md-7 col-sm-6">Group</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                  <dd className="col-md-7 col-sm-6"><span className="not-available">Not Available</span></dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                  <dd className="col-md-7 col-sm-6">
                    <div className="badge badge badge-unknown">Unknown</div>
                  </dd>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-F3757">Apo amlodipine tablets, MedSafe NZ [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/757/original/ApoAmlodipinetab_MedSafe_NZ.pdf?1551474087">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0009639">
                <div className="card-header"><strong>4. Maize starch</strong></div>
                <div className="card-body"><dt className="col-md-5 col-sm-6">Kind</dt>
                  <dd className="col-md-7 col-sm-6">Group</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                  <dd className="col-md-7 col-sm-6"><span className="not-available">Not Available</span></dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                  <dd className="col-md-7 col-sm-6">
                    <div className="badge badge badge-unknown">Unknown</div>
                  </dd>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-F3757">Apo amlodipine tablets, MedSafe NZ [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/757/original/ApoAmlodipinetab_MedSafe_NZ.pdf?1551474087">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container transporters">
            <h3 id="transporters">Transporters</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0001032">
                <div aria-hidden="true" aria-labelledby="binding properties" className="modal fade" id="BE0001032-binding-properties" role="dialog" tabIndex={-1}>
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
                                <td>22000</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11145223">11145223</a></span></span>
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
                  <button className="btn btn-sm btn-drugbank-secondary" data-target="#BE0001032-binding-properties" data-toggle="modal" type="button">
                    <span className="full-binding-label">Binding Properties</span></button><strong>1. <a href="javascript:void(0)">Multidrug resistance protein 1</a></strong></div>
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
                      <li id="reference-A16130">Katoh M, Nakajima M, Yamazaki H, Yokoi T: Inhibitory potencies of 1,4-dihydropyridine calcium antagonists to P-glycoprotein-mediated transport: comparison with the effects on CYP3A4. Pharm Res. 2000 Oct;17(10):1189-97. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11145223">PubMed:11145223</a>] </li>
                      <li id="reference-A175354">Darvari R, Boroujerdi M: Concentration dependency of modulatory effect of amlodipine on P-glycoprotein efflux activity of doxorubicin--a comparison with tamoxifen. J Pharm Pharmacol. 2004 Aug;56(8):985-91. doi: 10.1211/0022357043941. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/15285842">PubMed:15285842</a>] </li>
                      <li id="reference-A175357">Kuzuya T, Kobayashi T, Moriyama N, Nagasaka T, Yokoyama I, Uchida K, Nakao A, Nabeshima T: Amlodipine, but not MDR1 polymorphisms, alters the pharmacokinetics of cyclosporine A in Japanese kidney transplant recipients. Transplantation. 2003 Sep 15;76(5):865-8. doi: 10.1097/01.TP.0000084873.20157.67. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/14501869">PubMed:14501869</a>] </li>
                      <li id="reference-A175360">Kim KA, Park PW, Park JY: Effect of ABCB1 (MDR1) haplotypes derived from G2677T/C3435T on the pharmacokinetics of amlodipine in healthy subjects. Br J Clin Pharmacol. 2007 Jan;63(1):53-8. doi: 10.1111/j.1365-2125.2006.02733.x. Epub 2006 Jul 21. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16869811">PubMed:16869811</a>] </li>
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
          <p className="bt-2" id="drug-meta">Drug created on June 13, 2005 07:24 / Updated on July 11, 2019 00:51 </p>
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

export default Amlodipine;
