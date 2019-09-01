import React from 'react';
import './Header.scss'

class Header extends React.Component {
  render() {
    return (
      <header role="banner" className="NavMain-StyledNavbar-module--cls1--3GekH navbar navbar-expand navbar-dark">
        <a href="http://52.79.200.208/">
          <img className="header-icon" src="https://druginteraction.s3.ap-northeast-2.amazonaws.com/bioai_logo.png" style={{width: "67px"}} alt=""/>
        </a>
        <div className="d-none d-md-flex navbar-nav header-menu" role="navigation" id="top">
          <a href="http://52.79.200.208/" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">About</a>
          <a href="http://52.79.200.208/" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">Research</a>
          <div className="dropdown show">
            <a className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="http://52.79.200.208/services/integration"> Drug Data Integration Service </a>
              <a className="dropdown-item" href="http://52.79.200.208/services/recommendation"> Drug AI Algorithm Recommendation Solution </a>
              <a className="dropdown-item" href="http://52.79.200.208/services/estimates"> Estimate your cost on Customized AI Study </a>
              <a className="dropdown-item" href="http://52.79.200.208/services/supercomputer"> Easy Supercomputer Use Service </a>
            </div>
          </div>
          <a href="http://52.79.200.208/" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">Team</a>
          <a href="http://52.79.200.208/" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">Contact</a>
        </div>
     </header>
    )
  }
}

export default Header;
