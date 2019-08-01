import React from 'react';
import './Acetaminophen.scss';
import Navigation from '../../Components/Navigation/Navigation' ;

class Acetaminophen extends React.Component {
  render() {
    return (
      <div>
      <header className="header-bg">
        <Navigation />
      </header>
      <div className="content-container">
        <div className="content-header d-sm-flex align-items-center">
          <h1 className="align-self-center mr-4">Acetaminophen</h1>
          <div className="page-actions justify-content-sm-end mt-2 mt-sm-0">
            <div className="bond-links"><a className="btn bond-link targets" href="#targets">Targets (6)</a><a className="btn bond-link enzymes" href="#enzymes">Enzymes (12)</a><a className="btn bond-link transporters" href="#transporters">Transporters (1)</a></div>
          </div>
        </div>
        <div className="card-content px-md-4 px-sm-2 pb-md-4 pb-sm-2">
          <h2 id="identification" className="section-header">Identification</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">Name</dt>
            <dd className="col-md-10 col-sm-8">Acetaminophen</dd><dt className="col-md-2 col-sm-4">Accession Number</dt>
            <dd className="col-md-10 col-sm-8">DB00316&nbsp; (APRD00252) </dd><dt className="col-md-2 col-sm-4">Type</dt>
            <dd className="col-md-10 col-sm-8">Small Molecule</dd><dt className="col-md-2 col-sm-4">Groups</dt>
            <dd className="col-md-10 col-sm-8">Approved</dd><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Acetaminophen (paracetamol), also commonly known as <em>Tylenol</em>, is the most commonly taken analgesic worldwide and is recommended as first-line therapy in pain conditions by the World Health Organization (WHO) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Ennis ZN, Dideriksen D, Vaegter HB, Handberg G, Pottegard A: Acetaminophen for Chronic Pain: A Systematic Review on Efficacy. Basic Clin Pharmacol Toxicol. 2016 Mar;118(3):184-9. doi: 10.1111/bcpt.12527. Epub 2015 Dec 28. (PubMed ID 26572078)" href="#reference-A176318" data-original-title title>10</a></sup>. It is also used for its antipyretic effects, helping to reduce fever <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>. This drug was initially approved by the U.S. FDA in 1951 <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title aria-describedby="popover270594">Label</a></sup> and is available in a variety of forms including syrup form, regular tablets, effervescent tablets, injection, suppository, and other forms <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen tablet, DailyMed" href="#reference-L5756" data-original-title title>15</a>,<a className="reference-popover-link" data-content="Acetaminophen effervescent tablets, Cleveland Clinic" href="#reference-L5774" data-original-title title>16</a>,<a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
              <p>Acetaminophen is often found combined with other drugs in more than 600 over the counter (OTC) allergy medications, cold medications, sleep medications, pain relievers, and other products <sup className="text-reference-group"><a className="reference-popover-link" data-content="FDA consumer health information: Acetaminophen" href="#reference-L5783" data-original-title title>19</a></sup>. Confusion about dosing of this drug may be caused by the availability of different formulas, strengths, and dosage instructions for children of different ages <sup className="text-reference-group"><a className="reference-popover-link" data-content="FDA consumer health information: Acetaminophen" href="#reference-L5783" data-original-title title>19</a></sup>. Due to the possibility of fatal overdose and liver failure associated with the incorrect use of acetaminophen, it is important to follow current and available national and manufacturer dosing guidelines while this drug is taken or prescribed <sup className="text-reference-group"><a className="reference-popover-link" data-content="FDA : Acetaminophen Information" href="#reference-L5786" data-original-title title>20</a>,<a className="reference-popover-link" data-content="Using Acetaminophen and Nonsteroidal Anti-inflammatory Drugs Safely" href="#reference-L5789" data-original-title title>21</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Structure</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="structure">
                <img src={require(`./acetaminophen.png`)} style={{width: "8%"}} alt=""/>
              </div>

            </dd>
            <dt className="col-md-2 col-sm-4">Synonyms</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list-break">
                <li>4-(Acetylamino)phenol</li>
                <li>4-acetamidophenol</li>
                <li>4'-hydroxyacetanilide</li>
                <li>Acenol</li>
                <li>Acetaminofén
                  <div className="language-flag spanish" title data-original-title="Spanish" />
                </li>
                <li>Acétaminophène
                  <div className="language-flag french" title data-original-title="French" />
                </li>
                <li>APAP</li>
                <li>N-acetyl-p-aminophenol</li>
                <li>p-acetamidophenol</li>
                <li>p-acetaminophenol</li>
                <li>p-Acetylaminophenol</li>
                <li>p-hydroxy-acetanilid</li>
                <li>p-hydroxyacetanilide</li>
                <li>p-hydroxyphenolacetamide</li>
                <li>Paracétamol
                  <div className="language-flag french" title data-original-title="French" />
                </li>
                <li>Paracetamol
                  <div className="language-flag english" title data-original-title="English" />
                  <div className="language-flag spanish" title data-original-title="Spanish" />
                </li>
                <li>Paracetamolum
                  <div className="language-flag latin" title data-original-title="Latin" />
                </li>
              </ul>
            </dd>
            <dt className="col-md-2 col-sm-4">External IDs</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">NSC-109028</span><span className="list-separator"> / </span><span className="separated-list-item">NSC-3991</span></span>
              </span>
            </dd>
            <dt className="col-md-2 col-sm-4">Over the Counter Products</dt>
            <dd className="col-md-10 col-sm-8 has-locked-content">
              <div id="otc-products_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="otc-products_length">
                      <label>Show
                        <select name="otc-products_length" aria-controls="otc-products" className="form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="otc-products_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="otc-products" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline collapsed" data-source="/drugs/DB00316/products.json?group=otc" data-total={2173} id="otc-products" style={{width: '100%'}} role="grid" aria-describedby="otc-products_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '79.2px'}} aria-label="Name: activate to sort column ascending">Name</th>
                          <th className="sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '56.2px'}} aria-label="Dosage: activate to sort column ascending">Dosage</th>
                          <th className="sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '70.2px'}} aria-label="Strength: activate to sort column ascending">Strength</th>
                          <th className="sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '46.2px'}} aria-label="Route: activate to sort column ascending">Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '70.2px'}} aria-label="Labeller: activate to sort column ascending">Labeller</th>
                          <th className="sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                          <th className="sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                          <th className="sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                          <th className="drug-image sorting" tabIndex={0} aria-controls="otc-products" rowSpan={1} colSpan={1} style={{width: '0.2px', display: 'none'}} aria-label=": activate to sort column ascending" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Tablet</td>
                          <td>325 mg</td>
                          <td>Oral</td>
                          <td>Lil' Drug Store Products, Inc.</td>
                          <td>2014-08-20</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Tablet</td>
                          <td>500 mg</td>
                          <td>Oral</td>
                          <td>Lil' Drug Store Products, Inc.</td>
                          <td>2013-11-12</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Suppository</td>
                          <td>120 mg</td>
                          <td>Rectal</td>
                          <td>Pharmel Inc</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Suppository</td>
                          <td>160 mg</td>
                          <td>Rectal</td>
                          <td>Pharmel Inc</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Suppository</td>
                          <td>325 mg</td>
                          <td>Rectal</td>
                          <td>Pharmel Inc</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Suppository</td>
                          <td>650 mg</td>
                          <td>Rectal</td>
                          <td>Pharmel Inc</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Tablet</td>
                          <td>500 mg</td>
                          <td>Oral</td>
                          <td>Perrigo International</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Solution / drops</td>
                          <td>80 mg</td>
                          <td>Oral</td>
                          <td>Euro Pharm International Canada Inc</td>
                          <td>2009-03-25</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Solution</td>
                          <td>160 mg</td>
                          <td>Oral</td>
                          <td>Euro Pharm International Canada Inc</td>
                          <td>2009-03-25</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>Acetaminophen</td>
                          <td>Solution</td>
                          <td>80 mg</td>
                          <td>Oral</td>
                          <td>Euro Pharm International Canada Inc</td>
                          <td>2011-11-24</td>
                          <td><span className="not-available">Not Applicable</span></td>
                          <td><span className="country"><span>Canada</span></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                      </tbody>
                    </table>
                    <div id="otc-products_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="otc-products_info" role="status" aria-live="polite">Showing 31 to 40 of 2,173 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="otc-products_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous" id="otc-products_previous"><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item disabled" id="otc-products_ellipsis"><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={7} tabIndex={0} className="page-link">218</a></li>
                        <li className="paginate_button page-item next" id="otc-products_next"><a href="javascript:void(0)" aria-controls="otc-products" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
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
                  <li><a href="#1">Acetaminophen and Prodrugs</a></li>
                  <li><a href="#1">Amides</a></li>
                  <li><a href="#1">Analgesics</a></li>
                  <li><a href="#1">Analgesics, Non-Narcotic</a></li>
                  <li><a href="#1">Anilides</a></li>
                  <li><a href="#1">Antipyretics</a></li>
                  <li><a href="#1">Central Nervous System Agents</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP1A2 Substrates</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP2A6 Substrates</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP2D6 Substrates</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP2E1 Substrates</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP3A Inducers</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP3A Inhibitors</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP3A Substrates</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP3A4 Inducers</a></li>
                  <li><a href="v">Cytochrome P-450 CYP3A4 Inducers (strength unknown)</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP3A4 Inhibitors</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP3A4 Inhibitors (weak)</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP3A4 Substrates</a></li>
                  <li><a href="#1">Cytochrome P-450 CYP3A4 Substrates (strength unknown)</a></li>
                  <li><a href="#1">Cytochrome P-450 Enzyme Inducers</a></li>
                  <li><a href="#1">Cytochrome P-450 Enzyme Inhibitors</a></li>
                  <li><a href="#1">Drugs that are Mainly Renally Excreted</a></li>
                  <li><a href="v">Methemoglobinemia Associated Agents</a></li>
                  <li><a href="#1">Miscellaneous Analgesics and Antipyretics</a></li>
                  <li><a href="#1">Nervous System</a></li>
                  <li><a href="#1">P-glycoprotein/ABCB1 Inhibitors</a></li>
                  <li><a href="#1">P-glycoprotein/ABCB1 Substrates</a></li>
                  <li><a href="#1">Sensory System Agents</a></li>
                  <li><a href="#1">UGT1A1 Substrates</a></li>
                  <li><a href="#1">UGT1A6 substrate</a></li>
                  <li><a href="#1">UGT1A9 Substrates</a></li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">UNII</dt>
            <dd className="col-md-10 col-sm-8"><a target="_blank" rel="noopener noreferrer" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=362O9ITL9D">362O9ITL9D</a></dd><dt className="col-md-2 col-sm-4">CAS number</dt>
            <dd className="col-md-10 col-sm-8">103-90-2</dd><dt className="col-md-2 col-sm-4">Weight</dt>
            <dd className="col-md-10 col-sm-8">Average: 151.1626
              <br />Monoisotopic: 151.063328537 </dd><dt className="col-md-2 col-sm-4">Chemical Formula</dt>
            <dd className="col-md-10 col-sm-8">C<sub>8</sub>H<sub>9</sub>NO<sub>2</sub></dd><dt className="col-md-2 col-sm-4">InChI Key</dt>
            <dd className="col-md-10 col-sm-8">RZVAJINKPMORJF-UHFFFAOYSA-N</dd><dt className="col-md-2 col-sm-4">InChI</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">InChI=1S/C8H9NO2/c1-6(10)9-7-2-4-8(11)5-3-7/h2-5,11H,1H3,(H,9,10)</div>
            </dd><dt className="col-md-2 col-sm-4">IUPAC Name</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">N-(4-hydroxyphenyl)acetamide</div>
            </dd><dt className="col-md-2 col-sm-4">SMILES</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">CC(=O)NC1=CC=C(O)C=C1</div>
            </dd>
          </dl>
          <h2 id="pharmacology" className="section-header">Pharmacology</h2>
          <dl><dt className="col-md-2 col-sm-4">Indication</dt>
            <dd className="col-md-10 col-sm-8">
              <p>In general, acetaminophen is used for the treatment of mild to moderate pain and reduction of fever <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>. It is available over the counter in various forms, the most common being oral forms.</p>
              <p>Acetaminophen <em>injection</em> is indicated for <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>:</p>
              <p>• Management of mild to moderate pain</p>
              <p>• Management of moderate to severe pain with adjunctive opioid analgesics
              </p>
              <p>• Reduction of fever</p>
              <p>Because of its low risk of causing allergic reactions, this drug can be administered in patients who are intolerant to salicylates and those with allergic tendencies, including bronchial asthmatics <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>. Specific dosing guidelines should be followed when administering acetaminophen to children <sup className="text-reference-group"><a className="reference-popover-link" data-content="U.S. National Medical Library: MedlinePlus- Acetaminophen dosing for children" href="#reference-L5780" data-original-title title>18</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Associated Conditions</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li><a href="#1">Fevers</a></li>
                <li><a href="#1">Pain NOS</a></li>
                <li><a href="#1">Severe Pain</a></li>
                <li><a href="#1">Mild Pain NOS</a></li>
                <li><a href="#1">Minor aches and pains</a></li>
                <li><a href="#1">Moderate Pain</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Pharmacodynamics</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Animal and clinical studies have determined that acetaminophen has both antipyretic and analgesic effects. This drug has been shown to lack anti-inflammatory effects. As opposed to the <em>salicylate</em> drug class, acetaminophen does not disrupt tubular secretion of uric acid and does not affect acid-base balance if taken at the recommended doses <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>. Acetaminophen does not disrupt hemostasis and does not have inhibitory activities against platelet aggregation <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>. Allergic reactions are rare occurrences following acetaminophen use <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Mechanism of action</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Although acetaminophen's exact mechanism of action has not been fully established, according to the FDA label <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>, it is categorized as an NSAID (a nonsteroidal anti-inflammatory drug) due to that fact that it inhibits the cyclooxygenase (COX) pathways <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valerie Gerriets; Thomas M. Nappe (2019). Acetaminophen. StatPearls publishing." href="#reference-T518" data-original-title title>14</a></sup>, and it is thought to exert central actions which ultimately lead to the alleviation of pain symptoms <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
              <p>One theory is that acetaminophen increases the pain threshold by inhibiting two isoforms of cyclooxygenase, COX-1 and COX-2, which are involved in prostaglandin (PG) synthesis. Prostaglandins are responsible for eliciting pain sensations <sup className="text-reference-group"><a className="reference-popover-link" data-content="Ricciotti E, FitzGerald GA: Prostaglandins and inflammation. Arterioscler Thromb Vasc Biol. 2011 May;31(5):986-1000. doi: 10.1161/ATVBAHA.110.207449. (PubMed ID 21508345)" href="#reference-A176366" data-original-title title>13</a></sup>. Acetaminophen does not inhibit cyclooxygenase in peripheral tissues and, therefore, has no peripheral anti-inflammatory effects. Though acetylsalicylic acid (aspirin) is an irreversible inhibitor of COX and directly blocks the active site of this enzyme, studies have shown that acetaminophen (paracetamol) blocks COX indirectly <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen data sheet, ebi.ac.uk" href="#reference-F4133" data-original-title title>23</a></sup>. Studies also suggest that acetaminophen selectively blocks a variant type of the COX enzyme <sup className="text-reference-group"><a className="reference-popover-link" data-content="Chandrasekharan NV, Dai H, Roos KL, Evanson NK, Tomsik J, Elton TS, Simmons DL: COX-3, a cyclooxygenase-1 variant inhibited by acetaminophen and other analgesic/antipyretic drugs: cloning, structure, and expression. Proc Natl Acad Sci U S A. 2002 Oct 15;99(21):13926-31. Epub 2002 Sep 19. (PubMed ID 12242329)" href="#reference-A468" data-original-title title>6</a></sup> that is unique from the known variants COX-1 and COX-2. This enzyme has been referred to as <em>COX-3</em>. The antipyretic actions of acetaminophen are likely attributed to direct action on heat-regulating centers in the brain, resulting in peripheral vasodilation, sweating, and loss of body heat <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen data sheet, ebi.ac.uk" href="#reference-F4133" data-original-title title>23</a></sup>. The exact mechanism of action of this drug is not fully understood at this time, but future research may contribute to deeper knowledge <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen data sheet, ebi.ac.uk" href="#reference-F4133" data-original-title title>23</a></sup>. </p>
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
                    <td><span className="badge badge-pill badge-yes mr-2 tips" title data-original-title="Pharmacologically Active">A</span><a href="#BE0000262">Prostaglandin G/H synthase 2</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-yes mr-2 tips" title data-original-title="Pharmacologically Active">A</span><a href="#BE0000017">Prostaglandin G/H synthase 1</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0004892">Prostaglandin G/H synthase 3</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Mouse</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0002194">Fatty-acid amide hydrolase 1</a></td>
                    <td>
                      <div className="label label-default">substrate</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0001023">Transient receptor potential cation channel subfamily V member 1</a></td>
                    <td>
                      <div className="label label-default">activator</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000814">Glutathione S-transferase P</a></td>
                    <td><span className="not-available">Not Available</span></td>
                    <td>Humans</td>
                  </tr>
                </tbody>
              </table>
            </dd>
            <dt className="col-md-2 col-sm-4">Absorption</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Acetaminophen has 88% oral bioavailability and reaches its highest plasma concentration 90 minutes after ingestion <sup className="text-reference-group"><a className="reference-popover-link" data-content="Mazaleuskaya LL, Sangkuhl K, Thorn CF, FitzGerald GA, Altman RB, Klein TE: PharmGKB summary: pathways of acetaminophen metabolism at the therapeutic versus toxic doses. Pharmacogenet Genomics. 2015 Aug;25(8):416-26. doi: 10.1097/FPC.0000000000000150. (PubMed ID 26049587)" href="#reference-A35815" data-original-title title>9</a></sup>. Peak blood levels of free acetaminophen are not reached until 3 hours after rectal administration of the suppository form of acetaminophen and the peak blood concentration is approximately 50% of the observed concentration after the ingestion of an equivalent oral dose (10-20 mcg/mL) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>.</p>
              <p>The percentage of a systemically absorbed rectal dose of acetaminophen is inconsistent, demonstrated by major differences in the bioavailability of acetaminophen after a dose administered rectally. Higher rectal doses or an increased frequency of administration may be used to attain blood concentrations of acetaminophen similar to those attained after oral acetaminophen administration <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Volume of distribution</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Volume of distribution is about 0.9L/kg. 10 to 20% of the drug is bound to red blood cells <sup className="text-reference-group"><a className="reference-popover-link" data-content="Bannwarth B, Pehourcq F: [Pharmacologic basis for using paracetamol: pharmacokinetic and pharmacodynamic issues]. Drugs. 2003;63 Spec No 2:5-13. (PubMed ID 14758786)" href="#reference-A176357" data-original-title title>11</a></sup>. </p>
              <p>Acetaminophen appears to be widely distributed throughout most body tissues except in fat <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Protein binding</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The binding of acetaminophen to plasma proteins is low (ranging from 10% to 25%), when given at therapeutic doses <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Metabolism</dt>
            <dd className="col-md-10 col-sm-8">
              <p />
              <p>Acetaminophen is the major metabolite of <em>phenacetin</em> and <em>acetanilid</em> <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>. Acetaminophen is mainly metabolized in the liver by first-order kinetics and its metabolism of comprised of 3 pathways: conjugation with glucuronide, conjugation with sulfate, and oxidation through the cytochrome P450 enzyme pathway, mainly CYP2E1, to produce a reactive metabolite (N-acetyl-p-benzoquinone imine or NAPQI). At normal therapeutic doses, NAPQI undergoes fast conjugation with glutathione and is subsequently metabolized to produce both cysteine and mercapturic acid conjugates <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p>High doses of acetaminophen (overdoses) can lead to hepatic necrosis due to the depletion of glutathione and of binding of high levels of reactive metabolite (NAPQI) to important parts of liver cells. The abovementioned damage to the liver can be prevented by the early administration of sulfhydryl compounds, for example, methionine and N-acetylcysteine <sup className="text-reference-group"><a className="reference-popover-link" data-content="Forrest JA, Clements JA, Prescott LF: Clinical pharmacokinetics of paracetamol. Clin Pharmacokinet. 1982 Mar-Apr;7(2):93-107. (PubMed ID 7039926)" href="#reference-A35814" data-original-title title>12</a></sup>.</p>
              <p />
              <ul className="list-unstyled">
                <li><a href="#1"><strong>Acetaminophen</strong> <div className="drugbank-icon icon-arrow-right"></div> NAPQI</a>
                  <ul>
                    <li><a href="#1">NAPQI <div className="drugbank-icon icon-arrow-right"></div> Acetaminophen cystein</a></li>
                  </ul>
                </li>
                <li><a href="#1"><strong>Acetaminophen</strong> <div className="drugbank-icon icon-arrow-right"></div> Acetaminophen glucuronide</a></li>
                <li><a href="#1"><strong>Acetaminophen</strong> <div className="drugbank-icon icon-arrow-right"></div> Acetaminophen sulfate</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Route of elimination</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Acetaminophen metabolites are mainly excreted in the urine. Less than 5% is excreted in the urine as free (unconjugated) acetaminophen and at least 90% of the administered dose is excreted within 24 hours <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen monograph, suppository" href="#reference-F4124" data-original-title title>22</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Half life</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The half-life for adults is 2.5 h after an intravenous dose of 15 mg/kg <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. After an overdose, the half-life can range from 4 to 8 hours depending on the severity of injury to the liver, as it heavily metabolizes acetaminophen <sup className="text-reference-group"><a className="reference-popover-link" data-content="Mazaleuskaya LL, Sangkuhl K, Thorn CF, FitzGerald GA, Altman RB, Klein TE: PharmGKB summary: pathways of acetaminophen metabolism at the therapeutic versus toxic doses. Pharmacogenet Genomics. 2015 Aug;25(8):416-26. doi: 10.1097/FPC.0000000000000150. (PubMed ID 26049587)" href="#reference-A35815" data-original-title title>9</a></sup>. More information on half-life for neonates and other populations may be found on the acetaminophen FDA label <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Clearance</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Adults: 0.27 L/h/kg following a 15 mg/kg intravenous (IV) dose <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. Children: 0.34 L/h/kg following a 15 mg/kg intravenous (IV dose) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
              <p>More clearance information for a variety of populations is available on the acetaminophen FDA label <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
            </dd><dt className="col-md-2 col-sm-4">Toxicity</dt>
            <dd className="col-md-10 col-sm-8">
              <p>LD50 = 338 mg/kg (oral, mouse); LD50 = 1944 mg/kg (oral, rat) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen data sheet, ebi.ac.uk" href="#reference-F4133" data-original-title title>23</a></sup></p>
              <p><strong>Overdose and liver toxicity</strong> </p>
              <p>Acetaminophen overdose may be manifested by renal tubular necrosis, hypoglycemic coma, and thrombocytopenia. Sometimes, liver necrosis can occur as well as liver failure. Death and the requirement of a liver transplant may also occur <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. Metabolism by the CYP2E1 pathway releases a toxic acetaminophen metabolite known as <em>N-acetyl-p-benzoquinoneimine</em>(NAPQI). The toxic effects caused by this drug are attributed to NAPQI, not acetaminophen alone <sup className="text-reference-group"><a className="reference-popover-link" data-content="Acetaminophen data sheet, ebi.ac.uk" href="#reference-F4133" data-original-title title>23</a></sup>.</p>
              <p><strong>Carcinogenesis</strong></p>
              <p>Long-term studies in mice and rats have been completed by the National Toxicology Program to study the carcinogenic risk of acetaminophen. In 2-year feeding studies, F344/N rats and B6C3F1 mice consumed a diet containing acetaminophen up to 6,000 ppm. Female rats showed evidence of carcinogenic activity demonstrated by a higher incidence of mononuclear cell leukemia at doses 0.8 times the maximum human daily dose (MHDD). No evidence of carcinogenesis in male rats (0.7 times) or mice (1.2 to 1.4 times the MHDD) was noted <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. The clinical relevance of this finding in humans is unknown.</p>
              <p><strong>Mutagenesis</strong></p>
              <p>Acetaminophen was not found to be mutagenic in the bacterial reverse mutation assay (Ames test). Despite this finding, acetaminophen tested positive in the in vitro mouse lymphoma assay as well as the in vitro chromosomal aberration assay using human lymphocytes. In published studies, acetaminophen has been reported to be clastogenic (disrupting chromosomes) when given a high dose of 1,500 mg/kg/day to the rat model (3.6 times the MHDD). No clastogenicity was observed at a dose of 750 mg/kg/day (1.8 times the MHDD), indicating that this drug has a threshold before it may cause mutagenesis <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. The clinical relevance of this finding in humans is unknown.</p>
              <p><strong>Impairment of Fertility</strong></p>
              <p>In studies conducted by the National Toxicology Program, fertility assessments have been performed in Swiss mice in a continuous breeding study. No effects on fertility were seen <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. </p>
              <p><strong>Use in pregnancy and nursing</strong></p>
              <p>The FDA label for acetaminophen considers it a pregnancy category C drug, meaning this drug has demonstrated adverse effects in animal studies. No human clinical studies in pregnancy have been done to this date for intravenous acetaminophen <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. Use acetaminophen only when necessary during pregnancy <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. Epidemiological data on oral acetaminophen use in pregnant women demonstrate no increase in the risk of major congenital malformations <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>. While prospective clinical studies examining the results of nursing with acetaminophen use have not been conducted, acetaminophen is found secreted in human milk at low concentrations after oral administration. Data from more than 15 nursing mothers taking acetaminophen was obtained, and the calculated daily dose of acetaminophen that reaches the infant is about 1 to 2% of the maternal dose. Caution should be observed when acetaminophen is taken by a nursing woman <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
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
                    <td><a href="http://smpdb.ca/view/SMP0000640?highlight[compounds][]=DB00316&highlight[proteins][]=DB00316">Acetaminophen Metabolism Pathway</a></td>
                    <td>Drug metabolism</td>
                  </tr>
                  <tr>
                    <td><a href="http://smpdb.ca/view/SMP0000710?highlight[compounds][]=DB00316&highlight[proteins][]=DB00316">Acetaminophen Action Pathway</a></td>
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
                <li className="interactions index nav-item"><a className="toggle-row-display nav-link active" data-source="/drugs/DB00316/drug_interactions.json" href="#show-all">All Drugs</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00316/drug_interactions.json?group=approved" href="#show-approved">Approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00316/drug_interactions.json?group=vet_approved" href="#show-vet_approved">Vet approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00316/drug_interactions.json?group=nutraceutical" href="#show-nutraceutical">Nutraceutical</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00316/drug_interactions.json?group=illicit" href="#show-illicit">Illicit</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00316/drug_interactions.json?group=withdrawn" href="#show-withdrawn">Withdrawn</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00316/drug_interactions.json?group=investigational" href="#show-investigational">Investigational</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00316/drug_interactions.json?group=experimental" href="#show-experimental">Experimental</a></li>
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
                      <table className="table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB00316/drug_interactions.json" data-total={1836} id="drug-interactions" style={{width: '100%'}} role="grid" aria-describedby="drug-interactions_info">
                        <thead>
                          <tr role="row">
                            <th className="head-sm sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '149.2px'}} aria-label="Drug: activate to sort column ascending">Drug</th>
                            <th className="sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '566.2px'}} aria-label="Interaction: activate to sort column ascending">Interaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="#1">(R)-warfarin</a></td>
                            <td>The metabolism of (R)-warfarin can be increased when combined with Acetaminophen.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="#1">(S)-Warfarin</a></td>
                            <td>The metabolism of (S)-Warfarin can be increased when combined with Acetaminophen.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="#1">3,5-diiodothyropropionic acid</a></td>
                            <td>The metabolism of 3,5-diiodothyropropionic acid can be increased when combined with Acetaminophen.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="#1">4-hydroxycoumarin</a></td>
                            <td>The metabolism of 4-hydroxycoumarin can be increased when combined with Acetaminophen.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="#1">4-Methoxyamphetamine</a></td>
                            <td>The metabolism of 4-Methoxyamphetamine can be decreased when combined with Acetaminophen.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="#1">5-androstenedione</a></td>
                            <td>The metabolism of 5-androstenedione can be increased when combined with Acetaminophen.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="#1">6-Deoxyerythronolide B</a></td>
                            <td>The metabolism of Acetaminophen can be decreased when combined with 6-Deoxyerythronolide B.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="#1">6-O-benzylguanine</a></td>
                            <td>The metabolism of 6-O-benzylguanine can be decreased when combined with Acetaminophen.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="#1">7-ethyl-10-hydroxycamptothecin</a></td>
                            <td>The metabolism of 7-ethyl-10-hydroxycamptothecin can be increased when combined with Acetaminophen.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="#1">8-azaguanine</a></td>
                            <td>The metabolism of 8-azaguanine can be decreased when combined with Acetaminophen.</td>
                          </tr>
                        </tbody>
                      </table>
                      <div id="drug-interactions_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="drug-interactions_info" role="status" aria-live="polite">Showing 1 to 10 of 1,836 entries</div>
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
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={7} tabIndex={0} className="page-link">184</a></li>
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
                <li>Avoid alcohol (may increase risk of hepatotoxicity).</li>
                <li>Take without regard to meals.</li>
              </ul>
            </dd>
          </dl>
          <h2 id="references" className="section-header">References</h2>
          <dl><dt className="col-md-2 col-sm-4">External Links</dt>
            <dd className="col-md-10 col-sm-8">
              <dl>
              <dt className="col-md-4 col-sm-5">Human Metabolome Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.hmdb.ca/metabolites/HMDB0001859">HMDB0001859</a></dd><dt className="col-md-4 col-sm-5">KEGG Drug</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.genome.jp/dbget-bin/www_bget?drug:D00217">D00217</a></dd><dt className="col-md-4 col-sm-5">KEGG Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.genome.jp/dbget-bin/www_bget?cpd:C06804">C06804</a></dd><dt className="col-md-4 col-sm-5">PubChem Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=1983">1983</a></dd><dt className="col-md-4 col-sm-5">PubChem Substance</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?sid=46506142">46506142</a></dd><dt className="col-md-4 col-sm-5">ChemSpider</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.chemspider.com/Chemical-Structure.1906.html">1906</a></dd><dt className="col-md-4 col-sm-5">BindingDB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.bindingdb.org/bind/chemsearch/marvin/MolStructure.jsp?monomerid=26197">26197</a></dd><dt className="col-md-4 col-sm-5">ChEBI</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=46195">46195</a></dd><dt className="col-md-4 col-sm-5">ChEMBL</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chembldb/index.php/compound/inspect/CHEMBL112">CHEMBL112</a></dd><dt className="col-md-4 col-sm-5">Therapeutic Targets Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://bidd.nus.edu.sg/group/cjttd/ZFTTDDRUG.asp?ID=DAP001436">DAP001436</a></dd><dt className="col-md-4 col-sm-5">PharmGKB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.pharmgkb.org/drug/PA448015">PA448015</a></dd><dt className="col-md-4 col-sm-5">HET</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/pdbe-srv/pdbechem/chemicalCompound/show/TYL">TYL</a></dd><dt className="col-md-4 col-sm-5">Wikipedia</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://en.wikipedia.org/wiki/Acetaminophen">Acetaminophen</a></dd>
              </dl>
            </dd><dt className="col-md-2 col-sm-4">ATC Codes</dt>
            <dd className="col-md-10 col-sm-8"><a data-no-turbolink="true" href="#1">N02BE71 — Paracetamol, combinations with psycholeptics</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02BE — Anilides</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02B — OTHER ANALGESICS AND ANTIPYRETICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02 — ANALGESICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N — NERVOUS SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">N02BE01 — Paracetamol</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02BE — Anilides</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02B — OTHER ANALGESICS AND ANTIPYRETICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02 — ANALGESICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N — NERVOUS SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">N02AJ13 — Tramadol and paracetamol</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02AJ — Opioids in combination with non-opioid analgesics</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02A — OPIOIDS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02 — ANALGESICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N — NERVOUS SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">N02AJ17 — Oxycodone and paracetamol</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02AJ — Opioids in combination with non-opioid analgesics</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02A — OPIOIDS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02 — ANALGESICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N — NERVOUS SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">N02BE51 — Paracetamol, combinations excl. psycholeptics</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02BE — Anilides</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02B — OTHER ANALGESICS AND ANTIPYRETICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02 — ANALGESICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N — NERVOUS SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">N02AJ06 — Codeine and paracetamol</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02AJ — Opioids in combination with non-opioid analgesics</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02A — OPIOIDS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02 — ANALGESICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N — NERVOUS SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="javascript:void(0)">N02AJ01 — Dihydrocodeine and paracetamol</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02AJ — Opioids in combination with non-opioid analgesics</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02A — OPIOIDS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N02 — ANALGESICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N — NERVOUS SYSTEM</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">AHFS Codes</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>28:08.92 — Miscellaneous Analgesics and Antipyretics</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">PDB Entries</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=1tyl">1tyl</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=1tym">1tym</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=2dpz">2dpz</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=2ocu">2ocu</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=3py4">3py4</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=4a9j">4a9j</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=4a9k">4a9k</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=4cut">4cut</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=4gn6">4gn6</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=4yji">4yji</a></span></span> …
              <a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/pdbe-srv/pdbechem/PDBEntry/list/TYL">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 1 more</a>
            </dd><dt className="col-md-2 col-sm-4">FDA label</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="label-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/fda_labels/DB00316.pdf?1553636682">Download</a> <span className="text-muted">(392 KB) </span></div>
            </dd><dt className="col-md-2 col-sm-4">MSDS</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="msds-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/msds/DB00316.pdf?1265922743">Download</a> <span className="text-muted">(71.9 KB) </span></div>
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
                          <td>Active Not Recruiting</td>
                          <td>Other</td>
                          <td><a href="javascript:void(0)">Healthy Adult Volunteers</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Emergence Agitation</a> <span>/</span> <a href="#1">Pain NOS</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Fracture, Ankle</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Glaucoma</a></td>
                          <td><a href="#1">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Impacted Third Molar Tooth</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Lumbar Spinal Instability</a> <span>/</span> <a href="#1">Lumbar Spine Degeneration</a> <span>/</span> <a href="javascript:void(0)">Spinal Stenosis of Lumbar Region</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Not Yet Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Obesity, Morbid</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Recruiting</td>
                          <td>Diagnostic</td>
                          <td><a href="javascript:void(0)">Stage IIB Esophageal Cancer</a> <span>/</span> <a href="#1">Stage IIB Esophageal Cancer AJCC v7</a> <span>/</span> <a href="javascript:void(0)">Stage III Esophageal Cancer AJCC v7</a> <span>/</span> <a href="javascript:void(0)">Stage IIIA Esophageal Cancer</a> <span>/</span> <a href="javascript:void(0)">Stage IIIA Esophageal Cancer AJCC v7</a> <span>/</span> <a href="javascript:void(0)">Stage IIIB Esophageal Cancer</a> <span>/</span> <a href="javascript:void(0)">Stage IIIB Esophageal Cancer AJCC v7</a> <span>/</span> <a href="javascript:void(0)">Stage IIIC Esophageal Cancer</a> <span>/</span> <a href="javascript:void(0)">Stage IIIC Esophageal Cancer AJCC v7</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Recruiting</td>
                          <td>Prevention</td>
                          <td><a href="javascript:void(0)">Acetaminophen</a> <span>/</span> <a href="javascript:void(0)">Delirium in Old Age</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Analgesia</a> <span>/</span> <a href="javascript:void(0)">Postoperative pain</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 691 entries</div>
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
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={7} tabIndex={0} className="page-link">70</a></li>
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
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Form: activate to sort column ascending" style={{width: '478.203px'}}>Form</th>
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Route: activate to sort column ascending" style={{width: '322.203px'}}>Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Strength: activate to sort column ascending" style={{width: '213.203px'}}>Strength</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td>Kit</td>
                          <td>Ophthalmic; Oral; Topical</td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td>Suppository</td>
                          <td>Rectal</td>
                          <td>325 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Suppository</td>
                          <td>Rectal</td>
                          <td>120 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Suppository</td>
                          <td>Rectal</td>
                          <td>160 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Suppository</td>
                          <td>Rectal</td>
                          <td>325 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Suppository</td>
                          <td>Rectal</td>
                          <td>650 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Suppository</td>
                          <td>Rectal</td>
                          <td>120 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Suspension</td>
                          <td>Oral</td>
                          <td>160 mg/100mL</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Not applicable</td>
                          <td>650 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>325 mg/1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dosages_info" role="status" aria-live="polite">Showing 1 to 10 of 143 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="dosages_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="dosages_previous"><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item disabled" id="dosages_ellipsis"><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={7} tabIndex={0} className="page-link">15</a></li>
                        <li className="paginate_button page-item next" id="dosages_next"><a href="javascript:void(0)" aria-controls="dosages" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
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
                    <td>170</td>
                    <td>MSDS</td>
                  </tr>
                  <tr>
                    <td>boiling point (°C)</td>
                    <td>&gt;500</td>
                    <td>http://www.inchem.org/documents/icsc/icsc/eics1330.htm</td>
                  </tr>
                  <tr>
                    <td>water solubility</td>
                    <td>very slightly soluble in cold water but greater solubility in hot water</td>
                    <td>http://www.inchem.org/documents/pims/pharm/pim396.htm</td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>0.91</td>
                    <td>http://www.t3db.ca/toxins/T3D2571</td>
                  </tr>
                  <tr>
                    <td>logS</td>
                    <td>-1.6</td>
                    <td>http://www.t3db.ca/toxins/T3D2571</td>
                  </tr>
                  <tr>
                    <td>pKa</td>
                    <td>-4.4 (strongest basic)</td>
                    <td>http://www.t3db.ca/toxins/T3D2571</td>
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
                    <td>4.15 mg/mL</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>0.51</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>0.91</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#logp_logd">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>logS</td>
                    <td>-1.6</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Acidic)</td>
                    <td>9.46</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Basic)</td>
                    <td>-4.4</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Physiological Charge</td>
                    <td>0</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Acceptor Count</td>
                    <td>2</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Donor Count</td>
                    <td>2</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polar Surface Area</td>
                    <td>49.33 Å<sup>2</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topolgical_surface">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Rotatable Bond Count</td>
                    <td>1</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topology_analysis">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Refractivity</td>
                    <td>42.9 m<sup>3</sup>·mol<sup>-1</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#refractivity">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polarizability</td>
                    <td>15.52 Å<sup>3</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Number of Rings</td>
                    <td>1</td>
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
                    <td>0.9921</td>
                  </tr>
                  <tr>
                    <td>Blood Brain Barrier</td>
                    <td>+</td>
                    <td>0.9544</td>
                  </tr>
                  <tr>
                    <td>Caco-2 permeable</td>
                    <td>+</td>
                    <td>0.8285</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein substrate</td>
                    <td>Non-substrate</td>
                    <td>0.8202</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor I</td>
                    <td>Non-inhibitor</td>
                    <td>0.982</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor II</td>
                    <td>Non-inhibitor</td>
                    <td>0.9781</td>
                  </tr>
                  <tr>
                    <td>Renal organic cation transporter</td>
                    <td>Non-inhibitor</td>
                    <td>0.9292</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.7259</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 substrate</td>
                    <td>Substrate</td>
                    <td>0.8918</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.5554</td>
                  </tr>
                  <tr>
                    <td>CYP450 1A2 substrate</td>
                    <td>Non-inhibitor</td>
                    <td>0.9045</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.907</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.9755</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C19 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.9161</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.8496</td>
                  </tr>
                  <tr>
                    <td>CYP450 inhibitory promiscuity</td>
                    <td>Low CYP Inhibitory Promiscuity</td>
                    <td>0.8842</td>
                  </tr>
                  <tr>
                    <td>Ames test</td>
                    <td>Non AMES toxic</td>
                    <td>0.8767</td>
                  </tr>
                  <tr>
                    <td>Carcinogenicity</td>
                    <td>Non-carcinogens</td>
                    <td>0.7654</td>
                  </tr>
                  <tr>
                    <td>Biodegradation</td>
                    <td>Ready biodegradable</td>
                    <td>0.6342</td>
                  </tr>
                  <tr>
                    <td>Rat acute toxicity</td>
                    <td>1.8596 LD50, mol/kg </td>
                    <td><span className="not-available">Not applicable</span></td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor I)</td>
                    <td>Weak inhibitor</td>
                    <td>0.9717</td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor II)</td>
                    <td>Non-inhibitor</td>
                    <td>0.9597</td>
                  </tr>
                </tbody>
              </table>
              <div className="alert alert-warning clearfix admetsar-alert"><span className="glyphicon glyphicon-info-sign"> </span> ADMET data is predicted using <a href="http://lmmd.ecust.edu.cn:8000">admetSAR</a>, a free tool for evaluating chemical ADMET properties. (<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/23092397">23092397</a>) </div>
            </dd>
          </dl>
          <h2 id="spectra" className="section-header">Spectra</h2>
          <dl><dt className="col-md-2 col-sm-4">Mass Spec (NIST)</dt>
            <dd className="col-md-10 col-sm-8"><a href="//s3-us-west-2.amazonaws.com/drugbank/mass_specs/DB00316.gif?1265922771">Download</a> <span className="text-muted">(7.63 KB) </span></dd><dt className="col-md-2 col-sm-4">Spectra</dt>
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
                    <td><a href="javascript:void(0)">GC-MS Spectrum - GC-MS (2 TMS)</a></td>
                    <td>GC-MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-4971200000-17e6e1373f10ba4ec138">splash10-0a4i-4971200000-17e6e1373f10ba4ec138</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted GC-MS Spectrum - GC-MS</a></td>
                    <td>Predicted GC-MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">GC-MS Spectrum - EI-B</a></td>
                    <td>GC-MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-1900000000-df97f74a81da3a46a697">splash10-0a4i-1900000000-df97f74a81da3a46a697</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">GC-MS Spectrum - EI-B</a></td>
                    <td>GC-MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-4900000000-ef277124e1b50b5f010e">splash10-0a4i-4900000000-ef277124e1b50b5f010e</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">GC-MS Spectrum - CI-B</a></td>
                    <td>GC-MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-7aa6a54b74b345d91e37">splash10-0udi-0900000000-7aa6a54b74b345d91e37</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">GC-MS Spectrum - GC-MS</a></td>
                    <td>GC-MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-4971200000-17e6e1373f10ba4ec138">splash10-0a4i-4971200000-17e6e1373f10ba4ec138</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Mass Spectrum (Electron Ionization)</a></td>
                    <td>MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-4900000000-ffdd0f8a1e6e450fc162">splash10-0a4i-4900000000-ffdd0f8a1e6e450fc162</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">MS/MS Spectrum - Quattro_QQQ 10V, Positive (Annotated)</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0w29-3900000000-97741eddc3be9c7eaea8">splash10-0w29-3900000000-97741eddc3be9c7eaea8</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">MS/MS Spectrum - Quattro_QQQ 25V, Positive (Annotated)</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0ik9-1900000000-1ddd59340d1db920fa66">splash10-0ik9-1900000000-1ddd59340d1db920fa66</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">MS/MS Spectrum - Quattro_QQQ 40V, Positive (Annotated)</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-00kf-9000000000-148fa91ce08e13165712">splash10-00kf-9000000000-148fa91ce08e13165712</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">MS/MS Spectrum - EI-B (HITACHI M-80) , Positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-1900000000-5997c3f6cdebc5326b65">splash10-0a4i-1900000000-5997c3f6cdebc5326b65</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">MS/MS Spectrum - EI-B (Unknown) , Positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-4900000000-ef277124e1b50b5f010e">splash10-0a4i-4900000000-ef277124e1b50b5f010e</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">MS/MS Spectrum - CI-B (Unknown) , Positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-7aa6a54b74b345d91e37">splash10-0udi-0900000000-7aa6a54b74b345d91e37</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">Predicted MS/MS Spectrum - 10V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)7">Predicted MS/MS Spectrum - 20V, Positive (Annotated)</a></td>
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
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0zfr-0900000000-125e44ce332576a1e155">splash10-0zfr-0900000000-125e44ce332576a1e155</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-7e46df4b4b653c90c258">splash10-0udi-0900000000-7e46df4b4b653c90c258</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-bb6e34d2d574a249d721">splash10-0udi-0900000000-bb6e34d2d574a249d721</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-2f45dd7efce38361f806">splash10-0udi-0900000000-2f45dd7efce38361f806</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0pb9-0900000000-e48b48d64b6b985ab455">splash10-0pb9-0900000000-e48b48d64b6b985ab455</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0900000000-b72b0e33fd35512fe6de">splash10-0a4i-0900000000-b72b0e33fd35512fe6de</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0900000000-97bcaa95f26159307d03">splash10-0a4i-0900000000-97bcaa95f26159307d03</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-c50b4b79792e2c2e68f9">splash10-0udi-0900000000-c50b4b79792e2c2e68f9</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-7e46df4b4b653c90c258">splash10-0udi-0900000000-7e46df4b4b653c90c258</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-2b07cd2813d3f23e88f1">splash10-0udi-0900000000-2b07cd2813d3f23e88f1</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0pb9-0900000000-5b92f09589afe838f23a">splash10-0pb9-0900000000-5b92f09589afe838f23a</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0900000000-f0ca5ff6526b9f005034">splash10-0a4i-0900000000-f0ca5ff6526b9f005034</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-7e45ef71674dcdde9068">splash10-0udi-0900000000-7e45ef71674dcdde9068</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QTOF , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0w29-1900000000-38d21a339e82f461beac">splash10-0w29-1900000000-38d21a339e82f461beac</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-d953f92b362e4b262210">splash10-0udi-0900000000-d953f92b362e4b262210</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-3170dca3f927500ea230">splash10-0udi-0900000000-3170dca3f927500ea230</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)9">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-f835e92fb0bae0c7b8bc">splash10-0udi-0900000000-f835e92fb0bae0c7b8bc</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0w29-0900000000-4e01c7ff07665fcdb218">splash10-0w29-0900000000-4e01c7ff07665fcdb218</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-0900000000-a3c279c288bb690496b3">splash10-03di-0900000000-a3c279c288bb690496b3</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-2900000000-4435e0230105d5d28a94">splash10-03di-2900000000-4435e0230105d5d28a94</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-6900000000-76671cc7ad1df1b5983d">splash10-03di-6900000000-76671cc7ad1df1b5983d</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-9895c5f2b10912092523">splash10-0udi-0900000000-9895c5f2b10912092523</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0900000000-d73797c93a4ef79ea79e">splash10-0udi-0900000000-d73797c93a4ef79ea79e</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0w29-0900000000-22d62a7732ed3d99e87d">splash10-0w29-0900000000-22d62a7732ed3d99e87d</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-0900000000-c652f4f179daa6465678">splash10-03di-0900000000-c652f4f179daa6465678</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-2900000000-0e7e745540d8ec7b99f4">splash10-03di-2900000000-0e7e745540d8ec7b99f4</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-6900000000-2a4263b38fa30bc64dd0">splash10-03di-6900000000-2a4263b38fa30bc64dd0</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0w29-0900000000-cf0ac615ec636ce7a253">splash10-0w29-0900000000-cf0ac615ec636ce7a253</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-IT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-0900000000-428d8023ee5761fed84c">splash10-03di-0900000000-428d8023ee5761fed84c</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-0900000000-ed26fb95b6aea6986085">splash10-03di-0900000000-ed26fb95b6aea6986085</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-1900000000-5b942e17f1e66a3832b8">splash10-03di-1900000000-5b942e17f1e66a3832b8</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-0900000000-d6a7498b8d87d4e00028">splash10-03di-0900000000-d6a7498b8d87d4e00028</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-03di-0900000000-9ff40d4cd8c0f46836c2">splash10-03di-0900000000-9ff40d4cd8c0f46836c2</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0w29-0900000000-fcf8e62537bd6db11b3a">splash10-0w29-0900000000-fcf8e62537bd6db11b3a</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0w29-0900000000-c27e8f1522f41492aae3">splash10-0w29-0900000000-c27e8f1522f41492aae3</a></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">1H NMR Spectrum</a></td>
                    <td>1D NMR</td>
                    <td><span className="not-available">Not Applicable</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">1H NMR Spectrum</a></td>
                    <td>1D NMR</td>
                    <td><span className="not-available">Not Applicable</span></td>
                  </tr>
                  <tr>
                    <td><a href="javascript:void(0)">13C NMR Spectrum</a></td>
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
            <dd className="col-md-10 col-sm-8">This compound belongs to the class of organic compounds known as 1-hydroxy-2-unsubstituted benzenoids. These are phenols that a unsubstituted at the 2-position.</dd><dt className="col-md-2 col-sm-4">Kingdom</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000000" data-original-title="Compounds that contain at least one carbon atom, excluding isocyanide/cyanide and their non-hydrocarbyl derivatives, thiophosgene, carbon diselenide, carbon monosulfide, carbon disulfide, carbon subsulfide, carbon monoxide, carbon dioxide, Carbon suboxide, and dicarbon monoxide.">Organic compounds</a></dd><dt className="col-md-2 col-sm-4">Super Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002448" data-original-title="Aromatic compounds containing one or more benzene rings.">Benzenoids</a></dd><dt className="col-md-2 col-sm-4">Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000134" data-original-title="Compounds containing a phenol moiety, which is a benzene bearing a hydroxyl group.">Phenols</a></dd><dt className="col-md-2 col-sm-4">Sub Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004646" data-original-title="Phenols that a unsubstituted at the 2-position.">1-hydroxy-2-unsubstituted benzenoids</a></dd><dt className="col-md-2 col-sm-4">Direct Parent</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004646" data-original-title="Phenols that a unsubstituted at the 2-position.">1-hydroxy-2-unsubstituted benzenoids</a></dd><dt className="col-md-2 col-sm-4">Alternative Parents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002279" data-original-title="Aromatic compounds containing one monocyclic ring system consisting of benzene.">Benzene and substituted derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003633" data-original-title="Organic 1,3-dipolar compounds with the general structure  X#N+-Z- <-> X-=N+=Z <-> X-=N-Z+ <-> X-N=Z (X = C or O, Z = C, N, or O).">Propargyl-type 1,3-dipolar organic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002484" data-original-title="Organic acids with the general formula RC(=N)-OH (R=H, organic group).">Carboximidic acids</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004557" data-original-title="Compounds containing a bond between carbon a pnictogen atom. Pnictogens are p-block element atoms that are in the group 15 of the periodic table.">Organopnictogen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000323" data-original-title="Organic compounds containing a bond between a carbon atom and an oxygen atom.">Organooxygen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000278" data-original-title="Organic compounds containing a nitrogen atom.">Organonitrogen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004150" data-original-title="Derivatives of hydrocarbons obtained by substituting one or more carbon atoms by an heteroatom. They contain at least one carbon atom and heteroatom.">Hydrocarbon derivatives</a></span></span>
              </span>
            </dd><dt className="col-md-2 col-sm-4">Substituents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">1-hydroxy-2-unsubstituted benzenoid</span><span className="list-separator"> / </span><span className="separated-list-item">Monocyclic benzene moiety</span><span className="list-separator"> / </span><span className="separated-list-item">Organic 1,3-dipolar compound</span><span className="list-separator"> / </span><span className="separated-list-item">Propargyl-type 1,3-dipolar organic compound</span><span className="list-separator"> / </span><span className="separated-list-item">Carboximidic acid derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Carboximidic acid</span><span className="list-separator"> / </span><span className="separated-list-item">Organic nitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organopnictogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Hydrocarbon derivative</span></span>
              </span>
            </dd><dt className="col-md-2 col-sm-4">Molecular Framework</dt>
            <dd className="col-md-10 col-sm-8">Aromatic homomonocyclic compounds</dd><dt className="col-md-2 col-sm-4">External Descriptors</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item">phenols, acetamides (<a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:46195">CHEBI:46195</a>) </span><span className="list-separator"> / </span><span className="simple-separated-list-item">a small molecule (<a target="_blank" rel="noopener noreferrer" href="http://metacyc.org/META/new-image?type=COMPOUND&object=CPD-7669">CPD-7669</a>) </span></span>
            </dd>
          </dl>
          <div className="bond-list-container targets">
            <h3 id="targets">Targets</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0000262">
                <div aria-hidden="true" aria-labelledby="binding properties" className="modal fade" id="BE0000262-binding-properties" role="dialog" tabIndex={-1}>
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
                                <td>141000</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19053765">19053765</a></span></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ki (nM)</td>
                                <td>&gt;10000</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/9626023">9626023</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10377455">10377455</a></span></span>
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
                  <button className="btn btn-sm btn-drugbank-secondary" data-target="#BE0000262-binding-properties" data-toggle="modal" type="button">
                    <span className="full-binding-label">Binding Properties</span></button><strong>1. <a href="javascript:void(0)">Prostaglandin G/H synthase 2</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Prostaglandin-endoperoxide synthase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Converts arachidonate to prostaglandin H2 (PGH2), a committed step in prostanoid synthesis. Constitutively expressed in some tissues in physiological conditions, such as the endothelium, kidney and...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">PTGS2</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P35354">P35354</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Prostaglandin G/H synthase 2</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">68995.625 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A9">Chen X, Ji ZL, Chen YZ: TTD: Therapeutic Target Database. Nucleic Acids Res. 2002 Jan 1;30(1):412-5. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11752352">PubMed:11752352</a>] </li>
                      <li id="reference-A10381">Lee YS, Kim H, Brahim JS, Rowan J, Lee G, Dionne RA: Acetaminophen selectively suppresses peripheral prostaglandin E2 release and increases COX-2 gene expression in a clinical model of acute inflammation. Pain. 2007 Jun;129(3):279-86. Epub 2006 Dec 18. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17175104">PubMed:17175104</a>] </li>
                      <li id="reference-A10382">Hinz B, Cheremina O, Brune K: Acetaminophen (paracetamol) is a selective cyclooxygenase-2 inhibitor in man. FASEB J. 2008 Feb;22(2):383-90. Epub 2007 Sep 20. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17884974">PubMed:17884974</a>] </li>
                      <li id="reference-A10383">Weinheimer EM, Jemiolo B, Carroll CC, Harber MP, Haus JM, Burd NA, LeMoine JK, Trappe SW, Trappe TA: Resistance exercise and cyclooxygenase (COX) expression in human skeletal muscle: implications for COX-inhibiting drugs and protein synthesis. Am J Physiol Regul Integr Comp Physiol. 2007 Jun;292(6):R2241-8. Epub 2007 Feb 22. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17322116">PubMed:17322116</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000017">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Prostaglandin G/H synthase 1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Prostaglandin-endoperoxide synthase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Converts arachidonate to prostaglandin H2 (PGH2), a committed step in prostanoid synthesis. Involved in the constitutive production of prostanoids in particular in the stomach and platelets. In gas...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">PTGS1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P23219">P23219</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Prostaglandin G/H synthase 1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">68685.82 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A9">Chen X, Ji ZL, Chen YZ: TTD: Therapeutic Target Database. Nucleic Acids Res. 2002 Jan 1;30(1):412-5. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11752352">PubMed:11752352</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004892">
                <div className="card-header"><strong>3. Prostaglandin G/H synthase 3</strong></div>
                <div className="card-body"><dt className="col-md-5 col-sm-6">Kind</dt>
                  <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                  <dd className="col-md-7 col-sm-6">Mouse</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                  <dd className="col-md-7 col-sm-6">
                    <div className="badge badge badge-unknown">Unknown</div>
                  </dd><dt className="col-md-5 col-sm-6">Actions</dt>
                  <dd className="col-md-7 col-sm-6">
                    <div className="badge badge-pill badge-action">Inhibitor</div>
                  </dd>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18200">Botting R, Ayoub SS: COX-3 and the mechanism of action of paracetamol/acetaminophen. Prostaglandins Leukot Essent Fatty Acids. 2005 Feb;72(2):85-7. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/15626590">PubMed:15626590</a>] </li>
                      <li id="reference-A468">Chandrasekharan NV, Dai H, Roos KL, Evanson NK, Tomsik J, Elton TS, Simmons DL: COX-3, a cyclooxygenase-1 variant inhibited by acetaminophen and other analgesic/antipyretic drugs: cloning, structure, and expression. Proc Natl Acad Sci U S A. 2002 Oct 15;99(21):13926-31. Epub 2002 Sep 19. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12242329">PubMed:12242329</a>] </li>
                      <li id="reference-F4142">Data sheet, Acetaminophen, ebi.ac.uk [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/004/142/original/Data_sheet__Acetaminophen__ebi.ac.uk.pdf?1553717784">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002194">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>4. <a href="javascript:void(0)">Fatty-acid amide hydrolase 1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Fatty acid amide hydrolase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Degrades bioactive fatty acid amides like oleamide, the endogenous cannabinoid, anandamide and myristic amide to their corresponding acids, thereby serving to terminate the signaling functions of t...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">FAAH</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O00519">O00519</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Fatty-acid amide hydrolase 1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">63065.28 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18702">Hogestatt ED, Jonsson BA, Ermund A, Andersson DA, Bjork H, Alexander JP, Cravatt BF, Basbaum AI, Zygmunt PM: Conversion of acetaminophen to the bioactive N-acylphenolamine AM404 via fatty acid amide hydrolase-dependent arachidonic acid conjugation in the nervous system. J Biol Chem. 2005 Sep 9;280(36):31405-12. Epub 2005 Jun 29. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/15987694">PubMed:15987694</a>] </li>
                      <li id="reference-A176375">Zaitone SA, El-Wakeil AF, Abou-El-Ela SH: Inhibition of fatty acid amide hydrolase by URB597 attenuates the anxiolytic-like effect of acetaminophen in the mouse elevated plus-maze test. Behav Pharmacol. 2012 Aug;23(4):417-25. doi: 10.1097/FBP.0b013e3283566065. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22750843">PubMed:22750843</a>] </li>
                      <li id="reference-A465">Bertolini A, Ferrari A, Ottani A, Guerzoni S, Tacchi R, Leone S: Paracetamol: new vistas of an old drug. CNS Drug Rev. 2006 Fall-Winter;12(3-4):250-75. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17227290">PubMed:17227290</a>] </li>
                      <li id="reference-A176378">Muramatsu S, Shiraishi S, Miyano K, Sudo Y, Toda A, Mogi M, Hara M, Yokoyama A, Kawasaki Y, Taniguchi M, Uezono Y: Metabolism of AM404 From Acetaminophen at Human Therapeutic Dosages in the Rat Brain. Anesth Pain Med. 2016 Jan 17;6(1):e32873. doi: 10.5812/aapm.32873. eCollection 2016 Feb. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/27110534">PubMed:27110534</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0001023">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>5. <a href="javascript:void(0)">Transient receptor potential cation channel subfamily V member 1</a></strong></div>
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
                          <div className="badge badge-pill badge-action">Activator</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Transmembrane signaling receptor activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Ligand-activated non-selective calcium permeant cation channel involved in detection of noxious chemical and thermal stimuli. Seems to mediate proton influx and may be involved in intracellular aci...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">TRPV1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q8NER1">Q8NER1</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Transient receptor potential cation channel subfamily V member 1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">94955.33 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18702">Hogestatt ED, Jonsson BA, Ermund A, Andersson DA, Bjork H, Alexander JP, Cravatt BF, Basbaum AI, Zygmunt PM: Conversion of acetaminophen to the bioactive N-acylphenolamine AM404 via fatty acid amide hydrolase-dependent arachidonic acid conjugation in the nervous system. J Biol Chem. 2005 Sep 9;280(36):31405-12. Epub 2005 Jun 29. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/15987694">PubMed:15987694</a>] </li>
                      <li id="reference-A18703">Mallet C, Barriere DA, Ermund A, Jonsson BA, Eschalier A, Zygmunt PM, Hogestatt ED: TRPV1 in brain is involved in acetaminophen-induced antinociception. PLoS One. 2010 Sep 17;5(9). pii: e12748. doi: 10.1371/journal.pone.0012748. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/20862299">PubMed:20862299</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000814">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>6. <a href="javascript:void(0)">Glutathione S-transferase P</a></strong></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-lg-5">
                      <dl><dt className="col-md-5 col-sm-6">Kind</dt>
                        <dd className="col-md-7 col-sm-6">Protein</dd><dt className="col-md-5 col-sm-6">Organism</dt>
                        <dd className="col-md-7 col-sm-6">Humans</dd><dt className="col-md-5 col-sm-6">Pharmacological action</dt>
                        <dd className="col-md-7 col-sm-6">
                          <div className="badge badge badge-unknown">Unknown</div>
                        </dd><dt className="col-md-5 col-sm-6">Curator comments</dt>
                        <dd className="col-md-7 col-sm-6">Possible target</dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">S-nitrosoglutathione binding</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Conjugation of reduced glutathione to a wide number of exogenous and endogenous hydrophobic electrophiles. Regulates negatively CDK5 activity via p25/p35 translocation to prevent neurodegeneration.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">GSTP1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P09211">P09211</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Glutathione S-transferase P</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">23355.625 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A20166">Boerma JS, Vermeulen NP, Commandeur JN: Application of CYP102A1M11H as a tool for the generation of protein adducts of reactive drug metabolites. Chem Res Toxicol. 2011 Aug 15;24(8):1263-74. doi: 10.1021/tx2001515. Epub 2011 Jun 16. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/21639118">PubMed:21639118</a>] </li>
                      <li id="reference-A176381">Arakawa S, Maejima T, Fujimoto K, Yamaguchi T, Yagi M, Sugiura T, Atsumi R, Yamazoe Y: Resistance to acetaminophen-induced hepatotoxicity in glutathione S-transferase Mu 1-null mice. J Toxicol Sci. 2012;37(3):595-605. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/22687999">PubMed:22687999</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container enzymes">
            <h3 id="enzymes">Enzymes</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0003533">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>1. <a href="javascript:void(0)">Cytochrome P450 2E1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Metabolizes several precarcinogens, drugs, and solvents to reactive metabolites. Inactivates a number of drugs and xenobiotics and also bioactivates many xenobiotic substrates to their hepatotoxic ...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP2E1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P05181">P05181</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2E1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">56848.42 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A15225">Dong H, Haining RL, Thummel KE, Rettie AE, Nelson SD: Involvement of human cytochrome P450 2D6 in the bioactivation of acetaminophen. Drug Metab Dispos. 2000 Dec;28(12):1397-400. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11095574">PubMed:11095574</a>] </li>
                      <li id="reference-A176372">Manyike PT, Kharasch ED, Kalhorn TF, Slattery JT: Contribution of CYP2E1 and CYP3A to acetaminophen reactive metabolite formation. Clin Pharmacol Ther. 2000 Mar;67(3):275-82. doi: 10.1067/mcp.2000.104736. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/10741631">PubMed:10741631</a>] </li>
                      <li id="reference-F4139">Acetaminophen FDA label [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/004/139/original/Acetaminophen_Injection_FDA_label.pdf?1553717049">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002433">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Cytochrome P450 1A2</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Oxidoreductase activity, acting on paired donors, with incorporation or reduction of molecular oxygen, reduced flavin or flavoprotein as one donor, and incorporation of one atom of oxygen</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Cytochromes P450 are a group of heme-thiolate monooxygenases. In liver microsomes, this enzyme is involved in an NADPH-dependent electron transport pathway. It oxidizes a variety of structurally un...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP1A2</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P05177">P05177</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 1A2</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">58293.76 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14760">Raucy JL, Lasker JM, Lieber CS, Black M: Acetaminophen activation by human liver cytochromes P450IIE1 and P450IA2. Arch Biochem Biophys. 1989 Jun;271(2):270-83. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/2729995">PubMed:2729995</a>] </li>
                      <li id="reference-A39037">Patten CJ, Thomas PE, Guy RL, Lee M, Gonzalez FJ, Guengerich FP, Yang CS: Cytochrome P450 enzymes involved in acetaminophen activation by rat and human liver microsomes and their kinetics. Chem Res Toxicol. 1993 Jul-Aug;6(4):511-8. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/8374050">PubMed:8374050</a>] </li>
                      <li id="reference-A39038">Li Y, Wang E, Patten CJ, Chen L, Yang CS: Effects of flavonoids on cytochrome P450-dependent acetaminophen metabolism in rats and human liver microsomes. Drug Metab Dispos. 1994 Jul-Aug;22(4):566-71. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/7956731">PubMed:7956731</a>] </li>
                      <li id="reference-A39039">Tassaneeyakul W, Birkett DJ, Veronese ME, McManus ME, Tukey RH, Quattrochi LC, Gelboin HV, Miners JO: Specificity of substrate and inhibitor probes for human cytochromes P450 1A1 and 1A2. J Pharmacol Exp Ther. 1993 Apr;265(1):401-7. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/8474022">PubMed:8474022</a>] </li>
                      <li id="reference-A35815">Mazaleuskaya LL, Sangkuhl K, Thorn CF, FitzGerald GA, Altman RB, Klein TE: PharmGKB summary: pathways of acetaminophen metabolism at the therapeutic versus toxic doses. Pharmacogenet Genomics. 2015 Aug;25(8):416-26. doi: 10.1097/FPC.0000000000000150. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/26049587">PubMed:26049587</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002638">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>3. <a href="javascript:void(0)">Cytochrome P450 3A4</a></strong></div>
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
                      <li id="reference-A38747">Feierman DE, Melnikov Z, Zhang J: The paradoxical effect of acetaminophen on CYP3A4 activity and content in transfected HepG2 cells. Arch Biochem Biophys. 2002 Feb 1;398(1):109-17. doi: 10.1006/abbi.2001.2677. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11811955">PubMed:11811955</a>] </li>
                      <li id="reference-A176384">Cao L, Kwara A, Greenblatt DJ: Metabolic interactions between acetaminophen (paracetamol) and two flavonoids, luteolin and quercetin, through in-vitro inhibition studies. J Pharm Pharmacol. 2017 Dec;69(12):1762-1772. doi: 10.1111/jphp.12812. Epub 2017 Sep 5. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/28872689">PubMed:28872689</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002363">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>4. <a href="javascript:void(0)">Cytochrome P450 2D6</a></strong></div>
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
                      <li id="reference-A15225">Dong H, Haining RL, Thummel KE, Rettie AE, Nelson SD: Involvement of human cytochrome P450 2D6 in the bioactivation of acetaminophen. Drug Metab Dispos. 2000 Dec;28(12):1397-400. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11095574">PubMed:11095574</a>] </li>
                      <li id="reference-A176384">Cao L, Kwara A, Greenblatt DJ: Metabolic interactions between acetaminophen (paracetamol) and two flavonoids, luteolin and quercetin, through in-vitro inhibition studies. J Pharm Pharmacol. 2017 Dec;69(12):1762-1772. doi: 10.1111/jphp.12812. Epub 2017 Sep 5. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/28872689">PubMed:28872689</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003336">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>5. <a href="javascript:void(0)">Cytochrome P450 2A6</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Exhibits a high coumarin 7-hydroxylase activity. Can act in the hydroxylation of the anti-cancer drugs cyclophosphamide and ifosphamide. Competent in the metabolic activation of aflatoxin B1. Const...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CYP2A6</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P11509">P11509</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2A6</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">56501.005 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A176384">Cao L, Kwara A, Greenblatt DJ: Metabolic interactions between acetaminophen (paracetamol) and two flavonoids, luteolin and quercetin, through in-vitro inhibition studies. J Pharm Pharmacol. 2017 Dec;69(12):1762-1772. doi: 10.1111/jphp.12812. Epub 2017 Sep 5. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/28872689">PubMed:28872689</a>] </li>
                      <li id="reference-A33185">Kalsi SS, Wood DM, Waring WS, Dargan PI: Does cytochrome P450 liver isoenzyme induction increase the risk of liver toxicity after paracetamol overdose? Open Access Emerg Med. 2011 Oct 13;3:69-76. doi: 10.2147/OAEM.S24962. eCollection 2011. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/27147854">PubMed:27147854</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003541">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>6. <a href="javascript:void(0)">UDP-glucuronosyltransferase 1-1</a></strong></div>
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
                      <li id="reference-A18000">Bock KW, Forster A, Gschaidmeier H, Bruck M, Munzel P, Schareck W, Fournel-Gigleux S, Burchell B: Paracetamol glucuronidation by recombinant rat and human phenol UDP-glucuronosyltransferases. Biochem Pharmacol. 1993 May 5;45(9):1809-14. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/8494539">PubMed:8494539</a>] </li>
                      <li id="reference-A176393">Tankanitlert J, Morales NP, Howard TA, Fucharoen P, Ware RE, Fucharoen S, Chantharaksri U: Effects of combined UDP-glucuronosyltransferase (UGT) 1A1*28 and 1A6*2 on paracetamol pharmacokinetics in beta-thalassemia/HbE. Pharmacology. 2007;79(2):97-103. doi: 10.1159/000097908. Epub 2006 Dec 12. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17164591">PubMed:17164591</a>] </li>
                      <li id="reference-A176396">Mehboob H, Tahir IM, Iqbal T, Saleem S, Perveen S, Farooqi A: Effect of UDP-Glucuronosyltransferase (UGT) 1A Polymorphism (rs8330 and rs10929303) on Glucuronidation Status of Acetaminophen. Dose Response. 2017 Sep 11;15(3):1559325817723731. doi: 10.1177/1559325817723731. eCollection 2017 Jul-Sep. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/28932176">PubMed:28932176</a>] </li>
                      <li id="reference-A18001">Court MH, Duan SX, von Moltke LL, Greenblatt DJ, Patten CJ, Miners JO, Mackenzie PI: Interindividual variability in acetaminophen glucuronidation by human liver microsomes: identification of relevant acetaminophen UDP-glucuronosyltransferase isoforms. J Pharmacol Exp Ther. 2001 Dec;299(3):998-1006. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11714888">PubMed:11714888</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004694">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>7. <a href="javascript:void(0)">UDP-glucuronosyltransferase 1-6</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Protein homodimerization activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">UDPGT is of major importance in the conjugation and subsequent elimination of potentially toxic xenobiotics and endogenous compounds. This isoform has specificity for phenols. Isoform 3 lacks trans...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">UGT1A6</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P19224">P19224</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 1-6</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">60750.215 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18001">Court MH, Duan SX, von Moltke LL, Greenblatt DJ, Patten CJ, Miners JO, Mackenzie PI: Interindividual variability in acetaminophen glucuronidation by human liver microsomes: identification of relevant acetaminophen UDP-glucuronosyltransferase isoforms. J Pharmacol Exp Ther. 2001 Dec;299(3):998-1006. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11714888">PubMed:11714888</a>] </li>
                      <li id="reference-A38231">Nagar S, Zalatoris JJ, Blanchard RL: Human UGT1A6 pharmacogenetics: identification of a novel SNP, characterization of allele frequencies and functional analysis of recombinant allozymes in human liver tissue and in cultured cells. Pharmacogenetics. 2004 Aug;14(8):487-99. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/15284531">PubMed:15284531</a>] </li>
                      <li id="reference-A18002">Navarro SL, Chen Y, Li L, Li SS, Chang JL, Schwarz Y, King IB, Potter JD, Bigler J, Lampe JW: UGT1A6 and UGT2B15 polymorphisms and acetaminophen conjugation in response to a randomized, controlled diet of select fruits and vegetables. Drug Metab Dispos. 2011 Sep;39(9):1650-7. doi: 10.1124/dmd.111.039149. Epub 2011 Jun 10. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/21666065">PubMed:21666065</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003538">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>8. <a href="javascript:void(0)">UDP-glucuronosyltransferase 1-9</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">UDPGT is of major importance in the conjugation and subsequent elimination of potentially toxic xenobiotics and endogenous compounds. This isoform has specificity for phenols. Isoform 2 lacks trans...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">UGT1A9</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/O60656">O60656</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 1-9</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">59940.495 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18001">Court MH, Duan SX, von Moltke LL, Greenblatt DJ, Patten CJ, Miners JO, Mackenzie PI: Interindividual variability in acetaminophen glucuronidation by human liver microsomes: identification of relevant acetaminophen UDP-glucuronosyltransferase isoforms. J Pharmacol Exp Ther. 2001 Dec;299(3):998-1006. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11714888">PubMed:11714888</a>] </li>
                      <li id="reference-A38232">Linakis MW, Cook SF, Kumar SS, Liu X, Wilkins DG, Gaedigk R, Gaedigk A, Sherwin CMT, van den Anker JN: Polymorphic Expression of UGT1A9 is Associated with Variable Acetaminophen Glucuronidation in Neonates: A Population Pharmacokinetic and Pharmacogenetic Study. Clin Pharmacokinet. 2018 Apr 13. pii: 10.1007/s40262-018-0634-9. doi: 10.1007/s40262-018-0634-9. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/29654492">PubMed:29654492</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004696">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>9. <a href="javascript:void(0)">UDP-glucuronosyltransferase 2B15</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">UDPGTs are of major importance in the conjugation and subsequent elimination of potentially toxic xenobiotics and endogenous compounds. This isozyme displays activity toward several classes of xeno...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">UGT2B15</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P54855">P54855</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 2B15</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">61035.815 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18002">Navarro SL, Chen Y, Li L, Li SS, Chang JL, Schwarz Y, King IB, Potter JD, Bigler J, Lampe JW: UGT1A6 and UGT2B15 polymorphisms and acetaminophen conjugation in response to a randomized, controlled diet of select fruits and vegetables. Drug Metab Dispos. 2011 Sep;39(9):1650-7. doi: 10.1124/dmd.111.039149. Epub 2011 Jun 10. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/21666065">PubMed:21666065</a>] </li>
                      <li id="reference-A36242">Mutlib AE, Goosen TC, Bauman JN, Williams JA, Kulkarni S, Kostrubsky S: Kinetics of acetaminophen glucuronidation by UDP-glucuronosyltransferases 1A1, 1A6, 1A9 and 2B15. Potential implications in acetaminophen-induced hepatotoxicity. Chem Res Toxicol. 2006 May;19(5):701-9. doi: 10.1021/tx050317i. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/16696573">PubMed:16696573</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000927">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>10. <a href="javascript:void(0)">Sulfotransferase 1A1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Sulfotransferase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Sulfotransferase that utilizes 3'-phospho-5'-adenylyl sulfate (PAPS) as sulfonate donor to catalyze the sulfate conjugation of catecholamines, phenolic drugs and neurotransmitters. Has also estroge...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SULT1A1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P50225">P50225</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Sulfotransferase 1A1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">34165.13 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A469">Adjei AA, Gaedigk A, Simon SD, Weinshilboum RM, Leeder JS: Interindividual variability in acetaminophen sulfation by human fetal liver: implications for pharmacogenetic investigations of drug-induced birth defects. Birth Defects Res A Clin Mol Teratol. 2008 Mar;82(3):155-65. doi: 10.1002/bdra.20535. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/18232020">PubMed:18232020</a>] </li>
                      <li id="reference-A176402">Yamamoto A, Liu MY, Kurogi K, Sakakibara Y, Saeki Y, Suiko M, Liu MC: Sulphation of acetaminophen by the human cytosolic sulfotransferases: a systematic analysis. J Biochem. 2015 Dec;158(6):497-504. doi: 10.1093/jb/mvv062. Epub 2015 Jun 11. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/26067475">PubMed:26067475</a>] </li>
                      <li id="reference-A176408">Cohen IV, Cirulli ET, Mitchell MW, Jonsson TJ, Yu J, Shah N, Spector TD, Guo L, Venter JC, Telenti A: Acetaminophen (Paracetamol) Use Modifies the Sulfation of Sex Hormones. EBioMedicine. 2018 Feb;28:316-323. doi: 10.1016/j.ebiom.2018.01.033. Epub 2018 Feb 15. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/29398597">PubMed:29398597</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004767">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>11. <a href="javascript:void(0)">Sulfotransferase 1A3/1A4</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Sulfotransferase that utilizes 3'-phospho-5'-adenylyl sulfate (PAPS) as sulfonate donor to catalyze the sulfate conjugation of phenolic monoamines (neurotransmitters such as dopamine, norepinephrine and serotonin) and phenolic and catechol drugs.</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Amine sulfotransferase activity</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SULT1A3</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P0DMM9">P0DMM9</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Sulfotransferase 1A3</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">34195.96 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A469">Adjei AA, Gaedigk A, Simon SD, Weinshilboum RM, Leeder JS: Interindividual variability in acetaminophen sulfation by human fetal liver: implications for pharmacogenetic investigations of drug-induced birth defects. Birth Defects Res A Clin Mol Teratol. 2008 Mar;82(3):155-65. doi: 10.1002/bdra.20535. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/18232020">PubMed:18232020</a>] </li>
                      <li id="reference-A176402">Yamamoto A, Liu MY, Kurogi K, Sakakibara Y, Saeki Y, Suiko M, Liu MC: Sulphation of acetaminophen by the human cytosolic sulfotransferases: a systematic analysis. J Biochem. 2015 Dec;158(6):497-504. doi: 10.1093/jb/mvv062. Epub 2015 Jun 11. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/26067475">PubMed:26067475</a>] </li>
                      <li id="reference-A176405">Bairam AF, Rasool MI, Alherz FA, Abunnaja MS, El Daibani AA, Kurogi K, Liu MC: Effects of human SULT1A3/SULT1A4 genetic polymorphisms on the sulfation of acetaminophen and opioid drugs by the cytosolic sulfotransferase SULT1A3. Arch Biochem Biophys. 2018 Jun 15;648:44-52. doi: 10.1016/j.abb.2018.04.019. Epub 2018 Apr 26. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/29705271">PubMed:29705271</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003607">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>12. <a href="javascript:void(0)">Arylamine N-acetyltransferase 2</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Arylamine n-acetyltransferase activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Participates in the detoxification of a plethora of hydrazine and arylamine drugs. Catalyzes the N- or O-acetylation of various arylamine and heterocyclic amine substrates and is able to bioactivat...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">NAT2</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P11245">P11245</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Arylamine N-acetyltransferase 2</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">33542.235 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18015">Rothen JP, Haefeli WE, Meyer UA, Todesco L, Wenk M: Acetaminophen is an inhibitor of hepatic N-acetyltransferase 2 in vitro and in vivo. Pharmacogenetics. 1998 Dec;8(6):553-9. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/9918139">PubMed:9918139</a>] </li>
                      <li id="reference-A176414">Tahir IM, Iqbal T, Saleem S, Mehboob H, Akhter N, Riaz M: Effect of acetaminophen on sulfamethazine acetylation in male volunteers. Int J Immunopathol Pharmacol. 2016 Mar;29(1):17-22. doi: 10.1177/0394632015593238. Epub 2015 Oct 30. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/26519524">PubMed:26519524</a>] </li>
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
                      <li id="reference-A15871">Wang E, Lew K, Barecki M, Casciano CN, Clement RP, Johnson WW: Quantitative distinctions of active site molecular recognition by P-glycoprotein and cytochrome P450 3A4. Chem Res Toxicol. 2001 Dec;14(12):1596-603. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11743742">PubMed:11743742</a>] </li>
                      <li id="reference-A15852">Faassen F, Vogel G, Spanings H, Vromans H: Caco-2 permeability, P-glycoprotein transport ratios and brain penetration of heterocyclic drugs. Int J Pharm. 2003 Sep 16;263(1-2):113-22. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12954186">PubMed:12954186</a>] </li>
                      <li id="reference-A176321">Novak A, Carpini GD, Ruiz ML, Luquita MG, Rubio MC, Mottino AD, Ghanem CI: Acetaminophen inhibits intestinal p-glycoprotein transport activity. J Pharm Sci. 2013 Oct;102(10):3830-7. doi: 10.1002/jps.23673. Epub 2013 Jul 29. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/23897240">PubMed:23897240</a>] </li>
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
          <p className="bt-2" id="drug-meta">Drug created on June 13, 2005 07:24 / Updated on July 08, 2019 12:21 </p>
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

export default Acetaminophen;
