import React from 'react';
import './Valsartan.scss';
import Navigation from '../../Components/Navigation/Navigation' ;

class Valsartan extends React.Component {
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
          <h1 className="align-self-center mr-4">Valsartan</h1>
          <div className="page-actions justify-content-sm-end mt-2 mt-sm-0">
            <div className="bond-links"><a className="btn bond-link targets" href="#targets">Targets (1)</a><a className="btn bond-link enzymes" href="#enzymes">Enzymes (1)</a><a className="btn bond-link transporters" href="#transporters">Transporters (3)</a></div>
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
            <dd className="col-md-10 col-sm-8">Valsartan</dd><dt className="col-md-2 col-sm-4">Accession Number</dt>
            <dd className="col-md-10 col-sm-8">DB00177&nbsp; (APRD00133) </dd><dt className="col-md-2 col-sm-4">Type</dt>
            <dd className="col-md-10 col-sm-8">Small Molecule</dd><dt className="col-md-2 col-sm-4">Groups</dt>
            <dd className="col-md-10 col-sm-8">Approved, Investigational</dd><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Valsartan is an angiotensin-receptor blocker (ARB) that may be used to manage hypertension and heart failure. Many studies have demonstrated the efficacy of valsartan in reducing blood pressure (BP) in many patient populations (including elderly, women, children, obese patients, patients with diabetes mellitus, patients with chronic kidney disease (CKD), patients at high risk of cardiovascular (CV) disease, African Americans, Hispanic Americans and Asians) and in improving the clinical outcome in cardiovascular (CV) disease and chronic kidney disease (CKD) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Black HR, Bailey J, Zappe D, Samuel R: Valsartan: more than a decade of experience. Drugs. 2009;69(17):2393-414. doi: 10.2165/11319460-000000000-00000. (PubMed ID 19911855)" href="#reference-A174124" data-original-title title>1</a></sup>.</p>
              <p>Valsartan was initially approved in 1996 in Europe for the treatment of hypertension in adults. Shortly after, in 1997, this drug was approved in the United States <sup className="text-reference-group"><a className="reference-popover-link" data-content="Black HR, Bailey J, Zappe D, Samuel R: Valsartan: more than a decade of experience. Drugs. 2009;69(17):2393-414. doi: 10.2165/11319460-000000000-00000. (PubMed ID 19911855)" href="#reference-A174124" data-original-title title>1</a></sup>. This drug is generally well-tolerated with a side-effect profile superior to that of other antihypertensive drugs <sup className="text-reference-group"><a className="reference-popover-link" data-content="McInnes GT: Clinical advantage of valsartan. Cardiology. 1999;91 Suppl 1:14-8. doi: 10.1159/000047283. (PubMed ID 10449890)" href="#reference-A174130" data-original-title title>3</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Chiolero A, Burnier M: Pharmacology of valsartan, an angiotensin II receptor antagonist. Expert Opin Investig Drugs. 1998 Nov;7(11):1915-25. doi: 10.1517/13543784.7.11.1915 . (PubMed ID 15991938)" href="#reference-A174133" data-original-title title>4</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Structure</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="structure">
                <a className="moldbi-vector-thumbnail" href="/structures/DB00177/image.svg"><img src="/structures/DB00177/thumb.svg" alt="Thumb" /></a>
              </div>
              <div className="structure-links">
                <div className="btn-group btn-group-sm" data-no-turbolink>
                  <a data-toggle="modal" className="btn btn-outline-secondary" rel="nofollow" href="#structure-zoom">
                    <div className="drugbank-icon icon-zoom-in">
                      <svg className="icon" role="img" title="zoom-in">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#zoom-in"> </use>
                      </svg>
                    </div>
                  </a><a className="btn btn-outline-secondary" rel="nofollow" href="/structures/small_molecule_drugs/DB00177">3D</a>
                  <div className="btn-group btn-group-sm" id="structure-download">
                    <button aria-expanded="false" aria-haspopup="true" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" id="structure-download" type="button">Download </button>
                    <div aria-labelledby="structure-download" className="dropdown-menu"><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00177.mol">MOL</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00177.sdf">SDF</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00177.sdf?type=3d">3D-SDF</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00177.pdb">PDB</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00177.smiles">SMILES</a><a className="dropdown-item" rel="nofollow" href="/structures/small_molecule_drugs/DB00177.inchi">InChI</a></div>
                  </div>
                  <a className="btn btn-outline-secondary" rel="nofollow" href="/structures/search/small_molecule_drugs/structure?database_id=DB00177&search_type=similarity#results">
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
                        <h4 className="modal-title">Structure for Valsartan (DB00177)</h4>
                        <button aria-hidden="true" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex justify-content-center"><img src="/structures/DB00177/image.svg" alt="Image" /></div>
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
                <li>(S)-N-Valeryl-N-{'{'}[2'-(1H-tetrazol-5-yl)biphenyl-4-yl]-methyl{'}'}-valine</li>
                <li>N-(P-(O-1H-Tetrazol-5-ylphenyl)benzyl)-N-valeryl-L-valine</li>
                <li>N-pentanoyl-N-{'{'}[2'-(1H-tetrazol-5-yl)biphenyl-4-yl]methyl{'}'}-L-valine</li>
                <li>Valsartan</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">External IDs <a tabIndex={0} role="button" data-toggle="popover" data-content="Codes and identifiers used by other resources and companies, often used before choosing a marketing name." title id="external-identifiers-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About External Identifiers"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">CGP 48933</span><span className="list-separator"> / </span><span className="separated-list-item">CGP-48933</span></span>
              </span>
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
                    <li data-slide-to={18} data-target="#product-carousel" />
                    <li data-slide-to={19} data-target="#product-carousel" />
                    <li data-slide-to={20} data-target="#product-carousel" />
                    <li data-slide-to={21} data-target="#product-carousel" />
                    <li data-slide-to={22} data-target="#product-carousel" />
                    <li data-slide-to={23} data-target="#product-carousel" />
                    <li data-slide-to={24} data-target="#product-carousel" />
                    <li data-slide-to={25} data-target="#product-carousel" />
                    <li data-slide-to={26} data-target="#product-carousel" />
                    <li data-slide-to={27} data-target="#product-carousel" />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item w-100 active">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/49884-0574-11_NLMIMAGE10_973ECBA6.jpg?1498428830" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/49884-0574-11_NLMIMAGE10_973ECBA6.jpg?1498428830" data-description="Amlodipine 5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/49884-0574-11_NLMIMAGE10_973ECBA6.jpg?1498428830" /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/49884-0576-11_NLMIMAGE10_BA3F5D3A.jpg?1498428832" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/49884-0576-11_NLMIMAGE10_BA3F5D3A.jpg?1498428832" data-description="Amlodipine 5 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/49884-0576-11_NLMIMAGE10_BA3F5D3A.jpg?1498428832" /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/49884-0577-11_NLMIMAGE10_8E3EC726.jpg?1498428815" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/49884-0577-11_NLMIMAGE10_8E3EC726.jpg?1498428815" data-description="Amlodipine 10 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/49884-0577-11_NLMIMAGE10_8E3EC726.jpg?1498428815" /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00378-1721-93_NLMIMAGE10_DB48ED97.jpg?1498438008" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00378-1721-93_NLMIMAGE10_DB48ED97.jpg?1498438008" data-description="Not available" href="#modal-package"><img className="img-fluid" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00378-1721-93_NLMIMAGE10_DB48ED97.jpg?1498438008" /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00378-1723-93_NLMIMAGE10_E348F1E7.jpg?1498438012" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00378-1723-93_NLMIMAGE10_E348F1E7.jpg?1498438012" data-description="Not available" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00378-1723-93_NLMIMAGE10_E348F1E7.jpg?1498438012" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0378-172420180907-15195-12sbtqm.jpg?1536299503" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0378-172420180907-15195-12sbtqm.jpg?1536299503" data-description="Amlodipine 10 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0378-172420180907-15195-12sbtqm.jpg?1536299503" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7690-56_NLMIMAGE10_8C43C65E.jpg?1498428818" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7690-56_NLMIMAGE10_8C43C65E.jpg?1498428818" data-description="Amlodipine 5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7690-56_NLMIMAGE10_8C43C65E.jpg?1498428818" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7691-56_NLMIMAGE10_9A43CD1E.jpg?1498428821" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7691-56_NLMIMAGE10_9A43CD1E.jpg?1498428821" data-description="Amlodipine 10 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7691-56_NLMIMAGE10_9A43CD1E.jpg?1498428821" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7692-56_NLMIMAGE10_9143C8CE.jpg?1498428824" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7692-56_NLMIMAGE10_9143C8CE.jpg?1498428824" data-description="Amlodipine 5 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7692-56_NLMIMAGE10_9143C8CE.jpg?1498428824" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7693-56_NLMIMAGE10_9F43CF8E.jpg?1498428827" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7693-56_NLMIMAGE10_9F43CF8E.jpg?1498428827" data-description="Amlodipine 10 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7693-56_NLMIMAGE10_9F43CF8E.jpg?1498428827" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7807-56_NLMIMAGE10_8443C20E.jpg?1498428906" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7807-56_NLMIMAGE10_8443C20E.jpg?1498428906" data-description="Amlodipine 5 MG / Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7807-56_NLMIMAGE10_8443C20E.jpg?1498428906" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7037-56_NLMIMAGE10_7643BB4D.jpg?1498428909" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7037-56_NLMIMAGE10_7643BB4D.jpg?1498428909" data-description="Amlodipine 5 MG / Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7037-56_NLMIMAGE10_7643BB4D.jpg?1498428909" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7810-56_NLMIMAGE10_5B43AD9D.jpg?1498437955" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7810-56_NLMIMAGE10_5B43AD9D.jpg?1498437955" data-description="Amlodipine 10 MG / Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7810-56_NLMIMAGE10_5B43AD9D.jpg?1498437955" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7038-56_NLMIMAGE10_B63FDB5E.jpg?1498428903" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7038-56_NLMIMAGE10_B63FDB5E.jpg?1498428903" data-description="Amlodipine 10 MG / Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7038-56_NLMIMAGE10_B63FDB5E.jpg?1498428903" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0360-34_NLMIMAGE10_F015780B.jpg?1498437422" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0360-34_NLMIMAGE10_F015780B.jpg?1498437422" data-description="valsartan 320 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0360-34_NLMIMAGE10_F015780B.jpg?1498437422" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-597720180907-15195-zolsu7.jpg?1536292708" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-597720180907-15195-zolsu7.jpg?1536292708" data-description="valsartan 40 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-597720180907-15195-zolsu7.jpg?1536292708" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-465220180907-15195-1hx8j0i.jpg?1536292710" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-465220180907-15195-1hx8j0i.jpg?1536292710" data-description="valsartan 80 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-465220180907-15195-1hx8j0i.jpg?1536292710" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-464520180907-15195-m5tjbb.jpg?1536292712" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-464520180907-15195-m5tjbb.jpg?1536292712" data-description="valsartan 160 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-464520180907-15195-m5tjbb.jpg?1536292712" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-508220180907-15195-1e5kek5.jpg?1536292714" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-508220180907-15195-1e5kek5.jpg?1536292714" data-description="valsartan 320 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-508220180907-15195-1e5kek5.jpg?1536292714" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-337120180907-15195-1adzklq.jpg?1536295083" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-337120180907-15195-1adzklq.jpg?1536295083" data-description="valsartan 160 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-337120180907-15195-1adzklq.jpg?1536295083" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54569-566620180907-15195-ncwo17.jpg?1536299604" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54569-566620180907-15195-ncwo17.jpg?1536299604" data-description="valsartan 320 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54569-566620180907-15195-ncwo17.jpg?1536299604" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68151-434920180907-15195-p63zov.jpg?1536300993" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68151-434920180907-15195-p63zov.jpg?1536300993" data-description="valsartan 80 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68151-434920180907-15195-p63zov.jpg?1536300993" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0423-15_NLMIMAGE10_9D3B4ECA.jpg?1498437430" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0423-15_NLMIMAGE10_9D3B4ECA.jpg?1498437430" data-description="valsartan 40 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0423-15_NLMIMAGE10_9D3B4ECA.jpg?1498437430" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/55154-342520180913-8702-x30al.jpg?1536864207" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/55154-342520180913-8702-x30al.jpg?1536864207" data-description="valsartan 80 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/55154-342520180913-8702-x30al.jpg?1536864207" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/55154-965720180913-8702-fi8r66.jpg?1536864210" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/55154-965720180913-8702-fi8r66.jpg?1536864210" data-description="valsartan 160 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/55154-965720180913-8702-fi8r66.jpg?1536864210" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/55154-966520180913-8702-1r06qeq.jpg?1536864211" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/55154-966520180913-8702-1r06qeq.jpg?1536864211" data-description="valsartan 320 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/55154-966520180913-8702-1r06qeq.jpg?1536864211" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-288420180913-8702-1aikx5w.jpg?1536866886" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-288420180913-8702-1aikx5w.jpg?1536866886" data-description="valsartan 80 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-288420180913-8702-1aikx5w.jpg?1536866886" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0359-34_NLMIMAGE10_EC15765B.jpg?1498437419" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0359-34_NLMIMAGE10_EC15765B.jpg?1498437419" data-description="valsartan 160 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0359-34_NLMIMAGE10_EC15765B.jpg?1498437419" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0358-34_NLMIMAGE10_EA15750B.jpg?1498437427" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0358-34_NLMIMAGE10_EA15750B.jpg?1498437427" data-description="valsartan 80 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0358-34_NLMIMAGE10_EA15750B.jpg?1498437427" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-042320180814-13942-96z6dy.jpg?1534246777" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-042320180814-13942-96z6dy.jpg?1534246777" data-description="valsartan 40 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-042320180814-13942-96z6dy.jpg?1534246777" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-035820180814-13942-4v58my.jpg?1534246764" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-035820180814-13942-4v58my.jpg?1534246764" data-description="valsartan 80 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-035820180814-13942-4v58my.jpg?1534246764" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-035920180814-13942-1d0eo4i.jpg?1534246767" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-035920180814-13942-1d0eo4i.jpg?1534246767" data-description="valsartan 160 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-035920180814-13942-1d0eo4i.jpg?1534246767" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-036020180814-13942-1iaywx6.jpg?1534246769" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-036020180814-13942-1iaywx6.jpg?1534246769" data-description="valsartan 320 MG Oral Tablet [Diovan]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-036020180814-13942-1iaywx6.jpg?1534246769" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-442520180907-15195-11rs3wo.jpg?1536292697" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-442520180907-15195-11rs3wo.jpg?1536292697" data-description="Hydrochlorothiazide 12.5 MG / valsartan 80 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-442520180907-15195-11rs3wo.jpg?1536292697" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-442820180907-15195-1yuzqzy.jpg?1536292699" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-442820180907-15195-1yuzqzy.jpg?1536292699" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-442820180907-15195-1yuzqzy.jpg?1536292699" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-532320180907-15195-gpk6kn.jpg?1536292701" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-532320180907-15195-gpk6kn.jpg?1536292701" data-description="Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-532320180907-15195-gpk6kn.jpg?1536292701" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-578020180907-15195-1z0uwjj.jpg?1536292704" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-578020180907-15195-1z0uwjj.jpg?1536292704" data-description="Hydrochlorothiazide 12.5 MG / valsartan 320 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-578020180907-15195-1z0uwjj.jpg?1536292704" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-560720180907-15195-9o9r9h.jpg?1536292706" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-560720180907-15195-9o9r9h.jpg?1536292706" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-560720180907-15195-9o9r9h.jpg?1536292706" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68258-605620180907-15195-ud19o0.jpg?1536294218" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68258-605620180907-15195-ud19o0.jpg?1536294218" data-description="Hydrochlorothiazide 12.5 MG / valsartan 80 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68258-605620180907-15195-ud19o0.jpg?1536294218" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68258-605320180907-15195-157dek3.jpg?1536294223" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68258-605320180907-15195-157dek3.jpg?1536294223" data-description="Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68258-605320180907-15195-157dek3.jpg?1536294223" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68258-697220180907-15195-1dgoaqr.jpg?1536294351" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68258-697220180907-15195-1dgoaqr.jpg?1536294351" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68258-697220180907-15195-1dgoaqr.jpg?1536294351" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68258-697320180907-15195-g1xlda.jpg?1536294354" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68258-697320180907-15195-g1xlda.jpg?1536294354" data-description="Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68258-697320180907-15195-g1xlda.jpg?1536294354" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0315-34_NLMIMAGE10_F8157C5B.jpg?1498432551" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0315-34_NLMIMAGE10_F8157C5B.jpg?1498432551" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0315-34_NLMIMAGE10_F8157C5B.jpg?1498432551" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0314-34_NLMIMAGE10_F6157B0B.jpg?1498432559" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0314-34_NLMIMAGE10_F6157B0B.jpg?1498432559" data-description="Hydrochlorothiazide 12.5 MG / valsartan 80 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0314-34_NLMIMAGE10_F6157B0B.jpg?1498432559" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/55154-965920180913-8702-17ywxyn.jpg?1536864189" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/55154-965920180913-8702-17ywxyn.jpg?1536864189" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/55154-965920180913-8702-17ywxyn.jpg?1536864189" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/55154-966420180913-8702-1564zfd.jpg?1536864191" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/55154-966420180913-8702-1564zfd.jpg?1536864191" data-description="Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/55154-966420180913-8702-1564zfd.jpg?1536864191" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/55154-966620180913-8702-s54fd0.jpg?1536864193" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/55154-966620180913-8702-s54fd0.jpg?1536864193" data-description="Hydrochlorothiazide 12.5 MG / valsartan 320 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/55154-966620180913-8702-s54fd0.jpg?1536864193" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/55154-966720180913-8702-14r7f4t.jpg?1536864196" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/55154-966720180913-8702-14r7f4t.jpg?1536864196" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/55154-966720180913-8702-14r7f4t.jpg?1536864196" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-031420180814-13942-64jyd8.jpg?1534246757" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-031420180814-13942-64jyd8.jpg?1534246757" data-description="Hydrochlorothiazide 12.5 MG / valsartan 80 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-031420180814-13942-64jyd8.jpg?1534246757" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-031520180814-13942-1vomqor.jpg?1534246759" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-031520180814-13942-1vomqor.jpg?1534246759" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-031520180814-13942-1vomqor.jpg?1534246759" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0383-34_NLMIMAGE10_0E15870C.jpg?1498432556" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0383-34_NLMIMAGE10_0E15870C.jpg?1498432556" data-description="Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0383-34_NLMIMAGE10_0E15870C.jpg?1498432556" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0471-34_NLMIMAGE10_0A15855C.jpg?1498432562" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0471-34_NLMIMAGE10_0A15855C.jpg?1498432562" data-description="Hydrochlorothiazide 12.5 MG / valsartan 320 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0471-34_NLMIMAGE10_0A15855C.jpg?1498432562" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0472-34_NLMIMAGE10_1015885C.jpg?1498432565" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0472-34_NLMIMAGE10_1015885C.jpg?1498432565" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet [Diovan HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0472-34_NLMIMAGE10_1015885C.jpg?1498432565" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-599720180907-15195-12b7xl4.jpg?1536293088" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-599720180907-15195-12b7xl4.jpg?1536293088" data-description="Amlodipine 5 MG / valsartan 160 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-599720180907-15195-12b7xl4.jpg?1536293088" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0489-15_NLMIMAGE10_1F3B0F98.jpg?1498428930" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0489-15_NLMIMAGE10_1F3B0F98.jpg?1498428930" data-description="Amlodipine 10 MG / valsartan 160 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0489-15_NLMIMAGE10_1F3B0F98.jpg?1498428930" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-599620180907-15195-eqaq3.jpg?1536293091" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-599620180907-15195-eqaq3.jpg?1536293091" data-description="Amlodipine 5 MG / valsartan 320 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-599620180907-15195-eqaq3.jpg?1536293091" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-598320180907-15195-18mjji7.jpg?1536293093" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-598320180907-15195-18mjji7.jpg?1536293093" data-description="Amlodipine 10 MG / valsartan 320 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-598320180907-15195-18mjji7.jpg?1536293093" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0488-15_NLMIMAGE10_233B11A8.jpg?1498428927" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0488-15_NLMIMAGE10_233B11A8.jpg?1498428927" data-description="Amlodipine 5 MG / valsartan 160 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0488-15_NLMIMAGE10_233B11A8.jpg?1498428927" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-048820180814-13942-v2j8rg.jpg?1534246785" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-048820180814-13942-v2j8rg.jpg?1534246785" data-description="Amlodipine 5 MG / valsartan 160 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-048820180814-13942-v2j8rg.jpg?1534246785" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-048920180814-13942-16xts6z.jpg?1534246787" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-048920180814-13942-16xts6z.jpg?1534246787" data-description="Amlodipine 10 MG / valsartan 160 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-048920180814-13942-16xts6z.jpg?1534246787" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0490-15_NLMIMAGE10_0B3B05A8.jpg?1498428921" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0490-15_NLMIMAGE10_0B3B05A8.jpg?1498428921" data-description="Amlodipine 5 MG / valsartan 320 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0490-15_NLMIMAGE10_0B3B05A8.jpg?1498428921" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0491-15_NLMIMAGE10_193B0C98.jpg?1498428924" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0491-15_NLMIMAGE10_193B0C98.jpg?1498428924" data-description="Amlodipine 10 MG / valsartan 320 MG Oral Tablet [Exforge]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0491-15_NLMIMAGE10_193B0C98.jpg?1498428924" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0563-15_NLMIMAGE10_153B0A88.jpg?1498428933" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0563-15_NLMIMAGE10_153B0A88.jpg?1498428933" data-description="Amlodipine 10 MG / Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet [Exforge HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0563-15_NLMIMAGE10_153B0A88.jpg?1498428933" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00078-0560-15_NLMIMAGE10_8F3B47AA.jpg?1498428937" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00078-0560-15_NLMIMAGE10_8F3B47AA.jpg?1498428937" data-description="Amlodipine 5 MG / Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet [Exforge HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00078-0560-15_NLMIMAGE10_8F3B47AA.jpg?1498428937" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-056320180814-13942-lkcjo1.jpg?1534246793" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-056320180814-13942-lkcjo1.jpg?1534246793" data-description="Amlodipine 10 MG / Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet [Exforge HCT]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-056320180814-13942-lkcjo1.jpg?1534246793" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0781-560720180907-15195-1z08i53.jpg?1536296919" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0781-560720180907-15195-1z08i53.jpg?1536296919" data-description="valsartan 40 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0781-560720180907-15195-1z08i53.jpg?1536296919" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00781-5619-92_NLMIMAGE10_B93EDC86.jpg?1498437469" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00781-5619-92_NLMIMAGE10_B93EDC86.jpg?1498437469" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00781-5619-92_NLMIMAGE10_B93EDC86.jpg?1498437469" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/51660-0142-90_NLMIMAGE10_023F0118.jpg?1498437442" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/51660-0142-90_NLMIMAGE10_023F0118.jpg?1498437442" data-description="valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/51660-0142-90_NLMIMAGE10_023F0118.jpg?1498437442" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-645820180907-15195-3erkjl.jpg?1536298321" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-645820180907-15195-3erkjl.jpg?1536298321" data-description="valsartan 80 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-645820180907-15195-3erkjl.jpg?1536298321" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-645220180907-15195-dqzjvf.jpg?1536298324" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-645220180907-15195-dqzjvf.jpg?1536298324" data-description="valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-645220180907-15195-dqzjvf.jpg?1536298324" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/54868-645320180907-15195-1525p0d.jpg?1536298326" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/54868-645320180907-15195-1525p0d.jpg?1536298326" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/54868-645320180907-15195-1525p0d.jpg?1536298326" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-226820180907-15195-1i64xfa.jpg?1536299420" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-226820180907-15195-1i64xfa.jpg?1536299420" data-description="valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-226820180907-15195-1i64xfa.jpg?1536299420" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00603-6342-16_NLMIMAGE10_A847547A.jpg?1498438069" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00603-6342-16_NLMIMAGE10_A847547A.jpg?1498438069" data-description="Not available" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00603-6342-16_NLMIMAGE10_A847547A.jpg?1498438069" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/69189-743220180907-15195-1gr8r4n.jpg?1536300443" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/69189-743220180907-15195-1gr8r4n.jpg?1536300443" data-description="valsartan 80 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/69189-743220180907-15195-1gr8r4n.jpg?1536300443" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7431-56_NLMIMAGE10_F4437A3B.jpg?1498437439" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7431-56_NLMIMAGE10_F4437A3B.jpg?1498437439" data-description="valsartan 40 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7431-56_NLMIMAGE10_F4437A3B.jpg?1498437439" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7432-98_NLMIMAGE10_EB4375EB.jpg?1498437454" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7432-98_NLMIMAGE10_EB4375EB.jpg?1498437454" data-description="valsartan 80 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7432-98_NLMIMAGE10_EB4375EB.jpg?1498437454" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0093-743320180907-15195-1rtekn8.jpg?1536300879" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0093-743320180907-15195-1rtekn8.jpg?1536300879" data-description="valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0093-743320180907-15195-1rtekn8.jpg?1536300879" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0093-743420180907-15195-1ktcpgf.jpg?1536300881" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0093-743420180907-15195-1ktcpgf.jpg?1536300881" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0093-743420180907-15195-1ktcpgf.jpg?1536300881" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7433-98_NLMIMAGE10_E643737B.jpg?1498437433" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7433-98_NLMIMAGE10_E643737B.jpg?1498437433" data-description="valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7433-98_NLMIMAGE10_E643737B.jpg?1498437433" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7434-98_NLMIMAGE10_DD436E9B.jpg?1498437448" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7434-98_NLMIMAGE10_DD436E9B.jpg?1498437448" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00093-7434-98_NLMIMAGE10_DD436E9B.jpg?1498437448" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-220620180913-8702-wh5lcb.jpg?1536864026" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-220620180913-8702-wh5lcb.jpg?1536864026" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-220620180913-8702-wh5lcb.jpg?1536864026" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-168220180913-8702-136giz5.jpg?1536865686" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-168220180913-8702-136giz5.jpg?1536865686" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-168220180913-8702-136giz5.jpg?1536865686" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/13668-0070-90_NLMIMAGE10_EE47772B.jpg?1498438143" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/13668-0070-90_NLMIMAGE10_EE47772B.jpg?1498438143" data-description="Not available" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/13668-0070-90_NLMIMAGE10_EE47772B.jpg?1498438143" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0591-216820180907-15195-j7lvh3.jpg?1536303531" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0591-216820180907-15195-j7lvh3.jpg?1536303531" data-description="valsartan 80 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0591-216820180907-15195-j7lvh3.jpg?1536303531" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00591-2169-19_NLMIMAGE10_C843647B.jpg?1498437459" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00591-2169-19_NLMIMAGE10_C843647B.jpg?1498437459" data-description="valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00591-2169-19_NLMIMAGE10_C843647B.jpg?1498437459" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00591-2170-19_NLMIMAGE10_C443620B.jpg?1498437463" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00591-2170-19_NLMIMAGE10_C443620B.jpg?1498437463" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00591-2170-19_NLMIMAGE10_C443620B.jpg?1498437463" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0378-581520180913-8702-rd4qjj.jpg?1536865260" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0378-581520180913-8702-rd4qjj.jpg?1536865260" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0378-581520180913-8702-rd4qjj.jpg?1536865260" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/51660-0141-90_NLMIMAGE10_833D418A.jpg?1498437466" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/51660-0141-90_NLMIMAGE10_833D418A.jpg?1498437466" data-description="valsartan 80 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/51660-0141-90_NLMIMAGE10_833D418A.jpg?1498437466" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/65862-0571-90_NLMIMAGE10_64433209.jpg?1498437436" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/65862-0571-90_NLMIMAGE10_64433209.jpg?1498437436" data-description="valsartan 80 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/65862-0571-90_NLMIMAGE10_64433209.jpg?1498437436" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/65862-0572-90_NLMIMAGE10_20431048.jpg?1498437451" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/65862-0572-90_NLMIMAGE10_20431048.jpg?1498437451" data-description="valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/65862-0572-90_NLMIMAGE10_20431048.jpg?1498437451" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/65862-0573-90_NLMIMAGE10_254312B8.jpg?1498437445" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/65862-0573-90_NLMIMAGE10_254312B8.jpg?1498437445" data-description="valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/65862-0573-90_NLMIMAGE10_254312B8.jpg?1498437445" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-527120180907-15195-1p868yz.jpg?1536296762" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-527120180907-15195-1p868yz.jpg?1536296762" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-527120180907-15195-1p868yz.jpg?1536296762" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-205220180907-15195-1623lvo.jpg?1536299909" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-205220180907-15195-1623lvo.jpg?1536299909" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-205220180907-15195-1623lvo.jpg?1536299909" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-205120180907-15195-19zzeu9.jpg?1536299911" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-205120180907-15195-19zzeu9.jpg?1536299911" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-205120180907-15195-19zzeu9.jpg?1536299911" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00603-6345-02_NLMIMAGE10_16478B3C.jpg?1498438072" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00603-6345-02_NLMIMAGE10_16478B3C.jpg?1498438072" data-description="Not available" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00603-6345-02_NLMIMAGE10_16478B3C.jpg?1498438072" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00603-6346-02_NLMIMAGE10_AD3ED6E6.jpg?1498432793" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00603-6346-02_NLMIMAGE10_AD3ED6E6.jpg?1498432793" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00603-6346-02_NLMIMAGE10_AD3ED6E6.jpg?1498432793" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00603-6347-02_NLMIMAGE10_094304D8.jpg?1498432780" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00603-6347-02_NLMIMAGE10_094304D8.jpg?1498432780" data-description="Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00603-6347-02_NLMIMAGE10_094304D8.jpg?1498432780" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00603-6348-02_NLMIMAGE10_13430988.jpg?1498432785" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00603-6348-02_NLMIMAGE10_13430988.jpg?1498432785" data-description="Hydrochlorothiazide 12.5 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00603-6348-02_NLMIMAGE10_13430988.jpg?1498432785" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00603-6349-02_NLMIMAGE10_17430BF8.jpg?1498432787" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00603-6349-02_NLMIMAGE10_17430BF8.jpg?1498432787" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00603-6349-02_NLMIMAGE10_17430BF8.jpg?1498432787" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-141320180907-15195-5vvwx2.jpg?1536300525" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-141320180907-15195-5vvwx2.jpg?1536300525" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-141320180907-15195-5vvwx2.jpg?1536300525" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/68180-0104-09_NLMIMAGE10_893D44EA.jpg?1498432790" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/68180-0104-09_NLMIMAGE10_893D44EA.jpg?1498432790" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/68180-0104-09_NLMIMAGE10_893D44EA.jpg?1498432790" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/63629-480520180913-8702-1ar38k1.jpg?1536866872" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/63629-480520180913-8702-1ar38k1.jpg?1536866872" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/63629-480520180913-8702-1ar38k1.jpg?1536866872" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00591-2317-19_NLMIMAGE10_AA3D556A.jpg?1498432782" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00591-2317-19_NLMIMAGE10_AA3D556A.jpg?1498432782" data-description="Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00591-2317-19_NLMIMAGE10_AA3D556A.jpg?1498432782" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00591-2318-19_NLMIMAGE10_E54772DB.jpg?1498438049" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00591-2318-19_NLMIMAGE10_E54772DB.jpg?1498438049" data-description="Not available" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/00591-2318-19_NLMIMAGE10_E54772DB.jpg?1498438049" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0591-231920180913-8702-6lkbev.jpg?1536862433" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0591-231920180913-8702-6lkbev.jpg?1536862433" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0591-231920180913-8702-6lkbev.jpg?1536862433" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/65862-0551-90_NLMIMAGE10_C54DE2CF.jpg?1498438570" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/65862-0551-90_NLMIMAGE10_C54DE2CF.jpg?1498438570" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/65862-0551-90_NLMIMAGE10_C54DE2CF.jpg?1498438570" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-176220180913-8702-u1d8jx.jpg?1536866275" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-176220180913-8702-u1d8jx.jpg?1536866275" data-description="Hydrochlorothiazide 25 MG / valsartan 320 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-176220180913-8702-u1d8jx.jpg?1536866275" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-176320180913-8702-ubw03.jpg?1536866276" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-176320180913-8702-ubw03.jpg?1536866276" data-description="Hydrochlorothiazide 25 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-176320180913-8702-ubw03.jpg?1536866276" src /></a>
                    </div>
                    <div className="carousel-item w-100">
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-141220180913-8702-mepcpv.jpg?1536862443" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-141220180913-8702-mepcpv.jpg?1536862443" data-description="Hydrochlorothiazide 12.5 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-141220180913-8702-mepcpv.jpg?1536862443" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/50090-142020180913-8702-1mb7sbg.jpg?1536862446" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/50090-142020180913-8702-1mb7sbg.jpg?1536862446" data-description="Hydrochlorothiazide 12.5 MG / valsartan 80 MG Oral Tablet" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/50090-142020180913-8702-1mb7sbg.jpg?1536862446" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-057220180907-15195-ulco0v.jpg?1536292967" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-057220180907-15195-ulco0v.jpg?1536292967" data-description="aliskiren 150 MG / valsartan 160 MG Oral Tablet [Valturna]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-057220180907-15195-ulco0v.jpg?1536292967" src /></a>
                      <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/0078-057420180907-15195-2ef2p7.jpg?1536292969" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/0078-057420180907-15195-2ef2p7.jpg?1536292969" data-description="aliskiren 300 MG / valsartan 320 MG Oral Tablet [Valturna]" href="#modal-package"><img className="img-fluid" data-source="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/thumb/0078-057420180907-15195-2ef2p7.jpg?1536292969" src /></a>
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
                    <table className="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB00177/products.json?group=approved" data-total={110} id="approved-products" style={{width: '100%'}} role="grid" aria-describedby="approved-products_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '41.2px'}} aria-label="Name: activate to sort column ascending">Name</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '63.2px'}} aria-label="Dosage: activate to sort column ascending">Dosage</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '70.2px'}} aria-label="Strength: activate to sort column ascending">Strength</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '46.2px'}} aria-label="Route: activate to sort column ascending">Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '90.2px'}} aria-label="Labeller: activate to sort column ascending">Labeller</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                          <th className="sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                          <th className="drug-image sorting" tabIndex={0} aria-controls="approved-products" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
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
                          <td tabIndex={0}><strong>Act Valsartan</strong></td>
                          <td>Tablet</td>
                          <td>320 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2011-02-16</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Act Valsartan</strong></td>
                          <td>Tablet</td>
                          <td>160 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2011-02-16</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Act Valsartan</strong></td>
                          <td>Tablet</td>
                          <td>80 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2011-02-16</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Act Valsartan</strong></td>
                          <td>Tablet</td>
                          <td>40 mg</td>
                          <td>Oral</td>
                          <td>Actavis Pharma Company</td>
                          <td>2011-02-16</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Copalia</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Novartis Europharm Limited</td>
                          <td>2007-01-15</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Copalia</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Novartis Europharm Limited</td>
                          <td>2007-01-15</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Copalia</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Novartis Europharm Limited</td>
                          <td>2007-01-15</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Copalia</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Novartis Europharm Limited</td>
                          <td>2007-01-15</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Copalia</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Novartis Europharm Limited</td>
                          <td>2007-01-15</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Copalia</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Novartis Europharm Limited</td>
                          <td>2007-01-15</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                    <div id="approved-products_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="approved-products_info" role="status" aria-live="polite">Showing 1 to 10 of 110 entries</div>
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
                        <li className="paginate_button page-item "><a href="#" aria-controls="approved-products" data-dt-idx={7} tabIndex={0} className="page-link">11</a></li>
                        <li className="paginate_button page-item next" id="approved-products_next"><a href="#" aria-controls="approved-products" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
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
                    <table className="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline collapsed" data-source="/drugs/DB00177/products.json?group=generic" data-total={240} id="generic-products" style={{width: '100%'}} role="grid" aria-describedby="generic-products_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '99.2px'}} aria-label="Name: activate to sort column ascending">Name</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '62.2px'}} aria-label="Dosage: activate to sort column ascending">Dosage</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '70.2px'}} aria-label="Strength: activate to sort column ascending">Strength</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '46.2px'}} aria-label="Route: activate to sort column ascending">Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '68.2px'}} aria-label="Labeller: activate to sort column ascending">Labeller</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                          <th className="sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                          <th className="drug-image sorting" tabIndex={0} aria-controls="generic-products" rowSpan={1} colSpan={1} style={{width: '0px', display: 'none'}} aria-label=": activate to sort column ascending" />
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
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine-valsartan Mylan</strong></td>
                          <td>Tablet, film coated</td>
                          <td />
                          <td>Oral</td>
                          <td>Mylan S.A.S.</td>
                          <td>2016-03-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">EU</span><img src="/assets/countries/eu-dda0a77d72bbe9085912a87221977afb68d43d8dbf280688345b7a73f2498514.svg" alt="Eu" /></span>
                          </td>
                          <td style={{display: 'none'}} />
                        </tr>
                      </tbody>
                    </table>
                    <div id="generic-products_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="generic-products_info" role="status" aria-live="polite">Showing 1 to 10 of 240 entries</div>
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
                        <li className="paginate_button page-item "><a href="#" aria-controls="generic-products" data-dt-idx={7} tabIndex={0} className="page-link">24</a></li>
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
                    <table className="products table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB00177/products.json?group=mixtures" data-total={496} style={{width: '100%'}} id="DataTables_Table_1" role="grid" aria-describedby="DataTables_Table_1_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '58.2px'}} aria-label="Name: activate to sort column ascending">Name</th>
                          <th className="no-sort sorting_disabled" rowSpan={1} colSpan={1} style={{width: '130.4px'}} aria-label="Ingredients">Ingredients</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '56.2px'}} aria-label="Dosage: activate to sort column ascending">Dosage</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '46.2px'}} aria-label="Route: activate to sort column ascending">Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '85.2px'}} aria-label="Labeller: activate to sort column ascending">Labeller</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing Start: activate to sort column ascending">Marketing Start</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '80.2px'}} aria-label="Marketing End: activate to sort column ascending">Marketing End</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                          <th className="drug-image sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{width: '0.2px'}} aria-label=": activate to sort column ascending" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(320 mg/1)</span> + <a href="/drugs/DB00381">Amlodipine</a> <span className="text-muted">(5 mg/1)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>AvKARE, Inc.</td>
                          <td>2018-09-11</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(320 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(10 mg/1)</span></td>
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>A-S Medication Solutions</td>
                          <td>2015-03-30</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(320 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(5 mg/1)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Novel Laboratories, Inc.</td>
                          <td>2015-03-30</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(320 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(10 mg/1)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Lupin Pharmaceuticals</td>
                          <td>2015-03-30</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(160 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(10 mg/1)</span></td>
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>Teva Pharmaceuticals USA, Inc.</td>
                          <td>2015-03-30</td>
                          <td>2018-11-30</td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td>
                            <a className="package-picture" data-toggle="modal" data-url="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/medium/00093-7691-56_NLMIMAGE10_9A43CD1E.jpg?1498428821" data-fullurl="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/original/00093-7691-56_NLMIMAGE10_9A43CD1E.jpg?1498428821" data-description="Amlodipine 10 MG / valsartan 160 MG Oral Tablet" href="#modal-package"><img className="package-thumb" src="//s3-us-west-2.amazonaws.com/drugbank/product_images/images/tiny/00093-7691-56_NLMIMAGE10_9A43CD1E.jpg?1498428821" alt="00093 7691 56 nlmimage10 9a43cd1e" /></a>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(320 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(5 mg/1)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Av Kare, Inc.</td>
                          <td>2015-04-27</td>
                          <td>2017-05-01</td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(320 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(10 mg/1)</span></td>
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>Torrent Pharmaceuticals Limited</td>
                          <td>2015-03-30</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(160 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(10 mg/1)</span></td>
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>Sandoz Inc</td>
                          <td>2015-03-30</td>
                          <td>2022-09-30</td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Amlodipine and valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(320 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(10 mg/1)</span></td>
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>Aurobindo Pharma Limited</td>
                          <td>2016-04-22</td>
                          <td><span className="not-available">Not applicable</span></td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Amlodipine and Valsartan</strong></td>
                          <td>Valsartan <span className="text-muted">(320 mg/1)</span> + <a href="/salts/DBSALT001054">Amlodipine besylate</a> <span className="text-muted">(10 mg/1)</span></td>
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>Trigen Laboratories, Inc.</td>
                          <td>2010-12-28</td>
                          <td>2017-11-20</td>
                          <td><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                    <div id="DataTables_Table_1_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1 to 10 of 496 entries</div>
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
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={7} tabIndex={0} className="page-link">50</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_1_next"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Categories</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="category-columns">
                <ul className="list-unstyled table-list">
                  <li><a href="/categories/DBCAT002171">Agents Acting on the Renin-Angiotensin System</a></li>
                  <li><a href="/categories/DBCAT004043">Agents causing angioedema</a></li>
                  <li><a href="/categories/DBCAT003960">Agents causing hyperkalemia</a></li>
                  <li><a href="/categories/DBCAT003287">Angiotensin 2 Receptor Blocker</a></li>
                  <li><a href="/categories/DBCAT002170">Angiotensin II Antagonists and Calcium Channel Blockers</a></li>
                  <li><a href="/categories/DBCAT002172">Angiotensin II Antagonists and Diuretics</a></li>
                  <li><a href="/categories/DBCAT002173">Angiotensin II Antagonists, Plain</a></li>
                  <li><a href="/categories/DBCAT004595">Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                  <li><a href="/categories/DBCAT004593">Angiotensin II receptor blockers (ARBs) and diuretics</a></li>
                  <li><a href="/categories/DBCAT004594">Angiotensin II receptor blockers (ARBs), plain</a></li>
                  <li><a href="/categories/DBCAT000409">Angiotensin II Type 1 Receptor Blockers</a></li>
                  <li><a href="/categories/DBCAT001168">Angiotensin II Type 2 Receptor Blockers</a></li>
                  <li><a href="/categories/DBCAT000408">Angiotensin Receptor Antagonists</a></li>
                  <li><a href="/categories/DBCAT000410">Antihypertensive Agents</a></li>
                  <li><a href="/categories/DBCAT000010">Cardiovascular Agents</a></li>
                  <li><a href="/categories/DBCAT000489">Cytochrome P-450 CYP2C9 Inhibitors</a></li>
                  <li><a href="/categories/DBCAT004528">Cytochrome P-450 CYP2C9 Inhibitors (strength unknown)</a></li>
                  <li><a href="/categories/DBCAT002634">Cytochrome P-450 CYP2C9 Substrates</a></li>
                  <li><a href="/categories/DBCAT000394">Cytochrome P-450 Enzyme Inhibitors</a></li>
                  <li><a href="/categories/DBCAT002696">Hypotensive Agents</a></li>
                  <li><a href="/categories/DBCAT003931">OATP1B1/SLCO1B1 Inhibitors</a></li>
                  <li><a href="/categories/DBCAT002658">OATP1B1/SLCO1B1 Substrates</a></li>
                  <li><a href="/categories/DBCAT004563">OATP1B3 substrates</a></li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">UNII</dt>
            <dd className="col-md-10 col-sm-8"><a target="_blank" rel="noopener" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=80M03YXJ7I">80M03YXJ7I</a></dd><dt className="col-md-2 col-sm-4">CAS number</dt>
            <dd className="col-md-10 col-sm-8">137862-53-4</dd><dt className="col-md-2 col-sm-4">Weight</dt>
            <dd className="col-md-10 col-sm-8">Average: 435.5188
              <br />Monoisotopic: 435.227039819 </dd><dt className="col-md-2 col-sm-4">Chemical Formula</dt>
            <dd className="col-md-10 col-sm-8">C<sub>24</sub>H<sub>29</sub>N<sub>5</sub>O<sub>3</sub></dd><dt className="col-md-2 col-sm-4">InChI Key</dt>
            <dd className="col-md-10 col-sm-8">ACWBQPMHZXGDFX-QFIPXVFZSA-N</dd><dt className="col-md-2 col-sm-4">InChI</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">InChI=1S/C24H29N5O3/c1-4-5-10-21(30)29(22(16(2)3)24(31)32)15-17-11-13-18(14-12-17)19-8-6-7-9-20(19)23-25-27-28-26-23/h6-9,11-14,16,22H,4-5,10,15H2,1-3H3,(H,31,32)(H,25,26,27,28)/t22-/m0/s1</div>
            </dd><dt className="col-md-2 col-sm-4">IUPAC Name</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">(2S)-3-methyl-2-[N-({'{'}4-[2-(2H-1,2,3,4-tetrazol-5-yl)phenyl]phenyl{'}'}methyl)pentanamido]butanoic acid</div>
            </dd><dt className="col-md-2 col-sm-4">SMILES</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">CCCCC(=O)N(CC1=CC=C(C=C1)C1=CC=CC=C1C1=NNN=N1)[C@@H](C(C)C)C(O)=O</div>
            </dd>
          </dl>
          <h2 id="pharmacology" className="section-header">Pharmacology</h2>
          <dl><dt className="col-md-2 col-sm-4">Indication</dt>
            <dd className="col-md-10 col-sm-8">
              <p><strong>Monotherapy</strong></p>
              <p>Valsartan may be used alone for the management of hypertension <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup></p>
              <p><strong>Combination therapy</strong></p>
              <p>Valsartan is indicated for the management of hypertension in patients for whom combination therapy is deemed appropriate <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>. It is combined with other anthypertensive agents such as hydrochlorothiazide, amlodipine, nevibolol and sacubitril <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="NZ Data Sheet, Valsartan and sacubitril" href="#reference-F3136" data-original-title title>10</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan and Amlodipine FDA label" href="#reference-F3145" data-original-title title>13</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan and Nevibolol FDA label" href="#reference-F3148" data-original-title title>14</a></sup>.</p>
              <p><strong>Heart Failure</strong></p>
              <p>Valsartan is indicated for the treatment of heart failure (NYHA class II-IV) in patients who are intolerant to angiotensin-converting enzyme inhibitors (ACE inhibitors) for various reasons, including those who experience ACE inhibitor adverse effects. In a clinical study of 5010 patients, hospitalizations due to heart failure were markedly decreased when valsartan was taken regularly over a 2-year span <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Associated Conditions</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li><a href="/indications/DBCOND0040959">Cardiovascular Mortality</a></li>
                <li><a href="/indications/DBCOND0000983">Diabetic Nephropathies</a></li>
                <li><a href="/indications/DBCOND0040789">High Blood Pressure (Hypertension)</a></li>
                <li><a href="/indications/DBCOND0033563">Hospitalization</a></li>
                <li><a href="/indications/DBCOND0036953">Mild Essential Hypertension</a></li>
                <li><a href="/indications/DBCOND0040924">Moderate Essential Hypertension</a></li>
                <li><a href="/indications/DBCOND0033676">Pediatric Hypertension</a></li>
                <li><a href="/indications/DBCOND0025714">Chronic heart failure with reduced ejection fraction (NYHA Class II)</a></li>
                <li><a href="/indications/DBCOND0025715">Chronic heart failure with reduced ejection fraction (NYHA Class III)</a></li>
                <li><a href="/indications/DBCOND0025716">Chronic heart failure with reduced ejection fraction (NYHA Class IV)</a></li>
                <li><a href="/indications/DBCOND0116973">Hospitalization due to cardiac failure</a></li>
                <li><a href="/indications/DBCOND0025783">Symptomatic left ventricular ejection fraction ≤ 35% Chronic heart failure</a></li>
                <li><a href="/indications/DBCOND0068093">The Mortality Rate</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Pharmacodynamics</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Valsartan inhibits the pressor effect of an angiotensin II hormone, decreasing blood pressure <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>. </p>
              <p>Angiotensin II is formed from angiotensin I during a reaction that is catalyzed by angiotensin-converting enzyme, also known as <em>ACE</em> . Angiotensin II is the main pressor agent of the renin-angiotensin system, causing vasoconstriction, aldosterone synthesis and release, cardiac stimulation, as well as the renal reabsorption of sodium <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p>The cardioprotective benefits of valsartan have been shown in large-scale clinical outcomes trials and include significant decreases in cardiovascular morbidity and mortality in heart failure, after myocardial infarction, and in patients with comorbid hypertension and coronary artery disease and/or heart failure; reductions in heart failure hospitalizations; and reductions in stroke incidence <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Black HR, Bailey J, Zappe D, Samuel R: Valsartan: more than a decade of experience. Drugs. 2009;69(17):2393-414. doi: 10.2165/11319460-000000000-00000. (PubMed ID 19911855)" href="#reference-A174124" data-original-title title>1</a></sup>. </p>
              <p>This drug has been shown to slow the progression of diabetic nephropathy due to its renoprotective effects <sup className="text-reference-group"><a className="reference-popover-link" data-content="Zhou G, Cheung AK, Liu X, Huang Y: Valsartan slows the progression of diabetic nephropathy in db/db mice via a reduction in podocyte injury, and renal oxidative stress and inflammation. Clin Sci (Lond). 2014 May;126(10):707-20. doi: 10.1042/CS20130223. (PubMed ID 24195695)" href="#reference-A174157" data-original-title title>6</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Suzuki K, Souda S, Ikarashi T, Kaneko S, Nakagawa O, Aizawa Y: Renoprotective effects of low-dose valsartan in type 2 diabetic patients with diabetic nephropathy. Diabetes Res Clin Pract. 2002 Sep;57(3):179-83. (PubMed ID 12126767)" href="#reference-A174160" data-original-title title>7</a></sup>, <sup className="text-reference-group"><a className="reference-popover-link" data-content="Currie G, Bethel MA, Holzhauer B, Haffner SM, Holman RR, McMurray JJV: Effect of valsartan on kidney outcomes in people with impaired glucose tolerance. Diabetes Obes Metab. 2017 Jun;19(6):791-799. doi: 10.1111/dom.12877. Epub 2017 Mar 17. (PubMed ID 28093841)" href="#reference-A174163" data-original-title title>8</a></sup>. Improvements in chronic kidney disease with valsartan include both clinically and statistically significant decreases in urinary albumin and protein excretion in patients diagnosed with type 2 diabetes and in nondiabetic patients diagnosed with chronic kidney disease <sup className="text-reference-group"><a className="reference-popover-link" data-content="Black HR, Bailey J, Zappe D, Samuel R: Valsartan: more than a decade of experience. Drugs. 2009;69(17):2393-414. doi: 10.2165/11319460-000000000-00000. (PubMed ID 19911855)" href="#reference-A174124" data-original-title title>1</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Mechanism of action</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Valsartan selectively acts on <em>AT1</em>, the subtype receptor that mediates the cardiovascular actions of angiotensin II, the main vasoactive hormone of the renin-angiotensin-system. The <em>AT2</em> receptor subtype, which can be found in tissues such as the brain, endometrium, myometrium, and fetal kidney and adrenals, plays no known role in cardiovascular homeostasis at this time <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>.</p>
              <p>Angiotensin II contributes to vasoconstrictor activity and sodium/water retention, which contribute to hypertension. Through the inhibition of response to angiotensin II by actions on the <em>AT1</em> receptor, valsartan is able to decrease blood pressure <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p>The cardioprotective effects of valsartan are thought to occur through inverse agonist activity of valsartan on the <em>AT1</em> receptor, which plays an important role in cardiac remodeling (causing ventricular hypertrophy). Inverse agonists such as valsartan inactivate this receptor, preventing cardiovascular remodeling <sup className="text-reference-group"><a className="reference-popover-link" data-content="Akazawa H, Yabumoto C, Yano M, Kudo-Sakamoto Y, Komuro I: ARB and cardioprotection. Cardiovasc Drugs Ther. 2013 Apr;27(2):155-60. doi: 10.1007/s10557-012-6392-2. (PubMed ID 22538956)" href="#reference-A174154" data-original-title title>5</a></sup>.</p>
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
              <p>Absolute bioavailability for valsartan is approximately 25% (ranges between 10%-35%). The bioavailability of the suspension is 1.6 times higher than that of the oral tablet. With the tablet, food decreases the exposure to valsartan by approximately 40% and peak plasma concentration by approximately 50%. AUC and Cmax values of valsartan genereally increase linearly with increasing dose over the therapeutic dose range. Valsartan does not accumulate appreciably in plasma following repetitive administration <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p>After one oral dose, the antihypertensive activity of valsartan begins within approximately 2 hours and peaks within 4-6 hours in most patients <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Volume of distribution</dt>
            <dd className="col-md-10 col-sm-8">
              <p>17 L (low tissue distribution) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>.</p>
              <p>Since its pharmacokinetics are linear in the 80 to 320 mg dose range, valsartan does not accumulate appreciably in plasma following repeated administration. Plasma concentrations are similar in males and females <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Protein binding</dt>
            <dd className="col-md-10 col-sm-8">
              <p>94 - 97% bound to serum proteins, primarily serum albumin <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Metabolism</dt>
            <dd className="col-md-10 col-sm-8">
              <p />
              <p>This drug undergoes minimal liver metabolism <sup className="text-reference-group"><a className="reference-popover-link" data-content="Black HR, Bailey J, Zappe D, Samuel R: Valsartan: more than a decade of experience. Drugs. 2009;69(17):2393-414. doi: 10.2165/11319460-000000000-00000. (PubMed ID 19911855)" href="#reference-A174124" data-original-title title>1</a></sup>. Valsartan is not biotransformed to a high degree, as only approximately 20% of a single dose is recovered as metabolites. A hydroxyl metabolite has been found in plasma at low concentrations (less than 10% of the valsartan area under the curve). This metabolite is inactive <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>.</p>
              <p />
              <ul className="list-unstyled">
                <li><a href="/reactions/11"><strong>Valsartan</strong> <div className="drugbank-icon icon-arrow-right"><svg className="icon" role="img" title="arrow-right"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#arrow-right"> </use></svg></div> Valeryl-4-hydroxyvalsartan</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Route of elimination</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Valsartan, when administered as an oral solution, is mostly recovered in the feces (about 83% of dose) and urine (about 13% of dose). Unchanged drug is mainly recovered, with only about 20% of dose measured as metabolites. The primary metabolite, accounting for about 10% of dose, is <em>valeryl 4-hydroxy valsarta</em>n. The main enzyme(s) responsible for valsartan metabolism have not been elucidated but do not appear to be CYP 450 isozymes <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Half life</dt>
            <dd className="col-md-10 col-sm-8">
              <p>After intravenous (IV) administration, valsartan demonstrates bi-exponential decay kinetics (t1/2α &lt;1 hour and t1/2β between 5-9 hours) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Clearance</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Following intravenous administration, plasma clearance of valsartan is approximately 2 L/hour and its renal clearance is 0.62 L/hour (about 30% of total clearance) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
            </dd><dt className="col-md-2 col-sm-4">Toxicity</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Approximate LD50 &gt;2000 mg/kg (Gavage, rat) <sup className="text-reference-group"><a className="reference-popover-link" data-content="Valsartan HCT Canadian Monograph" href="#reference-F3139" data-original-title title>11</a></sup></p>
              <p><strong>A note on hyperkalemia</strong>: This drug may cause hyperkalemia, thus, monitoring of potassium is warranted, especially in patients with nephropathy <sup className="text-reference-group"><a className="reference-popover-link" data-content="Fogari R, Zoppi A: A drug safety evaluation of valsartan. Expert Opin Drug Saf. 2011 Mar;10(2):295-303. doi: 10.1517/14740338.2011.543416. Epub 2010 Dec 11. (PubMed ID 21142805)" href="#reference-A174127" data-original-title title>2</a></sup>. A full list of adverse events is available in the "Adverse Effects" section of this drug entry.</p>
              <p><strong>Reproductive Toxicology Studies</strong></p>
              <p>No teratogenic effects were seen when valsartan was given to pregnant mice and rats at oral doses up to 600 mg/kg/day and to pregnant rabbits at oral doses reaching up to 10 mg/kg/day. Despite this, marked decreases in fetal weight, pup birth weight, pup survival rate, and delays in developmental milestones were noted in studies in which parental rats were treated with valsartan at oral, maternally toxic doses of 600 mg/kg/day during the organogenesis period or during late gestation and lactation <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
              <p><strong>Pregnancy</strong></p>
              <p>When used in pregnancy, drugs that act directly on the renin-angiotensin system (RAAS) can cause injury and death to the developing fetus. When pregnancy is detected, valsartan should be discontinued as soon as possible <sup className="text-reference-group"><a className="reference-popover-link" data-content="Official drug label" href="#label-reference" data-original-title title>Label</a></sup>.</p>
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
                    <td><a href="http://smpdb.ca/view/SMP0000165?highlight[compounds][]=DB00177&highlight[proteins][]=DB00177">Valsartan Action Pathway</a></td>
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
                <li className="interactions index nav-item"><a className="toggle-row-display nav-link active" data-source="/drugs/DB00177/drug_interactions.json" href="#show-all">All Drugs</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00177/drug_interactions.json?group=approved" href="#show-approved">Approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00177/drug_interactions.json?group=vet_approved" href="#show-vet_approved">Vet approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00177/drug_interactions.json?group=nutraceutical" href="#show-nutraceutical">Nutraceutical</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00177/drug_interactions.json?group=illicit" href="#show-illicit">Illicit</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00177/drug_interactions.json?group=withdrawn" href="#show-withdrawn">Withdrawn</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00177/drug_interactions.json?group=investigational" href="#show-investigational">Investigational</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB00177/drug_interactions.json?group=experimental" href="#show-experimental">Experimental</a></li>
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
                      <table className="table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB00177/drug_interactions.json" data-total={1094} id="drug-interactions" style={{width: '100%'}} role="grid" aria-describedby="drug-interactions_info">
                        <thead>
                          <tr role="row">
                            <th className="head-sm sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '195.2px'}} aria-label="Drug: activate to sort column ascending">Drug</th>
                            <th className="sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '520.2px'}} aria-label="Interaction: activate to sort column ascending">Interaction</th>
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
                            <td tabIndex={0}><a href="/drugs/DB14055">(S)-Warfarin</a></td>
                            <td>The metabolism of (S)-Warfarin can be decreased when combined with Valsartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB02032">1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid</a></td>
                            <td>The risk or severity of adverse effects can be increased when Valsartan is combined with 1-(3-Mercapto-2-Methyl-Propionyl)-Pyrrolidine-2-Carboxylic Acid.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB04581">1-benzylimidazole</a></td>
                            <td>1-benzylimidazole may decrease the antihypertensive activities of Valsartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB01467">2,5-Dimethoxy-4-ethylamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylamphetamine may decrease the antihypertensive activities of Valsartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB13940">2,5-Dimethoxy-4-ethylthioamphetamine</a></td>
                            <td>2,5-Dimethoxy-4-ethylthioamphetamine may decrease the antihypertensive activities of Valsartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB01484">4-Bromo-2,5-dimethoxyamphetamine</a></td>
                            <td>4-Bromo-2,5-dimethoxyamphetamine may decrease the antihypertensive activities of Valsartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB01472">4-Methoxyamphetamine</a></td>
                            <td>4-Methoxyamphetamine may decrease the antihypertensive activities of Valsartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB14010">5-methoxy-N,N-dimethyltryptamine</a></td>
                            <td>5-methoxy-N,N-dimethyltryptamine may decrease the antihypertensive activities of Valsartan.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="/drugs/DB08550">7,8-Dichloro-1,2,3,4-tetrahydroisoquinoline</a></td>
                            <td>7,8-Dichloro-1,2,3,4-tetrahydroisoquinoline may increase the hypotensive activities of Valsartan.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="/drugs/DB01281">Abatacept</a></td>
                            <td>The metabolism of Valsartan can be increased when combined with Abatacept.</td>
                          </tr>
                        </tbody>
                      </table>
                      <div id="drug-interactions_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="drug-interactions_info" role="status" aria-live="polite">Showing 1 to 10 of 1,094 entries</div>
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
                          <li className="paginate_button page-item "><a href="#" aria-controls="drug-interactions" data-dt-idx={7} tabIndex={0} className="page-link">110</a></li>
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
            <dd className="col-md-10 col-sm-8"><span className="not-available">Not Available</span></dd>
          </dl>
          <h2 id="references" className="section-header">References</h2>
          <dl><dt className="col-md-2 col-sm-4">Synthesis Reference</dt>
            <dd className="col-md-10 col-sm-8"><span className="citations"><p>Zvi Harel, Igor Rukhman, "Process for the preparation of valsartan." U.S. Patent US20050010053, issued January 13, 2005.</p>
              </span><a target="_blank" rel="noopener" href="https://www.google.com/?tbm=pts#q=20050010053&tbm=pts">US20050010053</a></dd><dt className="col-md-2 col-sm-4">General References</dt>
            <dd className="col-md-10 col-sm-8">
              <ol className="cite-this-references">
                <li id="reference-A174124">Black HR, Bailey J, Zappe D, Samuel R: Valsartan: more than a decade of experience. Drugs. 2009;69(17):2393-414. doi: 10.2165/11319460-000000000-00000. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19911855">PubMed:19911855</a>] </li>
                <li id="reference-A174127">Fogari R, Zoppi A: A drug safety evaluation of valsartan. Expert Opin Drug Saf. 2011 Mar;10(2):295-303. doi: 10.1517/14740338.2011.543416. Epub 2010 Dec 11. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/21142805">PubMed:21142805</a>] </li>
                <li id="reference-A174130">McInnes GT: Clinical advantage of valsartan. Cardiology. 1999;91 Suppl 1:14-8. doi: 10.1159/000047283. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/10449890">PubMed:10449890</a>] </li>
                <li id="reference-A174133">Chiolero A, Burnier M: Pharmacology of valsartan, an angiotensin II receptor antagonist. Expert Opin Investig Drugs. 1998 Nov;7(11):1915-25. doi: 10.1517/13543784.7.11.1915 . [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/15991938">PubMed:15991938</a>] </li>
                <li id="reference-A174154">Akazawa H, Yabumoto C, Yano M, Kudo-Sakamoto Y, Komuro I: ARB and cardioprotection. Cardiovasc Drugs Ther. 2013 Apr;27(2):155-60. doi: 10.1007/s10557-012-6392-2. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/22538956">PubMed:22538956</a>] </li>
                <li id="reference-A174157">Zhou G, Cheung AK, Liu X, Huang Y: Valsartan slows the progression of diabetic nephropathy in db/db mice via a reduction in podocyte injury, and renal oxidative stress and inflammation. Clin Sci (Lond). 2014 May;126(10):707-20. doi: 10.1042/CS20130223. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/24195695">PubMed:24195695</a>] </li>
                <li id="reference-A174160">Suzuki K, Souda S, Ikarashi T, Kaneko S, Nakagawa O, Aizawa Y: Renoprotective effects of low-dose valsartan in type 2 diabetic patients with diabetic nephropathy. Diabetes Res Clin Pract. 2002 Sep;57(3):179-83. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/12126767">PubMed:12126767</a>] </li>
                <li id="reference-A174163">Currie G, Bethel MA, Holzhauer B, Haffner SM, Holman RR, McMurray JJV: Effect of valsartan on kidney outcomes in people with impaired glucose tolerance. Diabetes Obes Metab. 2017 Jun;19(6):791-799. doi: 10.1111/dom.12877. Epub 2017 Mar 17. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/28093841">PubMed:28093841</a>] </li>
                <li id="reference-T5">Bader, M. (2004). Renin-angiotensin-aldosterone system. In Encyclopedic reference of molecular pharmacology (pp. 810-814). Berlin: Springer. [<a target="_blank" rel="noopener" href="http://www.google.com/search?tbo=p&tbm=bks&q=9783540298328">ISBN:9783540298328</a>] </li>
                <li id="reference-F3136">NZ Data Sheet, Valsartan and sacubitril [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/136/original/NZ_Data_sheet__Valsartan_and_sacubitril.pdf?1548434596">File</a>] </li>
                <li id="reference-F3139">Valsartan HCT Canadian Monograph [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/139/original/Valsartan_HCT_TAB_Monograph.pdf?1548434624">File</a>] </li>
                <li id="reference-F3142">Valsartan and Sacubitril FDA label [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/142/original/Valsartan_and_Sacubitril_FDA_label.pdf?1548436930">File</a>] </li>
                <li id="reference-F3145">Valsartan and Amlodipine FDA label [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/145/original/Exforge_FDA_label.pdf?1548437682">File</a>] </li>
                <li id="reference-F3148">Valsartan and Nevibolol FDA label [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/148/original/Nevibolol_and_Valsartan.pdf?1548438575">File</a>] </li>
              </ol>
            </dd><dt className="col-md-2 col-sm-4">External Links</dt>
            <dd className="col-md-10 col-sm-8">
              <dl><dt className="col-md-4 col-sm-5">Human Metabolome Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.hmdb.ca/metabolites/HMDB0014323">HMDB0014323</a></dd><dt className="col-md-4 col-sm-5">KEGG Drug</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.genome.jp/dbget-bin/www_bget?drug:D00400">D00400</a></dd><dt className="col-md-4 col-sm-5">PubChem Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=60846">60846</a></dd><dt className="col-md-4 col-sm-5">PubChem Substance</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?sid=46509000">46509000</a></dd><dt className="col-md-4 col-sm-5">ChemSpider</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.chemspider.com/Chemical-Structure.54833.html">54833</a></dd><dt className="col-md-4 col-sm-5">BindingDB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.bindingdb.org/bind/chemsearch/marvin/MolStructure.jsp?monomerid=50049186">50049186</a></dd><dt className="col-md-4 col-sm-5">ChEBI</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=9927">9927</a></dd><dt className="col-md-4 col-sm-5">ChEMBL</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.ebi.ac.uk/chembldb/index.php/compound/inspect/CHEMBL1069">CHEMBL1069</a></dd><dt className="col-md-4 col-sm-5">Therapeutic Targets Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://bidd.nus.edu.sg/group/cjttd/ZFTTDDRUG.asp?ID=DAP000363">DAP000363</a></dd><dt className="col-md-4 col-sm-5">PharmGKB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.pharmgkb.org/drug/PA451848">PA451848</a></dd><dt className="col-md-4 col-sm-5">Guide to Pharmacology</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://www.guidetopharmacology.org/GRAC/LigandDisplayForward?ligandId=3937">GtP Drug Page</a></dd><dt className="col-md-4 col-sm-5">Wikipedia</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener" href="http://en.wikipedia.org/wiki/Valsartan">Valsartan</a></dd>
              </dl>
            </dd><dt className="col-md-2 col-sm-4">ATC Codes</dt>
            <dd className="col-md-10 col-sm-8"><a data-no-turbolink="true" href="/atc/C09DX05">C09DX05 — Valsartan and nebivolol</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DX">C09DX — Angiotensin II receptor blockers (ARBs), other combinations</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C10BX10">C10BX10 — Rosuvastatin and valsartan</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C10BX">C10BX — HMG CoA reductase inhibitors, other combinations</a></li>
                <li><a data-no-turbolink="true" href="/atc/C10B">C10B — LIPID MODIFYING AGENTS, COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C10">C10 — LIPID MODIFYING AGENTS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09DA03">C09DA03 — Valsartan and diuretics</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DA">C09DA — Angiotensin II receptor blockers (ARBs) and diuretics</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09CA03">C09CA03 — Valsartan</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09CA">C09CA — Angiotensin II receptor blockers (ARBs), plain</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09C">C09C — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09DX02">C09DX02 — Valsartan and aliskiren</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DX">C09DX — Angiotensin II receptor blockers (ARBs), other combinations</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09DX01">C09DX01 — Valsartan, amlodipine and hydrochlorothiazide</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DX">C09DX — Angiotensin II receptor blockers (ARBs), other combinations</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09DB08">C09DB08 — Valsartan and lercanidipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DB">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09DB01">C09DB01 — Valsartan and amlodipine</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DB">C09DB — Angiotensin II receptor blockers (ARBs) and calcium channel blockers</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul><a data-no-turbolink="true" href="/atc/C09DX04">C09DX04 — Valsartan and sacubitril</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="/atc/C09DX">C09DX — Angiotensin II receptor blockers (ARBs), other combinations</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09D">C09D — ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS</a></li>
                <li><a data-no-turbolink="true" href="/atc/C09">C09 — AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM</a></li>
                <li><a data-no-turbolink="true" href="/atc/C">C — CARDIOVASCULAR SYSTEM</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">AHFS Codes</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>24:32.08 — Angiotensin Ii Receptor Antagonists</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">FDA label</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="label-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/fda_labels/DB00177.pdf?1265922797">Download</a> <span className="text-muted">(237 KB) </span></div>
            </dd><dt className="col-md-2 col-sm-4">MSDS</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="msds-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/msds/DB00177.pdf?1548367103">Download</a> <span className="text-muted">(24 KB) </span></div>
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
                          <td>Not Yet Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="/indications/DBCOND0087691">CKD</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0087691&phase=0&purpose=treatment&status=not_yet_recruiting">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Recruiting</td>
                          <td>Basic Science</td>
                          <td><a href="/indications/DBCOND0069466">Thyroid Cancer, Medullary</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0069466&phase=0&purpose=basic_science&status=recruiting">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="/indications/DBCOND0028122">Healthy Volunteers</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0028122&phase=1&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="/indications/DBCOND0028122">Healthy Volunteers</a> <span>/</span> <a href="/indications/DBCOND0046691">Pharmacokinetics of Valsartan</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0028122%2CDBCOND0046691&phase=1&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="/indications/DBCOND0040789">High Blood Pressure (Hypertension)</a> <span>/</span> <a href="/indications/DBCOND0031916">Hyperlipidemias</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0040789%2CDBCOND0031916&phase=1&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="/indications/DBCOND0029752">Type 2 Diabetes Mellitus</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0029752&phase=1&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="/indications/DBCOND0081479">Administration, Oral</a> <span>/</span> <a href="/indications/DBCOND0061259">Magnetic Resonance Imaging (MRI)</a> <span>/</span> <a href="/indications/DBCOND0031919">Pharmacokinetics</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0081479%2CDBCOND0061259%2CDBCOND0031919&phase=1&purpose=basic_science&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="/indications/DBCOND0048800">Chronic Kidney Disease (CKD)</a> <span>/</span> <a href="/indications/DBCOND0019025">Glomerulonephritis minimal lesion</a> <span>/</span> <a href="/indications/DBCOND0040789">High Blood Pressure (Hypertension)</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0048800%2CDBCOND0019025%2CDBCOND0040789&phase=1&purpose=basic_science&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="/indications/DBCOND0050009">Healthy Male Subjects</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0050009&phase=1&purpose=basic_science&status=completed">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Other</td>
                          <td><a href="/indications/DBCOND0040789">High Blood Pressure (Hypertension)</a> <span>/</span> <a href="/indications/DBCOND0031916">Hyperlipidemias</a></td>
                          <td><a href="/drugs/DB00177/clinical_trials?conditions=DBCOND0040789%2CDBCOND0031916&phase=1&purpose=other&status=completed">1</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 164 entries</div>
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
                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={7} tabIndex={0} className="page-link">17</a></li>
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
                  <li>Novartis pharmaceuticals corp</li>
                  <li>Novartis Corporation</li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Packagers</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="packager-columns">
                <ul className="list-unstyled table-list">
                  <li>Advanced Pharmaceutical Services Inc.</li>
                  <li>AQ Pharmaceuticals Inc.</li>
                  <li>A-S Medication Solutions LLC</li>
                  <li>Bryant Ranch Prepack</li>
                  <li>Cardinal Health</li>
                  <li>Dispensing Solutions</li>
                  <li>Diversified Healthcare Services Inc.</li>
                  <li>Doctor Reddys Laboratories Ltd.</li>
                  <li>Heartland Repack Services LLC</li>
                  <li>Lake Erie Medical and Surgical Supply</li>
                  <li>Murfreesboro Pharmaceutical Nursing Supply</li>
                  <li>Novartis AG</li>
                  <li>Nucare Pharmaceuticals Inc.</li>
                  <li>PD-Rx Pharmaceuticals Inc.</li>
                  <li>Physicians Total Care Inc.</li>
                  <li>Prepackage Specialists</li>
                  <li>Prepak Systems Inc.</li>
                  <li>Promex Medical Inc.</li>
                  <li>Resource Optimization and Innovation LLC</li>
                  <li>Southwood Pharmaceuticals</li>
                  <li>Stat Rx Usa</li>
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
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td />
                        </tr>
                        <tr role="row" className="even">
                          <td>Capsule</td>
                          <td>Oral</td>
                          <td>160 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Capsule</td>
                          <td>Oral</td>
                          <td>80 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>160 mg/1</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>320 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>320 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>40 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>40 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>80 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Capsule</td>
                          <td>Oral</td>
                          <td>160 mg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dosages_info" role="status" aria-live="polite">Showing 1 to 10 of 20 entries</div>
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
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Unit description: activate to sort column ascending" style={{width: '460.203px'}}>Unit description</th>
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Cost: activate to sort column ascending" style={{width: '130.203px'}}>Cost</th>
                          <th className="sorting" tabIndex={0} aria-controls="prices" rowSpan={1} colSpan={1} aria-label="Unit: activate to sort column ascending" style={{width: '127.203px'}}>Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td>Diovan hct 320-25 mg tablet</td>
                          <td>4.63USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Diovan hct 320-12.5 mg tablet</td>
                          <td>4.1USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Diovan hct 160-25 mg tablet</td>
                          <td>3.66USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Diovan hct 160-12.5 mg tablet</td>
                          <td>3.27USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Diovan 320 mg tablet</td>
                          <td>3.17USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Diovan hct 80-12.5 mg tablet</td>
                          <td>3.0USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Diovan 160 mg tablet</td>
                          <td>2.42USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Diovan 80 mg tablet</td>
                          <td>2.33USD </td>
                          <td>tablet</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Diovan 40 mg tablet</td>
                          <td>2.32USD </td>
                          <td>tablet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="prices_info" role="status" aria-live="polite">Showing 1 to 9 of 9 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="prices_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="prices_previous"><a href="#" aria-controls="prices" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="prices" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item next disabled" id="prices_next"><a href="#" aria-controls="prices" data-dt-idx={2} tabIndex={0} className="page-link">›</a></li>
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
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US5399578">US5399578</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>1995-03-21</td>
                          <td>2012-03-21</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/CA2259148">CA2259148</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2009-09-29</td>
                          <td>2017-06-18</td>
                          <td className="country"><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/CA2036427">CA2036427</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>1998-12-29</td>
                          <td>2011-02-15</td>
                          <td className="country"><span className="country"><span hidden="hidden">Canada</span><img src="/assets/countries/canada-64ffe8c476c257597eca3ded684da90a2b1a500bd6389ebd2ca5e213b1cc7574.svg" alt="Canada" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US6294197">US6294197</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>2001-09-25</td>
                          <td>2017-12-18</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US5559111">US5559111</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>1996-09-24</td>
                          <td>2019-01-21</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US6395728">US6395728</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2002-05-28</td>
                          <td>2019-07-08</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US5972990">US5972990</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>1999-10-26</td>
                          <td>2017-04-26</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US8168616">US8168616</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2012-05-01</td>
                          <td>2026-07-03</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US8101599">US8101599</a></td>
                          <td><span className="badge badge-secondary badge-pill ">No</span></td>
                          <td>2012-01-24</td>
                          <td>2023-05-16</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><a target="_blank" rel="noopener" href="https://patents.google.com/patent/US8475839">US8475839</a></td>
                          <td><span className="badge badge-primary badge-pill ">Yes</span></td>
                          <td>2013-07-02</td>
                          <td>2023-11-16</td>
                          <td className="country"><span className="country"><span hidden="hidden">US</span><img src="/assets/countries/us-827348b033d3b349931e036455f341029a75d10b2533057ebfbfdb0ca0e45c47.svg" alt="Us" /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="patents_info" role="status" aria-live="polite">Showing 1 to 10 of 18 entries</div>
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
              <div className="locked-fields-holder" data-for="#patents">
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
                    <td>116-117 °C</td>
                    <td>https://www.chemicalbook.com/ChemicalProductProperty_US_CB6182539.aspx</td>
                  </tr>
                  <tr>
                    <td>boiling point (°C)</td>
                    <td>83-88</td>
                    <td>https://www.trc-canada.com/product-detail/?V095750</td>
                  </tr>
                  <tr>
                    <td>water solubility</td>
                    <td>soluble in ethanol, DMSO, and dimethyl formamide at 30 mg/mL</td>
                    <td>https://www.caymanchem.com/pdfs/14178.pdf</td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>1.499</td>
                    <td>http://www.japsonline.com/admin/php/uploads/54_pdf.pdf</td>
                  </tr>
                  <tr>
                    <td>pKa</td>
                    <td>4.73</td>
                    <td>http://www.japsonline.com/admin/php/uploads/54_pdf.pdf</td>
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
                    <td>0.0234 mg/mL</td>
                    <td><a target="_blank" rel="noopener" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>3.68</td>
                    <td><a target="_blank" rel="noopener" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>5.27</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#logp_logd">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>logS</td>
                    <td>-4.3</td>
                    <td><a target="_blank" rel="noopener" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Acidic)</td>
                    <td>4.37</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Basic)</td>
                    <td>-0.11</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Physiological Charge</td>
                    <td>-1</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Acceptor Count</td>
                    <td>6</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Donor Count</td>
                    <td>2</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polar Surface Area</td>
                    <td>112.07 Å<sup>2</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topolgical_surface">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Rotatable Bond Count</td>
                    <td>10</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topology_analysis">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Refractivity</td>
                    <td>134.77 m<sup>3</sup>·mol<sup>-1</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#refractivity">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polarizability</td>
                    <td>47.27 Å<sup>3</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/molecular-modelling/#polarization">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Number of Rings</td>
                    <td>3</td>
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
                    <td>0.9956</td>
                  </tr>
                  <tr>
                    <td>Blood Brain Barrier</td>
                    <td>-</td>
                    <td>0.8032</td>
                  </tr>
                  <tr>
                    <td>Caco-2 permeable</td>
                    <td>-</td>
                    <td>0.6912</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein substrate</td>
                    <td>Substrate</td>
                    <td>0.685</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor I</td>
                    <td>Non-inhibitor</td>
                    <td>0.5548</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor II</td>
                    <td>Non-inhibitor</td>
                    <td>0.5966</td>
                  </tr>
                  <tr>
                    <td>Renal organic cation transporter</td>
                    <td>Non-inhibitor</td>
                    <td>0.8646</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.7722</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.9116</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.5073</td>
                  </tr>
                  <tr>
                    <td>CYP450 1A2 substrate</td>
                    <td>Non-inhibitor</td>
                    <td>0.8707</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.5398</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.8816</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C19 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.5539</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.5521</td>
                  </tr>
                  <tr>
                    <td>CYP450 inhibitory promiscuity</td>
                    <td>High CYP Inhibitory Promiscuity</td>
                    <td>0.5618</td>
                  </tr>
                  <tr>
                    <td>Ames test</td>
                    <td>Non AMES toxic</td>
                    <td>0.6384</td>
                  </tr>
                  <tr>
                    <td>Carcinogenicity</td>
                    <td>Non-carcinogens</td>
                    <td>0.645</td>
                  </tr>
                  <tr>
                    <td>Biodegradation</td>
                    <td>Not ready biodegradable</td>
                    <td>1.0</td>
                  </tr>
                  <tr>
                    <td>Rat acute toxicity</td>
                    <td>2.6518 LD50, mol/kg </td>
                    <td><span className="not-available">Not applicable</span></td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor I)</td>
                    <td>Weak inhibitor</td>
                    <td>0.9766</td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor II)</td>
                    <td>Non-inhibitor</td>
                    <td>0.7388</td>
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
                    <td><a href="/spectra/c_ms/17152">Predicted GC-MS Spectrum - GC-MS</a></td>
                    <td>Predicted GC-MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/253782">Predicted MS/MS Spectrum - 10V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/253783">Predicted MS/MS Spectrum - 20V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/253784">Predicted MS/MS Spectrum - 40V, Positive (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/273723">Predicted MS/MS Spectrum - 10V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/273724">Predicted MS/MS Spectrum - 20V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/273725">Predicted MS/MS Spectrum - 40V, Negative (Annotated)</a></td>
                    <td>Predicted LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/374280">LC-MS/MS Spectrum - LC-ESI-qTof , Positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/374281">LC-MS/MS Spectrum - LC-ESI-qTof , Positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><span className="not-available">Not Available</span></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435392">LC-MS/MS Spectrum - LC-ESI-QTOF , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-001i-0000900000-45397dbc5403f1111d85">splash10-001i-0000900000-45397dbc5403f1111d85</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435393">LC-MS/MS Spectrum - LC-ESI-QTOF , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-003r-0303900000-1056988fef13dc9becc8">splash10-003r-0303900000-1056988fef13dc9becc8</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435394">LC-MS/MS Spectrum - LC-ESI-QTOF , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-65d8dfbf9280fcea77fb">splash10-004i-0900000000-65d8dfbf9280fcea77fb</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435395">LC-MS/MS Spectrum - LC-ESI-QTOF , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-77a9588a3e936c9d2e28">splash10-004i-0900000000-77a9588a3e936c9d2e28</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435878">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0009000000-160f82ad0952fc9b3350">splash10-0udi-0009000000-160f82ad0952fc9b3350</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435879">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-001i-0000900000-d7bf9d8976f47e44ab4a">splash10-001i-0000900000-d7bf9d8976f47e44ab4a</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435880">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0fb9-0915000000-1f5a4e134cd8450810e7">splash10-0fb9-0915000000-1f5a4e134cd8450810e7</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435881">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-19095db3835430e9fe16">splash10-004i-0900000000-19095db3835430e9fe16</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435882">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-00e9b9924b37c4db7a8d">splash10-004i-0900000000-00e9b9924b37c4db7a8d</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435883">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-fb8741bb91ee87d8245e">splash10-004i-0900000000-fb8741bb91ee87d8245e</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435884">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-001i-0000900000-be5ab1c8cde8851235e3">splash10-001i-0000900000-be5ab1c8cde8851235e3</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435885">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0fb9-0915000000-08501c181e1066f2aa0a">splash10-0fb9-0915000000-08501c181e1066f2aa0a</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435886">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-6cabcfa5948837eddb2e">splash10-004i-0900000000-6cabcfa5948837eddb2e</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435887">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0900000000-d0aedd0bab06b374571a">splash10-004i-0900000000-d0aedd0bab06b374571a</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435888">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-0901000000-a4572421f0a393f299a1">splash10-004i-0901000000-a4572421f0a393f299a1</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/435889">LC-MS/MS Spectrum - LC-ESI-ITFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0udi-0009000000-0f743f9e78dce83f2414">splash10-0udi-0009000000-0f743f9e78dce83f2414</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440628">LC-MS/MS Spectrum - LC-ESI-QFT , negative</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-003r-0912600000-feeef5a05d8ef569460d">splash10-003r-0912600000-feeef5a05d8ef569460d</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440901">LC-MS/MS Spectrum - LC-ESI-QTOF , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-000i-0022900000-07c84eac301d580a8bea">splash10-000i-0022900000-07c84eac301d580a8bea</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440902">LC-MS/MS Spectrum - LC-ESI-QTOF , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0190000000-8a48f701b19b54e7ebf9">splash10-0a4u-0190000000-8a48f701b19b54e7ebf9</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440903">LC-MS/MS Spectrum - LC-ESI-QTOF , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0190000000-34257438319cae238dcb">splash10-0a4u-0190000000-34257438319cae238dcb</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440904">LC-MS/MS Spectrum - LC-ESI-QTOF , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0590000000-403ef14fce06289de8e7">splash10-0a4i-0590000000-403ef14fce06289de8e7</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440905">LC-MS/MS Spectrum - LC-ESI-QTOF , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a59-0960000000-d4e79af5b474f613f6e9">splash10-0a59-0960000000-d4e79af5b474f613f6e9</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/440906">LC-MS/MS Spectrum - LC-ESI-QTOF , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-052u-0093000000-ee050d1727838e542ce7">splash10-052u-0093000000-ee050d1727838e542ce7</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442519">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-066r-0013900000-27f31e9591de9c0d036b">splash10-066r-0013900000-27f31e9591de9c0d036b</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442520">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0096600000-2c9e5fef1cb7e2e64e67">splash10-0a4u-0096600000-2c9e5fef1cb7e2e64e67</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442521">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0091000000-0bff344a92ee0cc41b8f">splash10-0a4u-0091000000-0bff344a92ee0cc41b8f</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442522">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0390000000-fa2f74ef15c1a6b93838">splash10-0a4i-0390000000-fa2f74ef15c1a6b93838</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442523">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a59-0960000000-ca847cc390cd0e68c6b6">splash10-0a59-0960000000-ca847cc390cd0e68c6b6</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442524">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0pec-0920000000-5c29e64b37c8cde1c7ba">splash10-0pec-0920000000-5c29e64b37c8cde1c7ba</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442525">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0ziu-0910000000-08f3eecf83a71f4fb485">splash10-0ziu-0910000000-08f3eecf83a71f4fb485</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442526">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0096600000-598ea56da3433ecd4bab">splash10-0a4u-0096600000-598ea56da3433ecd4bab</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442527">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0091000000-0aaf7a6567cb3745cb23">splash10-0a4u-0091000000-0aaf7a6567cb3745cb23</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442528">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0490000000-4b8d8ce6d0a486599b71">splash10-0a4i-0490000000-4b8d8ce6d0a486599b71</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442529">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a59-0950000000-6cd1be141d3f05844a75">splash10-0a59-0950000000-6cd1be141d3f05844a75</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442530">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0pec-0920000000-053a50818908a33699b3">splash10-0pec-0920000000-053a50818908a33699b3</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442531">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0ziu-0910000000-c10b0879c877503826c5">splash10-0ziu-0910000000-c10b0879c877503826c5</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/442532">LC-MS/MS Spectrum - LC-ESI-ITFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-066r-0013900000-af025bf00303b40b6d48">splash10-066r-0013900000-af025bf00303b40b6d48</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/450763">MS/MS Spectrum - , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0122900000-e2d5ae1b4433254a8ebe">splash10-0a4i-0122900000-e2d5ae1b4433254a8ebe</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/450764">MS/MS Spectrum - , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-1492000000-bc19c44b1bd382b3180f">splash10-0a4u-1492000000-bc19c44b1bd382b3180f</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/451109">MS/MS Spectrum - , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4i-0012900000-1b87098801f65211057a">splash10-0a4i-0012900000-1b87098801f65211057a</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/451110">MS/MS Spectrum - , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0392000000-5823d4f7c41e4fd6208b">splash10-0a4u-0392000000-5823d4f7c41e4fd6208b</a></td>
                  </tr>
                  <tr>
                    <td><a href="/spectra/ms_ms/452403">LC-MS/MS Spectrum - LC-ESI-QFT , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-0a4u-0391100000-8997765a9ed3c9424c07">splash10-0a4u-0391100000-8997765a9ed3c9424c07</a></td>
                  </tr>
                </tbody>
              </table>
            </dd>
          </dl>
          <h2 id="taxonomy" className="section-header">Taxonomy</h2>
          <dl><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">This compound belongs to the class of organic compounds known as valine and derivatives. These are compounds containing valine or a derivative thereof resulting from reaction of valine at the amino group or the carboxy group, or from the replacement of any hydrogen of glycine by a heteroatom.</dd><dt className="col-md-2 col-sm-4">Kingdom</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000000" data-original-title="Compounds that contain at least one carbon atom, excluding isocyanide/cyanide and their non-hydrocarbyl derivatives, thiophosgene, carbon diselenide, carbon monosulfide, carbon disulfide, carbon subsulfide, carbon monoxide, carbon dioxide, Carbon suboxide, and dicarbon monoxide.">Organic compounds</a></dd><dt className="col-md-2 col-sm-4">Super Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000264" data-original-title="Compounds an organic acid or a derivative thereof.">Organic acids and derivatives</a></dd><dt className="col-md-2 col-sm-4">Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000265" data-original-title="Compounds containing a carboxylic acid group with the formula -C(=O)OH or a derivative thereof.">Carboxylic acids and derivatives</a></dd><dt className="col-md-2 col-sm-4">Sub Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000013" data-original-title="Organic compounds containing an amino acid or a peptide backbone, or derivatives thereof.">Amino acids, peptides, and analogues</a></dd><dt className="col-md-2 col-sm-4">Direct Parent</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004310" data-original-title="Compounds containing valine or a derivative thereof resulting from reaction of valine at the amino group or the carboxy group, or from the replacement of any hydrogen of glycine by a heteroatom.">Valine and derivatives</a></dd><dt className="col-md-2 col-sm-4">Alternative Parents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004148" data-original-title="N-acylated alpha amino acids which have the L-configuration of the alpha-carbon atom.">N-acyl-L-alpha-amino acids</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000041" data-original-title="Organic compounds containing to benzene rings linked together by a C-C bond.">Biphenyls and derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000306" data-original-title="Compounds containing a phenyltetrazole skeleton, which consists of a tetrazole bound to a phenyl group.">Phenyltetrazoles and derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001096" data-original-title="Compounds containing a fatty acid moiety linked to an amine group through an ester linkage.">N-acyl amines</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001664" data-original-title="Compounds containing an amide derivative of carboxylic acid, with the general structure RN(R1)C(R2)=O (R1-R2 any atom but H).">Tertiary carboxylic acid amides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004144" data-original-title="Compounds containing an aromatic ring where a carbon atom is linked to an hetero atom.">Heteroaromatic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001137" data-original-title="Carboxylic acids containing exactly one carboxyl groups.">Monocarboxylic acids and derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001205" data-original-title="Compounds containing a carboxylic acid group with the formula -C(=O)OH.">Carboxylic acids</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004139" data-original-title="Organic compounds containing an heterocycle with at least one nitrogen atom and one carbon atom linked to each other.">Azacyclic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004557" data-original-title="Compounds containing a bond between carbon a pnictogen atom. Pnictogens are p-block element atoms that are in the group 15 of the periodic table.">Organopnictogen compounds</a></span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000278" data-original-title="Organic compounds containing a nitrogen atom.">Organonitrogen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003940" data-original-title="Organic compounds containing an oxide group.">Organic oxides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004150" data-original-title="Derivatives of hydrocarbons obtained by substituting one or more carbon atoms by an heteroatom. They contain at least one carbon atom and heteroatom.">Hydrocarbon derivatives</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001831" data-original-title="Organic compounds containing a carbonyl group, with the general structure RC(=O)R', where R=organyl, R'=H, N, O, organyl group or halide group.">Carbonyl compounds</a></span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 4 more</a>
            </dd><dt className="col-md-2 col-sm-4">Substituents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">N-acyl-alpha-amino acid</span><span className="list-separator"> / </span><span className="separated-list-item">Valine or derivatives</span><span className="list-separator"> / </span><span className="separated-list-item">N-acyl-alpha amino acid or derivatives</span><span className="list-separator"> / </span><span className="separated-list-item">N-acyl-l-alpha-amino acid</span><span className="list-separator"> / </span><span className="separated-list-item">Biphenyl</span><span className="list-separator"> / </span><span className="separated-list-item">Phenyltetrazole</span><span className="list-separator"> / </span><span className="separated-list-item">Monocyclic benzene moiety</span><span className="list-separator"> / </span><span className="separated-list-item">N-acyl-amine</span><span className="list-separator"> / </span><span className="separated-list-item">Benzenoid</span><span className="list-separator"> / </span><span className="separated-list-item">Azole</span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Heteroaromatic compound</span><span className="list-separator"> / </span><span className="separated-list-item">Tertiary carboxylic acid amide</span><span className="list-separator"> / </span><span className="separated-list-item">Tetrazole</span><span className="list-separator"> / </span><span className="separated-list-item">Carboxamide group</span><span className="list-separator"> / </span><span className="separated-list-item">Monocarboxylic acid or derivatives</span><span className="list-separator"> / </span><span className="separated-list-item">Carboxylic acid</span><span className="list-separator"> / </span><span className="separated-list-item">Azacycle</span><span className="list-separator"> / </span><span className="separated-list-item">Organoheterocyclic compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organooxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organonitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Hydrocarbon derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxide</span><span className="list-separator"> / </span><span className="separated-list-item">Organopnictogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Carbonyl group</span><span className="list-separator"> / </span><span className="separated-list-item">Organic nitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Aromatic heteromonocyclic compound</span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 17 more</a>
            </dd><dt className="col-md-2 col-sm-4">Molecular Framework</dt>
            <dd className="col-md-10 col-sm-8">Aromatic heteromonocyclic compounds</dd><dt className="col-md-2 col-sm-4">External Descriptors</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item">monocarboxylic acid, monocarboxylic acid amide, biphenylyltetrazole (<a target="_blank" rel="noopener" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:9927">CHEBI:9927</a>) </span></span>
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
                                <td>Ki (nM)</td>
                                <td>4700</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/12773029">12773029</a></span></span>
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
                      <li id="reference-A4229">Azizi M, Menard J, Bissery A, Guyenne TT, Bura-Riviere A, Vaidyanathan S, Camisasca RP: Pharmacologic demonstration of the synergistic effects of a combination of the renin inhibitor aliskiren and the AT1 receptor antagonist valsartan on the angiotensin II-renin feedback interruption. J Am Soc Nephrol. 2004 Dec;15(12):3126-33. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/15579516">PubMed:15579516</a>] </li>
                      <li id="reference-A4230">Criscione L, de Gasparo M, Buhlmayer P, Whitebread S, Ramjoue HP, Wood J: Pharmacological profile of valsartan: a potent, orally active, nonpeptide antagonist of the angiotensin II AT1-receptor subtype. Br J Pharmacol. 1993 Oct;110(2):761-71. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/8242249">PubMed:8242249</a>] </li>
                      <li id="reference-A4231">Shargorodsky M, Leibovitz E, Lubimov L, Gavish D, Zimlichman R: Prolonged treatment with the AT1 receptor blocker, valsartan, increases small and large artery compliance in uncomplicated essential hypertension. Am J Hypertens. 2002 Dec;15(12):1087-91. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/12460705">PubMed:12460705</a>] </li>
                      <li id="reference-A4232">de Gasparo M, Whitebread S: Binding of valsartan to mammalian angiotensin AT1 receptors. Regul Pept. 1995 Nov 10;59(3):303-11. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/8577935">PubMed:8577935</a>] </li>
                      <li id="reference-A4233">Siragy HM, El-Kersh MA, De Gasparo M, Webb RL, Carey RM: Differences in AT2 -receptor stimulation between AT1 -receptor blockers valsartan and losartan quantified by renal interstitial fluid cGMP. J Hypertens. 2002 Jun;20(6):1157-63. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/12023686">PubMed:12023686</a>] </li>
                      <li id="reference-T11">Stanfield, Cindy L.;Germann, William J. (2009). Principles of Human Physiology (3rd ed.). Benjamin-Cummings Publishing Company. [<a target="_blank" rel="noopener" href="http://www.google.com/search?tbo=p&tbm=bks&q=978-0321556660">ISBN:978-0321556660</a>] </li>
                      <li id="reference-F3151">Valsartan HCT monograph [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/151/original/Valsartan_HCT_TAB_Monograph.pdf?1548441492">File</a>] </li>
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
                          <div className="badge badge-pill badge-action">Inhibitor</div>
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
                      <li id="reference-A15583">Nakashima A, Kawashita H, Masuda N, Saxer C, Niina M, Nagae Y, Iwasaki K: Identification of cytochrome P450 forms involved in the 4-hydroxylation of valsartan, a potent and specific angiotensin II receptor antagonist, in human liver microsomes. Xenobiotica. 2005 Jun;35(6):589-602. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/16192110">PubMed:16192110</a>] </li>
                      <li id="reference-A39430">Kamiyama E, Yoshigae Y, Kasuya A, Takei M, Kurihara A, Ikeda T: Inhibitory effects of angiotensin receptor blockers on CYP2C9 activity in human liver microsomes. Drug Metab Pharmacokinet. 2007 Aug;22(4):267-75. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/17827781">PubMed:17827781</a>] </li>
                      <li id="reference-A39431">Cabaleiro T, Roman M, Ochoa D, Talegon M, Prieto-Perez R, Wojnicz A, Lopez-Rodriguez R, Novalbos J, Abad-Santos F: Evaluation of the relationship between sex, polymorphisms in CYP2C8 and CYP2C9, and pharmacokinetics of angiotensin receptor blockers. Drug Metab Dispos. 2013 Jan;41(1):224-9. doi: 10.1124/dmd.112.046292. Epub 2012 Nov 1. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/23118328">PubMed:23118328</a>] </li>
                      <li id="reference-A39432">Guo G, Zhao Y, Chai J, Hao D, Song F: Effectiveness evaluation of cardiovascular drugs based on CYP2C9 target protein. Pak J Pharm Sci. 2015 Jul;28(4 Suppl):1545-9. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/26431654">PubMed:26431654</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bond-list-container transporters">
            <h3 id="transporters">Transporters</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0003659">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/Q9NPD5">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>1. <a href="/polypeptides/Q9NPD5">Solute carrier organic anion transporter family member 1B3</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/Q9NPD5">Q9NPD5</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier organic anion transporter family member 1B3</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">77402.175 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16475">Poirier A, Cascais AC, Funk C, Lave T: Prediction of pharmacokinetic profile of valsartan in human based on in vitro uptake transport data. J Pharmacokinet Pharmacodyn. 2009 Dec;36(6):585-611. doi: 10.1007/s10928-009-9139-3. Epub 2009 Nov 20. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19936896">PubMed:19936896</a>] </li>
                      <li id="reference-A16476">Poirier A, Cascais AC, Funk C, Lave T: Prediction of pharmacokinetic profile of valsartan in humans based on in vitro uptake-transport data. Chem Biodivers. 2009 Nov;6(11):1975-87. doi: 10.1002/cbdv.200900116. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19937834">PubMed:19937834</a>] </li>
                      <li id="reference-A174145">Hanna I, Alexander N, Crouthamel MH, Davis J, Natrillo A, Tran P, Vapurcuyan A, Zhu B: Transport properties of valsartan, sacubitril and its active metabolite (LBQ657) as determinants of disposition. Xenobiotica. 2018 Mar;48(3):300-313. doi: 10.1080/00498254.2017.1295171. Epub 2017 Mar 10. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/28281384">PubMed:28281384</a>] </li>
                      <li id="reference-A174148">Alam K, Crowe A, Wang X, Zhang P, Ding K, Li L, Yue W: Regulation of Organic Anion Transporting Polypeptides (OATP) 1B1- and OATP1B3-Mediated Transport: An Updated Review in the Context of OATP-Mediated Drug-Drug Interactions. Int J Mol Sci. 2018 Mar 14;19(3). pii: ijms19030855. doi: 10.3390/ijms19030855. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/29538325">PubMed:29538325</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0001004">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/Q9Y6L6">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>2. <a href="/polypeptides/Q9Y6L6">Solute carrier organic anion transporter family member 1B1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Sodium-independent organic anion transmembrane transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Mediates the Na(+)-independent uptake of organic anions such as pravastatin, taurocholate, methotrexate, dehydroepiandrosterone sulfate, 17-beta-glucuronosyl estradiol, estrone sulfate, prostagland...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLCO1B1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/Q9Y6L6">Q9Y6L6</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Solute carrier organic anion transporter family member 1B1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">76447.99 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A16475">Poirier A, Cascais AC, Funk C, Lave T: Prediction of pharmacokinetic profile of valsartan in human based on in vitro uptake transport data. J Pharmacokinet Pharmacodyn. 2009 Dec;36(6):585-611. doi: 10.1007/s10928-009-9139-3. Epub 2009 Nov 20. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19936896">PubMed:19936896</a>] </li>
                      <li id="reference-A16476">Poirier A, Cascais AC, Funk C, Lave T: Prediction of pharmacokinetic profile of valsartan in humans based on in vitro uptake-transport data. Chem Biodivers. 2009 Nov;6(11):1975-87. doi: 10.1002/cbdv.200900116. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/19937834">PubMed:19937834</a>] </li>
                      <li id="reference-A34540">Karlgren M, Ahlin G, Bergstrom CA, Svensson R, Palm J, Artursson P: In vitro and in silico strategies to identify OATP1B1 inhibitors and predict clinical drug-drug interactions. Pharm Res. 2012 Feb;29(2):411-26. doi: 10.1007/s11095-011-0564-9. Epub 2011 Aug 23. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/21861202">PubMed:21861202</a>] </li>
                      <li id="reference-A174148">Alam K, Crowe A, Wang X, Zhang P, Ding K, Li L, Yue W: Regulation of Organic Anion Transporting Polypeptides (OATP) 1B1- and OATP1B3-Mediated Transport: An Updated Review in the Context of OATP-Mediated Drug-Drug Interactions. Int J Mol Sci. 2018 Mar 14;19(3). pii: ijms19030855. doi: 10.3390/ijms19030855. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/29538325">PubMed:29538325</a>] </li>
                      <li id="reference-A174145">Hanna I, Alexander N, Crouthamel MH, Davis J, Natrillo A, Tran P, Vapurcuyan A, Zhu B: Transport properties of valsartan, sacubitril and its active metabolite (LBQ657) as determinants of disposition. Xenobiotica. 2018 Mar;48(3):300-313. doi: 10.1080/00498254.2017.1295171. Epub 2017 Mar 10. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/28281384">PubMed:28281384</a>] </li>
                      <li id="reference-F3133">Valsartan Canadian Monograph [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/133/original/Valsartan_HCT_TAB_Monograph.pdf?1548371352">File</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0001069">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="/polypeptides/Q92887">
                    <div className="drugbank-icon icon-expand">
                      <svg className="icon" role="img" title="expand">
                        <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                      </svg>
                    </div> Details</a><strong>3. <a href="/polypeptides/Q92887">Canalicular multispecific organic anion transporter 1</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Organic anion transmembrane transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Mediates hepatobiliary excretion of numerous organic anions. May function as a cellular cisplatin transporter.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">ABCC2</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener" href="http://www.uniprot.org/uniprot/Q92887">Q92887</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Canalicular multispecific organic anion transporter 1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">174205.64 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A174166">Yamashiro W, Maeda K, Hirouchi M, Adachi Y, Hu Z, Sugiyama Y: Involvement of transporters in the hepatic uptake and biliary excretion of valsartan, a selective antagonist of the angiotensin II AT1-receptor, in humans. Drug Metab Dispos. 2006 Jul;34(7):1247-54. doi: 10.1124/dmd.105.008938. Epub 2006 Apr 19. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/16624871">PubMed:16624871</a>] </li>
                      <li id="reference-A174145">Hanna I, Alexander N, Crouthamel MH, Davis J, Natrillo A, Tran P, Vapurcuyan A, Zhu B: Transport properties of valsartan, sacubitril and its active metabolite (LBQ657) as determinants of disposition. Xenobiotica. 2018 Mar;48(3):300-313. doi: 10.1080/00498254.2017.1295171. Epub 2017 Mar 10. [<a target="_blank" rel="noopener" href="http://www.ncbi.nlm.nih.gov/pubmed/28281384">PubMed:28281384</a>] </li>
                      <li id="reference-F3139">Valsartan HCT Canadian Monograph [<a target="_blank" href="//s3-us-west-2.amazonaws.com/drugbank/cite_this/attachments/files/000/003/139/original/Valsartan_HCT_TAB_Monograph.pdf?1548434624">File</a>] </li>
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
          <p className="bt-2" id="drug-meta">Drug created on June 13, 2005 07:24 / Updated on July 11, 2019 00:49 </p>
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

export default Valsartan;
