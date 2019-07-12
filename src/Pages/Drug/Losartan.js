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
        <div id="jumper-tab">
          <div className="jumper-toggle drugbank-icon icon-double-arrow-left">
            <svg className="icon" role="img" title="double-arrow-left">
              <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#double-arrow-left"> </use>
            </svg>
          </div>
        </div>
        <div className="list-group closed" id="jumper">
          <div className="list-group-item jumper-header d-flex justify-content-between align-items-center">Jump to section
            <div className="jumper-toggle drugbank-icon icon-double-arrow-right">
              <svg className="icon" role="img" title="double-arrow-right">
                <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#double-arrow-right"> </use>
              </svg>
            </div>
          </div>
          <a className="list-group-item jumper-link" href="#identification">
            <div className="circle" />Identification</a>
          <a className="list-group-item jumper-link" href="#pharmacology">
            <div className="circle" />Pharmacology</a>
          <a className="list-group-item jumper-link" href="#interactions">
            <div className="circle" />Interactions</a>
          <a className="list-group-item jumper-link" href="#references">
            <div className="circle" />References</a>
          <a className="list-group-item jumper-link" href="#clinical-trials">
            <div className="circle" />Trials</a>
          <a className="list-group-item jumper-link" href="#pharmacoeconomics">
            <div className="circle" />Economics</a>
          <a className="list-group-item jumper-link" href="#properties">
            <div className="circle" />Properties</a>
          <a className="list-group-item jumper-link" href="#spectra">
            <div className="circle" />Spectra</a>
          <a className="list-group-item jumper-link" href="#taxonomy">
            <div className="circle" />Taxonomy</a>
        </div>
        <div className="content-header d-sm-flex align-items-center">
          <h1 className="align-self-center mr-4">Losartan</h1>
          <div className="page-actions justify-content-sm-end mt-2 mt-sm-0">
            <div className="bond-links"><a className="btn bond-link targets" href="#targets">Targets (1)</a><a className="btn bond-link enzymes" href="#enzymes">Enzymes (9)</a><a className="btn bond-link carriers" href="#carriers">Carriers (1)</a><a className="btn bond-link transporters" href="#transporters">Transporters (5)</a></div>
          </div>
        </div>
        <div className="card-content px-md-4 px-sm-2 pb-md-4 pb-sm-2">
          <h2 id="identification" className="section-header">Identification</h2>
          <dl>
            <a target="_blank" id="targeted-ad" className="track-link" href="https://drugbankplus.com/">
              <div className="targeted-ad-box">
                <div className="image-row"><img height={15} src="/assets/logo-pink-bd7264e3b993f48d681445728e394507ac912eb6e426e52c6d3230a78dae4bc6.svg" alt="Logo pink" /></div>
                <div className="lead title">Are you a</div>
                <div className="focus title">new drug developer?</div>
                <div className="subtitle">
                  <div>Contact us to learn more about our customized products and solutions.</div>
                </div>
              </div>
            </a><dt className="col-md-2 col-sm-4">Name</dt>
            <dd className="col-md-10 col-sm-8">Losartan</dd><dt className="col-md-2 col-sm-4">Accession Number</dt>
            <dd className="col-md-10 col-sm-8">DB00678&nbsp; (APRD00052) </dd><dt className="col-md-2 col-sm-4">Type</dt>
            <dd className="col-md-10 col-sm-8">Small Molecule</dd><dt className="col-md-2 col-sm-4">Groups</dt>
            <dd className="col-md-10 col-sm-8">Approved</dd><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Losartan is an angiotensin-receptor blocker (ARB) that may be used alone or with other agents to treat hypertension. Losartan and its longer acting metabolite, E-3174, lower blood pressure by antagonizing the renin-angiotensin-aldosterone system (RAAS); they compete with angiotensin II for binding to the type-1 angiotensin II receptor (AT1) subtype and prevents the blood pressure increasing effects of angiotensin II. Unlike angiotensin-converting enzyme (ACE) inhibitors, ARBs do not have the adverse effect of dry cough. Losartan may be used to treat hypertension, isolated systolic hypertension, left ventricular hypertrophy and diabetic nephropathy. It may also be used as an alternative agent for the treatment of systolic dysfunction, myocardial infarction, coronary artery disease, and heart failure.</p>
            </dd><dt className="col-md-2 col-sm-4">Structure</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="structure">
                <a className="moldbi-vector-thumbnail" href="/structures/DB00678/image.svg"><img src="/structures/DB00678/thumb.svg" alt="Thumb" /></a>
              </div>
              <div className="structure-links">
                <div className="btn-group btn-group-sm" data-no-turbolink>
                  <a data-toggle="modal" className="btn btn-outline-secondary" rel="nofollow" href="#structure-zoom">
                    <div className="drugbank-icon icon-zoom-in">
                      <svg className="icon" role="img" title="zoom-in">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#zoom-in"> </use>
                      </svg>
                    </div>
                  </a><a className="btn btn-outline-secondary" rel="nofollow" href="/structures/small_molecule_drugs/DB00678">3D</a>
                  <div className="btn-group btn-group-sm" id="structure-download">
                    <button aria-expanded="false" aria-haspopup="true" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" id="structure-download" type="button">Download </button>
                    <div aria-labelledby="structure-download" className="dropdown-menu"><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00678.mol">MOL</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00678.sdf">SDF</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00678.sdf?type=3d">3D-SDF</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00678.pdb">PDB</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00678.smiles">SMILES</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00678.inchi">InChI</a></div>
                  </div>
                  <a className="btn btn-outline-secondary" rel="nofollow" href="/structures/search/small_molecule_drugs/structure?database_id=DB00678&search_type=similarity#results">
                    <div className="drugbank-icon icon-chemquery">
                      <svg className="icon" role="img" title="chemquery">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#chemquery"> </use>
                      </svg>
                    </div> Similar Structures</a>
                </div>
                <div className="modal fade" id="structure-zoom">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Structure for Losartan (DB00678)</h4>
                        <button aria-hidden="true" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex justify-content-center"><img src="/structures/DB00678/image.svg" alt="Image" /></div>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-default" data-dismiss="modal" type="button"> Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Synonyms</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list-break">
                <li>(2-butyl-4-chloro-1-{'{'}[2'-(1H-tetrazol-5-yl)biphenyl-4-yl]methyl{'}'}-1H-imidazol-5-yl)methanol</li>
                <li>2-n-butyl-4-chloro-5-hydroxymethyl-1-[(2'-(1H-tetrazol-5-yl)biphenyl-4-yl)methyl]imidazole</li>
                <li>Losartan</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">External IDs <a tabIndex={0} role="button" data-toggle="popover" data-content="Codes and identifiers used by other resources and companies, often used before choosing a marketing name." title id="external-identifiers-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About External Identifiers"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">DUP 89</span><span className="list-separator"> / </span><span className="separated-list-item">HGP-1405</span><span className="list-separator"> / </span><span className="separated-list-item">HGP1405</span><span className="list-separator"> / </span><span className="separated-list-item">MK594</span></span>
              </span>
            </dd><dt className="col-md-2 col-sm-4">Product Ingredients <a tabIndex={0} role="button" data-toggle="popover" data-content="Active ingredients including salts and other forms of exact ingredients used in drug products." title id="product-ingredients-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About Product Ingredients"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8">
              <table className="table table-sm responsive-table" id="drug-salts-table">
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
                    <td><strong><a href="/salts/DBSALT000112">Losartan potassium</a></strong></td>
                    <td><a target="_blank" rel="noopener" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=3ST302B24A">3ST302B24A</a></td>
                    <td>124750-99-8</td>
                    <td>OXCMYAYHXIHQOA-UHFFFAOYSA-N</td>
                  </tr>
                </tbody>
              </table>
            </dd><dt className="col-md-2 col-sm-4">Product Images</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="product-carousel-row" style={{maxWidth: '592px'}}>
                <div className="carousel slide" data-active="true" id="product-carousel">
                  <ol className="carousel-indicators">
                    <li className="active" data-slide-to={0} data-target="#product-carousel" />
                    <li data-slide-to={1} data-target="#product-carousel" />
                    <li data-slide-to={2} data-target="#product-carousel" />
                    <li data-slide-to={3} data-target="#product-carousel" />
                    <li data-slide-to={4} data-target="#product-carousel" />
                    <li data-slide-to={5} data-target="#product-carousel" />
                    <li data-slide-to={6} data-target="#product-carousel" />
                    <li data-slide-to={7} data-target="#product-carousel" />
                    <li data-slide-to={8} data-target="#product-carousel" />
                    <li data-slide-to={9} data-target="#product-carousel" />
                    <li data-slide-to={10} data-target="#product-carousel" />
                    <li data-slide-to={11} data-target="#product-carousel" />
                    <li data-slide-to={12} data-target="#product-carousel" />
                    <li data-slide-to={13} data-target="#product-carousel" />
                    <li data-slide-to={14} data-target="#product-carousel" />
                    <li data-slide-to={15} data-target="#product-carousel" />
                    <li data-slide-to={16} data-target="#product-carousel" />
                    <li data-slide-to={17} data-target="#product-carousel" />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item w-100 active">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/55154-501620180907-15195-3d0psx.jpg?1536292874" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/55154-501620180907-15195-3d0psx.jpg?1536292874" data-description="Losartan Potassium 50 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="img-fluid" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/55154-501620180907-15195-3d0psx.jpg?1536292874" /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00006-0952-54_NLMIMAGE10_C51362FB.jpg?1498433784" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00006-0952-54_NLMIMAGE10_C51362FB.jpg?1498433784" data-description="Losartan Potassium 50 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="img-fluid" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00006-0952-54_NLMIMAGE10_C51362FB.jpg?1498433784" /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-233520180907-15195-32v6cd.jpg?1536293936" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-233520180907-15195-32v6cd.jpg?1536293936" data-description="Losartan Potassium 100 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="img-fluid" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-233520180907-15195-32v6cd.jpg?1536293936" /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-291220180907-15195-ry6v4m.jpg?1536294366" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-291220180907-15195-ry6v4m.jpg?1536294366" data-description="Losartan Potassium 100 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="img-fluid" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-291220180907-15195-ry6v4m.jpg?1536294366" /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-133720180907-15195-10kqq0.jpg?1536294427" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-133720180907-15195-10kqq0.jpg?1536294427" data-description="Losartan Potassium 50 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-133720180907-15195-10kqq0.jpg?1536294427" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0006-095220180810-16125-ho34bp.jpg?1533914891" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0006-095220180810-16125-ho34bp.jpg?1533914891" data-description="Losartan Potassium 50 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0006-095220180810-16125-ho34bp.jpg?1533914891" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0006-096020180810-16125-18fhek0.jpg?1533914893" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0006-096020180810-16125-18fhek0.jpg?1533914893" data-description="Losartan Potassium 100 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0006-096020180810-16125-18fhek0.jpg?1533914893" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00006-0960-54_NLMIMAGE10_C31361AB.jpg?1498433782" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00006-0960-54_NLMIMAGE10_C31361AB.jpg?1498433782" data-description="Losartan Potassium 100 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00006-0960-54_NLMIMAGE10_C31361AB.jpg?1498433782" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-386620180907-15195-ygw4u7.jpg?1536293361" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-386620180907-15195-ygw4u7.jpg?1536293361" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet [Hyzaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-386620180907-15195-ygw4u7.jpg?1536293361" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00006-0747-31_NLMIMAGE10_0A07854C.jpg?1498432629" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00006-0747-31_NLMIMAGE10_0A07854C.jpg?1498432629" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet [Hyzaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00006-0747-31_NLMIMAGE10_0A07854C.jpg?1498432629" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00006-0717-31_NLMIMAGE10_0407824C.jpg?1498432625" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00006-0717-31_NLMIMAGE10_0407824C.jpg?1498432625" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet [Hyzaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00006-0717-31_NLMIMAGE10_0407824C.jpg?1498432625" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0006-071720180810-16125-ggnzt7.jpg?1533914886" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0006-071720180810-16125-ggnzt7.jpg?1533914886" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet [Hyzaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0006-071720180810-16125-ggnzt7.jpg?1533914886" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0006-074720180810-16125-1ksqp3m.jpg?1533914889" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0006-074720180810-16125-1ksqp3m.jpg?1533914889" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet [Hyzaar]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0006-074720180810-16125-1ksqp3m.jpg?1533914889" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7364-98_NLMIMAGE10_28089404.jpg?1498433801" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7364-98_NLMIMAGE10_28089404.jpg?1498433801" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7364-98_NLMIMAGE10_28089404.jpg?1498433801" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-610420180907-15195-akrbti.jpg?1536294249" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-610420180907-15195-akrbti.jpg?1536294249" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-610420180907-15195-akrbti.jpg?1536294249" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-610720180907-15195-11sjfpt.jpg?1536294251" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-610720180907-15195-11sjfpt.jpg?1536294251" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-610720180907-15195-11sjfpt.jpg?1536294251" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/69189-020320180907-15195-kherh7.jpg?1536298719" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/69189-020320180907-15195-kherh7.jpg?1536298719" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/69189-020320180907-15195-kherh7.jpg?1536298719" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/69189-736520180907-15195-1q9m2iv.jpg?1536299203" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/69189-736520180907-15195-1q9m2iv.jpg?1536299203" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/69189-736520180907-15195-1q9m2iv.jpg?1536299203" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/69189-020120180907-15195-18rclse.jpg?1536301919" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/69189-020120180907-15195-18rclse.jpg?1536301919" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/69189-020120180907-15195-18rclse.jpg?1536301919" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/76439-0140-90_NLMIMAGE10_B340D9D6.jpg?1498433786" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/76439-0140-90_NLMIMAGE10_B340D9D6.jpg?1498433786" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/76439-0140-90_NLMIMAGE10_B340D9D6.jpg?1498433786" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/76439-0141-11_NLMIMAGE10_8440C236.jpg?1498433798" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/76439-0141-11_NLMIMAGE10_8440C236.jpg?1498433798" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/76439-0141-11_NLMIMAGE10_8440C236.jpg?1498433798" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68788-738620180907-15195-e0s88w.jpg?1536306208" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68788-738620180907-15195-e0s88w.jpg?1536306208" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68788-738620180907-15195-e0s88w.jpg?1536306208" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68788-633320180907-15195-18awk0p.jpg?1536306222" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68788-633320180907-15195-18awk0p.jpg?1536306222" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68788-633320180907-15195-18awk0p.jpg?1536306222" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/65862-0202-90_NLMIMAGE10_A2445172.jpg?1498433796" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/65862-0202-90_NLMIMAGE10_A2445172.jpg?1498433796" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/65862-0202-90_NLMIMAGE10_A2445172.jpg?1498433796" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68788-930520180907-15195-gci2h1.jpg?1536306241" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68788-930520180907-15195-gci2h1.jpg?1536306241" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68788-930520180907-15195-gci2h1.jpg?1536306241" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/58118-736620180907-15195-ppge8h.jpg?1536306611" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/58118-736620180907-15195-ppge8h.jpg?1536306611" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/58118-736620180907-15195-ppge8h.jpg?1536306611" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/70786-036020180913-8702-5ydoq8.jpg?1536861572" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/70786-036020180913-8702-5ydoq8.jpg?1536861572" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/70786-036020180913-8702-5ydoq8.jpg?1536861572" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/31722-0700-90_NLMIMAGE10_174E0BA0.jpg?1498438550" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/31722-0700-90_NLMIMAGE10_174E0BA0.jpg?1498438550" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/31722-0700-90_NLMIMAGE10_174E0BA0.jpg?1498438550" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68151-018320180913-8702-uqfbh1.jpg?1536863303" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68151-018320180913-8702-uqfbh1.jpg?1536863303" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68151-018320180913-8702-uqfbh1.jpg?1536863303" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-196720180913-8702-1p8s0ir.jpg?1536864396" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-196720180913-8702-1p8s0ir.jpg?1536864396" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-196720180913-8702-1p8s0ir.jpg?1536864396" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7365-56_NLMIMAGE10_AA305552.jpg?1498433789" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7365-56_NLMIMAGE10_AA305552.jpg?1498433789" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7365-56_NLMIMAGE10_AA305552.jpg?1498433789" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0093-736420180913-8702-16af4rw.jpg?1536868459" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0093-736420180913-8702-16af4rw.jpg?1536868459" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0093-736420180913-8702-16af4rw.jpg?1536868459" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0093-736520180913-8702-1opbn7m.jpg?1536868461" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0093-736520180913-8702-1opbn7m.jpg?1536868461" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0093-736520180913-8702-1opbn7m.jpg?1536868461" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7366-56_NLMIMAGE10_B12FD8DE.jpg?1498433793" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7366-56_NLMIMAGE10_B12FD8DE.jpg?1498433793" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7366-56_NLMIMAGE10_B12FD8DE.jpg?1498433793" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68788-736520180907-15195-gj4g8f.jpg?1536306219" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68788-736520180907-15195-gj4g8f.jpg?1536306219" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68788-736520180907-15195-gj4g8f.jpg?1536306219" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68382-0137-10_NLMIMAGE10_2E089704.jpg?1498433803" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68382-0137-10_NLMIMAGE10_2E089704.jpg?1498433803" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68382-0137-10_NLMIMAGE10_2E089704.jpg?1498433803" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/65862-0201-90_NLMIMAGE10_234A1180.jpg?1498438383" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/65862-0201-90_NLMIMAGE10_234A1180.jpg?1498438383" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/65862-0201-90_NLMIMAGE10_234A1180.jpg?1498438383" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/65862-0203-90_NLMIMAGE10_A74453E2.jpg?1498433806" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/65862-0203-90_NLMIMAGE10_A74453E2.jpg?1498433806" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/65862-0203-90_NLMIMAGE10_A74453E2.jpg?1498433806" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-611020180907-15195-qsfsx5.jpg?1536291664" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-611020180907-15195-qsfsx5.jpg?1536291664" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-611020180907-15195-qsfsx5.jpg?1536291664" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-610820180907-15195-lc6v2u.jpg?1536291666" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-610820180907-15195-lc6v2u.jpg?1536291666" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-610820180907-15195-lc6v2u.jpg?1536291666" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-610920180907-15195-fnnlqn.jpg?1536291668" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-610920180907-15195-fnnlqn.jpg?1536291668" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-610920180907-15195-fnnlqn.jpg?1536291668" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68258-604020180111-6664-sy7r5l.jpg?1515724624" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68258-604020180111-6664-sy7r5l.jpg?1515724624" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68258-604020180111-6664-sy7r5l.jpg?1515724624" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-503220180907-15195-fwj8qd.jpg?1536294798" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-503220180907-15195-fwj8qd.jpg?1536294798" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-503220180907-15195-fwj8qd.jpg?1536294798" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68382-0143-16_NLMIMAGE10_34089A34.jpg?1498432713" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68382-0143-16_NLMIMAGE10_34089A34.jpg?1498432713" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68382-0143-16_NLMIMAGE10_34089A34.jpg?1498432713" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7367-56_NLMIMAGE10_C02FE05F.jpg?1498432703" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7367-56_NLMIMAGE10_C02FE05F.jpg?1498432703" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7367-56_NLMIMAGE10_C02FE05F.jpg?1498432703" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/69189-736720180907-15195-1hy6fmk.jpg?1536298543" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/69189-736720180907-15195-1hy6fmk.jpg?1536298543" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/69189-736720180907-15195-1hy6fmk.jpg?1536298543" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54569-622320180907-15195-eoezqs.jpg?1536299682" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54569-622320180907-15195-eoezqs.jpg?1536299682" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54569-622320180907-15195-eoezqs.jpg?1536299682" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/13668-0118-90_NLMIMAGE10_7640BB75.jpg?1498432695" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/13668-0118-90_NLMIMAGE10_7640BB75.jpg?1498432695" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/13668-0118-90_NLMIMAGE10_7640BB75.jpg?1498432695" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50436-666520180907-15195-1rzn3iq.jpg?1536302432" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50436-666520180907-15195-1rzn3iq.jpg?1536302432" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50436-666520180907-15195-1rzn3iq.jpg?1536302432" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50436-666720180907-15195-aq2e5o.jpg?1536305730" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50436-666720180907-15195-aq2e5o.jpg?1536305730" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50436-666720180907-15195-aq2e5o.jpg?1536305730" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-187220180913-8702-1ctchvb.jpg?1536864312" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-187220180913-8702-1ctchvb.jpg?1536864312" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-187220180913-8702-1ctchvb.jpg?1536864312" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/16714-0225-04_NLMIMAGE10_7C453E79.jpg?1498432706" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/16714-0225-04_NLMIMAGE10_7C453E79.jpg?1498432706" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/16714-0225-04_NLMIMAGE10_7C453E79.jpg?1498432706" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68382-0142-16_NLMIMAGE10_310898B4.jpg?1498432711" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68382-0142-16_NLMIMAGE10_310898B4.jpg?1498432711" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68382-0142-16_NLMIMAGE10_310898B4.jpg?1498432711" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/16714-0224-01_NLMIMAGE10_B616DB56.jpg?1498432700" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/16714-0224-01_NLMIMAGE10_B616DB56.jpg?1498432700" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/16714-0224-01_NLMIMAGE10_B616DB56.jpg?1498432700" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68180-0216-09_NLMIMAGE10_37089BE4.jpg?1498432716" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68180-0216-09_NLMIMAGE10_37089BE4.jpg?1498432716" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68180-0216-09_NLMIMAGE10_37089BE4.jpg?1498432716" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/13668-0116-30_NLMIMAGE10_08468454.jpg?1498432693" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/13668-0116-30_NLMIMAGE10_08468454.jpg?1498432693" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/13668-0116-30_NLMIMAGE10_08468454.jpg?1498432693" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-117620180907-15195-hsjj69.jpg?1536306092" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-117620180907-15195-hsjj69.jpg?1536306092" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-117620180907-15195-hsjj69.jpg?1536306092" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-121020180907-15195-6c8o9u.jpg?1536306094" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-121020180907-15195-6c8o9u.jpg?1536306094" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-121020180907-15195-6c8o9u.jpg?1536306094" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0093-736720180907-15195-18j4tf.jpg?1536302029" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0093-736720180907-15195-18j4tf.jpg?1536302029" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0093-736720180907-15195-18j4tf.jpg?1536302029" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7369-56_NLMIMAGE10_B916DCA6.jpg?1498432709" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7369-56_NLMIMAGE10_B916DCA6.jpg?1498432709" data-description="Hydrochlorothiazide 12.5 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7369-56_NLMIMAGE10_B916DCA6.jpg?1498432709" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7368-56_NLMIMAGE10_A42FD24E.jpg?1498432698" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7368-56_NLMIMAGE10_A42FD24E.jpg?1498432698" data-description="Hydrochlorothiazide 25 MG / Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7368-56_NLMIMAGE10_A42FD24E.jpg?1498432698" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/53808-107220180907-15195-1d6qy2d.jpg?1536297882" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/53808-107220180907-15195-1d6qy2d.jpg?1536297882" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/53808-107220180907-15195-1d6qy2d.jpg?1536297882" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68382-0136-10_NLMIMAGE10_2B0895B4.jpg?1498433808" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68382-0136-10_NLMIMAGE10_2B0895B4.jpg?1498433808" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68382-0136-10_NLMIMAGE10_2B0895B4.jpg?1498433808" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-205420180907-15195-1b3y8vj.jpg?1536299932" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-205420180907-15195-1b3y8vj.jpg?1536299932" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-205420180907-15195-1b3y8vj.jpg?1536299932" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-438320180907-15195-1lns9jr.jpg?1536302839" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-438320180907-15195-1lns9jr.jpg?1536302839" data-description="Losartan Potassium 100 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-438320180907-15195-1lns9jr.jpg?1536302839" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-423820180907-15195-1aun624.jpg?1536303362" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-423820180907-15195-1aun624.jpg?1536303362" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-423820180907-15195-1aun624.jpg?1536303362" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68788-644520180907-15195-w6lz8z.jpg?1536306231" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68788-644520180907-15195-w6lz8z.jpg?1536306231" data-description="Losartan Potassium 50 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68788-644520180907-15195-w6lz8z.jpg?1536306231" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68382-0135-16_NLMIMAGE10_CB16E5D7.jpg?1498433811" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68382-0135-16_NLMIMAGE10_CB16E5D7.jpg?1498433811" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68382-0135-16_NLMIMAGE10_CB16E5D7.jpg?1498433811" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/70786-013520180913-8702-60ul3a.jpg?1536861602" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/70786-013520180913-8702-60ul3a.jpg?1536861602" data-description="Losartan Potassium 25 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/70786-013520180913-8702-60ul3a.jpg?1536861602" src /></a>
                    </div>
                  </div><a className="carousel-control-prev" data-slide="prev" href="#product-carousel" role="button"><span aria-hidden="true" className="carousel-control-prev-icon" /><span className="sr-only">Previous</span></a><a className="carousel-control-next" data-slide="next" href="#product-carousel" role="button"><span aria-hidden="true" className="carousel-control-next-icon" /><span className="sr-only">Next</span></a></div>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Prescription Products</dt>
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
                    <table className="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline collapsed" data-source="/drugs/DB00678/products.json?group=approved" data-total={47} id="approved-products" style={{width: '100%'}} role="grid" aria-describedby="approved-products_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '61.2px'}} aria-label="Name: activate to sort column ascending">Name</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '69.2px'}} aria-label="Dosage: activate to sort column ascending">Dosage</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '70.2px'}} aria-label="Strength: activate to sort column ascending">Strength</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '46.2px'}} aria-label="Route: activate to sort column ascending">Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '95.2px'}} aria-label="Labeller: activate to sort column ascending">Labeller</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '84.2px'}} aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                          <th className="drug-image sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '0px', display: 'none'}} aria-label=": activate to sort column ascending" />
                        </tr>
                        <tr className="unlock-row" role="row">
                          <th className="no-sort" colSpan={9} rowSpan={1}>
                            <div className="locked-link" data-field="approved-products" data-target="#locked-modal" data-toggle="modal">
                              <div className="drugbank-icon icon-lock">
                                <svg className="icon" role="img" title="lock">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                </svg>
                              </div> Unlock Additional Data</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Act Losartan</strong></td>
                          <td>Tablet</td>
                          <td>50 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2012-01-25</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Act Losartan</strong></td>
                          <td>Tablet</td>
                          <td>25 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2012-01-25</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Act Losartan</strong></td>
                          <td>Tablet</td>
                          <td>100 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2012-01-25</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cozaar</strong></td>
                          <td>Tablet, film coated</td>
                          <td>50 mg/1</td>
                          <td>Oral</td>
                          <td>Med Pharma Co., Ltd.</td>
                          <td>1995-04-14</td>
                          <td>2012-07-11</td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Cozaar</strong></td>
                          <td>Tablet, film coated</td>
                          <td>100 mg/1</td>
                          <td>Oral</td>
                          <td>Remedy Repack</td>
                          <td>2009-10-14</td>
                          <td>2010-10-15</td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cozaar</strong></td>
                          <td>Tablet, film coated</td>
                          <td>100 mg/1</td>
                          <td>Oral</td>
                          <td>Physicians Total Care, Inc.</td>
                          <td>2003-08-06</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td style={{display: 'none'}}>
                            <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-233520180907-15195-32v6cd.jpg?1536293936" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-233520180907-15195-32v6cd.jpg?1536293936" data-description="Losartan Potassium 100 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="package-thumb" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/tiny/54868-233520180907-15195-32v6cd.jpg?1536293936" alt="54868 233520180907 15195 32v6cd" /></a>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Cozaar</strong></td>
                          <td>Tablet, film coated</td>
                          <td>25 mg/1</td>
                          <td>Oral</td>
                          <td>Med Pharma Co., Ltd.</td>
                          <td>1995-04-14</td>
                          <td>2012-07-11</td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cozaar</strong></td>
                          <td>Tablet, film coated</td>
                          <td>100 mg/1</td>
                          <td>Oral</td>
                          <td>PD-Rx Pharmaceuticals, Inc.</td>
                          <td>1995-04-14</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td style={{display: 'none'}}>
                            <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00006-0960-54_NLMIMAGE10_C31361AB.jpg?1498433782" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00006-0960-54_NLMIMAGE10_C31361AB.jpg?1498433782" data-description="Losartan Potassium 100 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="package-thumb" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/tiny/00006-0960-54_NLMIMAGE10_C31361AB.jpg?1498433782" alt="00006 0960 54 nlmimage10 c31361ab" /></a>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Cozaar</strong></td>
                          <td>Tablet</td>
                          <td>25 mg/1</td>
                          <td>Oral</td>
                          <td>Remedy Repack</td>
                          <td>2011-04-07</td>
                          <td>2011-04-08</td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cozaar</strong></td>
                          <td>Tablet, film coated</td>
                          <td>50 mg/1</td>
                          <td>Oral</td>
                          <td>Physicians Total Care, Inc.</td>
                          <td>1996-04-01</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td style={{display: 'none'}}>
                            <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00006-0952-54_NLMIMAGE10_C51362FB.jpg?1498433784" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00006-0952-54_NLMIMAGE10_C51362FB.jpg?1498433784" data-description="Losartan Potassium 50 MG Oral Tablet [Cozaar]" href="#modal-package"><img className="package-thumb" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/tiny/00006-0952-54_NLMIMAGE10_C51362FB.jpg?1498433784" alt="00006 0952 54 nlmimage10 c51362fb" /></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div id="approved-products_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="approved-products_info" role="status" aria-live="polite">Showing 1 to 10 of 47 entries</div>
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
                        <li className="paginate_button page-item next" id="approved-products_next"><a href="#" aria-controls="approved-products" data-dt-idx={6} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="locked-fields-holder" data-for="#approved-products">
                <div className="locked-fields closed" data-collapsed="collapsed">
                  <div className="locked-tab">
                    <div className="drugbank-icon icon-lock">
                      <svg className="icon" role="img" title="lock">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                      </svg>
                    </div><span className="tab-label">Additional Data Available</span>
                    <div className="drugbank-icon icon-arrow-left">
                      <svg className="icon" role="img" title="arrow-left">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-left"> </use>
                      </svg>
                    </div>
                    <div className="drugbank-icon icon-arrow-right">
                      <svg className="icon" role="img" title="arrow-right">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use>
                      </svg>
                    </div>
                  </div>
                  <ul className="locked-accordion">
                    <div className="flex-content">
                      <li className="closed">
                        <div className="flex-content">
                          <div className="locked-header">Application Number
                            <div className="drugbank-icon icon-plus">
                              <svg className="icon" role="img" title="plus">
                                <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                              </svg>
                            </div>
                          </div>
                          <div className="locked-content">
                            <div className="locked-info">
                              <div className="close-tab drugbank-icon icon-exit">
                                <svg className="icon" role="img" title="exit">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                </svg>
                              </div>
                              <div className="drugbank-icon icon-lock">
                                <svg className="icon" role="img" title="lock">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                </svg>
                              </div>
                              <div className="locked-panel-header">Application Number</div>
                              <p>A unique ID assigned by the FDA when a product is submitted for approval by the labeller.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/approved-products-application-number" href="https://drugbankplus.com/data">Learn more</a></div>
                          </div>
                        </div>
                      </li>
                      <li className="closed">
                        <div className="flex-content">
                          <div className="locked-header">Product Code
                            <div className="drugbank-icon icon-plus">
                              <svg className="icon" role="img" title="plus">
                                <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                              </svg>
                            </div>
                          </div>
                          <div className="locked-content">
                            <div className="locked-info">
                              <div className="close-tab drugbank-icon icon-exit">
                                <svg className="icon" role="img" title="exit">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                </svg>
                              </div>
                              <div className="drugbank-icon icon-lock">
                                <svg className="icon" role="img" title="lock">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                </svg>
                              </div>
                              <div className="locked-panel-header">Product Code</div>
                              <p>A governmentally-recognized ID which uniquely identifies the product within its regulatory market.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/approved-products-product-code" href="https://drugbankplus.com/data">Learn more</a></div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Generic Prescription Products</dt>
            <dd className="col-md-10 col-sm-8 has-locked-content">
              <div id="generic-products_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="generic-products_length">
                      <label>Show
                        <select name="generic-products_length" aria-controls="generic-products" className="form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="generic-products_filter" className="dataTables_filter">
                      <label>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="generic-products" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB00678/products.json?group=generic" data-total={458} id="generic-products" style={{width: '100%'}} role="grid" aria-describedby="generic-products_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '48.2px'}} aria-label="Name: activate to sort column ascending">Name</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '56.2px'}} aria-label="Dosage: activate to sort column ascending">Dosage</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '70.2px'}} aria-label="Strength: activate to sort column ascending">Strength</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '46.2px'}} aria-label="Route: activate to sort column ascending">Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '74.2px'}} aria-label="Labeller: activate to sort column ascending">Labeller</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '91.2px'}} aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '85.2px'}} aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                          <th className="drug-image sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                        </tr>
                        <tr className="unlock-row" role="row">
                          <th className="no-sort" colSpan={9} rowSpan={1}>
                            <div className="locked-link" data-field="generic-products" data-target="#locked-modal" data-toggle="modal">
                              <div className="drugbank-icon icon-lock">
                                <svg className="icon" role="img" title="lock">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                </svg>
                              </div> Unlock Additional Data</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Ag-losartan</strong></td>
                          <td>Tablet</td>
                          <td>25 mg</td>
                          <td>Oral</td>
                          <td>Angita Pharma Inc.</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Ag-losartan</strong></td>
                          <td>Tablet</td>
                          <td>100 mg</td>
                          <td>Oral</td>
                          <td>Angita Pharma Inc.</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Ag-losartan</strong></td>
                          <td>Tablet</td>
                          <td>50 mg</td>
                          <td>Oral</td>
                          <td>Angita Pharma Inc.</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Apo-losartan</strong></td>
                          <td>Tablet</td>
                          <td>25 mg</td>
                          <td>Oral</td>
                          <td>Apotex Corporation</td>
                          <td>2012-04-13</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Apo-losartan</strong></td>
                          <td>Tablet</td>
                          <td>100 mg</td>
                          <td>Oral</td>
                          <td>Apotex Corporation</td>
                          <td>2012-01-25</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Apo-losartan</strong></td>
                          <td>Tablet</td>
                          <td>50 mg</td>
                          <td>Oral</td>
                          <td>Apotex Corporation</td>
                          <td>2012-01-25</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Auro-losartan</strong></td>
                          <td>Tablet</td>
                          <td>100.0 mg</td>
                          <td>Oral</td>
                          <td>Auro Pharma Inc</td>
                          <td>2013-03-26</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Auro-losartan</strong></td>
                          <td>Tablet</td>
                          <td>50.0 mg</td>
                          <td>Oral</td>
                          <td>Auro Pharma Inc</td>
                          <td>2013-03-26</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Auro-losartan</strong></td>
                          <td>Tablet</td>
                          <td>25.0 mg</td>
                          <td>Oral</td>
                          <td>Auro Pharma Inc</td>
                          <td>2013-03-26</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Bio-losartan</strong></td>
                          <td>Tablet</td>
                          <td>100 mg</td>
                          <td>Oral</td>
                          <td>Biomed Pharma</td>
                          <td>2016-06-08</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                    <div id="generic-products_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="generic-products_info" role="status" aria-live="polite">Showing 1 to 10 of 458 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="generic-products_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="generic-products_previous"><a href="#" aria-controls="generic-products" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="generic-products" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="generic-products" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="generic-products" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="generic-products" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="generic-products" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item disabled" id="generic-products_ellipsis"><a href="#" aria-controls="generic-products" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="generic-products" data-dt-idx={7} tabIndex={0} className="page-link">46</a></li>
                        <li className="paginate_button page-item next" id="generic-products_next"><a href="#" aria-controls="generic-products" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="locked-fields-holder" data-for="#generic-products">
                <div className="locked-fields closed" data-collapsed="collapsed">
                  <div className="locked-tab">
                    <div className="drugbank-icon icon-lock">
                      <svg className="icon" role="img" title="lock">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                      </svg>
                    </div><span className="tab-label">Additional Data Available</span>
                    <div className="drugbank-icon icon-arrow-left">
                      <svg className="icon" role="img" title="arrow-left">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-left"> </use>
                      </svg>
                    </div>
                    <div className="drugbank-icon icon-arrow-right">
                      <svg className="icon" role="img" title="arrow-right">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use>
                      </svg>
                    </div>
                  </div>
                  <ul className="locked-accordion">
                    <div className="flex-content">
                      <li className="closed">
                        <div className="flex-content">
                          <div className="locked-header">Application Number
                            <div className="drugbank-icon icon-plus">
                              <svg className="icon" role="img" title="plus">
                                <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                              </svg>
                            </div>
                          </div>
                          <div className="locked-content">
                            <div className="locked-info">
                              <div className="close-tab drugbank-icon icon-exit">
                                <svg className="icon" role="img" title="exit">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                </svg>
                              </div>
                              <div className="drugbank-icon icon-lock">
                                <svg className="icon" role="img" title="lock">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                </svg>
                              </div>
                              <div className="locked-panel-header">Application Number</div>
                              <p>A unique ID assigned by the FDA when a product is submitted for approval by the labeller.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/generic-products-application-number" href="https://drugbankplus.com/data">Learn more</a></div>
                          </div>
                        </div>
                      </li>
                      <li className="closed">
                        <div className="flex-content">
                          <div className="locked-header">Product Code
                            <div className="drugbank-icon icon-plus">
                              <svg className="icon" role="img" title="plus">
                                <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                              </svg>
                            </div>
                          </div>
                          <div className="locked-content">
                            <div className="locked-info">
                              <div className="close-tab drugbank-icon icon-exit">
                                <svg className="icon" role="img" title="exit">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                </svg>
                              </div>
                              <div className="drugbank-icon icon-lock">
                                <svg className="icon" role="img" title="lock">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                </svg>
                              </div>
                              <div className="locked-panel-header">Product Code</div>
                              <p>A governmentally-recognized ID which uniquely identifies the product within its regulatory market.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/generic-products-product-code" href="https://drugbankplus.com/data">Learn more</a></div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Mixture Products</dt>
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
                    <table className="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline collapsed" data-source="/drugs/DB00678/products.json?group=mixtures" data-total={251} style={{width: '100%'}} id="DataTables_Table_1" role="grid" aria-describedby="DataTables_Table_1_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '91.2px'}} aria-label="Name: activate to sort column ascending">Name</th>
                          <th className="no-sort sorting_disabled" rowSpan={1} colSpan={1} style={{width: '149.4px'}} aria-label="Ingredients">Ingredients</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '56.2px'}} aria-label="Dosage: activate to sort column ascending">Dosage</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '46.2px'}} aria-label="Route: activate to sort column ascending">Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '68.2px'}} aria-label="Labeller: activate to sort column ascending">Labeller</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                          <th className="drug-image sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '0px', display: 'none'}} aria-label=": activate to sort column ascending" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Act Losartan/hct</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(100 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(25 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2012-07-03</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Act Losartan/hct</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(100 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(12.5 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2012-07-03</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Act Losartan/hct</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(50 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(12.5 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2012-07-03</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Ag-losartan Hctz</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(100 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(25 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Angita Pharma Inc.</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Ag-losartan Hctz</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(50 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(12.5 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Angita Pharma Inc.</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Apo-losartan/hctz</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(100 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(25 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Apotex Corporation</td>
                          <td>2012-01-25</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Apo-losartan/hctz</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(100 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(12.5 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Apotex Corporation</td>
                          <td>2012-01-25</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Apo-losartan/hctz</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(50 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(12.5 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Apotex Corporation</td>
                          <td>2012-01-25</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Auro-losartan Hct</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(100 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(25 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Auro Pharma Inc</td>
                          <td>2014-04-29</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Auro-losartan Hct</strong></td>
                          <td><a href="/salts/DBSALT000112">Losartan potassium</a> <span className="text-muted">(100 mg)</span> + <a href="/drugs/DB00999">Hydrochlorothiazide</a> <span className="text-muted">(12.5 mg)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Auro Pharma Inc</td>
                          <td>2014-04-29</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                      </tbody>
                    </table>
                    <div id="DataTables_Table_1_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1 to 10 of 251 entries</div>
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
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={7} tabIndex={0} className="page-link">26</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_1_next"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd><dt className="col-md-2 col-sm-4">International/Other Brands</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Lortaan</span></span>
              </span>
            </dd><dt className="col-md-2 col-sm-4">Categories</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="category-columns">
                <ul className="list-unstyled table-list">
                  <li><a href="/categories/DBCAT002171">Agents Acting on the Renin-Angiotensin System</a></li>
                  <li><a href="/categories/DBCAT004043">Agents causing angioedema</a></li>
                  <li><a href="/categories/DBCAT003960">Agents causing hyperkalemia</a></li>
                  <li><a href="/categories/DBCAT003287">Angiotensin 2 Receptor Blocker</a></li>
                  <li><a href="/categories/DBCAT004595">Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                  <li><a href="/categories/DBCAT004593">Angiotensin II receptor blockers (ARBs) and diuretics</a></li>
                  <li><a href="/categories/DBCAT004594">Angiotensin II receptor blockers (ARBs), plain</a></li>
                  <li><a href="/categories/DBCAT000409">Angiotensin II Type 1 Receptor Blockers</a></li>
                  <li><a href="/categories/DBCAT001168">Angiotensin II Type 2 Receptor Blockers</a></li>
                  <li><a href="/categories/DBCAT000408">Angiotensin Receptor Antagonists</a></li>
                  <li><a href="/categories/DBCAT003297">Antiarrhythmic agents</a></li>
                  <li><a href="/categories/DBCAT000410">Antihypertensive Agents</a></li>
                  <li><a href="/categories/DBCAT000418">Benzene Derivatives</a></li>
                  <li><a href="/categories/DBCAT001053">Biphenyl Compounds</a></li>
                  <li><a href="/categories/DBCAT003979">BSEP/ABCB11 Substrates</a></li>
                  <li><a href="/categories/DBCAT000010">Cardiovascular Agents</a></li>
                  <li><a href="/categories/DBCAT000403">Cytochrome P-450 CYP2C19 Inhibitors</a></li>
                  <li><a href="/categories/DBCAT004482">Cytochrome P-450 CYP2C19 inhibitors (unknown strength)</a></li>
                  <li><a href="/categories/DBCAT000868">Cytochrome P-450 CYP2C8 Inhibitors</a></li>
                  <li><a href="/categories/DBCAT002644">Cytochrome P-450 CYP2C8 Inhibitors (moderate)</a></li>
                  <li><a href="/categories/DBCAT002642">Cytochrome P-450 CYP2C8 Substrates</a></li>
                  <li><a href="/categories/DBCAT002634">Cytochrome P-450 CYP2C9 Substrates</a></li>
                  <li><a href="/categories/DBCAT000934">Cytochrome P-450 CYP3A Inhibitors</a></li>
                  <li><a href="/categories/DBCAT003919">Cytochrome P-450 CYP3A Substrates</a></li>
                  <li><a href="/categories/DBCAT003232">Cytochrome P-450 CYP3A4 Inhibitors</a></li>
                  <li><a href="/categories/DBCAT004049">Cytochrome P-450 CYP3A4 Inhibitors (strength unknown)</a></li>
                  <li><a href="/categories/DBCAT002646">Cytochrome P-450 CYP3A4 Substrates</a></li>
                  <li><a href="/categories/DBCAT003973">Cytochrome P-450 CYP3A4 Substrates (strength unknown)</a></li>
                  <li><a href="/categories/DBCAT000394">Cytochrome P-450 Enzyme Inhibitors</a></li>
                  <li><a href="/categories/DBCAT002696">Hypotensive Agents</a></li>
                  <li><a href="/categories/DBCAT000263">Imidazoles</a></li>
                  <li><a href="/categories/DBCAT004041">OAT1/SLC22A6 inhibitors</a></li>
                  <li><a href="/categories/DBCAT002667">P-glycoprotein/ABCB1 Inhibitors</a></li>
                  <li><a href="/categories/DBCAT002668">P-glycoprotein/ABCB1 Substrates</a></li>
                  <li><a href="/categories/DBCAT002691">Potential QTc-Prolonging Agents</a></li>
                  <li><a href="/categories/DBCAT003823">QTc Prolonging Agents</a></li>
                  <li><a href="/categories/DBCAT000407">Tetrazoles</a></li>
                  <li><a href="/categories/DBCAT003871">UGT1A1 Substrates</a></li>
                  <li><a href="/categories/DBCAT004554">UGT1A3 substrates</a></li>
                  <li><a href="/categories/DBCAT004610">UGT2B7 substrates</a></li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">UNII</dt>
            <dd className="col-md-10 col-sm-8"><a target="_blank" rel="noopener" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=JMS50MPO89">JMS50MPO89</a></dd><dt className="col-md-2 col-sm-4">CAS number</dt>
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
                <li><a href="/indications/DBCOND0000983">Diabetic Nephropathies</a></li>
                <li><a href="/indications/DBCOND0027920">Heart Failure</a></li>
                <li><a href="/indications/DBCOND0040789">High Blood Pressure (Hypertension)</a></li>
                <li><a href="/indications/DBCOND0000515">Marfan Syndrome</a></li>
                <li><a href="/indications/DBCOND0085133">Strokes</a></li>
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
            <div className="col-sm-12 locked-section-container">
              <div className="locked-section-flex">
                <div className="locked-section-row locked-link" data-field="adv-cont-bb" data-target="#locked-modal" data-toggle="modal">
                  <div className="drugbank-icon icon-lock">
                    <svg className="icon" role="img" title="lock">
                      <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                    </svg>
                  </div> Unlock Additional Data</div>
                <div className="locked-section-box">
                  <div className="locked-header">
                    <div className="drugbank-icon icon-lock">
                      <svg className="icon" role="img" title="lock">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                      </svg>
                    </div> Additional Data Available</div>
                  <div className="locked-content">
                    <div className="locked-info">
                      <div className="locked-panel-header">Adverse Effects</div>
                      <p>Comprehensive structured data on known drug adverse effects with statistical prevalence. MedDRA and ICD10 ids are provided for adverse effect conditions and symptoms.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/adverse-effects" href="https://drugbankplus.com/data">Learn more</a></div>
                  </div>
                </div>
                <div className="locked-section-box">
                  <div className="locked-header">
                    <div className="drugbank-icon icon-lock">
                      <svg className="icon" role="img" title="lock">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                      </svg>
                    </div> Additional Data Available</div>
                  <div className="locked-content">
                    <div className="locked-info">
                      <div className="locked-panel-header">Contraindications</div>
                      <p>Structured data covering drug contraindications. Each contraindication describes a scenario in which the drug is not to be used. Includes restrictions on co-administration, contraindicated populations, and more.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/contraindications" href="https://drugbankplus.com/data">Learn more</a></div>
                  </div>
                </div>
                <div className="locked-section-box">
                  <div className="locked-header">
                    <div className="drugbank-icon icon-lock">
                      <svg className="icon" role="img" title="lock">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                      </svg>
                    </div> Additional Data Available</div>
                  <div className="locked-content">
                    <div className="locked-info">
                      <div className="locked-panel-header">Blackbox Warnings</div>
                      <p>Structured data representing warnings from the black box section of drug labels. These warnings cover important and dangerous risks, contraindications, or adverse effects.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/blackbox-warnings" href="https://drugbankplus.com/data">Learn more</a></div>
                  </div>
                </div>
              </div>
            </div><dt className="col-md-2 col-sm-4">Absorption</dt>
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
                <li><a href="/reactions/9"><strong>Losartan</strong> <div className="drugbank-icon icon-arrow-right"><svg className="icon" role="img" title="arrow-right"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use></svg></div> E-3179</a>
                  <ul>
                    <li><a href="/reactions/1047">E-3179 <div className="drugbank-icon icon-arrow-right"><svg className="icon" role="img" title="arrow-right"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use></svg></div> E-3174</a></li>
                  </ul>
                </li>
                <li><a href="/reactions/10"><strong>Losartan</strong> <div className="drugbank-icon icon-arrow-right"><svg className="icon" role="img" title="arrow-right"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use></svg></div> Losartan N2-glucuronide</a></li>
                <li><a href="/reactions/2001"><strong>Losartan</strong> <div className="drugbank-icon icon-arrow-right"><svg className="icon" role="img" title="arrow-right"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use></svg></div> E-3174</a></li>
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
                          <tr className="unlock-row" role="row">
                            <th className="no-sort" colSpan={2} rowSpan={1}>
                              <div className="locked-link" data-field="ddi" data-target="#locked-modal" data-toggle="modal">
                                <div className="drugbank-icon icon-lock">
                                  <svg className="icon" role="img" title="lock">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                  </svg>
                                </div> Unlock Additional Data</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB08496">(R)-warfarin</a></td>
                            <td>The serum concentration of (R)-warfarin can be increased when it is combined with Losartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB14055">(S)-Warfarin</a></td>
                            <td>The serum concentration of (S)-Warfarin can be increased when it is combined with Losartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB02032">1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid</a></td>
                            <td>The risk or severity of adverse effects can be increased when Losartan is combined with 1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB04581">1-benzylimidazole</a></td>
                            <td>1-benzylimidazole may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB01467">2,5-Dimethoxy-4-ethylamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylamphetamine may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB13940">2,5-Dimethoxy-4-ethylthioamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylthioamphetamine may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB12629">3,5-diiodothyropropionic acid</a></td>
                            <td>The metabolism of 3,5-diiodothyropropionic acid can be decreased when combined with Losartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB01484">4-Bromo-2,5-dimethoxyamphetamine</a></td>
                            <td>4-Bromo-2,5-dimethoxyamphetamine may decrease the antihypertensive activities of Losartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB03410">4-hydroxycoumarin</a></td>
                            <td>The metabolism of 4-hydroxycoumarin can be decreased when combined with Losartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB01472">4-Methoxyamphetamine</a></td>
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
                          <li className="paginate_button page-item previous disabled" id="drug-interactions_previous"><a href="#" aria-controls="drug-interactions" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                          <li className="paginate_button page-item active"><a href="#" aria-controls="drug-interactions" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                          <li className="paginate_button page-item "><a href="#" aria-controls="drug-interactions" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                          <li className="paginate_button page-item "><a href="#" aria-controls="drug-interactions" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                          <li className="paginate_button page-item "><a href="#" aria-controls="drug-interactions" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                          <li className="paginate_button page-item "><a href="#" aria-controls="drug-interactions" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                          <li className="paginate_button page-item disabled" id="drug-interactions_ellipsis"><a href="#" aria-controls="drug-interactions" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                          <li className="paginate_button page-item "><a href="#" aria-controls="drug-interactions" data-dt-idx={7} tabIndex={0} className="page-link">179</a></li>
                          <li className="paginate_button page-item next" id="drug-interactions_next"><a href="#" aria-controls="drug-interactions" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="locked-fields-holder" data-for="#drug-interactions">
                  <div className="locked-fields closed" data-collapsed="collapsed">
                    <div className="locked-tab">
                      <div className="drugbank-icon icon-lock">
                        <svg className="icon" role="img" title="lock">
                          <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                        </svg>
                      </div><span className="tab-label">Additional Data Available</span>
                      <div className="drugbank-icon icon-arrow-left">
                        <svg className="icon" role="img" title="arrow-left">
                          <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-left"> </use>
                        </svg>
                      </div>
                      <div className="drugbank-icon icon-arrow-right">
                        <svg className="icon" role="img" title="arrow-right">
                          <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use>
                        </svg>
                      </div>
                    </div>
                    <ul className="locked-accordion">
                      <div className="flex-content">
                        <li className="closed">
                          <div className="flex-content">
                            <div className="locked-header">Extended Description
                              <div className="drugbank-icon icon-plus">
                                <svg className="icon" role="img" title="plus">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                                </svg>
                              </div>
                            </div>
                            <div className="locked-content">
                              <div className="locked-info">
                                <div className="close-tab drugbank-icon icon-exit">
                                  <svg className="icon" role="img" title="exit">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                  </svg>
                                </div>
                                <div className="drugbank-icon icon-lock">
                                  <svg className="icon" role="img" title="lock">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                  </svg>
                                </div>
                                <div className="locked-panel-header">Extended Description</div>
                                <p>Extended description of the mechanism of action and particular properties of each drug interaction.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/ddi-extended-description" href="https://drugbankplus.com/data">Learn more</a></div>
                            </div>
                          </div>
                        </li>
                        <li className="closed">
                          <div className="flex-content">
                            <div className="locked-header">Severity
                              <div className="drugbank-icon icon-plus">
                                <svg className="icon" role="img" title="plus">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                                </svg>
                              </div>
                            </div>
                            <div className="locked-content">
                              <div className="locked-info">
                                <div className="close-tab drugbank-icon icon-exit">
                                  <svg className="icon" role="img" title="exit">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                  </svg>
                                </div>
                                <div className="drugbank-icon icon-lock">
                                  <svg className="icon" role="img" title="lock">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                  </svg>
                                </div>
                                <div className="locked-panel-header">Severity</div>
                                <p>A severity rating for each drug interaction, from minor to major.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/ddi-severity" href="https://drugbankplus.com/data">Learn more</a></div>
                            </div>
                          </div>
                        </li>
                        <li className="closed">
                          <div className="flex-content">
                            <div className="locked-header">Evidence Level
                              <div className="drugbank-icon icon-plus">
                                <svg className="icon" role="img" title="plus">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                                </svg>
                              </div>
                            </div>
                            <div className="locked-content">
                              <div className="locked-info">
                                <div className="close-tab drugbank-icon icon-exit">
                                  <svg className="icon" role="img" title="exit">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                  </svg>
                                </div>
                                <div className="drugbank-icon icon-lock">
                                  <svg className="icon" role="img" title="lock">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                  </svg>
                                </div>
                                <div className="locked-panel-header">Evidence Level</div>
                                <p>A rating for the strength of the evidence supporting each drug interaction.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/ddi-evidence-level" href="https://drugbankplus.com/data">Learn more</a></div>
                            </div>
                          </div>
                        </li>
                        <li className="closed">
                          <div className="flex-content">
                            <div className="locked-header">Action
                              <div className="drugbank-icon icon-plus">
                                <svg className="icon" role="img" title="plus">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                                </svg>
                              </div>
                            </div>
                            <div className="locked-content">
                              <div className="locked-info">
                                <div className="close-tab drugbank-icon icon-exit">
                                  <svg className="icon" role="img" title="exit">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                  </svg>
                                </div>
                                <div className="drugbank-icon icon-lock">
                                  <svg className="icon" role="img" title="lock">
                                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                  </svg>
                                </div>
                                <div className="locked-panel-header">Action</div>
                                <p>An effect category for each drug interaction. Know how this interaction affects the subject drug.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/ddi-action" href="https://drugbankplus.com/data">Learn more</a></div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Food Interactions</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>Take without regard to meals. Take at same time each day. Food delays absorption, but does not affect the extent of absorption.</li>
              </ul>
            </dd>
          </dl>
          <h2 id="references" className="section-header">References</h2>
          <dl><dt className="col-md-2 col-sm-4">Synthesis Reference</dt>
            <dd className="col-md-10 col-sm-8"><span className="citations"><p>Gordon C. Campbell, Jr., Anil M. Dwivedi, Dorothy A. Levorse, James A. McCauley, Krishnaswamy S. Raghavan, "Polymorphs of losartan and the process for the preparation of form II of losartan." U.S. Patent US5608075, issued May, 1994.</p>
              </span><a target="_blank" rel="noopener" href="https://www.google.com/?tbm=pts#q=5608075&tbm=pts">US5608075</a></dd><dt className="col-md-2 col-sm-4">General References</dt>
            <dd className="col-md-10 col-sm-8">
              <ol className="cite-this-references">
                <li id="reference-A1030">Dahlof B, Devereux RB, Kjeldsen SE, Julius S, Beevers G, de Faire U, Fyhrquist F, Ibsen H, Kristiansson K, Lederballe-Pedersen O, Lindholm LH, Nieminen MS, Omvik P, Oparil S, Wedel H: Cardiovascular morbidity and mortality in the Losartan Intervention For Endpoint reduction in hypertension study (LIFE): a randomised trial against atenolol. Lancet. 2002 Mar 23;359(9311):995-1003. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/11937178">PubMed:11937178</a>] </li>
                <li id="reference-A1031">Guo ZX, Qiu MC: [Losartan downregulates the expression of transforming growth factor beta type I and type II receptors in kidney of diabetic rat]. Zhonghua Nei Ke Za Zhi. 2003 Jun;42(6):403-8. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/12895325">PubMed:12895325</a>] </li>
                <li id="reference-A1032">Habashi JP, Judge DP, Holm TM, Cohn RD, Loeys BL, Cooper TK, Myers L, Klein EC, Liu G, Calvi C, Podowski M, Neptune ER, Halushka MK, Bedja D, Gabrielson K, Rifkin DB, Carta L, Ramirez F, Huso DL, Dietz HC: Losartan, an AT1 antagonist, prevents aortic aneurysm in a mouse model of Marfan syndrome. Science. 2006 Apr 7;312(5770):117-21. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/16601194">PubMed:16601194</a>] </li>
                <li id="reference-A1033">Sica DA, Gehr TW, Ghosh S: Clinical pharmacokinetics of losartan. Clin Pharmacokinet. 2005;44(8):797-814. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/16029066">PubMed:16029066</a>] </li>
                <li id="reference-T11">Stanfield, Cindy L.;Germann, William J. (2009). Principles of Human Physiology (3rd ed.). Benjamin-Cummings Publishing Company. [<a target="_blank" rel="noopener" href="http://www.google.com/search?tbo=p&tbm=bks&q=978-0321556660">ISBN:978-0321556660</a>] </li>
                <li id="reference-T5">Bader, M. (2004). Renin-angiotensin-aldosterone system. In Encyclopedic reference of molecular pharmacology (pp. 810-814). Berlin: Springer. [<a target="_blank" rel="noopener" href="http://www.google.com/search?tbo=p&tbm=bks&q=9783540298328">ISBN:9783540298328</a>] </li>
              </ol>
            </dd><dt className="col-md-2 col-sm-4">External Links</dt>
            <dd className="col-md-10 col-sm-8">
              <dl><dt className="col-md-4 col-sm-5">Human Metabolome Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.hmdb.ca/metabolites/HMDB0014816">HMDB0014816</a></dd><dt className="col-md-4 col-sm-5">KEGG Drug</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.genome.jp/dbget-bin/www_bget?drug:D08146">D08146</a></dd><dt className="col-md-4 col-sm-5">KEGG Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.genome.jp/dbget-bin/www_bget?cpd:C07072">C07072</a></dd><dt className="col-md-4 col-sm-5">PubChem Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=3961">3961</a></dd><dt className="col-md-4 col-sm-5">PubChem Substance</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?sid=46506538">46506538</a></dd><dt className="col-md-4 col-sm-5">ChemSpider</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.chemspider.com/Chemical-Structure.3824.html">3824</a></dd><dt className="col-md-4 col-sm-5">BindingDB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.bindingdb.org/bind/chemsearch/marvin/MolStructure.jsp?monomerid=82258">82258</a></dd><dt className="col-md-4 col-sm-5">ChEBI</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=6541">6541</a></dd><dt className="col-md-4 col-sm-5">ChEMBL</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.ebi.ac.uk/chembldb/index.php/compound/inspect/CHEMBL191">CHEMBL191</a></dd><dt className="col-md-4 col-sm-5">Therapeutic Targets Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://bidd.nus.edu.sg/group/cjttd/ZFTTDDRUG.asp?ID=DAP000523">DAP000523</a></dd><dt className="col-md-4 col-sm-5">PharmGKB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.pharmgkb.org/drug/PA450268">PA450268</a></dd><dt className="col-md-4 col-sm-5">Guide to Pharmacology</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.guidetopharmacology.org/GRAC/LigandDisplayForward?ligandId=590">GtP Drug Page</a></dd><dt className="col-md-4 col-sm-5">HET</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.ebi.ac.uk/pdbe-srv/pdbechem/chemicalCompound/show/LSN">LSN</a></dd><dt className="col-md-4 col-sm-5">Wikipedia</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://en.wikipedia.org/wiki/Losartan">Losartan</a></dd>
              </dl>
            </dd><dt className="col-md-2 col-sm-4">ATC Codes</dt>
            <dd className="col-md-10 col-sm-8"><a data-no-turbolink="true" href="/atc/C09CA01">C09CA01 — Losartan</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09CA">C09CA — Angiotensin II receptor blockers (ARBs), plain</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09C">C09C — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09DA01">C09DA01 — Losartan and diuretics</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DA">C09DA — Angiotensin II receptor blockers (ARBs) and diuretics</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09DB06">C09DB06 — Losartan and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DB">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">AHFS Codes</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>24:32.08 — Angiotensin Ii Receptor Antagonists</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">PDB Entries</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item"><a target="_blank" rel="noopener" href="http://www.rcsb.org/pdb/explore.do?structureId=5x23">5x23</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener" href="http://www.rcsb.org/pdb/explore.do?structureId=5x24">5x24</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener" href="http://www.rcsb.org/pdb/explore.do?structureId=5xxi">5xxi</a></span></span>
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
                          <td><a href="/indications/DBCOND0032833">Peripheral Arterial Disease (PAD)</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0032833&phase=0&purpose=basic_science&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Diagnostic</td>
                          <td><a href="/indications/DBCOND0030364">Postural Tachycardia Syndrome</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0030364&phase=0&purpose=diagnostic&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="/indications/DBCOND0000983">Diabetic Nephropathies</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0000983&phase=0&purpose=treatment&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="/indications/DBCOND0040789">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0040789&phase=0&purpose=treatment&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Completed</td>
                          <td>Treatment</td>
                          <td><a href="/indications/DBCOND0051876">Sickle Cell Disorders</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0051876&phase=0&purpose=treatment&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Not Yet Recruiting</td>
                          <td>Other</td>
                          <td><a href="/indications/DBCOND0040212">Cystic Fibrosis (CF)</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0040212&phase=0&purpose=other&status=not_yet_recruiting">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Not Yet Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="/indications/DBCOND0074969">Blood Pressures</a> <span>/</span> <a href="/indications/DBCOND0040789">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0074969%2CDBCOND0040789&phase=0&purpose=treatment&status=not_yet_recruiting">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Terminated</td>
                          <td>Treatment</td>
                          <td><a href="/indications/DBCOND0087260">Malignant Neoplasm of Pancreas</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0087260&phase=0&purpose=treatment&status=terminated">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="/indications/DBCOND0028122">Healthy Volunteers</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0028122&phase=1&status=completed">11</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="/indications/DBCOND0028223">Kidney Diseases</a></td>
                          <td><a href="/drugs/DB00678/clinical_trials?conditions=DBCOND0028223&phase=1&status=completed">1</a></td>
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
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item disabled" id="DataTables_Table_0_ellipsis"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={7} tabIndex={0} className="page-link">20</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
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
                  <li>Merck research laboratories div merck co inc</li>
                  <li>Teva pharmaceuticals usa inc</li>
                  <li>Merck &amp; Co., Inc.</li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Packagers</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="packager-columns">
                <ul className="list-unstyled table-list">
                  <li>AQ Pharmaceuticals Inc.</li>
                  <li>A-S Medication Solutions LLC</li>
                  <li>Bristol-Myers Squibb Co.</li>
                  <li>Cardinal Health</li>
                  <li>Dispensing Solutions</li>
                  <li>Ipca Laboratories Ltd.</li>
                  <li>Kaiser Foundation Hospital</li>
                  <li>Lake Erie Medical and Surgical Supply</li>
                  <li>Merck &amp; Co.</li>
                  <li>Mylan</li>
                  <li>Neuman Distributors Inc.</li>
                  <li>PD-Rx Pharmaceuticals Inc.</li>
                  <li>Physicians Total Care Inc.</li>
                  <li>Prepak Systems Inc.</li>
                  <li>Remedy Repack</li>
                  <li>Roxane Labs</li>
                  <li>Sandhills Packaging Inc.</li>
                  <li>Sandoz</li>
                  <li>Southwood Pharmaceuticals</li>
                  <li>Stat Rx Usa</li>
                  <li>Teva Pharmaceutical Industries Ltd.</li>
                  <li>Torrent Pharmaceuticals</li>
                  <li>Vangard Labs Inc.</li>
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
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Unit description: activate to sort column ascending" style={{width: '547.203px'}}>Unit description</th>
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Cost: activate to sort column ascending" style={{width: '95.2031px'}}>Cost</th>
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Unit: activate to sort column ascending" style={{width: '75.2031px'}}>Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td>Losartan Potassium 90 50 mg tablet Bottle</td>
                          <td>211.78USD </td>
                          <td>bottle</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Losartan Potassium-HCTZ 30 50-12.5 mg tablet Bottle</td>
                          <td>78.05USD </td>
                          <td>bottle</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Hyzaar 100-25 mg tablet</td>
                          <td>3.91USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Hyzaar 100-12.5 mg tablet</td>
                          <td>3.87USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Hyzaar 100-12.5 tablet</td>
                          <td>3.61USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Hyzaar 100-25 tablet</td>
                          <td>3.61USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Losartan Potassium-HCTZ 100-12.5 mg tablet</td>
                          <td>3.54USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Losartan Potassium-HCTZ 100-25 mg tablet</td>
                          <td>3.54USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Cozaar 100 mg tablet</td>
                          <td>3.41USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Losartan potassium 100 mg tablet</td>
                          <td>3.14USD </td>
                          <td>tablet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="prices_info" role="status" aria-live="polite">Showing 1 to 10 of 19 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="prices_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="prices_previous"><a href="#" aria-controls="prices" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="prices" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="prices" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item next" id="prices_next"><a href="#" aria-controls="prices" data-dt-idx={3} tabIndex={0} className="page-link">›</a></li>
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
                        <tr className="unlock-row" role="row">
                          <th className="no-sort" colSpan={5} rowSpan={1}>
                            <div className="locked-link" data-field="patents" data-target="#locked-modal" data-toggle="modal">
                              <div className="drugbank-icon icon-lock">
                                <svg className="icon" role="img" title="lock">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                </svg>
                              </div> Unlock Additional Data</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US5210079">US5210079</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>1993-05-11</td>
                          <td>2010-11-11</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US5608075">US5608075</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>1997-03-04</td>
                          <td>2009-03-04</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/CA2085584">CA2085584</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2003-02-11</td>
                          <td>2011-06-07</td>
                          <td className="country"><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/CA1334092">CA1334092</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>1995-01-24</td>
                          <td>2012-01-24</td>
                          <td className="country"><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="patents_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="patents_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="patents_previous"><a href="#" aria-controls="patents" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="patents" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item next disabled" id="patents_next"><a href="#" aria-controls="patents" data-dt-idx={2} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="locked-fields-holder" data-for="#patents">
                <div className="locked-fields closed" data-collapsed="collapsed">
                  <div className="locked-tab condensed">
                    <div className="drugbank-icon icon-lock">
                      <svg className="icon" role="img" title="lock">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                      </svg>
                    </div><span className="tab-label">Additional Data Available</span>
                    <div className="drugbank-icon icon-arrow-left">
                      <svg className="icon" role="img" title="arrow-left">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-left"> </use>
                      </svg>
                    </div>
                    <div className="drugbank-icon icon-arrow-right">
                      <svg className="icon" role="img" title="arrow-right">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use>
                      </svg>
                    </div>
                  </div>
                  <ul className="locked-accordion">
                    <div className="flex-content">
                      <li className="closed">
                        <div className="flex-content">
                          <div className="locked-header">Filed On
                            <div className="drugbank-icon icon-plus">
                              <svg className="icon" role="img" title="plus">
                                <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#plus"> </use>
                              </svg>
                            </div>
                          </div>
                          <div className="locked-content">
                            <div className="locked-info">
                              <div className="close-tab drugbank-icon icon-exit">
                                <svg className="icon" role="img" title="exit">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#exit"> </use>
                                </svg>
                              </div>
                              <div className="drugbank-icon icon-lock">
                                <svg className="icon" role="img" title="lock">
                                  <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#lock"> </use>
                                </svg>
                              </div>
                              <div className="locked-panel-header">Filed On</div>
                              <p>The date on which a patent was filed with the relevant government.</p><a className="btn btn-sm btn-pink track-link" target="_blank" data-link-id="locked/patents-filed-on" href="https://drugbankplus.com/data">Learn more</a></div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </ul>
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
                    <td><a target="_blank" rel="noopener" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>4.5</td>
                    <td><a target="_blank" rel="noopener" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>5.08</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#logp_logd">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>logS</td>
                    <td>-5</td>
                    <td><a target="_blank" rel="noopener" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
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
              <div className="alert alert-warning clearfix admetsar-alert"><span className="glyphicon glyphicon-info-sign"> </span> ADMET data is predicted using <a href="http://lmmd.ecust.edu.cn:8000">admetSAR</a>, a free tool for evaluating chemical ADMET properties. (<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/23092397">23092397</a>) </div>
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
                    <th><a target="_blank" rel="noopener" href="http://splash.fiehnlab.ucdavis.edu/">Splash Key</a></th>
                  </tr>
                </thead>
                <tbody data-no-turbolink>
                  <tr>
                    <td><a href="/spectra/c_ms/18299">Predicted GC-MS Spectrum - GC-MS</a></td>
                    <td>Predicted GC-MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/98370">Predicted MS/MS Spectrum - 10V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/98371">Predicted MS/MS Spectrum - 20V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/98372">Predicted MS/MS Spectrum - 40V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/163278">Predicted MS/MS Spectrum - 10V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/163279">Predicted MS/MS Spectrum - 20V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/163280">Predicted MS/MS Spectrum - 40V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436212">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-00di-0000900000-657db16bb4bfe9184114">splash10-00di-0000900000-657db16bb4bfe9184114</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436213">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-056r-0900000000-43bb8508cd1dbc71bcee">splash10-056r-0900000000-43bb8508cd1dbc71bcee</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436214">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-55368087829d113fdb7b">splash10-004i-0900000000-55368087829d113fdb7b</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436215">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-af470646c547613f82a0">splash10-004i-0900000000-af470646c547613f82a0</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436216">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-746dcf7a43a3f8839c1d">splash10-004i-0900000000-746dcf7a43a3f8839c1d</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436217">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-0bee80f7ccbc4b68eee0">splash10-004i-0900000000-0bee80f7ccbc4b68eee0</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436218">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-d845ae166a10faff242a">splash10-004i-0900000000-d845ae166a10faff242a</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436219">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-2900000000-d39a309c02e1aaa956b0">splash10-004i-2900000000-d39a309c02e1aaa956b0</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/436220">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-7900000000-d27d10ab008deb157e7a">splash10-004i-7900000000-d27d10ab008deb157e7a</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440572">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-00fr-0900700000-fef78a7f52d4aa515bb4">splash10-00fr-0900700000-fef78a7f52d4aa515bb4</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440627">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-00fr-0900600000-c62f0db44e17f79e0c70">splash10-00fr-0900600000-c62f0db44e17f79e0c70</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443382">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0034900000-22ba49ec64d374c8965e">splash10-0a4i-0034900000-22ba49ec64d374c8965e</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443383">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0191000000-8ff1b5a21f6ef4a462cd">splash10-0a4i-0191000000-8ff1b5a21f6ef4a462cd</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443384">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0590000000-9841ff7f881c3e9c11b9">splash10-0a4i-0590000000-9841ff7f881c3e9c11b9</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443385">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a59-0960000000-a24e287a018dae01dd0d">splash10-0a59-0960000000-a24e287a018dae01dd0d</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443386">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a5c-0930000000-ff3e675bd445225bf04e">splash10-0a5c-0930000000-ff3e675bd445225bf04e</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443387">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0pxu-0920000000-9adf4aef59fc1545fea6">splash10-0pxu-0920000000-9adf4aef59fc1545fea6</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443388">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0v00-1900000000-3591888cf5831cbe3d11">splash10-0v00-1900000000-3591888cf5831cbe3d11</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443389">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0wmi-2900000000-ab9304c8cebc201d0178">splash10-0wmi-2900000000-ab9304c8cebc201d0178</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/443390">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0j70-5900000000-efa87b7770206ac0ff3e">splash10-0j70-5900000000-efa87b7770206ac0ff3e</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/452300">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0491300000-f4b08850a154cfc2117c">splash10-0a4i-0491300000-f4b08850a154cfc2117c</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/452402">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0591300000-32a922edf20b3eb76950">splash10-0a4i-0591300000-32a922edf20b3eb76950</a></td>
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
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item">imidazoles, biphenylyltetrazole (<a target="_blank" rel="noopener" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:6541">CHEBI:6541</a>) </span></span>
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
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/22727371">22727371</a></span></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>IC 50 (nM)</td>
                                <td>16.2</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/22309912">22309912</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/22727371">22727371</a></span></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>IC 50 (nM)</td>
                                <td>5.62</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/22889560">22889560</a></span></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>IC 50 (nM)</td>
                                <td>6</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/22889560">22889560</a></span></span>
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
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P30556">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a>
                  <button className="btn btn-sm btn-drugbank-secondary" data-target="#BE0000062-binding-properties" data-toggle="modal" type="button">
                    <div className="drugbank-icon icon-details">
                      <svg className="icon" role="img" title="details">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#details"> </use>
                      </svg>
                    </div> <span className="full-binding-label">Binding Properties</span></button><strong>1. <a href="/polypeptides/P30556">Type-1 angiotensin II receptor</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P30556">P30556</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Type-1 angiotensin II receptor</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">41060.53 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A9">Chen X, Ji ZL, Chen YZ: TTD: Therapeutic Target Database. Nucleic Acids Res. 2002 Jan 1;30(1):412-5. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/11752352">PubMed:11752352</a>] </li>
                      <li id="reference-A5402">Sardo MA, Castaldo M, Cinquegrani M, Bonaiuto M, Fontana L, Campo S, Campo GM, Altavilla D, Saitta A: Effects of AT1 receptor antagonist losartan on sICAM-1 and TNF-alpha levels in uncomplicated hypertensive patients. Angiology. 2004 Mar-Apr;55(2):195-203. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/15026875">PubMed:15026875</a>] </li>
                      <li id="reference-A5403">Dickstein K, Timmermans P, Segal R: Losartan: a selective angiotensin II type 1 (AT1) receptor antagonist for the treatment of heart failure. Expert Opin Investig Drugs. 1998 Nov;7(11):1897-914. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/15991937">PubMed:15991937</a>] </li>
                      <li id="reference-A5404">Anand-Srivastava MB, Palaparti A: Angiotensin-II-induced enhanced expression of Gi proteins is attenuated by losartan in A10 vascular smooth muscle cells: role of AT1 receptors. Can J Physiol Pharmacol. 2003 Feb;81(2):150-8. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/12710529">PubMed:12710529</a>] </li>
                      <li id="reference-A5405">Rocha I, Bras-Rosario L, Amparo-Barros M, Silva-Carvalho L: Angiotensin AT1 receptor antagonist losartan and the defence reaction in the anaesthetised rat. Effect on the carotid chemoreflex. Exp Physiol. 2003 May;88(3):309-14. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/12719755">PubMed:12719755</a>] </li>
                      <li id="reference-A5406">Guan J, Cheng DY, Chen XJ, Zhang Y, Wang H, Su QL: [The effects of losartan on pulmonary arterial collagen and AT1 in chronic hypoxic rats]. Sichuan Da Xue Xue Bao Yi Xue Ban. 2004 Nov;35(6):774-7. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/15573751">PubMed:15573751</a>] </li>
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
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P11712">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>1. <a href="/polypeptides/P11712">Cytochrome P450 2C9</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P11712">P11712</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2C9</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">55627.365 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14874">Song JC, White CM: Pharmacologic, pharmacokinetic, and therapeutic differences among angiotensin II receptor antagonists. Pharmacotherapy. 2000 Feb;20(2):130-9. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/10678291">PubMed:10678291</a>] </li>
                      <li id="reference-A1033">Sica DA, Gehr TW, Ghosh S: Clinical pharmacokinetics of losartan. Clin Pharmacokinet. 2005;44(8):797-814. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/16029066">PubMed:16029066</a>] </li>
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                      <li id="reference-A14875">Yasar U, Forslund-Bergengren C, Tybring G, Dorado P, Llerena A, Sjoqvist F, Eliasson E, Dahl ML: Pharmacokinetics of losartan and its metabolite E-3174 in relation to the CYP2C9 genotype. Clin Pharmacol Ther. 2002 Jan;71(1):89-98. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/11823761">PubMed:11823761</a>] </li>
                      <li id="reference-L162">Drug Interactions: Cytochrome P450 Drug Interaction Table [<a target="_blank" href="http://medicine.iupui.edu/clinpharm/ddis/table.asp">Link</a>] </li>
                      <li id="reference-F1878">FDA label Losartan [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/001/878/original/FDA_label_losa.pdf?1539708399">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002638">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P08684">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>2. <a href="/polypeptides/P08684">Cytochrome P450 3A4</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P08684">P08684</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 3A4</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">57342.67 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14874">Song JC, White CM: Pharmacologic, pharmacokinetic, and therapeutic differences among angiotensin II receptor antagonists. Pharmacotherapy. 2000 Feb;20(2):130-9. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/10678291">PubMed:10678291</a>] </li>
                      <li id="reference-A1033">Sica DA, Gehr TW, Ghosh S: Clinical pharmacokinetics of losartan. Clin Pharmacokinet. 2005;44(8):797-814. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/16029066">PubMed:16029066</a>] </li>
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                      <li id="reference-A14710">Preissner S, Kroll K, Dunkel M, Senger C, Goldsobel G, Kuzman D, Guenther S, Winnenburg R, Schroeder M, Preissner R: SuperCYP: a comprehensive database on Cytochrome P450 enzymes including a tool for analysis of CYP-drug interactions. Nucleic Acids Res. 2010 Jan;38(Database issue):D237-43. doi: 10.1093/nar/gkp970. Epub 2009 Nov 24. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19934256">PubMed:19934256</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002887">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P10632">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>3. <a href="/polypeptides/P10632">Cytochrome P450 2C8</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P10632">P10632</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2C8</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">55824.275 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14710">Preissner S, Kroll K, Dunkel M, Senger C, Goldsobel G, Kuzman D, Guenther S, Winnenburg R, Schroeder M, Preissner R: SuperCYP: a comprehensive database on Cytochrome P450 enzymes including a tool for analysis of CYP-drug interactions. Nucleic Acids Res. 2010 Jan;38(Database issue):D237-43. doi: 10.1093/nar/gkp970. Epub 2009 Nov 24. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19934256">PubMed:19934256</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003536">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P33261">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>4. <a href="/polypeptides/P33261">Cytochrome P450 2C19</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P33261">P33261</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Cytochrome P450 2C19</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">55930.545 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A14710">Preissner S, Kroll K, Dunkel M, Senger C, Goldsobel G, Kuzman D, Guenther S, Winnenburg R, Schroeder M, Preissner R: SuperCYP: a comprehensive database on Cytochrome P450 enzymes including a tool for analysis of CYP-drug interactions. Nucleic Acids Res. 2010 Jan;38(Database issue):D237-43. doi: 10.1093/nar/gkp970. Epub 2009 Nov 24. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19934256">PubMed:19934256</a>] </li>
                      <li id="reference-A38745">Taavitsainen P, Kiukaanniemi K, Pelkonen O: In vitro inhibition screening of human hepatic P450 enzymes by five angiotensin-II receptor antagonists. Eur J Clin Pharmacol. 2000 May;56(2):135-40. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/10877007">PubMed:10877007</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003541">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P22309">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>5. <a href="/polypeptides/P22309">UDP-glucuronosyltransferase 1-1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P22309">P22309</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 1-1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">59590.91 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003677">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P35503">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>6. <a href="/polypeptides/P35503">UDP-glucuronosyltransferase 1-3</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P35503">P35503</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 1-3</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">60337.835 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003678">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/Q9HAW8">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>7. <a href="/polypeptides/Q9HAW8">UDP-glucuronosyltransferase 1-10</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/Q9HAW8">Q9HAW8</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 1-10</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">59809.075 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003679">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P16662">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>8. <a href="/polypeptides/P16662">UDP-glucuronosyltransferase 2B7</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P16662">P16662</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 2B7</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">60694.12 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003680">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/O75795">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>9. <a href="/polypeptides/O75795">UDP-glucuronosyltransferase 2B17</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/O75795">O75795</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">UDP-glucuronosyltransferase 2B17</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">61094.915 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A415">Zhou SF, Zhou ZW, Yang LP, Cai JP: Substrates, inducers, inhibitors and structure-activity relationships of human Cytochrome P450 2C9 and implications in drug development. Curr Med Chem. 2009;16(27):3480-675. Epub 2009 Sep 1. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19515014">PubMed:19515014</a>] </li>
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
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P02768">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>1. <a href="/polypeptides/P02768">Serum albumin</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P02768">P02768</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
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
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/P08183">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>1. <a href="/polypeptides/P08183">Multidrug resistance protein 1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/P08183">P08183</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Multidrug resistance protein 1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">141477.255 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16151">Takara K, Kakumoto M, Tanigawara Y, Funakoshi J, Sakaeda T, Okumura K: Interaction of digoxin with antihypertensive drugs via MDR1. Life Sci. 2002 Feb 15;70(13):1491-500. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/11895100">PubMed:11895100</a>] </li>
                      <li id="reference-A15854">Borgnia MJ, Eytan GD, Assaraf YG: Competition of hydrophobic peptides, cytotoxic drugs, and chemosensitizers on a common P-glycoprotein pharmacophore as revealed by its ATPase activity. J Biol Chem. 1996 Feb 9;271(6):3163-71. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/8621716">PubMed:8621716</a>] </li>
                      <li id="reference-A16158">Soldner A, Benet LZ, Mutschler E, Christians U: Active transport of the angiotensin-II antagonist losartan and its main metabolite EXP 3174 across MDCK-MDR1 and caco-2 cell monolayers. Br J Pharmacol. 2000 Mar;129(6):1235-43. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/10725273">PubMed:10725273</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0001066">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/Q4U2R8">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>2. <a href="/polypeptides/Q4U2R8">Solute carrier family 22 member 6</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/Q4U2R8">Q4U2R8</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier family 22 member 6</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">61815.78 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16277">Race JE, Grassl SM, Williams WJ, Holtzman EJ: Molecular cloning and characterization of two novel human renal organic anion transporters (hOAT1 and hOAT3). Biochem Biophys Res Commun. 1999 Feb 16;255(2):508-14. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/10049739">PubMed:10049739</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004782">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/Q96S37">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>3. <a href="/polypeptides/Q96S37">Solute carrier family 22 member 12</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/Q96S37">Q96S37</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier family 22 member 12</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">59629.57 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18110">Lipkowitz MS: Regulation of uric acid excretion by the kidney. Curr Rheumatol Rep. 2012 Apr;14(2):179-88. doi: 10.1007/s11926-012-0240-z. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/22359229">PubMed:22359229</a>] </li>
                      <li id="reference-A18111">Burnier M, Roch-Ramel F, Brunner HR: Renal effects of angiotensin II receptor blockade in normotensive subjects. Kidney Int. 1996 Jun;49(6):1787-90. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/8743498">PubMed:8743498</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0004783">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/Q9NRM0">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>4. <a href="/polypeptides/Q9NRM0">Solute carrier family 2, facilitated glucose transporter member 9</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/Q9NRM0">Q9NRM0</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier family 2, facilitated glucose transporter member 9</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">58701.205 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A18110">Lipkowitz MS: Regulation of uric acid excretion by the kidney. Curr Rheumatol Rep. 2012 Apr;14(2):179-88. doi: 10.1007/s11926-012-0240-z. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/22359229">PubMed:22359229</a>] </li>
                      <li id="reference-A18111">Burnier M, Roch-Ramel F, Brunner HR: Renal effects of angiotensin II receptor blockade in normotensive subjects. Kidney Int. 1996 Jun;49(6):1787-90. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/8743498">PubMed:8743498</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000703">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/O95342">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>5. <a href="/polypeptides/O95342">Bile salt export pump</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/O95342">O95342</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Bile salt export pump</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">146405.83 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A33345">Pedersen JM, Matsson P, Bergstrom CA, Hoogstraate J, Noren A, LeCluyse EL, Artursson P: Early identification of clinically relevant drug interactions with the human bile salt export pump (BSEP/ABCB11). Toxicol Sci. 2013 Dec;136(2):328-43. doi: 10.1093/toxsci/kft197. Epub 2013 Sep 6. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/24014644">PubMed:24014644</a>] </li>
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
