import React from 'react';
import './Escitalopram.scss';
import Navigation from '../../Components/Navigation/Navigation' ;

class Escitalopram extends React.Component {
  render() {
    return (
      <div>
      <div className="content-container">
        <div className="content-header d-sm-flex align-items-center">
          <h1 className="align-self-center mr-4">Escitalopram</h1>
          <div className="page-actions justify-content-sm-end mt-2 mt-sm-0">
            <div className="bond-links"><a className="btn bond-link targets" href="#targets">Targets (6)</a><a className="btn bond-link enzymes" href="#enzymes">Enzymes (3)</a></div>
          </div>
        </div>
        <div className="card-content px-md-4 px-sm-2 pb-md-4 pb-sm-2">
          <h2 id="identification" className="section-header">Identification</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">Name</dt>
            <dd className="col-md-10 col-sm-8">Escitalopram</dd>
            <dt className="col-md-2 col-sm-4">Accession Number</dt>
            <dd className="col-md-10 col-sm-8 drug-wrapper">
              <div className="ace-structure"><p> Drug Bank </p> DB01175&nbsp; (APRD00683)</div>
              <div className="ace-structure"><p> PubChem </p> 146570 </div>
            </dd>
            <dt className="col-md-2 col-sm-4">Type</dt>
            <dd className="col-md-10 col-sm-8">Small Molecule</dd><dt className="col-md-2 col-sm-4">Groups</dt>
            <dd className="col-md-10 col-sm-8">Approved, Investigational</dd><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Escitalopram, the <i>S</i>-enantiomer of citalopram, belongs to a class of antidepressant agents known as selective serotonin-reuptake inhibitors (SSRIs). Despite distinct structural differences between compounds in this class, SSRIs possess similar pharmacological activity. As with other antidepressant agents, several weeks of therapy may be required before a clinical effect is seen. SSRIs are potent inhibitors of neuronal serotonin reuptake. They have little to no effect on norepinephrine or dopamine reuptake and do not antagonize α- or β-adrenergic, dopamine D<sub>2</sub> or histamine H<sub>1</sub> receptors. During acute use, SSRIs block serotonin reuptake and increase serotonin stimulation of somatodendritic 5-HT<sub>1A</sub> and terminal autoreceptors. Chronic use leads to desensitization of somatodendritic 5-HT<sub>1A</sub> and terminal autoreceptors. The overall clinical effect of increased mood and decreased anxiety is thought to be due to adaptive changes in neuronal function that leads to enhanced serotonergic neurotransmission. Side effects include dry mouth, nausea, dizziness, drowsiness, sexual dysfunction and headache. Side effects generally occur within the first two weeks of therapy and are usually less severe and frequent than those observed with tricyclic antidepressants. Escitalopram may be used to treat major depressive disorder (MDD) and generalized anxiety disorder (GAD).</p>
            </dd>
            <dt className="col-md-2 col-sm-4">2D Structure</dt>
            <dd className="col-md-10 col-sm-8" style={{display:"flex"}}>
              <div className="structure ace-structure">
                <p>Drug bank </p>
                <img src="https://druginteraction.s3.ap-northeast-2.amazonaws.com/escitalopram.png" style={{width: "50%"}} alt=""/>
              </div>
              <div className="structure ace-structure">
                <p>PubChem</p>
                <img src="https://druginteraction.s3.ap-northeast-2.amazonaws.com/esc_pubchem.png" style={{width: "50%"}} alt=""/>
              </div>
            </dd><dt className="col-md-2 col-sm-4">Synonyms</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list-break">
                <li>(+)-Citalopram</li>
                <li>(S)-Citalopram</li>
                <li>Escitalopram
                  <div className="language-flag english" title data-original-title="English" />
                  <div className="language-flag spanish" title data-original-title="Spanish" />
                  <div className="language-flag french" title data-original-title="French" />
                </li>
                <li>Escitalopramum
                  <div className="language-flag latin" title data-original-title="Latin" />
                </li>
                <li>S-(+)-Citalopram</li>
                <li>S(+)-Citalopram</li>
              </ul>
            </dd>
            <dt className="col-md-2 col-sm-4">Categories</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="category-columns">
                <ul className="list-unstyled table-list">
                  <li><a href="javascript:void(0)">Amines</a></li>
                  <li><a href="javascript:void(0)">Anticholinergic Agents</a></li>
                  <li><a href="javascript:void(0)">Antidepressive Agents</a></li>
                  <li><a href="javascript:void(0)">Antidepressive Agents, Second-Generation</a></li>
                  <li><a href="javascript:void(0)">Benzofurans</a></li>
                  <li><a href="javascript:void(0)">Central Nervous System Agents</a></li>
                  <li><a href="javascript:void(0)">Central Nervous System Depressants</a></li>
                  <li><a href="javascript:void(0)">Combined Inhibitors of Serotonin/Norepinephrine Reuptake</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2C19 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2D6 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2D6 Inhibitors (weak)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP2D6 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Inhibitors (weak)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Substrates</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 CYP3A4 Substrates (strength unknown)</a></li>
                  <li><a href="javascript:void(0)">Cytochrome P-450 Enzyme Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Highest Risk QTc-Prolonging Agents</a></li>
                  <li><a href="javascript:void(0)">Hypoglycemia-Associated Agents</a></li>
                  <li><a href="javascript:void(0)">Membrane Transport Modulators</a></li>
                  <li><a href="javascript:void(0)">Muscarinic Antagonists</a></li>
                  <li><a href="javascript:void(0)">Nervous System</a></li>
                  <li><a href="javascript:void(0)">Neurotransmitter Agents</a></li>
                  <li><a href="javascript:void(0)">Neurotransmitter Uptake Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Nitriles</a></li>
                  <li><a href="javascript:void(0)">Propylamines</a></li>
                  <li><a href="javascript:void(0)">Psychoanaleptics</a></li>
                  <li><a href="javascript:void(0)">Psychotropic Drugs</a></li>
                  <li><a href="javascript:void(0)">QTc Prolonging Agents</a></li>
                  <li><a href="javascript:void(0)">Selective Serotonin Reuptake Inhibitors</a></li>
                  <li><a href="javascript:void(0)">Serotonergic Drugs Shown to Increase Risk of Serotonin Syndrome</a></li>
                  <li><a href="javascript:void(0)">Serotonin Agents</a></li>
                  <li><a href="javascript:void(0)">Serotonin Modulators</a></li>
                </ul>
              </div>
            </dd><dt className="col-md-2 col-sm-4">UNII</dt>
            <dd className="col-md-10 col-sm-8"><a target="_blank" rel="noopener noreferrer" href="http://fdasis.nlm.nih.gov/srs/srsdirect.jsp?regno=4O4S742ANY">4O4S742ANY</a></dd><dt className="col-md-2 col-sm-4">CAS number</dt>
            <dd className="col-md-10 col-sm-8">128196-01-0</dd><dt className="col-md-2 col-sm-4">Weight</dt>
            <dd className="col-md-10 col-sm-8">Average: 324.3919
              <br />Monoisotopic: 324.163791509 </dd><dt className="col-md-2 col-sm-4">Chemical Formula</dt>
            <dd className="col-md-10 col-sm-8 drug-wrapper">
              <div className="ace-structure"><p>Drug Bank </p> C<sub>20</sub>H<sub>21</sub>FN<sub>2</sub>O </div>
              <div className="ace-structure"><p>Pubchem </p> C<sub>20</sub>H<sub>21</sub>FN<sub>2</sub>O </div>
            </dd>
            <dt className="col-md-2 col-sm-4">InChI Key</dt>
            <dd className="col-md-10 col-sm-8">WSEQXVZVJXJVFP-FQEVSTJZSA-N</dd><dt className="col-md-2 col-sm-4">InChI</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">InChI=1S/C20H21FN2O/c1-23(2)11-3-10-20(17-5-7-18(21)8-6-17)19-9-4-15(13-22)12-16(19)14-24-20/h4-9,12H,3,10-11,14H2,1-2H3/t20-/m0/s1</div>
            </dd><dt className="col-md-2 col-sm-4">IUPAC Name</dt>
            <dd className="col-md-10 col-sm-8">
              <div className="wrap">(1S)-1-[3-(dimethylamino)propyl]-1-(4-fluorophenyl)-1,3-dihydro-2-benzofuran-5-carbonitrile</div>
            </dd>
            <dt className="col-md-2 col-sm-4" style={{"borderBottom":"0px"}}>SMILES</dt>
            <dd className="col-md-10 col-sm-8 drug-wrapper">
              <div className="ace-structure">
                <p>Drug Bank </p>
                <div className="wrap">CN(C)CCC[C@]1(OCC2=C1C=CC(=C2)C#N)C1=CC=C(F)C=C1</div>
              </div>
            </dd>
            <dt className="col-md-2 col-sm-4"></dt>
            <dd className="col-md-10 col-sm-8 drug-wrapper">
              <div className="ace-structure">
                <p>PubChem</p>
                <div className="wrap">Canonical SMILES: CN(C)CCCC1(C2=C(CO1)C=C(C=C2)C#N)C3=CC=C(C=C3)F </div>
                <div className="wrap">Isomeric SMILES: CN(C)CCC[C@@]1(C2=C(CO1)C=C(C=C2)C#N)C3=CC=C(C=C3)F </div>
              </div>
            </dd>
          </dl>
          <h2 id="pharmacology" className="section-header">Pharmacology</h2>
          <dl><dt className="col-md-2 col-sm-4">Indication</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Labeled indications include major depressive disorder (MDD) and generalized anxiety disorder (GAD). Unlabeled indications include treatment of mild dementia-associated agitation in nonpsychotic patients. </p>
            </dd><dt className="col-md-2 col-sm-4">Associated Conditions</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li><a href="javascript:void(0)">Generalized Anxiety Disorder (GAD)</a></li>
                <li><a href="javascript:void(0)">Major Depressive Disorder (MDD)</a></li>
                <li><a href="javascript:void(0)">Menopausal Hot Flushes</a></li>
                <li><a href="javascript:void(0)">Obsessive Compulsive Disorder (OCD)</a></li>
                <li><a href="javascript:void(0)">Panic Disorders</a></li>
                <li><a href="javascript:void(0)">Post Traumatic Stress Disorder (PTSD)</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Pharmacodynamics</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Escitalopram is one of a class of antidepressants known as selective serotonin reuptake inhibitors (SSRIs). It is used to treat the depression associated with mood disorders. It is also used on occassion in the treatment of body dysmorphic disorder and anxiety. The antidepressant, antiobsessive-compulsive, and antibulimic actions of escitalopram are presumed to be linked to its inhibition of CNS neuronal uptake of serotonin. <i>In vitro</i> studies show that escitalopram is a potent and selective inhibitor of neuronal serotonin reuptake and has only very weak effects on norepinephrine and dopamine neuronal reuptake. Escitalopram has no significant affinity for adrenergic (alpha1, alpha2, beta), cholinergic, GABA, dopaminergic, histaminergic, serotonergic (5HT<sub>1A</sub>, 5HT<sub>1B</sub>, 5HT<sub>2</sub>), or benzodiazepine receptors; antagonism of such receptors has been hypothesized to be associated with various anticholinergic, sedative, and cardiovascular effects for other psychotropic drugs. The chronic administration of escitalopram was found to downregulate brain norepinephrine receptors, as has been observed with other drugs effective in the treatment of major depressive disorder. Escitalopram does not inhibit monoamine oxidase.</p>
            </dd><dt className="col-md-2 col-sm-4">Mechanism of action</dt>
            <dd className="col-md-10 col-sm-8">
              <p>The antidepressant, antiobsessive-compulsive, and antibulimic actions of escitalopram are presumed to be linked to its inhibition of CNS neuronal uptake of serotonin. Escitalopram blocks the reuptake of serotonin at the serotonin reuptake pump of the neuronal membrane, enhancing the actions of serotonin on 5HT<sub>1A</sub> autoreceptors. SSRIs bind with significantly less affinity to histamine, acetylcholine, and norepinephrine receptors than tricyclic antidepressant drugs.</p>
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
                    <td><span className="badge badge-pill badge-yes mr-2 tips" title data-original-title="Pharmacologically Active">A</span><a href="#BE0000749">Sodium-dependent serotonin transporter</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000647">Sodium-dependent dopamine transporter</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000486">Sodium-dependent noradrenaline transporter</a></td>
                    <td>
                      <div className="label label-default">inhibitor</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000501">Alpha-1A adrenergic receptor</a></td>
                    <td>
                      <div className="label label-default">antagonist</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000092">Muscarinic acetylcholine receptor M1</a></td>
                    <td>
                      <div className="label label-default">antagonist</div>
                    </td>
                    <td>Humans</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-pill badge-unknown mr-2 tips" title data-original-title="Pharmacological Action Unknown">U</span><a href="#BE0000442">Histamine H1 receptor</a></td>
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
              <p>The absolute bioavailability of citalopram is about 80% relative to an intravenous dose.</p>
            </dd><dt className="col-md-2 col-sm-4">Volume of distribution</dt>
            <dd className="col-md-10 col-sm-8">
              <ul>
                <li>12 L/kg</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Protein binding</dt>
            <dd className="col-md-10 col-sm-8">
              <p>~56%</p>
            </dd><dt className="col-md-2 col-sm-4">Metabolism</dt>
            <dd className="col-md-10 col-sm-8">
              <p />
              <p>Mainly hepatic. Escitalopram undergoes <i>N</i>-demethylation to <i>S</i>-demethylcitalopram (S-DCT) and <i>S</i>-didemethylcitalopram (S-DDCT). CYP3A4 and CYP2C19 are the enzymes responsible for this <i>N</i>-demethylation reaction.</p>
              <p />
            </dd><dt className="col-md-2 col-sm-4">Route of elimination</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Following oral administrations of escitalopram, the fraction of drug recovered in the urine as escitalopram and <i>S</i>-demethylcitalopram (S-DCT) is about 8% and 10%, respectively. The oral clearance of escitalopram is 600 mL/min, with approximately 7% of that due to renal clearance. Escitalopram is metabolized to S-DCT and <i>S</i>-didemethylcitalopram (S-DDCT).</p>
            </dd><dt className="col-md-2 col-sm-4">Half life</dt>
            <dd className="col-md-10 col-sm-8">
              <p>27-32 hours</p>
            </dd><dt className="col-md-2 col-sm-4">Clearance</dt>
            <dd className="col-md-10 col-sm-8">
              <ul>
                <li>oral cl=600 mL/min [Following oral administrations]</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">Toxicity</dt>
            <dd className="col-md-10 col-sm-8">
              <p>Signs of overdose include convulsions, coma, dizziness, hypotension, insomnia, nausea, vomiting, sinus tachycardia, somnolence, and ECG changes (including QT prolongation). </p>
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
                    <td><a href="http://smpdb.ca/view/SMP0000425?highlight[compounds][]=DB01175&highlight[proteins][]=DB01175">Escitalopram Action Pathway</a></td>
                    <td>Drug action</td>
                  </tr>
                </tbody>
              </table>
            </dd><dt className="col-md-2 col-sm-4">Pharmacogenomic Effects/ADRs <a tabIndex={0} role="button" data-toggle="popover" data-content="SNP Mediated Pharmacological Effects and Adverse Drug Reactions (ADRs) is a compilation of drug-specific pharmacogenomic information from various sources and primary literature. — <a target=&quot;_blank&quot; href=&quot;/snp_actions&quot;>Browse all</a>" title id="snp-actions-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About SNP Mediated Effects/ADRs"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8">
              <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">=
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-sm table-bordered datatable dt-responsive dataTable no-footer dtr-inline" style={{width: '100%'}} id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '103.2px'}} aria-label="Interacting Gene/Enzyme: activate to sort column ascending">Interacting Gene/Enzyme</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '55.2px'}} aria-label="Allele name: activate to sort column ascending">Allele name</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '92.2px'}} aria-label="Genotype(s): activate to sort column ascending">Genotype(s)</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '76.2px'}} aria-label="Defining Change(s): activate to sort column ascending">Defining Change(s)</th>
                          <th className="no-sort sorting_disabled" rowSpan={1} colSpan={1} style={{width: '53.4px'}} aria-label="Type(s)">Type(s)</th>
                          <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '187.2px'}} aria-label="Description: activate to sort column ascending">Description</th>
                          <th className="no-sort sorting_disabled" rowSpan={1} colSpan={1} style={{width: '64.4px'}} aria-label="Details">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Sodium-dependent serotonin transporter</strong></td>
                          <td><span className="not-available">---</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">(A;A)</span></span>
                            </span>
                          </td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs25531">A allele</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-danger basic-tip" title="SNP-Mediated Adverse Drug Reaction">ADR</span> <span className="label label-success basic-tip" title="Directly studied, with clinical relevance">Directly Studied</span></td>
                          <td>The presence of this polymorphism in SLC6A4 may potentially be associated with increased risk of adverse events from escitalopram.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*2</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs4244285">681G&gt;A</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-success basic-tip" title="Directly studied, with clinical relevance">Directly Studied</span></td>
                          <td>The presence of this polymorphism in CYP2C19 is associated with poor metabolism of escitalopram.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*3</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs4986893">636G&gt;A</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-success basic-tip" title="Directly studied, with clinical relevance">Directly Studied</span></td>
                          <td>The presence of this polymorphism in CYP2C19 is associated with reduced or poor metabolism of escitalopram.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*2A</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs4244285">681G&gt;A</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-default basic-tip" title="Inferred relationship based on similarity of alleles">Inferred</span></td>
                          <td>Poor drug metabolizer. For individual with two non-functional alleles, alternative drug or dose reduction recommended.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*2B</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs4244285">681G&gt;A</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-default basic-tip" title="Inferred relationship based on similarity of alleles">Inferred</span></td>
                          <td>Poor drug metabolizer. For individual with two non-functional alleles, alternative drug or dose reduction recommended.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*4</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs28399504">1A&gt;G</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-default basic-tip" title="Inferred relationship based on similarity of alleles">Inferred</span></td>
                          <td>Poor drug metabolizer. For individual with two non-functional alleles, alternative drug or dose reduction recommended.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*5</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs56337013">1297C&gt;T</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-default basic-tip" title="Inferred relationship based on similarity of alleles">Inferred</span></td>
                          <td>Poor drug metabolizer. For individual with two non-functional alleles, alternative drug or dose reduction recommended.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*6</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs72552267">395G&gt;A</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-default basic-tip" title="Inferred relationship based on similarity of alleles">Inferred</span></td>
                          <td>Poor drug metabolizer. For individual with two non-functional alleles, alternative drug or dose reduction recommended.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*7</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs72558186">19294T&gt;A</a></span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-default basic-tip" title="Inferred relationship based on similarity of alleles">Inferred</span></td>
                          <td>Poor drug metabolizer. For individual with two non-functional alleles, alternative drug or dose reduction recommended.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}><strong>Cytochrome P450 2C19</strong></td>
                          <td>CYP2C19*22</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=rs140278421">557G&gt;C</a></span><span className="list-separator"> / </span><span className="separated-list-item">991A&gt;G</span></span>
                            </span>
                          </td>
                          <td><span className="label label-warning basic-tip" title="SNP-Mediated Pharmacological Effect">Effect</span> <span className="label label-default basic-tip" title="Inferred relationship based on similarity of alleles">Inferred</span></td>
                          <td>Poor drug metabolizer. For individual with two non-functional alleles, alternative drug or dose reduction recommended.</td>
                          <td className="text-sm-center"><a className="btn btn-sm btn-outline-secondary" href="javascript:void(0)">Details</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="javascript:void(0)" aria-controls="DataTables_Table_0" data-dt-idx={3} tabIndex={0} className="page-link">›</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <h2 id="interactions" className="section-header">Interactions</h2>
          <dl>
          <dt className="col-md-2 col-sm-4">Drug Interactions <a tabIndex={0} role="button" data-toggle="popover" data-content="Drug-drug interactions extracted from drug labels and scientific publications. The commercial version includes severity and basis for interaction. — <a target=&quot;_blank&quot; href=&quot;https://drugbankplus.com/data&quot;>Learn More</a>" title id="structured-interactions-info" className="drug-info-popup" href="javascript:void(0)" data-original-title="About Drug Interactions"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="nav nav-tabs drug-interaction-tabs">
                <li className="interactions index nav-item"><a className="toggle-row-display nav-link active" data-source="/drugs/DB01175/drug_interactions.json" href="#show-all">All Drugs</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB01175/drug_interactions.json?group=approved" href="#show-approved">Approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB01175/drug_interactions.json?group=vet_approved" href="#show-vet_approved">Vet approved</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB01175/drug_interactions.json?group=nutraceutical" href="#show-nutraceutical">Nutraceutical</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB01175/drug_interactions.json?group=illicit" href="#show-illicit">Illicit</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB01175/drug_interactions.json?group=withdrawn" href="#show-withdrawn">Withdrawn</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB01175/drug_interactions.json?group=investigational" href="#show-investigational">Investigational</a></li>
                <li className="interactions approved nav-item"><a className="toggle-row-display nav-link" data-source="/drugs/DB01175/drug_interactions.json?group=experimental" href="#show-experimental">Experimental</a></li>
              </ul>
              <div className="drug-interaction-table has-locked-content">
                <div id="drug-interactions_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-sm dt-responsive datatable-remote dataTable no-footer dtr-inline" data-source="/drugs/DB01175/drug_interactions.json" data-total={1820} id="drug-interactions" style={{width: '100%'}} role="grid" aria-describedby="drug-interactions_info">
                        <thead>
                          <tr role="row">
                            <th className="head-sm sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '148.2px'}} aria-label="Drug: activate to sort column ascending">Drug</th>
                            <th className="sorting" tabIndex={0} aria-controls="drug-interactions" rowSpan={1} colSpan={1} style={{width: '567.2px'}} aria-label="Interaction: activate to sort column ascending">Interaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">(R)-warfarin</a></td>
                            <td>The serum concentration of (R)-warfarin can be increased when it is combined with Escitalopram.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">(S)-Warfarin</a></td>
                            <td>The serum concentration of (S)-Warfarin can be increased when it is combined with Escitalopram.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">2,4-thiazolidinedione</a></td>
                            <td>The risk or severity of hypoglycemia can be increased when Escitalopram is combined with 2,4-thiazolidinedione.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">2,5-Dimethoxy-4-ethylamphetamine</a></td>
                            <td>The risk or severity of serotonin syndrome can be increased when Escitalopram is combined with 2,5-Dimethoxy-4-ethylamphetamine.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">2,5-Dimethoxy-4-ethylthioamphetamine</a></td>
                            <td>The risk or severity of adverse effects can be increased when 2,5-Dimethoxy-4-ethylthioamphetamine is combined with Escitalopram.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">3,5-diiodothyropropionic acid</a></td>
                            <td>The therapeutic efficacy of 3,5-diiodothyropropionic acid can be decreased when used in combination with Escitalopram.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">4-Bromo-2,5-dimethoxyamphetamine</a></td>
                            <td>The risk or severity of adverse effects can be increased when Escitalopram is combined with 4-Bromo-2,5-dimethoxyamphetamine.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">4-hydroxycoumarin</a></td>
                            <td>The metabolism of 4-hydroxycoumarin can be decreased when combined with Escitalopram.</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td tabIndex={0}><a href="javascript:void(0)">4-Methoxyamphetamine</a></td>
                            <td>The risk or severity of adverse effects can be increased when Escitalopram is combined with 4-Methoxyamphetamine.</td>
                          </tr>
                          <tr role="row" className="even">
                            <td tabIndex={0}><a href="javascript:void(0)">5-androstenedione</a></td>
                            <td>The metabolism of 5-androstenedione can be decreased when combined with Escitalopram.</td>
                          </tr>
                        </tbody>
                      </table>
                      <div id="drug-interactions_processing" className="dataTables_processing card" style={{display: 'none'}}>Processing...</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="drug-interactions_info" role="status" aria-live="polite">Showing 1 to 10 of 1,820 entries</div>
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
                          <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="drug-interactions" data-dt-idx={7} tabIndex={0} className="page-link">182</a></li>
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
                <li>Take without regard to meals.</li>
              </ul>
            </dd>
          </dl>
          <h2 id="references" className="section-header">References</h2>
          <dl>
            <dt className="col-md-2 col-sm-4">External Links</dt>
            <dd className="col-md-10 col-sm-8">
              <dl><dt className="col-md-4 col-sm-5">Human Metabolome Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.hmdb.ca/metabolites/HMDB0005028">HMDB0005028</a></dd><dt className="col-md-4 col-sm-5">PubChem Compound</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=146570">146570</a></dd><dt className="col-md-4 col-sm-5">PubChem Substance</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?sid=46507040">46507040</a></dd><dt className="col-md-4 col-sm-5">ChemSpider</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.chemspider.com/Chemical-Structure.129277.html">129277</a></dd><dt className="col-md-4 col-sm-5">BindingDB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.bindingdb.org/bind/chemsearch/marvin/MolStructure.jsp?monomerid=50302225">50302225</a></dd><dt className="col-md-4 col-sm-5">ChEBI</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=36791">36791</a></dd><dt className="col-md-4 col-sm-5">ChEMBL</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chembldb/index.php/compound/inspect/CHEMBL1508">CHEMBL1508</a></dd><dt className="col-md-4 col-sm-5">Therapeutic Targets Database</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://bidd.nus.edu.sg/group/cjttd/ZFTTDDRUG.asp?ID=DAP000741">DAP000741</a></dd><dt className="col-md-4 col-sm-5">PharmGKB</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.pharmgkb.org/drug/PA10074">PA10074</a></dd><dt className="col-md-4 col-sm-5">HET</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/pdbe-srv/pdbechem/chemicalCompound/show/68P">68P</a></dd><dt className="col-md-4 col-sm-5">Wikipedia</dt>
                <dd className="col-md-8 col-sm-7"><a target="_blank" rel="noopener noreferrer" href="http://en.wikipedia.org/wiki/Escitalopram">Escitalopram</a></dd>
              </dl>
            </dd><dt className="col-md-2 col-sm-4">ATC Codes</dt>
            <dd className="col-md-10 col-sm-8"><a data-no-turbolink="true" href="javascript:void(0)">N06AB10 — Escitalopram</a>
              <ul className="atc-drug-tree">
                <li><a data-no-turbolink="true" href="javascript:void(0)">N06AB — Selective serotonin reuptake inhibitors</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N06A — ANTIDEPRESSANTS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N06 — PSYCHOANALEPTICS</a></li>
                <li><a data-no-turbolink="true" href="javascript:void(0)">N — NERVOUS SYSTEM</a></li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">AHFS Codes</dt>
            <dd className="col-md-10 col-sm-8">
              <ul className="list-unstyled table-list">
                <li>28:16.04.20 — Selective-serotonin Reuptake Inhibitors</li>
              </ul>
            </dd><dt className="col-md-2 col-sm-4">PDB Entries</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=5i71">5i71</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=5i73">5i73</a></span><span className="list-separator"> / </span><span className="simple-separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.rcsb.org/pdb/explore.do?structureId=5i75">5i75</a></span></span>
            </dd><dt className="col-md-2 col-sm-4">FDA label</dt>
            <dd className="col-md-10 col-sm-8">
              <div id="label-reference"><a href="//s3-us-west-2.amazonaws.com/drugbank/fda_labels/DB01175.pdf?1265922799">Download</a> <span className="text-muted">(1.09 MB) </span></div>
            </dd>
          </dl>
          <h2 id="clinical-trials" className="section-header">Clinical Trials</h2>
          <dl><dt className="col-md-2 col-sm-4">Clinical Trials <a tabIndex={0} role="button" data-toggle="popover" data-content="Clinical trial data extracted from government clinical trial databases. The commercial version includes title, phase, status, dates, and conditions with associated ICD10 or MedDRA identifiers. — <a target=&quot;_blank&quot; href=&quot;https://drugbankplus.com/data&quot;>Learn More</a>" title id="clinical-trials-info" className="drug-info-popup" href="javascript:void(0);" data-original-title="About Clinical Trials"><div className="drugbank-icon icon-information"><svg className="icon" role="img" title="information"> <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#information"> </use></svg></div></a></dt>
            <dd className="col-md-10 col-sm-8">
              <div id="DataTables_Table_1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
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
                          <td>Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Depressive Disorder, Treatment-Resistant</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>0</td>
                          <td>Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Major Depressive Disorder (MDD)</a> <span>/</span> <a href="javascript:void(0)">Unipolar Depression</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>0</td>
                          <td>Unknown Status</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Premature Ejaculation</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Active Not Recruiting</td>
                          <td>Treatment</td>
                          <td><a href="javascript:void(0)">Spinal Cord Injuries (SCI)</a></td>
                          <td><a href="javascript:void(0)">2</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Cocaine Abuse</a> <span>/</span> <a href="javascript:void(0)">Dependence, Cocaine</a> <span>/</span> <a href="javascript:void(0)">Substance Abuse</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td><span className="not-available">Not Available</span></td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">4</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="javascript:void(0)">Depression</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">2</a></td>
                        </tr>
                        <tr role="row" className="odd">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Basic Science</td>
                          <td><a href="javascript:void(0)">Hepatitis C Infection</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabIndex={0}>1</td>
                          <td>Completed</td>
                          <td>Diagnostic</td>
                          <td><a href="javascript:void(0)">Healthy Volunteers</a></td>
                          <td><a href="javascript:void(0)">1</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1 to 10 of 258 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_1_previous"><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={0} tabIndex={0} className="page-link">‹</a></li>
                        <li className="paginate_button page-item active"><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item disabled" id="DataTables_Table_1_ellipsis"><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                        <li className="paginate_button page-item "><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={7} tabIndex={0} className="page-link">26</a></li>
                        <li className="paginate_button page-item next" id="DataTables_Table_1_next"><a href="javascript:void(0)" aria-controls="DataTables_Table_1" data-dt-idx={8} tabIndex={0} className="page-link">›</a></li>
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
                  <div className="col-sm-12">
                    <table className="table table-sm datatable dataTable no-footer" id="dosages" role="grid" aria-describedby="dosages_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Form: activate to sort column ascending" style={{width: '379.203px'}}>Form</th>
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Route: activate to sort column ascending" style={{width: '142.203px'}}>Route</th>
                          <th className="sorting" tabIndex={0} aria-controls="dosages" rowSpan={1} colSpan={1} aria-label="Strength: activate to sort column ascending" style={{width: '196.203px'}}>Strength</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>10 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>15 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>20 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet</td>
                          <td>Oral</td>
                          <td>5 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet, orally disintegrating</td>
                          <td>Oral</td>
                          <td>10 mg</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet, orally disintegrating</td>
                          <td>Oral</td>
                          <td>20 mg</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Tablet, coated</td>
                          <td>Oral</td>
                          <td>20 mg/1</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Solution</td>
                          <td>Oral</td>
                          <td>10 mg/10mL</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td>Solution</td>
                          <td>Oral</td>
                          <td>5 mg/5mL</td>
                        </tr>
                        <tr role="row" className="even">
                          <td>Tablet, film coated</td>
                          <td>Oral</td>
                          <td>10 mg/21</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dosages_info" role="status" aria-live="polite">Showing 1 to 10 of 18 entries</div>
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
                    <td>logP</td>
                    <td>3.5</td>
                    <td><span className="not-available">Not Available</span></td>
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
                    <td>0.00588 mg/mL</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>3.58</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>logP</td>
                    <td>3.76</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#logp_logd">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>logS</td>
                    <td>-4.7</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://www.vcclab.org/lab/alogps/">ALOGPS</a></td>
                  </tr>
                  <tr>
                    <td>pKa (Strongest Basic)</td>
                    <td>9.78</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Physiological Charge</td>
                    <td>1</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-predictors/#pka">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Acceptor Count</td>
                    <td>3</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Hydrogen Donor Count</td>
                    <td>0</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#h_bond">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polar Surface Area</td>
                    <td>36.26 Å<sup>2</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topolgical_surface">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Rotatable Bond Count</td>
                    <td>5</td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#topology_analysis">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Refractivity</td>
                    <td>94.02 m<sup>3</sup>·mol<sup>-1</sup></td>
                    <td><a href="http://www.chemaxon.com/products/calculator-plugins/property-calculations/#refractivity">ChemAxon</a></td>
                  </tr>
                  <tr>
                    <td>Polarizability</td>
                    <td>35.3 Å<sup>3</sup></td>
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
                    <td>Yes</td>
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
                    <td>0.9966</td>
                  </tr>
                  <tr>
                    <td>Blood Brain Barrier</td>
                    <td>+</td>
                    <td>0.9729</td>
                  </tr>
                  <tr>
                    <td>Caco-2 permeable</td>
                    <td>+</td>
                    <td>0.6099</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein substrate</td>
                    <td>Substrate</td>
                    <td>0.7597</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor I</td>
                    <td>Non-inhibitor</td>
                    <td>0.6361</td>
                  </tr>
                  <tr>
                    <td>P-glycoprotein inhibitor II</td>
                    <td>Inhibitor</td>
                    <td>0.9789</td>
                  </tr>
                  <tr>
                    <td>Renal organic cation transporter</td>
                    <td>Inhibitor</td>
                    <td>0.6993</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 substrate</td>
                    <td>Non-substrate</td>
                    <td>0.8401</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 substrate</td>
                    <td>Substrate</td>
                    <td>0.8919</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 substrate</td>
                    <td>Substrate</td>
                    <td>0.7407</td>
                  </tr>
                  <tr>
                    <td>CYP450 1A2 substrate</td>
                    <td>Non-inhibitor</td>
                    <td>0.9045</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C9 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.8949</td>
                  </tr>
                  <tr>
                    <td>CYP450 2D6 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.5054</td>
                  </tr>
                  <tr>
                    <td>CYP450 2C19 inhibitor</td>
                    <td>Inhibitor</td>
                    <td>0.8994</td>
                  </tr>
                  <tr>
                    <td>CYP450 3A4 inhibitor</td>
                    <td>Non-inhibitor</td>
                    <td>0.8309</td>
                  </tr>
                  <tr>
                    <td>CYP450 inhibitory promiscuity</td>
                    <td>High CYP Inhibitory Promiscuity</td>
                    <td>0.5223</td>
                  </tr>
                  <tr>
                    <td>Ames test</td>
                    <td>Non AMES toxic</td>
                    <td>0.7602</td>
                  </tr>
                  <tr>
                    <td>Carcinogenicity</td>
                    <td>Non-carcinogens</td>
                    <td>0.7452</td>
                  </tr>
                  <tr>
                    <td>Biodegradation</td>
                    <td>Not ready biodegradable</td>
                    <td>1.0</td>
                  </tr>
                  <tr>
                    <td>Rat acute toxicity</td>
                    <td>2.9054 LD50, mol/kg </td>
                    <td><span className="not-available">Not applicable</span></td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor I)</td>
                    <td>Weak inhibitor</td>
                    <td>0.7735</td>
                  </tr>
                  <tr>
                    <td>hERG inhibition (predictor II)</td>
                    <td>Inhibitor</td>
                    <td>0.8994</td>
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
                    <td><a href="javascript:void(0)">MS/MS Spectrum - , positive</a></td>
                    <td>LC-MS/MS</td>
                    <td><a target="_blank" rel="noopener noreferrer" href="http://mona.fiehnlab.ucdavis.edu/#/spectra/splash/splash10-004i-1497000000-a840cd3176ff240d74f6">splash10-004i-1497000000-a840cd3176ff240d74f6</a></td>
                  </tr>
                </tbody>
              </table>
            </dd>
          </dl>
          <h2 id="taxonomy" className="section-header">Taxonomy</h2>
          <dl><dt className="col-md-2 col-sm-4">Description</dt>
            <dd className="col-md-10 col-sm-8">This compound belongs to the class of organic compounds known as phenylbutylamines. These are compounds containing a phenylbutylamine moiety, which consists of a phenyl group substituted at the fourth carbon by an butan-1-amine.</dd><dt className="col-md-2 col-sm-4">Kingdom</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000000" data-original-title="Compounds that contain at least one carbon atom, excluding isocyanide/cyanide and their non-hydrocarbyl derivatives, thiophosgene, carbon diselenide, carbon monosulfide, carbon disulfide, carbon subsulfide, carbon monoxide, carbon dioxide, Carbon suboxide, and dicarbon monoxide.">Organic compounds</a></dd><dt className="col-md-2 col-sm-4">Super Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002448" data-original-title="Aromatic compounds containing one or more benzene rings.">Benzenoids</a></dd><dt className="col-md-2 col-sm-4">Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002279" data-original-title="Aromatic compounds containing one monocyclic ring system consisting of benzene.">Benzene and substituted derivatives</a></dd><dt className="col-md-2 col-sm-4">Sub Class</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000014" data-original-title="Compounds containing a phenylbutylamine moiety, which consists of a phenyl group substituted at the fourth carbon by an butan-1-amine.">Phenylbutylamines</a></dd><dt className="col-md-2 col-sm-4">Direct Parent</dt>
            <dd className="col-md-10 col-sm-8"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000014" data-original-title="Compounds containing a phenylbutylamine moiety, which consists of a phenyl group substituted at the fourth carbon by an butan-1-amine.">Phenylbutylamines</a></dd><dt className="col-md-2 col-sm-4">Alternative Parents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004191" data-original-title="Compounds containing the coumaran skeleton, which consists of a benzene ring fused to a 1,3-dihydrofuran ring.">Isocoumarans</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001100" data-original-title="Compounds containing one or more fluorine atoms attached to a benzene ring.">Fluorobenzenes</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0003899" data-original-title="Alkylamines in which the alkyl group is substituted at one carbon atom by an aromatic hydrocarbyl group.">Aralkylamines</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001031" data-original-title="Organic compounds containing the acyl fluoride functional group.">Aryl fluorides</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0002239" data-original-title="Organic compounds containing a trialkylamine group, characterized by exactly three alkyl groups bonded to the amino nitrogen.">Trialkylamines</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004140" data-original-title="Organic compounds containing an heterocycle with at least one oxygen atom linked to a ring carbon.">Oxacyclic compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0000362" data-original-title="Compounds having the structure RC#N; thus C-substituted derivatives of hydrocyanic acid, HC#N.">Nitriles</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001167" data-original-title="Organic compounds containing the dialkyl ether functional group, with the formula ROR', where R and R' are alkyl groups.">Dialkyl ethers</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004557" data-original-title="Compounds containing a bond between carbon a pnictogen atom. Pnictogens are p-block element atoms that are in the group 15 of the periodic table.">Organopnictogen compounds</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0001517" data-original-title="Compounds containing a chemical bond between a carbon atom and a fluorine atom.">Organofluorides</a></span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a title className="classyfire-taxnode" target="_blank" rel="noopener" href="http://classyfire.wishartlab.com/tax_nodes/C0004150" data-original-title="Derivatives of hydrocarbons obtained by substituting one or more carbon atoms by an heteroatom. They contain at least one carbon atom and heteroatom.">Hydrocarbon derivatives</a></span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 1 more</a>
            </dd><dt className="col-md-2 col-sm-4">Substituents</dt>
            <dd className="col-md-10 col-sm-8"><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Phenylbutylamine</span><span className="list-separator"> / </span><span className="separated-list-item">Isocoumaran</span><span className="list-separator"> / </span><span className="separated-list-item">Fluorobenzene</span><span className="list-separator"> / </span><span className="separated-list-item">Halobenzene</span><span className="list-separator"> / </span><span className="separated-list-item">Aralkylamine</span><span className="list-separator"> / </span><span className="separated-list-item">Aryl halide</span><span className="list-separator"> / </span><span className="separated-list-item">Aryl fluoride</span><span className="list-separator"> / </span><span className="separated-list-item">Tertiary amine</span><span className="list-separator"> / </span><span className="separated-list-item">Tertiary aliphatic amine</span><span className="list-separator"> / </span><span className="separated-list-item">Oxacycle</span></span>
              </span><span className="hidden-taxonomy" style={{display: 'none'}}><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item">Dialkyl ether</span><span className="list-separator"> / </span><span className="separated-list-item">Ether</span><span className="list-separator"> / </span><span className="separated-list-item">Carbonitrile</span><span className="list-separator"> / </span><span className="separated-list-item">Nitrile</span><span className="list-separator"> / </span><span className="separated-list-item">Organoheterocyclic compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organic oxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organopnictogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Amine</span><span className="list-separator"> / </span><span className="separated-list-item">Organohalogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organofluoride</span><span className="list-separator"> / </span><span className="separated-list-item">Organonitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organooxygen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Organic nitrogen compound</span><span className="list-separator"> / </span><span className="separated-list-item">Hydrocarbon derivative</span><span className="list-separator"> / </span><span className="separated-list-item">Aromatic heteropolycyclic compound</span></span>
                </span>
              </span>
              <a className="taxonomy-toggler" href="javascript:void();">
                <div className="drugbank-icon icon-expand">
                  <svg className="icon" role="img" title="expand">
                    <use xlinkHref="/assets/icons-fa076cc140a26b5623fdbab776fe91a41a58439c2623f9ffbc35f51bee0e78cf.svg#expand"> </use>
                  </svg>
                </div> show 15 more</a>
            </dd><dt className="col-md-2 col-sm-4">Molecular Framework</dt>
            <dd className="col-md-10 col-sm-8">Aromatic heteropolycyclic compounds</dd><dt className="col-md-2 col-sm-4">External Descriptors</dt>
            <dd className="col-md-10 col-sm-8"><span className="inline-separated-list-container"><span className="simple-separated-list-item">1-[3-(dimethylamino)propyl]-1-(4-fluorophenyl)-1,3-dihydro-2-benzofuran-5-carbonitrile (<a target="_blank" rel="noopener noreferrer" href="http://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:36791">CHEBI:36791</a>) </span></span>
            </dd>
          </dl>
          <div className="bond-list-container targets">
            <h3 id="targets">Targets</h3>
            <div className="bond-list">
              <div className="bond card" id="BE0000749">
                <div aria-hidden="true" aria-labelledby="binding properties" className="modal fade" id="BE0000749-binding-properties" role="dialog" tabIndex={-1}>
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
                                <td>1</td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="not-available">N/A</span></td>
                                <td><span className="separated-list-container row"><span className="separated-list col-sm-6"><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19720528">19720528</a></span><span className="list-separator"> / </span><span className="separated-list-item"><a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/20347298">20347298</a></span></span>
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
                  <button className="btn btn-sm btn-drugbank-secondary" data-target="#BE0000749-binding-properties" data-toggle="modal" type="button">
                    <span className="full-binding-label">Binding Properties</span></button><strong>1. <a href="javascript:void(0)">Sodium-dependent serotonin transporter</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Serotonin:sodium symporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Serotonin transporter whose primary function in the central nervous system involves the regulation of serotonergic signaling via transport of serotonin molecules from the synaptic cleft back into t...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLC6A4</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P31645">P31645</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Sodium-dependent serotonin transporter</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">70324.165 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A6418">Owens MJ, Knight DL, Nemeroff CB: Second-generation SSRIs: human monoamine transporter binding profile of escitalopram and R-fluoxetine. Biol Psychiatry. 2001 Sep 1;50(5):345-50. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/11543737">PubMed:11543737</a>] </li>
                      <li id="reference-A6419">Owens JM, Knight DL, Nemeroff CB: [Second generation SSRIS: human monoamine transporter binding profile of escitalopram and R-fluoxetine]. Encephale. 2002 Jul-Aug;28(4):350-5. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12232544">PubMed:12232544</a>] </li>
                      <li id="reference-A6420">Burke WJ: Escitalopram. Expert Opin Investig Drugs. 2002 Oct;11(10):1477-86. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12387707">PubMed:12387707</a>] </li>
                      <li id="reference-A6421">Waugh J, Goa KL: Escitalopram : a review of its use in the management of major depressive and anxiety disorders. CNS Drugs. 2003;17(5):343-62. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12665392">PubMed:12665392</a>] </li>
                      <li id="reference-A6422">Sanchez C, Bergqvist PB, Brennum LT, Gupta S, Hogg S, Larsen A, Wiborg O: Escitalopram, the S-(+)-enantiomer of citalopram, is a selective serotonin reuptake inhibitor with potent effects in animal models predictive of antidepressant and anxiolytic activities. Psychopharmacology (Berl). 2003 Jun;167(4):353-62. Epub 2003 Apr 26. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12719960">PubMed:12719960</a>] </li>
                      <li id="reference-A4337">Bareggi SR, Mundo E, Dell'Osso B, Altamura AC: The use of escitalopram beyond major depression: pharmacological aspects, efficacy and tolerability in anxiety disorders. Expert Opin Drug Metab Toxicol. 2007 Oct;3(5):741-53. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17916059">PubMed:17916059</a>] </li>
                      <li id="reference-A6423">Fabre V, Hamon M: [Mechanisms of action of antidepressants: new data from Escitalopram]. Encephale. 2003 May-Jun;29(3 Pt 1):259-65. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12876551">PubMed:12876551</a>] </li>
                      <li id="reference-A4335">Zhong H, Hansen KB, Boyle NJ, Han K, Muske G, Huang X, Egebjerg J, Sanchez C: An allosteric binding site at the human serotonin transporter mediates the inhibition of escitalopram by R-citalopram: kinetic binding studies with the ALI/VFL-SI/TT mutant. Neurosci Lett. 2009 Oct 25;462(3):207-12. doi: 10.1016/j.neulet.2009.07.030. Epub 2009 Jul 16. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19616061">PubMed:19616061</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000647">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Sodium-dependent dopamine transporter</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Monoamine transmembrane transporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Amine transporter. Terminates the action of dopamine by its high affinity sodium-dependent reuptake into presynaptic terminals.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLC6A3</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/Q01959">Q01959</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Sodium-dependent dopamine transporter</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">68494.255 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A4337">Bareggi SR, Mundo E, Dell'Osso B, Altamura AC: The use of escitalopram beyond major depression: pharmacological aspects, efficacy and tolerability in anxiety disorders. Expert Opin Drug Metab Toxicol. 2007 Oct;3(5):741-53. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17916059">PubMed:17916059</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000486">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>3. <a href="javascript:void(0)">Sodium-dependent noradrenaline transporter</a></strong></div>
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
                        <dd className="col-md-7 col-sm-6">Norepinephrine:sodium symporter activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">Amine transporter. Terminates the action of noradrenaline by its high affinity sodium-dependent reuptake into presynaptic terminals.</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">SLC6A2</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P23975">P23975</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Sodium-dependent noradrenaline transporter</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">69331.42 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A4337">Bareggi SR, Mundo E, Dell'Osso B, Altamura AC: The use of escitalopram beyond major depression: pharmacological aspects, efficacy and tolerability in anxiety disorders. Expert Opin Drug Metab Toxicol. 2007 Oct;3(5):741-53. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17916059">PubMed:17916059</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000501">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>4. <a href="javascript:void(0)">Alpha-1A adrenergic receptor</a></strong></div>
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
                          <div className="badge badge-pill badge-action">Antagonist</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Protein heterodimerization activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">This alpha-adrenergic receptor mediates its action by association with G proteins that activate a phosphatidylinositol-calcium second messenger system. Its effect is mediated by G(q) and G(11) prot...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">ADRA1A</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P35348">P35348</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Alpha-1A adrenergic receptor</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">51486.005 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A4337">Bareggi SR, Mundo E, Dell'Osso B, Altamura AC: The use of escitalopram beyond major depression: pharmacological aspects, efficacy and tolerability in anxiety disorders. Expert Opin Drug Metab Toxicol. 2007 Oct;3(5):741-53. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17916059">PubMed:17916059</a>] </li>
                      <li id="reference-A6423">Fabre V, Hamon M: [Mechanisms of action of antidepressants: new data from Escitalopram]. Encephale. 2003 May-Jun;29(3 Pt 1):259-65. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12876551">PubMed:12876551</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000092">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>5. <a href="javascript:void(0)">Muscarinic acetylcholine receptor M1</a></strong></div>
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
                          <div className="badge badge-pill badge-action">Antagonist</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Phosphatidylinositol phospholipase c activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">The muscarinic acetylcholine receptor mediates various cellular responses, including inhibition of adenylate cyclase, breakdown of phosphoinositides and modulation of potassium channels through the...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">CHRM1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P11229">P11229</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Muscarinic acetylcholine receptor M1</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">51420.375 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A4337">Bareggi SR, Mundo E, Dell'Osso B, Altamura AC: The use of escitalopram beyond major depression: pharmacological aspects, efficacy and tolerability in anxiety disorders. Expert Opin Drug Metab Toxicol. 2007 Oct;3(5):741-53. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17916059">PubMed:17916059</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0000442">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>6. <a href="javascript:void(0)">Histamine H1 receptor</a></strong></div>
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
                          <div className="badge badge-pill badge-action">Antagonist</div>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                      <dl><dt className="col-md-5 col-sm-6">General Function</dt>
                        <dd className="col-md-7 col-sm-6">Histamine receptor activity</dd><dt className="col-md-5 col-sm-6">Specific Function</dt>
                        <dd className="col-md-7 col-sm-6">In peripheral tissues, the H1 subclass of histamine receptors mediates the contraction of smooth muscles, increase in capillary permeability due to contraction of terminal venules, and catecholamin...</dd><dt className="col-md-5 col-sm-6">Gene Name</dt>
                        <dd className="col-md-7 col-sm-6">HRH1</dd><dt className="col-md-5 col-sm-6">Uniprot ID</dt>
                        <dd className="col-md-7 col-sm-6"><a target="_blank" rel="noopener noreferrer" href="http://www.uniprot.org/uniprot/P35367">P35367</a></dd><dt className="col-md-5 col-sm-6">Uniprot Name</dt>
                        <dd className="col-md-7 col-sm-6">Histamine H1 receptor</dd><dt className="col-md-5 col-sm-6">Molecular Weight</dt>
                        <dd className="col-md-7 col-sm-6">55783.61 Da</dd>
                      </dl>
                    </div>
                  </div>
                  <h5>References</h5>
                  <div className="references">
                    <ol className="cite-this-references">
                      <li id="reference-A4337">Bareggi SR, Mundo E, Dell'Osso B, Altamura AC: The use of escitalopram beyond major depression: pharmacological aspects, efficacy and tolerability in anxiety disorders. Expert Opin Drug Metab Toxicol. 2007 Oct;3(5):741-53. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/17916059">PubMed:17916059</a>] </li>
                      <li id="reference-A6423">Fabre V, Hamon M: [Mechanisms of action of antidepressants: new data from Escitalopram]. Encephale. 2003 May-Jun;29(3 Pt 1):259-65. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/12876551">PubMed:12876551</a>] </li>
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
                      <li id="reference-A14710">Preissner S, Kroll K, Dunkel M, Senger C, Goldsobel G, Kuzman D, Guenther S, Winnenburg R, Schroeder M, Preissner R: SuperCYP: a comprehensive database on Cytochrome P450 enzymes including a tool for analysis of CYP-drug interactions. Nucleic Acids Res. 2010 Jan;38(Database issue):D237-43. doi: 10.1093/nar/gkp970. Epub 2009 Nov 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19934256">PubMed:19934256</a>] </li>
                      <li id="reference-A37688">Sangkuhl K, Klein TE, Altman RB: PharmGKB summary: citalopram pharmacokinetics pathway. Pharmacogenet Genomics. 2011 Nov;21(11):769-72. doi: 10.1097/FPC.0b013e328346063f. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/21546862">PubMed:21546862</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0003536">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>2. <a href="javascript:void(0)">Cytochrome P450 2C19</a></strong></div>
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
                      <li id="reference-A38624">Bishop JR, Najjar F, Rubin LH, Guter SJ, Owley T, Mosconi MW, Jacob S, Cook EH: Escitalopram pharmacogenetics: CYP2C19 relationships with dosing and clinical outcomes in autism spectrum disorder. Pharmacogenet Genomics. 2015 Nov;25(11):548-54. doi: 10.1097/FPC.0000000000000173. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/26313485">PubMed:26313485</a>] </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bond card" id="BE0002363">
                <div className="card-header">
                  <a className="btn btn-drugbank-secondary btn-sm bond-details-link ml-3" href="javascript:void(0)">
                    Details</a><strong>3. <a href="javascript:void(0)">Cytochrome P450 2D6</a></strong></div>
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
                      <li id="reference-A14720">Baumann P: Pharmacokinetic-pharmacodynamic relationship of the selective serotonin reuptake inhibitors. Clin Pharmacokinet. 1996 Dec;31(6):444-69. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/8968657">PubMed:8968657</a>] </li>
                      <li id="reference-A14710">Preissner S, Kroll K, Dunkel M, Senger C, Goldsobel G, Kuzman D, Guenther S, Winnenburg R, Schroeder M, Preissner R: SuperCYP: a comprehensive database on Cytochrome P450 enzymes including a tool for analysis of CYP-drug interactions. Nucleic Acids Res. 2010 Jan;38(Database issue):D237-43. doi: 10.1093/nar/gkp970. Epub 2009 Nov 24. [<a target="_blank" rel="noopener noreferrer" href="http://www.ncbi.nlm.nih.gov/pubmed/19934256">PubMed:19934256</a>] </li>
                      <li id="reference-L162">Drug Interactions: Cytochrome P450 Drug Interaction Table [<a target="_blank" href="http://medicine.iupui.edu/clinpharm/ddis/table.asp">Link</a>] </li>
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
          <p className="bt-2" id="drug-meta">Drug created on June 13, 2005 07:24 / Updated on July 11, 2019 01:01 </p>
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

export default Escitalopram;
