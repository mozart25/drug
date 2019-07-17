import React from 'react';
import './Navigation.scss';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      browseStatus: false,
      searchStatus: false,
      aboutStatus: false,
      helpStatus: false,
    };
  }

  handleChange1 = () => {
    this.setState(
      {
        browseStatus: !this.state.browseStatus,
        searchStatus: false,
        aboutStatus: false,
        helpStatus: false,
      }
    )
  }

  handleChange2 = () => {
    this.setState(
      {
        searchStatus: !this.state.searchStatus,
        browseStatus: false,
        aboutStatus: false,
        helpStatus: false,
      }
    )
  }

  handleChange3 = () => {
    this.setState(
      {
        aboutStatus: !this.state.aboutStatus,
        browseStatus: false,
        searchStatus: false,
        helpStatus: false,
      }
    )
  }

  handleChange4 = () => {
    this.setState(
      {
        helpStatus: !this.state.helpStatus,
        browseStatus: false,
        searchStatus: false,
        aboutStatus: false,
      }
    )
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">BioAI</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li onClick={this.handleChange1} className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Browse
              </a>
              <div className={`${this.state.browseStatus ? 'dropdown-menu show' : 'dropdown-menu'}`} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Drugs</a>
                <a className="dropdown-item" href="#">Categories</a>
                <a className="dropdown-item" href="#">Pathways</a>
                <a className="dropdown-item" href="#">Drug Reactions</a>
                <a className="dropdown-item" href="#">Drug Classification</a>
                <a className="dropdown-item" href="#">Drug Targets</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Pharmaco-gomics</a>
                <a className="dropdown-item" href="#">Pharmaco-metabolomics</a>
                <a className="dropdown-item" href="#">Pharmaco-transcriptomics</a>
                <a className="dropdown-item" href="#">Pharmaco-proteomics</a>
              </div>
            </li>
            <li onClick={this.handleChange2} className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Search
              </a>
              <div className={`${this.state.searchStatus ? 'dropdown-menu show' : 'dropdown-menu'}`} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Chemical Structure</a>
                <a className="dropdown-item" href="#">Molecular Weight</a>
                <a className="dropdown-item" href="#">Drug & Food Interactions</a>
                <a className="dropdown-item" href="#">Target Sequences</a>
                <a className="dropdown-item" href="#">Pharmaco-omics</a>
                <a className="dropdown-item" href="#">Advanced Search</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">MS Search</a>
                <a className="dropdown-item" href="#">MS/MS Search</a>
                <a className="dropdown-item" href="#">GC/MS Search</a>
                <a className="dropdown-item" href="#">1D NMR Search</a>
                <a className="dropdown-item" href="#">2D NMR Search</a>

              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Downloads <span className="sr-only">(current)</span></a>
            </li>
            <li onClick={this.handleChange3} className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className={`${this.state.aboutStatus ? 'dropdown-menu show' : 'dropdown-menu'}`} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">About DrugBank</a>
                <a className="dropdown-item" href="#">Statistics</a>
                <a className="dropdown-item" href="#">Other Databases</a>
                <a className="dropdown-item" href="#">Drug Reactions</a>
                <a className="dropdown-item" href="#">Data Sources</a>
                <a className="dropdown-item" href="#">New Archive</a>
                <a className="dropdown-item" href="#">Wishart Research Group</a>
              </div>
            </li>
            <li onClick={this.handleChange4} className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Help
              </a>
              <div className={`${this.state.helpStatus ? 'dropdown-menu show' : 'dropdown-menu'}`} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Citing DrugBank</a>
                <a className="dropdown-item" href="#">Help Center</a>
                <a className="dropdown-item" href="#">FAQ</a>
                <a className="dropdown-item" href="#">Searching DrugBank</a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Blog<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Contact Us <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
