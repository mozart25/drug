import React from 'react';
import './Main.scss';
import Navigation from '../Components/Navigation/Navigation' ;
import Search from '../Components/Searchbar/Search' ;

class Main extends React.Component {

  render () {
    return(
      <div>
        <header className="header-bg">
          <Navigation />
          // <Search />
        </header>
        <main role="main" className="main-result">
          <div className="content-container">
            <div id="jumper-tab">
              <div class="jumper-toggle drugbank-icon icon-double-arrow-left">
                <svg class="icon" role="img" title="double-arrow-left">
                  <use> </use>
                </svg>
              </div>
            </div>
            <div class="content-header d-sm-flex align-items-center">
              <h1 class="align-self-center mr-4">Ketamine</h1>
              <div class="page-actions justify-content-sm-end mt-2 mt-sm-0">
                <div class="bond-links">
                  <a class="btn bond-link targets" href="#targets">Targets (14)</a>
                  <a class="btn bond-link enzymes" href="#enzymes">Enzymes (5)</a>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h2 id="identification" class="section-header">Identification</h2>
              <dl>
                <dt className="col-md-2 col-sm-4"> Name </dt>
                <dd class="col-md-10 col-sm-8">Ketamine</dd>
                <dt class="col-md-2 col-sm-4">Accession Number</dt>
                <dd class="col-md-10 col-sm-8">DB01221&nbsp; (APRD00493) </dd>
                <dt class="col-md-2 col-sm-4">Type</dt>
                <dd class="col-md-10 col-sm-8">Small Molecule</dd>
                <dt class="col-md-2 col-sm-4">Groups</dt>
                <dd class="col-md-10 col-sm-8">Approved, Vet approved</dd>
                <dt class="col-md-2 col-sm-4">Description</dt>
                <dd class="col-md-10 col-sm-8">
                  <p>Ketamine is an NMDA receptor antagonist with a potent anesthetic effect.
                    <sup class="text-reference-group">
                      <a class="reference-popover-link" data-content="Ivani G, Vercellino C, Tonetti F: Ketamine: a new look to an old drug. Minerva Anestesiol. 2003 May;69(5):468-71. (PubMed ID 12768186)" href="#reference-A31869" data-original-title="" title="">6</a>
                    </sup> It was developed in 1963 as a replacement for phencyclidine (PCP) by Calvin Stevens at Parke Davis Laboratories. It started being used for veterinary purposes in Belgium and in 1964 was proven that compared to PCP, it produced minor hallucinogenic effects and shorter psychotomimetic effects. It was FDA approved in 1970, and from there, it has been used as an anesthetic for children or patients undergoing minor surgeries but mainly for veterinary purposes.
                    <sup class="text-reference-group">
                      <a class="reference-popover-link" data-content="Ketamine " href="#reference-L1332" data-original-title="" title="">14</a>
                    </sup>
                  </p>
                </dd>
                <dt class="col-md-2 col-sm-4">External IDs</dt>
                <dd class="col-md-10 col-sm-8">
                  <span class="separated-list-container row">
                    <span class="separated-list col-sm-6">
                      <span class="separated-list-item">100477-72-3
                      </span>
                      <span class="list-separator"> / </span>
                      <span class="separated-list-item">NSC-70151</span>
                    </span>
                  </span>
                </dd>
                <dt class="col-md-2 col-sm-4">Product Ingredients</dt>
                <dd class="col-md-10 col-sm-8">
                  <table class="table table-sm responsive-table" id="drug-salts-table">
                    <thead>
                      <tr>
                        <th>Ingredient</th>
                        <th>UNII</th>
                        <th>CAS</th>
                        <th>InChI Key</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>
                            <a href="/salts/DBSALT000396">Ketamine hydrochloride</a>
                          </strong>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=O18YUO0I83">O18YUO0I83</a>
                        </td>
                        <td>1867-66-9</td>
                        <td>VCMGMSHEPQENPE-UHFFFAOYSA-N</td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
                <dt class="col-md-2 col-sm-4">Prescription Products</dt>
                <dd class="col-md-10 col-sm-8 has-locked-content">
                  <div id="approved-products_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div class="dataTables_length" id="approved-products_length">
                          <label>Show
                            <select name="approved-products_length" aria-controls="approved-products" class="form-control form-control-sm">
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select> entries
                          </label>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div id="approved-products_filter" class="dataTables_filter">
                          <label>
                            <input type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="approved-products" />
                          </label>
                          </div>
                        </div>
                      </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <table class="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline collapsed" data-source="/drugs/DB01221/products.json?group=approved" data-total="16" id="approved-products"  role="grid" aria-describedby="approved-products_info">
                          <thead>
                            <tr role="row">
                              <th class="sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1"  aria-label="Name: activate to sort column ascending">Name</th>
                              <th class="sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1"  aria-label="Dosage: activate to sort column ascending">Dosage</th>
                              <th class="sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1" aria-label="Strength: activate to sort column ascending">Strength</th>
                              <th class="sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1" aria-label="Route: activate to sort column ascending">Route</th>
                              <th class="sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1" aria-label="Labeller: activate to sort column ascending">Labeller</th>
                              <th class="sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1"  aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                              <th class="sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1"  aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                              <th class="sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1"  aria-label=": activate to sort column ascending"></th>
                              <th class="drug-image sorting" tabindex="0" aria-controls="approved-products" rowspan="1" colspan="1"  aria-label=": activate to sort column ascending"></th>
                            </tr>
                          </thead>
                        <tbody>
                          <tr role="row" class="odd">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Injection</td><td>50 mg/1mL</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>Par Pharmaceutical, Inc.</td>
                            <td>2007-10-01</td>
                            <td><span class="not-available">Not applicable</span></td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">US</span>
                                  <img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us"/>
                              </span>
                            </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="even">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Solution</td>
                            <td>50 mg</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>Erfa Canada 2012 Inc</td><td>1972-12-31</td>
                            <td><span class="not-available">Not applicable</span></td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">Canada</span>
                                <img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada"/></span>
                            </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="odd">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Injection</td><td>10 mg/1mL</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>Par Pharmaceutical, Inc.</td>
                            <td>2007-10-01</td><td><span class="not-available">Not applicable</span></td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">US</span>
                                  <img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us"/></span>
                            </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="even">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Injection</td><td>100 mg/1mL</td><td>Intramuscular; Intravenous</td>
                            <td>Monarch Pharmaceuticals, Inc.</td><td>1970-02-19</td>
                            <td>2007-10-01</td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">US</span>
                                  <img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us"/>
                              </span>
                            </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="odd">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Solution</td>
                            <td>10 mg</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>Erfa Canada 2012 Inc</td><td>1972-12-31</td>
                            <td><span class="not-available">Not applicable</span></td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">Canada</span>
                                  <img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada"/>
                                </span>
                            </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="even">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Injection</td><td>10 mg/1mL</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>General Injectables &amp; Vaccines, Inc</td>
                            <td>2012-10-17</td><td><span class="not-available">Not applicable</span></td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">US</span>
                                  <img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us"/>
                              </span>
                            </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="odd">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Injection</td><td>50 mg/1mL</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>Monarch Pharmaceuticals, Inc.</td>
                            <td>1970-02-19</td><td>2007-10-01</td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">US</span>
                                  <img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us"/>
                              </span>
                            </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="even">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Injection</td>
                            <td>100 mg/1mL</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>Par Pharmaceutical, Inc.</td>
                            <td>2007-10-01</td>
                            <td>
                              <span class="not-available">Not applicable</span>
                            </td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">US</span>
                                  <img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us"/>
                                </span>
                            </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="odd">
                            <td tabindex="0"><strong>Ketalar</strong></td>
                            <td>Injection</td>
                            <td>10 mg/1mL</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>Monarch Pharmaceuticals, Inc.</td>
                            <td>1970-02-19</td>
                            <td>2007-10-01</td>
                              <td>
                                <span class="country">
                                  <span hidden="hidden">US</span>
                                    <img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us"/>
                                </span>
                              </td>
                            <td></td>
                          </tr>
                          <tr role="row" class="even">
                            <td tabindex="0"><strong>Ketamine Hydrochloride Injection Sdz</strong></td>
                            <td>Solution</td>
                            <td>50 mg</td>
                            <td>Intramuscular; Intravenous</td>
                            <td>Sandoz Canada Incorporated</td>
                            <td><span class="not-available">Not applicable</span>
                            </td><td><span class="not-available">Not applicable</span></td>
                            <td>
                              <span class="country">
                                <span hidden="hidden">Canada</span>
                                  <img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada"/>
                                </span>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    <div id="approved-products_processing" class="dataTables_processing card">Processing...</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="approved-products_info" role="status" aria-live="polite">Showing 1 to 10 of 16 entries</div>
                  </div>
                  <div class="col-sm-12 col-md-7">
                    <div class="dataTables_paginate paging_simple_numbers" id="approved-products_paginate">
                    <ul class="pagination">
                      <li class="paginate_button page-item previous disabled" id="approved-products_previous">
                        <a href="/" aria-controls="approved-products" data-dt-idx="0" tabindex="0" class="page-link">‹</a>
                      </li>
                      <li class="paginate_button page-item active">
                        <a href="/" aria-controls="approved-products" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                      </li>
                      <li class="paginate_button page-item ">
                        <a href="/" aria-controls="approved-products" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                      </li>
                      <li class="paginate_button page-item next" id="approved-products_next">
                        <a href="/" aria-controls="approved-products" data-dt-idx="3" tabindex="0" class="page-link">›</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
                </dd>
              </dl>
            </div>
          </div>
        </main>
      </div>
    )

  }
}

export default Main;
